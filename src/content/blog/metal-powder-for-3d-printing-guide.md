---
title: "Metal Powder for 3D Printing: Alloys, Sizes, and Buying Guide"
description: A practical metal powder for 3D printing guide covering alloy selection, LPBF and DED particle sizes, powder quality, price, suppliers, and RFQ details.
pubDate: 2026-04-29T22:05:00+08:00
updatedDate: 2026-07-11
category: Knowledge
tags:
  - metal powder
  - powder specification
  - additive manufacturing
featured: true
---

Metal powder for 3D printing is a feedstock category, not a single product. A useful buying decision must connect four things: the part requirement, the alloy, the printing process, and the powder specification. A request for "metal powder" without those details cannot produce a reliable technical recommendation or a comparable quotation.

For most projects, the fastest route is:

1. define what the part must survive,
2. choose the AM process and machine,
3. shortlist the alloy family,
4. set the particle-size and chemistry requirements,
5. compare suppliers using the same acceptance basis.

This guide answers the broad search intent behind **metal powder for 3D printing**, then routes each decision to a more specific material or process page.

## Quick metal powder selection table

| Primary part requirement | Common powder candidates | Typical AM route | First question to resolve |
| --- | --- | --- | --- |
| Low mass with structural strength | Ti6Al4V / Ti64, AlSi10Mg | LPBF, EBM | Is strength-to-weight or cost the stronger constraint? |
| Corrosion-resistant fluid hardware | 316L, IN625, Grade 2 titanium | LPBF, DED | What media, temperature, pressure, and cleaning route apply? |
| High-temperature structural duty | IN718, Hastelloy X, IN625 | LPBF, DED | Is the design strength-led, oxidation-led, or corrosion-led? |
| Thermal or electrical hardware | CuCrZr, pure copper | LPBF | Is maximum conductivity or mechanical/process margin more important? |
| Mold, die, and production tooling | H13, M300 maraging steel | LPBF, DED | Is thermal fatigue or aged strength the main failure mode? |
| Medical or dental hardware | Ti64 Grade 23, CoCrMo, selected 316L routes | LPBF, EBM | What regulatory, cleaning, surface, and traceability requirements apply? |
| Scalable sintered production parts | 316L, 17-4PH | Binder jet, MIM | What density, shrinkage, heat treatment, and volume are required? |

These are starting points, not automatic approvals. A powder grade that is common in an industry can still be wrong for a particular environment, machine, or qualification plan.

## What makes a powder suitable for metal 3D printing

The alloy name is only the first line of the specification. Powder-based AM also depends on:

- particle-size distribution and the test method used,
- chemical composition and controlled interstitial elements,
- particle morphology and surface condition,
- apparent or tap density,
- flow and, more importantly for powder-bed systems, spreadability,
- contamination control,
- lot identity, sampling, packaging, and storage,
- whether the powder is virgin, blended, or reused.

