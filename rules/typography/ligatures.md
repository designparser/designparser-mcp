---
id: "ligatures"
title: "Ligatures"
category: "typography"
priority: "low"
tldr: "Standard ligatures like fi and fl fix letter collisions and stay on by default, while discretionary and historical ligatures are decorative extras that should be enabled only in display or editorial contexts, never in all-caps, logotype, or monospaced UI text."
tags:
  - web
  - typography
  - reading
related_rules:
  - small-caps
  - font-pairing
sources:
  - label: "MDN Web Docs. font-variant-ligatures. Mozilla"
    year: "2024"
  - label: "Microsoft. OpenType Feature List. Microsoft Learn Typography documentation"
    year: "2024"
  - label: "Type Network. OpenType at Work: Standard Ligatures"
---

## The Rule
- Standard Latin ligatures replace colliding letter pairs, most commonly fi and fl, and sometimes ff, ffi, ffl, ft, with a single joined glyph.
- CSS controls ligatures with font-variant-ligatures: common-ligatures | no-common-ligatures | discretionary-ligatures | no-discretionary-ligatures | historical-ligatures | no-historical-ligatures | contextual | no-contextual, or the shorthand values normal and none.
- In OpenType, liga controls standard ligatures such as fi and fl, while clig applies ligatures only in specific letter contexts. CSS common-ligatures activates both together. dlig drives discretionary ligatures, hlig drives historical ligatures such as the German tz digraph.
- Browsers apply common-ligatures and contextual by default under font-variant-ligatures: normal. Discretionary and historical ligatures are off by default and must be turned on explicitly.
- Disable ligatures where every letterform must stay separable and countable: monospaced or code contexts, logotypes, and tightly letterspaced all-caps headlines.

## Why
- Ligatures originated in metal type. The f's overhanging arm collided with the ascender hook or tittle of the following letter in pairs like fi and fl, so type designers cast the pair as one piece to remove the clash.
- Standard ligatures map to OpenType liga plus clig. Liga applies ligation directly within the defined pair, clig applies it conditionally based on surrounding letters, per the OpenType feature list.
- Discretionary ligatures (dlig) stay off by default because they are a stylistic choice by the type designer, not a fix for a technical collision. Applying them changes the tone of the text, not its correctness.
- Historical ligatures (hlig) reproduce forms used in earlier printing. They are not expected in contemporary body text, so the CSS default leaves them disabled.

## When It Breaks
- Many contemporary sans-serifs draw the f without an overhanging arm. Fi and fl no longer collide, so the ligature becomes an optional refinement rather than a necessary fix. Design convention, not a measured constant.
- Some typefaces omit ligatures entirely by design; the type designer decided the glyph set does not need them.
- All-caps text removes the collision ligatures solve, since capital letters have no ascender hook or tittle to clash with an adjacent f.
- Coding and monospace fonts often disable ligatures even when the font supports them, because every character needs to stay visually distinct and individually countable.

## In Practice
- font-variant-ligatures: normal; (or omitting the property) keeps the browser default of common-ligatures and contextual active, which covers fi/fl-type ligatures in most text.
- font-variant-ligatures: no-common-ligatures no-discretionary-ligatures; strips ligatures for logotypes, monospaced UI, or contexts where letters must be counted individually.
- font-feature-settings: "liga" 0, "dlig" 0; works as a lower-level fallback where font-variant-ligatures support is insufficient.

## Key Numbers
- **5** — OpenType feature tags for ligatures (rlig is mandatory)
