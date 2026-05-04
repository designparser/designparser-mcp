---
id: "optical-center"
title: "Optical Center"
category: "visual"
priority: "medium"
tldr: "The visual center of a rectangle sits roughly 2-6% above its geometric midpoint (~44% from top, print convention, not a validated digital standard). CSS `align-items: center` positions at 50%; the eye reads that as below center."
videoUrls:
  tiktok: "https://www.tiktok.com/@designparser/video/7613432532129860886?is_from_webapp=1&sender_device=pc&web_id=7605204772584801814"
  instagram: "https://www.instagram.com/reel/DVqxz6GigrQ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
sources:
  - label: "Arnheim. Art and Visual Perception"
    year: "1974"
  - label: "Locher, Stappers, Overbeeke. Acta Psychologica 102"
    year: "1999"
  - label: "Stacey. Horizontal-vertical illusion. Life Sciences 8(22)"
    year: "1969"
  - label: "Research on visual size and alignment of icon sets. Displays (ScienceDirect)"
    year: "2023"
---

## The Rule
- Position primary content at the optical center, where the eye settles in the absence of competing stimuli.
- It sits above the geometric center.
- As a starting point: print-framing tradition places the optical center at ~44-47% from the top. Treat as craft convention, not a digital constant.
- Apply this to single focal elements only.
- Note that luminance contrast, motion, and faces override the optical anchor when multiple salient elements compete.

## Why
- The visual system overestimates vertical distances in the upper field (horizontal-vertical illusion, Stacey 1969).
- A geometrically centered element appears to sag downward.
- Locher, Stappers and Overbeeke (1999): lay observers (55%) and design professionals (64%) detected compositional correctness at above-chance rates.
- The effect is perceptual, not learned.
- Apple HIG, Material Design, IBM Carbon, and a 2023 Displays study all document that asymmetric icons require optical, not geometric, centering.

## When It Breaks
- High-salience elements override the optical anchor. A high-contrast image, face, or animated element captures initial fixation regardless of position.
- The 44% value derives from print-framing, not screen research. Mobile portrait orientation may shift the effective anchor. No controlled study has measured this.

## In Practice
- Hero sections: use `transform: translateY(-4%)` to shift a centered element toward the optical center. CSS percentage margins reference container width, not height, making them unreliable for vertical offsets. Tune per layout.
- Icon buttons: play-triangle icons need a `translateX` offset (typically 1-3px) because the triangle's centroid sits at one-third of its height from the base. `transform: translateX(2px); /* verify per icon size */`

## Key Numbers
- **~44%** — Approximate optical center position from the top of a rectangle
- **2-6%** — Estimated upward offset from geometric center (design convention, not a measured constant)
