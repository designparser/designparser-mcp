---
id: "hicks-law"
title: "Hick's Law"
category: "ux-laws"
priority: "high"
tldr: "Decision time increases logarithmically with options: RT = a + b x log2(n)."
videoUrls:
  tiktok: "https://www.tiktok.com/@designparser/video/7586812915014012182"
  instagram: "https://www.instagram.com/p/DSlSHpzjT6j/"
sources:
  - label: "Hick. On the rate of gain of information"
    year: "1952"
  - label: "Hyman. Stimulus information as a determinant of reaction time"
    year: "1953"
---

## The Rule
- RT = a + b x log2(n). Doubling the options adds a constant amount of time, not double.
- Going from 2 to 4 options adds the same time as going from 4 to 8.
- Applies only when all options are equally probable and the user does not yet know their goal.

## Why
- More options require more cognitive processing capacity, which slows the decision.
- Critical for short lists like navigation and action buttons. Less relevant for long searchable lists like contacts.

## When It Breaks
- Alphabetical lists: the user knows the target, so Hick's Law does not apply.
- Familiar stimuli: well-known options do not increase decision time.

## In Practice
- Checkout: a single CTA instead of five payment option buttons on the main page. Use progressive disclosure for the rest.

## Key Numbers
- **RT = a + b log2(n)** — Hick-Hyman Law formula. a = base reaction time, b = cognitive processing coefficient, n = number of choices
