---
title: 316L and IN625 Powder for PM-HIP Nuclear Pressure Components
description: Select 316L, IN625, or a conventional route for nuclear PM-HIP valves, pump casings, vessel sections, and qualification-led powder RFQs.
pubDate: 2026-07-19T00:10:00+08:00
category: Knowledge
tags:
  - PM-HIP
  - nuclear pressure components
  - 316L powder
  - IN625 powder
  - hot isostatic pressing
featured: true
---

Powder metallurgy hot isostatic pressing can make large near-net-shape metal components, but a PM-HIP powder quote is not evidence that a nuclear pressure component is code-acceptable. The useful buyer decision is narrower: does the component have enough geometry, material-utilization, weld-reduction, or supply-chain value to justify PM-HIP, and can the powder-to-finished-part route be qualified under the project's actual rules?

Use this selection order:

1. classify the component and its pressure, safety, temperature, and irradiation duties,
2. decide whether PM-HIP creates measurable value over forging, casting, fabrication, or machining,
3. select 316L, IN625, or another alloy from the service environment and governing material basis,
4. control powder, canister, consolidation, heat treatment, machining, and inspection as one route,
5. keep code acceptance and application qualification with the responsible nuclear program.

The current development signal is concrete. The US Nuclear Regulatory Commission includes PM-HIP among the advanced manufacturing technologies it is assessing, and reports a DOE/EPRI effort to demonstrate advanced manufacturing for small modular reactor vessel manufacture. In May 2026, Oak Ridge National Laboratory also reported an additively manufactured canister route for PM-HIP of large energy and nuclear components. These are development and regulatory-review signals, not blanket approval for production pressure boundaries.

This page covers material and manufacturing-route selection for large components. For detailed powder filling, evacuation, sealing, and canister records, use the [HIP canister requirements guide](/posts/Alloys/metal-powder-hip-canister-large-reactor-valves-pump-casings/). For compact LPBF auxiliary manifolds and support parts, use the separate [316L SMR support hardware guide](/posts/Alloys/316l-powder-smr-auxiliary-fluid-manifolds-and-nuclear-support-hardware/).

## Start with component classification

"Nuclear valve" or "reactor pump casing" is not a sufficient design basis. Before comparing powder suppliers, record:

- owner, plant or test program, development stage, and intended installation,
- safety classification and whether the part is pressure-retaining, pressure-adjacent, structural, or a qualification article,
- applicable ASME BPVC Section III subsection, code case, regulatory commitment, owner specification, and quality program,
- fluid or gas, chemistry, contamination, temperature, pressure, transients, cycles, and design life,
- irradiation, corrosion, embrittlement, creep, fatigue, wear, erosion, and leak consequences,
- required material form, allowable manufacturing routes, examination methods, and record retention.

ASME describes Section III as covering material, design, fabrication, examination, testing, overpressure protection, and quality assurance for nuclear components. That system-level scope is why an industrial PM-HIP material standard cannot by itself establish nuclear acceptance. Confirm the governing edition and project supplements before a supplier proposes a powder or canister route.

## Where PM-HIP can create real value

PM-HIP is most credible when the part is too large for practical powder-bed fusion, expensive to machine from a forging, difficult to cast consistently, or burdened by multiple welds and long procurement lead times. Candidate development families include:

- large valve bodies with branches, penetrations, or heavy section transitions,
- pump casings and housings with near-net internal and external geometry,
- vessel rings, nozzles, heads, elbows, or transition sections,
- heat-exchanger, steam-generator, and primary-system development forgings,
- demonstrators, mockups, qualification blocks, and irradiation specimens.

EPRI identifies pressure vessels, steam generators, large valves, pump housings, and elbows as candidate advanced-reactor PM-HIP applications, provided the process and material can be incorporated into the applicable code route. That proviso matters. A geometry can be technically manufacturable while still being commercially or regulatorily unusable.

PM-HIP should not be chosen merely because powder is available. The business case should quantify avoided machining, forgings, welds, schedule, material waste, and supply-chain exposure against canister engineering, powder quantity, HIP capacity, development trials, destructive characterization, NDE, code work, and risk retirement.

## Powder-to-component route

A controlled PM-HIP route normally links these stages:

