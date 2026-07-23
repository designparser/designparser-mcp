---
id: "ebbinghaus-illusion"
title: "Ebbinghaus Illusion"
category: "ux-laws"
priority: "medium"
tldr: "A circle surrounded by larger circles is perceived as smaller than an identical circle surrounded by smaller circles (Titchener circles, popularized by Titchener 1901). Perceptual size judgments are affected, while some visually guided actions such as grasping can show reduced sensitivity to the illusion; the degree of separation between perception and action remains debated."
tags:
  - ux-law
  - visual
related_rules:
  - muller-lyer-illusion
  - von-restorff-effect
sources:
  - label: "Titchener. Experimental Psychology: A Manual of Laboratory Practice"
    year: "1901"
  - label: "Aglioti, DeSouza & Goodale. Size-Contrast Illusions Deceive the Eye but Not the Hand. Current Biology, 5(6). Classic finding; later studies have debated the strength and interpretation of the perception-action dissociation"
    year: "1995"
---

## The Rule
- A center circle surrounded by larger circles is perceived as smaller than an identical center circle surrounded by smaller circles, even though the two center circles are physically identical in size.
- The effect is a size-contrast illusion: perceived size is judged relative to surrounding context elements, not in isolation. It is commonly known as the Titchener circles after Titchener's 1901 popularization.
- Magnitude varies with the size ratio, number, spacing, and arrangement of surrounding circles; there is no single fixed percentage distortion across configurations. Design convention: treat the effect as directionally reliable, not a fixed measured constant.
- Perceptual size judgments are strongly affected, while some visually guided motor actions toward the same object, such as reaching to grasp it, can be less affected under certain conditions (Aglioti, DeSouza & Goodale 1995).

## Why
- Relative size judgment is a default visual heuristic: without an absolute size reference, the visual system encodes an object's size relative to its immediate context, so surrounding elements act as an implicit ruler.
- Aglioti, DeSouza & Goodale (1995) reported reduced effects of the illusion on grip aperture during reaching, compared with conscious size judgments of the same discs, supporting evidence for partially dissociable perceptual and action-guiding visual processes. This remains a debated interpretation; later studies have contested both the strength and the theoretical framing of the dissociation.
- Because the illusion depends on relative context, adding, removing, or resizing the surrounding elements changes the perceived size of the central object without changing the object itself.

## When It Breaks
- Moving the two center circles next to each other, removing the surrounding context entirely, eliminates the illusion immediately; the effect requires the flanking elements to stay in place during the comparison.
- Interactive tasks such as clicking, dragging, or resizing may be less affected than passive size comparisons because action provides additional spatial feedback. Do not assume a perceptual size distortion changes interaction accuracy by the same margin.
- Very large size disparities between the center object and its surrounding elements weaken the illusion. It is strongest when surrounding elements differ moderately from the center, not extremely.

## In Practice
- Icon or avatar grids with mixed sizes: a fixed-size icon looks smaller inside a cluster of large icons and larger inside a cluster of small icons. Where exact perceived-size parity matters, for example comparing a metric encoded as icon size, avoid placing the comparison targets inside groups of differently sized neighbors.
- Notification badges and profile pictures: a fixed-size avatar in a list of otherwise large avatars can read as undersized. Keep sibling avatar sizes consistent within a single list or grid.
- Bubble charts and other proportional-circle visualizations: avoid placing circles intended for direct size comparison next to strongly different-sized circles, or provide numeric labels to reduce contextual bias.
