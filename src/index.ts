#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  ListPromptsRequestSchema,
  GetPromptRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath, URL } from "url";

import { loadRules, type LoadedRule } from "./loader.js";
import { searchRules, suggestRulesForContext } from "./search.js";
import { formatRule, formatRuleShort } from "./formatter.js";
import { CATEGORIES, PRIORITY_ORDER, PRIORITY_MAP, PRIORITY_LABEL } from "./types.js";

const { version } = JSON.parse(
  fs.readFileSync(new URL("../../package.json", import.meta.url), "utf-8")
);

// --- Resolve paths (ESM-safe) ---

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function resolveRulesDir(fromDir: string): string {
  const candidates = [
    path.join(fromDir, "..", "rules"),
    path.join(fromDir, "..", "..", "rules"),
  ];
  for (const dir of candidates) {
    if (fs.existsSync(dir) && fs.statSync(dir).isDirectory()) return dir;
  }
  throw new Error(
    `rules/ directory not found. Tried:\n${candidates.map((c) => `  ${c}`).join("\n")}`
  );
}

const rulesDir = resolveRulesDir(__dirname);

// --- Load all rules at startup ---

let allRules: LoadedRule[] = loadRules(rulesDir);
let ruleById: Map<string, LoadedRule> = new Map(allRules.map((r) => [r.id, r]));
console.error(`[designparser-mcp] Loaded ${allRules.length} rules from ${rulesDir}`);

// --- Hot-reload rules on file changes ---

let reloadTimer: ReturnType<typeof setTimeout> | null = null;
fs.watch(rulesDir, { recursive: true }, (_event, filename) => {
  if (!filename?.endsWith(".md")) return;
  if (reloadTimer) clearTimeout(reloadTimer);
  reloadTimer = setTimeout(() => {
    try {
      const fresh = loadRules(rulesDir);
      allRules = fresh;
      ruleById = new Map(fresh.map((r) => [r.id, r]));
      console.error(`[designparser-mcp] Reloaded ${fresh.length} rules`);
    } catch (e) {
      console.error(`[designparser-mcp] Reload failed — fix the error above and save again`);
    }
  }, 300);
});

// --- MCP Server ---

const server = new Server(
  { name: "designparser-mcp", version },
  { capabilities: { tools: {}, prompts: {} } }
);

// --- Tool definitions ---

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "list_rules",
      description:
        "List all available design rules, optionally filtered by category. Returns IDs and TL;DRs grouped by category.",
      inputSchema: {
        type: "object",
        properties: {
          category: {
            type: "string",
            description: `Filter by category key. Available: ${Object.keys(CATEGORIES).join(", ")}. Leave empty to list all.`,
          },
        },
      },
    },
    {
      name: "get_rule",
      description:
        "Get the full content of a specific design rule — deep dive, examples, key numbers, sources, and designparser video links.",
      inputSchema: {
        type: "object",
        properties: {
          id: {
            type: "string",
            description:
              'Rule ID, e.g. "60-30-10", "wcag-contrast", "millers-law". Use list_rules or search_rules to discover IDs.',
          },
        },
        required: ["id"],
      },
    },
    {
      name: "search_rules",
      description:
        "Fuzzy-search across all design rules by keyword. Searches title, TL;DR, rule text and practical guidance. Returns ranked results.",
      inputSchema: {
        type: "object",
        properties: {
          query: {
            type: "string",
            description:
              'Search term(s), e.g. "contrast", "font size", "touch target", "whitespace", "nav menu"',
          },
        },
        required: ["query"],
      },
    },
    {
      name: "suggest_rules_for_context",
      description:
        "Given a design task or context description, returns the most relevant design rules to apply. Use this before evaluating a design or starting a design task.",
      inputSchema: {
        type: "object",
        properties: {
          task: {
            type: "string",
            description:
              'Describe what you are designing or evaluating. E.g. "designing a mobile navigation bar", "building a landing page hero section", "choosing colors for a dashboard", "reviewing a form with multiple inputs"',
          },
        },
        required: ["task"],
      },
    },
    {
      name: "evaluate_design",
      description:
        "Evaluate a design description, screenshot context, HTML/CSS, or Figma output against relevant design rules. Returns a structured checklist of which rules apply, what to check, and what violations to look for. The AI then applies this to the actual design.",
      inputSchema: {
        type: "object",
        properties: {
          context: {
            type: "string",
            description:
              "Description of the design being evaluated. Can include: what you see in a screenshot, pasted HTML/CSS, a Figma description, or a plain-text description of the UI.",
          },
          focus: {
            type: "string",
            description:
              'Optional. Narrow the evaluation to a specific area: "color", "typography", "spacing", "interaction", "accessibility". Leave empty for a full audit.',
          },
        },
        required: ["context"],
      },
    },
  ],
}));

