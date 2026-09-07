/**
 * GOOGLE APPS SCRIPT — Wedding RSVP Gmail routing
 *
 * SETUP
 * 1. Go to https://script.google.com and create a new project.
 * 2. Paste this entire file into Code.gs.
 * 3. Replace BRIDE_EMAIL, GROOM_EMAIL and DEFAULT_EMAIL below.
 * 4. Deploy > New deployment > Web app.
 * 5. Execute as: Me
 * 6. Who has access: Anyone
 * 7. Authorize Gmail permission when Google asks.
 * 8. Copy the Web App /exec URL and paste it into weddingConfig.rsvpEndpoint in script.js.
 */

const RSVP_CONFIG = {
  BRIDE_EMAIL: "bride@gmail.com",
  GROOM_EMAIL: "groom@gmail.com",
  DEFAULT_EMAIL: "wedding@gmail.com",
  SUBJECT: "💍 New Wedding RSVP"
};

function doPost(e) {
  try {
    const p = e && e.parameter ? e.parameter : {};

    const side = clean_(p.familySide);
    const familyName = clean_(p.familyName);
    const surname = clean_(p.surname);
    const guestCount = clean_(p.guestCount || "1");
    const language = clean_(p.language || "en");

    if (!side || !familyName || !surname) {
      return response_("Missing required fields", 400);
    }

    const receiver = getReceiver_(side);
    const sideLabel = getSideLabel_(side);

    const subject = `${RSVP_CONFIG.SUBJECT} — ${surname}`;

    const htmlBody = `
      <div style="font-family:Arial,sans-serif;max-width:620px;margin:auto;color:#241f1b">
        <div style="padding:28px 30px;background:#201a15;color:#fff">
          <div style="font-size:12px;letter-spacing:2px;color:#d2b078">WEDDING RSVP</div>
          <h1 style="margin:8px 0 0;font-family:Georgia,serif;font-weight:400">New guest response</h1>
        </div>
        <div style="padding:30px;background:#faf7f1;border:1px solid #eadfce;border-top:0">
          <table style="width:100%;border-collapse:collapse;font-size:15px">
            ${row_("Side", sideLabel)}
            ${row_("Family name", familyName)}
            ${row_("Surname", surname)}
            ${row_("Guests", guestCount)}
            ${row_("Language", language.toUpperCase())}
          </table>
          <p style="margin:26px 0 0;color:#776d63;font-size:12px">Submitted from the wedding invitation website.</p>
        </div>
      </div>`;

    const textBody = [
      "NEW WEDDING RSVP",
      "",
      `Side: ${sideLabel}`,
      `Family name: ${familyName}`,
      `Surname: ${surname}`,
      `Guests: ${guestCount}`,
      `Language: ${language.toUpperCase()}`
    ].join("\n");

    GmailApp.sendEmail(receiver, subject, textBody, { htmlBody: htmlBody, name: "Wedding RSVP" });

    return response_("OK", 200);
  } catch (error) {
    console.error(error);
    return response_("Server error", 500);
  }
}

function getReceiver_(side) {
  switch (side) {
    case "bride": return RSVP_CONFIG.BRIDE_EMAIL;
    case "groom": return RSVP_CONFIG.GROOM_EMAIL;
    case "friends":
    case "other":
    default: return RSVP_CONFIG.DEFAULT_EMAIL;
  }
}

function getSideLabel_(side) {
  return ({ bride: "Bride's side", groom: "Groom's side", friends: "Friends", other: "Other" })[side] || side;
}

function clean_(value) {
  return String(value || "").trim().replace(/[<>]/g, "").slice(0, 200);
}

function row_(label, value) {
  return `<tr><td style="padding:10px 0;color:#81766a;border-bottom:1px solid #e8dfd3;width:38%">${label}</td><td style="padding:10px 0;font-weight:600;border-bottom:1px solid #e8dfd3">${value}</td></tr>`;
}

function response_(message, statusCode) {
  // Apps Script ContentService does not expose arbitrary HTTP status codes for Web Apps,
  // so we return a compact JSON response body.
  return ContentService
    .createTextOutput(JSON.stringify({ ok: statusCode < 400, message: message }))
    .setMimeType(ContentService.MimeType.JSON);
}
