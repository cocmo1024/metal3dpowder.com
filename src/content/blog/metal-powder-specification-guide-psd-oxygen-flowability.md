---
title: "Metal Powder Specification and COA Guide: PSD, Oxygen, and Flow"
description: Specify AM metal powder and read a COA using chemistry, D10/D50/D90, oxygen, morphology, density, flow, sampling, traceability, and RFQ fields.
pubDate: 2026-05-04T07:46:00+08:00
updatedDate: 2026-09-05
category: Knowledge
tags:
  - metal powder
  - powder specification
  - powder flowability
  - particle size distribution
  - additive manufacturing
featured: true
---

A metal powder specification defines what the buyer will accept. A certificate of analysis (COA) reports selected results for a supplied lot. The two documents serve different purposes, and neither should be replaced by a generic product data sheet.

For additive manufacturing, a complete powder specification normally connects alloy chemistry, particle-size distribution, morphology, density, flow or spreadability, contamination, traceability, packaging, and powder condition to the process and application.

## Specification, COA, and data sheet

| Document | Main purpose | What it should answer | Common limitation |
| --- | --- | --- | --- |
| Technical specification or purchase requirement | Defines acceptance | What grade, limits, methods, documents, packaging, and change controls are required? | Can become unrealistic if copied from another process or alloy |
| Lot-specific COA | Reports lot results | What was measured for this lot, and does it meet the agreed limits? | May report only chemistry and a nominal PSD |
| Product data sheet | Describes a standard product | What grade, typical range, and intended processes are offered? | Usually not proof for the supplied lot |
| Safety data sheet | Supports hazard communication and handling | What hazards and precautions apply? | Does not establish AM process suitability |

The buyer should review all four where relevant, but the specification and lot evidence control technical acceptance.

## What ISO and ASTM include

