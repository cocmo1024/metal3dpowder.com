---
title: IN625 Powder for Molten-Salt Flow Hardware and Heat Exchangers
description: A qualification-led guide to screening IN625 powder for molten-salt nozzles, manifolds, flow hardware, and heat-exchanger development parts.
pubDate: 2026-07-20T00:10:00+08:00
updatedDate: 2026-07-23
category: Nickel
tags:
  - nickel alloy powder
  - IN625
  - corrosion resistant hardware
  - nuclear additive manufacturing
  - additive manufacturing
featured: false
---

IN625 powder can be a useful **screening feedstock** for molten-salt flow hardware, but it is not a default molten-salt reactor material. The alloy name alone does not answer whether a printed nozzle, manifold, test coupon, liner, or heat-exchanger feature will survive a specific fluoride or chloride salt.

The defensible decision starts with the salt composition and chemistry-control plan, then adds temperature, thermal gradients, exposure time, stress, irradiation, surface condition, and the additive manufacturing route. If those inputs are not defined, a powder quote can support material trials, but it cannot support a service-life or nuclear-qualification claim.

This guide is for LPBF development hardware, salt-loop test articles, corrosion coupons, non-code flow components, and qualification programs. It is not evidence that IN625 LPBF is approved for a reactor pressure boundary, primary circuit, safety-related component, or nuclear heat exchanger.

## The first decision: what exactly touches the salt?

"Molten salt" is not one service condition. Fluoride and chloride systems can produce different material rankings, and the same nominal salt can behave differently when impurities, redox state, fission products, oxygen or moisture ingress, flow velocity, and temperature gradients change.

