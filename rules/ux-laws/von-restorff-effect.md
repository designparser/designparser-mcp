---
id: "von-restorff-effect"
title: "Von Restorff Effect"
category: "ux-laws"
priority: "high"
tldr: "One isolated element per group is noticed and remembered more reliably than similar items. Multiple outliers cancel the effect — always pair color isolation with a second channel for color-blind users (~8% of males)."
tags:
  - ux-law
  - visual
  - web
  - conversion
related_rules:
  - emphasis
  - red-green-color-blindness
sources:
  - label: "Von Restorff. Über die Wirkung von Bereichsbildungen im Spurenfeld. Psychologische Forschung 18"
    year: "1933"
  - label: "Hunt. The subtlety of distinctiveness: What von Restorff really did. Psychonomic Bulletin and Review, 2(1)"
    year: "1995"
---

## The Rule
- One element that differs visually from its group is remembered and noticed more reliably than similar items (Von Restorff 1933).
- Distinctiveness is relational, not absolute. An element is isolated only when it differs clearly from its direct neighbors.
- Prefer one primary differentiating channel (color, size, shape, or animation). Additional channels may reinforce, but should not compete or crowd.
- More than one isolated element per group eliminates the effect.

## Why
- The brain encodes novelty more deeply than repetition.
- Distinct stimuli trigger a stronger orienting response, leading to deeper memory encoding at first sight (Von Restorff 1933; Hunt 1995).
- The advantage operates at encoding, not retrieval. The isolated item is processed more thoroughly at the moment of first sight.
- When multiple items deviate from the group norm, each new outlier reduces the relative distinctiveness of the others.
- The group average shifts and the isolation advantage collapses.

## When It Breaks
- Multiple competing isolates cancel each other out.
- One highlighted pricing tier works. Three highlighted tiers mean none of them stands out.
- Color alone fails for red-green color-blind users (~8% of males). Combine color isolation with shape, size, or a label.
- High memorability does not guarantee action. An isolated element still needs a clear affordance and label for click-through.

## In Practice
- Pricing tables: differentiate the recommended tier with a filled background card; all other tiers use outline cards.
- Use one highlighted tier only. Adding a second cancels the effect.
- Navigation: give the primary CTA button a filled brand color; all other nav items remain text or ghost style.
