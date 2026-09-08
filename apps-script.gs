/**
 * Anna & David — RSVP backend
 * ---------------------------------------------------------------
 * Setup
 *  1. script.google.com → New project → paste this file.
 *  2. Fill in RSVP_CONFIG below.
 *  3. Deploy → New deployment → type "Web app".
 *       Execute as:      Me
 *       Who has access:  Anyone
 *  4. Copy the /exec URL into weddingConfig.rsvpEndpoint in script.js.
 *  5. Open the /exec URL once in a browser — it should answer {"result":"ok"}.
 *
 * Notes
 *  - No credentials live here: MailApp sends as the account that owns
 *    the script, so no passwords are ever stored or exposed.
 *  - The frontend never sees these addresses.
 * ---------------------------------------------------------------
 */

const RSVP_CONFIG = {
  BRIDE_EMAIL: "BRIDE_EMAIL@gmail.com",
  GROOM_EMAIL: "GROOM_EMAIL@gmail.com",
  DEFAULT_EMAIL: "DEFAULT_EMAIL@gmail.com",
  SUBJECT: "New Wedding RSVP",

  // Optional extras
  TIMEZONE: "Asia/Yerevan",
  LOG_TO_SHEET: false,      // true → also append every RSVP to a sheet
  SHEET_ID: "",             // spreadsheet id, used only when LOG_TO_SHEET is true
  SHEET_NAME: "RSVP"
};

const ALLOWED_SIDES = ["bride", "groom", "friends", "other"];

const SIDE_LABELS = {
  bride: "Bride's side",
  groom: "Groom's side",
  friends: "Friends",
  other: "Other"
};

const LANGUAGE_LABELS = {
  en: "English",
  hy: "Armenian",
  ru: "Russian"
};

const MIN_GUESTS = 1;
const MAX_GUESTS = 10;

/* ============================================================
   Entry points
   ============================================================ */

function doGet() {
  return jsonOutput({ result: "ok", service: "wedding-rsvp" });
}

function doPost(e) {
  try {
    const payload = parseRequest(e);
    const data = validate(payload);

    const recipient = routeEmail(data.side);
    const guestName = data.surname + " " + data.familyName;

    MailApp.sendEmail({
      to: recipient,
      subject: "💍 " + RSVP_CONFIG.SUBJECT + " — " + guestName,
      body: buildPlainText(data, guestName),
      htmlBody: buildHtml(data, guestName),
      name: "Anna & David"
    });

    if (RSVP_CONFIG.LOG_TO_SHEET) {
      logToSheet(data, guestName, recipient);
    }

    return jsonOutput({ result: "ok" });

  } catch (err) {
    return jsonOutput({ result: "error", message: String(err && err.message ? err.message : err) });
  }
}

/* ============================================================
   Request parsing
   ============================================================ */

function parseRequest(e) {
  if (!e) throw new Error("Empty request");

  // JSON body (text/plain or application/json)
  if (e.postData && e.postData.contents) {
    try {
      const parsed = JSON.parse(e.postData.contents);
      if (parsed && typeof parsed === "object") return parsed;
    } catch (ignore) { /* fall through to form parameters */ }
  }

  // Form-encoded fallback
  if (e.parameter && Object.keys(e.parameter).length) return e.parameter;

  throw new Error("Malformed request");
}

/* ============================================================
   Validation & sanitisation — never trust the client
   ============================================================ */

