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
];
