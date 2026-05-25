---
id: "wcag-contrast"
title: "WCAG Contrast Ratio"
category: "color"
priority: "critical"
tldr: "AA requires 4.5:1 for normal text, 3:1 for large text (≥24px regular or ≥18.66px bold) and UI components. 4.5:1 is the legal floor, not the design target."
tags:
  - "accessibility"
  - "color"
  - "web"
related_rules:
  - "luminance-vs-lightness"
  - "greyscale"
videoUrls:
  tiktok: "https://www.tiktok.com/@designparser/video/7612747532371954967?is_from_webapp=1&sender_device=pc&web_id=7605204772584801814"
  instagram: "https://www.instagram.com/reel/DVZPniSikfS/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
sources:
  - label: "W3C. WCAG 2.2"
    year: "2023"
  - label: "WebAIM. The WebAIM Million"
    year: "2024"
  - label: "Waller. Does the contrast ratio predict legibility of website text"
    year: "2022"
---

## The Rule
- Formula: (L1 + 0.05) / (L2 + 0.05), where L1 is the lighter color's relative sRGB luminance and L2 is the darker.
- Range: 1:1 (identical colors) to 21:1 (black on white). No rounding. #767676 on white produces 4.48:1 and fails AA for normal text.
- WCAG 2.2 Level AA: 4.5:1 for normal text.
- Large text (at least 24px regular or 18.66px bold, from WCAG's 18pt / 14pt definition): 3:1.
- SC 1.4.11: 3:1 for UI components, form borders, and informational icons.
- WCAG 2.2 Level AAA: 7:1 for normal text, 4.5:1 for large text. No AAA equivalent exists for non-text contrast.
- Exceptions: decorative elements, inactive UI components, and logotypes carry no contrast requirement.
- Disabled states that still convey meaningful information are not automatically exempt.
- SC 1.4.1 (A, EU-relevant: ja): Color must not be the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element. A non-color signal — text, icon, pattern, or shape — is always required alongside color.
- SC 1.4.13 (AA, EU-relevant: ja): Content triggered by pointer hover or keyboard focus must be: Dismissible — can be closed without moving focus or pointer (unless it communicates an input error); Hoverable — pointer can move onto the triggered content without it disappearing; Persistent — content remains visible until the trigger is removed, the user dismisses it, or it is no longer valid.

## Why
- The formula does not account for font size, stroke weight, or polarity.
- APCA addresses these limitations but is not normatively binding as of 2026.
- Insufficient contrast increases cognitive load during reading, particularly at small sizes, thin weights, and in peripheral vision.
- Contrast failure is the most common WCAG violation: WebAIM Million 2024 found it on over 80% of tested homepages.
- Approximately 8% of men and 0.4% of women have some form of color vision deficiency.
- Maximum contrast (21:1) is not universally optimal.
- A minority of users with visual stress conditions (e.g. Irlen syndrome) may experience discomfort at extreme contrast. This does not justify reducing contrast below WCAG 2.2 minimums without providing an accessible alternative.
- Color-alone signaling (1.4.1): users with color vision deficiency cannot distinguish red error states from green success states, active links from body text, or selected from unselected items — if color is the only differentiator, the information is lost entirely.
- Hover and focus popups (1.4.13): tooltips that vanish when the pointer moves toward them cannot be read by users with magnification who must pan to the tooltip location, or by users with tremor who cannot hold the pointer precisely over a small trigger.

## When It Breaks
- Gradient backgrounds: contrast must be measured at the worst point in the gradient, not averaged. Most automated checks miss this.
- Dark mode: inverting light-mode color pairs 1:1 frequently fails. Both schemes require independent contrast verification.
- APCA is not normative for WCAG 2.x and cannot substitute for it in audits or legal contexts.
- WCAG 2.2 Level AA remains the current legal benchmark in most jurisdictions as of 2026.
- A value passing WCAG 2.x can still fail APCA. Use APCA additively for insight only.
- 1.4.1: error states indicated by color alone (red border, red text) without a text label, symbol, or icon. Link text distinguished from body text by color only without underline. Active navigation items marked solely by a color change.
- 1.4.13: tooltips that disappear when the pointer moves from the trigger toward the tooltip. Dropdown submenus that close the instant the pointer leaves the trigger area. Custom focus-triggered descriptions that vanish on the first keypress.

## In Practice
- Body text: `color: #333333; background: #ffffff;` yields approximately 12.6:1, passing all levels.
- Input borders: #767676 on white yields 4.48:1, passing 3:1 for non-text but failing 4.5:1 for normal-size label text.
- Use separate color tokens for text and border roles.
- Focus outlines: `outline: 3px solid #0066cc;` yields approximately 7:1 on white and passes AA.
- For 1.4.1: pair every color-coded state (error, success, warning, active, disabled) with a non-color differentiator — a text label, icon, border pattern, underline, or typographic change.
- For 1.4.13: implement tooltips with a pointer-enter delay and a sufficiently large hover target; ensure `pointer-events: auto` on the popup element so the pointer can move onto it without triggering closure.

## Key Numbers
- **4.5:1** — WCAG 2.2 AA minimum contrast for normal text
- **3:1** — WCAG 2.2 AA minimum for large text and UI components
- **7:1** — WCAG 2.2 AAA target for normal text
