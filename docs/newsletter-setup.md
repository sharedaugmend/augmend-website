# Newsletter and lead capture — setup

What this branch adds, and the one-time setup before it works in production.

## What's on the site

| Page / piece | What it does |
|---|---|
| `/newsletter` | Sign-up form, what's in each issue, archive of past issues |
| `/newsletter/welcome` | Shown after sign-up: three optional questions (specialty, biggest problem, timeline) |
| `/getting-started` | Public four-stage version of the implementation readiness checklist, with a booking button |
| Footer | Compact sign-up (email + role) on every page |
| End of every blog post | Boxed sign-up |
| `/contact` | Now actually sends: each message goes to Slack. Before this change, submissions were discarded. |
| Analytics | Vercel Web Analytics (turn on in Vercel → Project → Analytics) |

Issues are published like blog posts, with the `/new-blog-post` skill and category `newsletter`. They then appear on `/newsletter` and `/blog`.

Newsletter name, tagline, form options and survey wording all live in `src/data/newsletter.ts`.

## Where data goes

- **Sign-up** → beehiiv subscriber (with First Name, Role, Organization) + a Slack alert.
- **Survey** → the same beehiiv subscriber gets Specialty, Biggest Problem, Timeline + a Slack alert. Answers of "Within the next 6 months" or "Now, looking for a pilot" are marked `WARM LEAD`.
- **Contact form** → Slack alert.

The survey can only update the person who just signed up (signed, httpOnly cookie, valid one day).

## One-time setup

1. **beehiiv**: create the publication. In Settings → Subscribers → Custom fields, add exactly: `First Name`, `Role`, `Organization`, `Specialty`, `Biggest Problem`, `Timeline` (all text). In Settings → API, create a key and copy the publication ID (`pub_…`).
2. **Slack**: create a private channel `#website-leads`, add an Incoming Webhook app for it, copy the webhook URL.
3. **Booking link**: Google Calendar → Create → Appointment schedule (20 minutes). Copy the booking page link.
4. **Vercel → Project → Settings → Environment Variables** (Production and Preview):

| Variable | Value |
|---|---|
| `BEEHIIV_API_KEY` | from step 1 |
| `BEEHIIV_PUBLICATION_ID` | `pub_…` from step 1 |
| `SLACK_LEADS_WEBHOOK_URL` | from step 2 |
| `NEWSLETTER_SIGNING_SECRET` | any long random string (e.g. `openssl rand -hex 32`) |
| `NEXT_PUBLIC_BOOKING_URL` | from step 3 (falls back to `/contact` if empty) |

5. Redeploy, then test: submit the contact form, sign up with a test address, answer the survey, and check Slack and beehiiv.

## Behaviour when something isn't configured

- No beehiiv keys: sign-ups still reach Slack, flagged "add this person by hand".
- No Slack webhook: the contact form shows "please email info@augmend.health" instead of pretending to send.
- Neither: sign-up shows the same email fallback. Nothing is ever silently dropped.

## Before going live

- Privacy policy: add a line on newsletter emails and beehiiv as a processor (for Tom to review).
