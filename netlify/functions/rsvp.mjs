import { WEDDING_EMAIL_CONFIGS } from './wedding-config.mjs';

const escapeHtml = (value = '') => String(value)
  .trim()
  .replace(/[&<>'"]/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  })[char]);

export default async (request) => {
  if (request.method !== 'POST') {
    return Response.json({ message: 'Method not allowed.' }, { status: 405 });
  }

  try {
    const { weddingId, firstName, lastName, guests, side, attendance, message = '' } = await request.json();

    if (
      !weddingId ||
      !WEDDING_EMAIL_CONFIGS[weddingId] ||
      !firstName ||
      !lastName ||
      !guests ||
      !attendance ||
      !['bride', 'groom'].includes(side)
    ) {
      return Response.json({ message: 'Invalid RSVP data.' }, { status: 400 });
    }

    const wedding = WEDDING_EMAIL_CONFIGS[weddingId];
    const to = side === 'bride'
      ? wedding.brideEmail
      : wedding.groomEmail;
    const from = 'onboarding@resend.dev';

    if (!process.env.RESEND_API_KEY) {
      return Response.json({ message: 'Email service is not configured yet. Add RESEND_API_KEY in Netlify Environment Variables.' }, { status: 500 });
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: `Wedding RSVP <${from}>`,
        to: [to],
        subject: `${wedding.couple} RSVP — ${escapeHtml(firstName)} ${escapeHtml(lastName)}`,
        html: `
          <h2>${escapeHtml(wedding.couple)} — New Wedding RSVP</h2>
          <p><strong>Wedding:</strong> ${escapeHtml(wedding.couple)}</p>
          <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
          <p><strong>Guests:</strong> ${escapeHtml(guests)}</p>
          <p><strong>Side:</strong> ${side === 'bride' ? 'Bride' : 'Groom'}</p>
          <p><strong>Attendance:</strong> ${escapeHtml(attendance)}</p>
          <p><strong>Message:</strong> ${escapeHtml(message) || '-'}</p>
        `
      })
    });

    if (!response.ok) {
      console.error('Resend error:', await response.text());
      return Response.json({ message: 'Could not send RSVP email.' }, { status: 502 });
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ message: 'Could not send RSVP email.' }, { status: 500 });
  }
};