// --- Tool handlers ---

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  // --- list_rules ---
  if (name === "list_rules") {
    const filterKey = (args?.category as string | undefined)
      ?.toLowerCase()
      .trim();

    if (filterKey && !CATEGORIES[filterKey]) {
      return {
        content: [
          {
            type: "text",
            text: `Unknown category "${filterKey}". Available: ${Object.keys(CATEGORIES).join(", ")}`,
          },
        ],
      };
    }

    const grouped: Record<string, typeof allRules> = {};
    for (const rule of allRules) {
      if (filterKey && rule.category !== filterKey) continue;
      if (!grouped[rule.category]) grouped[rule.category] = [];
      grouped[rule.category].push(rule);
    }

    const filteredCount = Object.values(grouped).reduce((sum, r) => sum + r.length, 0);
    const categoryCount = Object.keys(grouped).length;
    const lines: string[] = [
      `# designparser — Design Rules`,
      `${filteredCount} rules across ${categoryCount} categories.\n`,
      `Use \`get_rule\` with any ID for full details.\n`,
    ];

    for (const [catKey, rules] of Object.entries(grouped)) {
      lines.push(`\n## ${CATEGORIES[catKey] ?? catKey}`);
      for (const r of rules) {
        lines.push(`- **\`${r.id}\`** — ${r.title}: ${r.tldr}`);
      }
    }

    return { content: [{ type: "text", text: lines.join("\n") }] };
  }

  // --- get_rule ---
  if (name === "get_rule") {
    const id = (args?.id as string | undefined)?.toLowerCase().trim();
    if (!id) {
      return {
        content: [{ type: "text", text: "Provide a rule ID. Use `list_rules` to browse." }],
      };
    }

    const rule = ruleById.get(id);
    if (!rule) {
      const suggestions = searchRules(allRules, id)
        .slice(0, 5)
        .map((r) => `\`${r.id}\` — ${r.title}`)
        .join("\n");

      return {
        content: [
          {
            type: "text",
            text:
              `Rule "${id}" not found.\n\n` +
              (suggestions
                ? `Did you mean one of these?\n${suggestions}`
                : `Use \`list_rules\` to see all available rules.`),
          },
        ],
      };
    }

    return { content: [{ type: "text", text: formatRule(rule) }] };
  }

  // --- search_rules ---
  if (name === "search_rules") {
    const query = (args?.query as string | undefined)?.trim();
    if (!query) {
      return { content: [{ type: "text", text: "Provide a search query." }] };
    }

    const matches = searchRules(allRules, query);
    if (matches.length === 0) {
      return {
        content: [
          {
            type: "text",
            text: `No rules found for "${query}".\n\nTry: contrast, font, spacing, button, color, grid, shadow, touch, whitespace, nav`,
          },
        ],
      };
    }

    const output = [
      `# Search: "${query}" — ${matches.length} result(s)\n`,
      `Use \`get_rule\` with an ID for full details.\n`,
      ...matches.map(formatRuleShort),
    ];

    return { content: [{ type: "text", text: output.join("\n") }] };
  }

  // --- suggest_rules_for_context ---
  if (name === "suggest_rules_for_context") {
    const task = (args?.task as string | undefined)?.trim();
    if (!task) {
      return { content: [{ type: "text", text: "Describe your design task." }] };
    }

    const suggestions = suggestRulesForContext(allRules, task);
    if (suggestions.length === 0) {
      return {
        content: [
          {
            type: "text",
            text: `No specific rules matched for "${task}". Try \`search_rules\` with keywords from your task.`,
          },
        ],
      };
    }

    const lines = [
      `# Relevant rules for: "${task}"`,
      ``,
      `${suggestions.length} rules identified. Use \`get_rule\` for full details on any of them.\n`,
      ...suggestions.map(formatRuleShort),
    ];

    return { content: [{ type: "text", text: lines.join("\n") }] };
  }

  // --- evaluate_design ---
  if (name === "evaluate_design") {
    const context = (args?.context as string | undefined)?.trim();
    const focus = (args?.focus as string | undefined)?.toLowerCase().trim();

    if (!context) {
      return {
        content: [{ type: "text", text: "Provide a design context or description to evaluate." }],
      };
    }

    const focusCatMap: Record<string, string> = {
      color: "color", colour: "color",
      typography: "typography", type: "typography",
      spacing: "spacing", layout: "spacing",
      interaction: "interaction",
      icons: "icons",
    };
    const focusTagMap: Record<string, string> = {
      accessibility: "accessibility",
      a11y: "accessibility",
    };

    const relevant = suggestRulesForContext(allRules, context + (focus ? ` ${focus}` : ""));
    const filtered = focus
      ? focusTagMap[focus]
        ? relevant.filter((r) => r.tags?.includes(focusTagMap[focus]))
        : focusCatMap[focus]
          ? relevant.filter((r) => r.category === focusCatMap[focus])
          : relevant
      : relevant;
    const rules = filtered.length > 0 ? filtered : relevant;

    // Sort by priority: critical → high → medium → low
    const byPriority = PRIORITY_ORDER.map((p) => rules.filter((r) => r.priority === p));

    // Build category scores: count critical/high issues per category
    const categoryScores: Record<string, { total: number; critical: number; high: number }> = {};
    for (const rule of rules) {
      if (!categoryScores[rule.category]) {
        categoryScores[rule.category] = { total: 0, critical: 0, high: 0 };
      }
      categoryScores[rule.category].total++;
      if (rule.priority === "critical") categoryScores[rule.category].critical++;
      if (rule.priority === "high") categoryScores[rule.category].high++;
    }

    // Format checklist section per priority level
    const sections: string[] = [];
    for (const [idx, priorityRules] of byPriority.entries()) {
      if (priorityRules.length === 0) continue;
      const p = PRIORITY_ORDER[idx];
      sections.push(`## ${PRIORITY_LABEL[p]} — ${priorityRules.length} rule(s) to check\n`);

      for (const rule of priorityRules) {
        const checks = [
          ...(rule.theRule?.slice(0, 2) ?? []),
          ...(rule.whenItBreaks?.slice(0, 1) ?? []),
        ].slice(0, 3);

        sections.push([
          `### ${rule.title} (\`${rule.id}\`)`,
          `> ${rule.tldr}`,
          ...checks.map((c) => `- [ ] ${c}`),
          "",
        ].join("\n"));
      }
    }

    // Category overview
    const catOverview = Object.entries(categoryScores)
      .map(([cat, s]) => {
        const flags = s.critical > 0 ? " ⚠ critical" : s.high > 0 ? " · high priority" : "";
        return `- **${CATEGORIES[cat] ?? cat}** — ${s.total} rule(s)${flags}`;
      })
      .join("\n");

    const lines = [
      `# Design Evaluation`,
      focus ? `**Focus:** ${focus}` : `**Scope:** Full audit`,
      `**Rules applied:** ${rules.length} across ${Object.keys(categoryScores).length} categories`,
      ``,
      `### Categories checked`,
      catOverview,
      ``,
      `---`,
      ``,
      ...sections,
      `---`,
      ``,
      `**How to use this checklist:**`,
      `- Work top-down — fix critical issues first`,
      `- Use \`get_rule <id>\` for full details, key numbers, and sources`,
      `- Re-run evaluate_design after fixing critical issues to see what changes`,
    ];

    return { content: [{ type: "text", text: lines.join("\n") }] };
  }

  return {
    content: [{ type: "text", text: `Unknown tool: ${name}` }],
    isError: true,
  };
});

