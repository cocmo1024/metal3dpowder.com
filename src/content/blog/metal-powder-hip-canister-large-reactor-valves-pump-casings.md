---
title: HIP Canister Requirements for Reactor Valves and Pump Casings
description: Specify powder filling, HIP canister design, evacuation, sealing, inspection, genealogy, and RFQ records for large nuclear valve and pump parts.
pubDate: 2026-07-19T00:20:00+08:00
category: Knowledge
tags:
  - HIP canister
  - PM-HIP powder
  - reactor valve
  - pump casing
  - nuclear manufacturing
featured: true
---

A PM-HIP canister is not disposable packaging. It is a process tool and temporary pressure boundary whose geometry, welds, fill path, evacuation, seal, surface condition, and removal plan can affect the consolidated valve body or pump casing. The powder requirement and canister requirement therefore need one controlled interface.

This guide answers a procurement question: what must the buyer, powder supplier, canister designer, filler, HIP operator, machinist, and nuclear design authority align before a large canister is filled? It does not provide a canister design formula or approve a component for service.

Oak Ridge National Laboratory's May 2026 demonstration is a useful current signal. ORNL used additive manufacturing to make custom PM-HIP canisters, then filled, vacuum-sealed, and hot isostatically pressed them for large-component development. The result expands the canister-tooling options; it does not remove the need to qualify the canister, filling procedure, HIP route, material, and final component.

For the upstream decision between 316L, IN625, PM-HIP, and conventional manufacture, first use the [nuclear PM-HIP material and route guide](/posts/Alloys/316l-in625-powder-pm-hip-nuclear-pressure-components/). This page stays on the powder-to-canister interface.

## Assign interface ownership before design release

PM-HIP failures often sit between suppliers. A powder producer may certify chemistry but not fill behavior. A canister supplier may own weld quality but not powder cleanliness. A HIP operator may run the cycle but not approve nuclear material equivalency. The purchase plan should name one responsible organization for each interface.

| Interface | Responsible decision | Minimum handoff evidence |
| --- | --- | --- |
| Nuclear design to PM-HIP engineering | Component classification, material basis, pressure/safety duties, acceptance route | Approved design inputs, code/owner requirements, critical zones, and hold points |
| Powder supplier to filler | Lot identity, chemistry, PSD, contamination state, package and handling rules | COA, container list, represented population, retained sample, and release status |
| Canister designer to fabricator | Geometry, material, welds, fill ports, cores, allowances, and inspection | Released drawings, procedure references, material certificates, weld/NDE records, and deviations |
| Filler to HIP operator | Powder mass, fill sequence, evacuation, sealing, leak status, and canister identity | Completed traveler, measured records, seal authorization, and as-loaded configuration |
| HIP operator to post-processor | Cycle, load position, instrumentation, deviations, and release | Traceable cycle chart, calibration status, load map, nonconformance review, and release record |
| Post-processor to design authority | Can removal, heat treatment, machining, dimensions, material and NDE results | Full genealogy, test map, results, dispositions, and final data package |

If one interface has no owner, the component does not have a complete manufacturing route.

## Use hold points across the canister lifecycle

ASTM A988/A988M-26 publicly describes an industrial stainless PM-HIP sequence based on prealloyed powder placed into a can, evacuation and sealing, consolidation, can removal, heat treatment, and structural-integrity testing. A nuclear project may require additional or different controls, but the sequence is a useful backbone for hold points.

| Hold point | Questions that must be closed | Records to retain |
| --- | --- | --- |
| Before powder order | Is alloy, lot size, PSD method, chemistry, interstitials, packaging, and verification agreed? | Purchase specification, approved supplier route, inspection plan, and method editions |
| Before canister fabrication | Is final geometry, collapse behavior, machining stock, can material, weld class, fill/evacuation route, and removal method reviewed? | Design review, drawing, analysis or trial basis, material list, and procedure plan |
| Before filling | Are canister cleanliness, dimensions, weld/NDE status, powder release, equipment cleanliness, and environment acceptable? | Incoming inspection, cleaning release, powder COA, container IDs, and equipment status |
| During filling | Is powder identity preserved and is the qualified sequence followed without bridging or segregation? | Container-by-container mass, sequence, fill method, observations, interruptions, and reconciliation |
| Before final seal | Is evacuation complete under the approved procedure and has leak integrity been demonstrated? | Time-temperature-vacuum record, leak test, instrumentation IDs, closure record, and authorization |
| Before HIP | Does the as-loaded canister match the approved load configuration and cycle? | Canister ID, mass, dimensions, load position, cycle revision, risk review, and deviation status |
| After HIP | Did the actual cycle meet approved limits and is the canister safe to release for processing? | Cycle chart, alarms, calibration, load map, visual results, and release decision |
| Before final acceptance | Has can removal, near-surface disposition, heat treatment, machining, NDE, testing, and genealogy been completed? | Post-process traveler, specimen map, inspection results, nonconformances, and final dossier |