[ISO/ASTM 52907](https://www.iso.org/standard/73565.html), confirmed as current in 2025, covers documentation and traceability, sampling, particle-size distribution, chemistry, characteristic densities, morphology, flowability, contamination, packaging, storage, and used powder. It does not cover safety.

[ASTM F3049](https://store.astm.org/standards/f3049) is a guide to characterization methods for metal powders used in powder bed fusion, directed energy deposition, and binder jetting. These standards do not create one universal acceptance limit. They help buyers and suppliers agree on what to characterize and how to describe the methods.

## Core fields in a metal powder specification

| Specification field | Evidence to request | Why it matters |
| --- | --- | --- |
| Alloy designation | Referenced standard or agreed chemistry table | Prevents ambiguous names such as "titanium powder" or "stainless powder" |
| Chemical composition | Lot-specific measured chemistry and method where required | Confirms alloy identity and controlled elements |
| Interstitials / gases | Oxygen, nitrogen, hydrogen or other limits by alloy | Critical for titanium and relevant to other reactive or controlled systems |
| PSD | D10/D50/D90 or agreed sieve limits plus method | Defines the actual distribution behind a nominal cut |
| Morphology | Agreed imaging method or representative lot images | Reveals irregulars, satellites, agglomerates, or surface condition |
| Apparent/tap density | Value and test method | Supports packing and handling comparison |
| Flow / rheology | Value, method, and conditions | Helps compare handling but does not alone prove machine spreadability |
| Contamination | Agreed foreign-particle or cleanliness controls | Protects chemistry and build integrity |
| Production route | Gas atomized, plasma atomized, water atomized, or other | Provides context for shape, oxygen, internal porosity, and cost |
| Powder condition | Virgin, blended, conditioned, recovered, or reused | Prevents incompatible assumptions about feedstock history |
| Traceability | Manufacturer, lot, dates, quantity, document references | Supports repeat orders, investigation, and change control |
| Packaging | Container, net mass, seal, atmosphere, label, storage | Protects the accepted powder condition through delivery |

Not every sample order needs every field. The correct scope follows the process risk and application.

## How to read a PSD report

Particle-size distribution is not fully described by "15-45 um."

### D10, D50, and D90

- D10 is the size below which 10% of the measured distribution falls.
- D50 is the median of the measured distribution.
- D90 is the size below which 90% falls.

The exact meaning also depends on whether the instrument reports volume, number, mass, or another basis. A buyer should record the measurement method and reporting basis.

### Nominal cut versus measured distribution

A nominal 15-45 um product can contain limited material below or above those values depending on the supplier's controls and test method. The specification should state whether acceptance uses sieves, laser diffraction, dynamic imaging, or another method, plus limits for fines and oversize if they matter.

NIST compared multiple PSD and morphology techniques for stainless powder and found that methods respond to different physical aspects of the particles. The [NIST comparison study](https://www.nist.gov/publications/comparison-particle-size-distribution-and-morphology-data-acquired-using-lab-based-and) is a useful warning against comparing numbers without comparing methods.

Use the dedicated [laser diffraction versus dynamic image analysis guide](/posts/Alloys/laser-diffraction-vs-dynamic-image-analysis-metal-powder-psd/) to choose a release method, define the reporting basis, and avoid transferring D10/D50/D90 limits between unlike techniques.

### PSD is process-specific

LPBF often discusses fine cuts such as 15-45 um or 15-53 um. EBM frequently uses coarser powder. Powder-fed DED focuses on feeding and deposition behavior. Binder jet and MIM depend on packing, binder interaction, debinding, sintering, and shrinkage.

Use the [LPBF particle-size guide](/posts/Alloys/lpbf-powder-particle-size-guide/), [EBM size guide](/posts/Alloys/ebm-powder-size-guide/), or [DED powder versus wire guide](/posts/Alloys/ded-powder-vs-wire-feedstock-guide/) instead of copying one range across processes.

## Chemistry and oxygen

The chemistry section should identify:

- the alloy designation and reference,
- measured elements and units,
- specification limits,
- test method where required,
- whether results represent the supplied lot,
- any calculated or balance value,
- controlled gases or interstitial elements.

Titanium powder requires particular care because oxygen and other interstitials influence material behavior. Grade 5 and Grade 23 should not be separated by label alone; the agreed chemistry and project requirements control. Read the [titanium oxygen guide](/posts/Alloys/titanium-oxygen-limit-discussion-guide/) for that decision.

For aluminum, copper, nickel, stainless, tool steel, and cobalt alloys, chemistry still matters. Do not assume that an alloy family name establishes the exact grade or application suitability.

## Morphology: spherical is not a binary result

Powder morphology can include:

- near-spherical particles,
- irregular or elongated particles,
- satellites attached to larger particles,
- agglomerates,
- hollow or internally porous particles,
- rough surfaces,
- fractured or oxidized particles.

NIST's [3D particle shape and size study](https://www.nist.gov/publications/particle-shape-and-size-analysis-metal-powders-used-additive-manufacturing-technique) used X-ray computed tomography and image analysis to distinguish near-spherical particles from non-spherical or multi-particle forms. For purchasing, the practical point is that "spherical" should be supported by an agreed observation or acceptance method when morphology is critical.

Representative images are useful only when they are tied to the lot or a controlled product baseline. A polished marketing micrograph with no lot, scale, sampling, or method has limited acceptance value.

## Flowability, rheology, and spreadability

Flow tests measure behavior under defined test conditions. A powder may flow through a funnel yet spread poorly in a thin LPBF layer. Another powder may not produce a Hall-flow time but still process acceptably in a particular machine.

Record:

- the test method and funnel or instrument,
- temperature and humidity where relevant,
- sample preparation,
- whether the result is a single value or range,
- how the method relates to the actual recoating or feeding system.

The current [ISO/ASTM flow-property guidance](https://www.iso.org/standard/75754.html) emphasizes selecting measurement methods appropriate to the powder and process, including virgin and used material. This supports a method-based specification rather than one universal "good flow" number.

Use the [Hall, Carney, density, and powder-rheology test guide](/posts/Alloys/metal-powder-flowability-tests-hall-carney-rheology/) to define reportable results, no-flow handling, and method-transfer rules. For LPBF, use the separate [spreadability and layer-density guide](/posts/Alloys/lpbf-powder-spreadability-and-layer-density/) to connect incoming indicators with recoater and machine-trial evidence.

## Density values are not interchangeable

Apparent density, tap density, skeletal density, and powder-bed density describe different conditions. State the method and units.

- Apparent density helps describe how powder fills a defined volume without tapping.
- Tap density measures a compacted condition after a specified tapping procedure.
- Skeletal density relates to the solid material excluding accessible void space, depending on method.
- Powder-bed density is the density achieved in the deposited layer and is process-dependent.

A supplier COA may report one density. The buyer should not relabel it as another.

## Sampling can invalidate good testing

Segregation can occur during atomization collection, transport, vibration, storage, splitting, and pouring. A test result is only as representative as the sample.

Define:

- where and how the sample is taken,
- whether the container is mixed or sampled from multiple locations,
- the sample quantity,
- the sample-reduction method,
- retention-sample requirements,
- how opened or partially used containers are handled.

The [AM metal powder lot sampling guide](/posts/Alloys/am-metal-powder-lot-sampling-for-psd/) develops these fields into an increment, composite, sample-reduction, retention, and chain-of-custody workflow for PSD acceptance.

NIST research on [feedstock variation in powder bed fusion](https://www.nist.gov/publications/characterization-feedstock-powder-bed-fusion-process-sources-variation-particle-size) discusses transportation, handling, sampling, and spreading as sources of variation.

## Virgin, blended, and reused powder

The specification should state the allowed powder condition:

- virgin only,
- virgin blended with recovered powder,
- conditioned or sieved powder,
- reused powder with defined cycle or exposure controls.

If reused powder is permitted, define the recovery, sieving, sampling, chemistry, PSD, contamination, and blending rules. A reuse policy is part of the manufacturing process, not a generic supplier claim.

## Three documentation levels

### Development screening

Suitable for an early feasibility trial:

- alloy identity,
- lot chemistry,
- PSD report,
- production route,
- basic packaging and traceability.

### Recurring industrial production

Add:

- agreed chemistry and PSD limits,
- morphology/density/flow baseline where useful,
- lot genealogy,
- change notification,
- standardized packaging,
- incoming inspection and retention plan.

### Qualification-sensitive application

Add the controls required by the governing program:

- contract material specification,
- approved methods and laboratories,
- complete lot traceability,
- controlled sampling,
- retained records and samples,
- source and process change approval,
- powder reuse controls,
- application-specific regulatory, code, or quality requirements.

The powder supplier supports this package; the part manufacturer still owns process qualification and final part acceptance.

## COA review checklist

Before accepting a COA, ask:

1. Does the document identify the original manufacturer and supplied lot?
2. Does the alloy designation match the purchase requirement?
3. Are values measured, typical, or specification limits?
4. Are units and methods clear?
5. Does the PSD include actual distribution data?
6. Are oxygen or other controlled gases included where required?
7. Do all reported results meet the agreed limits?
8. Does the packaging label match the COA?
9. Is any test performed on a different lot or product baseline?
10. Are deviations or substitutions explicitly approved?

## What to do when a COA is incomplete or inconsistent

A document review should end with a clear disposition, not simply a folder of certificates. The following is a purchasing workflow, not a replacement for the agreed acceptance specification or a set of universal test limits.

| Finding on the proposed lot | What to request next | Release decision |
| --- | --- | --- |
| COA and container show different lot codes | A documented link between the original lot, any repack lot and each container | Hold until traceability is resolved |
| Chemistry column contains only limits or typical values | Measured results for the supplied lot and the required test scope | Do not treat a generic data sheet as lot acceptance |
| PSD method differs from the purchase requirement | Results using the agreed method, or an approved method-comparison plan | Do not transfer acceptance limits between unlike methods |
| A required element or test is missing | The missing test result or a formally approved change to the requirement | Missing evidence is not a passing result |
| A result is outside the agreed limit | A documented nonconformance review and authorized disposition | Keep the lot separate; do not average away a failed result |
| All requested powder evidence is complete | Record the review, container identity and next process gate | Powder release does not release finished parts |

Keep the original report, any corrected revision, the reason for correction, reviewer and disposition together. If retesting is justified, agree the sampling and retest rules before taking another sample; repeated testing until a favorable result appears is not a controlled acceptance plan. The [lot sampling guide](/posts/Alloys/am-metal-powder-lot-sampling-for-psd/) explains how to preserve representative evidence.

For example, a 316L quotation with a nominal PSD and a brochure chemistry table may be sufficient to begin a technical discussion, but it does not demonstrate that the ordered lot meets the purchase specification. Start from [316L product requirements](/products/316l/) and list the missing documents in the [powder RFQ](/rfq/?product=316l).

## Metal powder RFQ specification block

Include this information in the first inquiry:

> Alloy and specification:
>
> Process and machine:
>
> Particle-size distribution and method:
>
> Chemistry / oxygen / controlled-element limits:
>
> Required morphology, density, or flow data:
>
> Virgin / blended / reused condition:
>
> Quantity and packaging:
>
> COA and traceability requirements:
>
> Application and project stage:
>
> Destination and target date:
>
> Change-notification requirement:

If a field is not yet known, state that it is open for supplier recommendation. That is better than copying an unsuitable requirement.

## Use the specification to create comparable quotations

The goal is not the largest possible document package. It is a specification that makes supplier offers technically comparable and proportionate to risk. Start with the [metal powder buying guide](/posts/Alloys/metal-powder-for-3d-printing-guide/), then use the [supplier qualification guide](/posts/Alloys/additive-manufacturing-powder-supplier-guide/) to verify the source against the same acceptance basis.
