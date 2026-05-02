---
title: "Metal Powder for 3D Printing: Materials, Size, Price"
description: A practical buyer guide to metal powder for 3D printing, covering alloy selection, LPBF and DED particle size, powder price drivers, documents, RFQ inputs, and supplier comparison.
pubDate: 2026-04-29T22:05:00+08:00
category: Knowledge
tags:
  - metal powder for 3D printing
  - 3D printing metal powder
  - additive manufacturing powder
  - particle size
  - powder price
featured: true
---

Metal powder for 3D printing is not a single commodity. The right powder depends on the alloy, process route, particle-size distribution, morphology, chemistry limits, reuse plan, qualification stage, and the part application.

A buyer searching for "metal powder for 3D printing" usually needs one of three things:

- a powder grade for a specific machine and process;
- a supplier shortlist for quotation;
- a technical explanation of why two powder quotes are not directly comparable.

This guide is written for that decision. It does not treat powder as a catalog item. It treats powder as the feedstock that controls recoating, density, surface finish, chemistry, repeatability, and final part risk.

## Quick answer

Start with the process and part application, then choose the alloy and particle-size window.

For LPBF, buyers commonly evaluate fine spherical powders such as 15-45 um or 15-53 um depending on alloy and machine preference. For EBM, DED, binder jet, MIM, and thermal spray, the powder window and acceptance logic can be very different. A useful RFQ states the process, alloy, PSD range, quantity, destination country, and documentation requirements in the first message.

The wrong way to buy is to ask for "cheap metal powder." The better way is to ask for powder that matches the print process, application risk, and release plan.

## Common metal powder families

### Titanium powders

Titanium powders such as Ti64, Grade 23, Grade 2, and TA15 are often used where strength-to-weight ratio, corrosion resistance, or biomedical and aerospace applications matter. Titanium is sensitive to oxygen pickup, so chemistry control, packaging, handling, and reuse discipline are central.

For titanium RFQs, buyers should define:

- alloy grade and standard expectation;
- LPBF, EBM, DED, or other process route;
- target particle-size distribution;
- oxygen and nitrogen limits if qualification matters;
- whether powder is for research, prototype, or production;
- certificate and lot-traceability requirements.

### Stainless steel powders

Stainless steel powders such as 316L and 17-4PH are common in manifolds, fixtures, brackets, process components, and corrosion-resistant parts. 316L is often selected for corrosion resistance and processability. 17-4PH is selected when heat-treatable strength is important.

The buyer should not treat "stainless powder" as one category. 316L and 17-4PH solve different problems, need different heat-treatment logic, and create different part-performance assumptions.

### Nickel alloy powders

Nickel powders such as IN718, IN625, and Hastelloy X are used for hot-side hardware, corrosion, high-temperature strength, chemical exposure, and aerospace or energy applications. These powders are rarely bought on price alone because chemistry and qualification risk matter.

For nickel alloy powder, buyers should pay attention to chemistry limits, PSD, morphology, lot traceability, certificate availability, and the supplier's ability to discuss the intended process.

### Aluminum powders

Aluminum powders such as AlSi10Mg are used where lightweight structures, thermal management, housings, and prototype hardware matter. Aluminum AM powder has its own handling and safety requirements, and the buyer should verify compatibility with the target machine and parameter set.

### Copper alloy powders

Copper and copper alloy powders such as CuCrZr are used for thermal and electrical applications: cold plates, heat sinks, coils, busbars, RF hardware, and conductive components. Conductivity is not automatic. It depends on alloy, process, density, heat treatment, and measurement method.

For copper powder inquiries, include whether the buyer cares most about conductivity, thermal performance, strength, or printability.

### Tool steel, cobalt chrome, and specialty powders

H13, M300, CoCrMo, tungsten-based alloys, and refractory materials each have narrow fit windows. The more specialized the alloy, the more important it is to state the final application instead of only the powder name.

## Particle size depends on process, not preference

Particle-size distribution is one of the first filters in powder selection. But PSD should follow the process.

