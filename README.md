# Wedding Website V2

This version is intentionally much closer to the selected mockup.

## What changed
- Uses the selected design's warm cream / rose / Armenian-stone visual palette.
- Uses photo-based cinematic scenes instead of CSS-drawn bride/groom/church characters.
- The church section is a scroll-controlled story:
  1. approaching the church
  2. entering / ceremony
  3. leaving the church with animated rose petals
- Ballroom section uses the same visual language as the selected design.
- Armenian typography uses `Noto Serif Armenian`.
- HY / EN / RU translation applies to all site text.
- Responsive mobile layout.
- RSVP form remains configurable.
- Optional music URL in `script.js`; otherwise the page generates a quiet instrumental waltz with WebAudio.

## Files
- `index.html`
- `styles.css`
- `script.js`
- `assets/hero.jpg`
- `assets/church-enter.jpg`
- `assets/church-exit.jpg`
- `assets/ballroom.jpg`

## Configuration
Open `script.js` and edit `CONFIG`.

### Google Apps Script RSVP
Set:
```js
rsvpEndpoint: "YOUR_DEPLOYED_APPS_SCRIPT_URL"
```

Until an endpoint is set, form submissions are stored only in the browser's localStorage for testing.

### Music
You can set:
```js
musicUrl: "assets/your-song.mp3"
```
or leave it empty to use the built-in generated waltz.

## Run
Open `index.html` directly or use VS Code Live Server.
