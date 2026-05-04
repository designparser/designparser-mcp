---
id: "saturation-control"
title: "Saturation Control"
category: "color"
priority: "medium"
tldr: "0-25% saturation (HSL) for backgrounds, 25-60% for UI elements, 60-100% for CTAs. These ranges apply to HSL only; OKLCH chroma is not directly comparable."
videoUrls:
  tiktok: "https://www.tiktok.com/@designparser/video/7595594652166802710?is_from_webapp=1&sender_device=pc&web_id=7517983817683764759"
  instagram: "https://www.instagram.com/p/DTiN7GXDeRX/"
sources:
  - label: "Stone. A Field Guide to Digital Color"
    year: "2016"
  - label: "Itten. The Art of Color"
    year: "1961"
---

## The Rule
- Low (0-25% HSL saturation): Backgrounds, body text, layouts. Creates a calm, professional base.
- Medium (25-60% HSL saturation): Buttons, links, cards. Balanced attention without overwhelming.
- High (60-100% HSL saturation): CTAs, errors, warnings. Demands immediate attention.
- Note: HSL saturation and OKLCH chroma produce different results at the same percentage. These ranges assume HSL.

## Why
- Saturation controls attention. Highly saturated colors trigger stronger visual processing.
- High saturation everywhere means everything is equally important, which creates no hierarchy.
- For long-term use like dashboards, low saturation reduces cognitive fatigue.

## When It Breaks
- Saturated backgrounds on short-session marketing pages can work when used intentionally.
- Saturation alone is never enough for accessibility. WCAG luminance contrast must also pass.

## In Practice
- Saturated accent at 80% orange + desaturated background at 10% gray creates clear focus without visual noise.

## Key Numbers
- **0-25%** — Backgrounds and Neutrals
- **25-60%** — UI Elements
- **60-100%** — CTAs and Signals
