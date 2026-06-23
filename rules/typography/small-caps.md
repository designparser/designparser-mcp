---
id: "small-caps"
title: "Small Caps"
category: "typography"
priority: "low"
tldr: "Use true small caps via the OpenType 'smcp' feature, not scaled uppercase. Set with font-variant-caps: small-caps and add ~0.05–0.08em letter-spacing. Fonts without 'smcp' fall back to faux small caps silently."
tags:
  - web
  - typography
  - reading
related_rules:
  - font-pairing
  - type-hierarchy
sources:
  - label: "Bringhurst. The Elements of Typographic Style"
    year: "2004"
  - label: "W3C. CSS Fonts Module Level 4. font-variant-caps"
    year: "2023"
  - label: "University of Chicago Press. The Chicago Manual of Style. 18th ed."
    year: "2024"
---

## The Rule
- Use true small caps, not uppercase scaled down. Scaling uppercase reduces stroke width proportionally, producing lighter glyphs that break visual consistency with surrounding text.
- Set with `font-variant-caps: small-caps` (CSS Fonts Level 4) as the primary property. Use `font-feature-settings: "smcp" 1` only for legacy support. font-feature-settings overrides other active OpenType features.
- Add `letter-spacing: ~0.05–0.08em` to small-cap text. Design convention, not a measured constant.
- Apply to abbreviations, acronyms, running heads, and lede lines. No strict standard defines required contexts; Bringhurst and Chicago Manual of Style recommend small caps for abbreviations in running text.
- Verify the font includes the smcp OpenType feature. Without it, the browser synthesizes small caps silently.

## Why
- True small caps are drawn glyphs with stroke widths calibrated to the typeface. Scaled uppercase produces strokes that are too thin relative to surrounding text.
- Letter-spacing reads tighter at small cap sizes: the eye perceives less white space between letters relative to stroke mass. Adding ~0.06em compensates without overriding the font's kerning.
- Full uppercase in running text creates uneven visual density from tall capitals. Small caps preserve line rhythm while still differentiating the abbreviated text.

## When It Breaks
- Font lacks smcp: the browser synthesizes small caps by scaling uppercase. True small caps use drawn glyphs; faux small caps use the same uppercase glyphs at reduced size. Confirm via DevTools computed styles and font feature inspection.
- `font-variant-caps: all-small-caps` (c2sc + smcp) converts both lowercase and uppercase. Use for all-caps contexts only, not body text.
- At ~10–12px and below, the difference becomes imperceptible depending on font, display density, and rendering engine. Use regular text styling instead.

## In Practice
- Abbreviation in body copy: `.sc { font-variant-caps: small-caps; letter-spacing: 0.06em; }`. Apply via `<abbr class="sc">HTML</abbr>`. Add `font-feature-settings: "smcp" 1` only for legacy browsers.
- Running head: same typeface as body, small caps, weight unchanged. No separate font-size needed. smcp glyph height approximates x-height but varies by typeface.

## Key Numbers
- **~0.05–0.08em** — Letter-spacing for small-cap text. Design convention.