function sanitizeText(value, maxLength) {
  if (value === null || value === undefined) return "";

  let text = String(value);
  text = text.replace(/[\u0000-\u001F\u007F]/g, " ");   // control characters
  text = text.replace(/<[^>]*>/g, "");                   // stray markup
  text = text.replace(/\s+/g, " ").trim();

  if (maxLength && text.length > maxLength) text = text.substring(0, maxLength);
  return text;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function validate(payload) {
  const side = sanitizeText(payload.side, 20).toLowerCase();
  if (ALLOWED_SIDES.indexOf(side) === -1) throw new Error("Invalid side");

  const familyName = sanitizeText(payload.familyName, 60);
  if (familyName.length < 2) throw new Error("Invalid family name");

  const surname = sanitizeText(payload.surname, 60);
  if (surname.length < 2) throw new Error("Invalid surname");

  const guestCount = parseInt(payload.guestCount, 10);
  if (isNaN(guestCount) || guestCount < MIN_GUESTS || guestCount > MAX_GUESTS) {
    throw new Error("Invalid guest count");
  }

  let language = sanitizeText(payload.language, 5).toLowerCase();
  if (!LANGUAGE_LABELS[language]) language = "en";

  let submittedAt = new Date();
  if (payload.submittedAt) {
    const parsed = new Date(payload.submittedAt);
    if (!isNaN(parsed.getTime())) submittedAt = parsed;
  }

  return {
    side: side,
    sideLabel: SIDE_LABELS[side],
    familyName: familyName,
    surname: surname,
    guestCount: guestCount,
    language: language,
    languageLabel: LANGUAGE_LABELS[language],
    submittedAt: submittedAt,
    submittedLabel: Utilities.formatDate(submittedAt, RSVP_CONFIG.TIMEZONE, "MMMM d, yyyy, HH:mm")
  };
}

/* ============================================================
   Routing
   ============================================================ */

function routeEmail(side) {
  switch (side) {
    case "bride": return RSVP_CONFIG.BRIDE_EMAIL;
    case "groom": return RSVP_CONFIG.GROOM_EMAIL;
    case "friends":
    case "other":
    default: return RSVP_CONFIG.DEFAULT_EMAIL;
  }
}

/* ============================================================
   Email bodies
   ============================================================ */

function buildPlainText(data, guestName) {
  return [
    "NEW WEDDING RSVP",
    "",
    "Guest:             " + guestName,
    "Side:              " + data.sideLabel,
    "Number of guests:  " + data.guestCount,
    "Language:          " + data.languageLabel,
    "Submitted:         " + data.submittedLabel,
    "",
    "Anna & David — 14 June 2025, Yerevan"
  ].join("\n");
}

function buildHtml(data, guestName) {
  const rows = [
    ["Guest", guestName],
    ["Side", data.sideLabel],
    ["Number of guests", String(data.guestCount)],
    ["Language", data.languageLabel],
    ["Submitted", data.submittedLabel]
  ];

  let body = "";
  rows.forEach(function (row, index) {
    const border = index === rows.length - 1 ? "none" : "1px solid #e6ded0";
    body +=
      '<tr>' +
        '<td style="padding:16px 0;border-bottom:' + border + ';font-family:Helvetica,Arial,sans-serif;' +
          'font-size:11px;letter-spacing:1.6px;text-transform:uppercase;color:#81766A;width:170px;' +
          'vertical-align:top;">' + escapeHtml(row[0]) + '</td>' +
        '<td style="padding:16px 0;border-bottom:' + border + ';font-family:Georgia,\'Times New Roman\',serif;' +
          'font-size:18px;color:#25231F;">' + escapeHtml(row[1]) + '</td>' +
      '</tr>';
  });

  return '' +
'<!DOCTYPE html>' +
'<html><body style="margin:0;padding:0;background:#F7F3EA;">' +
  '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F7F3EA;padding:32px 16px;">' +
    '<tr><td align="center">' +
      '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" ' +
             'style="max-width:560px;background:#FFFFFF;border:1px solid #E6DED0;">' +

        '<tr><td style="padding:40px 40px 8px;text-align:center;">' +
          '<div style="font-family:Georgia,\'Times New Roman\',serif;font-size:26px;color:#25231F;letter-spacing:2px;">' +
            'A <span style="color:#C29B5B;font-style:italic;">&amp;</span> D' +
          '</div>' +
        '</td></tr>' +

        '<tr><td style="padding:20px 40px 0;text-align:center;">' +
          '<div style="font-family:Helvetica,Arial,sans-serif;font-size:11px;letter-spacing:3px;' +
                      'text-transform:uppercase;color:#C29B5B;">New wedding RSVP</div>' +
          '<div style="height:1px;background:#E6DED0;margin:24px 0 4px;"></div>' +
        '</td></tr>' +

        '<tr><td style="padding:0 40px 8px;">' +
          '<table role="presentation" width="100%" cellpadding="0" cellspacing="0">' + body + '</table>' +
        '</td></tr>' +

        '<tr><td style="padding:28px 40px 40px;text-align:center;">' +
          '<div style="height:1px;background:#E6DED0;margin-bottom:20px;"></div>' +
          '<div style="font-family:Georgia,\'Times New Roman\',serif;font-size:14px;color:#81766A;">' +
            'Anna &amp; David — 14 June 2025, Yerevan' +
          '</div>' +
        '</td></tr>' +

      '</table>' +
    '</td></tr>' +
  '</table>' +
'</body></html>';
}

/* ============================================================
   Optional sheet log
   ============================================================ */

function logToSheet(data, guestName, recipient) {
  if (!RSVP_CONFIG.SHEET_ID) return;
  try {
    const ss = SpreadsheetApp.openById(RSVP_CONFIG.SHEET_ID);
    let sheet = ss.getSheetByName(RSVP_CONFIG.SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(RSVP_CONFIG.SHEET_NAME);
      sheet.appendRow(["Submitted", "Guest", "Family name", "First name", "Side", "Guests", "Language", "Sent to"]);
    }
    sheet.appendRow([
      data.submittedLabel, guestName, data.familyName, data.surname,
      data.sideLabel, data.guestCount, data.languageLabel, recipient
    ]);
  } catch (err) {
    console.error("Sheet log failed: " + err);
  }
}

/* ============================================================
   Helpers
   ============================================================ */

function jsonOutput(object) {
  return ContentService
    .createTextOutput(JSON.stringify(object))
    .setMimeType(ContentService.MimeType.JSON);
}

/* Run once from the editor to check delivery before sharing the site. */
function testRsvp() {
  const response = doPost({
    postData: {
      contents: JSON.stringify({
        side: "bride",
        familyName: "Margaryan",
        surname: "Susanna",
        guestCount: 4,
        language: "en",
        submittedAt: new Date().toISOString()
      })
    }
  });
  console.log(response.getContent());
}