// --- Prompt definitions ---

const PROMPTS = [
  {
    name: "review-design",
    description: "Evaluate a design against relevant design rules. Paste a description, HTML/CSS, or Figma output.",
    arguments: [
      { name: "context", description: "The design to evaluate — description, HTML/CSS, or Figma output.", required: true },
      { name: "focus", description: "Optional: narrow to a specific area — color, typography, spacing, interaction, accessibility.", required: false },
    ],
  },
  {
    name: "suggest-rules",
    description: "Get the most relevant design rules for a task before you start designing.",
    arguments: [
      { name: "task", description: "Describe what you are designing, e.g. 'mobile navigation bar' or 'landing page hero'.", required: true },
    ],
  },
  {
    name: "search-rules",
    description: "Search all design rules by keyword.",
    arguments: [
      { name: "query", description: "Search term, e.g. 'contrast', 'font size', 'touch target'.", required: true },
    ],
  },
  {
    name: "get-rule",
    description: "Get the full deep-dive for a specific design rule by ID.",
    arguments: [
      { name: "id", description: "Rule ID, e.g. '60-30-10', 'wcag-contrast', 'millers-law'.", required: true },
    ],
  },
  {
    name: "list-rules",
    description: "List all available design rules, optionally filtered by category.",
    arguments: [
      { name: "category", description: `Optional category filter: ${Object.keys(CATEGORIES).join(", ")}.`, required: false },
    ],
  },
];

