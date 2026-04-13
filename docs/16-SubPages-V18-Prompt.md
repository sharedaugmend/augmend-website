# Prompt 16: Sub-Page Copy + Structural Changes (V18)

## Context
This prompt implements V18 changes to all sub-pages. Read `14-Website-Copy-V18.md` in the Marketing Advisory folder for full copy reference. Run this AFTER Prompt 15 (homepage changes).

## Instructions

### 1. Create "How It Works in Practice" Page (Merged Use-Case Page)

Create a new page at `/in-practice` (or `/how-it-works-in-practice`). This **replaces** the three separate pages: For Providers, For Clinics, For Health Systems.

**Page title:** `HOW IT WORKS IN PRACTICE`
**Subtitle:** `For patients, providers, and practice leaders — one platform that serves all three.`

The page has three main sections. Use the full copy from Section 2 of `14-Website-Copy-V18.md` ("HOW IT WORKS IN PRACTICE"). Key elements:

**For Patients section:**
- Headline: "A conversation designed for disclosure — not a form designed for speed."
- Include Beth Savoldelli quote: "I've not yet seen a clinical immersive experience this enjoyable, professional, or advanced. That there was great care taken to work with clinicians to create these experiences." — Beth Savoldelli, XR Impact Network

**For Providers section:**
- Headline: "Know your patient before the visit begins."
- Mock report card visual (existing component can be reused from old For Providers page)
- Feature callouts: Evidence-linked claims, Two report types per session (clinical + billing-ready, detailed intake for new patients, SOAP for follow-ups), Cross-session intelligence, Confidence markers
- Without/With AugMend comparison
- NO Mike Kritzer quote (removed)

**For Practice Leaders section:**
- Headline: "Your clinic is not under-delivering care. It is under-documenting the complexity your providers already manage."
- Economics/stats block (reuse stat cards from old For Clinics page)
- Deployment section: spell out that non-clinical staff initiate sessions, set up device, then step away. Patient completes independently.
- Feature list with updated items:
  - "EHR integration available — in-basket, SSO, or full integration" (replaces Redox mention)
  - Remove "2–3 week setup" timeline
  - Change "therapeutic" to "behavioral" in any exercise references
- "Over time" section: replace "irreplaceable system" language with "A care relationship that compounds" — remove word "irreplaceable" entirely
- Trust and data safety block: "HIPAA compliant. SOC 2 for integrations. End-to-end encryption. BAAs with all partners." Link to Secureframe trust page (use `#` as placeholder URL).
- Remove "No FDA clearance required"

**CTA at bottom:**
```
See how it fits your workflow.
[Schedule a Conversation]
```

### 2. Delete Old Use-Case Pages

After the new merged page is created and confirmed working:
- Delete `/platform/for-providers` (or equivalent route)
- Delete `/platform/for-clinics` (or equivalent route)
- Delete `/platform/for-health-systems` (or equivalent route)

Set up redirects from old URLs to `/in-practice` if possible.

### 3. Update How It Works (Detailed Platform Page)

Update the detailed platform page at `/how-it-works` (or `/platform/how-it-works`).

**Key changes throughout:**

a) **Remove all internal system names.** Replace:
   - "Anamnesis" → "The Assessment" or just describe the function
   - "Anodyne" → "Behavioral Exercises" or "The Response System" (for internal reference only — on the public page, just describe what it does)
   - "Summa" → "The Intelligence Layer" or describe function
   - Where the three systems are listed, describe them by function: "The assessment system captures. The response system closes the loop. The intelligence layer transforms data at scale."

b) **Remove "Anamnesis," "Anodyne," "Summa" as named headings.** Replace with descriptive headings:
   - "01 — The Listening System" (instead of "01 — Anamnesis: The Listening System")
   - "02 — The Response System" (instead of "02 — Anodyne: The Response System")
   - "03 — The Intelligence System" (instead of "03 — Summa: The Intelligence System")

c) **Section 3 (Clinical Report):** Update report descriptions to match the actual product:
   - "Detailed Intake Report" (replaces "Expansive Consult") — for initial intake and re-authorization
   - "SOAP Note" (replaces "Quick SOAP") — for check-ins and progress visits
   - "Billing-Ready Report" — generated alongside every clinical report
   - Remove "Three report tiers" language. Replace with "Two reports per session" — one clinical (intake or SOAP depending on session type), one billing-ready.

d) **Section 7 (Deployment):** 
   - Replace "EHR integration via Redox — 2–3 week setup" with "EHR integration available — in-basket, SSO, or full integration"
   - Remove "No FDA clearance required"
   - Replace "SOC 2 Type 2 in progress" with "SOC 2 for integrations"

