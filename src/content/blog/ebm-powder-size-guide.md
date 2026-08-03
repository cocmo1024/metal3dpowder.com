---
title: EBM Powder Size Guide for Titanium and High-Temperature AM Alloys
description: Practical EBM powder size guidance for teams comparing electron beam powder bed fusion with LPBF, including why coarser cuts and reuse planning matter.
pubDate: 2026-04-12T09:40:00+08:00
updatedDate: 2026-08-03
category: Process
tags:
  - metal powder
  - EBM
  - additive manufacturing
featured: false
---

EBM powder size should not be specified as if it were an LPBF route with a different machine label. Electron beam powder bed fusion usually works with a coarser powder strategy, and that changes how teams should think about reuse and process fit.

A [published coarse-cut Ti6Al4V Grade 23 process sheet](https://www.colibriumadditive.com/sites/default/files/M2SERIES5_COARSE_Ti64_400W_CMDS_20241112_RevA.pdf) lists a **45–106 µm** route. That is a useful reference point: EBM conversations often sit in a different powder-size logic than common LPBF requests.

## Why EBM usually means coarser powder

EBM is not just LPBF with electrons. The build environment, powder behavior, and process strategy are different enough that teams should expect different powder expectations. Published EB-PBF process guidance also describes builds occurring in **semi-sintered powder**, which is one reason reuse discipline becomes part of the process discussion earlier.

That does not mean every EBM job should blindly ask for 45-106 um. It means teams should stop assuming that a fine LPBF-style PSD is the default answer.

## What should be specified for EBM

At minimum, an EBM powder inquiry should include:

- alloy grade
- EBM or EB-PBF process route
- target machine family if known
- whether the request is prototype, production, or qualification
- whether powder reuse is part of the plan

That last point matters because EBM is often tied to a reuse workflow more directly than many teams expect.

## Why titanium dominates the EBM conversation

EBM is frequently tied to titanium because Ti6Al4V remains the most familiar EBM route. That does not mean EBM is only for titanium. It does mean that many teams first encounter EBM through titanium and then generalize the powder logic to other alloys.

That generalization can be useful, but only if the process definition still respects the alloy family, machine route, and reuse policy.

## How EBM differs from LPBF

The most practical differences are:

- coarser powder is more common
- reuse planning appears earlier in the conversation
- the machine route should be stated explicitly
- the powder request should not be copied from LPBF by habit

If the team still works mainly in laser systems, the [LPBF particle size guide](/posts/Alloys/lpbf-powder-particle-size-guide/) is the better reference. If the project is truly EBM, the process route should say so clearly from the start.

## The practical takeaway

Use an EBM powder definition that reflects EBM reality, not an LPBF template. Expect coarser powder strategy to be normal, connect the material to the machine route, and define the reuse plan before freezing the process window.

For titanium-specific alloy context, pair this with the [TC4 / Ti64 powder guide](/posts/Alloys/tc4-ti6al4v-powder/).

## EBM powder RFQ matrix

| Field | Buyer requirement |
| --- | --- |
| Machine | EBM machine family, qualified material route and build temperature |
| Alloy | Exact grade and chemistry/interstitial basis |
| PSD | Agreed range plus sampling, measurement method and reporting basis |
| Electrical/thermal behavior | Evidence relevant to charging, preheat and powder-bed stability |
| Reuse | Recovery, sieving, blending, exposure, genealogy and release rules |
| Part route | Build, support/sinter-cake removal, heat treatment, HIP, machining and inspection |

Do not copy an LPBF fine-powder requirement into an EBM purchase order. The appropriate cut must fit the EBM machine, preheat, powder-bed behavior and qualified material route. Request the lot COA, PSD report, TDS/SDS, and available morphology or SEM evidence. If used powder will return to production, define the lifecycle plan before the first lot is released.
