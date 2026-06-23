---
id: "wcag-images"
title: "WCAG Non-text Content & Alt Text"
category: "media"
priority: "critical"
tldr: "All non-text content must have a text alternative that serves the equivalent purpose (SC 1.1.1 A, EU-relevant: ja). Decorative images get empty alt. Controls get names. CAPTCHAs require a non-visual alternative."
tags:
  - "accessibility"
  - "web"
  - "visual"
  - "icon"
related_rules:
  - "icon-alignment"
  - "icon-bounding-box"
videoUrls:
  tiktok: ""
  instagram: ""
sources:
  - label: "W3C. WCAG 2.0"
    year: "2008"
  - label: "WebAIM. The WebAIM Million"
    year: "2024"
---

## The Rule
- SC 1.1.1 Non-text Content (A, EU-relevant: ja): All non-text content presented to the user has a text alternative that serves the equivalent purpose, with the following exceptions:
- Controls and inputs: non-text content that is a control or accepts user input has a name that describes its purpose.
- Time-based media: text alternatives at minimum provide descriptive identification; detailed equivalents are covered under Guideline 1.2.
- Tests and exercises: non-text content that would be invalid if presented as text requires descriptive identification only.
- Sensory content: non-text content intended primarily to create a specific sensory experience requires descriptive identification only (e.g., "Photo of fog over the Golden Gate Bridge at dawn").
- CAPTCHA: text alternatives identify and describe the CAPTCHA's purpose, and alternative forms using different sensory modalities are provided.
- Decoration, formatting, invisible: implemented so that assistive technology ignores it — `alt=""` for decorative `<img>`, `aria-hidden="true"` for decorative inline SVG.

## Why
- Screen readers cannot derive meaning from pixel data; without a text alternative, images are announced only by filename, which is uninformative and frequently disruptive.
- Missing alt text is the most common WCAG failure globally: WebAIM Million 2024 found it on over 54% of tested homepages.
- Icon buttons without accessible names are announced as "button" or "image" with no action label — keyboard and switch-access users cannot identify the control's purpose.
- Decorative images with non-empty alt text add noise to the screen reader experience and slow down navigation.

## When It Breaks
- `alt` set to the filename ("logo_v2_final.png") or to the image URL — fails 1.1.1 in practice even if the attribute is technically present.
- CSS background images used for informational content: background images cannot carry an `alt` attribute — move informational images into `<img>` elements with alt text.
- Inline SVG icons without `aria-label` on the parent button, without a `<title>` element, and without `aria-hidden="true"` — screen reader output is unpredictable.
- Complex images (charts, graphs, diagrams) with alt text that names the chart type but does not convey the data — the text alternative must communicate the information, not merely identify the content.
- Image buttons with `alt=""` are inaccessible: an empty alt removes the accessible name from a control that requires one.

## In Practice
- Write alt text that conveys equivalent purpose, not a description of appearance: "Bar chart showing Q3 revenue up 14% year-over-year" not "bar chart image".
- Use `alt=""` for decorative images (mood photography, spacers, visual separators) so screen readers skip them.
- For icon buttons: add `aria-label="[action]"` to the `<button>` element, or add a `<title>` inside the `<svg>` and `role="img"` on the SVG element.
- For complex charts and diagrams: provide the full data table or prose summary adjacent or linked, and reference it in the alt text.
- Automated tools (axe, WAVE) detect structural failures reliably but cannot assess alt text quality — manual review of every image's alt text is required.

## Key Numbers
- **54%** — Share of homepages with missing image alt text failures, per WebAIM Million 2024
