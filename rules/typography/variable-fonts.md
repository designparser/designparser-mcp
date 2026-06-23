---
id: "variable-fonts"
title: "Variable Fonts"
category: "typography"
priority: "medium"
tldr: "A variable font replaces multiple static files when 3 or more weights are needed. Below that threshold, a subsetted static file is typically smaller."
tags:
  - web
  - typography
related_rules:
  - font-weight-contrast
  - small-caps
sources:
  - label: "OpenType 1.8 Specification. Microsoft, Adobe, Google, Apple"
    year: "2016"
  - label: "W3C. CSS Fonts Module Level 4"
    year: "2021"
---

## The Rule
- A variable font encodes all intermediate axis values in one file, replacing multiple static weight files with one HTTP request.
- Weight axis (wght) accepts any numeric value from 1 to 1000. Declare the full range in @font-face: font-weight: 100 900.
- A variable font typically reduces total file size when replacing 3 or more static weights. The advantage depends on subsetting strategy and number of axes. For 1 or 2 weights, a subsetted static file is likely smaller. (Google/web.dev, 2020)
- Optical size axis (opsz) automatically adjusts stroke contrast and letter spacing per size range, replacing separate optical cuts.
- Standard axes (wght, wdth, ital, slnt, opsz) are lowercase and defined by the OpenType spec. Custom axes use four uppercase letters and are defined by the font vendor. Verify axis availability before designing with them.

## Why
- A variable font can reduce font requests by combining multiple styles into fewer files. When 3 or more static weights are loaded, a variable font reduces network overhead even if the raw file is larger.
- Glyph deltas encode the difference between all master points across the design space. Intermediate instances are interpolated at render time. Multi-axis fonts use additional intermediate masters, not a simple two-extreme interpolation.
- Browser support: all modern browsers since 2018 (Chrome 66, Firefox 62, Safari 11). IE11 has no variable font support; serve static WOFF fallbacks via @supports.
- Design convention. File size comparison depends on subsetting strategy, font family, and number of weights used. Always measure before deciding.

## When It Breaks
- Single-weight use: a variable font loaded for one weight is typically larger than a subsetted static file. Subset static or self-host with a variable font plus subsetting.
- Hinting quality at small sizes can be lower in variable fonts than in purpose-hinted static cuts, depending on the font. Newer releases (Google Fonts, ~2021 onward) have largely addressed this. Test at 12 to 14px on Windows Chrome.
- Not all fonts expose all axes. Use font-variation-settings only for axes the font actually supports; missing axes fail silently.

## In Practice
- `@font-face { font-family: 'Inter'; src: url('inter.woff2') format('woff2'); font-weight: 100 900; font-display: swap; }` Then use any numeric value within the font's declared wght range for fine-grained control. Inter supports 100–900, so font-weight: 750 is valid. Check the font's axis range before using intermediate values.
- Animate weight transitions: `transition: font-weight 200ms ease;` on a heading hover state. Variable fonts render the interpolated instance smoothly; static fonts require a class swap.

## Key Numbers
- **3** — Min weights where variable font outperforms static on file size (Google/web.dev, 2020)
- **1–1000** — wght axis range per OpenType 1.8 spec
- **>94%** — Global browser support (Can I Use, 2026)