Do not let the final COA become the only record. The component genealogy begins before the canister is made.

## Canister design inputs for valves and pump casings

A large valve body or pump casing may contain branches, thick-to-thin transitions, internal cores, bore stock, flanges, and inspection-sensitive regions. The canister design package should identify:

- target consolidated geometry and the surfaces that will be machined,
- predicted canister movement and the validated basis for dimensional compensation,
- canister material, thickness logic, seams, welds, closures, and structural supports,
- fill tubes, vents, evacuation paths, dead zones, and powder-access constraints,
- internal cores or inserts, their support, movement risk, compatibility, and removal route,
- local powder-column height, narrow passages, branches, and regions susceptible to bridging,
- tooling interfaces, lifting points, HIP load orientation, and furnace-clearance constraints,
- sacrificial material and machining stock for canister removal and reaction-affected surfaces,
- dimensional and NDE access before filling, after sealing, after HIP, and after machining,
- repair, rework, deviation, and change-approval rules.

The final valve or casing should not inherit an uninspectable canister feature without a disposition plan. A model can guide compensation, but a model is not self-validating. Large first-of-a-kind geometry normally needs representative trials, witness measurements, or destructive confirmation defined by the responsible program.

## Powder fill consistency is a measured process

EPRI's public PM-HIP process description includes component design, metal-powder manufacture, loading into a can, degassing and sealing, and consolidation under heat and pressure. In procurement, "fill the can" needs to become a repeatable procedure.

Define:

- released powder lots and whether mixing or blending is permitted,
- container-opening sequence and controls against wrong-lot addition,
- transfer equipment, contact materials, cleaning status, and environmental controls,
- fill sequence, rate, vibration, tapping, rotation, or settling method where qualified,
- powder mass by source container and total reconciled mass,
- method used to monitor fill progress and detect bridging or isolated voids,
- treatment of interruptions, equipment stoppage, spills, recovered powder, and exposed powder,
- final fill state, head space, fill-tube condition, and acceptance authority,
- samples taken before, during, or after filling and the population each sample represents.

Do not specify one generic fill-density number without a procedure and geometry basis. Apparent density, tap density, and achieved canister packing state are different results. A small laboratory funnel value does not prove uniform loading through a large branched valve-body canister.

The [powder flowability method guide](/posts/Alloys/metal-powder-flowability-tests-hall-carney-rheology/) explains why Hall, Carney, density, and dynamic results are method-specific. The [powder lot-sampling guide](/posts/Alloys/am-metal-powder-lot-sampling-for-psd/) explains why a top sample from one container cannot automatically represent the full loaded component.

## Evacuation, degassing, and sealing controls

Trapped gas, moisture, process residue, or a leaking closure can undermine the intended consolidation route. The project should define an approved sequence rather than asking only for a final vacuum value.

Record:

- evacuation equipment, gauges, calibration, connection, and leak-test method,
- evacuation and any controlled heating or degassing sequence,
- time, temperature, pressure or vacuum trend, hold criteria, and interruption response,
- canister temperature measurement locations and limits established by the procedure,
- criteria for stable evacuation and authorization to close or pinch off,
- final closure method, operator or procedure qualification, and inspection,
- post-seal leak check, acceptance criteria, instrument sensitivity, and disposition,
- elapsed time and handling conditions between filling, sealing, and HIP,
- protection of the sealed canister during storage, transfer, and loading.

No universal value in this article can replace a qualified procedure. Canister volume, powder, absorbed species, geometry, equipment, and material route all affect what the responsible engineer must approve.

## Control powder-canister compatibility

The canister is expected to be removed or machined away, but that does not make material interaction irrelevant. The purchase package should address:

- chemical interaction and diffusion between canister and component alloy,
- carbon, oxygen, nitrogen, sulfur, or other pickup risks from materials and processing,
- approved barrier, coating, release layer, or insert if the process uses one,
- minimum sacrificial allowance and verified removal depth,
- weld filler, repair material, cleaning media, and temporary tooling compatibility,
- internal core removal and proof that no foreign material remains,
- near-surface chemistry, microstructure, hardness, and inspection where required,
- final surface designation for machined, as-consolidated, or retained interfaces.

