---
id: "icon-stroke-weight"
title: "Icon Stroke Weight"
category: "icons"
priority: "high"
tldr: "Icon stroke weight should visually match the font-weight of adjacent text, not be picked independently. Apple's SF Symbols ships 9 weights mapped 1:1 to San Francisco's font weights; Google's Material Symbols exposes weight as a variable axis from 100 to 700, the same numeric scale as CSS font-weight."
tags:
  - icons
  - icon
  - typography
related_rules:
  - icon-alignment
  - font-weight-contrast
sources:
  - label: "Apple. Human Interface Guidelines — SF Symbols"
    year: "2024"
  - label: "Google. Material Symbols Guide. Google Fonts for Developers"
    year: "2022"
---

## The Rule
- Icon stroke weight (thickness) should visually match the weight of the adjacent text. A regular/400-weight label paired with a hairline icon, or a bold/700-weight label paired with a thin icon, reads as visually inconsistent even when size and spacing are correct.
- Apple's SF Symbols ships 9 discrete weights, ultralight, thin, light, regular, medium, semibold, bold, heavy, black, each engineered to match the corresponding weight of the San Francisco system font (Apple HIG, SF Symbols).
- Google's Material Symbols expose weight as a continuous variable font axis from 100 (thinnest) to 700 (boldest), the same numeric scale used by CSS font-weight, so an icon's weight can bind to the same design token as the text next to it.
- No universal stroke-width-to-font-weight formula exists outside these two vendor-defined systems. For custom icon sets, define a small number of discrete stroke weights (for example 1.5px, 2px, 2.5px at a 24px icon size) and map each to a font-weight range, rather than picking weight per icon.
- Stroke weight needs optical adjustment across icon sizes independently of font weight. Material Symbols' optical-size axis adjusts stroke thickness so icons at different sizes maintain a consistent perceived visual weight.

## Why
- Visual weight is a similarity cue processed early in perception (Gestalt grouping by similarity). Text and icons at mismatched weights read as belonging to different visual systems even when color, size, and alignment match.
- Apple built the 9-weight scale specifically so symbols and adjacent text achieve precise weight matching (Apple HIG, SF Symbols), which is stated vendor design intent, not an incidental byproduct of the icon format.
- Material Symbols' weight axis is deliberately aligned to the CSS font-weight numeric scale (100 to 700) so it can be bound to the same design token used for body and heading text (Google Fonts, Material Symbols guide).
- Stroke thickness perception is size-dependent: an identical stroke width can appear proportionally different at different render sizes, which is why optical-size adjustments are used.

## When It Breaks
- Solid or filled icon glyphs with no visible stroke have nothing to weight-match. Use the fill axis or a filled variant instead, and match perceived boldness through shape and area rather than stroke thickness.
- At very small render sizes, fine weight differences may not resolve because anti-aliasing and pixel-grid limitations reduce visible differences; the exact threshold depends on display density, icon shape, and rendering engine, so verify the rendered result rather than assuming a fixed cutoff.
- Custom brand icon sets without a variable weight axis often ship only one stroke weight. In that case, pick the single stroke weight to match the site's dominant body-text weight, and treat bold or heading contexts as an accepted mismatch rather than producing new icon assets per font weight.

## In Practice
- SwiftUI/UIKit: set an SF Symbol's weight via the symbol configuration or `.fontWeight(_:)` modifier to match the surrounding Text view's font weight, instead of leaving it at the default regular weight.
- CSS with Material Symbols (variable font): set `font-variation-settings: 'wght' 400` on the icon alongside `font-weight: 400` text, and `'wght' 700` next to bold text, binding both to the same weight token.
- Custom SVG icon sets: standardize on two stroke weights at 24px icon size, for example 1.5px for regular/400 text contexts and 2px for medium/600+ contexts, defined as design tokens alongside the font-weight tokens rather than chosen per icon.

## Key Numbers
- **9** — SF Symbols weight steps, mapped 1:1 to San Francisco font weights
- **100-700** — Material Symbols weight axis range, same scale as CSS font-weight
