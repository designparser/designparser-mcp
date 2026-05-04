---
id: "raised-vs-inset"
title: "Raised vs. Inset"
category: "shadows"
priority: "medium"
tldr: "Raised: shadow below + light top edge. Inset: shadow above + dark top edge."
videoUrls:
  tiktok: "https://www.tiktok.com/@designparser/video/7598687398247009558"
  instagram: "https://www.instagram.com/p/DT3rY5ajS4U/"
sources:
  - label: "Material Design. Elevation & shadows (guidelines)"
    year: "2018"
  - label: "Apple. Human Interface Guidelines — Depth"
    year: "2024"
---

## The Rule
- Raised (buttons): drop shadow below + light top edge using inset 0 1px rgba(255,255,255,0.2).
- Inset (inputs, wells): shadow above using inset 0 1px 2px rgba(0,0,0,0.3) + light bottom edge.
- Pressed state: remove the drop shadow and add a darker inset shadow.
- Hover state: increase shadow size and blur to simulate the element lifting.

## Why
- Raised: the element sits above the surface. Light hits the top edge, shadow falls below.
- Inset: the element is recessed. The upper lip blocks light, so the shadow appears at the top.
- Interaction is Z-axis movement, not decoration.

## When It Breaks
- Inconsistent light direction between raised and inset elements breaks perceived realism.
- Excessive realism creates visual noise. Clarity always outweighs physical accuracy.

## In Practice
- Button active state: transform: translateY(1px) combined with a reduced shadow simulates a physical press.
