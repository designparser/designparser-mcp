---
id: "elevation-system"
title: "Elevation System"
category: "shadows"
priority: "medium"
tldr: "5-6 elevation levels. Higher elevation means larger blur and offset. Use tokens."
videoUrls:
  tiktok: "https://www.tiktok.com/@designparser/video/7598230800563211542"
  instagram: "https://www.instagram.com/p/DT0gnIsjSnp/"
sources:
  - label: "Material Design 3. Elevation"
    year: "2024"
---

## The Rule
- Define a maximum of 5-6 levels. MD2 uses dp shadows: 0, 1, 2, 4, 6, 8, 16, 24dp. MD3 uses Level 0–5 (0, 1, 3, 6, 8, 12dp) with tonal color overlay, not shadow alone.
- Level 0-1: buttons and cards. Small blur, subtle offset.
- Level 2-3: dropdowns and menus. Moderate blur and offset.
- Level 4-5: modals and dialogs. Large blur and offset.

## Why
- Higher elevation means the shadow is farther from the object, making it larger, softer, and lighter.
- Too many levels cause decision paralysis and inconsistent application across the product.
- Consistency matters more than realism. Apply the same levels everywhere.

## When It Breaks
- Pure black shadows are too harsh. Always use rgba(0,0,0,0.1-0.3).
- Shadows on colored backgrounds must be tinted to match the background hue.

## In Practice
- Use tokens: shadow/low, shadow/medium, shadow/high. Never hardcode CSS shadow values inside components.

## Key Numbers
- **5-6** — Recommended elevation levels per system. More causes decision paralysis.
