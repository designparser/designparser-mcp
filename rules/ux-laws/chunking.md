---
id: "chunking"
title: "Chunking"
category: "ux-laws"
priority: "high"
tldr: "Group related items into bounded units of 3–5 (design heuristic, not empirical rule) before placing them. A gap 1.5–2× wider between groups than within signals a boundary without a label or border."
tags:
  - ux-law
  - layout
  - spacing
  - web
  - form
related_rules:
  - millers-law
  - proximity
sources:
  - label: "Miller. The Magical Number Seven, Plus or Minus Two. Psychological Review"
    year: "1956"
  - label: "Cowan. The Magical Number 4 in Short-Term Memory. Behavioral and Brain Sciences"
    year: "2001"
  - label: "Wertheimer. Untersuchungen zur Lehre von der Gestalt II. Psychologische Forschung 4"
    year: "1923"
---

## The Rule
- Group related items into named, visually bounded units. A chunk is a set of items sharing a function, context, or identity.
- Target 3–5 items per chunk (design heuristic, not a direct empirical rule).
- Fewer than 3 items is too sparse for a grouping to carry meaning. More than 7 approaches the upper limit of short-term memory capacity (Miller 1956).
- Whitespace alone creates implicit chunks: a gap 1.5–2× larger between groups than within groups signals a boundary without an explicit container or label.
- Design convention: no single empirical primary source for this specific gap ratio.
- Chunking applies at every scale: characters into words, fields into form sections, nav items into categories, pages into site sections.

## Why
- Short-term memory encodes chunks as units, not individual items.
- Cowan (2001) estimates working memory capacity at ~4 chunks.
- Chunking reduces apparent complexity by making the mind process sets as single units, without reducing total content.
- The visual system infers relatedness from proximity before any border or label confirms it (Wertheimer 1923).
- Perceived complexity drops when chunk count drops, not when raw item count drops.

## When It Breaks
- Chunking is not collapsing. Hiding items in accordions adds navigation cost and does not substitute for content organization.
- If the grouping logic is unclear, boundaries add overhead without benefit. The grouping principle must be evident.
- Chunking reorganizes content without reducing it. If volume is excessive, chunking helps but does not solve the underlying overload.

## In Practice
- Checkout form: three chunks with headings: Personal (name, email), Shipping (address, city, postal code), Payment (card number, expiry, CVV).
- Navigation: 5–7 top-level categories, each grouping related sub-items. Alphabetical ordering is sorting, not chunking: it does not create meaningful groups.
- Phone number: split into area code, prefix, and line number. Three 2–3 digit chunks reduce working memory load vs. a single 11-digit string.

## Key Numbers
- **3–5** — Target items per chunk. Design convention, not a measured constant.
- **1.5–2×** — Between-group gap ratio vs. within-group gap. Design convention.
