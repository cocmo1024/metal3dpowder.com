---
title: "Metal Powder Flowability Tests for AM: Hall, Carney, and Rheology"
description: Compare Hall flow, Carney flow, apparent density, tap density, and powder rheology for AM powder COAs, acceptance plans, and LPBF trials.
pubDate: 2026-07-16T00:18:00+08:00
category: Knowledge
tags:
  - metal powder
  - powder specification
  - powder flowability
  - additive manufacturing
featured: true
---

Metal powder flowability is not one intrinsic number. A Hall funnel, Carney funnel, rotating or blade rheometer, and density test impose different stresses and report different behaviors. Results are useful only when the method, powder condition, preparation, and purchasing decision are defined together.

For an additive manufacturing buyer, the practical question is not "Does this powder have good flow?" It is:

> Which test can distinguish an acceptable lot from a changed lot for this process, and what additional evidence is needed before the powder enters a machine?

A Hall result can be an efficient lot-trending control for free-flowing powder. A Carney test can produce a method-specific result when the powder will not pass the Hall funnel. Rheology can probe behavior under controlled dynamic or consolidated conditions. None of them, alone, proves that a thin LPBF layer will spread uniformly.

## Choose the test from the decision

| Decision | Primary evidence | What it can support | What it cannot prove |
| --- | --- | --- | --- |
| Does a free-flowing lot match a qualified baseline? | Hall flow under a locked method | Fast lot-to-lot comparison | LPBF layer uniformity or part quality |
| The powder will not pass Hall; can funnel flow still be trended? | Carney flow, if allowed by the specification | Comparison through a larger test orifice | Equivalence to a Hall value |
| How does the loose powder fill a known volume? | Apparent density with the named apparatus | Packing comparison under that filling condition | Tap density or in-machine layer density |
| How does the powder settle under repeated tapping? | Tap density under a locked procedure | Settled bulk-density comparison | Recoater behavior |
| Does flow change under dynamic, aerated, or consolidated conditions? | Defined powder-rheology procedure | Multi-condition comparative evidence | A universal flowability grade |
| Will it form a consistent LPBF layer? | Powder spreading and layer evidence plus a controlled machine trial | Process-relevant qualification | Transfer to every recoater, layer thickness, and machine |

The [metal powder specification and COA guide](/posts/Alloys/metal-powder-specification-guide-psd-oxygen-flowability/) shows where these values sit beside chemistry, PSD, morphology, contamination, and traceability. This page focuses only on selecting and controlling the flow-related methods.

## Why flowability depends on the method

Powder motion changes with the stress state. Gravity-driven discharge through an orifice is different from a blade moving through a conditioned bed, a rotating drum avalanche, vibration during tapping, pneumatic delivery, or a recoater pushing a thin layer.

The result can also move with:

- particle-size distribution and the fine fraction,
- particle shape, satellites, agglomerates, and surface condition,
- moisture and environmental exposure,
- electrostatic behavior,
- sample segregation and preparation,
- powder reuse, blending, or conditioning,
- test apparatus, operating settings, and operator procedure.

NIST's multi-laboratory study on [powder rheology and permeability measurement robustness](https://www.nist.gov/publications/assessing-robustness-powder-rheology-and-permeability-measurements) states the central limitation directly: flowability depends on measurement conditions, and setup, calibration, or handling can contribute to intra- and inter-laboratory variation. A purchasing limit therefore belongs to a controlled method, not to the generic word "flowability."

## Hall flow: useful when the powder flows unaided

