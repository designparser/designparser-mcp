# Rule Template

Copy this file to `rules/<category>/<rule-id>.md` and fill it in.
Run `npm run validate` locally before opening a PR.

---

**Priority guide:**
- `critical` — accessibility/safety violations (contrast, touch targets)
- `high` — core UX/design principles that directly affect usability
- `medium` — good practice with measurable benefit
- `low` — refinement and nuance

**Category options:** `color` · `typography` · `spacing` · `shadows` · `ux-laws` · `interaction` · `icons` · `visual` · `print`

**File naming:** filename must exactly match the `id` field: `your-rule-id.md`

---

```markdown
---
id: "your-rule-id"
title: "Your Rule Title"
category: "category-key"
priority: "critical | high | medium | low"
tldr: "One sentence. What the rule says in plain terms, ideally with a number."
tags:
  - mobile
  - accessibility
related_rules:
  - wcag-contrast
  - touch-target
sources:
  - label: "Author, Book or Study Title"
    year: "YYYY"
  - label: "Author, Another Source"
    year: "YYYY"
---

## The Rule
- State the rule as a concrete, actionable principle
- Use numbers where possible ("minimum 44px", "no more than 7 items")
- One bullet per distinct constraint

## Why
- Explain the research or perceptual reason behind the rule
- Link to cognitive science, studies, or established design theory
- Not opinions — evidence or well-established principles only

## When It Breaks
- Describe specific edge cases where this rule should NOT be applied
- Be precise about context ("this does not apply to disabled states")

## In Practice
- Practical implementation guidance
- Can include CSS values, tool references, or workflow notes

## Key Numbers
- **44px** — minimum touch target size (iOS HIG)
- **value** — what the number means and where it comes from
```

---

## Tag vocabulary

Use only existing tags. To add a new tag, update `VALID_TAGS` in `src/types.ts` first.

**Platform:** `web` · `mobile` · `desktop` · `print` · `native`
**Context:** `accessibility` · `typography` · `color` · `spacing` · `layout` · `interaction` · `icons` · `visual` · `ux-law` · `conversion`
**Goal:** `reading` · `branding` · `data-dense` · `marketing` · `onboarding`
**Component:** `button` · `form` · `navigation` · `card` · `table` · `modal` · `link` · `input` · `icon` · `shadow`

---

## Checklist before submitting a PR

- [ ] File is in `rules/<correct-category>/`
- [ ] Filename matches `id` field exactly
- [ ] All required fields filled: `id`, `title`, `category`, `priority`, `tldr`
- [ ] At least one source with a real, verifiable `label`
- [ ] `tags` use only vocabulary from the list above (or you've updated `VALID_TAGS`)
- [ ] `related_rules` IDs exist in the rules directory
- [ ] At least `## The Rule` or `## Why` section is present
- [ ] No duplicate of an existing rule (`npm run validate` catches schema, not duplicates — check manually)
- [ ] Ran `npm run validate` locally — no errors

## What does NOT belong here

- Opinions without evidence
- Rules that duplicate existing ones
- Tips without a real source
- Content that contradicts evidence-based research

Questions? Open an issue before writing a full rule.
