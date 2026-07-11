import { siteInfo } from './site';

const normalizeContext = (context: string) => context.trim().replace(/\s+/g, ' ').slice(0, 120);

export const buildRfqEmailHref = (context = 'Metal powder supply inquiry') => {
  const inquiryContext = normalizeContext(context) || 'Metal powder supply inquiry';
  const subject = `Powder RFQ: ${inquiryContext}`;
  const body = [
    'Hello Metal 3D Powder team,',
    '',
    'I would like a metal powder quotation.',
    '',
    `Inquiry topic: ${inquiryContext}`,
    'Alloy grade:',
    'Target process (LPBF / EBM / DED / MIM / binder jet):',
    'Particle size range:',
    'Required quantity:',
    'Application or part:',
    'Destination country:',
    'Required documents, chemistry limits, or oxygen limits:',
    'Target timing:',
    '',
    'Additional notes:',
  ].join('\r\n');

  return `mailto:${siteInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};
