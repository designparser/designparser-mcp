---
id: "type-hierarchy"
title: "Type Hierarchy"
category: "typography"
priority: "high"
tldr: "Minimum 1.25x ratio between adjacent heading levels. Body at 16px. H1 at approximately 49px."
videoUrls:
  tiktok: "https://www.tiktok.com/@designparser/video/7609037820056947990?is_from_webapp=1&sender_device=pc&web_id=7605204772584801814"
  instagram: "https://www.instagram.com/reel/DU_f4IeCix7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
sources:
  - label: "W3C WAI. Page Structure: Headings"
    year: "2024"
  - label: "WCAG 2.2 SC 1.4.4"
    year: "2023"
  - label: "Material Design 3"
    year: "2024"
---

## The Rule
- Use a modular scale with a constant ratio. Major Third (1.25x) is the web standard.
- 16px body scales up: 20, 25, 31, 39, 49px for H1.
- Avoid skipping heading levels (e.g. h1 to h3 without h2).
- Screen readers navigate by level; gaps cause users to assume content is missing (W3C WAI).
- Prefer rem or clamp() for headings.
- px values respect browser-level zoom but ignore the user's OS-level font size preference.

## Why
- Weber's Law: size perception is logarithmic. Adding 2px does not create a category break.
- A ratio of at least 1.20 is required to produce a distinct hierarchy category.
- Two CSS custom properties handle the whole scale: --base: 1rem and --ratio: 1.25.

## When It Breaks
- On mobile, Major Third (1.25x) is too aggressive. Use Minor Third (1.20x) and limit to 3 heading levels.
- For H5 and H6, differentiate through weight and color, not further size reduction.

## In Practice
- Set --base: 1rem and --ratio: 1.25 as CSS variables. A brand change becomes a single variable edit.

## Key Numbers
- **1.25x** — Major Third (web standard)
- **1.20x** — Minor Third approximation (mobile). Exact minor third: 2^(3/12) = 1.189.
- **16px** — Body baseline
