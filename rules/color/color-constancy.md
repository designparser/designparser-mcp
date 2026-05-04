---
id: "color-constancy"
title: "Color Constancy"
category: "color"
priority: "medium"
tldr: "The visual system compensates for changes in ambient lighting and maintains perceived object color. UI colors can appear dramatically different in sunlight, artificial light, or night mode. The design must account for this."
videoUrls:
  tiktok: "https://www.tiktok.com/@designparser/video/7625298152353959190?is_from_webapp=1&sender_device=pc&web_id=7621951402788800022"
  instagram: "https://www.instagram.com/reel/DWwU3Y7iqNY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
sources:
  - label: "Von Kries. Influence of Adaptation on the Effects Produced by Luminous Stimuli"
    year: "1902"
  - label: "Winkler et al. The Dress: 10 Million Colours"
    year: "2015"
---

## The Rule
- Color constancy is the perceptual tendency to see object color as stable despite significant changes in illumination spectrum or intensity.
- The visual cortex discounts the illuminant by using contextual cues (highlights, shadows, known white objects) to estimate surface reflectance.
- The mechanism is partial: strong or spectrally extreme light sources shift perceived color toward the illuminant's hue.
- The Dress illusion (2015) showed that ambiguous illumination context causes different observers to make opposite constancy assumptions, resulting in entirely different perceived colors from the same pixel values.

## Why
- Retinal ganglion cells respond to relative wavelength ratios across the visual field, not absolute values. This relative computation is the physiological basis of constancy.
- Von Kries coefficient model (1902): the visual system applies a gain factor per cone type to normalize the illuminant. This is the basis for manual white balance in cameras.
- OLED and high-gamut displays reproduce colors that did not exist in natural illumination, exceeding the calibration range of the constancy mechanism and causing perceptual inaccuracies.

## When It Breaks
- High-saturation UI colors on OLED screens in daylight: the screen competes with ambient sunlight and appears desaturated or shifted. Colors designed in studio conditions fail in outdoor use.
- Night mode with orange-shifted ambient lighting (incandescent, candlelight): cool blue tones in the UI appear gray or muted. Blue-reliant interfaces lose legibility cues.
- Color-blind users have fewer cone types, reducing the redundancy the constancy mechanism depends on. Their color perception shifts more under non-daylight illuminants.

## In Practice
- Test UI color tokens in three conditions: daylight (6500K), warm artificial light (2700K), and dim environment. Use f.lux or a physical warm lamp. Any token that loses its identity under warm light needs either a higher-saturation value or a luminance-based fallback.

## Key Numbers
- **6500K** — Standard daylight color temperature (D65 reference)
- **2700K** — Warm incandescent light temperature. Maximum constancy stress for cool UI palettes.