server.setRequestHandler(ListPromptsRequestSchema, async () => ({ prompts: PROMPTS }));

server.setRequestHandler(GetPromptRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  if (name === "review-design") {
    const context = args?.context ?? "";
    const focus = args?.focus ? ` Focus on: ${args.focus}.` : "";
    return {
      description: PROMPTS.find((p) => p.name === name)!.description,
      messages: [
        {
          role: "user",
          content: {
            type: "text",
            text: `Please evaluate this design using the evaluate_design tool.\n\nDesign: ${context}${focus}`,
          },
        },
      ],
    };
  }

  if (name === "suggest-rules") {
    const task = args?.task ?? "";
    return {
      description: PROMPTS.find((p) => p.name === name)!.description,
      messages: [
        {
          role: "user",
          content: {
            type: "text",
            text: `Please suggest relevant design rules for this task using the suggest_rules_for_context tool.\n\nTask: ${task}`,
          },
        },
      ],
    };
  }

  if (name === "search-rules") {
    const query = args?.query ?? "";
    return {
      description: PROMPTS.find((p) => p.name === name)!.description,
      messages: [
        {
          role: "user",
          content: {
            type: "text",
            text: `Please search for design rules using the search_rules tool.\n\nQuery: ${query}`,
          },
        },
      ],
    };
  }

  if (name === "get-rule") {
    const id = args?.id ?? "";
    return {
      description: PROMPTS.find((p) => p.name === name)!.description,
      messages: [
        {
          role: "user",
          content: {
            type: "text",
            text: `Please get the full details for this design rule using the get_rule tool.\n\nRule ID: ${id}`,
          },
        },
      ],
    };
  }

  if (name === "list-rules") {
    const category = args?.category ? ` Filter by category: ${args.category}.` : "";
    return {
      description: PROMPTS.find((p) => p.name === name)!.description,
      messages: [
        {
          role: "user",
          content: {
            type: "text",
            text: `Please list all available design rules using the list_rules tool.${category}`,
          },
        },
      ],
    };
  }

  throw new Error(`Prompt not found: ${name}`);
});

// --- Start ---

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("[designparser-mcp] Server running on stdio");
}

main().catch((err) => {
  console.error("[designparser-mcp] Fatal error:", err);
  process.exit(1);
});