| Process route | Common powder logic | Buyer concern |
| --- | --- | --- |
| LPBF | Fine spherical powder, often around 15-45 um or 15-53 um depending on alloy and machine. | Recoating stability, density, spatter, oxygen pickup, surface finish. |
| EBM | Often coarser than LPBF, especially for titanium routes. | Preheat behavior, powder recovery, oxygen control, lot stability. |
| DED | Coarser powder windows are common. | Flow through the powder feeder, deposition stability, catch efficiency. |
| Binder jet | Powder behavior depends on spreading, binder interaction, sintering, and shrinkage. | Packing, green strength, sintering response, final density. |
| MIM | Feedstock logic differs from AM powder-bed logic. | Powder-binder compatibility, debinding, sintering, part shrinkage. |

Do not ask for a particle size in isolation. The same alloy may be supplied in several PSD cuts for different manufacturing routes.

## What powder properties matter most

The core properties usually include:

- alloy chemistry;
- oxygen, nitrogen, carbon, and hydrogen limits where relevant;
- particle-size distribution with D10, D50, and D90;
- morphology and satellite content;
- flowability;
- apparent density and tap density;
- moisture control;
- internal porosity;
- lot traceability;
- packaging and storage method;
- certificate and test report scope.

Different projects weight these differently. A research sample may tolerate broader uncertainty. A recurring production program should not.

## Why two prices can be far apart

Metal 3D printing powder price is affected by more than alloy name.

Price drivers include:

- raw alloy cost;
- atomization route;
- yield of the target PSD cut;
- required sphericity and low satellite content;
- chemistry limits and oxygen control;
- lot size;
- packaging type;
- testing and documentation;
- export destination;
- whether the buyer needs a one-time sample or recurring controlled supply.

A low quote may be real, or it may hide a different particle-size window, looser chemistry, lower documentation scope, weaker packaging, or a non-equivalent lot size.

## How to compare powder quotes

Use this comparison structure before choosing a supplier.

| Comparison item | What to check |
| --- | --- |
| Alloy identity | Exact grade, chemistry range, and whether the supplier understands the application. |
| Process fit | LPBF, EBM, DED, binder jet, MIM, or other route. |
| PSD range | D10, D50, D90, fines, oversize, and actual distribution report where available. |
| Morphology | Sphericity, satellites, internal porosity, and powder images if needed. |
| Chemistry controls | Oxygen, nitrogen, carbon, hydrogen, and any alloy-specific limits. |
| Documentation | COA, PSD report, SDS, batch traceability, packaging record, export documents. |
| Quantity and packaging | Sample, pilot lot, recurring supply, bottle, drum, vacuum or inert packaging. |
| Lead time | Stock status, production time, test-report time, export lead time. |
| Application risk | Prototype, qualification, medical, aerospace, tooling, thermal, or industrial production. |

If two quotes do not match on these items, they should not be compared as the same product.

## What to send before RFQ

A practical RFQ should include:

- alloy grade or target application;
- process route such as LPBF, EBM, DED, MIM, binder jet, or thermal spray;
- particle-size expectation;
- quantity and delivery country;
- required documents such as COA, PSD report, SDS, oxygen data, or lot traceability;
- packaging preference;
- printer model if relevant;
- whether the powder is for research, trial, qualification, or production;
- schedule target and shipment constraints.

If the final part is already known, include it. A Ti64 inquiry for a lattice bracket is different from a Ti64 inquiry for an implant trial. A 316L inquiry for a manifold is different from a 316L inquiry for MIM filters.

## Supplier fit matters after the powder spec

The product specification comes first. Supplier fit comes next.

A useful supplier should be able to explain:

- why the recommended PSD window matches the process;
- what documents can be supplied with the lot;
- whether the powder is stock or made to order;
- how packaging protects the powder;
- how the quote changes with quantity;
- which assumptions are not included.

Generic claims such as "we supply all metal powders" do not reduce buyer risk. A serious supplier conversation connects alloy, process, powder properties, documentation, lead time, and application.

## Practical takeaway

For broad material selection, start with the [material centers](/materials/). For process-specific decisions, use the [process centers](/processes/). For supplier comparison, read the [additive manufacturing powder supplier guide](/posts/Knowledge/additive-manufacturing-powder-supplier-guide/). For budget planning, continue with the [metal powder price guide](/posts/Alloys/metal-powder-for-3d-printing-price-guide/).
