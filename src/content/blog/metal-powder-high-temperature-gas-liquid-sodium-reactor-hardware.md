---
title: Metal Powder for Gas-Cooled and Liquid-Sodium Reactor Hardware
description: How to screen Hastelloy X, 316L, IN625, and other metal powder routes for helium-cooled and liquid-sodium reactor development hardware.
pubDate: 2026-07-20T00:20:00+08:00
category: Knowledge
tags:
  - metal powder
  - powder specification
  - nuclear additive manufacturing
  - additive manufacturing
featured: false
---

There is no single "advanced reactor metal powder." High-temperature helium and liquid sodium create different degradation mechanisms, material baselines, code questions, and test programs. A powder that is credible for a hot-gas coupon may be the wrong starting point for a sodium-wetted heat-exchanger channel, and a stainless powder suitable for non-wetted support hardware may not be suitable for a high-temperature pressure boundary.

The correct buying sequence is:

1. identify the reactor environment and component zone
2. identify the owner's baseline wrought or code material
3. decide whether additive geometry creates enough value to justify a new qualification burden
4. select a powder alloy only after the environmental and mechanical evidence plan exists

This guide covers LPBF development hardware, test-loop components, representative coupons, non-safety auxiliary parts, and process-qualification articles. It does not qualify a printed alloy for a reactor core, pressure boundary, intermediate heat exchanger, sodium-wetted primary component, or safety-related service.

## Split the search intent before selecting an alloy

The US Department of Energy's [Advanced Materials and Manufacturing Technologies roadmap](https://www.energy.gov/sites/default/files/2023-03/ne-ammt-roadmap-030823.pdf) separates high-temperature gas-cooled reactors from sodium-cooled fast reactors for a reason. The roadmap identifies high-temperature, radiation-tolerant materials for gas-cooled systems, while describing austenitic stainless and ferritic/martensitic steels as the material classes of strongest interest for sodium-cooled structural applications.

Use the following first gate:

| Environment | Primary material question | Typical powder-screening mistake |
|---|---|---|
| High-temperature helium | Can the alloy retain properties while its surface responds to the actual impure-helium chemistry and thermal cycle? | Treating nominally inert helium as proof that oxidation, carburization or decarburization cannot occur |
| Liquid sodium | Can the material tolerate sodium exposure, carbon or element mass transfer, thermal aging and the required stress history? | Treating low pressure as a low-severity material environment |
| Non-wetted reactor support area | Do temperature, radiation, contamination control, strength and owner classification permit an ordinary industrial alloy route? | Applying primary-circuit assumptions to a tool or bracket, or applying tool-grade evidence to a wetted part |
| Intermediate heat exchanger | Which material has the required code route, creep/creep-fatigue strength, joining evidence and compatibility on both fluid sides? | Selecting powder by only one side of a dual-environment problem |

Molten fluoride and chloride systems are intentionally excluded. They have a separate [IN625 molten-salt flow-hardware guide](/posts/Alloys/in625-powder-molten-salt-reactor-flow-hardware-heat-exchangers/). Lead and lead-bismuth coolants are also outside this page because their corrosion and oxygen-control questions differ from sodium.

## High-temperature gas reactors: helium is not the whole environment

