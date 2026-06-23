---
id: "icon-alignment"
title: "Icon Alignment"
category: "icons"
priority: "medium"
tldr: "Optical alignment is not mathematical alignment. Circular icons need a slight upward offset."
tags:
  - icons
  - icon
  - web
videoUrls:
  tiktok: "https://www.tiktok.com/@designparser/video/7603843091379883286?is_from_webapp=1&sender_device=pc&web_id=7605204772584801814"
  instagram: "https://www.instagram.com/reel/DUbdEXgjRc5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
sources:
  - label: "Apple. SF Symbols — Design guidelines"
    year: "2024"
  - label: "Material Design. Iconography (keylines and optical balance)"
    year: "2020"
---

## The Rule
- Align icons to the optical midpoint of adjacent text, not the baseline.
- Baseline alignment places the icon bottom at the text's baseline, which puts it visually below the text body.
- Target: the cap-height midpoint, the vertical center between baseline and cap height.
- Circular icons need a slight upward offset of approximately 1-2px beyond mathematical center, because circles have less visual mass at their perimeter.
- vertical-align: middle in CSS aligns to the middle of the em square, not the cap height.
- This under-aligns in most typefaces and requires manual correction.
- Icon size relative to text: match the cap height of the typeface for in-line icons.

## Why
- Optical center does not equal geometric center in asymmetrical shapes.
- A circle in the same bounding box as a square appears visually lower.
- Text baseline and icon bottom edge have different visual centers of gravity.

## When It Breaks
- Very complex icon shapes: testing is the only method. No formula applies.
- Different icon sizes next to the same text size: each combination must be tested separately.

## In Practice
- Button with icon: use display:flex + align-items:center + a manual 1px upward offset for circular icons.

## Key Numbers
- **~1-2px** — Upward offset for circular icons beyond mathematical center. Fine-tune per typeface.
