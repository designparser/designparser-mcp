---
id: "shadow-fundamentals"
title: "Shadow Fundamentals"
category: "shadows"
priority: "high"
tldr: "Single light source from above. Shadows always point down. Depth starts with edges, not shadows."
tags:
  - shadow
  - web
videoUrls:
  tiktok: "https://www.tiktok.com/@designparser/video/7597574236005289238"
  instagram: "https://www.instagram.com/p/DTv9DGRjafS/"
sources:
  - label: "Sun, Perona et al. Prior knowledge of illumination for 3D perception. PNAS"
    year: "2010"
  - label: "Ramachandran. Perception of shape from shading. Nature"
    year: "1988"
---

## The Rule
- UI simulates a single light source from above, like daylight or overhead lighting.
- Shadows always point downward. Never upward.
- Top edges are lighter (facing the light). Bottom edges are darker (facing away).
- Depth through edge contrast comes first. Shadows reinforce depth, they do not compensate for its absence.

## Why
- The visual system has a prior expectation of light from above.
- Sun et al. (PNAS 2010) showed this is encoded in early visual areas, independent of perceived shape.
- Ramachandran (1988) demonstrated the assumption persists even when head orientation changes.
- Inconsistent light direction causes an immediate break in perceived realism.
- Edge contrast alone allows the brain to infer spatial position without shadows.

## When It Breaks
- Multiple light sources produce inconsistent depth cues and visual chaos.
- Using shadows to hide poor geometry does not work. Fix the shape first.

## In Practice
- Never use pure black. Use rgba(0,0,0,0.1-0.3) so shadows blend into the background color.
