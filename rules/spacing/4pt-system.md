---
id: "4pt-system"
title: "4pt System"
category: "spacing"
priority: "medium"
tldr: "Half-step of the 8pt grid. For typography and icons. Not a replacement for 8pt."
tags:
  - spacing
  - web
  - typography
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
- 4pt half-steps: 4, 8, 12, 16, 20, 24. Complements 8pt, does not replace it.
- Use for typography line heights, icon padding, and dense interfaces.
- 8pt handles component sizing and margins between major elements.
- 4pt handles line heights, icon gaps, and secondary text spacing.

## Why
- Line height in 8pt increments is often too wide. 4pt gives more options: 20, 24, 28px.
- Material Design uses 8pt for elements and a 4pt baseline for typography.
- Finer control without introducing too many variables.

## When It Breaks
- Using 4pt everywhere introduces too many variables and defeats the purpose of the system.
- Odd numbers like 5, 7, and 9 produce sub-pixel blur at 1.5x display scaling.

## In Practice
- 15px font size, 24px line height (4pt multiple), 8px icon gap (4pt), 16px padding (8pt).
