---
id: "link-design"
title: "Link Design"
category: "interaction"
priority: "medium"
tldr: "Underline is the universal affordance. Visited state is required. Inline links are not the same as standalone links."
videoUrls:
  tiktok: "https://www.tiktok.com/@designparser/video/7595329775829372182?is_from_webapp=1&sender_device=pc&web_id=7605204772584801814"
  instagram: "https://www.instagram.com/reel/DTgbgtsDWtG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
sources:
  - label: "WCAG 2.2 SC 1.4.1 Use of Color"
    year: "2023"
---

## The Rule
- Inline links: always underlined. Color alone is not sufficient for accessibility.
- Standalone and nav links: color + hover underline is acceptable.
- Visited state: use a distinct color for links the user has already visited.
- External links with target=_blank: announce the behavior explicitly. An icon alone is insufficient for screen reader users.
- Use aria-label or visually-hidden text, e.g. 'opens in a new tab'. WCAG G201 recommends warning users before opening new windows.

## Why
- WCAG 2.2 SC 1.4.1: color alone is not sufficient for distinguishing links. An underline or other non-color differentiator is required.
- Visited state provides spatial orientation. Users know where they have already been.
- Links must be distinguishable from surrounding text at a 3:1 ratio without relying on color.

## When It Breaks
- Button vs. link: actions use buttons, navigation uses links. These are semantically distinct and not interchangeable.
- Too many inline links create visual noise and eliminate clear scan paths.

## In Practice
- Set text-decoration: underline in body copy. Removing it on hover is wrong. The underline is the primary affordance and must be preserved.
