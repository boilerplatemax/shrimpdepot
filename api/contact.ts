// Vercel Serverless Function — /api/contact
// Requires env vars: SENDGRID_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL

import type { VercelRequest, VercelResponse } from '@vercel/node';

const RATE_LIMIT_WINDOW = 60_000; // 1 minute
const RATE_LIMIT_MAX = 3;
const ipTimestamps = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (ipTimestamps.get(ip) || []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW
  );
  if (timestamps.length >= RATE_LIMIT_MAX) return true;
  timestamps.push(now);
  ipTimestamps.set(ip, timestamps);
  return false;
}

function sanitize(str: string, maxLen: number): string {
  return str.replace(/<[^>]*>/g, '').trim().slice(0, maxLen);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const ip =
    (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
    req.socket.remoteAddress ||
    'unknown';

  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  }

  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const cleanName = sanitize(String(name), 100);
  const cleanEmail = sanitize(String(email), 200);
  const cleanMessage = sanitize(String(message), 2000);

  if (!isValidEmail(cleanEmail)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  const apiKey = process.env.SENDGRID_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || 'ashapovalov@hotmail.com';
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !fromEmail) {
    console.error('Missing SENDGRID_API_KEY or CONTACT_FROM_EMAIL env vars');
    return res.status(500).json({ error: 'Server configuration error.' });
  }

  try {
    const sgRes = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: toEmail }] }],
        from: { email: fromEmail, name: 'Shrimp Yard Contact' },
        reply_to: { email: cleanEmail, name: cleanName },
        subject: `Shrimp Yard: Message from ${cleanName}`,
        content: [
          {
            type: 'text/plain',
            value: `Name: ${cleanName}\nEmail: ${cleanEmail}\n\n${cleanMessage}`,
          },
        ],
      }),
    });

    if (!sgRes.ok) {
      const body = await sgRes.text();
      console.error('SendGrid error:', sgRes.status, body);
      return res.status(502).json({ error: 'Failed to send email.' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Contact endpoint error:', err);
    return res.status(500).json({ error: 'Internal server error.' });
  }
}
