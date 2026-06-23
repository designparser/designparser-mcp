---
id: "corner-radius-tone"
title: "Corner Radius Tone"
category: "visual"
priority: "low"
tldr: "0–2px reads as formal or technical; 4–8px as neutral; 12–24px as friendly; 32px or full pill as energetic. Design convention. Inconsistency within a component tier weakens the perceived system consistency."
tags:
  - web
  - visual
  - branding
related_rules:
  - bouba-kiki-effect
sources:
  - label: "Köhler. Gestalt Psychology (rev. ed.)"
    year: "1947"
  - label: "Ramachandran & Hubbard. Synaesthesia, a Window Into Perception, Thought and Language. Journal of Consciousness Studies, 8(12)"
    year: "2001"
  - label: "Bar, Neta. Humans Prefer Curved Visual Objects. Psychological Science, 17(8)"
    year: "2006"
  - label: "Apple. Human Interface Guidelines: Buttons"
    year: "2024"
  - label: "Google. Material Design 3. Shape system"
    year: "2024"
---

## The Rule
- Corner radius is often associated with brand personality. 0–2px: formal, technical, or authoritative. 4–8px: neutral and professional. 12–24px: friendly and approachable. 32px or `border-radius: 9999px` (pill): energetic or playful. Design convention: no single empirical primary source for these specific ranges.
- The radius should be consistent within component tiers in a product. Mixing very rounded cards with square buttons produces visual incoherence, not contrast.
- Define radius tokens by component tier (small, medium, large) and apply them system-wide. Do not vary the radius of the same component class across screens.
- The personality signal weakens when other visual properties contradict it. A pill-shaped button in black with heavyweight condensed type reads as assertive despite its curvature. Shape is one signal among several.

## Why
- Rounded shapes reduce perceived visual tension and signal approachability. Angular shapes heighten attention and imply precision or authority.
- The Bouba-Kiki effect supports the general association between curvature and perceived softness (Köhler 1947; Ramachandran & Hubbard 2001). Bar & Neta (2006) found humans consistently prefer curved over angular visual objects.
- Consistency turns radius from an arbitrary styling choice into a repeatable brand cue. Inconsistency makes the choice appear accidental.

## When It Breaks
- A 0px radius in an editorial or minimalist context reads as intentional restraint if surrounding typography and layout support the aesthetic. Personality is read from the system, not a single property.
- Very high radius on small elements distorts proportions. A 24px radius on a 28px-tall chip turns it into a pill regardless of intent. Cap corner radius at 50% of the element's shortest dimension.
- Dense data UIs such as tables and dashboards: radius contributes less when elements are small and tightly packed. Reducing radius improves information density without meaningfully harming brand tone.

## In Practice
- Define tokens: `--radius-sm: 4px; --radius-md: 12px; --radius-lg: 20px; --radius-pill: 9999px;` Apply one tier to all components of the same size class.
- Audit all interactive elements (buttons, inputs, chips, cards, modals, tooltips) for radius consistency before shipping.
- Consumer app card: `border-radius: var(--radius-lg)`. Same product's enterprise dashboard table row: `border-radius: var(--radius-sm)`. Same brand color; different radius tier for context.

## Key Numbers
- **0–2px** — Formal, technical, authoritative. Design convention.
- **4–8px** — Neutral, professional. Design convention.
- **12–24px** — Friendly, approachable. Design convention.
- **32px+** — Energetic, playful. Design convention.
