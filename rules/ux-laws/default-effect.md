---
id: "default-effect"
title: "Default Effect"
category: "ux-laws"
priority: "medium"
tldr: "Users tend to keep pre-selected options (d = 0.68, 58 studies, 73,675 participants). This status-quo bias, which makes defaults effective nudges, also renders pre-checked consent checkboxes legally invalid under GDPR."
tags:
  - ux-law
  - conversion
  - form
  - web
videoUrls:
  tiktok: ""
  instagram: "https://www.instagram.com/reel/DVtihFXCrK1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
sources:
  - label: "Jachimowicz, Duncan, Weber & Johnson. Behavioural Public Policy"
    year: "2019"
  - label: "Madrian & Shea. The Quarterly Journal of Economics"
    year: "2001"
  - label: "Johnson & Goldstein. Science"
    year: "2003"
  - label: "Dinner, Johnson, Goldstein & Liu. Journal of Experimental Psychology: Applied"
    year: "2011"
  - label: "Mertens et al. PNAS"
    year: "2022"
  - label: "GDPR (EU) 2016/679, Recital 32 and Art. 4(11)"
    year: "2016"
  - label: "CJEU C-673/17. Planet49 GmbH"
    year: "2019"
---

## The Rule
- Expect users to retain pre-set options at a rate significantly above chance.
- Meta-analytic effect size: d = 0.68 (95% CI [0.53–0.83]).
- Based on Jachimowicz et al., 2019 (k=58 studies, N=73,675 participants).
- The effect is strongest when users have no clear prior preference.
- Distinguish three separable mechanisms that drive default retention:
- First: physical effort of the opt-out action.
- Second: cognitive effort when no preference exists.
- Third: implied endorsement. The user interprets the default as the system's recommended choice (Dinner et al., 2011).
- All three mechanisms are additive.
- Pre-checked consent checkboxes for cookies, data sharing, and marketing opt-ins are legally void under GDPR Recital 32.
- Confirmed by CJEU Planet49 (C-673/17, 2019).
- The element is structurally identical to a legitimate nudge.
- Legal status depends on context, not visual form.

## Why
- Status quo bias: deviation from the current state is coded as a potential loss (Samuelson & Zeckhauser, 1988).
- Defaults create the status quo by design.
- This activates loss aversion before any active choice is made.
- Organ donation provides the largest real-world signal.
- Opt-out countries show at least 60 percentage points higher donation rates than opt-in countries.
- Controlling for infrastructure and public education (Johnson & Goldstein, 2003, Science; 11 European countries).

## When It Breaks
- Reactance occurs when users recognize the default as serving the provider rather than themselves.
- Approximately 15% of studies in Jachimowicz et al. (2019) found null or negative effects.
- Null effects occurred most often in high-involvement decisions with strong prior preferences.
- Publication bias inflates reported effect sizes.
- Mertens et al. (2022, PNAS; N=2,148,439) estimate the bias-adjusted true effect at d = 0.08–0.31.
- The widely cited figure of 85% retention has no primary source.
- It is not a valid benchmark.

## In Practice
- SaaS onboarding: notifications default to OFF.
- Billing interval defaults to monthly only if usage data confirms it as modal.
- Minimum N=100 required before setting a data-driven default.
- Every consent checkbox ships unchecked.
- The data source and date for each default are documented in the design system.

## Key Numbers
- **d = 0.68** — Meta-analytic effect size, 95% CI [0.53–0.83] (Jachimowicz et al., 2019; k=58; N=73,675)
- **≥60pp** — Donation rate gap, opt-out vs. opt-in countries (Johnson & Goldstein, 2003)
- **d = 0.08–0.31** — Bias-adjusted effect size estimate (Mertens et al., 2022)
