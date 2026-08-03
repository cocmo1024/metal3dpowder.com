---
title: "How to Sample an AM Metal Powder Lot for Reliable PSD Results"
description: Build a representative metal powder sampling plan for PSD testing, from lot definition and increments to sample splitting, retention, and RFQ fields.
pubDate: 2026-07-14T00:16:00+08:00
category: Knowledge
tags:
  - metal powder
  - powder specification
  - powder sampling
  - particle size distribution
  - additive manufacturing
featured: true
---

A particle-size result can be precise for the material inside the analyzer and still be wrong for the powder lot. The missing link is sampling: how a few grams sent to a laboratory came to represent drums, bottles, or a moving production stream.

For an AM powder buyer, the useful question is not simply "How much powder should we test?" It is:

> What material population are we accepting, where can segregation occur, and how will increments be collected and reduced without changing that population?

This guide turns that question into a practical sampling plan for incoming powder, supplier lot release, development trials, and recurring production. It does not replace a governing quality plan or a purchased standard. It shows what buyers and suppliers need to agree before a D10, D50, or D90 value becomes acceptance evidence.

## Start with the decision, not the scoop

Define the acceptance decision before selecting a sampler.

| Decision | Material population | Sampling point | Result should support |
| --- | --- | --- | --- |
| Supplier lot release | Powder assigned to one controlled production lot | Preferably a moving stream during controlled transfer or packaging | Release of the manufactured lot |
| Incoming shipment acceptance | Containers and quantities received under one purchase lot | Agreed containers and locations, with container identity retained | Accept, investigate, or reject the received lot |
| Container investigation | One damaged, opened, settled, or suspect container | Multiple depths or positions using a suitable packaged-powder method | Determine whether the issue is local or representative |
| Machine-feed investigation | Powder at the feed, dispenser, overflow, or recovery point | Process-specific locations and times | Diagnose segregation or handling changes, not release an unopened supplier lot |
| Reused-powder control | Powder with a defined exposure, recovery, sieving, and blending history | At the controlled blend or transfer point | Verify the managed powder state for the next build cycle |

Do not combine these populations without an explicit rule. A sample from machine overflow does not automatically represent unopened virgin powder. A sample from the top of one bottle does not automatically represent every container in a shipment.

## The terms that keep a plan clear

The exact terminology should follow the applicable standard and quality system, but a practical plan normally distinguishes four levels:

- **Increment:** one quantity collected at a particular place and time.
- **Composite or gross sample:** increments combined to represent the defined lot or sublot.
- **Laboratory sample:** material sent to the laboratory after controlled reduction.
- **Test portion:** the final quantity introduced into a specific test.

Confusing these levels creates a common failure. A team may collect several good increments, mix them, and then destroy representativeness by taking one spoonful from the top of the composite container. Collection and reduction both matter.

