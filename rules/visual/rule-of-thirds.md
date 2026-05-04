---
id: "rule-of-thirds"
title: "Rule of Thirds"
category: "visual"
priority: "medium"
tldr: "Divide the frame into thirds horizontally and vertically. Place key elements on the four intersections.
The rule prevents weak centered compositions. It does not guarantee strong ones."
videoUrls:
  tiktok: "https://www.tiktok.com/@designparser/video/7610500582872190230?is_from_webapp=1&sender_device=pc&web_id=7605204772584801814"
  instagram: "https://www.instagram.com/reel/DVJpP8eipki/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
sources:
  - label: "Smith. Remarks on Rural Scenery"
    year: "1797"
  - label: "Amirshahi et al. Art and Perception"
    year: "2014"
  - label: "Hoh, Zhang, Dodgson. SIGGRAPH Asia 2023"
    year: "2023"
  - label: "Tatler. Journal of Vision. Central Fixation Bias"
    year: "2007"
---

## The Rule
- Divide the frame at 33.33% and 66.67% horizontally and vertically. Place focal elements near the four power points (intersections).
- Position CTAs, subjects, and headlines on or near a power point, not dead center.
- The rule is a heuristic, not a law. It has no normative backing in WCAG, ISO, or any accessibility standard.
- RoT is an approximation of the golden ratio (33.3% vs. 38.2%). The two are related in spirit but mathematically distinct.

## Why
- Centered placement creates visual stasis. Off-center placement introduces tension and implied movement, which increases engagement.
- In text-heavy LTR layouts with F-pattern scanning, top-left often receives initial attention. Not universal across content types or formats.
- Amirshahi et al. (2014) found only a weak correlation between RoT score and aesthetic quality.
- A low RoT score often correlates with weaker compositions; a high score does not guarantee quality.

## When It Breaks
- Single isolated objects: Hoh et al. (SIGGRAPH Asia 2023) showed users overwhelmingly preferred centered placement over RoT placement for simple single-object compositions.
- Vertical video (9:16): eye-tracking data suggests central vertical placement outperforms RoT-based off-center placement for mobile portrait formats.
- Data UIs (dashboards, tables, forms): the rule does not apply. Readability and alignment take priority over compositional asymmetry.
- Symmetrical and formal subjects (logos, frontal portraits, product shots): centering is often the stronger choice.

## In Practice
- One approach for hero sections: align the primary headline near the top-left power point and the CTA near the bottom-left. Leave the right two-thirds as negative space or image. This works for LTR content-heavy layouts. Centered compositions or full-bleed imagery often work equally well.
- CSS starting point: grid-template-columns: 1fr 1fr 1fr. Place the primary element in column 1 or 2. Test both centered and off-center variants before deciding.

## Key Numbers
- **33.33% / 66.67%** — Grid line positions (H and V)
- **4** — Power points (intersections)
- **~38.2%** — Golden ratio equivalent for comparison
