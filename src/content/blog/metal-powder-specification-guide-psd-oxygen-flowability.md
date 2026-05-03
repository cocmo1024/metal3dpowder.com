---
title: "Metal Powder Specification Guide: PSD, Oxygen, Flowability, and COA"
description: Metal powder specification guide covering PSD, oxygen, chemistry, flowability, apparent density, morphology, COA, and RFQ details for AM powder.
pubDate: 2026-05-04T07:46:00+08:00
category: Knowledge
tags:
  - metal powder specification
  - PSD report
  - oxygen control
  - powder flowability
  - COA
featured: true
---

A metal powder specification should do more than name the alloy. For additive manufacturing, the useful specification ties alloy grade, process route, particle-size distribution, chemistry, oxygen, morphology, flowability, apparent density, and documentation to the part being made.

Many weak inquiries say only "send price for 3D printing powder." That is not enough for a serious technical or commercial answer. A better inquiry states the alloy, manufacturing process, PSD window, quantity, application, and required documents.

## Core items in an AM powder specification

The exact specification depends on alloy and process, but most serious powder discussions include the same core items:

| Specification item | Why it matters |
| --- | --- |
| Alloy grade | Separates Ti64 from Grade 23, 316L from 17-4PH, IN718 from IN625, and CuCrZr from pure copper. |
| Process route | LPBF, EBM, DED, MIM, and binder jet do not use the same powder assumptions. |
| PSD | Defines the particle-size window, such as 15-45 um or 15-53 um for many LPBF discussions. |
| Chemistry | Confirms alloy composition and controlled elements. |
| Oxygen and interstitials | Critical for titanium and important for several other alloy families. |
| Morphology | Affects spreading, feeding, packing, and process consistency. |
| Flowability and apparent density | Helps evaluate powder handling behavior. |
| Documentation | COA, PSD report, and lot traceability support qualification and repeat orders. |

## PSD report

The PSD report describes particle-size distribution. It should be read in context. A 15-45 um powder and a 15-53 um powder may both be reasonable for LPBF, but the correct window depends on machine, alloy, layer strategy, and process history.

PSD alone does not prove powder quality. A powder can meet the size range but still have morphology, oxygen, contamination, or flow problems. Treat PSD as one part of the specification, not the whole specification.

## Oxygen and chemistry

Oxygen is especially important in titanium powder because interstitial pickup can affect ductility and final performance. Oxygen and chemistry are also relevant for aluminum, copper, nickel, and high-value stainless programs. The right requirement depends on alloy and application. Do not copy one oxygen number across every project.

## COA and traceability

A COA is useful because it ties a powder lot to chemistry and quality information. For early development, a basic COA may be enough. For medical, aerospace, hot-side, or recurring production work, stronger traceability and documentation may be needed.

Traceability also protects the repeat order path. If a successful development lot cannot be identified clearly, the next purchase may not behave the same way. For powder users trying to move from trials into recurring production, lot identity, retained documentation, packaging condition, and any reuse policy should be treated as part of the manufacturing route rather than administrative extras.

## Process-specific specification differences

LPBF specifications often emphasize fine PSD windows, morphology, flowability, apparent density, and chemistry. EBM powder may use coarser titanium cuts. DED powder may prioritize feeding behavior and deposition stability. MIM and binder jet powders can follow different size and packing requirements. This is why a complete powder specification starts with the process route instead of only the alloy name.

## RFQ checklist

A practical powder RFQ should include:

- alloy grade,
- target process,
- PSD window,
- quantity,
- application or part family,
- required documents,
- delivery country,
- whether the powder is for testing, qualification, or recurring production.

## Related powder guides

For broad material choice, start with the [metal powder for 3D printing guide](/posts/Alloys/metal-powder-for-3d-printing-guide/). For LPBF size windows, read the [LPBF powder particle size guide](/posts/Alloys/lpbf-powder-particle-size-guide/). For morphology, read the [spherical metal powder guide](/posts/Alloys/spherical-metal-powder-for-3d-printing/).
