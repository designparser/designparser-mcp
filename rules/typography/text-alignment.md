---
id: "text-alignment"
title: "Text Alignment"
category: "typography"
priority: "high"
tldr: "Left-align body text for predictable return sweeps. Justified text can fail WCAG 2.2 SC 1.4.8 (AAA) on the web; centered text is limited to 1-3 lines."
videoUrls:
  tiktok: "https://www.tiktok.com/@designparser/video/7611204591891270934?is_from_webapp=1&sender_device=pc&web_id=7605204772584801814"
  instagram: "https://www.instagram.com/reel/DVOiVYpivR6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
sources:
  - label: "WCAG 2.2 SC 1.4.8, Failure F88"
    year: "2023"
  - label: "Ling and van Schaik. Displays Journal"
    year: "2007"
  - label: "W3C Low Vision Accessibility Task Force. Text Justification"
    year: "2023"
---

## The Rule
- Left-align body text in LTR interfaces. Fixed left edge for return sweeps.
- Justified text (text-align: justify) can fail WCAG 2.2 F88 / SC 1.4.8 (AAA) on the web.
- Responsive containers make justified word gaps unpredictable across breakpoints.
- Centered text: max 1–3 lines. Headings, captions, short CTAs only. No multi-line body text.
- Numeric table columns: right-aligned. Enables place-value comparison.
- RTL (Arabic, Hebrew): right-align via dir='rtl' in HTML, not manually in CSS.

## Why
- Saccadic return sweeps need a predictable left anchor. Left-alignment provides one on every line.
- Justified text: variable word spacing disrupts reading rhythm, adds no right anchor.
- Ling & van Schaik (2007, n=65): left-alignment produced better accuracy and response time than justified text.
- Same study: participants preferred justified text subjectively. Preference diverges from performance.
- Rivers of white: irregular vertical gaps from stretched word spacing. Worsen above 200% zoom.

## When It Breaks
- Print with hyphenation: justified acceptable with professional algorithms and fixed column widths. Web lacks this control.
- Centered headlines: legitimate for short display text, up to ~3 lines.
- Numeric data: right-align integers and decimals in table cells. Left-aligning numbers breaks place-value comparison.

## In Practice
- Body: text-align: left. max-width: 65ch (reading sweet spot; WCAG SC 1.4.8 AAA max: 80ch).
- WCAG 2.2 SC 1.4.8: add line-height: 1.5 and margin-bottom: 1.5em alongside alignment.
- Justified print: wrap in @media print, add hyphens: auto. Never apply justify outside that scope.
- Numeric columns: .numeric { text-align: right } on all value cells and headers.

## Key Numbers
- **80ch** — Max line length (WCAG 2.2 SC 1.4.8)
- **1.5** — Min line-height for body text (WCAG 2.2 AAA)
- **1–3 lines** — Max length for centered text (WCAG Low Vision)
