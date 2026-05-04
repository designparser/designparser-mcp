---
id: "inattentional-blindness"
title: "Inattentional Blindness"
category: "ux-laws"
priority: "high"
tldr: "46-56% of observers miss a fully visible, salient object when engaged in a demanding primary task. Feature-match to the primary task raises detection odds by 5x."
videoUrls:
  tiktok: "https://www.tiktok.com/@designparser/video/7613432532129860886?is_from_webapp=1&sender_device=pc&web_id=7605204772584801814"
  instagram: "https://www.instagram.com/reel/DVd_sDyCqck/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
sources:
  - label: "Simons and Chabris. Perception 28(9)"
    year: "1999"
  - label: "Drew, Vo, Wolfe. Psychological Science 24(9)"
    year: "2013"
  - label: "Bredemeier and Simons. Psychological Bulletin 148(5-6)"
    year: "2022"
  - label: "Ekelund et al. Perception 51(2)"
    year: "2022"
  - label: "Simons, Hults, Ding. Psychonomic Bulletin and Review 31(4)"
    year: "2024"
---

## The Rule
- Inattentional Blindness (IB) is the complete failure to consciously perceive a fully visible object when attention is directed elsewhere. No visual impairment is involved.
- IB is distinct from Change Blindness (requires a scene interruption) and Attentional Blink (a 200-500ms temporal gap after a first target).
- The effect is situational, not a stable individual trait. Cognitive ability and personality scores do not reliably predict who will miss an unexpected object (Simons, Hults, Ding, 2024, 74 samples, 38 studies).

## Why
- Attention-Set theory: the visual system filters inputs by the current task's feature set. Feature-match odds ratio: 5.02 (Bredemeier and Simons, Psychological Bulletin, 2022).
- Perceptual Load theory: a high-load primary task exhausts perceptual capacity, leaving none for unexpected stimuli.
- Expert miss rates are not reliably lower than novice rates. A meta-analysis of 14 studies (N=1,153) found an expert-vs-novice odds ratio of 1.33, not statistically significant (Ekelund et al., 2022).
- Expert radiologists missed a gorilla 48x the size of a target nodule in 83% of cases, most having fixated its location (Drew et al., 2013).
- Under forced-choice conditions, observers who report missing an object still score above chance for its location, color, and shape. Perception is gradual, not binary (Feldman et al., eLife, 2025, reviewed preprint).

## When It Breaks
- Salience alone does not prevent IB. In Most et al. (2001), approximately 30% missed a bright red cross that was the only colored element on screen. High contrast is necessary but not sufficient.
- Laboratory evidence (basketball-counting videos, CT-scan tasks) does not map directly onto web UI contexts. No peer-reviewed study has measured IB rates for specific UI layout patterns under real task conditions.

## In Practice
- Encode critical alerts using features that match the primary task. If active form fields use a blue border, inline validation errors at the field are more likely to be noticed than a red toast in a corner.
- For system-critical state changes (connection loss, session timeout), place the alert inline rather than relying on a peripheral status bar alone. Add an assertive aria-live region: `<div role='alert' aria-live='assertive'>Session expiring. Save your work.</div>`

## Key Numbers
- **46-56%** — Observers missing a visible object during demanding tasks
- **5x** — Higher detection odds when the unexpected object matches task features
- **83%** — Radiologists missing a large unexpected object in CT scans