| Stage | Buyer-controlled question | Evidence expected before release |
| --- | --- | --- |
| Alloy and powder manufacture | Is the material designation, melt route, atomization route, chemistry, lot definition, and surface condition suitable? | Approved material specification, supplier route, COA fields, sampling plan, retained sample, and change controls |
| Canister engineering | Can the sealed container collapse predictably while preserving geometry and material compatibility? | Reviewed canister design, weld and fill-port plan, shrinkage or process model basis, inspection points, and removal allowance |
| Filling and evacuation | Can the powder be loaded without bridging, segregation, contamination, or trapped gas? | Qualified loading procedure, mass balance, fill records, evacuation and leak-test records, and seal authorization |
| HIP consolidation | Is the equipment, cycle, instrumentation, and load configuration controlled? | Approved cycle, calibrated records, traceable load map, deviations, and release review |
| Post-HIP processing | Are can removal, heat treatment, machining, and surface allowances compatible with the material route? | Process travelers, heat-treatment charts, material removal records, dimensions, and surface evidence |
| Final qualification | Does the component meet the governing material, structural, NDE, pressure, and application requirements? | Representative properties, metallography, NDE, pressure or leak testing, environmental evidence, and complete genealogy |

ASTM A988/A988M-26 provides a current industrial reference for hot-isostatically pressed stainless steel flanges, fittings, valves, and pressure-system parts. Its public scope describes prealloyed powder placed into a can, evacuation and sealing, compact homogeneity, microstructure, can removal, heat treatment, density, hydrostatic testing, ultrasonic testing, and mechanical properties. It is a useful procurement cross-check, but it is not a substitute for the nuclear code path.

## 316L versus IN625 versus another route

The alloy label follows the failure mode. It should not be selected from the reactor type alone.

| Decision boundary | 316L powder route | IN625 powder route | Alternative that may be cleaner |
| --- | --- | --- | --- |
| Moderate-temperature aqueous or auxiliary service with a stainless material basis | Review when corrosion, ductility, fabrication knowledge, and code strategy support an austenitic stainless route | Usually unnecessary if stainless has adequate margin | Wrought or forged stainless when geometry is simple and supply is qualified |
| Corrosion-heavy, chloride-bearing, or chemically aggressive service | Reject or escalate if the service basis gives inadequate stainless margin | Review when a nickel-chromium-molybdenum alloy has a defensible environmental basis | Wrought nickel alloy, clad construction, or another program-qualified corrosion alloy |
| Elevated-temperature creep duty | Do not assume 316L is adequate from room-temperature data | Do not assume IN625 is adequate from corrosion reputation | 316H, Grade 91, another high-temperature code material, or conventional forging as required by the design basis |
| Irradiation-sensitive structure | Require route-specific material and irradiation evidence | Research exists, but it does not establish approval for a new component | Established nuclear material form until a PM-HIP data package is accepted |
| Large simple ring or shell | PM-HIP may add cost without geometric benefit | Nickel powder cost can dominate without clear service need | Forging, ring rolling, plate fabrication, or casting |
| Complex large valve or pump body | Strong candidate for comparison if weld and machining reduction are material | Candidate where corrosion or temperature justifies nickel alloy | Casting, forging plus machining, weld fabrication, or a hybrid route |

ASTM B834-22 covers pressure-consolidated powder nickel-alloy flanges, fittings, valves, and parts for general corrosion or heat-resisting service. It can inform an IN625-family industrial purchase specification, but the purchaser must verify the exact UNS grade, current edition, and nuclear applicability. A general corrosion-service standard does not establish irradiation, fatigue, creep, pressure-boundary, or reactor approval.

Research also needs careful interpretation. An OSTI-indexed study compared neutron-irradiated PM-HIP and forged alloy 625, while DOE laboratory programs continue work on PM-HIP stainless steels. These sources support material-development decisions; they do not let a supplier transfer one heat, geometry, irradiation dose, or property result to a production component.

## PM-HIP versus forging, casting, and LPBF

| Route | Favor it when | Main risk to retire | Reject it when |
| --- | --- | --- | --- |
| PM-HIP | Large near-net geometry, weld elimination, difficult forgings, or material utilization create measurable value | Powder/canister interaction, consolidation uniformity, route qualification, NDE, and code acceptance | The canister and qualification program cost more than the geometry saves |
| Forging plus machining | The material form and code route are established and the geometry is accessible | Lead time, buy-to-fly ratio, machining, and forging availability | Large machining waste or unavailable forging capacity controls the project |
| Casting | Complex large geometry and a qualified casting route exist | Defect population, section properties, repair, and inspection | Required material performance or defect acceptance is not credible |
| Weld fabrication | Plate or forged subcomponents are available and joints remain inspectable | Weld count, residual stress, distortion, inspection, and life | Joint reduction is a primary safety, schedule, or cost objective |
| LPBF | The component is compact enough and internal detail justifies layerwise manufacture | Build scale, trapped powder, anisotropy, surface, distortion, and inspection | The part exceeds the practical machine and qualification envelope |