The US Department of Energy's [Advanced Materials and Manufacturing Technologies roadmap](https://www.energy.gov/sites/default/files/2023-03/ne-ammt-roadmap-030823.pdf) identifies compatibility with fluoride or chloride salts, actinides, fission products, radiation, and high temperature as linked material-development needs. ORNL's [technical gap assessment for molten-salt reactor materials](https://info.ornl.gov/sites/publications/Files/Pub123216.pdf) also describes corrosion as a chemistry- and diffusion-dependent problem and notes that chloride behavior cannot be inferred from fluoride results.

Before an alloy is shortlisted, classify the hardware:

| Hardware zone | Questions that control the material screen | What a powder supplier can support |
|---|---|---|
| Primary salt-wetted pressure boundary | Salt species, redox control, fission products, irradiation, creep, code route, weld/joint behavior | Traceable powder and test material only; system qualification remains with the owner |
| Secondary salt loop | Salt chemistry, impurity control, pressure differential, oxidation on the non-salt side, thermal cycling | Powder lots, witness material, chemistry and powder-characterization records |
| Injection nozzle or compact manifold | Local velocity, stagnation, crevices, powder removal, internal roughness, thermal gradients | LPBF-suitable PSD, morphology, lot traceability, retained samples and coupon powder |
| Heat-exchanger coupon or subscale core | Thin walls, pressure differential, surface area, inspection access, diffusion bonding or joining route | Controlled feedstock for process and exposure trials |
| Test-loop fixture or specimen holder | Exposure objective, electrical isolation, galvanic couples, retrieval and sectioning plan | Small research quantities and matched-lot test coupons |

This classification prevents a common procurement error: ordering "reactor-grade IN625 powder" before the project has defined whether the part is a corrosion specimen, an experimental flow body, or intended plant hardware. There is no useful universal powder grade that resolves those different acceptance paths.

## Where IN625 belongs in the shortlist

IN625 is a nickel-chromium-molybdenum-niobium alloy with established powder-bed-fusion specifications and broad industrial use in corrosion-heavy hardware. ASTM [F3056-14(2021)](https://store.astm.org/f3056-14r21.html) provides a purchasing framework for UNS N06625 components made by full-melt powder bed fusion. That is useful for feedstock, manufacturing-plan, chemistry, heat-treatment, inspection, and reporting discussions.

It is not a molten-salt qualification standard. A part can meet an AM material specification and still be incompatible with the intended salt or nuclear design basis.

IN625 is most defensible in a molten-salt program when one of these statements is true:

- the project needs a readily available nickel-alloy powder for comparative corrosion screening
- a compact loop component or nozzle creates enough geometry value to justify LPBF development
- the team will test the actual printed and post-processed surface condition, not substitute wrought-alloy data
- Alloy 625 is already part of an owner-approved candidate matrix and the powder lot must be controlled
- the deliverable is a coupon, subcomponent, or research article rather than a qualified reactor component

DOE-indexed research has specifically examined [Alloy 625 in molten FLiNaK with tellurium](https://www.osti.gov/pages/biblio/2000200). That is evidence that Alloy 625 is a relevant research candidate. It is not evidence that one result transfers to a different salt, chemistry state, temperature, printed microstructure, or component geometry.

## Why Hastelloy N and other program alloys still matter

IN625 should not displace the reactor program's real baseline. Alloy N, also known as Hastelloy N, was developed for fluoride-salt service. ORNL's gap assessment describes its fluoride-salt history but also identifies limits involving high-temperature strength, creep, weld behavior, irradiation, and expanded service conditions. ORNL continues to evaluate [new solid-solution-strengthened alloys for molten fluoride environments](https://impact.ornl.gov/en/publications/fabrication-and-testing-of-solid-solution-strengthened-corrosion-/) because chemistry compatibility and long-term mechanical performance must be solved together.

This leads to a practical rule:

- **Fluoride-salt program:** compare IN625 against the owner-selected Alloy N or advanced nickel-alloy baseline.
- **Chloride-salt program:** do not import a fluoride ranking; build a chloride-specific test matrix.
- **High pressure-differential heat exchanger:** screen salt compatibility and creep/creep-fatigue separately, then combine the evidence.
- **Irradiated primary hardware:** treat non-irradiated corrosion results as incomplete.

If the project cannot obtain the baseline alloy as powder, that does not make IN625 the automatic substitute. It may mean AM is not yet the right production route for that component.

## A material-screening decision table

The table below is a gate, not a final alloy recommendation.

| Candidate powder | Reason it may enter the screen | Main reason to reject or restrict it | Appropriate first evidence |
|---|---|---|---|
| IN625 | Available LPBF route; nickel alloy for corrosion-side geometries; ASTM component specification exists | Salt-specific compatibility, irradiation, creep, and code acceptance are not established by the alloy label | Printed and wrought controls exposed to the actual salt and surface condition |
| Hastelloy X | Hot-gas oxidation experience; useful when one face sees a high-temperature gas environment | Not a default salt alloy; chromium behavior and salt chemistry require direct testing | Dual-environment or salt-specific coupon program |
| 316L / 316H | Available stainless powder route; 316H is an active AM molten-chloride research material | Austenitic stainless may lose alloying elements or suffer mass-transfer effects; 316L is not a high-temperature substitute for 316H | Project-specific chemistry, microstructure, creep and corrosion comparison |
| IN718 | Strong structural nickel route for some hot mechanical hardware | Precipitation-strengthened behavior does not establish salt compatibility; avoid using strength as a proxy for corrosion resistance | Use only when the owner has a separate mechanical and environmental rationale |
| Alloy N or program-specific advanced alloy | Direct relevance to fluoride-salt programs or owner material plan | Powder availability, AM process maturity, code data, and high-temperature strength may limit the route | Program baseline data plus AM-specific equivalency work |

For conventional nickel-alloy selection outside molten-salt service, compare [IN625 and IN718 powder](/posts/Alloys/in718-vs-in625-powder/) or use the [IN625 powder guide](/posts/Alloys/gh3625-in625-powder/). Those pages cannot replace salt-specific screening.

## LPBF changes the corrosion specimen

An LPBF component is not simply wrought IN625 with a more complex shape. Build orientation, solidification structure, lack-of-fusion defects, heat treatment, HIP, machining, surface roughness, residual powder, and internal access can change the surface and subsurface condition presented to the salt.

The 2024 INL work package on [AM 316H corrosion testing in NaCl-MgCl2](https://www.osti.gov/biblio/2479148) explicitly links surface finishing, porosity, microstructure, and chemical heterogeneity to molten-salt corrosion performance. That methodology lesson applies even when the candidate alloy is IN625: the test article must represent the planned manufacturing route.

For a printed flow component, include at least these conditions in the test plan:

- as-built external surface when it will remain in service
- representative internal channel surface that cannot be machined
- machined or polished reference surface
- final heat-treated condition and, when applicable, HIP condition
- build orientations that capture the critical wall or flow direction
- a wrought or conventionally manufactured control from the same nominal alloy family
- a blank salt control and a chemistry-monitoring plan

Testing only polished coupons can produce clean comparative science while missing the risk in a rough internal LPBF passage. Testing only as-built coupons can obscure the benefit of a realistic finishing route. The component design and test matrix must match.

## Test-method table for an RFQ-ready program

Do not ask a powder supplier to certify "molten-salt resistance" without defining the evidence. Convert the requirement into a test matrix.

| Test element | Minimum project definition | Decision it supports |
|---|---|---|
| Salt identity | Full composition, supplier/purification route, impurity limits, redox-control method and sampling plan | Whether results apply to the intended loop |
| Exposure profile | Temperature range, gradients, duration, thermal cycles, static or flowing condition, cover gas and pressure | Whether the test reproduces the damaging environment |
| Specimen state | Powder lot, machine, parameters, orientation, heat treatment, HIP, machining and surface finish | Whether AM process variation is represented |
| Corrosion measurement | Mass change with handling method, dimensional metal loss, cross-section depth, SEM/EDS or other agreed characterization | How degradation is detected and compared |
| Mechanical follow-up | Tensile, fatigue, creep, creep-fatigue or bend testing as required by the design question | Whether exposure changes usable properties |
| Joint or thin-wall specimen | Representative weld, diffusion-bonded interface, brazed joint, liner, channel wall or heat-exchanger ligament | Whether the real failure location is covered |
| Irradiation boundary | Explicitly state irradiated or non-irradiated scope and any surrogate limitations | Prevents non-irradiated results from being overclaimed |
| Acceptance rule | Ranking rule, allowable change, hold point and decision owner | Turns data into a go, revise or stop decision |

ASTM G31-style immersion concepts may inform specimen handling for some laboratory programs, but the owner and laboratory must adapt the method to high-temperature salt chemistry, containment, sampling, and safety. A generic room-temperature corrosion coupon procedure is not enough.

## Powder controls that should survive the whole program

The powder record has to connect each exposure result back to a lot and process state. [ISO/ASTM 52907:2019](https://www.iso.org/standard/73565.html), confirmed current in 2025, covers documentation and traceability, sampling, PSD, chemistry, densities, morphology, flowability, contamination, packaging, and storage for AM metal powder.

For molten-salt research hardware, the purchasing specification should add project-specific controls:

- named alloy and applicable UNS or owner chemistry, including tightened elements where justified
- target process and machine-compatible particle-size distribution
- virgin, blended, or reused powder status and the approved reuse rule
- lot and sublot traceability from atomization through build
- chemistry report, including interstitials and any elements critical to the corrosion hypothesis
- PSD method and reported percentiles, not only a nominal size range
- morphology, satellites, foreign-particle and cross-alloy contamination controls
- apparent or tap density and flow test selected for the machine and acceptance history
- sealed packaging, inerting or moisture-control requirements, and handling history
- retained powder sample, witness coupons, and record-retention period

For method selection, use the [metal powder specification guide](/posts/Alloys/metal-powder-specification-guide-psd-oxygen-flowability/), [lot-sampling guide](/posts/Alloys/am-metal-powder-lot-sampling-for-psd/), and [LPBF powder particle-size guide](/posts/Alloys/lpbf-powder-particle-size-guide/).

## Acceptance workflow from powder to salt exposure

Use a gated workflow so a successful print is not mistaken for a successful material decision.

1. **Classify the component.** Identify safety class, pressure function, wetted surfaces, code path, irradiation scope and whether the part is experimental or intended hardware.
2. **Freeze the environment.** Define salt, purification, redox control, impurities, temperature map, flow, pressure, cover gas and off-normal conditions.
3. **Select the comparison set.** Include the program baseline, the proposed AM alloy, wrought controls and relevant surface/process states.
4. **Qualify the powder and build record.** Link COA, sampling, PSD, machine, parameters, orientation, heat treatment, HIP and finishing.
5. **Run coupon exposure first.** Use hold points before committing to complex nozzles, liners or heat-exchanger cores.
6. **Inspect the real degradation mode.** Report metal loss, depletion depth, intergranular attack, deposits, mass transfer and mechanical-property change as applicable.
7. **Escalate geometry deliberately.** Move from coupons to representative channels, joints, thin walls and flow hardware only when the prior gate passes.
8. **Keep qualification separate from procurement.** Powder conformance, process qualification, component acceptance and nuclear approval are different records.

The most expensive failure mode is not a failed coupon. It is building a complex heat exchanger before the program has shown that the material, surface and salt chemistry are compatible.

## What to send in an IN625 powder RFQ

Use the following block when requesting powder for molten-salt development work:

- **Hardware:** nozzle, manifold, liner, coupon, channel specimen, heat-exchanger subcomponent or other defined part
- **Program status:** screening, process development, salt-loop test, qualification article or intended service hardware
- **Salt environment:** fluoride or chloride; exact composition; purification and redox plan; impurities; temperature and exposure duration
- **Mechanical environment:** pressure, pressure differential, stress, thermal cycles, vibration and irradiation scope
- **Alloy:** IN625 / UNS N06625 or owner specification; comparison alloys and chemistry limits
- **AM route:** LPBF machine, layer strategy if controlled, build orientation and planned parameter qualification
- **Powder:** quantity, PSD, chemistry, morphology, density/flow methods, virgin/reuse status and contamination limits
- **Post-processing:** stress relief, solution treatment, HIP, machining, polishing, coating or joining route
- **Evidence:** COA, certificate of conformance, traceability, sampling record, retained sample, witness coupons and required inspection reports
- **Acceptance:** purchaser-approved powder limits, coupon plan, salt-exposure gate and final decision authority

Describe the non-confidential internal-channel and service requirements through the [contact team](/contact/). If drawings are needed, arrange an approved confidentiality and document-transfer process before sending them. The team can then quote a powder lot against the real experiment instead of guessing from the phrase "molten-salt reactor powder."

## Application limits

This page does not establish corrosion rate, design life, irradiation tolerance, creep strength, code compliance, leak tightness, or nuclear qualification for an IN625 LPBF part. It does not rank IN625 above Alloy N, 316H, Alloy 617, Alloy 800H, or an owner-selected advanced alloy. Published results for one salt and specimen condition should not be transferred to another without technical justification.

For compact SMR auxiliary water, gas, instrumentation, and test-loop hardware outside molten-salt service, use the [316L SMR auxiliary hardware guide](/posts/Alloys/316l-powder-smr-auxiliary-fluid-manifolds-and-nuclear-support-hardware/). For large consolidated nuclear pressure-component development, use the [PM-HIP nuclear pressure-component guide](/posts/Alloys/316l-in625-powder-pm-hip-nuclear-pressure-components/). For helium-cooled or liquid-sodium environments, use the separate [gas-cooled and liquid-sodium reactor powder selection guide](/posts/Alloys/metal-powder-high-temperature-gas-liquid-sodium-reactor-hardware/).

## Primary sources used for this decision guide

- [DOE Advanced Materials and Manufacturing Technologies 2022 Roadmap](https://www.energy.gov/sites/default/files/2023-03/ne-ammt-roadmap-030823.pdf)
- [ORNL/NRC Technical Gap Assessment for Materials and Component Integrity Issues for Molten Salt Reactors](https://info.ornl.gov/sites/publications/Files/Pub123216.pdf)
- [INL program document: Corrosion Testing of Additively Manufactured Stainless Steel 316H in Molten Salt Environments](https://www.osti.gov/biblio/2479148)
- [DOE PAGES record: Alloy 625 corrosion in molten FLiNaK with tellurium](https://www.osti.gov/pages/biblio/2000200)
- [ISO/ASTM 52907:2019 metal-powder characterization](https://www.iso.org/standard/73565.html)
- [ASTM F3056-14(2021), PBF Nickel Alloy UNS N06625](https://store.astm.org/f3056-14r21.html)

## The procurement decision

Request IN625 powder when the program needs a traceable, LPBF-capable nickel alloy for a defined molten-salt comparison, and when the owner has a credible path from coupons to representative hardware. Do not request it as a generic reactor-qualified material.

The strongest inquiry names the salt chemistry, component zone, process state, comparison alloy, test method, acceptance gate and documentation package together. That turns a broad molten-salt keyword into an engineering decision that a powder supplier, AM team, corrosion laboratory and reactor developer can evaluate without overclaiming.
