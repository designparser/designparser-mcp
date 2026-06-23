---
id: "baseline-grid"
title: "Baseline Grid"
category: "spacing"
priority: "medium"
tldr: "4px base for typographic rhythm. Line heights must be multiples of 4."
tags:
  - spacing
  - typography
  - web
videoUrls:
  tiktok: "https://www.tiktok.com/@designparser/video/7587058135047687446"
  instagram: "https://www.instagram.com/p/DSm--D1DWfo/"
sources:
  - label: "Material Design. Typography (baseline grid and rhythm)"
    year: "2018"
  - label: "Bringhurst. The Elements of Typographic Style"
    year: "2012"
---

## The Rule
- Horizontal lines in a 4px grid. All text baselines sit on a grid line.
- Line heights must be multiples of 4: 16, 20, 24, 28, 32px.
- Combine 8pt UI grid with 4pt baseline grid. This was the Material Design 2 standard. Material Design 3 replaced the explicit baseline grid with flexible spacing tokens.

## Why
- An 8px baseline is too wide for typography. The 4pt baseline gives better options.
- Material Design 2 used a 4pt baseline grid specifically for typography. Material Design 3 adopts spacing tokens instead.
- The most comfortable line heights (20, 24, 28px) are all multiples of 4.

## When It Breaks
- Font sizes do not need to be multiples of 4. Only line heights do.
- Pixel-perfect baseline alignment across browsers is difficult in responsive web contexts.

## In Practice
- 16px font size + 24px line height (a multiple of 4) is a correct and comfortable combination.
