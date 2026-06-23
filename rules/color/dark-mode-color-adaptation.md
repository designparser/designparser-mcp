---
id: "dark-mode-color-adaptation"
title: "Dark Mode Color"
category: "color"
priority: "high"
tldr: "Hue stays fixed. Reduce chroma ~20–30% to prevent neon glare — exact amount depends on source chroma and background. Raise tone until contrast passes: 4.5:1 for text, 3:1 for UI components (WCAG 2.2)."
tags:
  - web
  - color
  - accessibility
related_rules:
  - wcag-contrast
  - color-scale
  - luminance-vs-lightness
sources:
  - label: "WCAG 2.2 SC 1.4.3 (Contrast, Minimum)"
    year: "2023"
  - label: "WCAG 2.2 SC 1.4.11 (Non-text Contrast)"
    year: "2023"
---

## The Rule
- Keep hue identical across light and dark mode. The same hue angle preserves perceptual color identity.
- Reduce chroma by roughly 20–30% in dark mode. High-chroma colors on dark backgrounds appear to glow, making them visually overwhelming. Design convention widely applied in OKLCH-based dark mode engineering — the correct reduction depends on source chroma, background, and display.
- Adjust tone upward until WCAG 2.2 contrast thresholds are met: 4.5:1 for normal text, 3:1 for large text and UI components (SC 1.4.3, 1.4.11).
- The three axes solve independent problems: hue protects brand identity, chroma protects perception, tone protects contrast.
- Contrast is measured on the final rendered value: resolve any overlays and opacity before checking the luminance ratio.

## Why
- Hue is the axis the brain uses to categorize a color into a family (blue, orange, green). Shifting hue changes the perceived color entirely, breaking brand recognition.
- The Helmholtz-Kohlrausch effect: on dark backgrounds, high-chroma colors appear to emit light independent of their actual luminance. Reducing chroma eliminates this neon glare without touching the hue or contrast ratio.
- Tone (perceptual lightness in OKLCH) does not map linearly to WCAG relative luminance Y — the relationship is non-linear and color-dependent, computed from linearized sRGB. A tone that passes 4.5:1 on a white background fails on a dark surface (#121212). The same hue at the same chroma must be lifted to compensate.
- WCAG 2.2 measures contrast as a luminance ratio. Decorative elements, disabled states, and logos are exempt.

## When It Breaks
- Very low-chroma source colors (chroma < 20 in OKLCH): a 20-30% reduction may be disproportionate and produce a muddy result. Apply the reduction proportionally.
- Chroma and tone interact: reducing chroma can lower luminance contrast slightly. Always validate the contrast ratio after both adjustments are applied.
- Decorative elements, disabled controls, and brand logos are exempt from WCAG contrast requirements. Chroma and tone adjustments are still recommended for visual quality, not compliance.
- Inverting lightness without adjusting chroma is a common misreading. It corrects tone but leaves chroma unchanged, producing oversaturated, glowing colors on dark surfaces.

## In Practice
- Example: #2066DF = oklch(46% 72 264deg). Dark mode: oklch(48% 54 264deg). Background #121212 gives white label on button 4.82:1 and button on background 3.89:1. Both pass WCAG AA. Validate with a contrast tool before use.
- For body text on a dark surface: raise tone in OKLCH until the luminance ratio against the background reaches 4.5:1. Hue and chroma stay fixed.
- CSS: use oklch() to isolate the three axes. color-mix() in oklch space is broadly supported in Chrome, Edge, Safari, and Firefox; verify for older Safari versions and embedded WebViews.

## Key Numbers
- **~20–30%** — Chroma reduction in dark mode. Design convention, not a measured constant.
- **4.5:1** — WCAG AA. Normal text (< 18pt / < 14pt bold).
- **3:1** — WCAG AA. Large text and UI components.
- **7:1** — WCAG AAA. Normal text.