DOE describes [high-temperature gas reactors](https://www.energy.gov/ne/articles/nuclear-101-what-high-temperature-gas-reactor) as helium-cooled systems designed to produce heat around 750 degrees C for electricity or industrial processes. Helium is chemically inert, but real reactor gas can contain low levels of reactive impurities. Surface reactions at high temperature can still matter.

An INL-hosted review of [environmental effects in impure helium](https://inldigitallibrary.inl.gov/sites/sti/sti/3484392.pdf) identifies Alloy 617, Alloy 800H, and Hastelloy X as reference materials from prior very-high-temperature reactor testing. It also discusses oxidation, carburization and the effect of gas "dryness" on protective surface layers. The procurement implication is direct: a buyer must name the gas chemistry and exposure state, not merely write "helium compatible."

The current engineering baseline also matters. An INL technical report on [Alloy 617 for ASME Section III, Division 5](https://www.osti.gov/biblio/1836553) documents Alloy 617 as a leading intermediate-heat-exchanger candidate and discusses established high-temperature nuclear materials including Alloy 800H, Types 304 and 316 stainless steel, Grade 91, and 2.25Cr-1Mo. The applicable code edition, code case, temperature range and owner acceptance must be checked at project execution time.

Hastelloy X powder can still enter an AM research matrix because it is a hot-gas alloy with LPBF experience and has appeared in helium-reactor materials studies. It should not be marketed as a substitute for Alloy 617 or 800H based only on oxidation resistance.

### Gas-side evidence that should exist before a component build

- full helium impurity composition and control range, including the species the owner tracks
- temperature, gradient, duration, pressure, flow and thermal-cycle profile
- expected carburization, decarburization, oxidation or depletion measurements
- tensile, creep, creep-fatigue or fatigue tests tied to the real design question
- as-built, machined and heat-treated AM surface conditions where relevant
- thin-section or representative channel specimens for heat-exchanger concepts
- irradiation scope and a written boundary when tests are non-irradiated
- comparison against the owner-selected wrought or code material

For ordinary furnace or combustion hardware outside nuclear service, use the [Hastelloy X furnace and hot-gas guide](/posts/Alloys/hastelloy-x-powder-furnace-and-hot-gas-hardware/). The nuclear helium route adds gas-purity control, long-duration mechanical behavior, code design, irradiation and quality-program requirements.

## Liquid sodium: distinguish 316L powder from 316H design data

DOE's roadmap describes sodium-cooled fast reactors as low-pressure, high-heat-removal systems with outlet temperatures above 500 degrees C. It identifies carbon transfer as a concern even though steels are generally compatible with sodium. Its reactor summary lists Grade 91, 316H and Alloy 709 as example SFR structural materials.

That does not make commodity 316L powder equivalent to 316H or Grade 91. The low-carbon 316L feedstock commonly sold for LPBF has a different procurement identity and does not inherit the elevated-temperature design data or code position of 316H. If a search begins with "316L powder for sodium loop hardware," the first answer may be to change the requested alloy, component class or manufacturing route.

ORNL's work on [advanced steels for sodium-cooled fast reactors](https://www.ornl.gov/publication/development-advanced-9cr-ferritic-martensitic-steels-and-austenitic-stainless-steels) uses Grade 91 and Type 316H as reference nuclear-code materials and evaluates thermal aging, creep, creep-fatigue, fracture and sodium corrosion. INL has also reported [sodium exposure testing of 316H and Alloy 709](https://nric.inl.gov/content/uploads/34/2024/12/MIS-22-70547-Fast-Reactor-Materials-RD-Update.pdf). These programs show the evidence categories a new AM route must address; they do not qualify a commercial powder lot.

### Sodium-side evidence that should exist before a component build

- sodium purity and oxygen-control method
- temperature range, gradients, flow velocity, duration and cold-trap conditions
- carbon activity and mass-transfer concerns across the system's material set
- thermal aging control specimens outside sodium
- post-exposure chemistry, microstructure, dimensional or mass-change measurements
- tensile, creep, fatigue or creep-fatigue testing as required by the component
- weld, diffusion-bond, thin-wall or channel specimens when those features govern failure
- cleaning, draining, handling and post-test examination procedures
- comparison with the program's 316H, Grade 91, Alloy 709 or other approved baseline

Do not infer sodium compatibility from water, steam, chloride, hot-air or generic corrosion data. Do not infer code suitability from a successful sodium-loop exposure.

## Candidate powder map: use, restrict or reject

The commercial powder families on this site have narrow roles in an advanced-reactor screen.

| Powder family | Plausible role | Restriction that must be stated |
|---|---|---|
| Hastelloy X | Hot-helium coupon, test-loop feature or non-code flow hardware when the owner includes it in the candidate matrix | Reference-material history is not component qualification; impure-helium and mechanical tests remain necessary |
| IN625 | Corrosion-side or mixed-environment development hardware when the owner has an Alloy 625 rationale | Not a default HTGR or sodium structural alloy; direct environment and high-temperature property evidence is required |
| 316L | Lower-temperature auxiliary manifolds, instrumentation blocks, non-wetted supports or comparison coupons | Do not substitute it for 316H design data or use it as a generic sodium-wetted high-temperature material |
| 17-4PH | Maintenance tooling, handling fixtures, gauges or strength-led non-wetted support hardware when the temperature and classification fit | Keep it out of hot sodium, hot helium pressure boundaries and irradiation-critical claims without an owner-led evidence path |
| IN718 | Strength-led rotating or coupling hardware outside the coolant-wetted zone | Precipitation strength does not establish helium or sodium compatibility |
| Alloy 617 / 800H / 316H / Grade 91 / Alloy 709 | Project baselines for specific high-temperature or sodium programs | Powder availability and AM qualification may be limited; conventional manufacture may remain the correct route |

The business objective is not to force every inquiry onto a powder already in stock. It is to identify the applications where a powder route can pass the owner's evidence gates. Rejecting the wrong alloy early protects qualification budget and creates a more credible RFQ.

## Component zoning turns a broad inquiry into a real decision

An "advanced reactor component" should be routed through at least four zones.

### Zone 1: coolant-wetted safety or pressure hardware

Examples include primary piping features, reactor-internal structures, sodium-wetted valves and qualified heat-exchanger boundaries. Start from code, licensing, owner material and approved manufacturing route. Commercial LPBF powder availability is a secondary question. A component in this zone should not be quoted as production hardware without an explicit qualification plan.

### Zone 2: representative development hardware

Examples include flow-loop nozzles, channel coupons, sensor wells, compact manifolds, thin-wall specimens and subscale heat-exchanger features. AM can be valuable because it reproduces internal geometry or surface state that a flat coupon misses. The deliverable is evidence, not automatic production approval.

### Zone 3: auxiliary and instrumentation hardware

Examples include purge, sampling and utility manifolds, sensor housings, cable or tube supports, and non-primary fluid blocks. [316L powder for SMR auxiliary hardware](/posts/Alloys/316l-powder-smr-auxiliary-fluid-manifolds-and-nuclear-support-hardware/) may be relevant when temperature, chemistry, classification and owner requirements fit. Separate auxiliary service from primary coolant exposure in the RFQ.

### Zone 4: maintenance and test tooling

Examples include alignment fixtures, inspection aids, handling tools, gauges and temporary test rigs. 17-4PH or 316L powder may support strength, corrosion resistance or compact geometry, but contamination control, temperature, radiation history, foreign-material exclusion and site procedures still apply.

This zoning prevents one SEO page from implying that the same powder belongs in a core component and a maintenance tool.

## When LPBF creates enough value

LPBF earns consideration when the geometry can create a measurable program benefit:

- integrated channels reproduce a thermal-hydraulic feature for a test loop
- a compact manifold removes joints and external fittings
- a representative thin wall or curved passage improves environmental testing
- sensor ports or instrumentation features can be integrated into a development article
- witness coupons can be tied to the same powder lot, orientation and thermal history
- a small run of research parts avoids expensive conventional tooling

LPBF is the wrong route when:

- the owner-approved material is unavailable as qualified powder
- the part can be machined or formed simply with a much lower qualification burden
- internal powder cannot be removed or verified
- surfaces cannot be inspected, finished or exposed representatively
- the code or licensing path does not accommodate the proposed process
- a successful build would still leave the decisive helium, sodium, irradiation or creep question unanswered

For large valve bodies, pump casings or pressure-component development, compare the [nuclear PM-HIP guide](/posts/Alloys/316l-in625-powder-pm-hip-nuclear-pressure-components/) and [HIP canister requirements](/posts/Alloys/metal-powder-hip-canister-large-reactor-valves-pump-casings/). LPBF and PM-HIP have different powder, scale, consolidation and acceptance logic.

## Test and acceptance matrix

Build an evidence matrix before asking for production powder.

| Gate | High-temperature helium route | Liquid-sodium route | Required record |
|---|---|---|---|
| Environment | Gas composition, impurity range, temperature, pressure and cycling | Sodium chemistry, oxygen/cold-trap control, temperature, flow and carbon activity | Owner-approved exposure specification |
| Material baseline | Alloy 617, 800H, Hastelloy X or other program material | 316H, Grade 91, Alloy 709 or other program material | Baseline selection rationale |
| AM state | Orientation, density, heat treatment, HIP, machining and surface finish | Same, plus representative sodium-wetted channel condition | Manufacturing plan and traveler |
| Exposure output | Oxide scale, carburization/decarburization, depletion and property changes | Mass transfer, carbon change, microstructure, dimensions and property changes | Laboratory report with raw-data traceability |
| Mechanical output | Creep, creep-fatigue, fatigue or tensile as design requires | Thermal aging plus sodium-exposed mechanical comparison | Test standard and acceptance rule |
| Escalation | Coupon to thin wall to representative channel/component | Coupon to flow-loop specimen to representative component | Signed hold-point release |
| Qualification boundary | Code, irradiation and licensing limits stated | Code, irradiation and sodium-system limits stated | Deviation and applicability statement |

The acceptance rule should be written before testing. Without it, a large report can describe interesting microstructures without telling the buyer whether to proceed, revise the process or stop.

## Powder specification and COA requirements

[ISO/ASTM 52907:2019](https://www.iso.org/standard/73565.html) covers documentation, traceability, sampling, particle-size distribution, chemistry, densities, morphology, flowability, contamination, packaging and storage. [ISO/ASTM 52904:2024](https://www.iso.org/standard/82919.html) addresses production control for metal powder bed fusion in critical applications. Alloy-specific component standards such as [ASTM F3184-16(2023) for PBF 316L](https://store.astm.org/f3184-16r23.html) may provide an additional purchasing baseline, but they do not create nuclear or coolant compatibility.

An advanced-reactor development RFQ should define:

- exact alloy designation and owner chemistry limits
- powder production route and virgin, blended or reused status
- machine-compatible PSD and the required measurement method
- chemistry, interstitial and residual-element reporting
- morphology, density, flow, contamination and foreign-particle criteria
- lot/sublot identity, sampling record and retained sample
- packaging, inerting, moisture control and handling history
- machine, parameter set, orientation and powder-reuse controls
- heat treatment, HIP, machining, cleaning and surface condition
- witness coupons and environmental/mechanical test matrix
- quality-program, record-retention, change-control and deviation requirements

Use the [powder specification guide](/posts/Alloys/metal-powder-specification-guide-psd-oxygen-flowability/) and [powder lot-sampling guide](/posts/Alloys/am-metal-powder-lot-sampling-for-psd/) to turn a nominal alloy request into measurable purchase requirements.

## RFQ block for gas-cooled or liquid-sodium development hardware

Send these inputs with the drawing or coupon plan:

- **Reactor environment:** high-temperature helium, sodium, non-wetted auxiliary area or maintenance/test use
- **Component zone:** primary, intermediate loop, auxiliary, instrumentation, test article or tooling
- **Classification:** safety/pressure function, code path, owner specification and irradiation scope
- **Environment detail:** gas impurities or sodium chemistry; temperature; pressure; flow; duration; cycling; off-normal boundary
- **Baseline material:** applicable Alloy 617, 800H, Hastelloy X, 316H, Grade 91, Alloy 709 or owner-approved comparison
- **Requested powder:** alloy, quantity, PSD, chemistry, morphology, flow/density tests, contamination and reuse status
- **Build route:** LPBF machine, orientation, parameter-control level and representative surface features
- **Post-processing:** heat treatment, HIP, machining, cleaning, coating or joining
- **Evidence:** COA, traceability, witness coupons, environmental exposure, mechanical tests and inspection reports
- **Acceptance:** decision table, hold points, deviation authority and required record-retention period

Use the [contact page](/contact/) to submit a powder request only after the two environments have been separated. A supplier can then quote a defensible powder lot, propose a comparison material, or state that the requested alloy/process route should be rejected.

## Application limits

This page does not provide a code design value, corrosion rate, sodium mass-transfer limit, helium impurity limit, creep life, irradiation allowance or reactor qualification. It does not claim that commercial Hastelloy X, IN625, 316L, 17-4PH or IN718 powder is acceptable for coolant-wetted or safety-related service. It does not treat a listed research material as currently approved under every code edition or owner program.

The main failure mode is category error: using evidence from hot air for helium, from fluoride salt for sodium, from 316H for 316L, from wrought material for an as-built internal surface, or from a non-safety test article for a pressure component. Each transfer needs a written technical basis.

## Primary sources used for this decision guide

- [DOE Advanced Materials and Manufacturing Technologies 2022 Roadmap](https://www.energy.gov/sites/default/files/2023-03/ne-ammt-roadmap-030823.pdf)
- [DOE: What Is a High-Temperature Gas Reactor?](https://www.energy.gov/ne/articles/nuclear-101-what-high-temperature-gas-reactor)
- [INL: effects of impure helium on reactor candidate materials](https://inldigitallibrary.inl.gov/sites/sti/sti/3484392.pdf)
- [INL technical basis work for Alloy 617 under ASME Section III, Division 5](https://www.osti.gov/biblio/1836553)
- [ORNL: advanced steels for sodium-cooled fast reactors](https://www.ornl.gov/publication/development-advanced-9cr-ferritic-martensitic-steels-and-austenitic-stainless-steels)
- [INL fast-reactor materials R&D update with sodium-exposure work](https://nric.inl.gov/content/uploads/34/2024/12/MIS-22-70547-Fast-Reactor-Materials-RD-Update.pdf)
- [ISO/ASTM 52907:2019 metal-powder characterization](https://www.iso.org/standard/73565.html)
- [ISO/ASTM 52904:2024 PBF process control for critical applications](https://www.iso.org/standard/82919.html)

## The procurement decision

For high-temperature gas hardware, start from the helium chemistry, temperature and owner baseline, then decide whether Hastelloy X or another available powder belongs in a comparison program. For liquid-sodium hardware, start from 316H, Grade 91, Alloy 709 or the owner's chosen structural material, and do not force commercial 316L powder into a role it does not inherit.

Buy powder when AM geometry helps answer the engineering question and the powder lot can remain traceable through environmental and mechanical testing. Use conventional manufacture when the approved alloy, code route or inspection plan is stronger there. That decision discipline is more likely to produce a credible powder inquiry than a broad request for "nuclear metal powder."