[ASTM B215-20(2025)](https://store.astm.org/b0215-20r25.html) describes sampling practices for metal powders and emphasizes that every increment should have a non-zero and, where possible, equal probability of selection without the procedure altering the material. It also identifies moving-powder sampling as the preferred route when practicable and describes packaged-powder and sample-reduction practices.

[ISO 14488:2007 with Amendment 1:2019](https://www.iso.org/standard/39988.html) addresses sampling and sample splitting for particulate-property measurements. ISO currently lists the standard as published and under revision, so the edition and amendment used by a contract should be stated rather than assumed.

## Why a top grab is weak evidence

Metal powder can segregate during collection, filling, transport, vibration, pouring, and repeated opening. Fine and coarse fractions may not remain uniformly distributed through a container. A top scoop is convenient, but convenience does not give every portion of the lot a realistic chance of selection.

NIST research on [sources of feedstock variation in powder bed fusion](https://www.nist.gov/publications/characterization-feedstock-powder-bed-fusion-process-sources-variation-particle-size) examined transportation, handling, controlled extraction, sampling, and powder spreading. The practical purchasing lesson is that location and handling history must accompany a PSD result.

A top grab may still be useful for a deliberately local investigation, such as checking visible contamination near an opened lid. It should be labeled as a local sample, not silently reported as the lot result.

## Choose the sampling route from the powder condition

| Powder condition | Preferred planning approach | Main control | Main failure risk |
| --- | --- | --- | --- |
| Moving powder during controlled transfer | Take increments across the transfer interval and combine them | Timing and full-stream access | Sampling only the beginning or end of the transfer |
| Sealed drums or bottles | Select containers under the quality plan and collect representative increments with an appropriate device | Container selection, depth access, tool cleanliness | Top-only grab or unrecorded container mixing |
| Small development quantity | Define the supplied unit as the population and reduce it using a controlled splitter | Preserve fines and identify opened units | Pouring off a convenient portion |
| Recovered or reused powder | Sample after the defined sieving and blending step, or at another documented state | Powder history and blend homogeneity | Mixing powder states or build histories |
| Suspect container | Keep it separate and investigate multiple positions | Preserve the anomaly and chain of custody | Blending away the evidence before investigation |

The plan should identify the actual device and procedure. ASTM B215 discusses a hollow tubular slot sampler for packaged powders and chute splitting or a spinning riffler for reducing a composite sample. The best method depends on container geometry, powder behavior, quantity, safety controls, and the governing procedure.

## A seven-step lot sampling workflow

### 1. Define the lot and sublots

Record the manufacturer, powder grade, production lot, packaging units, net mass, powder condition, and any sublot or packaging sequence. If two atomization runs or two reuse histories are combined, the quality plan must explicitly allow that combination.

### 2. Name the tests and disposition rule

List PSD, chemistry, oxygen, flow, density, morphology, or contamination tests separately. One laboratory sample may not be appropriate for every test, and a test portion used for one method may be too small or altered for another.

### 3. Select increments before opening containers

Define which containers, transfer times, depths, or positions can be selected. The selection rule should be documented before results are known. For critical programs, the buyer's statistical or contractual sampling plan controls the number of units and increments.

### 4. Collect without changing the material

Use clean, compatible tools and controlled handling. Prevent loss of fines, foreign-particle pickup, moisture exposure, or accidental mixing between alloys. Powder safety, grounding, personal protection, and local handling requirements still apply; [ISO/ASTM 52907](https://www.iso.org/standard/73565.html) covers characterization topics but explicitly does not replace safety controls.

### 5. Combine only when the decision calls for a composite

A composite can support lot-level acceptance when the plan allows it. Keep individual container samples separate when the objective is to locate variation. The same sampling event can produce both a composite and retained unit-level material if the program requires investigation capability.

### 6. Reduce with a controlled splitter

Do not repeatedly pour or spoon material until the mass looks right. Use the approved reduction procedure, such as a suitable chute splitter or rotary riffler, and document the sequence. Reduction should create equivalent portions without selectively losing fines or coarse particles.

### 7. Seal, label, retain, and transfer

Record the lot, container or stream location, date, operator, device, environment where relevant, sample mass, reduction method, final containers, requested tests, and deviations. Seal laboratory and retention samples in packaging suitable for the powder.

## Sample mass is method-dependent

There is no responsible universal answer such as "send 100 g" for every AM powder PSD test.

The required mass depends on:

- the largest relevant particle or oversize limit,
- the expected distribution width,
- the test method and instrument,
- wet or dry dispersion,
- repeats and interlaboratory checks,
- other tests sharing the sample,
- retention and investigation requirements,
- laboratory preparation losses.

Ask the laboratory for its minimum test portion and recommended laboratory-sample mass, then design the composite and splitting steps around that requirement. Sending only the instrument minimum leaves no material for repeat testing or dispute resolution.

## PSD sample preparation must be locked

Sampling ends where method preparation begins, but the handoff must be controlled. A PSD instruction should state:

- whether the result uses laser diffraction, dynamic image analysis, sieve analysis, or another method,
- the reporting basis and required percentiles,
- wet or dry dispersion,
- any permitted deagglomeration or conditioning,
- how repeats are combined,
- how fines, oversize, or non-reportable results are handled,
- whether the laboratory may subsample again and by what method.

The [laser diffraction versus dynamic image analysis guide](/posts/Alloys/laser-diffraction-vs-dynamic-image-analysis-metal-powder-psd/) explains why D10, D50, and D90 cannot be transferred casually between methods. The broader [metal powder specification and COA guide](/posts/Alloys/metal-powder-specification-guide-psd-oxygen-flowability/) shows where PSD sits beside chemistry, oxygen, morphology, density, and flow.

## Illustrative incoming-lot plan

The example below is a planning structure, not a universal minimum.

| Field | Illustrative entry |
| --- | --- |
| Population | One supplier production lot delivered in eight sealed containers |
| Decision | Incoming acceptance for PSD and lot chemistry |
| Container selection | Defined by the buyer's approved sampling plan before opening |
| Increment method | Documented packaged-powder procedure suitable for the container |
| Composite | PSD increments combined only if the purchase plan permits lot-level compositing |
| Reduction | Controlled splitter used to prepare laboratory and retention samples |
| Method handoff | Laboratory receives the agreed PSD method, preparation, basis, and acceptance window |
| Traceability | Every increment and split linked to lot and selected container identities |
| Disposition | Accept, investigate, or reject according to the purchase specification |

If the laboratory result fails, retained material and container identity make a useful investigation possible. Without them, the team may be unable to distinguish lot variation from a sampling or splitting error.

## Failure modes to catch before testing

| Failure mode | Why it weakens the result | Corrective control |
| --- | --- | --- |
| One scoop from one container | The sample may represent only one location | Use the approved increment and container-selection plan |
| Pouring a composite into two bottles | Segregation can occur during the split | Use a controlled sample splitter |
| Unlabeled mixed containers | The result cannot be traced or investigated | Preserve unit and lot identity through every split |
| Cleaning method not recorded | Residue or cross-alloy contamination may be introduced | Define tool material and cleaning verification |
| Fines lost to ventilation or transfer | Reported PSD can shift coarser | Use contained handling and document losses or deviations |
| Laboratory changes sample preparation | Results may no longer match the qualified method | Put preparation and permitted conditioning in the request |
| No retention sample | Repeat or dispute testing becomes difficult | Define retention mass, package, location, and duration |

## Sampling fields for a powder RFQ or quality agreement

Include these fields when PSD is used for acceptance:

> Alloy and powder production lot definition:
>
> Supplied quantity and packaging units:
>
> Virgin, blended, conditioned, or reused powder state:
>
> Sampling standard and edition:
>
> Moving-stream or packaged-powder sampling point:
>
> Container and increment selection rule:
>
> Composite-sample rule:
>
> Sample reduction method:
>
> Laboratory and retention sample requirements:
>
> PSD method, preparation, reporting basis, and acceptance limits:
>
> Chain-of-custody and deviation records:
>
> Change-notification requirement:

For a new supplier, connect this block to the [AM metal powder supplier qualification guide](/posts/Alloys/additive-manufacturing-powder-supplier-guide/). A supplier should be able to explain not only the reported PSD but also how the tested material represented the released lot.

## The acceptance boundary

A representative PSD sample improves feedstock evidence. It does not prove machine spreadability, parameter compatibility, finished-part density, or application qualification. Those require process and part evidence.

The defensible sequence is: define the population, collect representative increments, reduce them without bias, lock the analytical method, retain traceability, and then interpret the result within the actual AM process.
