---
title: "Laser Diffraction vs Dynamic Image Analysis for AM Powder PSD"
description: Compare laser diffraction, dynamic image analysis, and sieve testing for AM metal powder PSD, method transfer, oversize control, and supplier acceptance.
pubDate: 2026-07-14T00:17:00+08:00
category: Knowledge
tags:
  - metal powder
  - powder specification
  - particle size distribution
  - additive manufacturing
featured: false
---

Laser diffraction and dynamic image analysis can both report a metal powder particle-size distribution. They do not measure the same physical signal, do not necessarily use the same size descriptor or weighting, and should not be expected to return interchangeable D10, D50, and D90 values.

The buyer's decision is therefore not "Which instrument is more advanced?" It is:

> Which method measures the characteristic that controls this purchase decision, and can the supplier and incoming laboratory reproduce the same method?

For routine lot acceptance, repeatability against a qualified baseline is often more valuable than switching methods to obtain a preferred number. For coarse-particle contamination or morphology questions, an image or sieve method may provide evidence that a bulk laser-diffraction percentile does not.

## Short answer: choose from the purchasing question

| Purchasing question | Primary method to consider | Why | Important limitation |
| --- | --- | --- | --- |
| Is this lot consistent with the qualified PSD baseline? | The same locked method used for qualification, often laser diffraction | Efficient lot-to-lot percentile comparison | Results depend on dispersion, optical model, instrument, and procedure |
| Are shape and projected dimensions part of acceptance? | Dynamic image analysis | Captures individual particle images and supports size and shape descriptors | Two-dimensional projection, segmentation, orientation, and weighting affect results |
| Is a coarse oversize fraction physically present? | Dynamic image analysis or an applicable sieve method | Can examine/count large particles or retain a physical coarse fraction | Detection depends on sampled mass, presentation, and method range |
| Is a fine tail changing? | Locked laser-diffraction method with controlled dispersion | Sensitive across a broad distribution under defined settings | Agglomeration or dispersion energy can alter the reported tail |
| Can supplier and buyer results be compared? | Same method, preparation, reporting basis, and preferably a correlation study | Removes avoidable method effects | Same standard name alone may not make two instruments equivalent |
| Is the nominal LPBF cut acceptable? | PSD method plus process-specific fines/oversize rules | Connects distribution to the purchase window | PSD alone does not prove recoating or part quality |

Use the [lot sampling guide](/posts/Alloys/am-metal-powder-lot-sampling-for-psd/) before choosing an analyzer. A sophisticated method cannot repair a biased grab sample.

## What laser diffraction reports

