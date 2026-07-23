type RfqEnv = {
  ASSETS: {
    fetch(request: Request): Promise<Response>;
  };
  RFQ_EMAIL?: {
    send(message: RfqEmailMessage): Promise<{ messageId?: string }>;
  };
  RFQ_RATE_LIMITER?: {
    limit(options: { key: string }): Promise<{ success: boolean }>;
  };
  TURNSTILE_SECRET_KEY?: string;
};

type RfqEmailAttachment = {
  filename: string;
  content: ArrayBuffer;
  type: string;
  disposition: 'attachment';
};

type RfqEmailMessage = {
  from: string;
  to: string;
  replyTo: string;
  subject: string;
  text: string;
  html: string;
  attachments: RfqEmailAttachment[];
  headers: Record<string, string>;
};

type WorkerContext = {
  request: Request;
  env: RfqEnv;
};

type WorkerHandler = (context: WorkerContext) => Response | Promise<Response>;

type ProductRequest = {
  id: string;
  process: string;
  particleSize: string;
  quantity: string;
};

const MAX_FILES = 3;
const MAX_FILE_SIZE = 3 * 1024 * 1024;
const MAX_TOTAL_FILE_SIZE = 4 * 1024 * 1024;
const MAX_REQUEST_SIZE = 6 * 1024 * 1024;
const MIN_SUBMIT_TIME_MS = 3_000;
const MAX_FORM_AGE_MS = 24 * 60 * 60 * 1_000;
const DEFAULT_TO_EMAIL = 'info@szcomo.com';
const DEFAULT_FROM_EMAIL = 'rfq@metal3dpowder.com';
const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/iu;

const productNames = new Map([
  ['ti64', 'Titanium Ti6Al4V'],
  ['ti64-grade-23', 'Titanium Ti64 ELI'],
  ['ti-grade-2', 'Titanium Grade 2'],
  ['ta15', 'TA15 Near-Alpha Titanium'],
  ['316l', 'Stainless Steel 316L'],
  ['17-4ph', 'Stainless Steel 17-4PH'],
  ['m300', 'Maraging Steel M300'],
  ['h13', 'H13 Tool Steel'],
  ['in718', 'Nickel Alloy 718'],
  ['in625', 'Nickel Alloy 625'],
  ['hastelloyx', 'Nickel Alloy X'],
  ['alsi10mg', 'Aluminum AlSi10Mg'],
  ['cucrzr', 'Copper Alloy CuCrZr'],
  ['cocrmo', 'Cobalt Chrome CoCrMo'],
]);

const allowedApplications = new Set([
  'Aerospace and space',
  'Medical and dental',
  'Energy and propulsion',
  'Tooling and mold',
  'Electronics and thermal',
  'Automotive and transportation',
  'Industrial equipment',
  'Research and material development',
  'Other application',
]);

const allowedProcesses = new Set([
  'Not decided',
  'LPBF',
  'EBM',
  'DED',
  'Binder jet',
  'MIM',
  'HIP',
  'Other process',
]);

const allowedTimings = new Set([
  'Exploring feasibility',
  'Quote needed within 2 weeks',
  'Material needed within 1–3 months',
  'Material needed within 3–6 months',
  'Production planning',
]);

const allowedFileExtensions = new Set(['.pdf', '.jpg', '.jpeg', '.png']);

const fileContentTypes = new Map([
  ['.pdf', 'application/pdf'],
  ['.jpg', 'image/jpeg'],
  ['.jpeg', 'image/jpeg'],
  ['.png', 'image/png'],
]);

const hasAllowedFileSignature = async (file: File, extension: string) => {
  const bytes = new Uint8Array(await file.slice(0, 12).arrayBuffer());
  const startsWith = (signature: number[]) =>
    signature.every((value, index) => bytes[index] === value);

  if (extension === '.pdf') {
    return startsWith([0x25, 0x50, 0x44, 0x46, 0x2d]);
  }

  if (extension === '.jpg' || extension === '.jpeg') {
    return startsWith([0xff, 0xd8, 0xff]);
  }

  if (extension === '.png') {
    return startsWith([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  }

  return false;
};

const jsonResponse = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
    },
  });

const cleanText = (value: FormDataEntryValue | null, maxLength: number) =>
  typeof value === 'string' ? value.replace(/\0/g, '').trim().slice(0, maxLength) : '';

const isValidEmail = (value: string) =>
  value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/u.test(value) && !/[\r\n]/u.test(value);

const escapeHtml = (value: string) =>
  value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;',
    };
    return entities[character];
  });