[ISO/ASTM 52907](https://www.iso.org/standard/73565.html) covers documentation, sampling, particle size, chemistry, density, morphology, flowability, contamination, packaging, storage, and used powder. [ASTM F3049](https://store.astm.org/standards/f3049) provides a guide to powder characterization methods for powder bed fusion, directed energy deposition, and binder jetting. These references are useful because they show why a powder decision cannot be reduced to one sieve range or one flow number.

NIST's [Additive Manufacturing Powder Metrology Laboratory](https://www.nist.gov/laboratories/tools-instruments/additive-manufacturing-powder-metrology-laboratory) studies particle size, distribution, layer density, flowability, and spreadability because feedstock behavior must be connected to repeatable processing rather than a supplier description alone.

## Main alloy families

### Titanium powder

Ti6Al4V is the common structural titanium route for weight-critical brackets, nodes, housings, and manifolds. Grade 23, the ELI route, is usually discussed when implant-side chemistry and ductility controls are relevant. Grade 2 or TA1 is a commercially pure titanium route for corrosion-led or ductility-led service. TA15 is a more specialized elevated-temperature titanium option.

The deciding issue is often oxygen and interstitial control, not just nominal grade. Start with the [titanium powder guide](/posts/Alloys/titanium-powder-for-3d-printing-guide/) and the [titanium oxygen discussion guide](/posts/Alloys/titanium-oxygen-limit-discussion-guide/).

### Stainless steel and tool steel powder

316L is generally selected for corrosion resistance, ductility, manifolds, filters, and broad stainless process maturity. 17-4PH is used when precipitation-hardened strength is needed. H13 belongs to hot-work tooling and thermal-fatigue problems. M300 maraging steel belongs to compact, high-strength tooling where aging response and dimensional control matter.

These grades should not be grouped together as interchangeable "steel powder." Use the [steel powder comparison guide](/posts/Alloys/steel-metal-powder-for-3d-printing-guide/) to separate corrosion, strength, hot-work, and tooling intent.

### Nickel alloy powder

IN718 is normally the strength-led high-temperature route. IN625 is commonly reviewed for corrosion-heavy, marine, chemical, and ducting applications. Hastelloy X is associated with oxidation-resistant hot-gas and furnace or combustor hardware.

Operating environment comes before alloy reputation. The [nickel alloy powder guide](/posts/Alloys/nickel-alloy-powder-for-3d-printing-guide/) and [IN718 versus IN625 comparison](/posts/Alloys/in718-vs-in625-powder/) explain the difference.

### Aluminum powder

AlSi10Mg is widely used for lightweight housings, UAV structures, electronics frames, sensor payload enclosures, and other parts where low mass and integrated geometry matter. It is not a substitute for titanium when temperature, fatigue, or strength margins exceed the aluminum route.

Continue with the [AlSi10Mg and aluminum powder guide](/posts/Alloys/alsi10mg-powder/).

### Copper and copper alloy powder

Pure copper is attractive when conductivity dominates. CuCrZr trades some conductivity for more strength and process margin, which can be useful for cold plates, heat spreaders, induction hardware, electrical transitions, and high-heat-flux components.

Machine laser wavelength, absorptivity, oxygen behavior, thermal design, and post-machining all matter. Use the [copper powder guide](/posts/Alloys/cucrzr-vs-pure-copper-powder/) and [CuCrZr versus pure copper comparison](/posts/Alloys/cucrzr-vs-pure-copper-powder/).

### Cobalt chrome powder

CoCrMo and CoCrW powders appear in dental, medical, and industrial wear discussions. The application controls the required chemistry, documentation, finishing, and release route. A dental or medical material label does not by itself qualify a printed device.

## Particle size starts with the process

The ranges below are common commercial discussion bands, not universal purchase specifications. The machine supplier, recoater or feed system, layer thickness, alloy, and validated parameter set must control the final selection.

| Process | Common powder discussion range | What usually matters most |
| --- | --- | --- |
| LPBF | Often 15-45 um or 15-53 um | Layer spreading, fine-particle content, density, surface finish, machine compatibility |
| EBM | Often coarser than LPBF, such as 45-105 um | Preheating behavior, charging, powder recovery, machine specification |
| Powder-fed DED | Commonly broader/coarser than LPBF | Carrier-gas feeding, nozzle stability, catchment efficiency, deposition rate |
| Binder jet | Often fine distributions selected for packing and sintering | Packing density, binder interaction, shrinkage, sintered density |
| MIM | Fine powder systems matched to feedstock and debinding | Packing, rheology, debinding, shrinkage, sintered properties |

Two suppliers can both call a powder "15-45 um" while reporting different D10, D50, D90, fines, oversize, morphology, and sampling methods. Ask for the distribution data and method, not only the label. The [LPBF particle-size guide](/posts/Alloys/lpbf-powder-particle-size-guide/) covers this in more detail.

## Gas atomized and spherical are useful descriptions, not complete specifications

Gas atomization is common because it can produce relatively spherical particles suitable for powder spreading or feeding. Plasma atomization and other routes may also be used for particular alloys and quality requirements.

"Spherical powder" does not mean every particle is a perfect sphere. Satellites, agglomerates, internal pores, irregular particles, and surface oxides can still be present. NIST research on [3D particle shape and size measurement](https://www.nist.gov/publications/particle-shape-and-size-analysis-metal-powders-used-additive-manufacturing-technique) illustrates why size and shape need actual characterization.

Use the [gas atomized powder guide](/posts/Alloys/gas-atomized-metal-powder-for-additive-manufacturing/) and [spherical metal powder guide](/posts/Alloys/gas-atomized-metal-powder-for-additive-manufacturing/) as supporting pages, not as substitutes for a lot-specific report.

## How to judge powder quality before buying

A useful supplier package should let the buyer answer the following questions:

| Check | Evidence to request | Why it matters |
| --- | --- | --- |
| Alloy identity | Lot-specific chemistry or COA | Confirms the powder is the requested grade |
| Particle-size distribution | D10/D50/D90, sieve or laser-diffraction data, method | Shows the actual distribution behind the nominal cut |
| Interstitial control | Oxygen, nitrogen, hydrogen where relevant | Particularly important for titanium and qualification-sensitive programs |
| Morphology | Representative microscopy or agreed morphology method | Reveals irregular particles, satellites, agglomerates, or surface condition |
| Density and flow | Method-specific apparent/tap density and flow data | Helps compare handling behavior, but does not alone prove spreadability |
| Traceability | Manufacturer, lot, production route, dates, labels | Supports repeat orders and change control |
| Packaging | Container, atmosphere, mass, sealing, handling notes | Protects the condition of the powder in transit and storage |

For a development lot, not every project needs every test. For recurring aerospace, medical, or other controlled production, the acceptance package is usually much stronger. The [metal powder specification and COA guide](/posts/Alloys/metal-powder-specification-guide-psd-oxygen-flowability/) provides a field-by-field checklist.

## Price comparison without false equivalence

Powder prices vary with alloy chemistry, atomization route, usable yield, particle-size cut, oxygen or contamination limits, order size, documentation, packaging, and freight. A low price for a broad cut or unverified grade is not directly comparable with a controlled LPBF lot.

Compare quotations only after normalizing:

- alloy and applicable material specification,
- PSD and measurement method,
- virgin, blended, or reused condition,
- documentation and testing scope,
- net powder quantity and packaging,
- Incoterm, destination, and freight,
- sample, qualification, or recurring production status.

Use the [metal powder price guide](/posts/Alloys/metal-powder-for-3d-printing-price-guide/) for budgeting logic, then request a current formal quotation.

## Supplier versus manufacturer

A powder manufacturer produces the feedstock. A distributor or integrated supplier may stock, screen, coordinate testing, package, and export powder from one or more manufacturers. Either model can work if the commercial seller can identify the original manufacturer, provide lot-specific evidence, and manage changes.

The important question is not the label on the seller. It is whether the supply chain is transparent enough for the project. The [AM powder supplier qualification guide](/posts/Alloys/additive-manufacturing-powder-supplier-guide/) gives a structured evaluation.

## What to include in a metal powder RFQ

Send enough information to make the first response useful:

- alloy grade or the application if the grade is still open,
- AM process and machine model,
- required particle-size distribution,
- quantity for sample, qualification, or production,
- destination country and target timing,
- chemistry, oxygen, or other controlled-element limits,
- COA, PSD, morphology, density, flow, or traceability requirements,
- packaging size and atmosphere if specified,
- intended part family and service environment,
- whether recycled-powder compatibility or reuse policy matters.

A strong inquiry might say: "Quote 100 kg of gas-atomized 316L powder for LPBF, target 15-45 um, with lot-specific chemistry and PSD, packed in 10 kg containers, delivery to Germany. The application is corrosion-resistant fluid manifolds and the machine model is available on request."

That is much more actionable than "send your best metal powder price."

## Choose by application, then verify by specification

The broad answer is simple: choose the alloy by the part's governing requirement, choose the powder cut by the process and machine, and qualify the lot using evidence appropriate to the project risk. For a cross-industry matrix, continue with [metal powder selection by application](/posts/Alloys/metal-powder-selection-by-application/). For exact grades, use the [material centers](/materials/); for machine-route decisions, use the [process centers](/processes/).
