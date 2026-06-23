---
id: "pie-chart-problem"
title: "Pie Chart Problem"
category: "visual"
priority: "medium"
tldr: "Pie charts ask readers to compare angles and arc lengths, two of the least accurate perceptual tasks. Use them only for part-to-whole relationships with five or fewer clearly distinct slices."
tags:
  - visual
  - data-dense
  - web
videoUrls:
  tiktok: "https://www.tiktok.com/@designparser/video/7628254476947836182?is_from_webapp=1&sender_device=pc&web_id=7621951402788800022"
  instagram: "https://www.instagram.com/reel/DXE11vvCj1m/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
sources:
  - label: "Cleveland and McGill. Graphical Perception: Theory, Experimentation, and Application to the Development of Graphical Methods. JASA"
    year: "1984"
---

## The Rule
- Avoid pie charts for comparison tasks. Angles and arc lengths are among the least accurate perceptual encodings (Cleveland and McGill hierarchy).
- Perceptual accuracy ranking, most to least accurate: position on a common scale, length, angle, area, color saturation.
- Use pie charts only for one specific case: showing that one category is a clear majority of a whole, with five or fewer slices.
- Replace any comparison task with a bar chart on a common baseline.

## Why
- Cleveland and McGill (1984, JASA): subjects estimated values from bar charts more accurately than from pie charts. The difference was most pronounced when comparing slices of similar size.
- Donut charts do not solve the problem. Removing the center reduces area cues without improving angle accuracy.

## When It Breaks
- Very different magnitudes: a single 75% slice versus three slices at roughly 8% each is immediately readable without comparison accuracy.
- Rapid estimation tasks: approximate proportions can be extracted from pie charts faster than bar charts when precision is not required and only one or two slices matter.
- The bar chart advantage rests on the shared baseline.
- When bars are stacked or unaligned, that advantage disappears and pie charts perform comparably (Cleveland and McGill, 1984).
- Five or more slices of similar size: replace with a horizontal bar chart sorted by value.

## In Practice
- Replace a six-slice pie chart with a horizontal bar chart sorted largest to smallest. Add value labels directly on bars. Remove the legend.
- Keep the pie chart when the message is 'two thirds of users do X.' One dominant slice and one small slice is immediately legible.
