---
title: IN718 Powder for Rocket Turbopump Impellers and Compressor Hardware
description: Select and specify IN718 powder for LPBF rocket turbopump impellers, inducers, compressor hardware, heat treatment, inspection, and RFQ evidence.
pubDate: 2026-04-25T22:26:00+08:00
updatedDate: 2026-07-17
category: Nickel
tags:
  - IN718
  - rocket turbopump
  - turbomachinery
  - compressor hardware
  - LPBF powder
featured: true
---

IN718 powder is a defensible starting point for an LPBF rocket turbopump impeller, inducer, or compressor component when high structural demand and AM-only geometry justify the qualification burden. It is not an automatic choice for every rotating part. The buyer still has to connect the powder lot, machine and parameter set, heat treatment, machining, inspection, balance, and component test plan to the actual duty cycle.

The key purchasing decision is therefore not simply "IN718 or not." It is whether a controlled IN718 additive route can produce inspectable hardware with sufficient fatigue, fracture, dimensional, surface, and environmental evidence for the program.

## Part-by-part route selection

| Hardware decision | Strong AM candidate when | Main risk to close | Practical route |
| --- | --- | --- | --- |
| Shrouded or unshrouded impeller | Integrated blades, hubs, or flow features remove difficult assemblies | Defects, blade surface, thin-edge variation, residual stress, and balance | Qualified IN718 LPBF plus heat treatment, machining, NDE, balance, and spin or system testing |
| Turbopump inducer | Helical geometry or a hybrid near-net route creates real schedule or material savings | Cavitation-sensitive surfaces, leading edges, hub-to-vane integrity, and dynamic loading | IN718 LPBF for a monolithic part, or a qualified DED-on-wrought route where scale and access support it |
| Pump housing or bearing support | Internal routing and consolidated interfaces reduce joints | Pressure boundary, alignment, sealing faces, trapped powder, and inspectability | IN718 LPBF, or another qualified alloy if strength is not the controlling need |
| Compressor impeller or hot structural rotor | Thermal and mechanical loads exceed aluminum or common stainless routes | High-cycle fatigue, surface condition, and geometry-specific inspection limits | IN718 LPBF only with a route-specific property and acceptance basis |
| Simple hub, shaft, or open stationary ring | Geometry is simple and mature stock is available | AM cost and qualification exceed the design benefit | Wrought, forged, cast, or machined stock is often the better route |

This table is a screening tool, not a flight-approval matrix. Rotating hardware and hazardous-fluid systems can become fracture-critical under the governing program, so the final classification belongs to the responsible design and fracture-control authority.

## What NASA demonstrations establish, and what they do not

NASA's [additive LOX turbopump design record](https://ntrs.nasa.gov/citations/20170000423) reports that direct metal laser sintered IN718 represented 77% of the turbopump by mass and included the impeller, turbine components, and housings. NASA also reports that an additively manufactured liquid-hydrogen fuel turbopump reached full power during a [15-test campaign](https://www.nasa.gov/technology/manufacturing-materials-3-d-printing/successful-nasa-rocket-fuel-pump-tests-pave-way-for-3-d-printed-demonstrator-engine/).

Those programs show that powder-bed IN718 can be developed into tested turbomachinery. They do not show that an unrelated powder lot, machine, parameter set, geometry, or supplier is qualified. NASA's active [Additive Manufacturing Requirements for Spaceflight Systems](https://standards.nasa.gov/standard/nasa/nasa-std-6030) treats design, fabrication, and testing as a controlled system rather than allowing a material name to stand in for qualification.

