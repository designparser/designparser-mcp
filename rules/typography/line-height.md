---
id: "line-height"
title: "Line Height"
category: "typography"
priority: "high"
tldr: "Body: 1.5-1.6. Headings: 1.1-1.3. Inverse relationship: larger text needs tighter line height."
tags:
  - "typography"
  - "reading"
  - "web"
  - "accessibility"
related_rules:
  - "line-length"
videoUrls:
  tiktok: "https://www.tiktok.com/@designparser/video/7585669280163712278?is_from_webapp=1&sender_device=pc&web_id=7517983817683764759"
  instagram: "https://www.instagram.com/p/DSdb2loDfCN/"
sources:
  - label: "W3C. WCAG 2.2"
    year: "2023"
  - label: "Bringhurst. The Elements of Typographic Style"
    year: "2012"
---

## The Rule
- Headings (H1-H3): 1.1-1.3. Less breathing room because visual weight carries the hierarchy.
- Body text (16-18px): 1.5-1.6.
- Small text (12-14px): 1.5-1.7. More space compensates for the reduced size.
- Inverse relationship: larger text requires tighter line height.

## Why
- Browser default of 1.2 is too tight for body text. Lines merge visually.
- Return sweep: eyes need clear vertical separation to land on the next line.
- WCAG 2.2 SC 1.4.12 (Text Spacing): no content or functionality may be lost when a user overrides line-height to 1.5x.
- This is a robustness requirement on the implementation, not a mandate to design with 1.5 as default.

## When It Breaks
- Narrow columns under 40 CPL: 1.3-1.45 is sufficient because fewer return sweeps are needed.
- On mobile, desktop line heights are often too large. Values of 1.4-1.5 are usually better.

## In Practice
- Set line-height as a unitless number like 1.5, not 1.5em. This scales correctly with child elements.

## Key Numbers
- **1.1-1.3** — Headings
- **1.5-1.6** — Body text
- **1.5** — WCAG 2.2 SC 1.4.12: robustness floor, not a design default
