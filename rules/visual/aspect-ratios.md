---
id: "aspect-ratios"
title: "Aspect Ratios"
category: "visual"
priority: "medium"
tldr: "Each ratio belongs to a viewing context: 16:9 for widescreen, 4:5 for Instagram feed, 3:4 for Instagram grid (since Jan 2025), 9:16 for fullscreen vertical and TikTok, 3:2 for photography. Using 16:9 in a mobile feed loses approximately 30–40% of visible screen height compared to 4:5."
tags:
  - web
  - mobile
  - visual
  - marketing
related_rules: []
sources: []
---

## The Rule
- 16:9 (1920×1080px): widescreen standard for TV, desktop video, YouTube, and presentations.
- 4:5 (1080×1350px): portrait feed post (Instagram). 3:4 (1080×1440px): Instagram profile grid display since January 2025, and carousels.
- 9:16 (1080×1920px): fullscreen vertical mobile. TikTok recommends 9:16 for all content. Also used for Reels and Stories.
- 1:1 (1080×1080px): square. Profile images, thumbnails, and square feed posts.
- 3:2: photography standard for APS-C and full-frame sensors. Micro Four Thirds cameras use 4:3 natively.
- Using 16:9 in a vertical mobile feed loses approximately 30–40% of visible screen height compared to 4:5. Platform convention, not a measured constant.

## Why
- Each standard ratio emerged from its primary display context: wide and far for TV/desktop, tall and close for mobile.
- A ratio mismatch produces letterboxing (horizontal bars) or pillarboxing (vertical bars), reducing usable viewing area.
- 16:9 was developed in the 1980s and adopted as a broadcast standard through the 1990s and 2000s, before vertical mobile screens existed.
- In algorithm-driven feeds, visible frame area correlates with watch time and completion rate. Platform convention, not a controlled study result.

## When It Breaks
- Intentional cinematic framing: 2.39:1 (cinemascope) and 4:3 are used deliberately for aesthetic effect even in digital contexts.
- Responsive web: images are cropped via CSS (`object-fit: cover`). The source file ratio matters less than the defined crop region and focal point.

## In Practice
- Instagram: upload feed posts and carousels at 1080×1350px (4:5). The profile grid previews in 3:4 automatically. Reels/Stories/TikTok: 1080×1920px (9:16). YouTube: 1920×1080px (16:9).
- For 9:16 formats, keep key content within the center 50–60% of the frame height: the top ~15% and bottom ~25% are covered by platform UI (title, buttons, captions).

## Key Numbers
- **16:9** — Widescreen standard. TV, desktop, YouTube
- **4:5** — Instagram feed post. 1080×1350px
- **3:4** — Instagram grid/carousel since Jan 2025. 1080×1440px
- **9:16** — Fullscreen vertical. TikTok, Reels, Stories. 1080×1920px
- **1:1** — Square. Profile images, legacy feed
- **3:2** — Photography. APS-C and full-frame sensors
