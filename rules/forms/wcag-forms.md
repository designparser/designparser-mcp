---
id: "wcag-forms"
title: "WCAG Forms, Errors & Authentication"
category: "interaction"
priority: "high"
tldr: "Label every input (SC 3.3.2 A). Identify and describe errors in text (SC 3.3.1 A). Provide correction suggestions when known (SC 3.3.3 AA). Auto-populate previously entered data (SC 3.3.7 A). Authentication must not rely solely on a cognitive test without an alternative (SC 3.3.8 AA)."
tags:
  - "accessibility"
  - "web"
  - "form"
  - "input"
related_rules:
  - "button-design"
  - "button-padding"
videoUrls:
  tiktok: ""
  instagram: ""
sources:
  - label: "W3C. WCAG 2.2"
    year: "2023"
  - label: "W3C. WCAG 2.0"
    year: "2008"
  - label: "WebAIM. The WebAIM Million"
    year: "2024"
---

## The Rule
- SC 3.3.1 Error Identification (A, EU-relevant: ja): If an input error is automatically detected, the item in error is identified and the error is described to the user in text.
- SC 3.3.2 Labels or Instructions (A, EU-relevant: ja): Labels or instructions are provided when content requires user input.
- SC 3.3.3 Error Suggestion (AA, EU-relevant: ja): If an input error is detected and suggestions for correction are known, they are provided to the user unless doing so would jeopardize security or the purpose of the content.
- SC 3.3.7 Redundant Entry (A, EU-relevant: ja): Information previously entered or provided to the user that is required again in the same process is either auto-populated or available for the user to select. Exceptions: re-entry is essential (e.g., password confirmation), required for security, or the previously entered information is no longer valid.
- SC 3.3.8 Accessible Authentication (Minimum) (AA, EU-relevant: ja): A cognitive function test — such as remembering a password, solving a puzzle, or transcribing characters — is not required at any authentication step unless an alternative method, a user-assistance mechanism, object recognition, or personal content identification is also available. Qualifying mechanisms include password manager support, copy-and-paste, passkeys, and magic links.

## Why
- Error messages indicated only by color or a warning icon without text are inaccessible to screen reader users and color-blind users.
- Unlabeled inputs are announced by screen readers as "edit, blank" — users cannot determine what to enter.
- Re-entering data that was already submitted adds error-prone repetition and places disproportionate burden on users with cognitive disabilities and motor impairments.
- CAPTCHA and puzzle-based authentication block a large share of users with cognitive, visual, and motor disabilities, and fail most screen reader users outright.
- WebAIM Million 2024 found missing form labels on over 45% of tested homepages.

## When It Breaks
- Error state indicated by a red border alone without a text description — color alone fails 3.3.1.
- Placeholder text used as the only label: it disappears on input and is not exposed as an accessible name by most browsers — fails 3.3.2.
- Inline validation that removes the error message before the user can navigate to it (3.3.1).
- Multi-step checkout that re-asks for a delivery address already entered in a previous step — fails 3.3.7.
- Password fields that block clipboard paste prevent password manager autofill and undermine 3.3.8.
- CAPTCHA without an audio or alternative non-cognitive challenge fails both 3.3.8 and 1.1.1.

## In Practice
- Associate every input with a `<label for="...">` or `aria-label` / `aria-labelledby`. Never rely on placeholder text alone.
- Prefix error messages with "Error:" and place them adjacent to the failing field; use `role="alert"` or `aria-live="assertive"` so screen readers announce them immediately on injection.
- Add `autocomplete` attributes to standard fields (name, email, address, credit card) — this satisfies 3.3.7 for the most common multi-step data.
- For authentication: support clipboard paste, `autocomplete="current-password"`, and passkeys. Do not implement CAPTCHA without a non-cognitive alternative.

## Key Numbers
- **45%** — Share of homepages with missing form label failures, per WebAIM Million 2024
