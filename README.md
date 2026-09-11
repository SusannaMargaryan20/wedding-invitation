# Multi-Wedding Invitation — Netlify + Resend

One codebase can serve multiple couples. The selected wedding is controlled by the `wedding` query parameter.

## Included demo weddings

- Hrant & Anna: `/?wedding=hrant-anna`
- Vahagn & Ekaterina: `/?wedding=vahagn-ekaterina`

If `wedding` is missing or unknown, the site falls back to `hrant-anna`.

## Public wedding configuration

Edit `public/weddings-config.js` to change public information such as:

- couple names in Armenian / English / Russian
- wedding date
- church name, location, time, map query
- restaurant name, location, time, map query
- music title and file URL

Both demo weddings currently reuse the existing date, locations, images, and music. Change those values in the config when you have the real details for each couple.

## RSVP email configuration

Edit `netlify/functions/wedding-config.mjs` for private recipient routing.

Each wedding has separate `brideEmail` and `groomEmail` fields. They are currently both set to `margarsusanna5@gmail.com` for both demo weddings.

The frontend sends the active `weddingId` with every RSVP. The Netlify Function validates it and selects the matching wedding/email configuration before sending through Resend.

## Netlify

- Publish directory: `public`
- Functions directory: `netlify/functions`
- Required Environment Variable: `RESEND_API_KEY`

Do not put the Resend API key in GitHub or frontend JavaScript.

## Animation and scrolling

The cinematic story loops continuously while visible. It does not lock wheel, touch, keyboard, or normal page scrolling.
