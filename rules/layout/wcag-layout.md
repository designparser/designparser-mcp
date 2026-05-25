---
id: "wcag-layout"
title: "WCAG Layout, Reflow & Pointer Targets"
category: "interaction"
priority: "high"
tldr: "Content must not lock to a single orientation unless essential (SC 1.3.4 AA). Content must reflow at 320 CSS px width — equivalent to 400% zoom — without two-dimensional scrolling (SC 1.4.10 AA). Drag functions need a single-pointer alternative (SC 2.5.7 AA). Pointer targets must be at least 24×24 CSS px (SC 2.5.8 AA)."
tags:
  - "accessibility"
  - "web"
  - "mobile"
  - "layout"
  - "interaction"
related_rules:
  - "touch-target"
  - "8pt-grid"
videoUrls:
  tiktok: ""
  instagram: ""
sources:
  - label: "W3C. WCAG 2.2"
    year: "2023"
  - label: "W3C. WCAG 2.1"
    year: "2018"
---

## The Rule
- SC 1.3.4 Orientation (AA, EU-relevant: ja): Content does not restrict its view and operation to a single display orientation (portrait or landscape) unless that orientation is essential. Essential cases: bank checks, piano keyboards, projector slides, VR heads-up displays.
- SC 1.4.10 Reflow (AA, EU-relevant: ja): Content can be presented without loss of information or functionality and without requiring scrolling in two dimensions at a viewport width of 320 CSS px for vertical-scrolling content, or 256 CSS px height for horizontal-scrolling content. 320 CSS px is equivalent to a 1280 CSS px viewport at 400% zoom. Exceptions: maps, diagrams, video, data tables, and interfaces where toolbars must remain visible during content manipulation require two-dimensional layout by nature.
- SC 2.5.7 Dragging Movements (AA, EU-relevant: ja): All functionality that uses a dragging movement can also be operated by a single pointer without dragging, unless dragging is essential or the behavior is determined by the user agent.
- SC 2.5.8 Target Size (Minimum) (AA, EU-relevant: ja): Pointer input targets are at least 24×24 CSS px. Exceptions: undersized targets with sufficient spacing (a 24 CSS px diameter circle centered on the bounding box does not intersect another target), an equivalent control elsewhere on the page, inline targets in text, user-agent-controlled size, and essential presentations.

## Why
- Orientation lock excludes wheelchair users with tablets mounted at a fixed angle and users with motor disabilities who hold devices in a single position.
- At 400% zoom — a common setting for low-vision users — a 1280 CSS px page reflows to 320 CSS px. Content that forces horizontal scrolling at this width prevents effective reading.
- Drag-and-drop interfaces with no alternative are completely inaccessible to switch access users, keyboard-only users, and users with tremor.
- Undersized touch targets cause miss-taps and are consistently cited as the leading mobile accessibility complaint in user research.

## When It Breaks
- CSS `orientation: landscape` or `portrait` queries that hide, disable, or replace content — lock orientation only when a specific orientation is genuinely essential.
- Fixed-width layouts, absolute-positioned sidebars, and non-wrapping flex rows that produce horizontal scroll at 320 CSS px (1.4.10).
- Drag-to-reorder lists, sliders with no keyboard input, and resizable panels with no alternative (2.5.7).
- Icon-only toolbar buttons smaller than 24×24 CSS px that are too close together to meet the spacing exception (2.5.8).
- Data tables with many columns inherently require two-dimensional scrolling and are exempt from 1.4.10, but column pinning and accessible scrolling should still be provided.

## In Practice
- Use `@media (orientation: landscape)` only to enhance presentation; never use it to block or omit functionality.
- Test reflow at 400% browser zoom with a 1280 CSS px viewport — no horizontal scrollbar should appear for primary content.
- For drag-and-drop lists, provide keyboard controls (arrow keys, or explicit move up/down buttons) as the pointer alternative.
- Set a minimum target size of 24×24 CSS px for all interactive elements; size primary actions to 44×44 CSS px for comfortable activation.

## Key Numbers
- **320 CSS px** — Viewport width at which content must reflow without two-dimensional scrolling (SC 1.4.10 AA)
- **256 CSS px** — Viewport height for horizontal-scrolling content equivalence (SC 1.4.10 AA)
- **400%** — Browser zoom at which a 1280 CSS px viewport becomes 320 CSS px (SC 1.4.10 reference)
- **24×24 CSS px** — Minimum pointer target size (SC 2.5.8 AA)
- **44×44 CSS px** — Recommended target size for primary actions; required at AAA (SC 2.5.5)
