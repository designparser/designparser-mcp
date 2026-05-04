---
id: "all-caps-fatigue"
title: "All Caps Fatigue"
category: "typography"
priority: "medium"
tldr: "All caps is 9.5-19% slower to read (Tinker 1955). It removes word shape recognition."
videoUrls:
  tiktok: "https://www.tiktok.com/@designparser/video/7592338757697785110"
  instagram: "https://www.instagram.com/p/DTLoF7GjT2V/"
sources:
  - label: "Tinker. Legibility of Print"
    year: "1955"
---

## The Rule
- All caps reads 9.5-19% slower (Tinker 1955, 20-minute print reading study. No equivalent screen data exists at this precision; treat as directional).
- Requires noticeably more horizontal space than mixed case (~35% is widely cited in design literature; no confirmed primary source).
- No ascenders or descenders means no word shape recognition, forcing letter-by-letter reading.
- Acceptable uses: short labels, tags, logos, and single-line headings only.

## Why
- Mixed case creates unique word silhouettes through ascenders like h and d and descenders like g and y.
- All caps gives every word the same uniform height. The brain cannot use word-shape heuristics.
- The result is serial letter processing instead of parallel word recognition.

## When It Breaks
- Avoid all caps for paragraphs, body text, or long passages. Increased fixation rate (approximately 12% more fixations, Tinker 1949) indicates higher processing load and reduced comprehension.
- Screen reader behavior for ALL CAPS text varies by software and user settings. Some tools read words normally, others spell them letter by letter. Use CSS text-transform: uppercase so the source text stays mixed case and screen readers receive correct input.

## In Practice
- Use CSS text-transform: uppercase instead of typing capitals manually. Screen readers will read it as a word, not letter by letter.

## Key Numbers
- **9.5-19%** — Slower reading speed (Tinker 1955)
- **35%** — Extra horizontal space (widely cited; no confirmed primary source)
