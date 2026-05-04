import { Rule, CATEGORIES, PRIORITY_LABEL } from "./types.js";

export function formatRule(rule: Rule): string {
  const lines: string[] = [];

  lines.push(`# ${rule.title}`);
  lines.push(
    `**Category:** ${CATEGORIES[rule.category] ?? rule.category}  |  **Priority:** ${PRIORITY_LABEL[rule.priority] ?? rule.priority}  |  **ID:** \`${rule.id}\``
  );

  if (rule.tags?.length) {
    lines.push(`**Tags:** ${rule.tags.map((t) => `\`${t}\``).join(", ")}`);
  }

  lines.push("");
  lines.push(`## TL;DR`);
  lines.push(rule.tldr);
  lines.push("");

  if (rule.theRule?.length) {
    lines.push("## The Rule");
    rule.theRule.forEach((r) => lines.push(`- ${r}`));
    lines.push("");
  }

  if (rule.why?.length) {
    lines.push("## Why");
    rule.why.forEach((w) => lines.push(`- ${w}`));
    lines.push("");
  }

  if (rule.whenItBreaks?.length) {
    lines.push("## When It Breaks");
    rule.whenItBreaks.forEach((w) => lines.push(`- ${w}`));
    lines.push("");
  }

  if (rule.inPractice?.length) {
    lines.push("## In Practice");
    rule.inPractice.forEach((p) => lines.push(`- ${p}`));
    lines.push("");
  }

  if (rule.keyNumbers?.length) {
    lines.push("## Key Numbers");
    rule.keyNumbers.forEach((k) => lines.push(`- **${k.value}** — ${k.label}`));
    lines.push("");
  }

  if (rule.related_rules?.length) {
    lines.push("## Related Rules");
    rule.related_rules.forEach((id) => lines.push(`- \`${id}\``));
    lines.push("");
  }

  if (rule.sources?.length) {
    lines.push("## Sources");
    rule.sources.forEach((s) =>
      lines.push(`- ${s.label}${s.year ? ` (${s.year})` : ""}`)
    );
    lines.push("");
  }

  if (rule.videoUrls && Object.keys(rule.videoUrls).length > 0) {
    lines.push("## designparser Videos");
    Object.entries(rule.videoUrls).forEach(([platform, url]) =>
      lines.push(`- [${platform}](${url})`)
    );
    lines.push("");
  }

  return lines.join("\n");
}

export function formatRuleShort(rule: Rule): string {
  const tags = rule.tags?.length ? ` · ${rule.tags.map((t) => `\`${t}\``).join(" ")}` : "";
  return `### ${rule.title} (\`${rule.id}\`)\n${PRIORITY_LABEL[rule.priority] ?? rule.priority} · **${CATEGORIES[rule.category] ?? rule.category}**${tags}\n${rule.tldr}\n`;
}
