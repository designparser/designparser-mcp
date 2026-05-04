---
id: "golden-ratio"
title: "Golden Ratio"
category: "visual"
priority: "low"
tldr: "The golden ratio (1:1.618) produces a modest, context-dependent aesthetic preference. For organic and human forms the effect is measurable. For UI layout it is a useful proportioning heuristic, not a universal guarantee of beauty."
videoUrls:
  tiktok: "https://www.tiktok.com/@designparser/video/7626396582451186966?is_from_webapp=1&sender_device=pc&web_id=7621951402788800022"
  instagram: "https://www.instagram.com/reel/DW38gZ4Cko7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
sources:
  - label: "De Bartolo. The golden ratio as an ecological affordance leading to aesthetic attractiveness. PsyCh Journal"
    year: "2022"
---

## The Rule
- Apply the golden ratio (1:1.618) as a proportioning starting point, not a guarantee of aesthetic quality.
- In layout, apply it by sizing elements relative to each other at phi: main content at 61.8% of container width, sidebar at 38.2%.
- It is closely related to but mathematically distinct from the rule of thirds (38.2% vs 33.3%).
- Treat it as a proportioning heuristic, not a perceptual law.

## Why
- De Bartolo (2022, PsyCh Journal): a statistically significant but modest preference for golden ratio proportions was found overall (53%, p < 0.001). The effect held for humanoid and organic stimuli, not for abstract geometric figures.
- Eye-tracking in the same study showed shorter dwell times for golden ratio stimuli rated as beautiful, suggesting these proportions may reduce perceptual effort in specific contexts.
- The effect does not transfer reliably to UI rectangles, button dimensions, or grid columns.

## When It Breaks
- Grid systems require integer column counts. Phi produces irrational numbers that round inconsistently across breakpoints.
- Accessibility requirements and contrast ratios take priority. A layout passing WCAG at non-phi proportions is better than a phi layout that fails.
- Attributing conversion or usability gains to golden ratio proportions without user testing is not supported by evidence.

## In Practice
- As a proportion starting point, not a guaranteed outcome: a two-column layout at 61.8% and 38.2% produces a clear dominant-to-subordinate relationship without extra styling. Verify visually.
- As a type scale starting point: multiply base size by 1.618 per step. Body 16px gives a heading of 26px (16 x 1.618 = 25.9, rounded). Adjust based on actual readability.

## Key Numbers
- **1.618** — Phi
- **61.8% / 38.2%** — Primary and secondary proportions for two-column splits
- **53%** — Preference rate for golden ratio stimuli in humanoid contexts (De Bartolo, 2022)
