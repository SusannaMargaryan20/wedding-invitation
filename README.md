# Elegant Armenian Wedding Invitation Website

A mobile-responsive, trilingual wedding invitation with:

- Armenian as the default language
- Armenian / English / Russian language selector
- Animated bride + groom church sequence
- Original Armenian church illustration
- Bride and groom entering the church
- Couple coming back out
- Rose-petal celebration animation
- Restaurant / ballroom scene
- Tango animation
- Optional background music
- Wedding schedule / map links
- RSVP form
- Gmail delivery using Google Apps Script
- Central configuration in `config.js`

## 1. Project structure

```text
wedding-invitation/
├─ index.html
├─ styles.css
├─ config.js
├─ app.js
├─ Code.gs
└─ assets/
   ├─ favicon.svg
   └─ wedding-tango.mp3   ← add your own audio file
```

## 2. Change wedding information

Open `config.js`.

You can configure:

- bride name
- groom name
- monogram
- wedding date
- RSVP deadline
- church name
- church time
- church Google Maps link
- restaurant name
- restaurant time
- restaurant Google Maps link
- music path and volume
- number of rose petals
- maximum guest count
- all Armenian / English / Russian text

The default language is:

```js
defaultLanguage: "hy"
```

## 3. Add tango / wedding music

Place your licensed audio file here:

```text
assets/wedding-tango.mp3
```

You can change the filename in `config.js`:

```js
music: {
  src: "assets/wedding-tango.mp3",
  volume: 0.45
}
```

Browsers generally block sound from autoplaying before the visitor interacts with the page. For that reason the site includes a music button. This is the reliable approach on iPhone, Android, Chrome and Safari.

## 4. Send RSVP submissions to Gmail

The recipient email addresses should NOT be added to the frontend.

Use `Code.gs` in Google Apps Script:

1. Open `https://script.google.com`
2. Create a new Apps Script project.
3. Delete the default code.
4. Paste the contents of `Code.gs`.
5. Update:

```js
RECIPIENTS: [
  "bride@gmail.com",
  "groom@gmail.com"
]
```

6. Click **Deploy → New deployment**.
7. Choose **Web app**.
8. Set:
   - Execute as: **Me**
   - Who has access: **Anyone / anyone, even anonymous**
9. Deploy.
10. Authorize the requested permission.
11. Copy the `/exec` deployment URL.
12. In `config.js`, replace:

```js
endpoint: "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL"
```

with:

```js
endpoint: "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec"
```

After that, every valid RSVP submission will email all addresses in `RECIPIENTS`.

The frontend uses a one-way `no-cors` POST for better compatibility with Google Apps Script from static sites, especially on mobile browsers. That means the page can confirm that the browser sent the request, but it cannot read the Apps Script response. For a public production site that needs cryptographic/confirmed delivery status, use a same-origin serverless endpoint (for example a Vercel/Netlify/Cloudflare function) and let that endpoint send the email.

## 5. Security notes

This version keeps recipient Gmail addresses server-side and includes:

- honeypot spam field
- server-side field validation
- maximum guest validation
- minimum form-fill time
- escaped HTML inside the email

A fully public RSVP form can still receive sophisticated automated spam. If the invitation will be widely shared publicly instead of sent privately to wedding guests, add Cloudflare Turnstile or another CAPTCHA service in front of the submission endpoint.

## 6. Test locally

Because it is a static frontend, you can open `index.html` directly.

A better development option is VS Code Live Server or:

```bash
npx serve .
```

Then open the local URL shown by the command.

## 7. Publish

The frontend can be hosted on:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- your own domain / hosting

Google Apps Script remains the RSVP email backend.

## 8. Animation behavior

The church scene begins when the visitor scrolls it into view:

1. Bride and groom approach one another.
2. They move to the Armenian church entrance.
3. They disappear inside.
4. After a short pause they reappear.
5. Guests appear.
6. Rose petals are thrown toward the couple.

The restaurant scene animates the couple in a looping tango-inspired movement while it remains visible.

For accessibility, visitors who have **Reduce Motion** enabled on their device receive a nearly static version rather than the full animation.
