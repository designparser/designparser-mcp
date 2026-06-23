---
id: "emphasis"
title: "Emphasis"
category: "visual"
priority: "high"
tldr: "Emphasis is the deliberate differentiation of one element through contrast. Without a clear hierarchy of emphasis, everything competes and nothing is found."
tags:
  - visual
  - web
  - layout
videoUrls:
  tiktok: "https://www.tiktok.com/@designparser/video/7623814369352224022?is_from_webapp=1&sender_device=pc&web_id=7621951402788800022"
  instagram: "https://www.instagram.com/reel/DWmCBkrip_W/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
sources:
  - label: "Treisman and Gelade. A Feature-Integration Theory of Attention"
    year: "1980"
  - label: "Tufte. The Visual Display of Quantitative Information"
    year: "1983"
---

## The Rule
- Create emphasis through contrast. An element is emphasized only relative to its surroundings, not in absolute terms.
- Achieve contrast through size, weight, color, position, whitespace, shape, or texture.
- Use multiple contrast dimensions together for stronger emphasis. They interact in complex ways rather than adding up linearly.
- Give each functional layout one clear primary focal point. Secondary and tertiary elements support it rather than compete.
- In artistic and editorial work, deliberately break this principle to create tension. The rule describes functional UI, not expressive design.
- Follow a strict emphasis hierarchy in functional interfaces: one primary, at most two secondary, the rest subordinate.

## Why
- Pre-attentive processing detects size, color, and luminance contrast in roughly 50–250ms before conscious attention engages. Emphasis exploits this to guide the eye before the user makes a deliberate choice.
- When all elements carry equal visual weight, the visual system must serially search for the target. Treisman and Gelade (1980) measured conjunction search slopes at approximately 60ms per item, significantly slower than the parallel detection of single pre-attentive features.
- Tufte argues that information-carrying contrast must clearly exceed noise-level variation. The idea of a single dominant focal point follows from this principle, though his work concerns data visualization, not UI layout directly.

## When It Breaks
- Artistic compositions (posters, editorial layouts) intentionally use ambiguous hierarchy to create tension. The rule describes functional interfaces, not expressive design.
- Dark patterns: overuse of emphasis (multiple red 'urgent' elements) desensitizes the user and the signal becomes noise.

## In Practice
- Primary CTA: set font-weight: 700, background to the brand accent color, and padding 16px 32px. Every other button on the page should be outlined or ghost style.
- Limiting filled buttons to one per view is a widely-held design heuristic. It is not a universal rule, but a reliable default for functional interfaces.

## Key Numbers
- **50–250ms** — Typical pre-attentive processing window (varies by stimulus and study)
- **~60ms** — Conjunction search slope per item (Treisman and Gelade 1980)
