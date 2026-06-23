---
id: "color-scale"
title: "Color Scale"
category: "color"
priority: "medium"
tldr: "100-900 scale, start at 500, define edges first, fill the gaps."
tags:
  - color
  - web
videoUrls:
  tiktok: "https://www.tiktok.com/@designparser/video/7584844219630636310?is_from_webapp=1&sender_device=pc&web_id=7517983817683764759"
  instagram: "https://www.instagram.com/p/DSYeolGiNXL/"
sources:
  - label: "Material Design. Color system (guidelines)"
    year: "2021"
  - label: "Ottosson. OKLab: a perceptual color space for image processing"
    year: "2020"
---

## The Rule
- Start at 500 (base color): neither too light nor too dark.
- Define edges: 900 for text (darkest), 100 for backgrounds (lightest).
- Fill the gaps with even steps from 100 to 900 (9 total).
- Use HSL: keep the same hue, adjust lightness and saturation per step.

## Why
- Random hex values may look similar but have no system. They are not predictable.
- A systematic scale creates consistent visual rhythm across the entire product.
- HSL lacks perceptual uniformity: equal lightness steps appear unequal across hues. Light blues shift toward cyan; dark blues toward violet. Compensate with manual hue rotation, or use OKLCH for perceptually uniform scales.

## When It Breaks
- Hue rotation at extreme steps is required. Otherwise light blue shifts toward green.
- Always verify visually with WCAG contrast checks, not just by counting numeric steps.

## In Practice
- 100-300: backgrounds. 400-600: buttons and badges. 700-900: text and strong emphasis.

## Key Numbers
- **500** — Base color starting point
- **900** — Darkest step (text)
- **100** — Lightest step (background)
