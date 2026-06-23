---
id: "color-temperature-dominance"
title: "Color Temperature Dominance"
category: "color"
priority: "medium"
tldr: "Avoid equal areas of warm (red, orange, yellow) and cool (blue, green, blue-violet) hues. A balanced 50/50 split forces the viewer’s brain to resolve conflicting depth planes, which can undermine hierarchy, readability, and visual impact."
tags:
  - color
  - web
videoUrls:
  tiktok: "https://www.tiktok.com/@designparser/video/7617944669833465110?is_from_webapp=1&sender_device=pc&web_id=7621951402788800022"
  instagram: "https://www.instagram.com/reel/DV9TABeCs_A/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
sources:
  - label: "Cauquil et al. Neural correlates of chromostereopsis. Neuropsychologia"
    year: "2009"
  - label: "Faubert. Seeing depth in colour. Vision Research"
    year: "1994"
  - label: "Albers. Interaction of Color. Yale University Press"
    year: "1963"
  - label: "Itten. The Art of Color"
    year: "1961"
  - label: "Lin et al. Attribute analysis and modeling of color harmony. Frontiers in Psychology"
    year: "2022"
  - label: "Nielsen Norman Group. Using Color to Enhance Your Design"
    year: "2024"
---

## The Rule
- One temperature group must dominate by area.
- Use warm hues (red, orange, yellow) for foreground elements.
- Use cool hues (blue, green, blue-violet) for background and recessive elements.
- Avoid equal area splits. They force the visual system to assign both depth functions simultaneously.
- The 60-30-10 heuristic operationalizes this: 60% dominant temperature, 30% secondary, 10% accent.
- It is a design heuristic, not an empirically fixed threshold.
- Consistent with harmony modeling data (Lin et al., 2022).

## Why
- Chromostereopsis: warm/cool contrast implicates similar cortical areas as binocular depth processing, specifically occipito-parietal and parietal regions, right hemisphere dominant (Cauquil et al., 2009).
- When isoluminant warm and cool areas are equal, neither depth plane resolves.
- This causes perceptual depth competition (Cauquil et al., 2009, N=25; Faubert, 1994).
- Albers (1963) documented that equal-area warm/cool pairings at similar luminance cause edges to oscillate visually.
- This prevents stable fixation.
- Lin et al. (2022, N=84, CIELAB) confirmed: dominance above roughly 60% area correlates with higher harmony ratings.
- Near-equal temperature distribution correlates with perceived dissonance.

## When It Breaks
- Chromostereopsis is absent or inverted in approximately 10–15% of observers (Simonet & Campbell, 1990).
- The rule describes a statistical majority, not a universal.
- Editorial and poster design sometimes exploits temperature conflict intentionally.
- Visual tension can be an expressive goal rather than a flaw.

## In Practice
- CTA on a product page: warm fill (#E8471A) against a cool neutral canvas (#F0F4F8).
- Warm occupies well above 60% of the viewport.
- The CTA reads as foreground without competing depth cues.
- Equal warm/cool area collapses that hierarchy.

## Key Numbers
- **~60%** — Area share for one temperature group, design heuristic, consistent with Lin et al. (2022)
- **10–15%** — Observers for whom chromostereopsis is absent or inverted (Simonet & Campbell, 1990)
