import { WEDDING_EMAIL_CONFIGS } from './wedding-config.mjs';

const escapeHtml = (value = '') => String(value).trim().replace(/[&<>'"]/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
})[char]);

const TEXT = {
  hy: {
    subject: 'Նոր RSVP պատասխան', title: 'Նոր RSVP պատասխան', subtitle: 'Ձեր հարսանեկան հրավերից ստացվել է նոր պատասխան',
    guest: 'Հյուր', phone: 'Հեռախոսահամար', guests: 'Հյուրերի քանակ', side: 'Կողմ', attendance: 'Մասնակցություն', message: 'Մաղթանք / հաղորդագրություն',
    bride: 'Հարսի կողմը', groom: 'Փեսայի կողմը', yes: 'Այո, կմասնակցի', no: 'Ոչ, չի մասնակցի', empty: 'Չկա հաղորդագրություն', footer: 'Wedding RSVP • Սիրով ստեղծված ձեր հատուկ օրվա համար'
  },
  en: {
    subject: 'New RSVP response', title: 'New RSVP response', subtitle: 'A new response has arrived from your wedding invitation',
    guest: 'Guest', phone: 'Phone number', guests: 'Number of guests', side: 'Side', attendance: 'Attendance', message: 'Wish / message',
    bride: "Bride's side", groom: "Groom's side", yes: 'Yes, attending', no: 'No, not attending', empty: 'No message', footer: 'Wedding RSVP • Made with love for your special day'
  },
  ru: {
    subject: 'Новый ответ RSVP', title: 'Новый ответ RSVP', subtitle: 'Получен новый ответ на ваше свадебное приглашение',
    guest: 'Гость', phone: 'Номер телефона', guests: 'Количество гостей', side: 'Сторона', attendance: 'Участие', message: 'Пожелание / сообщение',
    bride: 'Со стороны невесты', groom: 'Со стороны жениха', yes: 'Да, будет присутствовать', no: 'Нет, не будет присутствовать', empty: 'Сообщения нет', footer: 'Wedding RSVP • Создано с любовью для вашего особенного дня'
  }
};

const NAME_PATTERNS = {
  hy: /^[\u0531-\u0556\u0561-\u0587\s'’\-]+$/u,
  en: /^[A-Za-z\s'’\-]+$/,
  ru: /^[А-Яа-яЁё\s'’\-]+$/u
};

const validPhone = value => {
  const phone = String(value || '').trim();
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 8 && digits.length <= 15 && /^\+?[0-9()\s\-]+$/.test(phone);
};

const emailTemplate = ({ wedding, firstName, lastName, phone, guests, side, attendance, message, language }) => {
  const t = TEXT[language];
  const fullName = `${escapeHtml(firstName)} ${escapeHtml(lastName)}`;
  const sideText = side === 'bride' ? t.bride : t.groom;
  const attendanceText = attendance === 'yes' ? t.yes : t.no;
  const safeMessage = escapeHtml(message) || t.empty;

  const row = (label, value) => `
    <tr>
      <td style="padding:12px 0;color:#9b7866;font-size:12px;letter-spacing:.08em;text-transform:uppercase;vertical-align:top;width:42%;">${label}</td>
      <td style="padding:12px 0;color:#4e342a;font-size:15px;font-weight:600;vertical-align:top;">${value}</td>
    </tr>`;

  return `<!doctype html>
  <html lang="${language}"><body style="margin:0;background:#f6eee9;font-family:Arial,'Helvetica Neue',sans-serif;color:#4e342a;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f6eee9;padding:32px 12px;">
      <tr><td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:620px;background:#fffaf6;border-radius:22px;overflow:hidden;box-shadow:0 12px 36px rgba(91,58,44,.10);">
          <tr><td style="padding:38px 36px 30px;text-align:center;background:linear-gradient(135deg,#ead7ca,#f8eee8);">
            <div style="font-family:Georgia,serif;font-size:30px;color:#6d4938;letter-spacing:.02em;">${escapeHtml(wedding.couple)}</div>
            <div style="width:42px;height:1px;background:#b88d78;margin:18px auto;"></div>
            <div style="font-family:Georgia,serif;font-size:22px;color:#6d4938;">${t.title}</div>
            <div style="margin-top:8px;font-size:13px;line-height:1.6;color:#9b7866;">${t.subtitle}</div>
          </td></tr>
          <tr><td style="padding:30px 36px 12px;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
              ${row(t.guest, fullName)}
              ${row(t.phone, escapeHtml(phone))}
              ${row(t.guests, escapeHtml(guests))}
              ${row(t.side, sideText)}
              ${row(t.attendance, attendanceText)}
            </table>
          </td></tr>
          <tr><td style="padding:10px 36px 34px;">
            <div style="font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#9b7866;margin-bottom:10px;">${t.message}</div>
            <div style="padding:18px 20px;background:#f8efea;border-left:3px solid #c9a18d;border-radius:10px;font-family:Georgia,serif;font-size:16px;line-height:1.7;color:#5c4033;white-space:pre-wrap;">${safeMessage}</div>
          </td></tr>
          <tr><td style="padding:20px 36px;text-align:center;border-top:1px solid #efe1d9;font-size:11px;color:#ad8d7d;">${t.footer}</td></tr>
        </table>
      </td></tr>
    </table>
  </body></html>`;
};

export default async request => {
  if (request.method !== 'POST') return Response.json({ message: 'Method not allowed.' }, { status: 405 });

  try {
    const { weddingId, firstName, lastName, phone, guests, side, attendance, message = '', language = 'hy' } = await request.json();
    const lang = ['hy', 'en', 'ru'].includes(language) ? language : 'hy';

    if (!weddingId || !WEDDING_EMAIL_CONFIGS[weddingId] || !firstName || !lastName || !phone || !guests ||
        !['bride', 'groom'].includes(side) || !['yes', 'no'].includes(attendance) ||
        !NAME_PATTERNS[lang].test(String(firstName).trim()) || !NAME_PATTERNS[lang].test(String(lastName).trim()) || !validPhone(phone)) {
      return Response.json({ message: 'Invalid RSVP data.' }, { status: 400 });
    }

    const wedding = WEDDING_EMAIL_CONFIGS[weddingId];
    const to = side === 'bride' ? wedding.brideEmail : wedding.groomEmail;
    const t = TEXT[lang];

    if (!process.env.RESEND_API_KEY) {
      return Response.json({ message: 'Email service is not configured.' }, { status: 500 });
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'Wedding RSVP <onboarding@resend.dev>',
        to: [to],
        subject: `${wedding.couple} — ${t.subject}: ${String(firstName).trim()} ${String(lastName).trim()}`,
        html: emailTemplate({ wedding, firstName, lastName, phone, guests, side, attendance, message, language: lang })
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
