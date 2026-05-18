---
id: "icon-optical-balance"
title: "Icon Optical Balance"
category: "icons"
priority: "medium"
tldr: "Asymmetric shapes appear off-center when coordinate-centered. Offset 1–3px toward the lighter side — no formula works across all shapes, verify per icon and density."
tags:
  - icons
  - visual
  - web
  - mobile
  - icon
related_rules:
  - icon-alignment
  - icon-bounding-box
  - optical-center
sources:
  - label: "Arnheim. Art and Visual Perception"
    year: "1974"
  - label: "Apple. Human Interface Guidelines — App Icons"
    year: "2024"
  - label: "Shao, Che and Lu. Research on Visual Size and Visual Alignment Optimization of Icon Set Design. Displays 80"
    year: "2023"
---

## The Rule
- An asymmetric icon centered by coordinates appears shifted toward its heavier side. Apply a small offset in the opposite direction.
- The required offset is typically 1–3px for icons at 16–48px, depending on shape, stroke weight, and container size. No universal formula applies.
- A play triangle centroid sits at one-third of its height from the base. Geometric centering places it visually low and left: a rightward offset corrects this.
- Icons with open negative space (speech bubbles, arrows, stars) require similar correction. Visual mass is not evenly distributed around the geometric center.
- In circular containers (app icons, FABs): optical padding is not uniform. Shapes with vertical mass sit slightly higher; shapes with rightward mass shift left.
- Industry standard: Apple HIG (2024), Material Design (2021), and IBM Carbon specify optical centering for icon content within containers.

## Why
- Perceived center is determined by the distribution of visual mass, not by bounding box coordinates.
- The eye finds the centroid of filled area, not the midpoint of extremities (Arnheim 1974).
- Irregular shapes have non-coincident geometric and visual centroids: when the visual centroid is off-center within the container, the shape appears to float toward one side.
- Optical correction is scale-independent. The proportional offset stays constant whether the icon is 16px or 512px.
- Shao, Che and Lu (2023, Displays 80) measured alignment adjustment factors across icon types, confirming optical over bounding-box centering as the standard.

## When It Breaks
- Perfectly symmetric shapes (circles, squares, plus signs) have coincident geometric and visual centroids. An offset introduces error, not correction.
- Below 16px: sub-pixel offsets produce no visible improvement and may introduce rendering artifacts on non-retina displays. Correct at the design grid level.
- Animated icons: visual mass shifts during motion. Verify the optical correction at rest and at key frames.

## In Practice
- Play button in a circle: `transform: translateX(2px)` as a starting point. Adjust per icon size and verify at 1× and 2× display density.
- App icon safe zone: center the glyph optically within the safe area, not coordinate-center.
- Blur all icons in a set by 2px. Equal apparent mass within each frame confirms correct optical balance.

## Key Numbers
- **1–3px** — Typical optical correction offset for 16–48px asymmetric icons. Verify per shape.
