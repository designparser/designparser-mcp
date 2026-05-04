---
id: "line-length"
title: "Line Length"
category: "typography"
priority: "high"
tldr: "50-75 CPL for body text. Max 80 CPL per WCAG 2.2. Use max-width: 65ch in CSS."
videoUrls:
  tiktok: "https://www.tiktok.com/@designparser/video/7606406598478564630?is_from_webapp=1&sender_device=pc&web_id=7605204772584801814"
  instagram: "https://www.instagram.com/reel/DUtPYGCjdbv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
sources:
  - label: "WCAG 2.2 SC 1.4.8"
    year: "2023"
  - label: "Baymard Institute"
    year: "2024"
  - label: "Bringhurst. The Elements of Typographic Style"
    year: "2004"
---

## The Rule
- Optimal: 50-75 characters per line (CPL) for body text.
- Sweet spot: approximately 66 CPL, per Bringhurst (1992) and Baymard (2024).
- WCAG 2.2 SC 1.4.8: max 80 CPL for non-CJK, max 40 CPL for CJK scripts.
- Mobile: 30-50 CPL is typical due to narrower viewports.

## Why
- Return sweep: long lines cause the eye to land on the wrong line.
- Too short (under 45 CPL): fragmented meaning, more eye sweeps, slower reading.
- Sentence endings fall into short-term semantic forgetting at over 80 CPL.

## When It Breaks
- UI microcopy like buttons and navigation: CPL rules do not apply.
- Editorial display text often uses 30-45 CPL intentionally for visual rhythm.

## In Practice
- Apply max-width: 65ch to the article container. It adapts automatically to any font size.

## Key Numbers
- **50-75** — CPL optimal (body)
- **66** — CPL sweet spot
- **80** — CPL WCAG 2.2 AAA max
- **65ch** — CSS max-width recommendation
