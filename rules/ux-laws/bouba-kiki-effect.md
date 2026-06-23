---
id: "bouba-kiki-effect"
title: "Bouba-Kiki Effect"
category: "ux-laws"
priority: "low"
tldr: "~95% of participants in Western-educated populations associate 'bouba' with rounded shapes and 'kiki' with angular ones (Ramachandran & Hubbard 2001); cross-cultural replications show lower rates. Round signals approachability; angular signals precision or aggression. Color, contrast, and texture often override the shape association."
tags:
  - visual
  - ux-law
  - branding
related_rules:
  - corner-radius-tone
sources:
  - label: "Köhler. Gestalt Psychology (rev. ed.)"
    year: "1947"
  - label: "Ramachandran & Hubbard. Synaesthesia, a Window Into Perception, Thought and Language. Journal of Consciousness Studies, 8(12)"
    year: "2001"
  - label: "Maurer, Pathman & Mondloch. The shape of boubas: sound-shape correspondences in toddlers and adults. Developmental Science, 9(3)"
    year: "2006"
---

## The Rule
- Rounded shapes are cross-modally associated with soft sounds and perceived as approachable, friendly, or gentle. Angular shapes are associated with sharp sounds and perceived as bold, aggressive, or precise.
- ~95% of participants match 'bouba' to rounded shapes and 'kiki' to angular shapes in Western-educated populations (Ramachandran & Hubbard 2001). Cross-cultural replications show lower rates; the direction is consistent but the magnitude varies.
- The correspondence is applied in design contexts across multiple scales: corner radius of UI elements, logo silhouette, letterform design, and icon construction. These are design extensions of the effect, not empirically tested uses.
- Design convention: no single empirical source establishes a specific corner radius threshold for 'rounded' vs. 'angular' perception.

## Why
- The effect arises from crossmodal correspondence. The sharp consonant /k/ in 'kiki' produces a sharp, abrupt acoustic onset and a sharp tongue movement against the palate. The rounded sounds /b/ and /u/ in 'bouba' produce smooth acoustic envelopes and rounded lip shapes. The visual and auditory modalities share the abstract quality of sharpness vs. roundness.
- Maurer et al. (2006) found the effect in children as young as 2.5 years, before full phonetic literacy, suggesting the correspondence is grounded in early perceptual and motor development rather than purely cultural learning.
- The tongue traces angular paths for /k/ sounds and rounded paths for /b/ and /m/ sounds. This may involve articulatory-motor analogies between speech production and visual shape perception.

## When It Breaks
- Color, texture, and weight often override shape associations. A rounded logo in black with high-contrast sharp typography reads as aggressive despite its curves. Evaluate the complete visual composition, not shape alone.
- Highly abstract or complex shapes with mixed curvature send conflicting signals and do not map reliably to either pole.
- Brand names whose phonetics contradict the shape create a double signal: a rounded logo for a brand named 'Krak' or 'Strix' competes against the name's sharp phonetics.
- The effect is consistent in direction across cultures but varies in magnitude. Tamil and English populations show similar patterns; individual variation exists.

## In Practice
- Consumer or lifestyle apps targeting broad audiences: increase corner radius on cards, buttons, and illustrations. `border-radius: 12px–24px` reads as approachable; `border-radius: 2px–4px` reads as precise.
- Technical, financial, or authority-focused tools: reduce corner radius or use full square corners. Combine with heavier font weight and high-contrast palette for reinforcement.
- Logo construction: sketch both a rounded and angular version of the same concept before committing. Align the shape's phonetic feel to the brand name's sound if tone consistency is a goal.

## Key Numbers
- **~95%** — Bouba-kiki matching rate in Western-educated populations (Ramachandran & Hubbard 2001). Cross-cultural replications show lower rates.
