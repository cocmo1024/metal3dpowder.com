export interface ArticleDecisionGuide {
  title: string;
  introduction: string;
  checks: Array<{
    label: string;
    question: string;
  }>;
  verification?: string;
  acceptance: string;
}

const guides: Record<string, ArticleDecisionGuide> = {
  'hastelloy-x-powder-furnace-and-hot-gas-hardware': {
    title: 'Define the hot-gas duty before selecting the powder',
    introduction:
      'A furnace fixture, combustor-adjacent part, burner component, and instrumented hot-gas article can share an alloy family while requiring different evidence. Resolve the service envelope before treating Hastelloy X as the answer.',
    checks: [
      { label: 'Atmosphere', question: 'State the gas chemistry, contaminants, pressure, peak temperature, dwell time, and number of thermal cycles.' },
      { label: 'Failure mode', question: 'Rank oxidation, creep, thermal fatigue, distortion, cracking, erosion, and joining risk for the actual component.' },
      { label: 'Part route', question: 'Define wall thickness, internal flow features, build orientation, support removal, heat treatment, machining, and inspection access.' },
      { label: 'Alloy comparison', question: 'Compare IN718 when strength dominates and IN625 when corrosion or fabrication dominates; do not select from temperature alone.' },
    ],
    acceptance:
      'Approve the powder route only after the lot evidence, machine route, thermal condition, defect plan, and service-specific test basis are linked to the same configuration.',
  },
  'm300-maraging-steel-powder': {
    title: 'Separate powder acceptance from tool performance',
    introduction:
      'M300 is purchased for a tooling outcome, not simply for a chemistry name. The buying decision should connect the powder lot to aging response, dimensional recovery, cooling-channel integrity, and the production duty of the finished insert.',
    checks: [
      { label: 'Tool duty', question: 'Define resin or work material, contact pressure, temperature cycle, abrasive exposure, expected production volume, and maintenance strategy.' },
      { label: 'Thermal design', question: 'Provide channel diameter, wall distance, coolant, pressure, leak requirement, cleaning access, and the thermal objective of the insert.' },
      { label: 'Post-process', question: 'State stress relief, aging condition, hardness target, machining stock, polishing, datum strategy, and distortion allowance.' },
      { label: 'Comparison', question: 'Use H13 when repeated hot-work thermal fatigue dominates; use M300 when post-aged strength, precision, and cooling geometry lead the decision.' },
    ],
    verification:
      'For a repeat-production insert, record the baseline cooling result and the target improvement, then preserve the tool drawing revision, build orientation, aging record, final machining report, channel inspection, and maintenance history. This turns the AM route into a controlled production decision rather than a one-time successful build.',
    acceptance:
      'The approval package should identify powder lot, build condition, aging condition, final hardness method, channel inspection, leak test, and dimensional report for the actual tool route.',
  },
  'ta1-cp-titanium-powder': {
    title: 'Confirm the exact CP titanium designation first',
    introduction:
      'TA1, Grade 1, Grade 2, and generic commercially pure titanium are not automatic equivalents. The inquiry must anchor chemistry, interstitial limits, service environment, and final acceptance to one referenced designation.',
    checks: [
      { label: 'Grade identity', question: 'Name the governing designation and edition, chemistry limits, oxygen, nitrogen, hydrogen, iron, and any tighter project-specific controls.' },
      { label: 'Service', question: 'For chemical hardware, define media, concentration, temperature, pressure, cleaning, surface condition, joining, and leak requirements.' },
      { label: 'Medical boundary', question: 'For device work, identify the responsible manufacturer, intended use, cleaning, sterilization, biocompatibility, validation, and regulatory route.' },
      { label: 'Strength tradeoff', question: 'Compare Ti64 when load and fatigue dominate; CP titanium should not be selected only because corrosion or biocompatibility is mentioned.' },
    ],
    acceptance:
      'Keep powder acceptance, printed-part properties, corrosion evidence, and any device or pressure qualification as separate gates with named owners and records.',
  },
  '17-4ph-powder-metal-injection-molding-and-binder-jet-parts': {
    title: 'Make the densification route part of the grade decision',
    introduction:
      'For MIM and binder jetting, feedstock behavior, debinding, shrinkage, sintering atmosphere, and final heat treatment can control the result as strongly as the nominal 17-4PH chemistry.',
    checks: [
      { label: 'Feedstock route', question: 'Identify MIM or binder jet, powder size basis, binder system or print system, powder loading, recycling policy, and supplier change control.' },
      { label: 'Dimensional plan', question: 'Define green-part support, debinding method, shrinkage compensation, distortion allowance, machining stock, and final datum inspection.' },
      { label: 'Final condition', question: 'State density method, heat-treatment condition, hardness, strength, corrosion, surface, and any magnetic or fatigue requirements.' },
      { label: 'Alternative', question: 'Compare 316L where corrosion and ductility lead; select 17-4PH only when the precipitation-hardened final condition is defined.' },
    ],
    acceptance:
      'Do not approve from powder chemistry alone. Require an agreed powder-to-sintered-part route and lot-linked dimensional, density, heat-treatment, and mechanical evidence.',
  },
  '17-4ph-powder-oil-gas-valve-components-and-pump-hardware': {
    title: 'Screen the environment before choosing 17-4PH',
    introduction:
      'A valve body, trim part, pump component, and downhole mechanism can place very different corrosion, wear, pressure, and qualification demands on the same grade name.',
    checks: [
      { label: 'Environment', question: 'State fluids, water content, chlorides, H2S or CO2 exposure, temperature, pressure, velocity, solids, and upset conditions.' },
      { label: 'Component duty', question: 'Define pressure boundary, moving or sealing surface, wear pair, impact, fatigue, dimensional tolerance, and repair expectation.' },
      { label: 'Material condition', question: 'Specify the referenced 17-4PH grade, heat-treatment condition, hardness limits, corrosion basis, surface route, and NDE.' },
      { label: 'Go/no-go comparison', question: 'Compare 316L or IN625 when corrosion dominates; do not use 17-4PH as a generic oilfield stainless upgrade.' },
    ],
    acceptance:
      'The quotation should link powder lot, build and heat-treatment route, pressure or leak testing, dimensional inspection, and service-specific material acceptance.',
  },
  '17-4ph-powder-stronger-workholding-and-jig-hardware': {
    title: 'Translate fixture duty into measurable acceptance',
    introduction:
      'A stronger fixture is only valuable when stiffness, wear, repeatability, weight, interfaces, and production life are defined. The powder selection should follow those requirements rather than a generic strength claim.',
    checks: [
      { label: 'Load case', question: 'Define clamp force, bending and impact loads, duty cycle, safety factor, temperature, coolant, chips, and accidental overloads.' },
      { label: 'Interfaces', question: 'Identify datums, bushings, threads, wear pads, replaceable details, contact finish, flatness, and repeatability requirements.' },
      { label: 'Manufacturing route', question: 'State build orientation, support access, heat treatment, machining stock, distortion control, and inspection sequence.' },
      { label: 'Economic gate', question: 'Confirm that mass reduction, consolidation, internal routing, or geometry creates value beyond machining the fixture conventionally.' },
    ],
    acceptance:
      'Approve against the finished fixture drawing, load case, heat-treatment condition, interface inspection, and repeatability test—not against powder data alone.',
  },
  '316l-powder-metal-injection-molding-and-binder-jet-parts': {
    title: 'Specify the sintered 316L outcome, not only the feedstock',
    introduction:
      'MIM and binder jet projects need a controlled path from powder size and binder behavior through debinding, shrinkage, sintering atmosphere, density, and final corrosion performance.',
    checks: [
      { label: 'Production route', question: 'Identify MIM or binder jet, equipment family, binder or print system, powder loading, recycling, and lot-change controls.' },
      { label: 'Shrinkage', question: 'Define compensation method, green handling, support strategy, distortion allowance, machining stock, and critical dimensions.' },
      { label: 'Final properties', question: 'State density method, chemistry after sintering, surface condition, corrosion basis, leak requirement, and mechanical test condition.' },
      { label: 'Grade comparison', question: 'Compare 17-4PH where strength and hardness lead; retain 316L when corrosion, ductility, and non-hardened behavior fit the duty.' },
    ],
    verification:
      'Separate qualification of the material and process from ongoing production control. The control plan should state incoming powder checks, feedstock or printer checks, furnace loading rules, witness strategy, dimensional sampling, nonconformance handling, and when a material, binder, machine, or cycle change requires revalidation.',
    acceptance:
      'Require lot-linked sintered-part evidence and dimensional capability for the selected route. LPBF data cannot be transferred to MIM or binder jet acceptance.',
  },
  '316l-vs-17-4ph-powder': {
    title: 'Choose between corrosion margin and hardenable strength',
    introduction:
      'The useful comparison is not which stainless powder is better. It is whether the part is limited by corrosion and ductility, or by strength, hardness, wear, and a controlled precipitation-hardening route.',
    checks: [
      { label: 'Service driver', question: 'Rank corrosion, strength, hardness, wear, fatigue, temperature, cleanliness, magnetism, and joining for the finished part.' },
      { label: 'Material condition', question: 'State the exact specification, heat-treatment condition, surface condition, and test orientation behind every compared value.' },
      { label: 'Process fit', question: 'Tie PSD and powder condition to LPBF, binder jet, or MIM; do not transfer a process window between routes.' },
      { label: 'Acceptance', question: 'Define density or defect method, chemistry, hardness, tensile or corrosion tests, dimensions, NDE, and traceability before requesting price.' },
    ],
    acceptance:
      'Select 316L or 17-4PH only after the same service case and manufacturing condition are compared. Typical-property tables without condition and method are not approval evidence.',
  },
  'alsi10mg-powder': {
    title: 'Turn “printable aluminum” into a controlled LPBF route',
    introduction:
      'AlSi10Mg is a practical starting point, but reflectivity, oxide condition, heat flow, machine compatibility, thermal treatment, and orientation can materially change the finished result.',
    checks: [
      { label: 'Powder-machine fit', question: 'Define laser and machine family, PSD method, fines and oversize control, morphology, apparent density, flow or spreadability, and packaging.' },
      { label: 'Part geometry', question: 'State wall thickness, overhangs, thermal mass transitions, enclosed powder-removal features, support access, and dimensional priorities.' },
      { label: 'Final condition', question: 'Specify stress relief or heat treatment, build orientation, machining, surface finish, density method, and mechanical or thermal test condition.' },
      { label: 'Material boundary', question: 'Compare copper when conductivity dominates and another alloy family when wear or elevated-temperature duty controls the design.' },
    ],
    verification:
      'When comparing quotations, normalize the information first: same alloy specification, PSD method, quantity, packaging, delivery destination, document scope, and powder condition. Then compare machine evidence and the final heat-treated condition. A lower powder price is not meaningful if the intended LPBF route or inspection basis is missing.',
    acceptance:
      'Approve the combination of lot, machine, parameter status, orientation, heat treatment, and inspection—not a nominal “15–45 µm AlSi10Mg” label.',
  },
  'cocrmo-vs-stainless-powder-wear-critical-industrial-hardware': {
    title: 'Define the wear system before comparing alloy families',
    introduction:
      'Wear performance belongs to a contact system. Load, motion, counterface, lubrication, debris, corrosion, finish, hardness, and geometry must be known before comparing cobalt chrome with stainless steel.',
    checks: [
      { label: 'Tribology', question: 'State sliding, rolling, impact, fretting, or abrasive motion; load; speed; counterface; lubricant; contamination; and target life.' },
      { label: 'Environment', question: 'Define fluids, temperature, corrosion, cleaning, particle release, galling, and any hygiene or regulated-use constraints.' },
      { label: 'Final surface', question: 'Specify heat treatment, hardness, machining, coating if any, roughness, geometry, dimensional fit, and wear-test method.' },
      { label: 'Alloy route', question: 'Use cobalt chrome when its wear/corrosion combination is justified; retain stainless when machinability, cost, and service evidence are stronger.' },
    ],
    verification:
      'Build a representative wear test around the actual contact pair and environment. Record specimen geometry, surface preparation, counterface, load, motion, lubricant or service fluid, temperature, duration, debris, mass or dimensional loss, friction signal, and post-test surface examination so that alloy routes can be compared consistently.',
    acceptance:
      'Powder chemistry and generic hardness values do not prove wear life. Require finished-surface and representative contact-pair evidence for the selected route.',
  },
  'cucrzr-copper-powder': {
    title: 'Specify conductivity and strength in the same material condition',
    introduction:
      'CuCrZr decisions fail when conductivity is quoted from one condition and strength from another. Powder, build parameters, density, solution treatment, aging, and test temperature must form one traceable route.',
    checks: [
      { label: 'Alloy identity', question: 'State CuCrZr chemistry, oxygen and contamination controls, atomization route, lot, PSD method, morphology, and packaging.' },
      { label: 'Machine fit', question: 'Identify laser wavelength and machine family, parameter status, build orientation, channel geometry, support removal, and powder evacuation.' },
      { label: 'Thermal condition', question: 'Define solution and aging route, conductivity test method and temperature, mechanical test condition, density, and surface state.' },
      { label: 'Application evidence', question: 'Add pressure, leak, thermal-cycle, electrical-contact, joining, or wear tests according to the actual cold plate, coil, or contact duty.' },
    ],
    verification:
      'CuCrZr quotations should report conductivity with the method, units, test temperature, specimen orientation, density, and thermal condition. Strength or hardness values must identify that same condition. For internal channels, also define powder evacuation, cleaning, CT or other inspection, pressure and leak testing, joining interfaces, and how the thermal cycle will be validated on representative geometry. Record the rejected copper alternatives and the reason each failed the strength, conductivity, processability, qualification, or commercial requirement.',
    acceptance:
      'Approve only when conductivity, mechanical properties, geometry, and leak or contact evidence all refer to the same alloy and post-build thermal condition.',
  },
  'ebm-powder-size-guide': {
    title: 'Select EBM powder from the preheated powder-bed system',
    introduction:
      'EBM powder selection cannot be reduced to a coarser nominal size range. The powder must suit the machine, preheat and sintering behavior, raking system, layer strategy, vacuum environment, charge control, recovery route, and the alloy-specific build window.',
    checks: [
      { label: 'Machine basis', question: 'Identify the EBM machine and software generation, build theme or parameter status, layer thickness, rake system, preheat strategy, vacuum limits, and build temperature.' },
      { label: 'PSD definition', question: 'State nominal range plus the measured distribution, sampling method, analytical method, fines and oversize treatment, morphology, satellites, density, and flow or spreadability evidence.' },
      { label: 'Powder recovery', question: 'Define cake breakout, blasting or recovery method, sieving, blending, reuse cycles, exposure history, contamination checks, retained samples, packaging, and lot genealogy.' },
      { label: 'Part acceptance', question: 'Link the powder condition to orientation, support strategy, heat treatment or HIP, surface condition, density or defect method, dimensions, and mechanical testing for the intended alloy and part.' },
    ],
    verification:
      'When comparing EBM and LPBF powder routes, keep the machine physics and reporting basis separate. A PSD window that performs in one recoating, preheat, or melt strategy is not automatically transferable. Require a controlled trial or established build record on the intended EBM system before production release.',
    acceptance:
      'Approve the measured distribution and powder lifecycle plan together with the named EBM machine route. A supplier particle-size label by itself is not a process qualification.',
  },
  'h13-powder-conformal-cooling-inserts': {
    title: 'Treat the cooling circuit and hot-work duty as one system',
    introduction:
      'Conformal cooling value depends on channel geometry, coolant delivery, heat extraction, tool steel condition, thermal fatigue, surface finish, and maintainability—not on H13 powder alone.',
    checks: [
      { label: 'Thermal duty', question: 'Define work material, mold or die temperature, cycle time, hot spots, heat flux, coolant, flow, pressure, and fouling risk.' },
      { label: 'Channel integrity', question: 'State minimum wall, diameter, curvature, powder removal, cleaning access, leak pressure, CT or NDE method, and repair plan.' },
      { label: 'Tool condition', question: 'Specify heat-treatment sequence, hardness range, tempering, machining, polishing, EDM, nitriding or coating, and distortion allowance.' },
      { label: 'Business case', question: 'Set measurable targets for cooling uniformity, cycle stability, scrap, maintenance, and tool life before committing to AM.' },
    ],
    verification:
      'Before production release, establish a baseline against the conventional insert or current cooling layout. Compare temperature uniformity, stable cycle time, molded-part quality, coolant pressure drop, leak integrity, cleaning access, dimensional recovery, hardness, and inspection results using the same mold and operating window.',
    acceptance:
      'Require a lot-linked tool route plus channel inspection, leak testing, hardness mapping, dimensions, and production-trial evidence for the actual insert.',
  },
  'h13-tool-steel-powder': {
    title: 'Connect H13 powder to the finished hot-work condition',
    introduction:
      'H13 is selected for hot-work duty, but its useful condition depends on build quality, heat treatment, hardness, retained defects, surface route, and the actual thermal-mechanical cycle.',
    checks: [
      { label: 'Duty cycle', question: 'Define operating temperature, thermal gradient, dwell, cooling, impact, pressure, abrasive contact, and expected cycles between maintenance.' },
      { label: 'Powder route', question: 'State chemistry, lot, PSD method, morphology, contamination controls, reuse condition, packaging, and machine compatibility.' },
      { label: 'Final condition', question: 'Specify stress relief, austenitizing, quench, tempering, hardness, machining, polishing, coating, and dimensional recovery.' },
      { label: 'Alternative', question: 'Compare M300 when precision and post-aged strength lead; keep H13 when repeated thermal fatigue and hot-work exposure dominate.' },
    ],
    acceptance:
      'Accept against the finished heat-treatment condition and tool-duty evidence. As-built density or powder chemistry alone does not establish hot-work life.',
  },
  'h13-vs-m300-powder': {
    title: 'Use service temperature and thermal cycling as the first split',
    introduction:
      'H13 and M300 can both serve tooling programs, but they solve different duty profiles. The comparison should begin with hot-work severity, then address hardness route, dimensional control, wear, and cooling geometry.',
    checks: [
      { label: 'Thermal severity', question: 'Describe peak tool temperature, gradient, cycle count, cooling rate, thermal shock, dwell, and contact with hot work material.' },
      { label: 'Mechanical need', question: 'Define strength, hardness, toughness, wear, contact pressure, deflection, impact, and failure history for the insert.' },
      { label: 'Heat treatment', question: 'Compare the complete H13 quench/temper route with the M300 aging route, including distortion, machining stock, and final inspection.' },
      { label: 'AM value', question: 'Confirm that conformal channels, consolidation, weight, repair, or geometry justifies AM for the chosen material and tool life target.' },
    ],
    acceptance:
      'The selected grade should have one documented powder-to-tool route and representative thermal-cycle evidence. Do not compare typical values from different conditions.',
  },
  'hastelloy-x-powder': {
    title: 'Keep oxidation-driven service distinct from generic nickel duty',
    introduction:
      'Hastelloy X is not an automatic high-temperature upgrade. Selection should show why oxidation, hot-gas stability, fabrication, and thermal cycling outweigh the strengths of IN718 or corrosion focus of IN625.',
    checks: [
      { label: 'Service envelope', question: 'State atmosphere, contaminants, temperature-time profile, pressure, stress, cooling, start-stop cycles, and expected degradation mode.' },
      { label: 'Alloy comparison', question: 'Compare IN718 for strength-led duty and IN625 for corrosion-led duty using the same temperature, condition, and test basis.' },
      { label: 'Powder/build route', question: 'Define chemistry, lot, PSD, morphology, machine, parameter status, orientation, heat treatment, HIP if required, and machining.' },
      { label: 'Verification', question: 'Specify density or defect acceptance, tensile or creep condition, oxidation or corrosion exposure, dimensions, surface, joining, and NDE.' },
    ],
    verification:
      'For supplier comparison, require every typical value to identify product form, manufacturing process, thermal condition, orientation, test temperature, atmosphere, and method. Use the data to screen a route, then define representative coupons or hardware tests for the actual oxidation, thermal-cycle, pressure, and joining conditions.',
    acceptance:
      'The purchase decision is complete only when powder evidence and finished-part tests address the same hot-gas or furnace environment and thermal route.',
  },
  'm300-powder-mold-tooling-inserts': {
    title: 'Define the production insert before fixing the powder route',
    introduction:
      'Core inserts, cavity inserts, sliders, lifters, and prototype tooling do not share the same load, wear, cooling, dimensional, and maintenance requirements. Start with the exact production function.',
    checks: [
      { label: 'Insert function', question: 'Identify core, cavity, slider, lifter, gate, cooling insert, or fixture duty plus resin, fillers, pressure, temperature, and cycle count.' },
      { label: 'Cooling and interfaces', question: 'Define channels, coolant, pressure, leak test, powder removal, cleaning, datums, fasteners, seals, and mating surfaces.' },
      { label: 'Final condition', question: 'State aging, hardness, machining, polishing, EDM, coating, distortion allowance, dimensional report, and wear-surface inspection.' },
      { label: 'Value gate', question: 'Set targets for cycle stability, temperature uniformity, scrap, lead time, maintenance, or part consolidation before approving AM.' },
    ],
    acceptance:
      'Require the finished insert drawing, thermal and load basis, lot genealogy, build/aging record, channel inspection, leak test, and production-trial plan.',
  },
  'ta15-near-alpha-titanium-powder': {
    title: 'Use TA15 only with a defined elevated-temperature route',
    introduction:
      'TA15 is reviewed when a near-alpha titanium route fits the program, but designation equivalence, temperature capability, heat treatment, fatigue, and qualification cannot be inferred from the alloy family name.',
    checks: [
      { label: 'Designation', question: 'State the exact TA15 chemistry and specification, interstitial limits, powder route, PSD method, lot identity, and any equivalence basis.' },
      { label: 'Service', question: 'Define temperature-time exposure, load spectrum, fatigue, creep concern, environment, joining, surface, and life requirement.' },
      { label: 'Manufacturing', question: 'Specify machine, parameter status, orientation, stress relief, heat treatment, HIP if required, machining, NDE, and coupon plan.' },
      { label: 'Comparison', question: 'Compare Ti64 or another established titanium route when supply, data, or qualification maturity is more important than near-alpha behavior.' },
    ],
    acceptance:
      'Do not approve from a nominal composition match. Require the program specification, powder lot, thermal route, test condition, and application acceptance basis.',
  },
  'ti64-grade-23-powder-orthopedic-implants-and-medical-components': {
    title: 'Keep powder selection inside the validated device route',
    introduction:
      'Grade 23 powder is one controlled input. Implant geometry, porous structures, cleaning, surface condition, sterilization, mechanical testing, biocompatibility, and regulatory responsibilities remain device-specific.',
    checks: [
      { label: 'Device scope', question: 'Identify implant, instrument, trial, guide, or non-implant component; intended use; contact type; life; and responsible legal manufacturer.' },
      { label: 'Material control', question: 'State Grade 23 specification, interstitial limits, lot genealogy, PSD, reuse policy, contamination control, and change notification.' },
      { label: 'Validated route', question: 'Define machine, parameter set, orientation, porous architecture if any, heat treatment, HIP, machining, cleaning, and sterilization.' },
      { label: 'Evidence', question: 'Specify mechanical, fatigue, surface, chemistry, cleanliness, biocompatibility, dimensional, and regulatory evidence for the actual device category.' },
    ],
    acceptance:
      'A powder COA or generic printed coupon does not establish implant acceptance. Approval belongs to the controlled device design and manufacturing validation.',
  },
  'ti64-vs-grade-2-titanium-powder': {
    title: 'Start with strength demand versus corrosion-and-ductility demand',
    introduction:
      'Ti64 and Grade 2 are not interchangeable titanium options. The useful comparison connects load, fatigue, ductility, corrosion environment, formability, surface, joining, and qualification to one finished-part route.',
    checks: [
      { label: 'Primary driver', question: 'Rank specific strength, fatigue, fracture, ductility, corrosion, temperature, wear, biocompatibility context, and cost for the component.' },
      { label: 'Exact grade', question: 'State Ti64 Grade 5 or Grade 23, or the exact CP titanium designation; include specification edition and interstitial limits.' },
      { label: 'Process condition', question: 'Compare data only when machine route, orientation, heat treatment, HIP, surface condition, and test method are identified.' },
      { label: 'Acceptance', question: 'Define chemistry, defect method, mechanical or corrosion tests, dimensions, surface, cleaning, traceability, and application qualification before quoting.' },
    ],
    acceptance:
      'Choose the grade from the finished-part requirement and validated condition, not from a generic titanium family comparison or nominal density advantage.',
  },
  'titanium-oxygen-limit-discussion-guide': {
    title: 'Write oxygen control as a measurable lot requirement',
    introduction:
      '“Low oxygen” is not a specification. The buyer should define the alloy grade, governing chemistry limit, sampling point, analytical method, units, powder history, and how oxygen is controlled through reuse and handling.',
    checks: [
      { label: 'Limit basis', question: 'Reference the exact grade and specification edition, maximum oxygen, reporting units, method, laboratory, sample location, and decision rule.' },
      { label: 'Powder history', question: 'Identify virgin or reused condition, blending, sieving, exposure time, build cycles, storage, packaging, retained sample, and genealogy.' },
      { label: 'Related interstitials', question: 'Include nitrogen, hydrogen, carbon, iron, and contamination controls where the grade or application requires them.' },
      { label: 'Part relationship', question: 'Keep powder chemistry acceptance separate from printed-part chemistry, tensile, ductility, fatigue, fracture, surface, and qualification evidence.' },
    ],
    acceptance:
      'The RFQ should state the limit and test basis explicitly. A supplier description such as “low oxygen titanium powder” is not an auditable acceptance criterion.',
  },
  'alsi10mg-powder-lightweight-housings-and-brackets': {
    title: 'Classify the lightweight part before defining AlSi10Mg',
    introduction:
      'A housing, structural bracket, UAV frame, motor mount, and electronics enclosure may share the same alloy while requiring different stiffness, fatigue, sealing, thermal, vibration, and dimensional evidence.',
    checks: [
      { label: 'Part function', question: 'State whether the component carries primary load, protects electronics, transfers heat, seals fluid, supports a motor, or locates sensors.' },
      { label: 'Environment', question: 'Define vibration, shock, temperature, corrosion, ingress, pressure, thermal cycling, electrical grounding, and surface requirements.' },
      { label: 'Manufacturing', question: 'Identify thin walls, interfaces, threads, inserts, supports, machining stock, heat treatment, orientation, flatness, and inspection datums.' },
      { label: 'Evidence', question: 'Request density or defect acceptance, dimensions, mechanical or thermal tests, leak checks where relevant, and lot-linked powder documentation.' },
    ],
    acceptance:
      'Use one consolidated AlSi10Mg application route, then tailor finished-part evidence to the actual function instead of creating separate pages for every component noun.',
  },
  'cocrmo-cocrw-powder': {
    title: 'Resolve CoCrMo versus CoCrW before specifying the powder',
    introduction:
      'Cobalt-chromium is an alloy family, not a complete grade. Chemistry, wear and corrosion duty, process, heat treatment, surface, and regulated-use boundaries must be fixed before pricing.',
    checks: [
      { label: 'Exact alloy', question: 'State CoCrMo or CoCrW designation, governing specification, chemistry, powder route, lot, PSD method, morphology, and reuse condition.' },
      { label: 'Application', question: 'Define dental or medical responsibility, or industrial wear, valve, pump, sleeve, seat, and counterface requirements without mixing acceptance bases.' },
      { label: 'Final surface', question: 'Specify heat treatment, machining, polishing, roughness, hardness, corrosion or wear tests, cleaning, and dimensional inspection.' },
      { label: 'Comparison', question: 'Compare stainless when cost, machinability, ductility, or established corrosion evidence outweighs the cobalt-chromium wear route.' },
    ],
    acceptance:
      'Approve the exact alloy and final application route. Do not use generic cobalt-chrome data as proof for a different chemistry, surface, device, or wear system.',
  },
  'gh4169-in718-powder': {
    title: 'Specify IN718 through the final precipitation-hardened condition',
    introduction:
      'GH4169 and IN718 naming should lead to an exact specification, chemistry, powder lot, build route, thermal treatment, defect plan, and service condition—not an assumption of automatic equivalence.',
    checks: [
      { label: 'Designation', question: 'Name the required specification and edition, chemistry limits, powder production route, lot identity, PSD method, morphology, and packaging.' },
      { label: 'Service', question: 'Define temperature-time profile, load, fatigue, creep, oxidation, pressure, vibration, and life for the actual component.' },
      { label: 'Thermal route', question: 'State stress relief, solution and aging treatment, HIP if required, orientation, machining, surface, and dimensional recovery.' },
      { label: 'Evidence', question: 'Compare tensile, fatigue, creep, defect, grain or microstructure, and NDE data only when condition, method, and orientation match.' },
    ],
    acceptance:
      'The purchase route is complete when the powder lot and finished-part evidence share one specification, machine route, thermal condition, and acceptance plan.',
  },
};

export const getArticleDecisionGuide = (postId: string) => guides[postId];
