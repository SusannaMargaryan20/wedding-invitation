# Netlify + Resend deployment

This project is ready to deploy directly from GitHub to Netlify.

## 1. Push the project to GitHub

Commit the whole project, but never commit a real `.env` file or API key.

## 2. Import it in Netlify

In Netlify:

1. Add new project / Import an existing project.
2. Connect GitHub.
3. Select this repository.
4. Netlify reads `netlify.toml` automatically.
5. No build command is required.
6. Publish directory is already configured as `public`.

## 3. Add environment variables in Netlify

Open your Netlify project settings and add:

- `RESEND_API_KEY` (required)
- `RESEND_FROM_EMAIL` (optional; defaults to `onboarding@resend.dev`)
- `RSVP_EMAIL` (optional; defaults to `margarsusanna5@gmail.com`)

Do not put `RESEND_API_KEY` in frontend JavaScript or GitHub.

## 4. Resend setup

Create a Resend API key and use a sender address from a domain verified in Resend, for example:

`rsvp@yourdomain.com`

All RSVP submissions currently go to `margarsusanna5@gmail.com`. You can later change only `RSVP_EMAIL` in Netlify Environment Variables without editing the code.

## How it works

The existing frontend sends the form to:

`POST /api/rsvp`

Netlify redirects it internally to:

`/.netlify/functions/rsvp`

The Netlify Function keeps the bride/groom selection in the email details, but both cases are sent to the same configured RSVP inbox.

Then it sends the email through Resend.

## Local testing (optional)

If you install Netlify CLI, you can run:

`netlify dev`

For the live site, no local Node/Express server is needed.
