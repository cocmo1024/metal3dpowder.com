---
title: "LPBF Powder Particle Size Guide: 15-45 um, 15-53 um, and What Actually Changes"
description: Practical LPBF powder particle size guidance covering common PSD windows, why they differ, and how they affect process fit.
pubDate: 2026-04-12
category: Process
tags:
  - LPBF
  - particle size
  - powder quality
  - metal additive manufacturing
featured: true
---

Particle size is one of the first things teams ask about in an LPBF powder discussion, and that makes sense. It affects recoating behavior, layer consistency, flow, apparent density, and how comfortably the powder fits a known process window.

The problem is that PSD is often discussed as if one size range is universally "best." It is not. A PSD window only makes sense in the context of the alloy, the machine, the layer strategy, and the level of process maturity.

## Why common LPBF PSD windows look similar

Many LPBF teams recognize ranges like 15-45 um or 15-53 um because they are common in commercial powder offers. Those ranges tend to balance flow behavior and fine-feature capability reasonably well for many alloys and machines.

That does not mean every LPBF build should use the same cut. Different alloys, different recoating behavior, and different process targets can all move the practical answer.

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

## What should actually be defined

If the team already has a validated powder window, the best definition is the simplest one: use that exact PSD and state the process route clearly.

If the team is still deciding, the project should at least define:

- alloy grade
- LPBF process route
- whether the route is for development or qualification
- whether reused powder is part of the plan
- any machine or layer-thickness constraints already known

That gives the project enough context to choose a realistic cut rather than a generic one.

## Why the cheapest PSD offer can be risky

Two lots can both say "15-45 um" and still describe very different realities. One may come with stronger control of fines, tighter morphology consistency, or better lot traceability. Another may only satisfy the nominal size range.

If the application is still moving between laser and electron-beam routes, keep the PSD review tied to the actual process family instead of trying to reuse one particle-size assumption across every machine path.

## The practical takeaway

For LPBF, particle size matters a lot, but it only becomes meaningful when it is tied to process route, alloy family, and batch quality. The best result comes from defining the PSD you actually need and backing it with the rest of the process context.

If the project is actually electron beam based rather than laser based, use the dedicated [EBM powder size guide](/posts/Alloys/ebm-powder-size-guide/) instead of copying an LPBF PSD request.
