---
title: H13 vs M300 Powder for AM Tooling
description: Compare H13 and M300 (18Ni300) powder for AM tooling by thermal duty, cracking risk, aging route and insert acceptance. Choose a grade and prepare a powder RFQ.
pubDate: 2026-04-12T09:00:00+08:00
updatedDate: 2026-09-09
category: Tooling
tags:
  - tool steel powder
  - tooling and mold inserts
  - H13
  - M300
  - additive manufacturing
featured: false
---

H13 and M300 are both strong AM tooling candidates, but they are not interchangeable. Teams usually compare them when the project is already beyond general engineering metal and has become a real tooling decision. That is the right moment to separate thermal-duty tooling from insert-driven tooling instead of treating both steels as equivalent.

Start with the service condition. H13 is a hot-work tool steel candidate when thermal cycling dominates. M300, also searched as 18Ni300 or 1.2709 maraging steel, is a candidate for precision tooling with a qualified aging route. Conformal cooling is possible with either: the presence of cooling channels alone does not select the alloy. Confirm any equivalent designation against the governing chemistry and specification.

For powder procurement, compare the [H13 grade and PSD options](/products/h13/) with the [M300 grade and PSD options](/products/m300/). If the grade is already fixed, go directly to an [H13 RFQ](/rfq/?product=h13) or [M300 RFQ](/rfq/?product=m300).

## Why H13 and M300 keep getting compared

Both alloys appear in AM tooling discussions because they solve expensive manufacturing problems. The geometry is often difficult, the value of conformal cooling is real, and the part has to survive more than a simple prototype cycle.

## Where H13 is usually stronger

H13 is a hot-work tool steel. Teams normally move toward it when the tooling duty includes:

- repeated thermal cycling
- hotter operating conditions
- dies or inserts exposed to thermal fatigue
- tooling where heat-related durability matters more than simple room-temperature hardness

That makes H13 a reasonable starting point for hot-work duty, not proof of tool life. In an [LPBF study of H13 microstructure and cracking](https://doi.org/10.1016/j.jmatprotec.2020.116802), different laser power and scan-speed windows produced different cracking tendencies. The buyer therefore needs evidence for the intended machine and build route as well as the powder chemistry. A nominal H13 designation or room-temperature hardness result is not enough to qualify a thermally cycled insert.

## Where M300 is usually stronger

M300 is usually easier to justify when the tooling case is precision- and insert-driven rather than strongly hot-work-driven. It is a common AM choice for:

- mold inserts
- conformal cooling designs
- precision tooling
- high-strength tooling components that benefit from an aging route

Treat the aged condition as a defined process, not a generic promise of high strength. An [LPBF 18Ni300 study comparing direct aging with solution treatment plus aging](https://doi.org/10.1016/j.msea.2023.144921) reported different strength and ductility outcomes for those two routes. That is why the proposed heat treatment, dimensional allowance and final-condition acceptance belong in the tooling specification. Published study results are not guaranteed properties of a supplied powder lot.

For injection mold sliders, lifters, angled side actions, and undercut-release details, the narrower [M300 mold slider and lifter page](/posts/Alloys/m300-powder-injection-mold-sliders-and-lifters/) is usually the cleaner follow-up because moving contact surfaces and machined datum faces change the insert discussion.

## Why teams lose time on this choice

The usual mistake is selecting the alloy based on reputation rather than service condition. Some teams choose H13 because it sounds more "tool steel." Others choose M300 because it is common in AM insert discussions. Neither is a reliable method.

The project should first answer these questions:

1. What peak temperature, temperature swing, dwell and cycle count will the tool face?
2. Is the current failure heat checking, abrasive wear, cracking, dimensional drift or inadequate cooling?
3. Can the channels be depowdered, inspected and leak-tested after the agreed manufacturing sequence?
4. Which build, heat-treatment, machining and surface-treatment route will be qualified?

That is what turns a steel comparison into a usable engineering decision.

## The practical takeaway

Shortlist H13 for hot-work service and M300 for suitable precision-insert duty after aging, then test the complete route against the actual failure mode. If tool temperature, cycle or acceptance criteria are unknown, keep the grade decision provisional. Neither a cooling-channel drawing nor a powder COA establishes service life.

For single-alloy guidance, see the dedicated [H13 powder guide](/posts/Alloys/h13-tool-steel-powder/) and [M300 powder guide](/posts/Alloys/m300-maraging-steel-powder/).

## Direct tooling comparison

| Decision | H13 | M300 |
| --- | --- | --- |
| Primary duty | Hot-work and thermal-cycle tooling | Precision inserts and high strength after aging |
| Typical parts | Die-casting inserts, hot-work tools, conformal-cooled hot tooling | Mold/core inserts, sliders, lifters and compact production tooling |
| Thermal route | Hardening and tempering route must be controlled | Aging route and dimensional response must be controlled |
| Main risk | Cracking, heat checking, thermal fatigue and distortion | Wear surfaces, aging distortion, polishing and moving interfaces |
| Cooling-channel acceptance | Depowdering, passage inspection and leak testing need an agreed route | The same checks apply; channel geometry is not an alloy-selection shortcut |
| Evidence before production | Build quality and final-condition tests relevant to the actual thermal duty | Final-condition strength/hardness, dimensions and surface/contact requirements |
| Better alternative | M300 when hot-work duty is limited | H13 when repeated high-temperature cycling dominates |

Specify the actual tool temperature, cycle, contact, coolant, load, wear surface, required hardness, channel geometry, machining and expected life. Request lot chemistry, PSD, morphology, COA, TDS/SDS and available SEM evidence for the chosen powder. Select the alloy from the service condition, then qualify the complete tool route.

## From tooling requirement to powder quotation

Separate the powder order from tool validation. For a powder quote, provide the grade or two candidate grades, AM process and machine, PSD, trial and repeat quantities, destination and required lot documents. Add the tooling duty and intended heat treatment as qualification context; do not assume the powder supplier is certifying a finished insert.

If a trial cracks, fails a leak test or misses final dimensions, pause the move to production and review build quality, channel cleaning and the thermal/machining sequence before ordering a larger lot. Changing powder grade alone may not address the failure.

Ready to evaluate a lot? [Request H13 powder](/rfq/?product=h13) or [request M300 powder](/rfq/?product=m300), and list any unresolved service or acceptance requirements in the same inquiry.