NASA has also studied a [hybrid IN718 inducer](https://ntrs.nasa.gov/citations/20210010624) made by blown-powder DED of fins onto a wrought hub. That is useful evidence for a route decision: LPBF is not the only additive option, and a hybrid build changes the interface, heat-treatment, NDE, and property questions. It is not evidence that DED and LPBF properties are interchangeable.

## Start with the load and failure model

Before requesting powder, define the zones that control the part:

- overspeed, steady centrifugal, transient, thermal, pressure, and vibratory loads,
- high-cycle and low-cycle fatigue locations,
- leading edges, blade roots, fillets, bores, keyways, and other stress concentrators,
- contact, fretting, seal, bearing, spline, and fastener interfaces,
- minimum wall, blade, and edge dimensions after finishing,
- flow-path roughness and dimensional sensitivity,
- propellant, gas, temperature, pressure, and exposure time,
- allowable imbalance and material-removal strategy,
- consequence of a released fragment, leak, or loss of pump performance.

NASA's 2024 [handbook for AM strength, fatigue, and fracture control](https://standards.nasa.gov/standard/NASA/NASA-HDBK-5026) directs hardware owners to the applicable structural, NDE, liquid-propulsion strength/life, and fracture-control requirements. For a powder RFQ, the immediate implication is simple: the required evidence depends on part classification and failure consequence, not on alloy popularity.

## IN718 versus the nearest alternatives

| Requirement that leads | First alloy or route to review | Why it enters the review | Boundary |
| --- | --- | --- | --- |
| High structural demand with a mature nickel AM route | IN718 | Precipitation-hardened nickel route with established LPBF use | Heat treatment, section size, surface, orientation, and defect population remain process-specific |
| Corrosion-led stationary feed or manifold hardware | IN625 | Solution-strengthened nickel alloy often selected when corrosion matters more than peak strength | Do not substitute it into a rotor without a new stress and life basis |
| Combustor-adjacent oxidation or hot-gas hardware | Hastelloy X or the program alloy | Hot-gas behavior may lead the decision | This does not make it the default for a cryogenic pump rotor |
| Lightweight external housing or support | Ti64, where the fluid and ignition assessment permits | Lower mass can be valuable in non-hot, non-oxidizer-wetted structure | Do not treat titanium as a default oxygen-service material |
| Simple rotor with mature stock and accessible machining | Wrought or forged IN718 | Established stock route may reduce defect and qualification uncertainty | AM only wins when geometry, integration, or lead time creates measurable value |

For nearby non-rotating rocket valves, injectors, and feed manifolds, use the [rocket feed-system powder selection guide](/posts/Alloys/metal-powder-rocket-injectors-cryogenic-valves-feed-manifolds/). It separates fluid compatibility and passage verification from the rotating-life problem addressed here.

## Specify IN718 powder as part of a locked process

[ASTM F3055](https://store.astm.org/f3055-14a.html) covers additively manufactured UNS N07718 components made by full-melt powder-bed fusion. Its scope reaches beyond feedstock into the manufacturing plan, thermal processing, chemistry, microstructure, mechanical properties, dimensions, inspection, certification, and quality program. A purchase order can invoke an agreed edition as a baseline, but program-specific requirements may be more stringent.

At powder level, define:

- exact alloy designation and chemistry limits,
- atomization route and powder manufacturing location,
- lot definition, traceability, retained samples, and change notification,
- PSD limits plus sampling, sample preparation, and test method,
- morphology and satellite or agglomerate review method,
- oxygen, nitrogen where relevant, moisture, and contamination controls,
- apparent density, tap density, and flow methods used for lot trending,
- virgin, recovered, sieved, blended, or reused powder status,
- packaging atmosphere, package size, storage, and open-container controls.

Do not select a nominal 15-45 um or 15-53 um cut from a search result and call the powder qualified. The machine, recoater, layer thickness, geometry, and parameter set decide the usable window. Use the [metal powder specification guide](/posts/Alloys/metal-powder-specification-guide-psd-oxygen-flowability/) to structure the COA, the [PSD sampling guide](/posts/Alloys/am-metal-powder-lot-sampling-for-psd/) to control the sample, and the [LPBF spreadability guide](/posts/Alloys/lpbf-powder-spreadability-and-layer-density/) when the concern is layer formation rather than funnel flow alone.

NASA Marshall's [powder-flowability laboratory overview](https://ntrs.nasa.gov/citations/20230007595) lists flow rate, apparent density, tap density, PSD, morphology, and dynamic flow behavior as distinct characterization outputs. That is the right purchasing model: a group of methods can detect different changes, but none alone predicts rotor life.

## Build and post-process decisions to freeze before production

### Orientation and supports

Blade angle, overhangs, support access, recoater interaction, thermal gradients, and stock for finishing must be evaluated together. An orientation that reduces support may make critical surfaces harder to machine or place fatigue-sensitive zones in an unfavorable material direction. Record the approved orientation and support strategy in the manufacturing plan.

### Heat treatment and HIP

Define stress relief, solution and aging treatment, and HIP only through the qualified material-process route. HIP can be one part of defect mitigation; it does not remove every surface-connected flaw, oxide, contamination, geometry error, or adverse microstructure. Any thermal route also affects distortion, machining stock, dimensional recovery, and coupon interpretation.

NASA's comparison of [L-PBF, powder DED, and wire-arc IN718](https://ntrs.nasa.gov/citations/20230010244) found process-dependent microstructures and mechanical response after an identical heat-treatment schedule. This is direct evidence against transferring an LPBF property basis to a DED or hybrid inducer without validation.

### Machining and surface control

Critical bores, seal faces, bearing seats, datums, blade surfaces, and balancing features need defined final conditions. State where as-built surface is permitted, where machining or polishing is required, and how enough stock will be preserved without moving the finished geometry outside the qualified envelope.

## Inspection must follow the defect and geometry risk

| Evidence stage | Minimum question | Typical evidence | Important limitation |
| --- | --- | --- | --- |
| Powder release | Is the lot the specified feedstock in known condition? | Chemistry, PSD, morphology, density/flow trends, identity, traceability | Does not accept the build or part |
| Build control | Did the locked machine route remain within control? | Machine identity, parameter revision, atmosphere records, monitoring, witness material | Monitoring indications are not automatically defect size |
| Material qualification | Does the route produce the required material state? | Location- and orientation-aware coupons, heat-treatment records, microstructure, tensile and fatigue data | Generic vendor data may not represent the rotor |
| Part NDE | Can relevant flaws be detected in critical zones? | Qualified CT or radiography where suitable, penetrant or surface methods, targeted ultrasonic methods, inspection qualification | Resolution and probability of detection vary with thickness, access, material, and flaw type |
| Geometry and balance | Is the finished rotor within aerodynamic and dynamic limits? | CMM or optical data, flow-path inspection, mass properties, balance records | Dimensional conformity does not prove material integrity |
| Component verification | Does the hardware survive its required environment and life? | Proof, leak, flow, spin, overspeed, vibration, cryogenic, endurance, or system testing as applicable | Test scope must match the program and failure model |

NASA-STD-5009C addresses NDE of fracture-critical metallic components and points AM hardware to NASA-STD-6030. The practical buyer rule is to define flaw types, critical zones, detection capability, reference standards, acceptance criteria, and disposition authority before the part is built. "CT inspected" is not a complete acceptance requirement.

## Qualification ladder for a turbopump rotor

1. Classify the hardware and identify critical zones and failure modes.
2. Lock the alloy, powder specification, supplier, machine family, parameter set, orientation, and thermal route.
3. Generate material data that represents the process, direction, location, surface condition, and service environment.
4. Demonstrate geometry, machining access, powder removal, and inspection capability on representative hardware.
5. Correlate in-process records, witness material, NDE, and destructive evidence.
6. Complete dimensional, surface, balance, proof, spin, environmental, and endurance tests required by the program.
7. Control powder, process, software, machine, heat-treatment, and supplier changes through documented requalification rules.

This ladder also protects prototypes from being misrepresented. A development impeller can be useful without being flight hardware, provided the quote, drawing, records, and acceptance statement preserve that boundary.

## When AM is not justified

Choose a conventional or hybrid route when:

- the impeller or hub is simple enough for proven machining or forging,
- critical internal regions cannot be inspected to the required capability,
- finishing cannot reach the surfaces that control fatigue or flow,
- the program cannot support representative material and component testing,
- the supplier cannot hold one documented machine-parameter-heat-treatment route,
- powder consolidation saves little compared with the cost of qualification,
- a hybrid wrought hub and additive vane route offers a clearer risk or cost case.

AM value should be stated in engineering terms: eliminated joints, integrated passages, reduced assembly count, improved flow-path freedom, reduced stock removal, or a shorter verified iteration loop. A complex shape alone is not a business case.

## IN718 turbopump powder RFQ block

> Part type, drawing revision, development or production intent:
>
> Rotating, stationary, pressure-boundary, and fracture-control classification:
>
> Propellant or gas, temperature, pressure, speed, cycles, life, and transient envelope:
>
> Critical zones, failure modes, surface requirements, and machining allowance:
>
> Alloy designation, governing specification and edition, and allowed alternatives:
>
> LPBF, DED, hybrid, or conventional route and qualified machine family:
>
> Powder production route, PSD method and limits, chemistry/interstitials, morphology, flow/density methods, lot definition, and reuse status:
>
> Packaging, storage, retained sample, genealogy, and change-notification requirements:
>
> Orientation, supports, parameter-set revision, atmosphere, build monitoring, and witness material:
>
> Stress relief, solution/aging, HIP, machining, polishing, coating, and cleaning sequence:
>
> Material data, NDE capability, dimensional, balance, spin, proof, leak, flow, cryogenic, vibration, and endurance evidence:
>
> Powder-only, build service, finished component, or qualification-package scope:
>
> Quantity, pack size, destination, requested delivery date, and documentation format:

An actionable quote should state which evidence is supplier-delivered and which remains the buyer's program responsibility. Powder conformity is the first link in the chain, not the final acceptance of a rocket turbopump.