ORNL's 2026 work uses additive manufacturing for the canister, not as evidence that every large pressure component should be printed directly. Keep the final component route and the tooling route separate in the decision record.

## Powder specification inputs

The powder purchase specification should be written for the selected PM-HIP procedure, not copied from an LPBF datasheet. Define:

- alloy designation, governing material specification, edition, and project chemistry limits,
- melt and atomization route, manufacturing site, lot definition, and permitted blending,
- particle-size distribution with sampling location, sample preparation, method, and reporting basis,
- oxygen, nitrogen, carbon, sulfur, phosphorus, moisture, and other controlled elements or contaminants,
- morphology, satellites, inclusions, apparent or tap density, and flow method only where they support the loading procedure,
- powder surface condition and any project controls related to prior-particle-boundary behavior,
- container count, package atmosphere, storage, opening, transfer, and unused-powder disposition,
- retained sample quantity, independent verification, nonconformance, deviation, and change notification,
- linkage from powder lot through canister, HIP load, heat treatment, specimens, NDE, and finished component.

ISO/ASTM 52907:2019, confirmed in 2025, covers documentation, sampling, PSD, chemistry, density, morphology, flow, contamination, packaging, and storage for metal AM powders. PM-HIP is not powder-bed AM, so use the standard as a characterization checklist only when the project accepts the methods. The [metal powder specification and COA guide](/posts/Alloys/metal-powder-specification-guide-psd-oxygen-flowability/) and [lot-sampling guide](/posts/Alloys/am-metal-powder-lot-sampling-for-psd/) explain how to name the method and represented population instead of accepting an unlabeled result.

## Qualification evidence stack

Do not compress qualification into one certificate. A credible package has several linked layers:

1. **Design and regulatory basis:** classification, governing code, owner requirements, regulator commitments, and approved alternatives.
2. **Feedstock basis:** alloy specification, powder route, lot controls, sampling, chemistry, morphology, contamination, and traceability.
3. **Process basis:** canister design, filling, evacuation, sealing, HIP cycle, heat treatment, can removal, machining, and controlled changes.
4. **Material basis:** representative locations, orientation where relevant, chemistry, density, microstructure, tensile, toughness, fatigue, creep, corrosion, and irradiation data required by service.
5. **Component basis:** dimensional results, NDE coverage and capability, hydrostatic or leak tests, functional testing, and disposition records.
6. **Production quality basis:** qualified organizations, procedures, personnel, equipment, calibration, travelers, hold points, deviations, retained records, and auditability.

The NRC describes advanced manufacturing methods as novel or not yet standardized through nuclear codes, standards, or regulatory approval. Treat that as a project risk gate. The strongest powder proposal states exactly what the supplier can certify and where the owner, designer, fabricator, authorized inspection, code body, or regulator must make the acceptance decision.

## Failure modes to address before ordering powder

| Failure mode | Why it matters | Procurement or qualification response |
| --- | --- | --- |
| Wrong material basis | Familiar alloy names can hide temperature, corrosion, irradiation, or code gaps | Freeze designation, edition, service envelope, and allowed alternatives before sourcing |
| Powder surface contamination or chemistry drift | Particle surfaces and interstitials can affect consolidation and fracture behavior | Control atomization, handling, sampling, interstitials, contamination, retained samples, and lot changes |
| Nonuniform fill or trapped gas | Canister collapse and local consolidation can become nonuniform | Qualify filling, mass balance, evacuation, leak check, sealing, and witness evidence |
| Canister reaction or incomplete removal | The can may alter the near-surface zone or leave unacceptable material | Define compatibility, barrier if approved, sacrificial allowance, removal verification, and surface inspection |
| Geometry prediction error | Canister deformation and shrinkage can move bores, walls, and interfaces | Validate models or trials, preserve machining stock, and measure critical zones after HIP |
| Weak NDE basis | A dense-looking component can still contain unacceptable conditions | Define flaw types, zones, method capability, reference standards, coverage, and acceptance authority |
| Broken genealogy | A good test result is unusable if it cannot be linked to the production route | Use unique IDs from powder containers through canister, HIP load, specimens, heat treatment, and final part |

