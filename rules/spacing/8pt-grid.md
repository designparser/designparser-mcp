---
id: "8pt-grid"
title: "8pt Grid System"
category: "spacing"
priority: "high"
tldr: "Spacing in multiples of 8: 8, 16, 24, 32, 40, 48. Pixel-perfect on all display densities."
tags:
  - "spacing"
  - "layout"
  - "web"
  - "mobile"
related_rules:
  - "4pt-system"
  - "baseline-grid"
videoUrls:
  tiktok: "https://www.tiktok.com/@designparser/video/7596838167811067158?is_from_webapp=1&sender_device=pc&web_id=7517983817683764759"
  instagram: "https://www.instagram.com/p/DTq2LqNjdSJ/"
sources:
  - label: "Material Design. Layout & spacing (guidelines)"
    year: "2018"
  - label: "Apple. Human Interface Guidelines — Layout (Spacing)"
    year: "2024"
---

## The Rule
- Apply spacing in multiples of 8: 8, 16, 24, 32, 40, 48, 56, 64.
- Use on margins, padding, component heights, and widths.
- Use 4pt as a half-step for icons, small gaps, and fine adjustments.
- Font sizes do not need to be multiples of 8.

## Why
- On Apple @2x displays: 8px becomes 16 physical pixels, @3x becomes 24. Always a whole number.
- Produces visually distinct spacing steps without too many variables, compared to 4pt or 6pt bases.
- Non-integer scaling factors (e.g. 125%, 150% under Windows) can cause sub-pixel rendering regardless of the base unit. The 8pt system minimizes but does not eliminate this.

## When It Breaks
- Line heights should be multiples of 4, not 8. Incrementing by 8 produces spacing that is too wide.
- Not a rigid rule. A 6px border-radius is fine. The system is a scale, not a prison.

## In Practice
- 15px font size with 24px line height (a multiple of 4) is a correct combination.

## Key Numbers
- **8px** — Base unit
- **4px** — Half-step for icons and fine adjustments
