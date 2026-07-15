---
title: "Powder Spreadability and Layer Density in LPBF: Buyer Specification Guide"
description: Specify LPBF powder spreadability, layer density, humidity controls, recoater trials, and acceptance evidence without relying on one bulk flow number.
pubDate: 2026-07-16T00:24:00+08:00
category: Knowledge
tags:
  - powder spreadability
  - powder layer density
  - LPBF powder
  - recoating
  - metal powder specification
featured: true
---

LPBF powder spreadability is the ability of a powder and recoating system to create a repeatable layer under defined machine conditions. Powder layer density describes the mass occupying the spread layer volume under a defined measurement method. Neither property is fully represented by Hall flow, angle of repose, apparent density, tap density, or a vendor's generic cohesion index.

The buyer's task is to specify an evidence chain:

1. incoming powder controls that detect lot changes,
2. environmental and handling controls,
3. a repeatable spreading or machine trial,
4. layer and build acceptance criteria tied to the intended process.

This page is for LPBF purchasing and qualification. For the laboratory methods behind Hall, Carney, density, and rheology results, use the [metal powder flowability test guide](/posts/Alloys/metal-powder-flowability-tests-hall-carney-rheology/).

## What buyers should specify at each evidence level

| Evidence level | What to control | Useful output | Main limitation |
| --- | --- | --- | --- |
| Incoming lot | PSD, morphology, chemistry, bulk flow/density, powder condition | Lot consistency against a qualified baseline | Does not reproduce the recoater |
| Environment | Container exposure, conditioning, temperature, humidity, handling time | Test and machine context | A room reading does not measure particle-surface moisture directly |
| Bench spreading | Recoater geometry, speed, gap, layer count, substrate, dosing | Layer coverage, mass, uniformity, or image metrics | May not reproduce the production machine |
| In-machine trial | Machine, recoater, layer thickness, gas, platform condition, parameters | Recoating observations, layer monitoring, coupons | Applies only to the controlled route tested |
| Production control | Locked powder and machine windows plus trend rules | Repeatability and change detection | Requires retained records and disciplined change control |

No row can replace all the others. A buyer can reduce the depth for a development sample, but qualification-sensitive production needs evidence across the chain.

## Spreadability is a powder-machine interaction

NIST's [Powder Spreading Testbed](https://www.nist.gov/publications/powder-spreading-testbed-studying-powder-spreading-process-powder-bed-fusion-machines) work describes why the problem is difficult: spread-layer behavior depends on interactions between particles and on the spreading process. NIST developed a testbed specifically to record spreading and characterize the deposited layer rather than infer all performance from bulk powder properties.

Variables that belong in a spreadability record include:

- powder alloy, lot, production route, PSD, morphology, and reuse state,
- sample and container history,
- recoater type, edge condition, geometry, and material,
- recoater speed, direction, and acceleration behavior,
- nominal layer thickness and any measured effective layer condition,
- powder dose or feed strategy,
- substrate or prior-layer condition,
- platform temperature, gas type, chamber pressure, and humidity context,
- location and direction of layer measurements,
- image, mass, density, or coverage metric and calculation method.

If one of these changes, the result may not belong on the same trend line. A supplier's bench spreadability number can be useful incoming evidence, but it is not automatically transferable to the buyer's production machine.

## Flowability and spreadability are related, not interchangeable

Bulk flow tests can screen for change. They do not impose the same thin-layer geometry or dynamic stress as a recoater.

| Method or metric | What it observes | Appropriate use in LPBF purchasing | Do not claim |
| --- | --- | --- | --- |
| Hall or Carney flow | Gravity discharge through a defined funnel | Routine lot trend when the powder and method are suitable | Direct prediction of layer uniformity |
| Angle of repose | Heap geometry under a defined deposition method | Low-cost comparative screening under locked conditions | Universal pass/fail value for LPBF |
| Rheometer or rotating drum | Dynamic response under instrument settings | Detect differences missed by funnel flow | Transfer between instruments without correlation |
| Apparent density | Loose filling under a named apparatus | Lot comparison and packing context | Actual spread-layer density |
| Tap density | Settled powder after tapping | Comparative settling behavior | Recoated-layer condition |
| Bench spread test | Layer formed with a defined recoater and gap | Process-relevant supplier or receiving comparison | Equivalence to every LPBF machine |
| Powder-bed or layer-density method | Mass per defined spread volume | Quantifies packing under the test setup | Finished-part density |
| Coupon or representative build | Combined powder, machine, and parameter response | Qualification and change confirmation | Suitability for an untested application |

NIST's [AM Powder Metrology Laboratory](https://www.nist.gov/laboratories/tools-instruments/additive-manufacturing-powder-metrology-laboratory) investigates flowability, spreadability, PSD, and powder-layer density separately because the properties contribute different evidence. Treating them as synonyms discards that distinction.

## Powder layer density is not apparent or tap density

Powder layer density is the mass of powder in a known spread-layer volume. The measurement becomes challenging because the layer is thin, can vary by position, and may be disturbed during collection or measurement.