For 316L-family parts, ASTM A988/A988M-26 is a relevant industrial reference to review with the governing project specification. For IN625-family parts, ASTM B834-22 covers pressure-consolidated powder nickel-alloy flanges, fittings, valves, and parts for general corrosion or heat-resisting service. Neither document by itself qualifies a nuclear reactor component.

## Powder and canister release matrix

| Release item | Powder supplier evidence | Canister/fill evidence | Finished-component linkage |
| --- | --- | --- | --- |
| Identity | Alloy, heat/melt, lot, container IDs, quantity | Canister unique ID and powder container reconciliation | Marking and genealogy to specimens and final part |
| Chemistry | Required elements, interstitials, method, result, conformance | Contamination controls and any compatibility materials | Product analysis or near-surface checks where required |
| Particle population | PSD method/result, morphology, density or flow results where specified | Fill sequence, blending permission, observed behavior, retained samples | Link any fill-region samples or witnesses to final locations |
| Cleanliness | Packaging, atmosphere, storage, opening, handling restrictions | Can cleaning, transfer equipment, environment, spill and interruption records | Inclusion, contamination, surface, and material dispositions |
| Sealed state | Not normally owned by powder supplier | Evacuation trend, seal record, leak test, mass, dimensions, storage | HIP load identity, cycle, and post-HIP release |
| Change control | Atomization site, method, raw material, process, and lot changes | Can material, geometry, weld, fill, evacuation, seal, and HIP changes | Engineering evaluation and requalification decision |

This matrix prevents a common procurement error: a powder COA can be complete while the loaded canister remains unqualified.

## Inspection and validation plan

| Process zone | Useful evidence | Boundary to state explicitly |
| --- | --- | --- |
| Empty canister | Material certificates, dimensions, visual inspection, weld NDE, cleanliness, leak integrity | Which seams, welds, cores, and ports are covered and who accepts them |
| Filled canister | Mass reconciliation, fill observations, nonintrusive checks if qualified, evacuation trend, seal inspection, leak test | What the method can detect in the actual geometry and what remains unverified |
| Post-HIP blank | Cycle review, dimensions, visual condition, soundness checks, witness locations | Whether canister remains attached and which regions are accessible |
| Can-removed component | Removal depth, surface condition, chemistry or metallography where required, dimensional map | How reaction-affected material and inaccessible internal surfaces are dispositioned |
| Machined valve or casing | Qualified NDE, critical dimensions, density/material results, pressure or leak tests | Flaw types, zones, reference standards, method capability, acceptance criteria, and authority |
| Qualification article | Destructive sectioning, specimens, location map, microstructure and required properties | Representativeness to production size, geometry, powder lot, canister, cycle, and post-processing |

"Ultrasonic tested" or "fully dense" is not an acceptance plan. State the method, coverage, geometry limitations, reference standard, detection target, reporting threshold, acceptance limit, and disposition process.

## Failure modes and direct controls

| Failure mode | Likely interface cause | Direct control |
| --- | --- | --- |
| Powder bridge or isolated void | Narrow branch, rapid filling, poor venting, or unqualified settling | Geometry review, qualified fill sequence, observations, mass balance, and representative trial |
| Segregated powder population | Handling, vibration, blending, long transfer path, or particle-size spread | Lot and blend rules, controlled transfer, sampling rationale, and fill procedure validation |
| Trapped gas or moisture | Incomplete evacuation, absorbed contamination, interruption, or weak seal | Controlled degassing, trend record, leak test, seal inspection, and hold-point approval |
| Canister weld failure | Design, fabrication, repair, inspection, or handling defect | Qualified procedures/personnel, weld map, NDE, leak testing, protection, and traceability |
| Dimensional miss | Inadequate collapse model, can movement, core movement, or uneven fill | Validated compensation, supports, trials, machining stock, and post-HIP dimensional map |
| Surface chemistry or reaction layer | Incompatible can material, barrier, cleaning, or removal | Compatibility review, approved materials, sacrificial allowance, removal proof, and near-surface checks |
| Unusable qualification data | Specimens or tests cannot be linked to production conditions | Location map and genealogy across powder, canister, load, cycle, heat treatment, and component |
| Uncontrolled supplier change | New powder site, can material, weld, fill method, HIP equipment, or cycle | Pre-agreed notification triggers, engineering review, and requalification rules |

The largest hidden cost is not powder price. It is discovering after HIP that the component cannot be inspected, linked to valid material evidence, or accepted under the intended code path.

