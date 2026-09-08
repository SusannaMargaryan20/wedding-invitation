/*
  GOOGLE APPS SCRIPT BACKEND
  ==========================

  1. Go to https://script.google.com
  2. Create a new project.
  3. Replace the default code with this file.
  4. Change RECIPIENTS below.
  5. Deploy > New deployment > Web app.
     - Execute as: Me
     - Who has access: Anyone / anyone, even anonymous
  6. Authorize MailApp when Google asks.
  7. Copy the Web App URL and paste it into config.js:
       rsvp.endpoint: "https://script.google.com/macros/s/.../exec"

  Recipient emails stay here, server-side, and are not exposed in the website source.
*/

const RSVP_CONFIG = {
  RECIPIENTS: [
    "bride@example.com",
    "groom@example.com"
  ],

  WEDDING_NAME: "Անի & Դավիթ",
  SUBJECT_PREFIX: "Wedding RSVP",

  MAX_GUESTS: 10,
  MIN_SECONDS_TO_FILL_FORM: 2,
  MAX_NAME_LENGTH: 80
};

function doPost(e) {
  try {
    const payload = parsePayload_(e);
    validatePayload_(payload);

    const sideLabel = payload.side === "bride" ? "Bride side" : "Groom side";

    const subject =
      RSVP_CONFIG.SUBJECT_PREFIX +
      " — " +
      payload.firstName +
      " " +
      payload.lastName;

    const plainBody = [
      "New wedding RSVP",
      "",
      "Wedding: " + RSVP_CONFIG.WEDDING_NAME,
      "First name: " + payload.firstName,
      "Last name: " + payload.lastName,
      "Guests: " + payload.guests,
      "Side: " + sideLabel,
      "Website language: " + payload.language,
      "Submitted at: " + payload.submittedAt
    ].join("\n");

    const htmlBody =
      '<div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;color:#231c19">' +
        '<div style="padding:28px;border:1px solid #eadfd6;border-radius:18px;background:#fffaf5">' +
          '<p style="margin:0 0 6px;color:#b18a54;font-size:12px;letter-spacing:2px">NEW RSVP</p>' +
          '<h2 style="margin:0 0 22px;font-weight:500">' + escapeHtml_(RSVP_CONFIG.WEDDING_NAME) + '</h2>' +
          row_("First name", payload.firstName) +
          row_("Last name", payload.lastName) +
          row_("Guests", String(payload.guests)) +
          row_("Side", sideLabel) +
          row_("Language", payload.language) +
          row_("Submitted", payload.submittedAt) +
        '</div>' +
      '</div>';

    MailApp.sendEmail({
      to: RSVP_CONFIG.RECIPIENTS.join(","),
      subject: subject,
      body: plainBody,
      htmlBody: htmlBody,
      name: "Wedding RSVP"
    });

    return jsonResponse_({
      ok: true,
      message: "RSVP sent"
    });
  } catch (error) {
    console.error(error);

    return jsonResponse_({
      ok: false,
      message: error.message || "Unknown error"
    });
  }
}

function doGet() {
  return jsonResponse_({
    ok: true,
    service: "Wedding RSVP endpoint"
  });
}

function parsePayload_(e) {
  if (!e || !e.postData || !e.postData.contents) {
    throw new Error("Missing request body.");
  }

  let payload;

  try {
    payload = JSON.parse(e.postData.contents);
  } catch (error) {
    throw new Error("Invalid JSON.");
  }

  return payload;
}

function validatePayload_(payload) {
  const firstName = String(payload.firstName || "").trim();
  const lastName = String(payload.lastName || "").trim();
  const side = String(payload.side || "");
  const guests = Number(payload.guests);

  if (!firstName || !lastName) {
    throw new Error("Name is required.");
  }

  if (
    firstName.length > RSVP_CONFIG.MAX_NAME_LENGTH ||
    lastName.length > RSVP_CONFIG.MAX_NAME_LENGTH
  ) {
    throw new Error("Name is too long.");
  }

  if (!Number.isInteger(guests) || guests < 1 || guests > RSVP_CONFIG.MAX_GUESTS) {
    throw new Error("Invalid guest count.");
  }

  if (!["bride", "groom"].includes(side)) {
    throw new Error("Invalid side.");
  }

  const startedAt = Number(payload.formStartedAt);
  if (
    Number.isFinite(startedAt) &&
    Date.now() - startedAt < RSVP_CONFIG.MIN_SECONDS_TO_FILL_FORM * 1000
  ) {
    throw new Error("Form submitted too quickly.");
  }
}

function row_(label, value) {
  return (
    '<div style="display:flex;gap:14px;padding:10px 0;border-top:1px solid #eee2d9">' +
      '<strong style="min-width:120px">' + escapeHtml_(label) + '</strong>' +
      '<span>' + escapeHtml_(String(value)) + '</span>' +
    '</div>'
  );
}

function escapeHtml_(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function jsonResponse_(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
