---
id: "wcag-motion"
title: "WCAG Flashing & Motion"
category: "motion"
priority: "critical"
tldr: "Content must not flash more than 3 times per second unless below the general flash and red flash thresholds (SC 2.3.1 A). Motion animation triggered by interaction must be disableable unless essential (SC 2.3.3 AAA)."
tags:
  - "accessibility"
  - "web"
  - "interaction"
videoUrls:
  tiktok: ""
  instagram: ""
sources:
  - label: "W3C. WCAG 2.1"
    year: "2018"
  - label: "W3C. WCAG 2.0"
    year: "2008"
  - label: "Harding. Harding Flash and Pattern Analyzer"
    year: "2010"
---

## The Rule
- SC 2.3.1 Three Flashes or Below Threshold (A, EU-relevant: ja): Web pages must not contain anything that flashes more than three times in any one-second period, or the flash must be below the general flash threshold (area less than 25% of the 10-degree visual field at standard viewing distance) and below the red flash threshold.
- Non-interference criterion: 2.3.1 applies to all content on the page, including content not otherwise required to meet other success criteria.
- SC 2.3.3 Animation from Interactions (AAA, EU-relevant: nein): Motion animation triggered by user interaction can be disabled unless the animation is essential to the functionality or to the information being conveyed. Essential animation examples: progress indicators, video playback, scroll position feedback. Non-essential: parallax, decorative entrance transitions, scroll-triggered fade-ins.

## Why
- Photosensitive epilepsy affects approximately 1 in 4,000 people; flashing content at the wrong frequency and area can induce tonic-clonic seizures within seconds.
- The 3-per-second threshold and area limits are derived from neurological research on seizure induction thresholds — not conservative padding.
- Vestibular disorders affect approximately 35% of adults over 40; motion animations trigger vertigo, nausea, and disorientation independently of photosensitivity.
- The OS-level `prefers-reduced-motion` setting reflects an explicit user preference; ignoring it actively harms vestibular-disorder users who set it for symptom control.

## When It Breaks
- GIF animations and auto-playing video are not exempt — they must meet the flash thresholds.
- Scroll-triggered CSS and JavaScript animations (parallax, fade-in on scroll) frequently cause vestibular symptoms and fail 2.3.3 when they cannot be disabled.
- Loading spinners with high contrast and rapid cycling can fail 2.3.1 depending on rendered size and rate.
- Video content with intentional strobe effects must be analyzed and edited before publishing; metadata warnings or content advisories are not sufficient.
- Visual inspection is not a reliable test for flashing — use the Harding Flash and Pattern Analyzer (PEAT) for any content suspected of exceeding thresholds.

## In Practice
- Wrap all non-essential animation in `@media (prefers-reduced-motion: reduce)` and provide a static or minimal-motion fallback.
- Test video files containing rapid cuts or strobe effects with PEAT before publishing.
- Build animation to opt in, not opt out: start from a no-animation baseline and add motion only under `prefers-reduced-motion: no-preference`.
- For carousels, slideshows, and animated banners: provide pause, stop, or hide controls (also required by SC 2.2.2 Pause Stop Hide).

## Key Numbers
- **3 per second** — Maximum flash rate; above this, the flash must be below area and luminance thresholds (SC 2.3.1 A)
- **25%** — Maximum share of the 10-degree visual field that may flash at once to qualify for the threshold exemption
