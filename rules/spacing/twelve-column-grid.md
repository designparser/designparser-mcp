---
id: "twelve-column-grid"
title: "12-Column Grid"
category: "spacing"
priority: "medium"
tldr: "12 columns divide cleanly into halves, thirds, quarters, and sixths. This flexibility makes it the dominant grid convention in web layout systems, from Bootstrap to Material Design."
videoUrls:
  tiktok: "https://www.tiktok.com/@designparser/video/7629381166847495446?is_from_webapp=1&sender_device=pc&web_id=7621951402788800022"
  instagram: "https://www.instagram.com/reel/DXMqS0rCtLL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
sources:
  - label: "Smith. 960 Grid System"
    year: "2007"
  - label: "Bootstrap. Grid system documentation"
    year: "2024"
  - label: "Material Design. Responsive layout grid"
    year: "2024"
---

## The Rule
- A 12-column grid divides the container into 12 equal columns with consistent gutters between them.
- 12 is divisible by 2, 3, 4, and 6, enabling half-width (6 col), third-width (4 col), quarter-width (3 col), and sixth-width (2 col) layouts without fractional columns.
- Standard gutter width is 16-24px. Column width is derived from: (container - (n-1) x gutter) / n.
- This is a design convention, not a perceptual or cognitive standard. The advantage is mathematical flexibility and system interoperability.

## Why
- Nathan Smith's 960.gs (2007) standardized the 12-column approach for web. 960px is evenly divisible by all factors of 12, producing whole-number column widths.
- Bootstrap, Foundation, and Material Design all default to a 12-column grid. CSS Grid is a native browser layout API with no default column count. grid-template-columns must be defined explicitly. Layouts transfer predictably between design tools and component frameworks that adopt the 12-column convention.
- A 10-column grid offers fewer layout combinations. A 16-column grid works but produces narrower columns at common breakpoints.

## When It Breaks
- Five-column layouts are not natively supported. 12 cannot be divided into five equal parts. Use a 10 or 20-column grid when five-column layouts are a core requirement.
- On narrow screens below 360px, 12 columns produce columns too narrow for content. Collapse to 4 or single-column layout at the sm breakpoint.
- Editorial and long-form layouts often need fewer, wider columns. A 6 or 8-column grid with larger gutters may serve reading-focused content better.

## In Practice
- Card grid: span 12 columns at mobile, 6 at tablet, 4 at desktop. CSS Grid: grid-template-columns: repeat(12, 1fr); gap: 16px;
- Content with sidebar: main content spans 8 columns, sidebar spans 4. At tablet, both collapse to 12.

## Key Numbers
- **12** — Columns (divisible by 2, 3, 4, 6)
- **16-24px** — Standard gutter width
