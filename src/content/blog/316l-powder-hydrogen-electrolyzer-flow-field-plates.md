---
title: "316L Powder for Fuel-Cell Bipolar Plates: Process Selection"
description: Compare LPBF, binder jet, stamped sheet, and machined 316L routes for fuel-cell and electrolyzer bipolar plates, flow fields, coatings, tests, and RFQs.
pubDate: 2026-05-29T09:20:00+08:00
updatedDate: 2026-07-18
category: Steel
tags:
  - 316L
  - fuel-cell bipolar plate
  - electrolyzer flow field
  - LPBF
  - binder jet
featured: true
---

316L powder is a credible candidate for fuel-cell bipolar plates and electrolyzer flow-field hardware when additive manufacturing solves a specific geometry, integration, or development problem. It is not the automatic choice for a thin production plate, and a dense printed coupon does not prove acceptable corrosion, contact resistance, coating adhesion, sealing, or stack life.

Use this selection order:

1. define the cell chemistry and the side of the plate that sees service,
2. separate electrical, fluid, corrosion, and mechanical requirements,
3. choose the manufacturing route from geometry and volume,
4. define the surface and coating route before ordering powder,
5. connect powder controls to finished-plate acceptance tests.

This page covers fuel-cell and electrolyzer bipolar plates, flow fields, and closely integrated plate-manifold development hardware. For humidifier manifolds, filters, heat exchangers, burners, and compressor hardware outside the active stack, use the [fuel-cell balance-of-plant powder guide](/posts/Alloys/metal-powder-fuel-cell-balance-of-plant-hardware/).

## What the plate has to do

The U.S. Department of Energy's [fuel-cell component overview](https://www.energy.gov/cmei/fuels/parts-fuel-cell) describes bipolar plates as cell separators that conduct current, provide structural support, and contain gas flow fields and, in some designs, coolant channels. Those functions create several simultaneous acceptance problems:

- distribute reactants and remove product water without excessive pressure loss,
- separate gas and coolant circuits without leakage,
- conduct current with controlled interfacial contact resistance,
- resist corrosion and avoid harmful released species,
- maintain sealing lands, flatness, and compression behavior,
- survive starts, stops, thermal cycles, and the specified operating life,
- support coating, cleaning, inspection, and repeatable production.

