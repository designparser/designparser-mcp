---
id: "red-green-color-blindness"
title: "Red-Green Blindness"
category: "color"
priority: "critical"
tldr: "~8% of males cannot distinguish red from green reliably. Never use these as the only differentiator — always pair color with a second channel: icon, label, or position."
tags:
  - accessibility
  - color
  - web
  - mobile
related_rules:
  - wcag-contrast
  - simultaneous-contrast
sources:
  - label: "Birch. Worldwide prevalence of red-green color deficiency. Journal of the Optical Society of America A 29(3)"
    year: "2012"
  - label: "WCAG 2.2 SC 1.4.1 Use of Color. W3C"
    year: "2023"
---

## The Rule
- Never use red and green as the only visual differentiator between two states (success/error, on/off, pass/fail).
- Always pair color with at least one second channel: icon shape, text label, position, pattern, or brightness.
- Hue alone is insufficient for coding status, alerts, or data categories when the palette includes both red and green ranges.
- Red-green color blindness (deuteranopia, protanopia, and anomalous trichromacy variants) affects ~8% of males and ~0.5% of females (Birch 2012).
- WCAG 2.2 SC 1.4.1 (Level A) prohibits using color as the only visual means of conveying information (W3C 2023).

## Why
- Deuteranopia (absent green cones) and protanopia (absent red cones) collapse red, orange, yellow, and green into a single brownish-yellow perceptual range.
- Colors that appear clearly distinct to trichromat users become indistinguishable under both conditions.
- Deuteranomaly (reduced green cone sensitivity) affects approximately 5% of males. It reduces distinction enough to cause errors in status-coded UI.
- Protanopia also reduces the perceived luminance of red. Verify high-saturation reds against WCAG SC 1.4.3 separately.
- Red-green types are X-linked recessive. Prevalence in males (~8%) is 16x higher than in females (~0.5%) because one affected X chromosome suffices.

## When It Breaks
- This constraint applies to functional signals (status indicators, validation states, data categories), not decorative color.
- A green hero section background does not require a secondary indicator.
- Monochromatic or blue-only palettes are unaffected. The rule applies only when red and green coexist as meaning-bearing signals.
- Brightness contrast between red and green is often low. Verify color-independent contrast meets WCAG SC 1.4.3 even when shapes and labels are present.

## In Practice
- Form validation: pair green/red background with checkmark/X SVG icons and an explicit text label. Never rely on background color alone.
- Status dots: add text labels (Active, Inactive) next to colored indicators. A standalone color dot is not accessible.
- Simulate using Figma Color Blind plugin or macOS Color Filters (Deuteranopia) before release.
