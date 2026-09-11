# Netlify + Resend setup

This project is ready for GitHub -> Netlify deployment.

## Netlify settings

- Base directory: leave empty
- Build command: leave empty
- Publish directory: `public`
- Functions directory: `netlify/functions`

## The only Environment Variable you must add

In Resend Dashboard -> API Keys, create an API key and copy it.

In Netlify -> Project configuration -> Environment variables -> Add a variable:

- Key: `RESEND_API_KEY`
- Value: the Resend key beginning with `re_...`

Then redeploy the site.

Do NOT put the Resend API key in GitHub or frontend JavaScript.

## RSVP recipients

Recipients are in `netlify/functions/wedding-config.mjs`.

For this project:

- Bride: `margarsusanna5@gmail.com`
- Groom: `margarsusanna5@gmail.com`

They are kept as two separate config fields so you can set different addresses for another wedding later.

## Sender

For testing, the function sends from `Wedding RSVP <onboarding@resend.dev>`.
This works for Resend's test flow when sending to the email associated with your Resend account.
For sending to arbitrary recipient addresses later, verify your own domain in Resend and then change the `from` address.

## Music

The deploy uses `/wedding-music.mp3`, a smaller 44.1 kHz / 128 kbps MP3 for faster loading. Playback starts directly from the Open Invitation user gesture to satisfy browser autoplay rules.
