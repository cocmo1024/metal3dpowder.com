export type FAQItem = {
  category: string;
  question: string;
  answer: string[];
};

export const faqs: FAQItem[] = [
  {
    category: 'Powder Basics',
    question: 'Which additive manufacturing processes can use metal powders?',
    answer: [
      'Metal powders are used across LPBF, EBM, DED, thermal spray, binder jetting, and conventional powder metallurgy workflows. The right powder window depends on the process, energy source, layer thickness, and required final density.',
      'For overseas buyers, the most common request on this site is LPBF-grade powder, but we also support particle size windows suited to EBM, DED, and other engineering routes.',
    ],
  },
  {
    category: 'Powder Basics',
    question: 'What particle size ranges are typical for AM metal powders?',
    answer: [
      'A common LPBF window is 15-53 um or 15-45 um. EBM and some DED routes often use coarser cuts such as 45-105 um or wider distributions.',
      'The full PSD curve matters more than a single number. D10, D50, D90, fines content, and oversize particles all affect recoating, packing, and spatter behavior.',
    ],
  },
  {
    category: 'Powder Basics',
    question: 'Why do flowability and apparent density matter so much?',
    answer: [
      'Stable flow helps the powder form a repeatable layer. Apparent density is a practical signal for how well particles pack before melting.',
      'If either parameter is poor, the print window narrows and risk rises for streaking, lack of fusion, rough surface finish, or inconsistent density from build to build.',
    ],
  },
  {
    category: 'Powder Basics',
    question: 'Why are oxygen and nitrogen control important?',
    answer: [
      'Reactive alloys such as titanium and nickel superalloys are sensitive to oxygen and nitrogen pickup. Excess interstitials can reduce ductility, fatigue life, and process consistency.',
      'That is why buyers normally request chemistry data together with PSD and flow-related values, especially when powder reuse is planned.',
    ],
  },
  {
    category: 'Powder Basics',
    question: 'What powder morphology is preferred for AM?',
    answer: [
      'Most AM systems prefer highly spherical powder with low satellite content, low internal porosity, and controlled fines. That combination supports smoother spreading and more predictable energy absorption.',
      'The ideal morphology still depends on the process. A good engineering review always checks the morphology against the intended printer and parameter set.',
    ],
  },
  {
    category: 'Quality Control',
    question: 'Which documents are usually provided with an order?',
    answer: [
      'Typical documentation can include certificate of analysis, chemistry results, PSD report, flow data, apparent density, packing information, and batch identification.',
      'If you need extra records such as oxygen limits, morphology images, or export-related paperwork, it is better to list those requirements before quotation.',
    ],
  },
  {
    category: 'Quality Control',
    question: 'Can AM powder be reused after printing?',
    answer: [
      'Yes, but reuse control has to be disciplined. Powder reuse affects oxygen pickup, fines balance, spatter contamination, and sometimes moisture exposure depending on the alloy and factory practice.',
      'A safe reuse strategy needs sieving rules, lot traceability, chemistry checks, and a clear limit on how much reclaimed powder is blended back into virgin stock.',
    ],
  },
  {
    category: 'Quality Control',
    question: 'How should powder be stored after delivery?',
    answer: [
      'Powder should stay sealed, dry, and protected from contamination until use. Reactive alloys should be handled with particular care to reduce oxygen and moisture exposure.',
      'Once a drum or bottle is opened, handling discipline matters as much as the original atomization quality. Clean transfer, clear lot control, and proper resealing are standard practice.',
    ],
  },
  {
    category: 'Ordering & Logistics',
    question: 'What details should I send when requesting a quotation?',
    answer: [
      'The minimum useful RFQ usually includes alloy grade, target process, particle size range, quantity, destination country, and whether you need test data or special packaging.',
      'If the part is qualification-sensitive, add printer model, relevant standards, oxygen limits, and whether the powder is for prototyping, research, or production.',
    ],
  },
  {
    category: 'Ordering & Logistics',
    question: 'Are the prices and lead times on the website final?',
    answer: [
      'No. Website prices and lead times are reference values only. Final commercial terms depend on alloy, quantity, PSD cut, packaging, documentation scope, and export destination.',
      'Formal quotations and commercial commitments are valid only when issued from the official corporate email shown on this site.',
    ],
  },
  {
    category: 'Ordering & Logistics',
    question: 'Which regions do you serve?',
    answer: [
      'The website is built for overseas buyers and supports export-oriented communication in English. Typical customers include AM service bureaus, industrial buyers, research teams, and engineering procurement teams.',
      'Destination-specific shipping feasibility still depends on the alloy system, package format, and local import requirements.',
    ],
  },
  {
    category: 'Ordering & Logistics',
    question: 'What is the typical lead time for metal powder orders?',
    answer: [
      'Lead time varies by alloy family, particle size cut, stock status, and required documents. Common stainless and aluminum grades can move faster than reactive titanium or nickel superalloys.',
      'If your project is schedule-sensitive, send the target ship date in the first email so the quote can be scoped around actual delivery risk instead of only nominal production time.',
    ],
  },
  {
    category: 'Supplier Selection',
    question: 'How should buyers compare additive manufacturing powder suppliers?',
    answer: [
      'Compare suppliers by alloy fit, target process, particle-size distribution, chemistry controls, documentation, packaging, lead time, and application risk. A lower price is not meaningful if the PSD range, oxygen limit, certificate scope, or lot size is different.',
      'A strong supplier response should connect the powder to LPBF, EBM, DED, binder jet, MIM, or the buyer\'s actual process instead of only listing available grades.',
    ],
  },
  {
    category: 'Supplier Selection',
    question: 'What is the biggest red flag in a metal powder quote?',
    answer: [
      'The biggest red flag is a quote that gives only alloy name and price. Serious powder buying needs process route, PSD, quantity, destination, packaging, documentation scope, and any chemistry or oxygen limits that affect the application.',
      'If those details are missing, the quote may still be useful for a rough budget, but it should not be treated as a production-ready comparison.',
    ],
  },
  {
    category: 'Supplier Selection',
    question: 'Should I choose a supplier with the lowest metal powder price?',
    answer: [
      'Not automatically. The lowest price may reflect a different PSD cut, looser chemistry, weaker documentation, larger minimum order, non-equivalent packaging, or unclear export assumptions.',
      'For engineering projects, the better comparison is total usable value: powder fit, lot consistency, documents, lead time, and how much risk remains after the quote is received.',
    ],
  },
  {
    category: 'Application Fit',
    question: 'Which metal powder is best for LPBF?',
    answer: [
      'There is no single best LPBF powder. The right choice depends on the application: Ti64 for lightweight structural parts, 316L for corrosion-resistant components, 17-4PH for heat-treatable stainless strength, IN718 for high-temperature nickel applications, AlSi10Mg for lightweight aluminum parts, and CuCrZr for conductive thermal hardware.',
      'After alloy selection, the buyer still needs the correct PSD, morphology, chemistry, and documentation for the machine and project stage.',
    ],
  },
  {
    category: 'Application Fit',
    question: 'What should I send if I do not know the correct alloy?',
    answer: [
      'Send the part application, operating temperature, load, corrosion exposure, conductivity or thermal requirement, target process, quantity, and whether the project is research, prototype, qualification, or production.',
      'A useful supplier can then help narrow the alloy family and powder window. A supplier cannot do that well from the phrase "3D printing powder" alone.',
    ],
  },
];