[ISO 13320:2020](https://www.iso.org/standard/69111.html) describes laser-diffraction particle-size analysis through measured light-scattering properties. The optical model predicts the scattering response of a volumetric sum of spherical particles. For non-spherical particles, the resulting equivalent-sphere distribution can differ from methods based on other physical principles.

For metal powders, [ASTM B822-25](https://store.astm.org/standards/b822) covers particle-size distribution by light scattering and reports results as volume percent. ASTM also cautions that different measurement principles, instrument assumptions, sample handling, and preparation can produce different results; even instruments using light scattering may not be directly comparable without method control.

Laser diffraction is useful when:

- a qualified product baseline already uses it,
- D10, D50, D90, or a full volume distribution is needed,
- the sample can be dispersed consistently,
- lot-to-lot trending is more important than individual-particle images,
- the laboratory can lock instrument and analysis settings.

It does not directly describe particle shape. A reported diameter is model-dependent, not a caliper measurement of every particle.

## What dynamic image analysis reports

[ISO 13322-2:2021](https://www.iso.org/standard/72566.html) addresses dynamic image analysis, where particles in relative motion are optically captured and transferred to separated binary images for analysis. The standard covers instrument qualification and practical effects including motion blur, depth of field, and particle orientation.

Dynamic image analysis can support:

- individual-particle size descriptors,
- projected shape metrics,
- aspect ratio or elongation review,
- investigation of satellites, agglomerates, or irregular particles when the imaging and classification rules support it,
- counts or distributions focused on a coarse tail.

The method is not one universal result. The report must identify the selected descriptor, such as an equivalent-area diameter or a Feret dimension, the weighting basis, segmentation rules, presentation mode, and the number of accepted particle images. A number-weighted distribution can look very different from a volume-weighted distribution because many fine particles may contribute little volume.

## Why the two methods disagree

NIST compared [sieve analysis, dynamic imaging, laser diffraction, X-ray computed tomography, and scanning electron microscopy](https://www.nist.gov/publications/comparison-particle-size-distribution-and-morphology-data-acquired-using-lab-based-and) on nominally identical riffled stainless-steel powder samples. The study found differences partly because particles were not perfectly spherical and included multi-particle forms; each measurement principle responded differently to those features.

Method disagreement can come from several layers:

| Source of difference | Laser diffraction | Dynamic image analysis |
| --- | --- | --- |
| Physical signal | Light-scattering pattern | Captured two-dimensional particle image |
| Size concept | Optical equivalent-sphere diameter | Chosen image-based diameter or dimension |
| Typical weighting | Volume-based reporting | Number, area, or converted volume basis depending on report |
| Shape sensitivity | Indirect through model mismatch | Directly available from projected images and descriptors |
| Dispersion effect | Agglomerates and deagglomeration change scattering | Overlap, focus, orientation, and segmentation affect images |
| Coarse outliers | May be diluted in bulk percentiles or limited by sampled mass | Can be counted or classified if enough representative material is presented |
| Instrument transfer | Optical properties, model, range, and settings matter | Optics, resolution, thresholds, descriptors, and software rules matter |

This is why a laser-diffraction D90 limit should not be copied into a dynamic-image-analysis report without a bridge study. The name "D90" describes a percentile, but the underlying diameter and weighting may differ.

## Where sieve analysis still fits

[ASTM B214-22](https://store.astm.org/b0214-22.html) covers dry sieve analysis of metal powders with sieve openings from 45 to 850 um. That range makes sieve analysis useful for certain coarse distributions or oversize checks, but it is not a complete fine-powder method for every LPBF cut.

Sieve data are mass retained through physical apertures. Laser diffraction uses an optical model. Dynamic imaging uses particle projections. All three can be valuable, but their results answer different questions.

For a nominal 15-45 um LPBF powder, a buyer may use a locked laser-diffraction method for the main distribution and a separate agreed rule for coarse contamination. The [LPBF powder particle-size guide](/posts/Alloys/lpbf-powder-particle-size-guide/) explains why the nominal cut must still be connected to the alloy, machine, and process window.

## Lock the method before setting limits

An acceptance window should be established with the method that will be used to release and receive the powder. Record enough detail to reproduce it.

### Laser-diffraction method record

- governing method and edition,
- instrument and measurement range,
- wet or dry dispersion,
- dispersion medium where applicable,
- optical model and material inputs used by the procedure,
- sample preparation and deagglomeration controls,
- obscuration or concentration controls where applicable,
- repeat count and result-combination rule,
- reporting basis, percentiles, and full-distribution format,
- non-reportable and investigation rules.

### Dynamic-image-analysis method record

- governing method and edition,
- instrument, optics, and working size range,
- dry or wet particle presentation,
- image resolution and qualification checks,
- segmentation and touching-particle rejection rules,
- selected size and shape descriptors,
- number of accepted particle images or stopping rule,
- number, area, or volume weighting,
- coarse-particle and morphology classification rules,
- repeat and investigation rules.

The method record belongs in the product specification or referenced test procedure, not only in a laboratory's internal memory.

## A method-transfer decision matrix

| Situation | Recommended action | Do not do |
| --- | --- | --- |
| Supplier and buyer use the same instrument family and procedure | Run a correlation with shared representative samples and define allowable bias/repeatability | Assume model name alone guarantees agreement |
| Supplier uses laser diffraction; buyer uses dynamic imaging | Keep the supplier release method or qualify a new acceptance basis using paired data | Apply the same D10/D50/D90 limits to both reports |
| A laboratory changes dispersion from wet to dry | Treat it as a method change and establish comparability | Combine historical and new trends without review |
| New coarse-particle concern appears | Add a targeted image or sieve control with a representative sampled mass | Tighten D90 and assume the outlier risk is solved |
| Morphology degrades while volume PSD remains stable | Investigate with image-based shape evidence and process history | Declare the lot equivalent from laser percentiles alone |
| Incoming result fails but supplier result passes | First audit sampling, splitting, preparation, instrument settings, and reporting basis | Average the two values or select the preferred report |

## Worked acceptance example

Consider an established gas-atomized 316L LPBF powder released by laser diffraction.

1. Qualification records the supplier's laser-diffraction procedure and the baseline full distribution, not only D10, D50, and D90.
2. Incoming material is sampled under the agreed lot plan and reduced with a controlled splitter.
3. The buyer uses the same method basis or completes a documented correlation study with the supplier.
4. Dynamic image analysis is added for projected shape and coarse-particle investigation, with separate descriptors and limits.
5. The dynamic-image result is not substituted into the laser-diffraction acceptance columns.
6. If either method changes, paired retained samples are tested before the new procedure replaces the old baseline.

This creates two useful controls rather than two competing versions of the same number.

## Fine and coarse fractions need explicit rules

Terms such as "no fines" and "no oversize" are not testable specifications by themselves. Define:

- the size threshold,
- the measurement method,
- the reporting basis,
- the sampled mass or particle count,
- the allowed amount or investigation trigger,
- how agglomerates and attached satellites are classified,
- what happens after a nonconforming result.

The requested sensitivity should be realistic for the sample and method. A rare coarse contaminant may be missed if too little material is presented, regardless of instrument capability.

## PSD method fields for a powder RFQ

> Alloy and manufacturing route:
>
> AM process and machine family:
>
> Nominal PSD and required full-distribution data:
>
> Release method and standard edition:
>
> Laser diffraction, dynamic imaging, sieve, or combined control:
>
> Wet/dry preparation and permitted conditioning:
>
> Diameter descriptor and weighting basis:
>
> D10/D50/D90 and fines/oversize limits:
>
> Morphology or coarse-particle metrics:
>
> Lot sampling and sample-reduction procedure:
>
> COA fields and raw-data requirement:
>
> Method or instrument change-notification requirement:

The broader [metal powder specification and COA guide](/posts/Alloys/metal-powder-specification-guide-psd-oxygen-flowability/) can be used to add chemistry, oxygen, density, flow, morphology, packaging, and traceability to the same inquiry.

## When neither method is enough

Neither laser diffraction nor dynamic image analysis proves that a powder will spread uniformly, match a machine parameter set, or produce qualified parts. NIST's [AM Powder Metrology Laboratory](https://www.nist.gov/laboratories/tools-instruments/additive-manufacturing-powder-metrology-laboratory) investigates PSD alongside flowability, spreadability, and powder-layer density because feedstock behavior is multi-property and process-dependent.

Use PSD methods to control the characteristic they actually measure. Use powder-bed, build, and part evidence for process performance. That boundary makes the test program more credible and the supplier RFQ more comparable.
