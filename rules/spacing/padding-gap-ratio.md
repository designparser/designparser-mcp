---
id: "padding-gap-ratio"
title: "Padding Gap Ratio"
category: "spacing"
priority: "high"
tldr: "Container padding must exceed the gap between sibling containers. When padding equals the gap, containment becomes less reliably perceived. Common heuristic: padding ≥ 1.5× gap. Design convention."
tags:
  - web
  - spacing
  - layout
related_rules:
  - 8pt-grid
  - proximity
  - active-white-space
sources:
  - label: "Wertheimer. Untersuchungen zur Lehre von der Gestalt II. Psychologische Forschung 4"
    year: "1923"
  - label: "Treisman, Gelade. A Feature-Integration Theory of Attention. Cognitive Psychology 12"
    year: "1980"
---

## The Rule
- The internal padding of a container must be greater than the gap between that container and its siblings. When padding equals the gap, items at the container's edge are equidistant from their parent and the adjacent container. Containment becomes ambiguous.
- Common heuristic: padding ≥ 1.5× gap at the same nesting level. Design convention: no single empirical primary source for the 1.5× threshold.
- Apply the ratio at every nesting level: section padding must exceed the column gap; card padding must exceed the card-grid gutter; list-item padding must exceed the list's row gap.
- Increasing the ratio strengthens the containment signal. A 2× or 3× ratio is perceptually stronger, limited by how much empty space the container can carry before content appears lost inside it.

## Why
- Gestalt proximity: items physically closest are grouped first (Wertheimer 1923). Spatial grouping also operates pre-attentively, processed before focused attention (Treisman, 1980). Padding and gap are both applications of proximity. Internal padding creates closeness to the parent; external gap creates separation from siblings.
- When padding equals the gap, items on a card edge are as close to the adjacent card as to their own card's content. The grouping cue becomes ambiguous and hierarchy must be carried by color or border alone.

## When It Breaks
- Full-bleed containers: images or media that extend to the container edge intentionally violate this ratio. Containment is communicated by the frame border or background color instead.
- Dense data tables: padding compression is intentional. Containment is communicated by cell borders and row striping. The ratio matters less when explicit visual boundaries carry the grouping.
- Cards with visible borders or distinct background colors: the boundary itself signals containment and the padding-gap ratio becomes a secondary cue. Padding can be reduced without ambiguity.

## In Practice
- Card grid with 16px gutter: card padding ≥ 24px (1.5×). 32px padding (2×) is perceptually more reliable.
- Navigation group: 8px gap between nav items and item padding ≥ 12px. Below 12px, items appear to float between groups rather than belong to a single row.
- Nested layout: outer section padding = 40px, inner card gutter = 24px, inner card padding = 20px. Each level's padding exceeds the gap one level down.

## Key Numbers
- **≥1.5×** — Common heuristic for container padding vs. sibling gap. Design convention.
