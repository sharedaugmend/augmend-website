# Newsletter and lead capture — setup

What this branch adds, and the one-time setup before it works in production.

## What's on the site

| Page / piece | What it does |
|---|---|
| `/newsletter` | Mending Healthcare sign-up, what's in each issue, archive of past issues |
| `/newsletter/welcome` | Shown after sign-up: three optional questions (specialty, biggest problem, timeline) and a free-text note |
| `/getting-started` | Public four-stage version of the implementation readiness checklist, with a booking button (Sacha's Notion Calendar link) |
| Footer | Compact sign-up (email + role) on every page |
| End of every blog post | Boxed sign-up |
| `/contact` | Now actually sends: each message goes to Slack. Before this change, submissions were discarded. |
| Analytics | Vercel Web Analytics (turn on in Vercel → Project → Analytics) |

Issues are published like blog posts, with the `/new-blog-post` skill and category `newsletter`. They then appear on `/newsletter` and `/blog`.

Newsletter name, tagline, form options, survey wording and booking link all live in `src/data/newsletter.ts`.

## Where data goes

- **Sign-up** → beehiiv subscriber in the Mending Healthcare publication, with First Name, Role, Organization, and the sign-up location as `utm_campaign`.
- **Survey** → the same subscriber gets Specialty, Biggest Problem, Timeline and Survey Notes. Only the person who just signed up can answer (signed httpOnly cookie, valid one day).
- **Warm leads** (Timeline "Within the next 6 months" or "Now, looking for a pilot") are picked up each weekday morning by the "Website leads → outreach tracker" scheduled task, which adds them to the outreach tracker for a drafted reply. No Slack alert is sent by the site for newsletter activity.
- **Contact form** → Slack, through an incoming webhook (time-sensitive: the page promises a reply within one business day).

## One-time setup — Vercel → Project → Settings → Environment Variables (Production and Preview)

| Variable | Value |
|---|---|
| `BEEHIIV_API_KEY` | beehiiv → Settings → API → create key |
| `SLACK_LEADS_WEBHOOK_URL` | Slack: create private channel `#website-leads`, add the Incoming Webhooks app to it, copy the URL |

Optional: `BEEHIIV_PUBLICATION_ID` (defaults to Mending Healthcare's ID), `NEWSLETTER_SIGNING_SECRET` (defaults to the beehiiv key), `NEXT_PUBLIC_BOOKING_URL` (defaults to Sacha's Notion Calendar link).

Already done in beehiiv: publication renamed Mending Healthcare, sender "Sacha Moreau", footer address, custom fields First Name, Role, Organization, Specialty, Biggest Problem, Timeline, Survey Notes.

Redeploy after adding variables, then test: submit the contact form, sign up with a test address, answer the survey, and check Slack (contact only) and beehiiv (subscriber + fields).

## Behaviour when something isn't configured

- No beehiiv key: sign-up asks people to email info@augmend.health instead.
- No Slack webhook: the contact form shows "please email info@augmend.health" instead of pretending to send.
- Nothing is ever silently dropped.

## Before going live

- Privacy policy: add a line on newsletter emails and beehiiv as a processor (for Tom to review).
