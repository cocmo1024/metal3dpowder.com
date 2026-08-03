---
title: "LPBF Powder Particle Size Guide: 15-45 vs 15-53 um"
description: Practical LPBF powder particle size guidance covering common PSD windows, why they differ, and how they affect process fit.
pubDate: 2026-04-12
updatedDate: 2026-07-16
category: Process
tags:
  - metal powder
  - LPBF
  - particle size distribution
  - additive manufacturing
featured: false
---

Particle size is one of the first things teams ask about in an LPBF powder discussion, and that makes sense. It affects recoating behavior, layer consistency, flow, apparent density, and how comfortably the powder fits a known process window.

The problem is that PSD is often discussed as if one size range is universally "best." It is not. A PSD window only makes sense in the context of the alloy, the machine, the layer strategy, and the level of process maturity.

## Why common LPBF PSD windows look similar

Many LPBF teams recognize ranges like 15-45 um or 15-53 um because they are common powder cuts across established LPBF routes. Those ranges tend to balance flow behavior and fine-feature capability reasonably well for many alloys and machines.

That does not mean every LPBF build should use the same cut. Different alloys, different recoating behavior, and different process targets can all move the practical answer.

| Common LPBF request | What the request usually means |
| --- | --- |
| 15-45 um metal powder | A fine powder-bed cut often used where layer quality and fine feature behavior matter. |
| 15-53 um metal powder | A slightly wider common LPBF window that may improve yield or availability for some alloys. |
| 20-63 um metal powder | A coarser powder-bed style request that needs machine and parameter confirmation. |
| Custom PSD window | Usually tied to a validated machine parameter set or controlled production route. |

The search phrase "15-45 um metal powder" is therefore useful, but it is incomplete. The better request is "15-45 um Ti64 powder for LPBF" or "15-53 um 316L powder for LPBF" because the alloy and process route make the PSD meaningful.

## PSD is not the same thing as powder quality

This is the most common misunderstanding. A powder can sit inside the requested PSD range and still create trouble if morphology, contamination, flow behavior, or chemistry are unstable.

PSD should be reviewed together with:

- morphology
- apparent density
- flowability
- chemistry or interstitial limits
- batch traceability

That matters even more when the project allows reused powder, because baseline stability becomes part of the economic case.

## How PSD decisions change with alloy family

Fine, reactive, high-value powders such as titanium and nickel are usually handled more conservatively than many teams expect. Aluminum brings its own handling issues. Stainless powders often feel more forgiving, but that should not lead to a loose specification.

The right PSD request therefore follows the alloy and the machine route together. A titanium LPBF project and a stainless LPBF project may both use similar nominal windows, but the surrounding chemistry and handling controls can differ a lot.

For titanium powder, the PSD discussion should stay close to oxygen control, nitrogen, hydrogen, morphology, and reuse discipline. For nickel alloy powder, chemistry stability, apparent density, and downstream heat treatment matter. For aluminum powder, oxide behavior and handling discipline become more visible. For copper powder, reflectivity, oxygen, and morphology can affect process stability. Stainless steel powder may be more forgiving, but lot consistency still matters when the project moves beyond trial builds.

## How to read 15-45 um and 15-53 um requests

A 15-45 um request usually signals a fine LPBF powder expectation. It may be appropriate for Ti64, 316L, IN718, AlSi10Mg, CuCrZr, and many other powder-bed alloys, but only if the machine route supports it. A 15-53 um request may appear because a supplier or machine route uses a wider cut. Neither number is a universal quality grade.

The upper and lower ends both matter. Too many fines can affect flow, handling, and contamination sensitivity. Too many coarse particles can affect layer quality or fine feature behavior. That is why a PSD report should be read with morphology, apparent density, and process history rather than treated as a single line item.

## What should actually be defined

If the team already has a validated powder window, the best definition is the simplest one: use that exact PSD and state the process route clearly.

If the team is still deciding, the project should at least define:

- alloy grade
- LPBF process route
- whether the route is for development or qualification
- whether reused powder is part of the plan
- any machine or layer-thickness constraints already known

For lot acceptance, also lock the analytical basis. The [laser diffraction versus dynamic image analysis guide](/posts/Alloys/laser-diffraction-vs-dynamic-image-analysis-metal-powder-psd/) explains why identical percentile names can move when the diameter descriptor, weighting, or physical method changes. The [metal powder lot sampling guide](/posts/Alloys/am-metal-powder-lot-sampling-for-psd/) covers how the tested material should represent the supplied lot before any PSD limit is applied.

PSD and bulk flow still do not prove that a powder will form a uniform layer. Use the [LPBF spreadability and layer-density guide](/posts/Alloys/lpbf-powder-spreadability-and-layer-density/) to define recoater variables, environmental controls, layer measurements, and machine-trial acceptance.

That gives the project enough context to choose a realistic cut rather than a generic one.

## RFQ wording that reduces confusion

A clear powder inquiry should name the alloy, process, PSD window, quantity, documentation expectation, and application class. Examples:

- Ti64 powder for LPBF, 15-45 um, low oxygen requirement, aerospace bracket development.
- 316L powder for LPBF, 15-53 um, PSD report and COA required, manifold prototype.
- IN718 powder for LPBF, fine powder-bed cut, chemistry and oxygen documentation required, hot-side hardware.
- AlSi10Mg powder for LPBF, machine-compatible PSD, lightweight housing development.

These examples are still short, but they are much stronger than asking for "3D printing powder" or "15-45 um powder" without context.

## Why the cheapest PSD offer can be risky

Two lots can both say "15-45 um" and still describe very different realities. One may come with stronger control of fines, tighter morphology consistency, or better lot traceability. Another may only satisfy the nominal size range.

If the application is still moving between laser and electron-beam routes, keep the PSD review tied to the actual process family instead of trying to reuse one particle-size assumption across every machine path.

## The practical takeaway

For LPBF, particle size matters a lot, but it only becomes meaningful when it is tied to process route, alloy family, and batch quality. The best result comes from defining the PSD you actually need and backing it with the rest of the process context.

If the project is actually electron beam based rather than laser based, use the dedicated [EBM powder size guide](/posts/Alloys/ebm-powder-size-guide/) instead of copying an LPBF PSD request.
