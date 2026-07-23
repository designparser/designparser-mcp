---
id: "visual-angle-arcminutes"
title: "Visual Angle"
category: "visual"
priority: "high"
tldr: "Legibility depends on angular size on the retina, not physical size. A logo's true size is its height divided by viewing distance, measured in arcminutes."
tags:
  - visual
  - branding
  - print
related_rules:
  - viewing-distance
  - logo-clearspace
sources:
  - label: "Hamilton Eye Institute, University of Tennessee Health Science Center. Using a Snellen Visual Acuity Chart"
  - label: "Crafting Pixels. The math behind visual acuity"
    year: "2022"
  - label: "Elvers. Visual Angle (perception course reference)"
---

## The Rule
- The eye does not perceive physical size. It perceives visual angle, the angle an object subtends at the eye, which depends on both physical size and viewing distance.
- Visual angle in arcminutes = 3438 x (object height / viewing distance), with height and distance in the same unit. This constant converts radians to arcminutes (180 x 60 / pi = ~3437.75).
- Normal visual acuity, the basis of the 20/20 Snellen standard, is defined as the ability to resolve a detail subtending 1 arcminute. Each Snellen optotype stroke is built to subtend exactly 1 arcminute at the chart's prescribed distance.
- A design element that subtends less than roughly 1 arcminute at its intended viewing distance falls below the typical resolving threshold of a normal eye. It reads as an undifferentiated blur or dot rather than distinct detail.
- This threshold assumes normal or corrected visual acuity (20/20), good lighting, and high contrast between the mark and its background. Lower contrast, dim lighting, or reduced acuity raise the effective threshold well above 1 arcminute.
- Two designs with identical physical dimensions can have completely different legibility outcomes if their intended viewing distances differ. Size on the page or screen means nothing without a stated viewing distance.

## Why
- Resolving power is limited by photoreceptor spacing in the fovea. Two points closer than about 1 arcminute apart stimulate the same or adjacent cones and cannot be told apart. This is why 1 arcminute became the definition of normal acuity when Snellen designed his chart in 1862.
- The 3438 conversion constant comes from the geometry of small angles. For small angles, tan(theta) approximates theta in radians. One radian equals 180 x 60 / pi arcminutes, about 3437.75, rounded to 3438 in optometric use.
- Visual angle scales with 1/distance. Doubling the viewing distance requires doubling the physical size to preserve the same legibility, not adding a fixed amount of size.
- Recognizing a letter or a logo requires resolving more than one point. A Snellen optotype needs its stroke width and gaps, each about 1 arcminute, to be individually resolvable. This means the whole letterform must span about 5 arcminutes to be read correctly.

## When It Breaks
- The 1 arcminute figure is a text-legibility limit, not a recognition limit for complex shapes. Logos and icons carry more distinguishing detail than a single letter stroke. They generally need several times that angular size to be recognized, not just detected.
- Contrast and shape complexity matter as much as angular size. A high-contrast, simple silhouette (a wordmark, a monoline icon) can be recognized at a smaller angular size than a low-contrast mark with fine internal detail, even at the same distance.
- Low-vision viewers, older viewers with reduced contrast sensitivity, and viewing conditions with glare or poor lighting all push the effective resolvable-angle threshold above the 1 arcminute baseline. Design for the actual viewing population, not the theoretical 20/20 eye.
- The formula assumes a static, perpendicular view. Motion (a logo on a moving vehicle or a scrolling screen), oblique viewing angles, and atmospheric haze at long outdoor distances all reduce effective legibility below what the flat geometric calculation predicts.

## In Practice
- Baseline acuity check: a sign letter must be legible at 3m (3000mm). Minimum resolvable stroke width for a 20/20 eye: (1 x 3000) / 3438 = ~0.87mm. Below that, the detail is physically unresolvable, regardless of contrast or type design.
- Logo recognition heuristic: recognizing a mark needs multiple resolvable features, not one. A common heuristic: smallest detail should subtend at least ~5 arcminutes. At 5m (5000mm): (5 x 5000) / 3438 = ~7.3mm. Heuristic, not a measured constant.
- Before shrinking a logo for a favicon or small print, state the viewing distance first. Check whether the smallest mark detail still clears ~5 arcminutes there. If not, simplify the mark or increase its size instead of assuming the pixel size is "big enough."

## Key Numbers
- **1** — Visual acuity limit defining 20/20 (Snellen)
- **3438** — Radians-to-arcminutes conversion constant
- **~5** — Practitioner heuristic minimum for logo recognition
