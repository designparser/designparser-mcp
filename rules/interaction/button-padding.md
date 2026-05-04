---
id: "button-padding"
title: "Button Padding"
category: "interaction"
priority: "high"
tldr: "Text button: symmetric padding.
Icon + label: many design systems reduce icon-side padding by the gap value.
Icon-only: padding = (target − icon) ÷ 2.
All values are approximations. Fine-tune visually."
tags:
  - "interaction"
  - "web"
  - "button"
related_rules:
  - "touch-target"
  - "button-design"
videoUrls:
  tiktok: "https://www.tiktok.com/@designparser/video/7610145870046104834?is_from_webapp=1&sender_device=pc&web_id=7605204772584801814"
  instagram: "https://www.instagram.com/reel/DVHLrdDipEl/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
sources:
  - label: "Material Design 3. Button specs"
    year: "2024"
  - label: "Apple Human Interface Guidelines"
    year: "2024"
---

## The Rule
- Text-only button: symmetric padding. Web standard: 8–12px vertical, 16–24px horizontal.
- Leading icon button: many design systems apply a gap-based compensation, reducing icon-side padding by the gap value. MD3 example: 24dp text-side, 8dp gap, 16dp icon-side.
- Trailing icon button: the same logic in reverse. Right padding is reduced by the gap value instead.
- Icon-only button: padding = (target size − icon size) ÷ 2. For a 48px target with a 24px icon, that is 12px on all sides.
- All values are approximations. With larger icons or tight layouts, adjust by ±2–4px based on visual judgment.

## Why
- Symmetric padding centers geometry, not visual weight. The icon adds mass on one side and the perceived center shifts, even when the numbers are equal.
- The icon-to-label gap inflates the icon side further. Reducing padding on that side compensates.
- This is a Gestalt effect, not a normative rule. MD3 applies gap-based compensation consistently, but neither Apple HIG nor WCAG define it as a requirement.

## When It Breaks
- Large icons (20–24px) with full gap compensation often over-correct. Reduce by 2–4px instead.
- Filled icons have more optical weight than outline icons. They may need slightly more correction.
- RTL layouts: flip the asymmetry. Use padding-inline-start and padding-inline-end to handle it automatically.
- Touch target size is a separate concern. See the touch-target rule.

## In Practice
- Text button: padding: 8px 16px (desktop), 10px 24px (touch).
- Leading icon (MD3 convention): padding: 10px 24px 10px 16px. Icon 18dp, gap 8dp.
- Icon-only (48px target): padding: 12px. Check in DevTools that the hit area reaches at least 44px.

## Key Numbers
- **16 / 24dp** — MD3 icon-side / text-side (leading icon)
- **8dp** — Icon-to-label gap (MD3 standard)
- **±2–4px** — Visual fine-tune range