e) **Global text replacements on this page:**
   - "therapeutic exercises" → "behavioral exercises"
   - "chronic conditions" → "complex patients" or "patient complexity"
   - "irreplaceable" → "compounds over time" or remove
   - "Actively recruiting" → remove
   - "No FDA clearance required" → remove

### 4. Rewrite Evidence Page

Replace the content of `/evidence` with the reorganized structure from V18. The page has three sections:

**Section 1: AugMend Research**
- Ko et al. (Johns Hopkins, 2026) — increased disclosure study
- NCT07336537 (MIT.nano) — VR preference trial
- Remove "Actively recruiting" from trial description
- Add links to publications where available

**Section 2: Founder Publications**
Add the 6 peer-reviewed publications by AugMend's co-founders:

1. Moreau S, Thérond A, et al. "Virtual Reality in Acute and Chronic Pain Medicine: An Updated Review." Current Pain and Headache Reports, 28(9):893–928, 2024. DOI: 10.1007/s11916-024-01246-2

2. Mazzolenis MV, Mourra GN, Moreau S, ... Thérond A. "The Role of Virtual Reality and Artificial Intelligence in Cognitive Pain Therapy: A Narrative Review." Current Pain and Headache Reports, 28(9):881–892, 2024. DOI: 10.1007/s11916-024-01270-2

3. Cerda IH, Thérond A, Moreau S, Robinson CL. "Telehealth and Virtual Reality Technologies in Chronic Pain Management: A Narrative Review." Current Pain and Headache Reports, 28:83–94, 2024. DOI: 10.1007/s11916-023-01205-3

4. Pan A, Moreau S, ... Thérond A. "The Role of Virtual Reality in Chronic Pain and Loneliness: Narrative Review." Journal of Medical Extended Reality, 2(1):142–159, 2025. DOI: 10.1089/jmedxr.2024.0063

5. Schroeder AH, Bogie BJM, Rahman TT, Thérond A, et al. "Feasibility and Efficacy of Virtual Reality Interventions to Improve Psychosocial Functioning in Psychosis: Systematic Review." JMIR Mental Health, 9(2):e28502, 2022. DOI: 10.2196/28502

6. Thérond A, et al. "The Efficacy of Cognitive Remediation in Depression: A Systematic Literature Review and Meta-Analysis." Journal of Affective Disorders, 287:164–173, 2021. PMID: 33631438

Each with a DOI link.

**Section 3: Third-Party Supporting Research**
- Lucas et al. (2014) — moved here from main evidence cards
- Clearly labeled as "Independent research supporting AugMend's approach"
- Placeholder for additional third-party studies

**CTA:**
```
Talk to AugMend Health.
[Schedule a Conversation]
```

(Replaces "Interested in the evidence?" CTA)

### 5. Rewrite Our Story Page

Major rewrite. Replace content at `/company/our-story` (or equivalent).

**Key principles for this rewrite:**
- Mission-led, not mechanism-led
- NO pivot story (that's for investors/NDA only)
- NO system names (Anamnesis, Anodyne, Summa)
- NO "demos completed" stat
- NO "actively recruiting"
- NO "irreplaceable dataset" competitive moat language
- NO "destroying hope on both sides" — too dramatic
- Keep it simple and factual

**Opening section** (Dark background):
- Replace Mark's "Grandpa MD PhD" quote with a face-with-dots atmospheric background visual (no quote)
- Headline: "WHY WE EXIST"
- Bold statement: "The provider does not have enough time with the patient. When they do, they are pulled in too many directions to capture the full picture. The patient is not feeling heard. The clinic loses on both quality and revenue."

**Body section** (White background):
Use the copy from V18 Section 5 (Our Story). Key narrative:
- There is a gap between what patients carry and what the encounter captures
- Complex patients (chronic pain, behavioral health) present with information a 15-minute visit cannot surface
- Not because providers don't know what to ask — because there isn't enough time
- Providers need help. Patients need to be heard. Clinics need documentation that reflects care complexity.

**What We Built** (Ivory background):
- Brief: platform that creates conditions for patients to share full complexity before, during, between visits
- Self-guided AI sessions, two structured reports, providers arrive informed
- One paragraph about founding: "We built this at MIT, out of years of research in virtual reality and patient engagement."
- One sentence on the founding insight (keep brief, don't detail): "Our co-founder's research demonstrated that patients engage more deeply and disclose more in immersive digital environments than through standard assessment."

**Where We Are** (Dark background):
- 10+ institutions partnered (not "validating")
- RCT registered (no "actively recruiting")
- 6 peer-reviewed publications by co-founders
- NO "250+ demos completed"

**Founding Team** section:
- Photo row with brief bios
- Sacha Moreau, Thomas J. Schneider (simplified title: "Co-Founder, COO & General Counsel | DPhil, Oxford · Harvard Law"), Aleksy Dojnow, Alexandra Therond
- Mark Ruchman listed as VP Medical Affairs (separate from founding team, listed under Leadership on Team page)
- Link: "[Meet the full team →]"

### 6. Update Team Page

a) **Add accelerator logos section.** Pull all logo image files from `public/logos/` (or equivalent directory). Display all logos EXCEPT the AugMend logo. Section header: "Backed and accelerated by:"

b) **Simplify Thomas Schneider's title.** Change from:
```
Co-Founder, COO, General Counsel & Treasurer | DPhil & DLaws (Hon), Oxford · Harvard College · Harvard Law · Deakin University
```
To:
```
Co-Founder, COO & General Counsel | DPhil, Oxford · Harvard Law
```

