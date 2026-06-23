---
id: "wcag-navigation"
title: "WCAG Navigation & Page Structure"
category: "navigation"
priority: "high"
tldr: "Pages need descriptive titles (SC 2.4.2 A). Links must convey their purpose from text alone or in context (SC 2.4.4 A). Headings and labels describe topic or purpose (SC 2.4.6 AA). Repeated navigation appears in the same relative order across pages (SC 3.2.3 AA). Identical functions are identified consistently (SC 3.2.4 AA)."
tags:
  - "accessibility"
  - "web"
  - "navigation"
  - "link"
related_rules:
  - "link-design"
  - "type-hierarchy"
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
- SC 2.4.2 Page Titled (A, EU-relevant: ja): Web pages have titles that describe their topic or purpose. The title must identify the page distinctly within the site.
- SC 2.4.4 Link Purpose (In Context) (A, EU-relevant: ja): The purpose of each link can be determined from the link text alone, or from the link text together with its programmatically determined context — the enclosing sentence, list item, table cell, or heading. Exception: the purpose would be ambiguous to users in general.
- SC 2.4.6 Headings and Labels (AA, EU-relevant: ja): Headings and labels describe the topic or purpose of the content they label. Not all content requires headings or labels; those that are present must be accurate.
- SC 3.2.3 Consistent Navigation (AA, EU-relevant: ja): Navigation mechanisms repeated across multiple pages within a site appear in the same relative order each time they are repeated, unless the user initiates a change.
- SC 3.2.4 Consistent Identification (AA, EU-relevant: ja): Components with the same functionality within a set of pages are identified consistently — the same name, label, or text alternative each time.

## Why
- Page titles are the first element announced by a screen reader; a non-descriptive title ("Home", "Page 1", "React App") gives no context and forces the user to read the entire page.
- Generic link text ("click here", "read more", "download") provides no destination information when screen reader users navigate by links list — a standard navigation pattern.
- Accurate headings allow keyboard and screen reader users to scan and jump directly to the section they need; decorative or empty headings break this entirely.
- Consistent navigation and identification reduce cognitive load for all users and are essential for users with memory or cognitive impairments who rely on predictable patterns across sessions.
- Inconsistent labeling of the same function ("Search" on one page, "Find" on another) breaks the mental model assistive technology users build over time.

## When It Breaks
- `<title>` left as the framework default ("React App", "Untitled") — fails 2.4.2.
- "Read more" links without accessible context: `aria-label="Read more about [topic]"` or a visually-hidden span resolves this for 2.4.4.
- Heading tags used for visual styling rather than document structure — `<h3>` for a decorative pull quote — produces a broken landmark hierarchy (2.4.6).
- DOM reordering for different viewports that changes the relative sequence of navigation items — fails 3.2.3. Use CSS for visual repositioning instead.
- A search field labeled "Search" on one page and "Find" on another page of the same site — fails 3.2.4.

## In Practice
- Set `<title>` to "[Page Name] — [Site Name]" for every page; update it programmatically on client-side navigation in single-page applications.
- For icon links and "Read more" links, add `aria-label` or visually-hidden text that supplies the destination or action.
- Use one `<h1>` per page, structured heading levels (`<h2>` under `<h1>`, `<h3>` under `<h2>`), and keep heading text descriptive of the content that follows.
- Lock navigation DOM order; use CSS flex `order` or Grid placement to reposition visually without altering source order across viewports.
- Maintain a controlled vocabulary for interactive component labels and apply it consistently across all screens and surfaces.