## When PM-HIP is not justified

Reject or pause the PM-HIP route when:

- the code or owner does not permit the material form or no qualification plan is funded,
- a standard forging, casting, plate fabrication, or machined part already meets cost and schedule,
- the service environment has no defensible 316L, IN625, or alternate alloy basis,
- available HIP equipment cannot accept the canister size, mass, or controlled cycle,
- the design cannot support can removal, machining, inspection, or representative testing,
- powder quantity and documentation burden erase the near-net-shape benefit,
- supplier changes cannot be controlled across a long nuclear procurement schedule.

"Technically possible" is not the decision threshold. The route must be code-credible, inspectable, economically justified, and supportable over the component lifecycle.

## Nuclear PM-HIP powder RFQ block

> Program, facility or test context, component name, drawing revision, development stage, quantity, and delivery location:
>
> Safety classification, pressure-retaining status, governing code/standard and edition, owner specification, and quality program:
>
> Fluid or gas, chemistry, contaminants, temperature, pressure, transients, cycles, irradiation, and design life:
>
> Leading failure modes and required material properties or environmental evidence:
>
> Candidate alloy: 316L, IN625, or another approved grade; UNS designation, chemistry/interstitial limits, and permitted alternatives:
>
> Powder manufacturing route, lot definition, PSD and method, sampling plan, morphology, density/flow methods, contamination controls, packaging, and retained sample:
>
> Canister owner, design status, material, fill method, evacuation, sealing, leak check, compatibility, removal, and traceability requirements:
>
> HIP equipment envelope, approved cycle status, load controls, instrumentation, calibration, and required records:
>
> Heat treatment, can removal, machining stock, final machining, cleaning, passivation, and surface requirements:
>
> Specimen map, metallography, chemistry, density, mechanical, fracture, fatigue, creep, corrosion, and irradiation evidence as applicable:
>
> NDE methods, zones, reference standards, capability, acceptance criteria, pressure/leak tests, and disposition authority:
>
> Powder-only supply, development lot, qualification lot, canister-filled scope, consolidated blank, or finished component scope:
>
> Required COA, certificate of conformance, travelers, genealogy, deviation, change notification, and record-retention format:

Send that block through the [powder RFQ contact page](/contact/) with the drawing and the non-confidential service envelope. A supplier can then quote the feedstock and documentation scope without implying nuclear approval it does not own.

## Application limits

This guide does not approve PM-HIP for a reactor pressure boundary, assign an ASME class, qualify 316L or IN625 for irradiation, establish a HIP cycle, or replace owner, authorized inspection, code, or regulatory review. It also does not transfer industrial ASTM acceptance directly into nuclear service.

Use it to make the procurement decision testable: classify the component, compare PM-HIP with conventional routes, select the alloy from service evidence, specify powder and canister controls, and identify every acceptance authority before material is ordered. Continue through [PM-HIP Powder](/processes/pm-hip/), [Nuclear and SMR Support Hardware](/applications/nuclear-and-smr-support-hardware/), [Stainless Steel Powder](/materials/stainless-steel-powder/), or [Nickel Alloy Powder](/materials/nickel-alloy-powder/) according to the open decision.

### Primary sources

- [US NRC: Advanced Manufacturing Technologies](https://www.nrc.gov/reactors/power/amts)
- [ORNL: Advanced manufacturing enables PM-HIP of large, critical parts](https://www.ornl.gov/news/advanced-manufacturing-enables-pm-hip-large-critical-parts)
- [EPRI: Advanced Manufacturing and Materials Qualification for Nuclear Reactors](https://ant.epri.com/research/advanced-manufacturing-materials-qualification)
- [ASTM A988/A988M-26: Hot-isostatically pressed stainless steel pressure-system parts](https://store.astm.org/a0988_a0988m-26.html)
- [ASTM B834-22: Pressure-consolidated powder nickel-alloy parts](https://store.astm.org/b0834-22.html)
- [ISO/ASTM 52907:2019: Methods to characterize metal powders](https://www.iso.org/standard/73565.html)
- [ASME Boiler and Pressure Vessel Code overview](https://www.asme.org/codes-standards/bpvc-standards/bpvc-2021)
- [OSTI: Comparing PM-HIP and forged alloy 625 after neutron irradiation](https://www.osti.gov/pages/biblio/1909369)
