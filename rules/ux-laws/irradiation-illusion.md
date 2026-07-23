---
id: "irradiation-illusion"
title: "Irradiation Illusion"
category: "ux-laws"
priority: "low"
tldr: "A light shape on a dark background looks larger than an identically sized dark shape on a light background, an effect known since Galileo and named by Helmholtz."
tags:
  - ux-law
  - visual
  - color
related_rules:
  - dark-mode-color-adaptation
sources:
  - label: "Helmholtz. Handbook of Physiological Optics (also translated as Treatise on Physiological Optics); English translation reprinted by Dover, 1924/1962"
    year: "1867"
  - label: "Galilei. Dialogue Concerning the Two Chief World Systems, Day 1"
    year: "1632"
  - label: "Long, Murtagh. Task and Size Effects in the Oppel-Kundt and Irradiation Illusions. Journal of General Psychology"
    year: "1984"
  - label: "Alonso et al. (SUNY College of Optometry), research on ON/OFF retinal and cortical neuron receptive field asymmetry, as summarized in Scientific American, \"The Case of the Oversized Planet.\""
---

## The Rule
- At equal physical size, a light shape on a dark background appears larger than a dark shape on a light background.
- The effect is demonstrated for simple geometric shapes and letterforms. Its extension to logos and icons is a plausible design inference, not a separately tested finding.
- A light UI element, icon, or logo placed on a dark background can plausibly read as visually heavier or larger than its dark-on-light counterpart, by extension from the tested simple-shape effect, even when the underlying dimensions are identical.
- The illusion is strongest at high contrast between figure and background and weakens as the contrast between the two drops.
- The effect is documented for isolated shapes on a solid background. Complex, multi-tone compositions have not been shown to follow the same simple pattern.

## Why
- Helmholtz described the effect in his 19th-century Handbook of Physiological Optics, proposing light scattering inside the eye as one mechanism: it spreads a bright region's retinal image across more photoreceptors than an equal dark region. Galileo noted a related star/planet effect in 1632.
- Modern research (Jose-Manuel Alonso and colleagues) found ON (light-detecting) receptive fields are larger than OFF (dark-detecting) ones, from retina through visual cortex, likely from a nonlinearity in ON-cell contrast response. This has more direct modern support than the light-scatter account.
- Both mechanisms, optical light scatter within the eye and neural receptive field asymmetry between light and dark detecting cells, are treated in the literature as contributing factors rather than a single confirmed cause.
- The illusion is well documented qualitatively across more than 150 years of observation, but no modern study establishes one agreed percentage for how much larger a light shape looks. Treat any specific number for this illusion as unverified.

## When It Breaks
- At very small sizes or low figure-to-background contrast, the size difference may fall below the threshold of perception.
- A 1984 study by Long and Murtagh found the illusion appeared when observers made forced-choice comparisons between shapes, but did not appear when observers gave absolute size estimates of a single shape. The effect is task-dependent, not a fixed constant distortion.
- In technical drawings, CAD files, or any context where measurement matters more than appearance, the defined physical dimensions take priority and the illusion is not a relevant concern.
- When light and dark versions of a design are viewed side by side rather than judged from memory or in isolation, direct comparison reduces the practical impact of the effect.

## In Practice
- Some type foundries and design systems slightly reduce the size or stroke weight of reversed, light-on-dark text and icons versus dark-on-light. This keeps the reversed version from reading as oversized or heavier. No fixed industry-wide percentage is documented.
- Dark mode icon sets sometimes use marginally thinner strokes or smaller bounding boxes for light glyphs on dark backgrounds than for the equivalent dark glyphs on light backgrounds, based on visual judgment rather than a published formula.