## Conventional versus additively manufactured canisters

ORNL reports that conventional canister manufacture can require forming, machining, and welding, while its additive route can create custom geometry with fewer manufacturing steps. That is a tooling decision, not automatic approval of AM canisters.

| Canister route | Favor it when | Qualification burden to price |
| --- | --- | --- |
| Conventional formed/machined/welded canister | Geometry is accessible, procedures are established, and weld/NDE access is strong | Forming accuracy, seam count, distortion, weld inspection, and schedule |
| Additively manufactured canister | Complex geometry or integrated tooling can remove operations and improve near-net control | AM material, build variability, surface, leak integrity, distortion, joining, inspection, and code/owner acceptance |
| Hybrid canister | Standard sections can be retained while local complex features create value | Interface welds, material compatibility, tolerance stack, and split ownership |

Select the canister route through total process risk and cost. An AM canister that reduces welding but adds an unqualified material or uninspectable surface can move risk rather than remove it.

## HIP canister and powder RFQ block

> Program, component, drawing revision, development stage, quantity, final material, and delivery location:
>
> Component classification, pressure/safety duty, governing code/standard and edition, owner specification, and acceptance authority:
>
> Valve or pump geometry: envelope, branches, bores, wall transitions, cores, flanges, critical zones, and machining stock:
>
> Powder alloy, manufacturing route, lot size, PSD and method, chemistry/interstitial limits, morphology, density/flow methods, packaging, and retained sample:
>
> Permitted powder lots, blending, container sequence, transfer equipment, environment, fill method, interruptions, and mass reconciliation:
>
> Canister design owner, material, fabrication route, weld map, fill/vent ports, internal tooling, compatibility, sacrificial allowance, and removal method:
>
> Empty-canister dimensions, cleaning, weld NDE, leak test, inspection records, and release hold point:
>
> Evacuation/degassing procedure, instrumentation, trend records, seal method, leak check, storage, and transfer controls:
>
> HIP equipment, load orientation, cycle revision, monitoring, calibration, deviations, and required record package:
>
> Post-HIP heat treatment, can removal, machining, surface treatment, cleaning, and marking:
>
> Qualification specimens, location map, destructive validation, material tests, NDE zones/capability, pressure/leak tests, and acceptance criteria:
>
> Genealogy, certificate fields, travelers, nonconformance, change notification, retained records, and data-delivery format:
>
> Requested scope: powder only, powder plus filling, sealed canister, consolidated blank, machined component, or qualification package:

Use the [powder RFQ contact page](/contact/) to send the non-confidential version. State which organization owns canister design and nuclear acceptance; a powder supplier should not infer either from a part name.

## Application limits

This guide does not specify canister wall thickness, weld design, evacuation value, HIP temperature, pressure, duration, shrinkage compensation, inspection acceptance, or nuclear code eligibility. Those inputs are component-, alloy-, geometry-, equipment-, and program-specific.

It also does not treat an additively manufactured canister as automatically superior. The defensible route is the one with controlled powder identity, repeatable filling, verified evacuation and sealing, compatible materials, traceable HIP records, removable tooling, inspectable geometry, and an accepted qualification path.

Continue through [PM-HIP Powder](/processes/pm-hip/) for the process cluster, the [powder specification and COA guide](/posts/Alloys/metal-powder-specification-guide-psd-oxygen-flowability/) for feedstock fields, [Stainless Steel Powder](/materials/stainless-steel-powder/) for 316L, or [Nickel Alloy Powder](/materials/nickel-alloy-powder/) for IN625.

### Primary sources

- [ORNL: Advanced manufacturing enables PM-HIP of large, critical parts](https://www.ornl.gov/news/advanced-manufacturing-enables-pm-hip-large-critical-parts)
- [US NRC: Advanced Manufacturing Technologies](https://www.nrc.gov/reactors/power/amts)
- [EPRI: Advanced Manufacturing and Materials Qualification for Nuclear Reactors](https://ant.epri.com/research/advanced-manufacturing-materials-qualification)
- [ASTM A988/A988M-26: Hot-isostatically pressed stainless steel pressure-system parts](https://store.astm.org/a0988_a0988m-26.html)
- [ASTM B834-22: Pressure-consolidated powder nickel-alloy parts](https://store.astm.org/b0834-22.html)
- [ORNL/DOE: Powder Metallurgy Hot Isostatic Pressing Workshop Report](https://www.osti.gov/biblio/3252724)
- [ISO/ASTM 52907:2019: Methods to characterize metal powders](https://www.iso.org/standard/73565.html)
