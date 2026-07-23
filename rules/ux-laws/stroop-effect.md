---
id: "stroop-effect"
title: "Stroop Effect"
category: "ux-laws"
priority: "medium"
tldr: "Naming a color takes longer and produces more errors when the text itself names a conflicting color, e.g. the word 'red' rendered in blue (Stroop 1935). Keeping semantic color-word pairings congruent (error = red, success = green) in status labels, badges, and validation messages is a design application of this finding, not a directly tested UI rule."
tags:
  - ux-law
  - color
  - form
related_rules:
  - color-psychology
  - default-effect
sources:
  - label: "Stroop. Studies of Interference in Serial Verbal Reactions. Journal of Experimental Psychology, 18(6)"
    year: "1935"
  - label: "MacLeod. Half a Century of Research on the Stroop Effect: An Integrative Review. Psychological Bulletin, 109(2)"
    year: "1991"
---

## The Rule
- Naming the ink color of a word takes measurably longer and produces more errors when the word names a conflicting color (the word "red" printed in blue) than when word and color match, or the stimulus is a neutral non-color word (Stroop 1935).
- The interference is asymmetric. Reading the word is largely automatic and hard to suppress, so word meaning interferes with color naming far more than color naming interferes with reading.
- Congruent color-word pairings (green paired with "success" or "go", red paired with "error" or "stop", yellow/amber paired with "warning") are expected to reduce this kind of interference and improve processing efficiency compared to incongruent pairings. This is a design-context extension of Stroop's finding, not a result from a UI-specific experiment.
- The interference is specifically semantic, not merely visual: it appears with real color words, not with random letter strings of matching length or complexity.

## Why
- Word reading is an over-learned process for literate adults, so the irrelevant word meaning tends to reach processing before the relevant color judgment completes, consistent with theories of response conflict (Stroop 1935).
- MacLeod (1991) reviewed over 700 published studies and found the slowdown under incongruent conditions relative to congruent or neutral conditions to be one of the most reliably replicated effects in experimental psychology.
- Response competition favors the more automatic process (reading) over the more controlled one (color naming), which is why the interference is markedly stronger in one direction.

## When It Breaks
- The classic paradigm measures single color words in a controlled naming task, not full sentences, icons, or complex interfaces. Extending the finding to arbitrary UI copy is a reasonable inference, not a directly tested claim; treat any UI-specific magnitude as illustrative.
- Bilingual readers and readers with lower fluency in a given language show weaker or absent interference in that language, especially in their less dominant language, because the effect depends on automatized reading fluency, not just visual exposure to the word.
- Color-vision deficiencies, especially red-green deficiencies, can reduce or alter the interference when the conflicting colors cannot be reliably distinguished.

## In Practice
- Status badges and tags: keep the color-word pairing congruent. A "success" label uses a green swatch, an "error" label uses red, a "warning" label uses yellow or amber. Do not recolor an "error" badge green for brand-palette reasons.
- Form validation: pair error text with red or warning iconography and success text with green, rather than a single accent color applied regardless of message meaning.
- When testing color-coded dashboards, charts, or alerts that unavoidably mix color and conflicting text (e.g. a red "on track" status inherited from a legacy palette), the mismatch may increase processing time or confusion; treat that as a predictable effect of the mismatch, not a comprehension failure of the interface.

## Key Numbers
- **700+** — Published Stroop-effect studies reviewed by MacLeod (1991)
