---
id: "font-weight-contrast"
title: "Font Weight Contrast"
category: "typography"
priority: "high"
tldr: "Separate hierarchy levels by at least 200 units on the 100–900 scale: body 400, headings 600+. Adjacent weights read as inconsistency, not rank. Design convention."
tags:
  - web
  - typography
  - reading
related_rules:
  - variable-fonts
  - type-hierarchy
  - emphasis
sources:
  - label: "MDN Web Docs. CSS font-weight"
    year: "2024"
  - label: "W3C. CSS Fonts Module Level 4"
    year: "2021"
  - label: "WCAG 2.2 SC 1.4.3. Contrast (Minimum)"
    year: "2023"
  - label: "Wertheimer, M. Laws of Organization in Perceptual Forms (Gestalt similarity principle)"
    year: "1923"
---

## The Rule
- Separate hierarchy levels by at least 200 units on the 100–900 scale: body at 400, headings at 600 or higher. Design convention: no single empirical primary source for this threshold.
- Adjacent weights (e.g., 400 body and 500 heading) do not signal rank. The difference is too small to read as intentional at body-text sizes.
- Three weight levels cover many interface systems: regular (400), semibold (600), bold or extrabold (700–800). Reserve 900 for display use only.
- Extremely heavy weights (800–900) typically reduce legibility at body size in fonts without separate display cuts: thick strokes narrow the counters in letters like 'o' and 'e', increasing reading effort.

## Why
- Weight contrast works through relative difference, not absolute value. A 500 next to a 400 body occupies the same visual category and reads as a rendering variation, not a hierarchy signal.
- The Gestalt principle of similarity explains the mechanism: elements with near-identical visual weight are grouped as equivalent, not ranked. Sufficient weight separation pushes elements into distinct perceptual groups, making rank readable.
- WCAG 2.2 SC 1.4.3 reflects this implicitly: bold text (font-weight: 700+) at 14pt or larger, or normal-weight text at 18pt or larger, qualifies as large text with a relaxed color contrast requirement of 3:1 instead of 4.5:1.

## When It Breaks
- Families with only two weights (Regular + Bold, 400 + 700): the gap is already ~300 units. The constraint is satisfied automatically.
- Display and editorial contexts: adjacent weights can be intentional when a large size difference carries the hierarchy instead. A 48px/500 headline above a 16px/400 body reads as distinct.
- Single-level body text: using one weight throughout a passage is correct. The constraint applies only when signaling rank between distinct content levels.

## In Practice
- Body: `font-weight: 400;` subheadings: `font-weight: 600;` headings: `font-weight: 700` or 800. Avoid 400 body paired with 500 subheadings.
- Variable fonts support any value in the declared wght range. `font-weight: 750` is valid only if the font's axis extends that far. Check the font's wght range before using intermediate values; missing axis coverage fails silently.

## Key Numbers
- **200** — Minimum weight gap for intentional hierarchy (design convention)
- **400** — CSS normal (body default)
- **700** — CSS bold
- **3:1 / 4.5:1** — WCAG 2.2 color contrast: bold ≥14pt or normal ≥18pt vs body text
