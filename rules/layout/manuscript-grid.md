---
id: "manuscript-grid"
title: "Manuscript Grid"
category: "layout"
priority: "medium"
tldr: "One text column, four margins. Column width: 45 to 75 CPL (Bringhurst) or 50 to 75 (Baymard). On wide screens, an explicit max-width is required or line length exceeds the readable range."
tags:
  - web
  - layout
  - reading
related_rules:
  - line-length
  - modular-grid
  - twelve-column-grid
sources:
  - label: "Tschichold. The Form of the Book. Hartley and Marks"
    year: "1991"
  - label: "Mueller-Brockmann. Grid Systems in Graphic Design. Niggli (orig. 1961, this ed. 1996)"
    year: "1996"
  - label: "Bringhurst. The Elements of Typographic Style. Hartley and Marks"
    year: "1992"
  - label: "W3C. WCAG 2.2 SC 1.4.8. Visual Presentation"
    year: "2023"
---

## The Rule
- A manuscript grid defines one text column per page or screen, bounded by four margins.
- Column width: 45 to 75 characters per line.
- In print, Tschichold's margin conventions for bound books: 1:1:2:3 (geometric construction model) and 2:3:4:6 (Van de Graaf construction), inner:top:outer:bottom. On screen, equal horizontal margins with a defined max-width serve the same grounding function.
- On viewports wider than the column max-width, the column must be centered explicitly. Without a max-width, line length exceeds the readable range.

## Why
- A single column eliminates competing reading paths. The eye follows one direction with no column-switching cost.
- Bringhurst (1992) gives 45 to 75 CPL, a typographic tradition standard. Baymard gives 50 to 75 from UX research, comfort often observed around 50 to 60. Below 45 CPL, excessive line breaks interrupt reading rhythm. WCAG 1.4.8 recommends no more than 80 characters per line.
- Traditional margin hierarchy compensates for the visual effect of book binding: the gutter makes the inner margin appear narrower than its measured value. On screen, a smaller top margin and larger bottom margin still produce a more grounded page composition.
- Design convention with roots in Renaissance manuscript and early print tradition, codified through Swiss grid theory by Tschichold and Mueller-Brockmann.

## When It Breaks
- Multi-column content (comparison tables, data dashboards, image galleries) requires a different grid structure. Manuscript grid is for text-primary layouts only.
- Marketing and landing pages with full-bleed sections, hero images, or alternating layout modules cannot be constrained to a single column. Use a 12-column or compound grid.
- Very short content (single-screen apps, forms, modals) does not benefit from manuscript proportions. The system is designed for multi-page reading flow.

## In Practice
- Article layout: `max-width: 65ch; margin-inline: auto; padding-inline: 1.5rem;` — sets a single readable column on all viewport widths.

## Key Numbers
- **45–75** — CPL range: Bringhurst 1992 gives 45–75; Baymard gives 50–75 (comfort often observed ~50–60)
- **1:1:2:3 / 2:3:4:6** — Tschichold margin ratios for bound books (inner:top:outer:bottom)
- **65ch** — Common CSS max-width; ch is the width of '0', actual CPL varies by typeface (roughly 60–75)
