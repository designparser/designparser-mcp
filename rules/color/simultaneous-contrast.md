---
id: "simultaneous-contrast"
title: "Simultaneous Contrast"
category: "color"
priority: "medium"
tldr: "The same color appears different depending on its surrounding colors. Adjacent hues shift each other toward their opponent color, and lightness readings are never absolute."
tags:
  - color
  - web
videoUrls:
  tiktok: "https://www.tiktok.com/@designparser/video/7620093498355666208?is_from_webapp=1&sender_device=pc&web_id=7621951402788800022"
  instagram: "https://www.instagram.com/reel/DWMOIpSjUrR/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
sources:
  - label: "Chevreul. De la loi du contraste simultané des couleurs"
    year: "1839"
  - label: "Albers. Interaction of Color"
    year: "1963"
---

## The Rule
- A gray patch on a dark background looks lighter than the same gray on a light background. Neither reading is objectively correct; both are context-dependent.
- Hue contrast: a neutral gray on a red background appears slightly green because the opponent color of red is green.
- Saturation contrast: a muted color appears more saturated when surrounded by a desaturated field, and vice versa.
- The effect is strongest at the shared border and diminishes with distance.

## Why
- Lateral inhibition in the retina: active photoreceptors suppress their neighbors, causing edge enhancement and perceived differences that exceed the physical signal.
- Chevreul documented the phenomenon systematically in 1839 while working on Gobelins tapestries. Josef Albers formalized it in UI-relevant terms in Interaction of Color (1963).
- The visual system processes relative contrast, not absolute measurement. Color perception is always a ratio, never a reading.

## When It Breaks
- Large uniform fields: simultaneous contrast diminishes when the boundary is far from the fixation point.
- A small icon on a large background is more affected than two equally-sized panels.
- WCAG contrast ratios are calculated from absolute luminance and do not account for simultaneous contrast.
- A color pair that passes 4.5:1 may still be perceptually difficult if surrounded by a competing hue.

## In Practice
- Always test brand colors against the actual backgrounds they will appear on, not in isolation.
- A #888888 gray on warm-white (#FFF8F0) reads warmer and lighter than the same gray on cool-white (#F0F4FF).
- Adjust token values per surface, not globally.

## Key Numbers
- **1839** — Chevreul's original documentation of the effect
