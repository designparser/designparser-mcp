---
id: "cmyk-vs-pantone"
title: "CMYK vs. Pantone"
category: "print"
priority: "high"
tldr: "CMYK mixes four process inks in halftone patterns; PMS is a pre-mixed spot ink — one ink, one color, lower variance across print runs. Always spec a CMYK fallback alongside any PMS value."
tags:
  - print
  - color
  - branding
related_rules:
  - dieline-bleed
  - rgb-vs-cmyk
sources:
  - label: "Pantone LLC. Pantone Color Bridge Coated Guide"
    year: "2024"
  - label: "ISO 2846-1. Colour and transparency of printing ink sets for four-colour printing"
    year: "2006"
  - label: "ISO 12647-2. Process control for the production of halftone colour separations — Offset lithographic printing"
    year: "2013"
---

## The Rule
- CMYK prints four inks (cyan, magenta, yellow, black) as halftone dots the eye optically mixes. Output varies with substrate, ink density, and dot gain.
- Pantone PMS colors are pre-mixed spot inks, each a proprietary pigment formula. Output variance is lower than CMYK process.
- Highly saturated colors (bright oranges, vivid greens, electric blues) fall outside CMYK gamut on coated stock (FOGRA39). PMS covers many of these values.
- Always specify a PMS number and a CMYK fallback together. A PMS-only spec on a 4-color press forces an uncontrolled CMYK conversion.
- Spot colors add cost: each PMS ink requires a dedicated press station.
- For short to medium runs, 1–2 spot colors before switching to 4-color CMYK is a common threshold. Design convention: no fixed industry standard.

## Why
- CMYK introduces variance at every step: paper whiteness, ink density fluctuation, and dot gain all shift the final color.
- PMS inks result from molecular absorption of pre-mixed pigments, not from mixing on substrate. Output is stable across press runs.
- Brand colors frequently fall outside CMYK gamut. The Pantone Color Bridge CMYK simulation is perceptual, not colorimetric (Pantone LLC).
- CMYK-to-PMS conversion is not reversible. Specifying CMYK values and asking the printer to match a PMS number is not a valid workflow.

## When It Breaks
- Digital print (inkjet, laser, toner) cannot use PMS spot inks. Pantone XGC (7 inks) approximates but does not match the original pigment.
- PMS coated (C) and uncoated (U) are different formulations: the same number looks different on each substrate. Always specify the suffix.
- Metallic and fluorescent PMS inks are entirely outside CMYK gamut. No fallback will match; redesign with achievable colors if CMYK-only is required.

## In Practice
- Brand logo for offset print: specify PMS 485 C for the primary red, CMYK 0/91/86/0 as fallback. Include both in every print-ready file.
- 2-color business card (offset): use PMS + K (black) instead of 4-color CMYK to guarantee brand color accuracy and reduce ink cost.
- Printer handoff: PDF/X-4 with ISO Coated v2 (FOGRA39) for CMYK. Confirm PMS ink availability with the vendor before sending spot color files.
