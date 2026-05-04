---
id: "button-design"
title: "Button Design"
category: "interaction"
priority: "high"
tldr: "6 states: normal, hover, focus, active, disabled, loading. Each has a specific color treatment. Max 1 primary per screen. Never rely on color alone."
tags:
  - "interaction"
  - "accessibility"
  - "web"
  - "button"
  - "conversion"
related_rules:
  - "wcag-contrast"
  - "touch-target"
  - "button-padding"
videoUrls:
  tiktok: "https://www.tiktok.com/@designparser/video/7594923095039757590?is_from_webapp=1&sender_device=pc&web_id=7605204772584801814"
  instagram: "https://www.instagram.com/reel/DTdj46ojXaO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
sources:
  - label: "W3C. WCAG 2.2"
    year: "2023"
  - label: "WebAIM. The WebAIM Million"
    year: "2024"
---

## The Rule
- Hierarchy: max 1 primary + 1 secondary per section. Never two equally weighted CTAs.
- Normal: solid fill with 4.5:1 contrast ratio on label. This is the baseline all other states derive from.
- Hover (light surfaces): darken background 10-15% HSL Lightness. Hover (dark surfaces): lighten 10-15%. Add cursor:pointer. Subtle transition 150ms.
- Focus: 2px solid outline, 2px offset from the element edge. Color must contrast 3:1 against adjacent background (WCAG 2.2 SC 2.4.11). Never remove outline, only style it.
- Active/Pressed: darken 20-30% HSL Lightness from normal. Optional: 1px inset shadow, 1px downward translate. Signals physical press.
- Disabled: 40% opacity on the entire button (design convention, no normative standard specifies this value). cursor:not-allowed. aria-disabled='true'. Never change only color to signal disabled; opacity is the universal signal.
- Loading: replace label with a spinner, keep button disabled. Restore on completion. Prevents double-submit race conditions.

## Why
- Focus rings exist for keyboard and switch users. Removing outline:none without a replacement excludes users who navigate without a mouse.
- WebAIM Million (2024) consistently ranks missing or inadequate focus indicators among the top accessibility failures.
- Hover darkening by 10-15% is perceptually significant enough to signal interactivity without looking broken.
- Disabled at 40% opacity reads as 'unavailable' universally across cultures, color-blind users included.
- Active/pressed state at 20-30% darker closes the feedback loop: the user knows their input registered.
- Loading state (spinner + disabled) prevents double-submit race conditions on async actions.

## When It Breaks
- Dark mode: hover darkening becomes lightening. Define both explicitly. Don't assume one style works for both.
- Destructive actions like Delete: always two-step. Red color + a confirmation dialog. Never a single irreversible button.
- Icon-only buttons: tooltip required (aria-label). Touch target minimum 44×44px even if the icon is 24px.
- Ghost buttons on images: outline can disappear. Always check contrast of border against the background behind it.

## In Practice
- Primary: solid fill, high-contrast label, full opacity. One per screen section.
- Secondary: outlined or ghost. Same size as primary, lower visual weight.
- Tertiary: text-only, no background or border. For least-important actions.
- Focus ring color: use brand color or system blue (#0066CC). Offset 2px so it doesn't touch the element.
- Disabled formula: take normal state → set opacity to 0.4. Do not change the color or shape.

## Key Numbers
- **4.5:1** — Minimum contrast ratio for button label (normal state)
- **3:1** — Minimum contrast ratio for focus ring against background (WCAG 2.2 SC 2.4.11)
- **10-15%** — Hover: darken background by this amount
- **20-30%** — Active/pressed: darken background by this amount
- **40%** — Disabled: opacity applied to full button
- **2px / 2px** — Focus ring: outline width / offset from element
