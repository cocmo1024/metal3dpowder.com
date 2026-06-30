# Content Inventory and Incremental Plan - 2026-06-30

## Site positioning

Metal3DPowder.com is a B2B metal powder knowledge site for overseas buyers, AM engineers, application owners, and sourcing teams evaluating powder by alloy, process route, part family, and service environment. The business goal is to attract real powder inquiries from application domains where material choice, AM route, corrosion risk, thermal duty, documentation, and inspection affect buying decisions.

The site should keep every new page tied to:

- alloy and powder name
- LPBF, DED, MIM, binder jet, EBM, PSD, oxygen, flowability, and traceability where relevant
- one application family and realistic part classes
- RFQ information that helps the buyer describe the powder or printed part correctly

## Stock inventory before update

- Markdown article count before this update: 105.
- Existing clusters already covered titanium, stainless steel, nickel alloy, copper alloy, tool steel, aluminum, cobalt chrome, AI liquid cooling, photonics/RF, aerospace, defense sustainment, UAV payloads, medical/dental, semiconductor fluid hardware, hydrogen, power electronics/EV, energy/propulsion, nuclear/SMR support, geothermal brine, marine/desalination, fusion, tooling/mold inserts, industrial automation/robotics, humanoid robot joints, MIM/binder jet, LPBF, EBM, DED, and knowledge guides.
- Recent application pages already covered SMR auxiliary-fluid manifolds, geothermal brine hardware, seawater desalination hardware, robot gripper tooling, hypersonic hot-gas test hardware, AI data center coolant manifolds, CPO cold plates, hydrogen electrolyzer plates, and fusion high-heat-flux cooling.

## Duplicate-prevention scan

Keyword scan found no dedicated article or application hub for:

- carbon capture hardware
- CCUS powder hardware
- amine-service manifolds
- CO2 conditioning hardware
- CO2 compression-skid instrumentation hardware
- direct carbon capture or CO2 processing flow components

Existing adjacent pages are not duplicates:

- `in625-powder-geothermal-brine-heat-exchanger-and-valve-hardware` targets hot mineral brine, scaling, dissolved gases, and geothermal heat-exchanger or valve hardware.
- `in625-powder-seawater-desalination-pump-valve-and-brine-hardware` targets seawater, brine concentrate, pump, valve, and chloride-side desalination hardware.
- `in625-powder-corrosion-heavy-hot-side-hardware` is a broad hot-corrosion page without CCUS media details.
- `316l-vs-nickel-powder-for-corrosion-side-manifolds` is a broad material comparison, not a dedicated CCUS application article.
- `in625-powder-chemical-nozzles-and-injector-blocks` covers dosing and injector geometry, not amine solvent loops or CO2 conditioning/compression hardware.

## Recent and long-term signals used

- IEA CCUS page says around 45 commercial facilities are already operating and that momentum has grown substantially, with over 700 projects in different stages of development: https://www.iea.org/energy-system/carbon-capture-utilisation-and-storage
- IEA 2026 commentary says policy and financing momentum sustained CCUS progress in 2025 despite delays and cancellations: https://www.iea.org/commentaries/policy-and-financing-momentum-sustain-ccus-progress-despite-setbacks
- DOE carbon management project page lists point-source carbon capture, CO2 transport, storage, conversion, and direct air capture across industrial sectors such as cement, ethanol, hydrogen, iron and steel, pulp and paper, ammonia, power generation, and natural gas processing: https://www.energy.gov/edf/carbon-management-projects
- IEAGHG corrosion and materials selection study covers corrosion risks and material selection across CCS systems, including capture plants, CO2 transport, and injection wells: https://ieaghg.org/publications/corrosion-and-selection-of-materials-for-carbon-capture-and-storage/
- NETL maintains carbon transport and storage reference materials, useful for long-term project and infrastructure context: https://www.netl.doe.gov/coal/carbon-storage/publications

## Selected incremental topic

- Title: `IN625 Powder for Carbon Capture Amine-Service and CO2 Compression Hardware`
- Slug: `in625-powder-carbon-capture-amine-service-and-co2-compression-hardware`
- URL pattern: `/posts/Alloys/in625-powder-carbon-capture-amine-service-and-co2-compression-hardware/`
- Category: `Nickel`
- Primary intent: IN625 powder for carbon capture amine-service and CO2 compression hardware.
- Secondary intent: nickel alloy powder for CCUS process hardware, IN625 amine-service manifolds, IN625 wet CO2 instrumentation blocks, IN625 CO2 conditioning hardware, IN625 DED repair overlay for carbon capture plants.

## Content quality guardrails

The article intentionally avoids broad CCUS policy commentary and does not claim that every carbon capture part should be additively manufactured or made from IN625. It focuses on compact or repair-led corrosion-critical hardware where amine chemistry, wet CO2, contaminants, condensate, drainability, pressure/leak testing, and inspection can affect material choice.

The article separates CCUS hardware from existing geothermal and desalination brine pages, preventing near-duplicate intent. It also routes moderate stainless decisions back to 316L pages and routes unresolved stainless-to-nickel decisions through the existing comparison page.

## Internal link plan

Outgoing links from the new article:

- main IN625 powder guide
- 316L stainless steel powder guide
- 316L manifold and fluid-path guide
- 316L vs nickel powder comparison
- IN625 geothermal brine hardware
- IN625 seawater desalination hardware
- IN625 chemical nozzles and injector blocks
- IN625 corrosion-heavy hot-side hardware
- DED powder vs wire feedstock guide
- LPBF powder particle size guide
- metal powder specification guide
- Nickel Alloy Powder hub
- Energy and Propulsion Hardware hub
- Carbon Capture and CO2 Processing Hardware hub
- LPBF Powder hub
- DED Powder hub

Inbound links added:

- `gh3625-in625-powder`
- `in625-powder-corrosion-heavy-hot-side-hardware`
- `316l-vs-nickel-powder-for-corrosion-side-manifolds`
- Nickel Alloy Powder hub
- Energy and Propulsion Hardware hub
- new Carbon Capture and CO2 Processing Hardware hub
- LPBF Powder hub
- DED Powder hub

## Long-term content direction after this update

The carbon capture hub opens a controlled CCUS/CO2-processing cluster without turning the site into a generic climate technology blog. Future pages should be created only if they stay tied to alloy, powder, process, and part family:

- 316L powder for moderate carbon capture instrumentation manifolds and clean auxiliary blocks
- IN625 or Hastelloy X comparison for solvent reboiler, hot gas, or chemical service hardware if enough source support exists
- DED IN625 powder for localized repair or corrosion-resistant overlays in CO2 processing skids
- AlSi10Mg or 316L powder for direct air capture module housings only if the use case is clearly powder-led and not generic DAC policy content

Avoid generic carbon capture economics, tax-credit, pipeline-policy, or climate-opinion articles unless the page is anchored to a real powder decision.