const safeFileName = (name: string) => {
  const baseName = name.split(/[\\/]/u).pop() || 'attachment';
  return baseName.replace(/[^a-zA-Z0-9._() -]/gu, '_').slice(0, 120);
};

const getExtension = (name: string) => {
  const normalizedName = name.toLowerCase();
  const specialExtension = ['.step', '.iges'].find((extension) => normalizedName.endsWith(extension));
  if (specialExtension) return specialExtension;
  const lastDot = normalizedName.lastIndexOf('.');
  return lastDot >= 0 ? normalizedName.slice(lastDot) : '';
};

const parseProducts = (rawValue: string): ProductRequest[] | null => {
  if (!rawValue) return [];

  try {
    const parsed = JSON.parse(rawValue) as unknown;
    if (!Array.isArray(parsed) || parsed.length > productNames.size) return null;
    const items: ProductRequest[] = [];
    const seenIds = new Set<string>();

    for (const value of parsed) {
      if (!value || typeof value !== 'object') return null;
      const record = value as Record<string, unknown>;
      const id = typeof record.id === 'string' ? record.id : '';
      const process = typeof record.process === 'string' ? record.process.trim().slice(0, 80) : '';
      const particleSize =
        typeof record.particleSize === 'string' ? record.particleSize.trim().slice(0, 100) : '';
      const quantity = typeof record.quantity === 'string' ? record.quantity.trim().slice(0, 100) : '';

      if (!productNames.has(id) || seenIds.has(id)) return null;
      if (process && !allowedProcesses.has(process)) return null;
      if (/[\r\n\0]/u.test(particleSize) || /[\r\n\0]/u.test(quantity)) return null;

      seenIds.add(id);
      items.push({ id, process, particleSize, quantity });
    }

    return items;
  } catch {
    return null;
  }
};

const parseAttribution = (rawValue: string): Record<string, string> => {
  if (!rawValue) return {};

  try {
    const parsed = JSON.parse(rawValue) as Record<string, unknown>;
    const allowedKeys = [
      'gclid',
      'gbraid',
      'wbraid',
      'utm_source',
      'utm_medium',
      'utm_campaign',
      'utm_term',
      'utm_content',
      'referrer',
      'first_landing_page',
      'last_landing_page',
      'captured_at',
      'updated_at',
    ];

    return Object.fromEntries(
      allowedKeys
        .map((key) => [key, typeof parsed[key] === 'string' ? String(parsed[key]).slice(0, 1_000) : ''])
        .filter(([, value]) => Boolean(value))
    ) as Record<string, string>;
  } catch {
    return {};
  }
};

const verifyTurnstile = async (secret: string, token: string, remoteIp: string, expectedHostname: string) => {
  const body = new URLSearchParams({ secret, response: token });
  if (remoteIp) body.set('remoteip', remoteIp);

  let response: Response;
  try {
    response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body,
      signal: AbortSignal.timeout(8_000),
    });
  } catch {
    return false;
  }

  if (!response.ok) return false;
  const result = (await response.json()) as { success?: boolean; action?: string; hostname?: string };
  return result.success === true && result.action === 'rfq_submit' && result.hostname === expectedHostname;
};

const isSameOriginRequest = (request: Request) => {
  const origin = request.headers.get('Origin');
  if (!origin) return false;

  try {
    return new URL(origin).origin === new URL(request.url).origin;
  } catch {
    return false;
  }
};

