---
id: "muller-lyer-illusion"
title: "Müller-Lyer Illusion"
category: "ux-laws"
priority: "low"
tldr: "A line ending in outward-pointing arrowheads (<-->) may be perceived as longer than an equal-length line ending in inward-pointing arrowheads (>--<), and the distortion persists even after the viewer has measured both lines (Müller-Lyer 1889). Avoiding mixed arrow or chevron cap directions on bars, connectors, or progress indicators is an extrapolation from this effect, not a claim directly validated in interface studies."
tags:
  - ux-law
  - visual
related_rules:
  - ebbinghaus-illusion
sources:
  - label: "Müller-Lyer. Optische Urteilstäuschungen. Archiv für Physiologie, Suppl. Vol."
  - label: "Gregory. Distortion of Visual Space as Inappropriate Constancy Scaling. Nature, 199"
    year: "1963"
  - label: "Segall, Campbell & Herskovits. The Influence of Culture on Visual Perception"
    year: "1966"
  - label: "Robinson. The Psychology of Visual Illusion"
    year: "1998"
---

## The Rule
- Two lines of equal physical length are perceived as different lengths when one ends in inward-pointing fins (>--<) and the other in outward-pointing fins (<-->). The outward-fin line is typically perceived as longer, the inward-fin line as shorter (Müller-Lyer 1889).
- The distortion persists even when the viewer knows the lines are equal length and has measured them, because conscious knowledge of the true lengths does not eliminate the perceptual bias.
- Reported distortion magnitude varies substantially across studies depending on fin angle, line length, methodology, and cultural background; there is no single agreed percentage. Design convention: treat the effect as directionally reliable, not as a fixed measured constant.
- In flat UI elements, an arrow, chevron, or wedge-shaped end cap on a bar, connector, or line may visually inflate or deflate its perceived length depending on which way the cap points, even though the element's actual bounding-box length is unchanged.

## Why
- The distortion has been proposed to result from a depth-cue mechanism (Gregory 1963): outward fins resemble a convex corner seen from outside, which the visual system associates with greater distance, and inward fins resemble a concave, nearer corner; on this account, the visual system applies an unconscious size-scaling correction based on that implied depth. This remains one of several competing explanations, not a settled consensus.
- An alternative account attributes the effect to the fins shifting the perceived location of the shaft's endpoints inward or outward, independent of any depth interpretation. Multiple theories remain active in the literature, so the underlying mechanism should be described as debated.
- Segall, Campbell & Herskovits (1966) tested the figure across seventeen cultures and found substantial cross-cultural variation in magnitude, with some non-"carpentered world" societies showing a much weaker effect. This suggests a learned, environment-dependent component to the illusion, though it does not settle which mechanism produces the effect.

## When It Breaks
- The effect is measured on isolated abstract line stimuli under controlled conditions. Real interfaces carry competing depth and shape cues (shadows, borders, adjacent content) that can weaken or override the pure effect; lab magnitudes do not transfer directly to a specific interface.
- Populations with limited exposure to rectilinear, "carpentered world" architecture and 2D linear-perspective imagery show a smaller or near-absent effect (Segall, Campbell & Herskovits 1966), so assuming a universal fixed distortion size is a misreading of the evidence.
- The illusion concerns perceived length of a line segment specifically. Extending it to the perceived size of general 2D shapes or icons beyond arrow- or chevron-capped lines is an inference, not a directly tested claim.

## In Practice
- Progress bars, sliders, and connector lines with arrow or chevron end caps: an outward-pointing cap may introduce a perceptual bias toward reading it as longer or more complete than an inward-pointing cap at the same pixel length. Keep cap direction consistent across elements meant to communicate equal or comparable length or progress.
- Range or "from-to" connectors in comparison charts: use a neutral terminator (dot or flat end) rather than inward- or outward-facing arrowheads when the visual line length itself needs to communicate a precise, comparable value. No direct interface study confirms the effect size in this context; treat it as a precaution, not a measured risk.
- Where directional arrow caps are used intentionally for meaning (flow direction in a diagram), a small, unpredictable bias in perceived magnitude is possible; add an explicit numeric label rather than relying on line length alone to communicate a quantity.
