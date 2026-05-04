---
id: "color-naming"
title: "Color Naming"
category: "color"
priority: "medium"
tldr: "Primitives store values. Semantics define meaning. Never use raw hex in designs."
videoUrls:
  tiktok: "https://www.tiktok.com/@designparser/video/7590118285107105046?is_from_webapp=1&sender_device=pc&web_id=7517983817683764759"
  instagram: "https://www.instagram.com/p/DS8PMNeDc9f/"
sources:
  - label: "W3C Design Tokens Community Group. Design Tokens Format Module (Editor’s Draft)"
    year: "2024"
  - label: "Salesforce. Lightning Design System — Design Tokens"
    year: "2024"
---

## The Rule
- Primitives (100-900): store values only. Example: Primary/600, Neutral/900.
- Semantics: define meaning. Example: Text/Primary, Background/Page.
- Semantics reference primitives, never hex values directly.
- Format: [Element]/[Purpose]/[State]. Example: Text/Primary/Hover.

## Why
- Rebrand: change a primitive once and all semantics update automatically.
- Dark mode: semantics stay the same, they just reference different primitives.
- Using primitives directly in designs breaks dark mode because there is no automatic contrast flip.

## When It Breaks
- Too many semantic tokens create an unmanageable hierarchy and decision paralysis.
- Naming by color like DarkBlue instead of by function like Text/Primary breaks on rebrand.

## In Practice
- Text/Primary = Neutral/900 in light mode and Neutral/100 in dark mode. One semantic token, two states.