export const onRequestPost: WorkerHandler = async ({ request, env }) => {
  if (!isSameOriginRequest(request)) {
    return jsonResponse(403, { ok: false, message: 'This submission could not be verified.' });
  }

  const contentType = request.headers.get('Content-Type') || '';
  if (!contentType.toLowerCase().startsWith('multipart/form-data')) {
    return jsonResponse(415, { ok: false, message: 'Unsupported form submission.' });
  }

  const contentLength = Number(request.headers.get('Content-Length') || 0);
  if (Number.isFinite(contentLength) && contentLength > MAX_REQUEST_SIZE) {
    return jsonResponse(413, { ok: false, message: 'The submitted package is larger than the online limit.' });
  }

  const turnstileSecret = env.TURNSTILE_SECRET_KEY?.trim();
  if (!env.RFQ_EMAIL || !env.RFQ_RATE_LIMITER || !turnstileSecret) {
    return jsonResponse(503, {
      ok: false,
      message: 'Secure online RFQ submission is temporarily unavailable. Please email info@szcomo.com.',
    });
  }

  const actorKey = request.headers.get('CF-Connecting-IP') || 'unknown';
  const rateLimit = await env.RFQ_RATE_LIMITER.limit({ key: `powder-rfq:${actorKey}` });
  if (!rateLimit.success) {
    return jsonResponse(429, {
      ok: false,
      message: 'Too many submissions were attempted. Please wait one minute or email info@szcomo.com.',
    });
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return jsonResponse(400, { ok: false, message: 'The submitted form could not be read.' });
  }

  if (cleanText(formData.get('website'), 200)) {
    return jsonResponse(200, { ok: true, accepted: false });
  }

  const startedAt = Number(cleanText(formData.get('started_at'), 30));
  const elapsed = Date.now() - startedAt;
  if (!Number.isFinite(startedAt) || elapsed < MIN_SUBMIT_TIME_MS || elapsed > MAX_FORM_AGE_MS) {
    return jsonResponse(400, { ok: false, message: 'Please refresh the page and try again.' });
  }

  const turnstileToken = cleanText(formData.get('cf-turnstile-response'), 2_048);
  const remoteIp = request.headers.get('CF-Connecting-IP') || '';
  const requestHostname = new URL(request.url).hostname;
  if (!turnstileToken || !(await verifyTurnstile(turnstileSecret, turnstileToken, remoteIp, requestHostname))) {
    return jsonResponse(400, { ok: false, message: 'Please complete the security check and submit again.' });
  }

  const selectedProducts = parseProducts(cleanText(formData.get('products'), 8_000));
  const materialRequest = cleanText(formData.get('material_request'), 240);
  const name = cleanText(formData.get('name'), 80);
  const email = cleanText(formData.get('email'), 254).toLowerCase();
  const company = cleanText(formData.get('company'), 120);
  const country = cleanText(formData.get('country'), 80);
  const application = cleanText(formData.get('application'), 80);
  const process = cleanText(formData.get('process'), 80);
  const particleSize = cleanText(formData.get('particle_size'), 100);
  const quantity = cleanText(formData.get('quantity'), 100);
  const packaging = cleanText(formData.get('packaging'), 160);
  const timing = cleanText(formData.get('timing'), 80);
  const requirements = cleanText(formData.get('requirements'), 5_000);
  const sourcePage = cleanText(formData.get('source_page'), 1_000);
  const consent = cleanText(formData.get('consent'), 20);
  const submissionId = cleanText(formData.get('submission_id'), 64).toLowerCase();
  const attribution = parseAttribution(cleanText(formData.get('attribution'), 8_000));

  if (!UUID_PATTERN.test(submissionId)) {
    return jsonResponse(400, { ok: false, message: 'Please refresh the page and try again.' });
  }

  if (selectedProducts === null) {
    return jsonResponse(400, { ok: false, message: 'The powder selection was not valid. Please refresh and try again.' });
  }

  if (!selectedProducts.length && materialRequest.length < 2) {
    return jsonResponse(400, { ok: false, message: 'Select a catalog product or describe the material requirement.' });
  }

  if (!name || !isValidEmail(email) || !company || !country) {
    return jsonResponse(400, {
      ok: false,
      message: 'Please complete your name, work email, company, and destination country.',
    });
  }

  if (!allowedApplications.has(application) || !allowedProcesses.has(process) || !allowedTimings.has(timing)) {
    return jsonResponse(400, { ok: false, message: 'Please select valid application, process, and timing values.' });
  }

  if (!quantity || requirements.length < 30) {
    return jsonResponse(400, {
      ok: false,
      message: 'Please provide quantity and at least 30 characters of project and acceptance detail.',
    });
  }

  if (consent !== 'accepted') {
    return jsonResponse(400, { ok: false, message: 'Please confirm that we may use the details to review your RFQ.' });
  }

  const files = formData
    .getAll('attachments')
    .filter((entry): entry is File => entry instanceof File && entry.size > 0);

  if (files.length > MAX_FILES) {
    return jsonResponse(400, { ok: false, message: `Attach no more than ${MAX_FILES} files.` });
  }

  let totalFileSize = 0;
  for (const file of files) {
    const extension = getExtension(file.name);
    totalFileSize += file.size;
    if (file.size > MAX_FILE_SIZE) {
      return jsonResponse(400, { ok: false, message: `${safeFileName(file.name)} is larger than 3 MB.` });
    }
    if (!allowedFileExtensions.has(extension)) {
      return jsonResponse(400, { ok: false, message: `${safeFileName(file.name)} uses an unsupported file type.` });
    }
    if (!(await hasAllowedFileSignature(file, extension))) {
      return jsonResponse(400, {
        ok: false,
        message: `${safeFileName(file.name)} does not match its declared PDF or image type.`,
      });
    }
  }

  if (totalFileSize > MAX_TOTAL_FILE_SIZE) {
    return jsonResponse(400, { ok: false, message: 'Attachments must be 4 MB or less in total.' });
  }

  const attachments = await Promise.all(
    files.map(async (file) => {
      const extension = getExtension(file.name);
      return {
        filename: safeFileName(file.name),
        content: await file.arrayBuffer(),
        type: fileContentTypes.get(extension) || 'application/octet-stream',
        disposition: 'attachment' as const,
      };
    })
  );

  const selectedProductNames = selectedProducts.map((item) => productNames.get(item.id) as string);
  const selectedProductRows: Array<[string, string]> = selectedProducts.map((item, index) => [
    `Catalog product ${index + 1}`,
    [
      productNames.get(item.id),
      item.process ? `Process: ${item.process}` : '',
      item.particleSize ? `PSD: ${item.particleSize}` : '',
      item.quantity ? `Quantity: ${item.quantity}` : '',
    ]
      .filter(Boolean)
      .join(' | '),
  ]);
  const productSummary = selectedProductNames.length
    ? selectedProductNames.join(', ')
    : materialRequest || 'Open material request';
  const receivedAt = new Date().toISOString();
  const safeSubjectCompany = company.replace(/[\r\n]/gu, ' ').slice(0, 55);
  const safeSubjectMaterial = productSummary.replace(/[\r\n]/gu, ' ').slice(0, 70);
  const subject = `[Metal Powder RFQ] ${safeSubjectCompany} — ${safeSubjectMaterial}`;
  const attributionRows = Object.entries(attribution);
  const detailRows: Array<[string, string]> = [
    ['Submission ID', submissionId],
    ['Received', receivedAt],
    ['Name', name],
    ['Work email', email],
    ['Company', company],
    ['Destination', country],
    ...selectedProductRows,
    ...(!selectedProductRows.length ? ([['Catalog products', 'None selected']] as Array<[string, string]>) : []),
    ['Custom material request', materialRequest || 'Not provided'],
    ['Application', application],
    ['Process', process],
    ['Particle size', particleSize || 'Not decided'],
    ['Quantity', quantity],
    ['Packaging', packaging || 'Supplier standard / not decided'],
    ['Timing', timing],
    ['Source page', sourcePage || 'Not provided'],
    ...attributionRows,
  ];
  const textDetails = detailRows.map(([label, value]) => `${label}: ${value}`).join('\n');
  const htmlDetails = detailRows
    .map(
      ([label, value]) =>
        `<tr><th align="left" style="padding:6px 12px 6px 0;vertical-align:top">${escapeHtml(label)}</th><td style="padding:6px 0">${escapeHtml(value)}</td></tr>`
    )
    .join('');

  let emailResult: { messageId?: string };
  try {
    emailResult = await env.RFQ_EMAIL.send({
      from: DEFAULT_FROM_EMAIL,
      to: DEFAULT_TO_EMAIL,
      replyTo: email,
      subject,
      text: `${textDetails}\n\nRequirements and acceptance criteria:\n${requirements}`,
      html: `<h1 style="font-size:20px">New metal powder RFQ</h1><table>${htmlDetails}</table><h2 style="font-size:16px;margin-top:24px">Requirements and acceptance criteria</h2><p style="white-space:pre-wrap">${escapeHtml(requirements)}</p>`,
      attachments,
      headers: {
        'X-Metal3DPowder-Submission-ID': submissionId,
      },
    });
  } catch (error) {
    console.error('Metal powder RFQ email submission failed', error);
    return jsonResponse(502, {
      ok: false,
      message: 'Your RFQ could not be accepted. Please email info@szcomo.com instead.',
    });
  }

  if (!emailResult?.messageId) {
    console.error('Metal powder RFQ email submission did not return a message ID');
    return jsonResponse(502, {
      ok: false,
      message: 'Your RFQ could not be accepted. Please email info@szcomo.com instead.',
    });
  }

  return jsonResponse(200, { ok: true, accepted: true, submissionId });
};

export default {
  async fetch(request: Request, env: RfqEnv): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api/rfq') {
      if (request.method !== 'POST') {
        return new Response('Method Not Allowed', {
          status: 405,
          headers: {
            Allow: 'POST',
            'Cache-Control': 'no-store',
            'X-Content-Type-Options': 'nosniff',
          },
        });
      }

      return onRequestPost({ request, env });
    }

    return env.ASSETS.fetch(request);
  },
};
