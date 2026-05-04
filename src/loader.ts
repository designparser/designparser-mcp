import * as fs from "fs";
import * as path from "path";
import yaml from "js-yaml";
import { Rule, CATEGORIES, VALID_TAGS } from "./types.js";

export type LoadedRule = Rule & { _bodyText: string };

// --- Known body sections ---

const KNOWN_SECTIONS = new Set([
  "The Rule", "Why", "When It Breaks", "In Practice", "Key Numbers",
  // Allowed extras (not structured, but included in full-text)
  "Examples", "Anti-Patterns", "References", "Video", "Notes",
]);

// --- Parse markdown body into sections ---

function parseBody(
  body: string,
  onUnknownSection: (sectionHeading: string) => void
): Omit<Partial<LoadedRule>, "_bodyText"> & { _bodyText: string } {
  const result: Omit<Partial<LoadedRule>, "_bodyText"> & { _bodyText: string } = { _bodyText: body.trim() };
  const sections = body.split(/\n(?=## )/);

  for (const section of sections) {
    if (!section.trim()) continue;
    const lines = section.trim().split("\n");
    const firstLine = lines[0].replace(/^## /, "").trim();
    const bullets = lines
      .slice(1)
      .filter((l) => l.trim().startsWith("- "))
      .map((l) => l.replace(/^-\s+/, "").trim());

    switch (firstLine) {
      case "The Rule":
        result.theRule = bullets;
        break;
      case "Why":
        result.why = bullets;
        break;
      case "When It Breaks":
        result.whenItBreaks = bullets;
        break;
      case "In Practice":
        result.inPractice = bullets;
        break;
      case "Key Numbers":
        result.keyNumbers = bullets.map((b) => {
          const m = b.match(/^\*\*(.+?)\*\*\s*[—-]\s*(.+)$/);
          return m ? { value: m[1], label: m[2] } : { value: b, label: "" };
        });
        break;
      // Known extras: silently included in _bodyText, no structured extract
      default:
        if (!KNOWN_SECTIONS.has(firstLine)) {
          onUnknownSection(firstLine);
        }
    }
  }

  return result;
}

// --- Main loader ---

export function loadRules(rulesDir: string): LoadedRule[] {
  const rules: LoadedRule[] = [];
  const errors: string[] = [];
  const unknownSectionsByHeading = new Map<string, number>();

  for (const category of Object.keys(CATEGORIES)) {
    const catDir = path.join(rulesDir, category);
    if (!fs.existsSync(catDir)) continue;

    const files = fs.readdirSync(catDir).filter((f) => f.endsWith(".md"));

    for (const file of files) {
      const filePath = path.join(catDir, file);
      const raw = fs.readFileSync(filePath, "utf-8");

      // Split frontmatter
      const fmMatch = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
      if (!fmMatch) {
        errors.push(`${filePath}: missing or malformed frontmatter`);
        continue;
      }

      let meta: Record<string, unknown>;
      try {
        meta = (yaml.load(fmMatch[1]) as Record<string, unknown>) ?? {};
      } catch (e) {
        errors.push(`${filePath}: YAML parse error — ${(e as Error).message}`);
        continue;
      }

      // Hard-fail on required fields (same as validator)
      const required = ["id", "title", "category", "priority", "tldr"];
      const missing = required.filter((f) => !meta[f]);
      if (missing.length > 0) {
        errors.push(`${filePath}: missing required fields: ${missing.join(", ")}`);
        continue;
      }

      const rawPriority = meta.priority as string;
      const priority = (["critical", "high", "medium", "low"].includes(rawPriority)
        ? rawPriority
        : "medium") as Rule["priority"];

      const body = fmMatch[2];
      const sections = parseBody(body, (heading) => {
        unknownSectionsByHeading.set(heading, (unknownSectionsByHeading.get(heading) ?? 0) + 1);
      });

      const id = meta.id as string;
      const category = meta.category as string;
      const tags = meta.tags as string[] | undefined;

      if (rules.find((r) => r.id === id)) {
        errors.push(`${filePath}: duplicate id "${id}"`);
        continue;
      }

      if (!CATEGORIES[category]) {
        errors.push(`${filePath}: unknown category "${category}". Valid: ${Object.keys(CATEGORIES).join(", ")}`);
        continue;
      }

      if (tags) {
        const validTagSet = new Set<string>(VALID_TAGS);
        const badTags = tags.filter((t) => !validTagSet.has(t));
        if (badTags.length > 0) {
          errors.push(`${filePath}: unknown tag(s): ${badTags.join(", ")}. Add to VALID_TAGS in types.ts first.`);
          continue;
        }
      }

      const rule: LoadedRule = {
        id,
        title: meta.title as string,
        category,
        priority,
        tldr: meta.tldr as string,
        ...(tags ? { tags } : {}),
        ...(meta.related_rules ? { related_rules: meta.related_rules as string[] } : {}),
        ...(meta.videoUrls ? { videoUrls: meta.videoUrls as Record<string, string> } : {}),
        ...(meta.sources
          ? {
              sources: (meta.sources as Array<{ label: string; year?: string }>).map((s) => ({
                label: s.label,
                year: s.year,
              })),
            }
          : {}),
        ...sections,
      } as LoadedRule;

      rules.push(rule);
    }
  }

  if (unknownSectionsByHeading.size > 0) {
    const summary = [...unknownSectionsByHeading.entries()]
      .sort((a, b) => b[1] - a[1])
      .map(([heading, count]) => `"${heading}" (${count})`)
      .join(", ");
    console.warn(
      `[designparser-mcp] Rule section notice: unknown "## <section>" heading(s) detected (${summary}). ` +
        `They will be included in full-text search only.`
    );
  }

  if (errors.length > 0) {
    console.error(`[designparser-mcp] ${errors.length} rule(s) failed to load:`);
    errors.forEach((e) => console.error(`  → ${e}`));
  }

  return rules;
}
