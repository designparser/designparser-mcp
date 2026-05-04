---
id: "touch-target"
title: "Touch Target Size"
category: "interaction"
priority: "critical"
tldr: "WCAG 2.2 AA minimum: 24×24px. Recommended: 44×44px (Apple/WCAG AAA) or 48×48dp (Material). 8px spacing between targets."
tags:
  - "accessibility"
  - "interaction"
  - "mobile"
  - "button"
  - "form"
related_rules:
  - "button-padding"
  - "button-design"
videoUrls:
  tiktok: "https://www.tiktok.com/@designparser/video/7591690656339201302"
  instagram: "https://www.instagram.com/p/DTHIOQLCM3W/"
sources:
  - label: "W3C. WCAG 2.2"
    year: "2023"
  - label: "Apple. Human Interface Guidelines — Touch targets"
    year: "2024"
  - label: "Material Design. Accessibility — Touch target size"
    year: "2024"
---

## The Rule
- WCAG 2.2 AA (SC 2.5.8): 24×24px minimum, or 24px of spacing around it if the target is smaller.
- WCAG 2.2 AAA (SC 2.5.5): 44×44px. This is the enhanced standard, same as Apple HIG.
- Material Design (Android): 48×48dp minimum (not 44). iOS: 44×44pt minimum.
- Minimum 8px spacing between adjacent targets per WCAG 2.2. Spacing can substitute for size.
- Padding counts as target area. A 24px icon with 10px padding on all sides = 44px hit zone.

## Why
- Average finger pad: 10-14mm.
- At 96 DPI (CSS reference pixel), that corresponds to approximately 38-53px. The 44px recommendation sits at the lower end of this range.
- Targets below 44px produce meaningfully higher error rates, particularly for users with reduced motor precision.
- Touch precision decreases approximately 15% per decade after age 40.

## When It Breaks
- Driving and motion contexts: 76x76dp minimum per Google Design for Driving.
- The Instagram like button works at a small size because of its large surrounding spacing buffer, not its pixel dimensions.

## In Practice
- Icon button: 24px icon with 10px padding on all sides produces a 44px hit zone. The correct approach.

## Key Numbers
- **24×24px** — WCAG 2.2 AA minimum (SC 2.5.8)
- **44×44px** — WCAG 2.2 AAA + Apple HIG minimum
- **48×48dp** — Material Design (Android) minimum
- **8px** — Minimum spacing between adjacent targets
