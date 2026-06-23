---
id: "luminance-vs-lightness"
title: "Luminance vs. Lightness"
category: "color"
priority: "medium"
tldr: "HSL-L is not a contrast measure. WCAG 2.2 uses luminance (Y). Yellow and blue at HSL-L 50% produce a 1.07:1 contrast ratio, which is a FAIL."
tags:
  - color
  - web
  - accessibility
videoUrls:
  tiktok: "https://www.tiktok.com/@designparser/video/7608320055180381462?is_from_webapp=1&sender_device=pc&web_id=7605204772584801814"
  instagram: "https://www.instagram.com/reel/DU6hZs7jRA1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
sources:
  - label: "WCAG 2.2 SC 1.4.3"
    year: "2023"
  - label: "CIE 1976 CIELAB Standard"
  - label: "IEC 61966-2-1 sRGB"
    year: "1999"
---

## The Rule
- Calculate luminance (Y) using: Y = 0.2126R + 0.7152G + 0.0722B.
- Linearize (gamma-decode) R, G, B first. Do not apply the formula to raw sRGB.
- Use L* (CIELAB 1976) for perceptual, non-linear lightness.
- Do not use HSL-L as a contrast measure. It is a geometric model with no physical basis.
- Calculate WCAG 2.2 contrast using Y (luminance), not L* or HSL-L.

## Why
- Weber's Law: the eye responds to relative contrast, not absolute brightness values.
- Yellow and blue at HSL-L 50% differ in actual luminance by a factor of 12.8x.
- Green dominates human brightness perception with a coefficient of 0.7152.

## When It Breaks
- Helmholtz-Kohlrausch effect: saturated colors like blue and magenta appear brighter than their Y value suggests. CIELAB does not model this.
- WCAG 2.2 is a minimum standard. Perceptual uniformity requires OKLCH or CIECAM.

## In Practice
- Always calculate WCAG contrast using Y. Yellow (#FFFF00) on white = 1.07:1 contrast, a fail despite HSL-L of 50%.
- Use a contrast tool (e.g. WebAIM, Colour Contrast Analyser) rather than calculating manually.
- Raw sRGB values must be linearized via a piecewise function before applying the formula.

## Key Numbers
- **4.5:1** — WCAG 2.2 AA minimum (normal text)
- **3:1** — WCAG 2.2 AA (large text and UI components)