DOE also publishes [guideline component targets for PEM fuel-cell bipolar plates](https://www.energy.gov/cmei/fuels/doe-technical-targets-polymer-electrolyte-membrane-fuel-cell-components). The values shown on that page are development targets with dated status columns, not a universal 2026 purchase specification. They are useful for identifying the required categories of evidence, while the buyer must set current project-specific limits and methods.

## Process selection matrix

| Route | Strongest fit | Main advantages | Evidence that can stop the route |
| --- | --- | --- | --- |
| LPBF 316L | Prototype and low-volume plates, thick development hardware, three-dimensional flow fields, or a plate integrated with headers and ports | Fast design iteration and internal geometry that is difficult to machine or stamp | Unacceptable down-skin roughness, trapped powder, distortion, coating surface, flatness, contact resistance, leak performance, or cost per active area |
| Binder jet plus sintering | Recurring complex stainless hardware where support-free printing and batch throughput may matter | Can avoid a melt track and support removal; may suit thicker plate-manifold or filter-like geometry | Sintering shrinkage, residual porosity, distortion, thin-wall variation, surface condition, and sealing performance are not controlled for the design |
| Stamped or formed coated sheet | Thin, mature, high-volume metallic bipolar plates | High area throughput and a direct path to thin sections after tooling is established | Tooling cost, slow design iteration, difficult integrated headers, joining burden, or geometry outside the forming window |
| Machined plate | Low-volume test cells with accessible channels and strict datum control | Clear inspection and finishing access; no trapped-powder problem | Material waste, machining time, or channels and manifolds that are too complex for practical tooling |
| Graphite, composite, titanium, or another program material | The electrochemical environment or production architecture favors a non-316L route | May provide a cleaner corrosion, conductivity, weight, or established-production solution | Brittleness, forming limits, joining, cost, conductivity, permeability, or a weak application-specific qualification basis |

LPBF and binder jet are not interchangeable powder routes. A particle-size distribution, flow test, reuse rule, and acceptance limit should be tied to the selected machine, layer-forming mechanism, debinding or sintering route, and qualified material state.

## Separate PEMFC, PEMWE, and alkaline-side decisions

The phrase "bipolar plate" does not define one environment.

### PEM fuel-cell plates

PEMFC hardware couples gas distribution and water management with electrical contact and corrosion control. Stainless steel may enter the review with a coating or surface treatment, but the plate still needs representative corrosion and contact-resistance evidence before and after the planned durability exposure. An attractive as-built channel does not compensate for a coating that fails at edges, rough surfaces, or sealing lands.

### PEM water-electrolyzer flow fields

PEMWE oxygen-side service can be more demanding for stainless hardware. Titanium or another qualified route may be cleaner for some designs. A 316L development plate, cathode-side component, or balance-of-stack manifold can still be useful, but the RFQ must identify the side, potential, fluid chemistry, contaminants, coating, and validation plan. Do not transfer PEMFC evidence to PEMWE service without a technical basis.

### AEM, alkaline, and test hardware

AEM and alkaline environments change the corrosion question but do not remove it. Electrolyte concentration, temperature, potential, cleaning chemistry, crossover, and released-metal limits remain design inputs. "Less acidic" is not an acceptance criterion.

## Decide whether additive geometry earns its cost

Additive manufacturing is most defensible when the plate does more than reproduce a flat stamped channel pattern. Useful value can come from:

- integrated inlet and return headers,
- non-planar distribution features that improve packaging,
- locally varied channel geometry for a controlled experiment,
- embedded sensor or sampling ports,
- consolidation of a plate, manifold, and fitting interface,
- rapid production of several controlled design variants.

The same features create inspection problems. Every closed passage needs a powder-removal plan, a cleaning verification method, and a way to assess flow or blockage. Down-facing surfaces can change hydraulic behavior. Seal lands and electrical contact surfaces normally need defined finishing. A thicker printed plate may work for development yet fail the mass, pitch, or production-rate requirement of a commercial stack.

## 316L is a starting alloy, not a corrosion conclusion

[316L stainless steel powder](/posts/Alloys/316l-stainless-steel-powder/) is attractive because established LPBF supply and process experience are available. ASTM's active [F3184 specification for powder-bed-fused UNS S31603](https://store.astm.org/f3184-16r23.html) provides a framework covering order information, feedstock, processing, chemistry, microstructure, properties, dimensions, inspection, certification, and supplementary requirements. It does not qualify a bipolar plate for a fuel-cell or electrolyzer environment.

A Los Alamos National Laboratory study on [additively manufactured 316L bipolar-plate specimens](https://www.osti.gov/servlets/purl/1822705) evaluated manufacturing, finishing, coating, and corrosion-related behavior for PEM fuel-cell development. That work supports the need to evaluate the complete route. It does not establish that every LPBF 316L plate or coating is acceptable.

CuCrZr may enter a separate current-collector or thermal-hardware discussion when conductivity leads, but it is not a drop-in replacement for coated stainless bipolar plates. Compare the [CuCrZr powder guide](/posts/Alloys/cucrzr-copper-powder/) only after defining corrosion, electrical contact, coating, and joining requirements for the exact component.

## Powder specification by manufacturing route

The powder purchase specification should not begin and end with "316L, spherical." Define:

- UNS or agreed alloy designation and chemistry limits,
- atomization route, manufacturing site, and lot definition,
- particle-size limits with the sampling and measurement method,
- oxygen, nitrogen where relevant, moisture, and contamination controls,
- morphology, satellites, apparent or tap density, and named flow methods where useful,
- virgin, recovered, sieved, blended, or reused condition,
- package atmosphere, package size, storage, opening, and resealing controls,
- retained sample, genealogy, deviation, and change-notification rules,
- LPBF machine family and parameter revision, or binder-jet printer, binder, debinding, and sintering route.

Use the [metal-powder specification and COA guide](/posts/Alloys/metal-powder-specification-guide-psd-oxygen-flowability/) to separate supplier declarations from lot results. For LPBF, a [spreadability and layer-density trial](/posts/Alloys/lpbf-powder-spreadability-and-layer-density/) can reveal thin-layer behavior that a funnel-flow result does not. For binder jet, the established [316L binder-jet and MIM powder guide](/posts/Alloys/316l-powder-metal-injection-molding-and-binder-jet-parts/) explains why packing, binder interaction, debinding, sintering, and dimensional compensation belong to one route.

NIST's [binder-jetting research overview](https://www.nist.gov/additive-manufacturing/research-areas/technologies/binder-jetting) is a useful boundary: binder jetting fuses powder with a binder and requires its own measurement and process evidence. It should not be quoted as if it were an LPBF variant.

## Build an acceptance plan around the failure mode

| Requirement | Development evidence | Purchase-order decision |
| --- | --- | --- |
| Powder identity and consistency | Chemistry, interstitials, PSD, morphology, density or flow data, and lot genealogy | Name methods, sampling location, limits, reporting units, reuse state, and deviation authority |
| Printed or sintered material | Density or porosity method, microstructure, heat treatment, coupons, and route-specific properties | Define representative orientation, location, frequency, material state, and acceptance criteria |
| Channel and plate geometry | Channel dimensions, wall thickness, flatness, seal lands, and distortion after finishing | Identify critical features, datum scheme, measurement method, and stage of inspection |
| Internal cleanliness | Powder-removal demonstration, flushing, residue assessment, and accessible passage inspection | Set cleaning process, verification method, contamination limit, and rework rule |
| Surface and coating | Roughness map, edge condition, pre-treatment, coating coverage, adhesion, and defect review | Name surfaces, finish before coating, coating system, thickness method, witness pieces, and acceptance limits |
| Electrochemical performance | Representative corrosion and interfacial-contact-resistance testing in the project environment | Define solution, gas, potential, temperature, duration, preconditioning, area, and pass/fail limits |
| Fluid integrity | Leak, proof, pressure-drop, and flow-distribution tests | Define test medium, pressure, duration, temperature, leakage method, and flow tolerance |
| Durability | Thermal, electrochemical, start-stop, compression, and coating-cycle evidence | Set representative cycles, inspection intervals, failure definition, and disposition authority |

Test-method names without specimen preparation, exposure condition, and acceptance limits are incomplete. The buyer owns the application limits; the powder and build supplier should report what it actually controls.

## Make-or-buy decision

| Decision signal | Favor an additive route | Favor sheet, machining, or another route |
| --- | --- | --- |
| Geometry | Headers, ports, or three-dimensional flow features can be consolidated | The design is a thin repeated plate with stampable channels |
| Development cadence | Controlled design variants are needed before architecture freeze | Tooling and coating are already validated for production |
| Volume | Low or moderate volume supports build and finishing cost | Active-area volume makes sheet throughput decisive |
| Surface | Required faces are accessible for finishing and coating | Critical internal surfaces cannot be prepared or inspected |
| Verification | Powder removal, CT or other NDE, leak, flow, corrosion, and contact tests are feasible | Hidden regions prevent credible cleaning or acceptance |
| Business case | Eliminated assemblies and shorter test cycles exceed qualification cost | AM reproduces a conventional plate without measurable integration value |

## Bipolar-plate powder RFQ block

> Cell type: PEMFC, PEMWE, AEM, alkaline, SOFC-adjacent, or laboratory fixture:
>
> Plate side, reactants, coolant, cleaning fluids, contaminants, potential, temperature, pressure, and life:
>
> Part function: current-conducting bipolar plate, flow-field plate, separator, integrated header, manifold, or test hardware:
>
> Drawing revision, active area, thickness, channel geometry, seal lands, flatness, quantity, and development stage:
>
> Candidate routes: LPBF, binder jet plus sintering, sheet forming, machining, or hybrid manufacture:
>
> Alloy designation, chemistry, PSD and method, interstitials, morphology, flow or density methods, lot definition, and reuse state:
>
> Machine or printer family, parameter status, build orientation, layer thickness, binder, debinding, sintering, and dimensional compensation as applicable:
>
> Heat treatment, machining, polishing, passivation, surface preparation, coating, cleaning, and packaging:
>
> Required powder, coupon, microstructure, dimensional, surface, NDE, leak, flow, corrosion, contact-resistance, coating, and durability evidence:
>
> Powder-only, development build, finished plate, coating-ready part, or validated hardware scope:
>
> Destination, requested delivery date, certificate format, retained sample, and change-notification requirements:

An actionable inquiry states the cell environment and acceptance plan. A request for "15-45 micrometre 316L powder for fuel-cell plates" does not give a supplier enough information to recommend a defensible route.

## Application limits

This guide does not establish fuel-cell, electrolyzer, pressure, hydrogen, oxygen, corrosion, coating, electrical, or durability approval. It does not claim that 316L is acceptable on every side of a PEM water electrolyzer or that binder jet can produce a thin, sealed bipolar plate without route-specific proof.

The practical decision is to use LPBF or binder jet only where additive geometry creates measurable development or integration value, then qualify the powder, process, surface, coating, and finished plate as one system. For adjacent hardware outside the active plate, continue through [Hydrogen and Fuel Cell Hardware](/applications/hydrogen-and-fuel-cell-hardware/) and the dedicated [balance-of-plant selection guide](/posts/Alloys/metal-powder-fuel-cell-balance-of-plant-hardware/).
