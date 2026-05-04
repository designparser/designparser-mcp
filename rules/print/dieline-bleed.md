---
id: "dieline-bleed"
title: "Dieline and Bleed"
category: "print"
priority: "high"
tldr: "A dieline is the flat 2D document defining every cut, crease, and glue line of a package. Extend all background artwork 3mm (EU) or 3.175mm / 0.125in (US) past the cut line. Errors propagate irreversibly into the physical form."
videoUrls:
  tiktok: "https://www.tiktok.com/@designparser/video/7616399946681437462?is_from_webapp=1&sender_device=pc&web_id=7621951402788800022"
  instagram: "https://www.instagram.com/reel/DVylM32CrYN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
sources:
  - label: "FEFCO International Fibreboard Case Code, 12th edition"
    year: "2022"
  - label: "ECMA Code, European Carton Makers Association"
    year: "2024"
  - label: "ISO 3394:2012. Packaging, Dimensions of rigid rectangular packages"
    year: "2012"
  - label: "Soroka. Fundamentals of Packaging Technology, 5th ed. IoPP"
    year: "2014"
  - label: "Shepard & Metzler. Mental rotation of three-dimensional objects. Science"
    year: "1971"
---

## The Rule
- A dieline is a vector-based 2D document.
- It defines cut, crease, perforation, and glue lines in their flat-unfolded state.
- It is not a mockup or a 3D rendering.
- Errors in the dieline cannot be corrected without remanufacturing the cutting die.
- Tool costs vary widely by region, complexity, and supplier (~300 to 2000 EUR for standard folding carton dies). Verify with the supplier before quoting.
- All construction lines must be placed on named spot-color layers.
- The overprint flag must be active on all construction layers.
- If not separated and overprint-flagged, the RIP interprets them as printable elements.
- They will then appear as visible marks on the finished product.
- Caliper correction is mandatory for rigid boards.
- Add twice the material thickness to each fold dimension in the flat dieline.
- A 2mm greyboard lid requires +4mm in the dieline.
- Online templates do not include this correction.

## Why
- Press drift displaces the substrate during printing.
- Without bleed, any drift exposes unprinted substrate after trimming.
- This appears as a visible white edge on the finished product.
- This is the most frequently reported single error in packaging prepress.
- The dieline demands continuous 2D-to-3D mental rotation.
- Shepard & Metzler (1971) established that mental rotation time scales linearly with structural complexity.
- This explains why fold orientation errors persist even among experienced packaging designers.

## When It Breaks
- Unprinted or flexo-printed corrugated transport packaging operates at lower graphic precision.
- These use FEFCO codes.
- Applying consumer-packaging bleed rules to unbranded corrugated adds prepress effort without production benefit.
- Short-run digital printing has no reusable cutting die.
- Per-unit correction cost is lower in short-run digital.
- The absence of a tooling proof means no physical verification exists before the full run completes.

## In Practice
- Folding carton in Adobe Illustrator: use a layered structure.
- Layer 1 = Dieline_Cut: spot color, overprint ON, non-printing.
- Layer 2 = Dieline_Crease: same settings as Dieline_Cut.
- Layer 3 = Artwork_CMYK.
- Extend all background fills 3mm past the cut path on every side.
- Place no text or barcodes within 5mm of any cut or crease line.

## Key Numbers
- **3mm** — EU standard bleed for folding carton and labels
- **3.175mm / 0.125in** — US standard bleed
- **3–5mm** — Safe zone inset from cut line, 5mm at crease lines
- **300 dpi** — Minimum raster artwork resolution at 1:1 final size
- **0.25pt** — Minimum stroke weight. Thinner lines drop out in production