[ASTM B213-25](https://store.astm.org/standards/b213) covers flow rate through the Hall flowmeter funnel and is suitable only for powders that flow unaided through the apparatus. [ISO 4490:2018](https://www.iso.org/standard/69218.html), confirmed in 2023 and currently marked for future revision, has the same essential scope boundary: the method applies only to powders that flow freely through the specified orifice.

A Hall result is most useful when:

- the product normally flows through the funnel without assistance,
- supplier and buyer use the same standard edition and procedure,
- sample conditioning and environmental controls are defined,
- the result is trended against qualified lots of the same product,
- the purchase specification defines what happens after no-flow or an out-of-limit result.

The most important acceptance rule is often the simplest: if the powder does not flow unaided when the selected method requires unaided flow, do not create a number by tapping, poking, shaking, or changing preparation outside the procedure. Record the method-specific no-flow outcome and follow the agreed investigation path.

No-flow is not automatically proof that an AM powder is unusable. Fine LPBF powders may fail a gravity-funnel method yet still run in a qualified machine route. It does mean the Hall method cannot supply a valid numerical release result for that sample under those conditions.

## Carney flow: a different method, not a corrected Hall result

[ASTM B964-25](https://store.astm.org/standards/b964) covers metal powders that do not readily flow through the Hall funnel. It uses the Carney funnel and explicitly positions Hall as the preferred funnel method when Hall flow is possible.

Use Carney when:

- the powder cannot produce a valid Hall result,
- the specification permits the Carney method,
- the product baseline and acceptance limit were established with Carney,
- all compared lots are reported on the same method basis.

Do not compare a Carney time directly with a Hall limit. The apparatus and flow condition differ. A COA should name the method and standard, not report a bare entry such as "Flow: 18 s" that leaves the funnel, sample basis, and procedure unknown.

A sensible purchasing rule is one of these:

1. Hall is the release method; no-flow triggers investigation and no substitution is allowed.
2. Hall is attempted first; Carney is the defined fallback and has its own qualified range.
3. Carney is the release method for a product known not to pass Hall.
4. Funnel flow is informational only, while another locked method and process trial control acceptance.

Writing the rule before testing prevents a laboratory from selecting whichever result makes a lot appear acceptable.

## Apparent density: name the filling method

Apparent density describes the mass occupying a defined volume after a specified loose filling operation. It is not skeletal density, tap density, or powder-bed density.

[ASTM B212-25](https://store.astm.org/standards/b212) covers apparent density of free-flowing metal powder using the Hall funnel. It notes that the relationship between the measured value and powder performance varies with the application, and that moisture and temperature can alter powder characteristics. For material that does not pass the Hall funnel, a specification may select a Carney-funnel or Scott-volumeter method rather than relabeling another density result.

[ISO 3923-1:2018](https://www.iso.org/standard/69219.html) covers the funnel method under standardized conditions. Its scope distinguishes powder that flows through the smaller funnel opening, powder that can flow through a larger opening, and powder requiring a different method.

An apparent-density COA line should include:

- the test method and edition,
- the apparatus or filling route,
- the reported unit,
- the powder condition and any permitted conditioning,
- the result and qualified acceptance range,
- whether the result is release data or informational trend data.

Apparent density can help detect a changed lot, but the buyer should not convert it into an assumed LPBF layer density. The filling mechanics are different.

## Tap density: a settled condition

[ASTM B527-24](https://store.astm.org/standards/b527) and [ISO 3953:2025](https://www.iso.org/standard/88570.html) address density after powder is tapped into a container under specified conditions. ASTM cautions that correlation between tap density and performance in use varies by application.

Tap density can be useful for:

- trending how a product settles under a repeatable procedure,
- comparing a current lot with retained qualified material,
- supporting packing or handling studies,
- calculating method-specific derived indicators when the formula and density methods are fixed.

It is not the density of an untouched powder bed and not the density of a recoated layer. The tapping procedure intentionally consolidates the powder. If a supplier changes the tap count, endpoint rule, cylinder, sample preparation, or apparatus, the historical trend may no longer be comparable.

## Powder rheology: more conditions, more method detail

Powder rheometers can evaluate behavior under conditions such as blade motion, controlled consolidation, aeration, or permeability testing. Depending on the instrument and procedure, a report may include energy, torque, pressure-drop, cohesion, or other proprietary and method-specific outputs.

That additional information is useful when a single gravity-funnel result cannot distinguish powders that behave differently in handling or spreading. It also creates more method variables to control.

For a rheology requirement, lock:

- instrument and measurement geometry,
- conditioning cycle and sample volume,
- blade, drum, or cell settings,
- speed and direction,
- consolidation or aeration state,
- repeat count and calculation rule,
- selected output metrics and units,
- laboratory control-material checks,
- non-reportable and retest rules.

Do not purchase against a generic "cohesion index" or "basic flow energy" limit copied from another instrument, alloy, or procedure. NIST's robustness work found meaningful between-laboratory variation even when multiple laboratories used a powder rheometer. A supplier-to-buyer transfer needs shared samples and a documented correlation exercise.

## Why one flow result cannot predict LPBF recoating

NIST's [AM Powder Metrology Laboratory](https://www.nist.gov/laboratories/tools-instruments/additive-manufacturing-powder-metrology-laboratory) investigates flowability, spreadability, PSD, and powder-layer density as related but separate factors. The separation matters because a recoating event adds machine variables that a bulk flow test does not reproduce:

- recoater type and condition,
- recoater speed and direction,
- nominal layer thickness,
- build-platform temperature,
- gas flow and pressure,
- powder dosing and feed behavior,
- electrostatic and environmental conditions,
- position across the build plate.

The dedicated [LPBF powder spreadability and layer-density guide](/posts/Alloys/lpbf-powder-spreadability-and-layer-density/) explains how to move from incoming-powder indicators to a controlled spreading trial. The [LPBF particle-size guide](/posts/Alloys/lpbf-powder-particle-size-guide/) covers the PSD side of the same decision.

## Build an acceptance plan in layers

### 1. Define the product and lot

State the alloy, production route, nominal PSD, powder condition, lot definition, sampling procedure, packaging, and intended AM process. A flow result from an unrepresentative sample is not lot evidence; use the [metal powder lot-sampling guide](/posts/Alloys/am-metal-powder-lot-sampling-for-psd/) to define representative sampling and reduction.

### 2. Choose a routine release method

Select the lowest-complexity method that can reliably distinguish acceptable and changed material for the established product. For a free-flowing powder this may be Hall flow plus apparent density. For another powder it may require Carney or a locked rheology metric.

### 3. Establish limits from qualification data

Do not invent a universal limit from a catalog or a different alloy. Compare multiple qualified lots, method repeatability, retained material, and process outcomes. Define warning, investigation, and rejection rules that reflect the measurement capability.

### 4. Add process-relevant evidence

For LPBF, use a spreading or machine trial. For DED, verify stable feeder mass delivery under the actual carrier-gas and nozzle route. For binder jet or MIM, connect powder packing and flow to filling, binder interaction, debinding, and sintering behavior.

### 5. Control method changes

Require notification before changing the standard edition, laboratory, apparatus, preparation, conditioning, or calculation. Use paired retained samples to bridge old and new procedures.

## Worked COA review without invented limits

Assume a buyer has already qualified a gas-atomized 316L LPBF product. The purchase specification names Hall flow, Hall apparent density, a locked PSD method, and a machine spreading trial for initial supplier approval.

| COA or receiving observation | Review action | Acceptance logic |
| --- | --- | --- |
| Hall value reported with standard, result, and matching lot | Compare with qualified method range | Accept this field only if method and range match |
| "Flow: good" with no method or result | Request corrected lot-specific report | Not an auditable acceptance result |
| Hall no-flow but a Carney number is substituted | Check whether fallback was pre-authorized | Do not compare with the Hall range |
| Apparent density reported with no apparatus | Confirm Hall, Carney, Scott, or other method | Do not combine unlike density trends |
| Rheology result from a changed laboratory | Run shared retained samples and review correlation | Hold trend comparison until transfer is justified |
| All incoming values pass but the powder streaks during recoating | Investigate powder, environment, dosing, and machine variables | Bulk tests do not override failed process evidence |

This example deliberately contains no generic numeric limits. The values must come from the buyer's qualified powder-process combination and the demonstrated capability of the selected methods.

## Common specification failures

- **Method omitted:** A value without a standard, apparatus, and procedure cannot be compared reliably.
- **No-flow converted into a number:** Uncontrolled assistance invalidates a method that requires unaided flow.
- **Hall and Carney mixed:** Results from different funnels are placed in one trend chart or acceptance range.
- **Density terms swapped:** Apparent, tap, skeletal, and layer density are treated as equivalents.
- **Environmental condition ignored:** Supplier and receiving results differ because powder exposure or test conditions changed.
- **Rheology metric transferred by name:** Identically named outputs from different procedures are assumed equivalent.
- **COA accepted as process proof:** A passing bulk result is allowed to overrule evidence of poor feeding or spreading.
- **Retest rule missing:** Repeated tests continue until one result passes, without a predefined investigation plan.

## Flow-test fields for a metal powder RFQ

> Alloy, powder production route, and nominal PSD:
>
> AM process, machine family, and powder delivery or recoating route:
>
> Virgin, blended, conditioned, recovered, or reused condition:
>
> Lot definition and sampling procedure:
>
> Hall flow method and edition, or reason another method is selected:
>
> Carney fallback rule and separate acceptance basis, if applicable:
>
> Apparent-density apparatus, method, unit, and acceptance basis:
>
> Tap-density method and endpoint, if required:
>
> Rheometer, conditioning, settings, metrics, and units, if required:
>
> Environmental conditioning and test-temperature controls:
>
> Non-flow, retest, investigation, and rejection rules:
>
> COA fields, raw-data requirement, retained sample, and change notification:
>
> Process trial and application-specific acceptance evidence:

[ISO/ASTM 52907:2019](https://www.iso.org/standard/73565.html), confirmed current in 2025, provides the broader framework for AM powder documentation, sampling, characteristic densities, morphology, flowability, packaging, storage, and used powder. It does not create universal flow limits for every machine or alloy.

For a powder quotation, send the supplier the actual process, PSD, quantity, test-method basis, packaging, destination, and application. The most defensible flowability requirement is not the largest data package. It is the smallest controlled set of measurements that detects relevant lot changes and is backed by process evidence where the application requires it.
