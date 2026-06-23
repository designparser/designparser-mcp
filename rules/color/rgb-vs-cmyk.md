---
id: "rgb-vs-cmyk"
title: "RGB vs. CMYK"
category: "color"
priority: "medium"
tldr: "RGB emits light (additive); CMYK absorbs light (subtractive). The sRGB gamut exceeds FOGRA39 across most colors, with the largest gap in saturated greens, blues, and violets."
tags:
  - color
  - web
  - print
videoUrls:
  tiktok: "https://www.tiktok.com/@designparser/video/7613807515763019030?is_from_webapp=1&sender_device=pc&web_id=7605204772584801814"
  instagram: "https://www.instagram.com/reel/DVglxsBiqbW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
sources:
  - label: "Morovic. Color Gamut Mapping. Wiley-IS&T"
    year: "2008"
  - label: "Fairchild. Color Appearance Models, 3rd Ed. Wiley-IS&T"
    year: "2013"
  - label: "Hunt and Pointer. Measuring Colour, 4th Ed. Wiley-IS&T"
    year: "2011"
  - label: "ISO 12647-2. Offset lithographic printing"
    year: "2013"
  - label: "ISO 3664. Viewing conditions for graphic technology and photography"
    year: "2009"
  - label: "IEC 61966-2-1. sRGB colour space"
    year: "1999"
  - label: "ICC Profile Specification v4.4"
    year: "2022"
  - label: "Vik, Lund, Nussbaum. Color Research and Application 42(1)"
    year: "2017"
---

## The Rule
- RGB (additive): red, green, and blue light combine toward white. Used on all self-emitting displays.
- CMYK (subtractive): cyan, magenta, yellow, and black inks absorb light from reflected white. Used in offset and digital print.
- The two models have incompatible gamuts. The sRGB gamut is larger than FOGRA39 (ISO Coated v2) across most of the CIE diagram, with the greatest gap in saturated greens, blues, and violets.
- Out-of-gamut colors concentrate in saturated cyans, greens, and blue-violets.
- Without ICC color management, the RIP performs a default device conversion rather than a controlled perceptual gamut mapping.
- CMYK is not a single color space. ISO Coated v2 (FOGRA39), PSO Coated v3 (FOGRA51), and newspaper profiles have entirely different gamuts.
- Specifying CMYK without a named profile is undefined.

## Why
- Displays typically operate between 80-500 cd/m² (HDR allows peaks up to 10,000 cd/m²).
- Printed surfaces reflect roughly 60-100 cd/m² under ISO 3664 viewing conditions.
- This luminance difference increases perceived brightness and contrast on self-emitting displays (Stevens effect) in a way print cannot replicate (Fairchild 2013).
- Chromatic adaptation at D65 (monitor) vs D50 (print viewing) produces different color perception for physically identical stimuli.
- No cognitive learning effect compensates for this difference (Fairchild 2013, CIECAM02).
- Modern iOS and macOS devices use Display-P3, which covers roughly 25% more color volume than sRGB. Colors vivid on P3 may be entirely outside CMYK gamut.
- Gamut-mapping algorithms (Perceptual, Relative Colorimetric, Saturation) are all compromise solutions.
- No algorithm is optimal for all image types (Morovic 2008).

## When It Breaks
- Spot colors (Pantone PMS) exist outside both sRGB and CMYK gamuts.
- The conversion chain PMS to CMYK to RGB to display is lossy at every step.
- Pantone Color Bridge conversion values are substrate-specific and not normatively guaranteed.
- A valid softproof requires a monitor calibrated for softproofing (D50 simulation, 80-120 cd/m², neutral grey surround per ISO 3664:2009) with Simulate Paper Color and Simulate Black Ink enabled.
- WCAG contrast ratios are defined for digital content using the sRGB luminance formula and do not translate to print output.

## In Practice
- Screen workflow: set document color mode to RGB. Embed ICC profile sRGB IEC61966-2-1.
- Print (coated offset): convert to CMYK with ISO Coated v2 300% (FOGRA39).
- Coated papers with optical brighteners: use PSO Coated v3 (FOGRA51).
- Export as PDF/X-4 with the profile embedded.
- Small text under 12pt: use 0/0/0/100 (K-only) to avoid registration errors.
- Visually acceptable tolerance for proof vs. print: ΔE00 ≤ 3.0 (ISO 12647-2:2013; Vik et al. 2017, N=20).

## Key Numbers
- **ΔE00 ≤ 3.0** — Typical acceptable proof-to-print color tolerance (ISO 12647-2)
- **D50 / D65** — Standard whitepoints for print viewing vs display color spaces
