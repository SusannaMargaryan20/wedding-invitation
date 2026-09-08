# Armenian Wedding Website

This project is a complete responsive wedding invitation website built with plain HTML, CSS and JavaScript.

## Files
- `index.html`
- `styles.css`
- `script.js`

## What is included
- Armenian / English / Russian language switcher
- Elegant Armenian typography (`Noto Serif Armenian`)
- Couple journey map animation
- Bride + groom approaching the Armenian church
- Church doors opening
- Couple exiting the church
- Guests appearing and rose petals falling
- Wedding day timeline
- Animated first dance
- Built-in WebAudio romantic waltz (no MP3 required)
- RSVP form
- Mobile responsive design
- Configurable RSVP backend URL

## Run
Open `index.html` directly, or use VS Code Live Server.

## Connect RSVP to Gmail with Google Apps Script

1. Create a Google Sheet.
2. Open Extensions → Apps Script.
3. Use a `doPost(e)` function that reads `JSON.parse(e.postData.contents)`.
4. Save the data to your sheet and optionally call `MailApp.sendEmail(...)`.
5. Deploy as Web App.
6. Copy the deployment URL.
7. Put it in `script.js`:

```js
const CONFIG = {
  rsvpEndpoint: "YOUR_GOOGLE_APPS_SCRIPT_URL"
}
```

## Change names/date/locations
Update the `CONFIG` object and the translation strings in `script.js`.

## Change ceremony/reception map links
Edit the two `href` values on `.map-link` elements in `index.html`.

## Production recommendation
For a real wedding:
- Use your own photographs or generated illustrations as section backgrounds.
- Replace demo names/locations.
- Use a dedicated Apps Script endpoint or serverless function for RSVP.
- Keep the endpoint write-only; never expose Gmail credentials in frontend code.
