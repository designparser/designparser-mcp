---
id: "wcag-typography"
title: "WCAG Typography"
category: "typography"
priority: "high"
tldr: "Text must resize to 200% without loss of content (SC 1.4.4 AA). Prefer real text over images of text (SC 1.4.5 AA). No content or functionality is lost when spacing is overridden: line-height ≥ 1.5×, letter-spacing ≥ 0.12×, word-spacing ≥ 0.16× font size (SC 1.4.12 AA)."
tags:
  - "accessibility"
  - "typography"
  - "web"
  - "reading"
related_rules:
  - "line-height"
  - "line-length"
  - "wcag-contrast"
videoUrls:
  tiktok: ""
  instagram: ""
sources:
  - label: "W3C. WCAG 2.1"
    year: "2018"
  - label: "W3C. WCAG 2.0"
    year: "2008"
---

## The Rule
- SC 1.4.4 Resize Text (AA, EU-relevant: ja): Text — excluding captions and images of text — can be resized up to 200% without assistive technology and without loss of content or functionality.
- SC 1.4.5 Images of Text (AA, EU-relevant: ja): Where technology supports it, real text is used instead of images of text. Exceptions: images of text that are visually customizable to the user's requirements, or where a specific text presentation is essential to the information being conveyed. Logotypes are considered essential.
- SC 1.4.12 Text Spacing (AA, EU-relevant: ja): No loss of content or functionality occurs when a user overrides all of the following simultaneously — line height to at least 1.5× the font size, spacing following paragraphs to at least 2× the font size, letter spacing to at least 0.12× the font size, word spacing to at least 0.16× the font size. The content itself is not required to use these values; the requirement is that overriding them does not break the layout.

## Why
- Users with low vision routinely zoom to 200% or higher; fixed layouts that break at zoom exclude them entirely.
- Images of text cannot be restyled by browsers, high-contrast mode, or user stylesheets — they are inaccessible to any user who overrides visual presentation.
- Users with dyslexia and cognitive disabilities frequently override letter and word spacing; rigid containers that clip or overflow on override force them back to an unusable default.
- Resize Text and Text Spacing failures are among the most common WCAG 2.x violations found in enterprise audits.

## When It Breaks
- Fixed-height containers with `overflow: hidden` clip reflowed text when spacing is overridden (1.4.12).
- Absolute-positioned elements overlap content that has shifted at 200% zoom (1.4.4).
- Icon fonts used in place of informational text cannot be restyled or read by assistive technology — use SVG with a text alternative instead (1.4.5).
- Single-line navigation bars that do not wrap at 200% force horizontal scrolling and lose controls (1.4.4).
- The text spacing requirement applies only to markup-based content; PDF, canvas, and raster SVG text are not in scope for 1.4.12.

## In Practice
- Use relative units (`rem`, `em`, `%`) throughout so that font size and layout scaling propagate from a single root value.
- Test at 200% browser zoom on every key screen; no content or controls should disappear or become unreachable.
- Use the Text Spacing bookmarklet to inject all four 1.4.12 overrides simultaneously and check for breakage in one pass.
- Set `overflow-wrap: break-word` on text containers to prevent word-spacing overrides from triggering horizontal scroll.
- Replace `<img>` text with real HTML text for all informational copy; reserve images of text for logotypes and cases where a specific visual rendering is essential.

## Key Numbers
- **200%** — Maximum resize without loss of content or functionality (SC 1.4.4 AA)
- **1.5×** — Minimum line height override that must not break layout (SC 1.4.12 AA)
- **2×** — Minimum paragraph spacing override (SC 1.4.12 AA)
- **0.12×** — Minimum letter spacing override (SC 1.4.12 AA)
- **0.16×** — Minimum word spacing override (SC 1.4.12 AA)
