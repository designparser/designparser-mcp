---
id: "cielab-color-space"
title: "CIELAB Color Space"
category: "color"
priority: "medium"
tldr: "CIELAB (L*a*b*) is an approximately perceptually uniform, device-independent color space: equal numeric steps in L*, a*, b* correspond to roughly equal perceived color differences, unlike RGB or HSL. Use it (or its CIEDE2000 refinement) for color-difference math, not for WCAG contrast, which is defined on luminance instead."
tags:
  - color
  - web
  - branding
related_rules:
  - color-scale
  - wcag-contrast
  - luminance-vs-lightness
sources:
  - label: "CIE 1976 CIELAB Standard"
  - label: "MacAdam. Visual Sensitivities to Color Differences in Daylight. Journal of the Optical Society of America, 32(5)"
    year: "1942"
  - label: "Luo, Cui & Rigg. The Development of the CIE 2000 Colour-Difference Formula: CIEDE2000. Color Research & Application, 26(5)"
    year: "2001"
---

## The Rule
- CIELAB (CIE L*a*b*, 1976) has three axes: L* (lightness, 0 to 100), a* (green to red), b* (blue to yellow), referenced against a defined white point (commonly D50 or D65). Together they describe nearly the entire range of colors visible to a standard observer; not every numeric L*a*b* combination corresponds to a physically realizable color.
- Equal numeric distances between two points in CIELAB correspond to approximately equal perceived color differences. RGB and HSL have no such property: the same numeric step reads as a bigger or smaller shift depending on where it falls in the space.
- Color difference between two Lab colors is expressed as ΔE (Delta E). The 1976 formula (ΔE*76 / CIE76) is the Euclidean distance: sqrt((ΔL*)² + (Δa*)² + (Δb*)²).
- ΔE*76 is not fully perceptually uniform, especially at high chroma. CIE94 and CIEDE2000 add correction terms for this and are the more accurate formulas for critical color matching (print, textiles). ΔE values from different formulas (ΔE76 vs. ΔE2000) are not directly comparable.
- CIELAB is device-independent: it is derived from CIE XYZ against a fixed white point and standard observer, unlike RGB or HSL, which are defined relative to a specific display's gamut and primaries.

## Why
- MacAdam (1942) measured just-noticeable color differences in CIE chromaticity space and found they form ellipses of varying size and orientation, not circles, showing that Euclidean distance in raw CIE XYZ does not match human perception. CIELAB was designed to reshape the space so those ellipses become closer to uniform circles.
- ΔE*76's remaining non-uniformity, particularly in saturated blues and purples, is a known limitation of the simple Euclidean formula, not of the L*a*b* axes themselves. CIE94 (1994) and CIEDE2000 (Luo, Cui & Rigg 2001) correct for it with weighting functions tuned to chroma and hue.
- Human lightness perception is non-linear: L* uses an approximately cube-root relationship to relative luminance to better match perceived lightness, rather than tracking luminance directly. This is the same non-linearity that makes raw luminance (Y) unsuitable as a perceived-lightness scale on its own.

## When It Breaks
- WCAG 2.2 contrast (SC 1.4.3) is defined on relative luminance (Y), not on L* or ΔE. Do not substitute a CIELAB lightness difference or a ΔE value for a WCAG contrast ratio calculation.
- For critical color-matching work (brand color reproduction across print and screen, textile dye matching), ΔE*76 understates perceived difference in high-chroma regions. Use CIEDE2000 instead.
- CIELAB values are only comparable under the same white point and viewing conditions they were computed against (commonly D65). Comparing Lab values computed under different illuminants without conversion produces misleading differences.

## In Practice
- Design system tint/shade ramps: generate steps in a perceptually uniform space (CIELAB, OKLCH) rather than HSL, so each step in the ramp reads as an equal visual jump instead of compressing at one end.
- Brand color QA across print (CMYK) and screen (sRGB): compute ΔE00 (CIEDE2000) between the two reproductions where precision matters. ΔE00 below about 2 is a common industry guideline for an acceptable match; above about 5 is a widely used guideline for a visibly different color. Both are convention thresholds, not universal perceptual limits.
- CSS Color Module Level 4 exposes the space directly: `color: lab(52.2% 40.2 60)` or `lch(52.2% 72.8 56.2deg)`. MDN currently lists support as Baseline widely available in evergreen browsers; browser support windows shift, so check current compatibility data before relying on it without a fallback.

## Key Numbers
- **0-100** — L* axis range: black to white
- **~2** — ΔE00 industry guideline for an acceptable color match, not a perceptual hard cutoff
- **~5** — ΔE00 industry guideline above which a color shift reads as clearly different
