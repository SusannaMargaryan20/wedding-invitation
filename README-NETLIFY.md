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

- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `BRIDE_EMAIL`
- `GROOM_EMAIL`

Do not put `RESEND_API_KEY` in frontend JavaScript or GitHub.

## 4. Resend setup

Create a Resend API key and use a sender address from a domain verified in Resend, for example:

`rsvp@yourdomain.com`

Then set bride and groom recipient addresses to any Gmail addresses you want.

## How it works

The existing frontend sends the form to:

`POST /api/rsvp`

Netlify redirects it internally to:

`/.netlify/functions/rsvp`

The Netlify Function chooses the recipient:

- `side = bride` -> `BRIDE_EMAIL`
- `side = groom` -> `GROOM_EMAIL`

Then it sends the email through Resend.

## Local testing (optional)

If you install Netlify CLI, you can run:

`netlify dev`

For the live site, no local Node/Express server is needed.
