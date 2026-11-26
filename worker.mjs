const maxBodyBytes = 16_384;
const inbox = 'connect@creonity.com';
const inquiryTypes = { brand: 'Brand', creator: 'Creator' };

function contactResponse(request, status, message, extraHeaders = {}) {
  const headers = { 'Cache-Control': 'no-store', ...extraHeaders };
  if (request.headers.get('Accept')?.includes('application/json')) {
    return Response.json({ ok: status === 200, message }, { status, headers });
  }

  // Only server-authored messages are used in the non-JavaScript confirmation.
  return new Response(
    `<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Creonity inquiry</title><main><h1>${message}</h1><p><a href="/#contact">Back to Creonity</a></p></main></html>`,
    { status, headers: { ...headers, 'Content-Type': 'text/html; charset=utf-8' } },
  );
}

async function readInquiry(request) {
  if (!request.body || Number(request.headers.get('Content-Length')) > maxBodyBytes) return null;

  const reader = request.body.getReader();
  const decoder = new TextDecoder();
  let size = 0;
  let body = '';

  try {
    for (;;) {
      const { value, done } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > maxBodyBytes) {
        await reader.cancel();
        return null;
      }
      body += decoder.decode(value, { stream: true });
    }
    return new URLSearchParams(body + decoder.decode());
  } finally {
    reader.releaseLock();
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname !== '/api/contact') return env.ASSETS.fetch(request);

    const reply = (status, message, headers) => contactResponse(request, status, message, headers);

    if (request.method !== 'POST') return reply(405, 'Use the contact form to send an inquiry.', { Allow: 'POST' });
    const origin = request.headers.get('Origin');
    if (origin && origin !== url.origin) return reply(403, 'Open the Creonity contact form and try again.');
    if (!request.headers.get('Content-Type')?.startsWith('application/x-www-form-urlencoded')) {
      return reply(415, 'Open the Creonity contact form and try again.');
    }

    const { success } = await env.CONTACT_LIMITER.limit({ key: request.headers.get('CF-Connecting-IP') || 'unknown' });
    if (!success) return reply(429, 'Too many attempts. Wait a minute, then try again.', { 'Retry-After': '60' });

    let values;
    try {
      values = await readInquiry(request);
    } catch {
      return reply(400, 'We couldn’t read your inquiry. Please try again.');
    }
    if (!values) return reply(413, 'Your inquiry is too long. Shorten your message and try again.');

    const field = (name) => values.get(name)?.trim() ?? '';
    if (field('company_site')) return reply(400, 'We couldn’t submit your inquiry.');

    const type = field('type');
    const name = field('name');
    const email = field('email');
    const instagram = field('instagram');
    const details = field('details');
    const validEmail = email.length <= 254 && /^[^\s@,;<>]+@[^\s@,;<>]+\.[^\s@,;<>]+$/.test(email);
    if (!Object.hasOwn(inquiryTypes, type) || !name || name.length > 120 || !validEmail ||
        instagram.length > 120 || !details || details.length > 2000) {
      return reply(400, 'Choose brand or creator, then check your name, email, and message.');
    }

    try {
      await env.INQUIRY_EMAIL.send({
        to: inbox,
        from: { email: env.CONTACT_FROM, name: 'Creonity website' },
        replyTo: email,
        subject: `New Creonity inquiry — ${inquiryTypes[type]}`,
        text: [
          `Inquiry type: ${inquiryTypes[type]}`,
          `Name or brand: ${name}`,
          `Email: ${email}`,
          `Instagram: ${instagram || 'Not provided'}`,
          '',
          details,
        ].join('\n'),
      });
    } catch (error) {
      console.error('Contact email failed', { code: error?.code ?? 'unknown' });
      return reply(503, 'We couldn’t send your inquiry. Try again or email connect@creonity.com directly.');
    }

    return reply(200, 'Thanks. Your inquiry was sent. We’ll reply by email.');
  },
};