NIST's study on [measurement of powder-bed density in powder bed fusion](https://www.nist.gov/publications/measurement-powder-bed-density-powder-bed-fusion-additive-manufacturing-processes) introduced an in-process method with uncertainty analysis and demonstrated sensitivity to changes across a build platform associated with powder or spreading irregularities.

To make a layer-density result auditable, record:

- how layer volume is defined,
- whether thickness is nominal or measured,
- how mass is collected or inferred,
- number of layers and repeats,
- measurement locations,
- recoater direction,
- uncertainty or repeatability estimate,
- powder and environmental condition,
- whether the value is absolute, normalized, or relative to another density.

Do not calculate a percentage against "material density" without naming the denominator. Skeletal density, theoretical alloy density, apparent density, and tap density are different references. A percentage becomes ambiguous when the reference is omitted.

## PSD, fines, and layer density require a process context

The [LPBF particle-size guide](/posts/Alloys/lpbf-powder-particle-size-guide/) explains why nominal ranges such as 15-45 um and 15-53 um are not universal quality grades. A broad distribution can pack differently from a narrow distribution, while a high fine fraction can increase cohesive behavior and handling sensitivity.

NIST research on [PSD and powder-bed density during spreading](https://www.nist.gov/publications/influence-spreading-metal-powders-different-particle-size-distributions-powder-bed) compared apparent density, flowability, and powder-bed density for commercial powders with different size distributions. The study showed that PSD affected apparent and powder-bed density, but the result was specific to the powders and spreading setup studied.

For purchasing, this supports three rules:

1. lock the PSD measurement method and representative sampling plan,
2. trend fines and oversize against a qualified process baseline,
3. verify spread-layer performance when a PSD change is meaningful to the machine window.

Do not tighten D10, D50, or D90 simply because a layer problem occurred. First separate powder sampling, morphology, moisture exposure, dosing, recoater condition, gas flow, and machine setup. The [laser diffraction versus dynamic image analysis guide](/posts/Alloys/laser-diffraction-vs-dynamic-image-analysis-metal-powder-psd/) can help identify whether the PSD method answers the concern.

## Angle of repose and cohesion index: use as trend metrics

Angle of repose is sensitive to how the heap is formed, the base, drop height, feed rate, image method, vibration, and environment. A rheometer or rotating-drum cohesion output is similarly tied to instrument geometry, conditioning, speed, calculation, and software procedure.

These metrics are useful when:

- the same laboratory and locked procedure test qualification and production lots,
- repeatability is known,
- the metric detects a change that matters to the process,
- warning and investigation rules are established from qualified data.

They are weak purchase controls when a supplier reports only "angle of repose < X" or "cohesion index = Y" with no apparatus or procedure. There is no defensible reason to import a threshold from an unrelated powder family, particle-size cut, instrument, or recoater.

The current ASTM work item [WK98365](https://www.astm.org/membership-participation/technical-committees/workitems/workitem-wk98365) proposes test methods for metal-powder flow properties using a revolution powder analyzer. Its status as a work item is itself a useful warning: named dynamic metrics should not be presented as universally standardized unless the exact published method and edition actually exist at the time of purchase.

## Humidity and powder exposure belong in the record

Humidity can influence powder through adsorbed moisture, capillary interactions, oxide behavior, agglomeration, contamination, and electrostatic effects. Sensitivity varies by alloy, particle size, surface condition, exposure time, storage, and test environment.

NIST IR 8538, [In-process monitoring and nondestructive evaluation for metal AM](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8538.pdf), notes that humid exposure can degrade metal powder properties and discusses controlled storage, particularly for reactive or moisture-sensitive feedstocks. It also cautions that storage and handling effects on LPBF are not fully captured by one general rule.

A buyer should therefore specify controls, not a universal humidity slogan:

- sealed container and packaging condition on receipt,
- allowed storage atmosphere and container type,
- time and conditions after opening,
- permitted drying or conditioning procedure,
- room or chamber temperature and relative humidity during comparative tests,
- transfer method into the machine,
- hold and investigation criteria after abnormal exposure,
- resampling and retest procedure.

Ambient relative humidity is context, not a direct measurement of powder moisture. If moisture content is a critical acceptance property, define a validated measurement method rather than assuming a room sensor is sufficient.

## A practical LPBF spreadability trial

The trial should reproduce the intended recoating stress closely enough to answer the purchasing question. It can be a controlled bench test for supplier screening or an in-machine trial for qualification.

### Step 1: define the comparison

Choose a qualified reference lot, retained sample, or current production baseline. State whether the trial is evaluating a new supplier, lot change, reuse state, PSD change, packaging incident, or method transfer.

### Step 2: control powder preparation

Use the agreed sampling and splitting plan. Record sieving, blending, drying, conditioning, and exposure. Do not test a hand-selected scoop and call it representative of the lot.

### Step 3: lock spreading inputs

Record the recoater, edge condition, speed, direction, layer thickness, powder dose, substrate, gas, temperature, and environmental context. Use the same settings for reference and candidate powder.

### Step 4: measure the layer

Select metrics before seeing the result. Depending on available equipment, these may include:

- mass per defined layer area and thickness,
- layer-density repeatability,
- uncovered area or streak count from a controlled image method,
- spatial variation across the spreading direction,
- recoater force or disturbance indicators,
- repeat-to-repeat and location-to-location variation.

Define image thresholding, lighting, field of view, sampling locations, and calculation rules. A visual statement such as "looks smooth" is useful as an observation but weak as the only acceptance record.

### Step 5: run a controlled build when risk requires it

Use representative coupons or geometry and the intended machine/parameter route. Record layer-monitoring events, build interruptions, coupon density or defects, chemistry where relevant, and application-specific tests. Powder-layer evidence does not replace finished-part qualification.

### Step 6: set the disposition rule

Decide in advance whether results lead to acceptance, conditional process trial, investigation, supplier corrective action, or rejection. Repeated testing until one layer looks acceptable is not a controlled rule.

## Acceptance matrix for common situations

| Situation | Incoming data | Spread or machine evidence | Disposition |
| --- | --- | --- | --- |
| Repeat order, unchanged qualified route | Within locked lot trends | Routine process trend remains stable | Release under existing plan |
| Bulk flow shifts but spread trial remains stable | Confirm sampling, method, and environment | Compare with reference and process history | Investigate before changing limits |
| Bulk tests pass but streaking or bare areas appear | Audit PSD, morphology, exposure, and lot identity | Check dosing, recoater, gas, substrate, and spatial pattern | Hold until powder versus machine cause is separated |
| Supplier changes atomization or PSD route | New characterization package | Controlled correlation and build evidence | Treat as a change, not a normal lot |
| Powder experiences abnormal humid exposure | Resample under defined conditioning rule | Repeat spread trial if risk justifies it | Do not release from room humidity alone |
| Reused powder enters production | Track genealogy, blend, PSD, chemistry, and exposure | Verify spreading and build trend by reuse policy | Accept only within a qualified reuse plan |

This matrix avoids the two common extremes: rejecting material from one sensitive indicator without investigation, or accepting it because a generic COA says "good flow."

## What belongs on the COA and what belongs in qualification

A routine COA can reasonably carry lot-specific results that the supplier can reproduce, such as chemistry, PSD, and named bulk flow or density tests. Machine-specific spreadability often belongs in a supplier qualification report, incoming validation plan, or process-control record rather than on every COA.

| Document | Appropriate spreadability content | Update trigger |
| --- | --- | --- |
| Powder specification | Required methods, controls, limits, fallback, and change notification | Product or process requirement changes |
| Lot COA | Locked lot-specific bulk results and powder identity | Every supplied lot |
| Supplier qualification report | Bench spread method, correlation, reference lots, and capability | New source, route, or major method change |
| Machine qualification record | Recoater, layer, environment, parameters, coupons, and acceptance | New machine, material, or qualified window change |
| Production control plan | Routine incoming and in-process trends, warning rules, and reactions | Continuous improvement under change control |

[ISO/ASTM 52907:2019](https://www.iso.org/standard/73565.html), confirmed current in 2025, covers AM powder documentation, traceability, sampling, characteristic densities, morphology, flowability, packaging, storage, and used powder. Use it as a framework, then add the machine-specific evidence required by the actual LPBF route.

## Spreadability and layer-density RFQ block

> Alloy, powder production route, and nominal PSD:
>
> LPBF machine family and parameter-set status:
>
> Recoater type, nominal layer thickness, and relevant machine constraints:
>
> Virgin, conditioned, blended, recovered, or reused powder condition:
>
> Lot definition, sampling, splitting, and retained-sample requirement:
>
> PSD, morphology, chemistry, bulk flow, and density methods:
>
> Required supplier bench-spread method and full settings, if applicable:
>
> Layer-density definition, denominator, locations, repeats, and uncertainty:
>
> Layer image or coverage metric and calculation procedure:
>
> Packaging, storage, open-container time, temperature, and humidity controls:
>
> Reference lot and method-correlation requirement:
>
> Machine trial, coupon, and application-specific acceptance evidence:
>
> Warning, retest, investigation, rejection, and change-notification rules:
>
> Quantity, pack size, destination, and requested delivery date:

For an actionable powder quotation, also provide the application, build stage, and any chemistry or interstitial limits. A supplier cannot choose meaningful powder evidence from an alloy name and nominal PSD alone.

## Application limits

This evidence chain is specific to powder-bed spreading. DED powder is conveyed through a feeder and nozzle, so mass-flow stability and catchment behavior become more relevant than layer density. Binder jet and MIM require packing, binder interaction, debinding, and sintering evidence. EBM adds its own powder size, charging, temperature, and machine constraints.

Even within LPBF, a passing spreadability trial does not certify the powder, machine, parameter set, or finished part for aerospace, medical, pressure, nuclear, or other regulated service. It shows that the controlled powder and spreading route met the defined trial criteria. Final acceptance must follow the governing material, process, part, and quality requirements.

The strongest buyer specification therefore uses bulk tests to detect lot changes, a spread test to evaluate the layer-forming behavior, and build evidence to qualify the actual manufacturing outcome. Each method answers one decision; none is asked to prove more than it measures.
