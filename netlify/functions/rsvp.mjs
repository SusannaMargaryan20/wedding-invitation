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
  const couple = escapeHtml(wedding.names?.[language] || wedding.couple);
  const sideText = side === 'bride' ? t.bride : t.groom;
  const attendanceText = attendance === 'yes' ? t.yes : t.no;
  const safeMessage = escapeHtml(message) || t.empty;
  const date = wedding.date
    ? `${String(wedding.date.day).padStart(2, '0')}.${String(wedding.date.month).padStart(2, '0')}.${wedding.date.year}`
    : '';

  const headerText = {
    hy: { eyebrow: 'ՀԱՐՍԱՆԵԿԱՆ ՀՐԱՎԻՐԱՏՈՄՍ', response: 'Նոր մասնակցության պատասխան', note: 'Հաղորդագրություն չկա', footer: 'Սիրով ստեղծված հարսանեկան հրավիրատոմս' },
    en: { eyebrow: 'WEDDING INVITATION', response: 'New attendance response', note: 'No message', footer: 'Wedding invitation made with love' },
    ru: { eyebrow: 'СВАДЕБНОЕ ПРИГЛАШЕНИЕ', response: 'Новый ответ об участии', note: 'Сообщения нет', footer: 'Свадебное приглашение, созданное с любовью' }
  }[language];

  const row = (label, value) => `
    <tr>
      <td style="padding:15px 0;border-bottom:1px solid #ddc5b8;color:#9a806f;font-size:14px;line-height:1.4;width:42%;vertical-align:top;">${label}</td>
      <td align="right" style="padding:15px 0;border-bottom:1px solid #ddc5b8;color:#44312a;font-family:Georgia,'Times New Roman',serif;font-size:16px;line-height:1.4;vertical-align:top;">${value}</td>
    </tr>`;

  return `<!doctype html>
<html lang="${language}">
<body style="margin:0;padding:0;background:#f5eeea;font-family:Arial,'Helvetica Neue',sans-serif;color:#44312a;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f5eeea;">
    <tr><td align="center" style="padding:22px 12px;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:620px;background:#f4ddd2;border:2px solid #a97932;border-radius:34px;overflow:hidden;">
        <tr><td align="center" style="background:#351d14;padding:70px 28px 62px;color:#d1a14b;">
          <div style="font-size:24px;line-height:1;margin-bottom:28px;color:#b88635;">✣</div>
          <div style="font-size:12px;letter-spacing:5px;color:#b88635;margin-bottom:28px;">${headerText.eyebrow}</div>
          <div style="font-family:Georgia,'Times New Roman',serif;font-size:38px;line-height:1.15;color:#f1dfd4;margin-bottom:24px;">${couple}</div>
          ${date ? `<div style="font-family:Georgia,'Times New Roman',serif;font-size:16px;letter-spacing:6px;color:#c7a992;margin-bottom:32px;">${date}</div>` : ''}
          <div style="font-family:Georgia,'Times New Roman',serif;font-size:18px;line-height:1.5;color:#c7aa9a;">${headerText.response}</div>
        </td></tr>

        <tr><td style="padding:58px 48px 26px;background:#f4ddd2;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse;">
            ${row(t.guest, fullName)}
            ${row(t.phone, escapeHtml(phone))}
            ${row(t.guests, escapeHtml(guests))}
            ${row(t.side, sideText)}
          </table>
        </td></tr>

        <tr><td style="padding:18px 48px 48px;background:#f4ddd2;">
          <div style="font-size:12px;letter-spacing:4px;color:#a97932;margin-bottom:18px;text-transform:uppercase;">${t.attendance}</div>
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
            <tr><td style="background:#faeee9;border-left:4px solid #9a6d2b;padding:22px 26px;font-family:Georgia,'Times New Roman',serif;font-size:20px;line-height:1.45;color:#44312a;">${attendanceText}</td></tr>
          </table>

          <div style="font-size:12px;letter-spacing:4px;color:#a97932;margin:34px 0 14px;text-transform:uppercase;">${t.message}</div>
          <div style="font-family:Georgia,'Times New Roman',serif;font-size:16px;line-height:1.7;color:#5a443a;white-space:pre-wrap;">${safeMessage}</div>
        </td></tr>

        <tr><td align="center" style="padding:26px 30px 34px;border-top:1px solid #d8b9a8;background:#f4ddd2;color:#b39584;font-size:12px;line-height:1.6;letter-spacing:1px;">✦ &nbsp; ${headerText.footer} &nbsp; ✦</td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
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
