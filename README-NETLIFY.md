# Netlify + Resend setup

This project is ready for GitHub -> Netlify deployment.

## Netlify settings

- Base directory: leave empty
- Build command: leave empty
- Publish directory: `public`
- Functions directory: `netlify/functions`

## Required Environment Variable

In Resend Dashboard -> API Keys, create an API key.

In Netlify -> Project configuration -> Environment variables -> Add a variable:

- Key: `RESEND_API_KEY`
- Value: your Resend key beginning with `re_...`
- Mark it as a secret

Then redeploy the site.

## Multi-wedding URLs

After deployment, use the same Netlify domain with a different query parameter:

- `https://YOUR-SITE.netlify.app/?wedding=hrant-anna`
- `https://YOUR-SITE.netlify.app/?wedding=vahagn-ekaterina`

## Config files

Public content: `public/weddings-config.js`

Private RSVP recipient routing: `netlify/functions/wedding-config.mjs`

For both included weddings, bride and groom recipients currently point to `margarsusanna5@gmail.com`. You can later change each one independently.

## Sender

For testing, email is sent from `Wedding RSVP <onboarding@resend.dev>`.
When you need to send to arbitrary recipient addresses, verify your own domain in Resend and change the sender address.