c) **Standardize degree display.** Show degrees for all team members who have them. Use formal convention: MD, PhD, PsyD, DPhil, etc.

d) **Mark Ruchman:** Display as `Mark Ruchman, MD — VP Medical Affairs | Yale Medical School`

### 7. Update Advisory Board Page

a) **Rename** page title from "Advisors" or "Advisory" to "ADVISORY BOARD"

b) **Add LinkedIn profile links** for each advisor. Render the advisor name as a link to their LinkedIn or institutional profile page.

c) **Standardize degree display:** Use formal designations (MD, DO, PhD) for all advisors. Apply consistently.

d) **Add "Former" consistently** where applicable. Currently missing on some entries (e.g., Genevieve Paquette should show "Former Medscape" → already in V18 copy).

e) **Add Leslie Hoyt** to the advisory board. Use placeholder title/affiliation until confirmed: `Leslie Hoyt — [Title/Affiliation TBD]`

f) **Replace CTA** at bottom. Change from "Talk to our team about a clinical partnership" to:
```
Let's talk.
[Schedule a Conversation]
```

(Removed "clinical partnership" language — Genevieve notes we are a supplier, not a clinical partner.)

### 8. Update Contact Page

a) **Remove phone number** entirely.

b) **Keep contact form.** Ensure it routes submissions to sachaxmoreau@gmail.com (or designated team email).

c) **Keep info@augmend.health** displayed on page.

d) **Update page header:**
```
GET IN TOUCH
A clinical conversation about your workflow — not a sales call.
```

### 9. Delete or Redirect Trust & Security Page

If a dedicated Trust & Security page exists at a separate route:
- Do NOT delete it yet (content may be needed for reference)
- Remove it from the main navigation
- Trust information now lives inline on the "In Practice" page under the "Trust and data safety" block
- Add a redirect from the old Trust & Security URL to the "In Practice" page

### 10. Global Terminology Cleanup (All Sub-Pages)

Run these replacements across ALL sub-pages:

| Find | Replace With |
|------|-------------|
| chronic conditions | complex patients (or patient complexity, context-dependent) |
| therapeutic exercises | behavioral exercises |
| Anamnesis | [describe function instead] |
| Anodyne | [describe function instead] |
| Summa | [describe function instead] |
| irreplaceable | compounds over time / grows more valuable |
| No FDA clearance required | [DELETE] |
| No FDA Clearance Required | [DELETE] |
| Actively recruiting | [DELETE] |
| actively recruiting | [DELETE] |
| Bill accurately | Bill comprehensively |
| bill accurately | bill comprehensively |
| EHR integration via Redox | EHR integration available |
| 2–3 week setup | [DELETE or replace with "operational in weeks"] |
| clinical data intelligence platform | [DELETE] |
| clinical data infrastructure | [DELETE from taglines; keep only if clearly contextualized] |
| clinical partnership | [context-dependent — on advisory page, remove] |

### Summary of Page Changes
1. ✅ NEW: "How It Works in Practice" (merged from 3 pages)
2. ✅ DELETE: For Providers, For Clinics, For Health Systems (replaced by merged page)
3. ✅ UPDATE: How It Works (platform page) — remove system names, fix terminology
4. ✅ REWRITE: Evidence — three sections, publications added
5. ✅ REWRITE: Our Story — mission-led, simplified, no pivot
6. ✅ UPDATE: Team — accelerator logos, simplified titles
7. ✅ UPDATE: Advisory Board — renamed, LinkedIn links, Leslie Hoyt added
8. ✅ UPDATE: Contact — remove phone number
9. ✅ HIDE: Trust & Security — remove from nav, content lives inline
10. ✅ GLOBAL: Terminology replacements across all pages
