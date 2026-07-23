---
id: "viewing-distance"
title: "Viewing Distance"
category: "visual"
priority: "high"
tldr: "The distance a medium is designed to be viewed from, from a 30cm phone to a 150m billboard, sets the type size, contrast, and detail density it can carry."
tags:
  - visual
  - web
  - print
related_rules:
  - visual-angle-arcminutes
sources:
  - label: "Apple Developer. Human Interface Guidelines: Designing for tvOS"
    year: "2024"
  - label: "Android Developers. Design for TV, TV design guidelines"
    year: "2024"
  - label: "Signs.com. Signage 101: Letter Height Visibility"
    year: "2023"
  - label: "United States Sign Council (USSC). Legibility research on letter height and viewing distance"
---

## The Rule
- Mobile screens are typically held 25 to 40cm from the eyes. Body text and UI can carry fine detail at small absolute sizes because the eye is close. Touch targets still need physical minimum sizes regardless of that distance.
- Desktop monitors sit roughly 50 to 70cm away. Body copy can run at smaller physical sizes than a printed page and still read comfortably, since screen resolution and the closer distance keep perceived size adequate.
- Handheld print and packaging (menus, product labels, books) is read at 25 to 40cm. Fine print and legal text rely on this close range and become illegible at any greater distance.
- Posters and retail signage are viewed from roughly 1 to 5m. Sign designers scale letter height by a common rule of thumb, about 1 inch of capital letter height per 10 feet of distance, so a poster read at 3m needs letters near 2.5cm tall.
- Billboards and large-format outdoor advertising are read from tens to hundreds of meters, often at vehicle speed. The same 1 inch per 10 feet rule of thumb scales up: a billboard read at 150m needs letters roughly 1.25m tall and far lower detail density.
- Television and other 10-foot interfaces (Android TV, Apple tvOS, game console UIs) are designed around roughly 3m (10 feet) of couch-to-screen distance. Both platforms' guidelines call for large point sizes, heavier font weights, and lower information density than a desktop app.

## Why
- Perceived size is physical size divided by viewing distance, the relationship covered in detail by the visual-angle-in-arcminutes rule. Viewing distance conventions are the practical shortcut typographers and sign shops use instead of computing arcminutes for every layout.
- Apple's tvOS Human Interface Guidelines design around an average 10-foot viewing distance, calling for large point sizes and heavier font weights, since legibility can't rely on the viewer leaning in. Platform convention (Apple tvOS HIG).
- Android's TV design documentation carries the same assumption: a television app should assume the user sits about 10 feet away, the source of the platform's own term, 10-foot UI. Platform convention (Android TV guidelines).
- The 1 inch per 10 feet figure is a widely used signage industry rule of thumb, commonly credited to United States Sign Council (USSC) legibility research. It converts a target distance directly into a minimum letter height.
- Closer media can compress more information into the same field of view, because the eye resolves finer detail up close. Distant media must strip detail because it would fall below the resolvable size, forcing simpler compositions with fewer, bolder elements.

## When It Breaks
- A fixed viewing distance assumption ignores low vision. Someone with reduced acuity still needs larger text than the 10-foot TV default provides. This is why tvOS and Android TV both ship separate accessibility text-size settings.
- Mobile viewing distance is not fixed. People zoom in, hold a phone closer to read fine print, or view it mounted farther away on a dashboard or kiosk stand. This breaks any layout assuming a single 25 to 40cm distance for every task.
- Outdoor lighting and glare shrink the effective legible distance below the geometric prediction. A sign sized for 150 feet under lab contrast can become unreadable at half that distance in dusk light or glare. The convention is a starting point, not a guarantee.
- Vehicle speed changes how long a viewer actually has to read at a given distance. A billboard sized only by the static 1 inch per 10 feet rule can still fail on a highway, where that distance affords only a second or two of legibility.

## In Practice
- For a 10-foot television interface, follow the platform's own type guidance, not a desktop or mobile scale. Both Apple's tvOS and Android's TV guidelines design around roughly 3m of couch distance: large point sizes, heavier weights, simplified layouts.
- For printed or physical signage, start from the sign industry convention: about 1 inch (2.5cm) of letter height per 10 feet (3m) of viewing distance. Verify legibility on site under actual lighting, since glare and contrast reduce the real legible distance.
- For products spanning mobile to desktop, do not reuse one absolute point size across breakpoints. Body text that reads fine on a phone at 25 to 35cm needs a larger physical size to preserve the same perceived scale on a desktop monitor viewed from 50 to 70cm.

## Key Numbers
- **~1 inch per 10 ft** — Sign industry letter height convention (USSC-based)
- **~3m / 10 ft** — TV / 10-foot UI viewing distance (platform convention)
- **~25-40cm** — Mobile and handheld print viewing distance, design convention
- **~50-70cm** — Desktop monitor viewing distance, design convention
