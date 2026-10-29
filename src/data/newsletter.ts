/**
 * Newsletter + lead-capture copy and options — one place to edit.
 *
 * Change NEWSLETTER_NAME here and every page, form and email alert updates.
 */

export const NEWSLETTER_NAME = "Mending Healthcare"

export const NEWSLETTER_TAGLINE =
  "A monthly read for specialty clinic leaders on patient-reported data, clinical workflow and what's changing in care delivery."

export const NEWSLETTER_AUTHOR = "Sacha Moreau, Co-founder & CEO"

/** What each issue contains — shown on /newsletter. */
export const NEWSLETTER_SECTIONS = [
  {
    title: "One argument worth having",
    body: "A position on a question clinic leaders disagree about, backed by peer-reviewed evidence you can check.",
  },
  {
    title: "The deeper version",
    body: "The idea readers responded to most on LinkedIn this month, followed all the way through.",
  },
  {
    title: "What's new at AugMend",
    body: "Milestones, new modules and features, and real footage from the clinic, with nothing you have to read twice.",
  },
  {
    title: "One thing you can use",
    body: "A checklist, template or chart you can take into your next staff meeting.",
  },
]

/** Sign-up form: role options (lets us segment clinicians, administrators, investors). */
export const ROLE_OPTIONS = [
  "Clinician",
  "Clinic administrator or practice manager",
  "Health system leader",
  "Researcher",
  "Investor",
  "Other",
]

/** Welcome-page survey, drawn from the client intake workbook (sections 1, 2 and 10). */
export const SPECIALTY_OPTIONS = [
  "Pain medicine or PM&R",
  "Psychiatry or behavioral health",
  "TMS, ketamine or interventional psychiatry",
  "Neurology or neuropsychology",
  "Primary care",
  "Other",
]

export const PROBLEM_OPTIONS = [
  "Intake data that's incomplete or hard to trust",
  "Questionnaires take too long or don't get done",
  "Prior authorization paperwork",
  "Clinician documentation time",
  "Teaching patients skills between visits",
  "None right now, I'm following the field",
]

export const TIMELINE_OPTIONS = [
  "Just exploring",
  "Within the next 6 months",
  "Now, looking for a pilot",
]

/** Timeline answers that make a reader a warm lead (picked up by the weekday outreach task). */
export const WARM_TIMELINES = new Set(TIMELINE_OPTIONS.slice(1))

/** Booking link for "Book a 20-minute call" (Sacha's Notion Calendar page). */
export const BOOKING_URL =
  process.env.NEXT_PUBLIC_BOOKING_URL || "https://calendar.notion.so/meet/sachamoreau/hf7cw4y0w"

/** Label for every booking button across the site. */
export const CTA_LABEL = "Book a 20-minute call"

/** "Email us" links: opens a new email to info@ with Sacha in CC. */
export const CONTACT_MAILTO =
  "mailto:info@augmend.health?cc=smoreau@augmend.health&subject=AugMend%20inquiry"
