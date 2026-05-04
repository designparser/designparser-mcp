export interface RuleSource {
  label: string;
  year?: string;
}

export type Priority = "critical" | "high" | "medium" | "low";

export const PRIORITY_ORDER: Priority[] = ["critical", "high", "medium", "low"];

export const PRIORITY_MAP = new Map<Priority, number>(
  PRIORITY_ORDER.map((p, i) => [p, i])
);

export const PRIORITY_LABEL: Record<Priority, string> = {
  critical: "🔴 Critical",
  high: "🟠 High",
  medium: "🟡 Medium",
  low: "🟢 Low",
};

// Controlled tag vocabulary — add new tags here before using them in rules
export const VALID_TAGS = [
  // Platform
  "web", "mobile", "desktop", "print", "native",
  // Context
  "accessibility", "typography", "color", "spacing", "layout",
  "interaction", "icons", "visual", "ux-law", "conversion",
  // Audience / goal
  "reading", "branding", "data-dense", "marketing", "onboarding",
  // Component
  "button", "form", "navigation", "card", "table", "modal",
  "link", "input", "icon", "shadow",
] as const;

export type Tag = typeof VALID_TAGS[number];

export interface Rule {
  id: string;
  title: string;
  category: string;
  priority: Priority;
  tldr: string;
  tags?: string[];
  related_rules?: string[];
  videoUrls?: Record<string, string>;
  sources?: RuleSource[];
  // content sections (structured)
  theRule?: string[];
  why?: string[];
  whenItBreaks?: string[];
  inPractice?: string[];
  keyNumbers?: { value: string; label: string }[];
}

export const CATEGORIES: Record<string, string> = {
  color: "Color",
  typography: "Typography",
  spacing: "Spacing",
  shadows: "Shadows & Depth",
  "ux-laws": "UX Laws",
  interaction: "Interaction",
  icons: "Icons",
  visual: "Visual Perception",
  print: "Print & Production",
};
