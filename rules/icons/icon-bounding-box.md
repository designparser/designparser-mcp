---
id: "icon-bounding-box"
title: "Icon Bounding Box"
category: "icons"
priority: "medium"
tldr: "Consistent bounding box across all icons. Padding varies by optical weight (circle needs more than square)."
tags:
  - icons
  - icon
  - web
  - mobile
videoUrls:
  tiktok: "https://www.tiktok.com/@designparser/video/7602385832653131030?is_from_webapp=1&sender_device=pc&web_id=7605204772584801814"
  instagram: "https://www.instagram.com/reel/DURV7BBDUBj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
sources:
  - label: "Apple. SF Symbols — Design guidelines"
    year: "2024"
  - label: "Material Design. Iconography (keylines and bounding boxes)"
    year: "2020"
---

## The Rule
- Fixed bounding box (frame) for all icons in the set: 16, 20, 24, 32, or 48px.
- Standard padding as a starting point: 16px frame = 1px, 24px frame = 2px, 48px frame = 4px. Adjust for filled vs. outline icons (filled needs more trim), stroke weight, and shape openness.
- Live area = frame - padding on all sides.

## Why
- Without a fixed frame, spacing between icons becomes inconsistent across different contexts.
- Optical weight: circles require more area than squares because they have more negative space.
- Blur test: verify optical balance by checking that all icons appear equally heavy when blurred.

## When It Breaks
- Mathematically equal does not mean optically equal. Visual adjustment is always required.
- Strict keyline constraints ignore necessary optical corrections.

## In Practice
- Blur test: apply a 2px blur to all icons. Equal visual mass confirms correct optical balance.
