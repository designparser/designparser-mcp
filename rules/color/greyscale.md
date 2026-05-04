---
id: "greyscale"
title: "Greyscale First"
category: "color"
priority: "medium"
tldr: "Structure must work in grey. Color is an enhancement, not a fix."
tags:
  - "color"
  - "visual"
  - "web"
related_rules:
  - "wcag-contrast"
  - "visual-weight"
videoUrls:
  tiktok: "https://www.tiktok.com/@designparser/video/7589740892349566230"
  instagram: "https://www.instagram.com/reel/DS6Q5tWiC6c/"
sources:
  - label: "Lupton. Thinking with Type"
    year: "2014"
  - label: "Material Design. Color system (guidelines)"
    year: "2021"
---

## The Rule
- Design in greyscale first. Hierarchy, contrast, and spacing must work without color.
- Use a 9-step scale (100-900): enough range, not overwhelming.
- Avoid pure grey. Add 2-10% saturation for a warm or cool neutral feel.
- Active Set: use only 4-6 steps per screen, not all 9.

## Why
- If the UI breaks in greyscale, the structure is broken. This is a design principle, not a perceptual law: color does not fix structural problems.
- Contrast in grey determines legibility. Over 90% of text is lowercase (Jones & Mewhort, 2004); x-height, not cap height, sets the legibility standard.
- Darker steps (700-900) need more saturation to appear visually neutral.

## When It Breaks
- Purely decorative elements like illustrations and heroes operate under different rules.
- Pure grey at 0% saturation looks cold and lifeless. Always add a slight tint.

## In Practice
- Step 1: finish the layout in greyscale. Step 2: apply brand color only to CTAs and accents.
