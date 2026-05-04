import { Rule, PRIORITY_MAP } from "./types.js";
import type { LoadedRule } from "./loader.js";

// --- Fuzzy score between a haystack string and a needle ---

function score(haystack: string, needle: string): number {
  const h = haystack.toLowerCase();
  const n = needle.toLowerCase();

  if (h === n) return 100;
  if (h.startsWith(n)) return 80;
  if (h.includes(n)) return 60;

  // Fuzzy: all chars of needle appear in order in haystack
  let hi = 0, ni = 0, consecutive = 0, total = 0;
  while (hi < h.length && ni < n.length) {
    if (h[hi] === n[ni]) { consecutive++; total += consecutive; ni++; }
    else { consecutive = 0; }
    hi++;
  }
  if (ni < n.length) return 0;
  return Math.min(50, Math.floor((total / (n.length * n.length)) * 50));
}

function scoreStrict(haystack: string, needle: string): number {
  const h = haystack.toLowerCase();
  const n = needle.toLowerCase();
  if (h === n) return 100;
  if (h.startsWith(n)) return 80;
  if (h.includes(n)) return 60;
  return 0;
}

function ruleScore(rule: LoadedRule, query: string): number {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);

  let best = 0;
  for (const term of terms) {
    const s = Math.max(
      score(rule.title, term) * 4,
      score(rule.id, term) * 2,
      score(rule.tldr, term) * 3,
      score(rule.category, term) * 1.5,
      ...(rule.tags ?? []).map((t) => score(t, term) * 2),
      ...(rule.theRule ?? []).map((r) => score(r, term)),
      ...(rule.why ?? []).map((w) => score(w, term)),
      ...(rule.inPractice ?? []).map((p) => score(p, term)),
      rule._bodyText ? scoreStrict(rule._bodyText, term) * 0.5 : 0,
    );
    best += s;
  }
  return best;
}

export function searchRules(rules: LoadedRule[], query: string): LoadedRule[] {
  const threshold = 10;
  return rules
    .map((rule) => ({ rule, s: ruleScore(rule, query) }))
    .filter(({ s }) => s >= threshold)
    .sort((a, b) => {
      if (b.s !== a.s) return b.s - a.s;
      return (PRIORITY_MAP.get(a.rule.priority) ?? 99) - (PRIORITY_MAP.get(b.rule.priority) ?? 99);
    })
    .map(({ rule }) => rule)
    .slice(0, 10);
}

// --- Context-aware suggestion ---

const CONTEXT_HINTS: Array<{
  keywords: string[];
  ruleIds?: string[];
  categories?: string[];
  tags?: string[];
}> = [
  {
    keywords: ["nav", "navigation", "menu", "sidebar"],
    ruleIds: ["millers-law", "hicks-law", "jakobs-law"],
    categories: ["interaction"],
    tags: ["navigation"],
  },
  {
    keywords: ["button", "cta", "call to action"],
    ruleIds: ["button-design", "button-padding", "touch-target", "wcag-contrast"],
    tags: ["button"],
  },
  {
    keywords: ["color", "palette", "colour", "brand color"],
    categories: ["color"],
    tags: ["color"],
  },
  {
    keywords: ["text", "font", "typography", "typeface", "heading", "body copy"],
    categories: ["typography"],
    tags: ["typography", "reading"],
  },
  {
    keywords: ["spacing", "padding", "margin", "gap", "layout", "grid"],
    categories: ["spacing"],
    tags: ["spacing", "layout"],
  },
  {
    keywords: ["card", "elevation", "depth", "shadow"],
    categories: ["shadows"],
    tags: ["shadow", "card"],
  },
  {
    keywords: ["icon", "pictogram", "glyph"],
    categories: ["icons"],
    tags: ["icon"],
  },
  {
    keywords: ["dashboard", "data", "chart", "graph", "table"],
    ruleIds: ["pie-chart-problem", "millers-law", "subitizing", "emphasis"],
    tags: ["data-dense", "table"],
  },
  {
    keywords: ["landing page", "hero", "above the fold"],
    ruleIds: ["rule-of-thirds", "optical-center", "emphasis", "banner-blindness"],
    tags: ["marketing", "conversion"],
  },
  {
    keywords: ["form", "input", "field", "signup"],
    ruleIds: ["touch-target", "link-design", "millers-law", "default-effect"],
    tags: ["form", "input"],
  },
  {
    keywords: ["mobile", "responsive", "touch", "tap"],
    ruleIds: ["touch-target", "button-padding", "8pt-grid"],
    tags: ["mobile"],
  },
  {
    keywords: ["contrast", "accessibility", "a11y", "wcag"],
    ruleIds: ["wcag-contrast", "greyscale"],
    tags: ["accessibility"],
  },
  {
    keywords: ["packaging", "print", "bleed", "dieline"],
    categories: ["print"],
    tags: ["print"],
  },
  {
    keywords: ["onboarding", "flow", "ux", "user experience"],
    ruleIds: ["peak-end-rule", "default-effect", "jakobs-law", "hicks-law"],
    tags: ["onboarding"],
  },
  {
    keywords: ["branding", "logo", "identity"],
    tags: ["branding"],
    ruleIds: ["60-30-10", "color-psychology", "visual-weight"],
  },
  {
    keywords: ["modal", "dialog", "popup", "overlay"],
    ruleIds: ["millers-law", "button-design", "emphasis"],
    tags: ["modal"],
  },
];

export function suggestRulesForContext(rules: LoadedRule[], task: string): LoadedRule[] {
  const lower = task.toLowerCase();
  const matched = new Set<string>();

  for (const hint of CONTEXT_HINTS) {
    const hit = hint.keywords.some((kw) => lower.includes(kw));
    if (!hit) continue;

    hint.ruleIds?.forEach((id) => matched.add(id));

    if (hint.categories) {
      rules
        .filter((r) => hint.categories!.includes(r.category))
        .forEach((r) => matched.add(r.id));
    }

    // Tag-based matching: find rules whose tags overlap with hint tags
    if (hint.tags) {
      rules
        .filter((r) => r.tags?.some((t) => hint.tags!.includes(t)))
        .forEach((r) => matched.add(r.id));
    }
  }

  // Fuzzy fallback if no hints matched
  if (matched.size === 0) {
    return searchRules(rules, task).slice(0, 8);
  }

  // Sort matched rules by priority, fill with fuzzy extras if under 4
  const base = rules
    .filter((r) => matched.has(r.id))
    .sort((a, b) => (PRIORITY_MAP.get(a.priority) ?? 99) - (PRIORITY_MAP.get(b.priority) ?? 99));

  if (base.length < 4) {
    const extra = searchRules(rules, task)
      .filter((r) => !matched.has(r.id))
      .slice(0, 6 - base.length);
    return [...base, ...extra];
  }

  return base.slice(0, 10);
}
