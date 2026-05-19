# AugMend Website V2 — Implementation Plan

**Date:** April 8, 2026
**Source:** Stakeholder feedback (Gen/Jeff/Leslie, Sacha, Alek, Mark, Genevieve) + GTM Messaging Framework V4
**Purpose:** Structured plan to implement all website changes, organized for sequential execution

---

## PART 1: STRATEGIC DECISIONS (Resolve Before Execution)

These items require your input before any copy can be written. Each decision gates multiple downstream changes.

### Decision 1: Hero Hook Phrasing

**Current copy:** "Capture the full complexity of chronic conditions, elevate care quality, simplify your workflow."

**Feedback converges on three problems:**
- "Chronic conditions" is too vague (Gen/Jeff/Leslie)
- "Simplify your workflow" is inaccurate — we're introducing technology (Genevieve)
- The hook should lead with intrigue around how patients present with complexity (Genevieve)

**Sacha's direction:** Use "augment" and "mending" to map to the brand. Proposed catchphrase: "Augmenting providers, mending the gap in patient data."

**ARIA's recommendation — two options for your review:**

Option A (Problem-first, Genevieve's direction):
> **Your patients present with complexity your workflow was never designed to capture.**
> AugMend captures it — through self-guided AI sessions that surface biopsychosocial data before the visit, structure it for clinical decisions during, and document it for billing after. No provider time consumed. Revenue recovered from the first session.

Option B (Brand-verb-first, Sacha's direction):
> **Augmenting providers. Mending the gap in patient data.**
> We capture the biopsychosocial complexity and determinants of health your patients carry — before, during, and between visits — so providers can focus on treatment, not data collection. Two structured reports per session: one for clinical decisions, one for billing.

**What I need from you:** Which direction — or a hybrid? Also: do we keep "chronic conditions" anywhere in the hero, switch to "complex patients" (GTM standard), or name the specialties (chronic pain, behavioral health)?

### Decision 2: Specialty Focus Language

**Current:** "chronic conditions" throughout the site.

**Gen/Jeff/Leslie:** Too vague. Find a narrower characterization.
**GTM terminology standard:** Use "complex patients," not "chronic conditions."
**GTM priority specialties:** Chronic pain + behavioral health/psychiatry.

**Options:**
- A: "Complex patients" globally (GTM-aligned, broader)
- B: "Chronic pain and behavioral health" explicitly (narrower, more credible)
- C: Lead with "complex patients," then specify chronic pain + behavioral health as current focus areas

**ARIA's recommendation:** Option C. Leading with "complex patients" preserves category expansion while naming specialties grounds credibility. The GTM framework explicitly says "chronic conditions" is "too vague per advisor feedback."

### Decision 3: Stats Section Reframe

**Current stats on homepage:**
- 194M Americans with chronic conditions
- 122M in shortage areas
- 5–20% revenue lost to incomplete documentation
- $1,386 additional hospital costs from incomplete notes

**Feedback:** Both Alek and Genevieve say these read as investor-facing, not buyer-facing. Genevieve adds: the 5–20% range is too wide (5% is a rounding error, 20% is catastrophic). She also notes "incomplete documentation" isn't connected to the problem statement above it.

**GTM framework offers stronger, buyer-relevant stats:**
- Projected shortage of 86,000 physicians by 2036 (AAMC)
- Only 18.5% of psychiatrists available for new patients; 67-day median wait (Sun et al., 2023)
- For every 1 hour of patient time, ~2 hours on EHR/clerical work (AMA)
- 60–80% of patients have withheld medically relevant information (JAMA Network Open)
- 68% of Medicare improper payments due to insufficient documentation (CMS FY 2024)

**ARIA's recommendation:** Replace current stats with a curated set that pays off the gap statement directly. Lead with the provider time burden and patient withholding stats (these hit clinicians where they live), then connect to the documentation/revenue consequence. Drop the population-level stats (194M, 122M) — those are pitch deck material.

**Proposed stat row (4 cards):**

| Stat | Label | Source |
|------|-------|--------|
| 60–80% | of patients have withheld medically relevant information from their clinicians | JAMA Network Open |
| ~2 hours | of EHR and clerical work for every 1 hour of patient face time | AMA, 2024 |
| 68% | of Medicare improper payments due to insufficient or missing documentation | CMS FY 2024 |
| 67 days | median wait for in-person psychiatry; only 18.5% of psychiatrists accepting new patients | Sun et al., 2023 |

**Need your call:** Keep any of the current stats, or swap to these? The $1,386 hospital cost stat is strong but may belong on the Clinics page rather than the homepage.

### Decision 4: Page Structure — Merge Sub-Pages

**Current:** Three separate pages — For Providers, For Clinics, For Health Systems.

**Sacha:** Merge into one page. Sections for: the patient and their benefit, the provider and their benefit, the clinic and their benefit. Health Systems folds into Clinics.
**Alek:** Provider page is thin. Health Systems may be premature. Consider folding both into Clinics.
**Genevieve:** Reframe as "How it works for clinics" and "How it works for providers."

**ARIA's recommendation:** One page titled "Who It's For" or "How It Works in Practice" with three sections: For Patients, For Providers, For Practice Leaders. Drop the separate Health Systems page entirely — enterprise-specific content (population intelligence, value-based care) can live in a collapsible section under the clinic content or in a one-sheet for sales conversations. This also reduces the nav complexity.

**Need your call:** Agree with single page? Title preference?

### Decision 5: Architecture Section

**Current:** "The Architecture — One for the patient. One for the provider. Working in sequence." Two copilots described.

**Genevieve:** Delete this section entirely. Move patient/provider copilot concept into the Solution section. What's labeled "architecture" is product positioning, not architecture.
**Sacha:** Agrees. Cards from architecture should move into solution.
**Alek:** "Working in sequence" is misleading — they work alongside each other. "Implementing Knowledge" is vague.

**ARIA's recommendation:** Delete the Architecture section from the homepage. Integrate the patient-facing / provider-facing distinction into the Solution section — but don't use "copilot" language on the public website (that's internal product naming). Instead, describe what happens on each side: the patient side captures data through self-guided sessions; the provider side delivers structured clinical and billing reports. Mark also says we reveal too much strategy — the architecture framing does exactly that.

**Need your call:** Agree with deleting Architecture from homepage? Any elements you want preserved?

### Decision 6: Trust & Security Page

**Genevieve:** Move to private one-sheet for contract diligence. Publishing it publicly exposes competitive intelligence and invites hole-poking. Remove "No FDA required" — too detailed for public website.
**Sacha:** We need HIPAA compliant and SOC2 visible somewhere. At least show how we're thinking about it.

**ARIA's recommendation:** Remove the dedicated Trust & Security page from the public nav. Replace with a brief "Trust" section on the Clinics/How It Works page — three lines: HIPAA compliant, SOC 2 in progress, no FDA clearance required — with a link to your Secureframe trust page (get link from Lucas). Create a separate Trust & Security one-sheet PDF for sales conversations. Genevieve is right that detailed security claims on a public site invite scrutiny you can't yet fully defend (SOC 2 is still "in progress," some claims may be aspirational).

**Need your call:** Keep minimal on-site presence or remove entirely?

### Decision 7: Our Story — How Much to Reveal

**Mark:** We reveal too much strategy and secret sauce. This is open to the world, not behind an NDA.
**Genevieve:** Don't share your founding insight in detail — it's your secret sauce. Remove "demos completed." Replace "validating" with "partnered with."
**Sacha:** Provided detailed narrative direction. Wants the founding story grounded in the real pivot path.

**ARIA's recommendation:** The current Our Story page reads like a pitch deck origin story — complete with the disclosure insight, the three product system names (Anamnesis, Anodyne, Summa), and the "irreplaceable dataset" competitive moat language. That's exactly what Mark is flagging. For the public site:
- Lead with mission, not mechanism. Why you exist, not how you discovered your advantage.
- The pivot story can be one paragraph: we started in mental health VR, saw traction in chronic pain, discovered that the real bottleneck was in information capture. Keep it simple.
- Remove system names (Anamnesis, Anodyne, Summa) from the public site — these mean nothing to a buyer and expose internal architecture.
- Remove "demos completed" stat.
- Replace "validating the platform" with "partnered with."
- Remove "actively recruiting" from RCT.
- Add founding team photo section.

**Need your call:** Agree with removing system names from public site? How much of the pivot story do you want visible?

### Decision 8: Footer Tagline

**Current:** "Clinical data infrastructure for specialty care."

**Genevieve:** Remove — you are patient-facing and provider-facing, not pure infrastructure.
**Sacha:** Either remove entirely or contextualize earlier. Don't introduce at the end with no context.

**Proposed replacements based on GTM three-beat value prop:**
- "Deeper data. Better documentation. Recovered revenue."
- "Patient engagement. Provider support. Revenue cycle management." (Mark's triple whammy)
- Simply: "AugMend Health" with no tagline (cleanest option)

**Need your call:** Which direction?

### Decision 9: Smaller Calls Requiring Quick Confirmation

| Item | Current | Proposed | Source |
|------|---------|----------|--------|
| Report tiers | Three tiers described | Alek says product has two: report + SOAP note. Clarify actual product state | Alek |
| Mike Kritzer quote | Long quote, title listed as "Psychiatrist, Montefiore Hospital" | Alek says weak, title wrong. Remove or replace with stronger quote, correct attribution | Alek |
| "Therapeutic exercises" | Used for Anodyne | Alek asks: regulatorily problematic? Confirm before keeping | Alek |
| Redox mention | Named explicitly on Clinics + Health Systems pages | Remove — no conversations started (Alek). Replace with generic "EHR integration available" | Alek |
| "2–3 week setup" | Clinics page | Remove — likely inaccurate (Alek) | Alek |
| Phone number on contact | Currently shown | Remove — won't be answered (Alek) | Alek |
| info@augmend.health | Currently shown | Remove unless someone monitors it (Alek) | Alek |
| "Irreplaceable system" | Clinics + Health Systems pages | Soften language — reads as lock-in (Alek) | Alek |
| "Bill accurately" | The Shift section | Change to "bill comprehensively" — "accurately" implies previous billing was inaccurate (Genevieve) | Genevieve |
| Mark's quote ("Grandpa MD PhD") | Our Story page | Remove "Grandpa" label, find better attribution (Alek). Consider if self-referential quote works here | Alek |
| Accelerator logos | Missing from team page | Add — Sacha says pull from public/logos folder | Sacha |
| Advisor titles | Inconsistent degree display | Standardize: MD/PhD for all or none. Add "Former" consistently. Link to LinkedIn profiles | Genevieve |
| Thomas Schneider title | Overloaded with credentials | Pick 1–2 to feature. Move MIT to second line | Genevieve |
| Lucas et al. (2014) study | Referenced across site | Very old — find more recent supporting studies if available. At minimum, clearly attribute as third-party research, not AugMend's | Sacha, Genevieve |

---

## PART 2: COPY CHANGES BY SECTION

Once strategic decisions are made, these are the specific copy edits organized by page section. Items marked [READY] can be executed now. Items marked [BLOCKED] require a decision from Part 1.

### Homepage — Hero [BLOCKED: Decisions 1, 2]

**Changes needed:**
1. Rewrite headline per Decision 1
2. Rewrite subhead to avoid repeating problem framing in solution (Genevieve)
3. Name the product explicitly: "AugMend Health is..." (Genevieve)
4. Use "augment" verb (Genevieve, Sacha)
5. Remove "simplify your workflow" (Genevieve)
6. Clarify copy speaks to the provider: "your patients" (Genevieve)
7. Standardize terminology: pick "provider" vs "physician" vs "HCP" — use consistently (Genevieve)

### Homepage — The Gap [BLOCKED: Decision 2, 3]

**Changes needed:**
1. Replace "chronic conditions" per Decision 2
2. Remove "never built to capture" — frame around workflow/time constraints, not system design failure (Genevieve)
3. Clarify what isn't being captured: it's about the workflow, the visit structure, and the time — not that doctors don't know to ask (Genevieve, Sacha)
4. Tighten the bridge: the biopsychosocial complexity of managing patients isn't being captured → this leads to ineffective care AND missed revenue (Genevieve, Sacha)
5. Change "We make it easier to get the full picture sooner" → "We make it possible to get the full picture sooner" (Alek) — or rephrase entirely
6. Replace or reframe stats per Decision 3
7. Resolve "hidden" vs "not captured" — pick one and be consistent (Genevieve)
8. Don't use "billing complexity" twice (Genevieve)
9. Avoid language that positions us in the clinical notes/documentation space — scribes and ambient AI own that (Genevieve)
10. Introduce "behavioral health" term properly — it appears here without being set up (Genevieve)
11. Connect "incomplete documentation" to the problem statement before introducing stats (Genevieve)
12. Replace problem-data-capture.png with SVG per visual changes below

### Homepage — Solution [BLOCKED: Decisions 1, 2, 5]

**Changes needed:**
1. Don't repeat problem framing — jump straight to what AugMend does (Genevieve, Alek)
2. Name and define the product: "AugMend Health is an AI patient engagement platform that helps providers conduct intake, follow-up, and exit sessions to capture information otherwise missed in visits" (Genevieve)
3. Use "augment" — you're augmenting provider workflows (Genevieve, Sacha)
4. State provider benefit: providers are better informed based on the breadth of data captured (Genevieve)
5. Integrate copilot/architecture concept here instead of separate section (Genevieve, Sacha)
6. Emphasize self-guided, no provider time — key missing message (Sacha): "This does not require a medical professional's time to set up; all they get is the information for their decision-making and care management."
7. Clarify that non-clinical staff administer but don't need to be present for duration (Alek)

### Homepage — How It Works [READY after Decision 2]

**Changes needed:**
1. Reframe stages: "before the visit, during the visit, after the visit, between visits" — drop "in between" as redundant (Genevieve)
2. Lead with platform-level statement: "one platform across the care journey" (Genevieve) — this is already close to current copy
3. Under each stage, add brief list of what specifically is being captured/happening (Genevieve)
4. Differentiate patient-facing vs provider-facing stages (Sacha): Before = patient-facing, During = provider-facing, After = provider-facing, Between = patient-facing
5. Remove parenthetical internal notes from stage descriptions — "(dots are very dense and small)" etc. (Alek)
6. Remove "Phone, tablet, or VR headset" from "Same intelligence. Any device." line (Alek)
7. "Same intelligence, any device" → make this its own dedicated callout with device SVG icons (Genevieve, Sacha). VR = primary in-clinic engagement, tablet = in-clinic alternative, phone = accessibility outside clinic
8. Replace text-flow-indigo image with SVG/React component showing outputs, stakeholders, and continuous loop (Sacha, Genevieve)
9. End with single CTA: schedule a conversation (Genevieve)

### Homepage — The Shift [READY]

**Changes needed:**
1. "Bill accurately" → "Bill comprehensively" or "Drive revenue" (Genevieve)
2. "Three report tiers" → align with actual product (confirm with Alek per Decision 9) — may be two tiers
3. "< 1 min" provider review stat — flag as aspirational (Alek says "consider how to balance aspiration with honesty"). If this is validated by Kritzer pilot data, cite it. If not, remove the specific claim.
4. "Conversational AI that adapts... building on every prior session" on the Deeper Data card reads as product description, not outcome (Alek). Reframe to outcome.
5. "Day 1 revenue recovery" — keep, but clarify this is under existing CPT codes
6. Remove β = 10.40 stat from this section — it belongs in Evidence only

### Homepage — Evidence [READY]

**Changes needed:**
1. Remove "Actively recruiting" from headline → "Peer-reviewed. Independently validated." (Genevieve, Alek, Sacha)
2. Separate AugMend's own research from third-party literature clearly (Alek, Sacha)
3. "moderate to large effect in core and overall" — rewrite in plain language, not statistical jargon (Alek)
4. Lucas et al. (2014) — attribute clearly as external literature, not AugMend's research (Alek, Sacha). Consider finding more recent supporting research.
5. Add links to actual publications (Alek)
6. Add AugMend founder publications from GTM framework (Sacha)
7. Create separate landing page for trial recruitment — don't mix with evidence credibility (Genevieve)

### Homepage — "See What Your Intake Is Missing" [READY]

**Delete this entire section.** (Sacha, Alek, Genevieve all flag issues: accusatory tone, "intake" introduced without setup, not adding value.)

### Homepage — CTA Section [READY]

**Changes needed:**
1. Reduce three CTA cards to one CTA (Genevieve, Sacha) — three cards routing to same contact page is disingenuous (Alek)
2. Describe different reasons someone might reach out, then single button (Alek)
3. Remove "clinical data intelligence platform" label — not introduced or explained (Genevieve, Sacha)
4. Sacha's direction: "Learn more / Schedule a call" or "See it in practice / Talk to our team" — two buttons max, one simple call to action

### Homepage — Footer [READY]

**Changes needed:**
1. Remove "clinical data infrastructure" tagline per Decision 8
2. Remove info@augmend.health unless monitored (Alek)

### For Providers Page [BLOCKED: Decision 4]

**Changes needed:**
1. Change "For Clinicians" banner → "For Providers" to match nav (Alek)
2. Align report tiers with product reality (Alek — Decision 9)
3. Remove/replace Mike Kritzer quote (Alek — Decision 9)
4. Consider folding into combined page per Decision 4

### For Clinics Page [BLOCKED: Decision 4]

**Changes needed:**
1. Spell out deployment: non-clinical staff initiate sessions but don't need to be present for duration (Alek)
2. Remove Redox mention (Alek)
3. Remove "2–3 week setup" timeline (Alek)
4. Fix "data remote" → "data remotely" in flow diagram (Alek)
5. Billing report description: replace "scribe data" with general "in-person notes" (Alek)
6. Fix duplicate arrow in flow diagram (Alek)
7. Replace "irreplaceable system" with softer language (Alek)
8. Session-by-session diagram (1–5): simplify — data compounds over time, don't imply cap of 5 (Alek)

### For Health Systems Page [BLOCKED: Decision 4]

**Changes needed:**
1. Remove or merge into Clinics page per Decision 4
2. Remove Redox integration diagram (Alek)
3. Link "trust and security details" to Secureframe trust page (Alek — get URL from Lucas)
4. Replace "irreplaceable" in Population Intelligence (Alek)

### Evidence Page [READY after homepage evidence section]

**Changes needed:**
1. Remove "actively recruiting" (Genevieve, Alek)
2. Replace "interested in the evidence" CTA → "Talk to AugMend Health" (Genevieve)
3. Provide links to actual publications (Alek)
4. Separate own research (RCT, poster) from founder publications from third-party studies — three distinct sections (Sacha)
5. Include posters and abstracts (Alek)
6. Find more recent supporting literature if Lucas et al. (2014) is the only third-party citation (Sacha, Genevieve)
7. Add founder publications from GTM framework — 6 peer-reviewed papers by Moreau and Therond (Sacha)

### Our Story Page [BLOCKED: Decision 7]

**Changes needed:**
1. Rewrite opening — "The visit that never had enough time" is generic (Genevieve)
2. Lead with a compelling physician quote from an advisor (Genevieve)
3. Simplify the story — lead with mission, not mechanism (Mark, Genevieve)
4. Collapse "What We Set Out to Build" — too long (Genevieve)
5. Don't share founding insight in detail (Genevieve, Mark)
6. Your unique story: born out of mental health research → built patient engagement platform that surfaces information otherwise unavailable (Genevieve)
7. Rewrite traction section: remove "demos completed" (Genevieve), replace "validating" with "partnered with" (Genevieve), remove "actively recruiting" (Genevieve)
8. State traction as: partnered with X academic institutions, X hospitals, X clinics across specialty pain, behavioral health, oncology (Genevieve)
9. Tone down competitive positioning — be practical, you're a seed company (Genevieve)
10. Add founding team photo section with brief statement, link to team page (Genevieve)
11. Remove "Grandpa MD PhD" from Mark's quote attribution (Alek)
12. Fix missing references in "What We Set Out to Build" (Alek)
13. Remove "destroying hope on both sides of the hospital aisle" — too dramatic for public site

### Team Page [READY]

**Changes needed:**
1. Add accelerator logos (Sacha — pull from public/logos folder)
2. Thomas Schneider: simplify title, move MIT to second line (Genevieve)
3. Standardize degree display — either show for all or none (Genevieve)

### Advisory Page [READY]

**Changes needed:**
1. Rename to "Advisory Board" (Genevieve)
2. Link each advisor to LinkedIn/hospital profile (Genevieve)
3. Use formal MD/DO/PhD designations (Genevieve)
4. Add "Former" consistently (Genevieve — Medscape missing it)
5. Consider featuring Brain Lab (Genevieve)
6. Replace "clinical partnership" CTA → "supplier" or equivalent (Genevieve)
7. Replace "talk to our team" CTA → something specific like "Let's talk" (Genevieve)

### Contact Page [READY]

**Changes needed:**
1. Remove phone number (Alek)
2. Keep contact form, ensure it routes to Sacha's email (Alek)
3. Remove info@augmend.health if not monitored (Alek)

### Blog Page [READY — content guidelines]

**Changes needed:**
1. Confirm Montefiore permission before publishing any results (Alek)
2. Emphasize actionable data throughout — volume of data is meaningless without showing it influences care decisions (Genevieve)
3. Monitor Abridge's move into RCM — competitive intelligence (Genevieve)

### AI Governance Page [NEW — Sacha]

**Changes needed:**
1. Create short page about AI governance under Platform section
2. Show HIPAA compliance, SOC2 path, safety design principles
3. Connect from homepage (solution or how it works section)

---

## PART 3: CODE / STRUCTURAL CHANGES

These are changes to the codebase structure, components, and functionality.

### C1: Delete Architecture Section from Homepage
Remove the "Two Copilots" / Architecture section entirely. Integrate key concepts into Solution section.

### C2: Delete "See What Your Intake Is Missing" Section
Remove from homepage.

### C3: Merge Platform Sub-Pages [BLOCKED: Decision 4]
Restructure nav from "For Providers | For Clinics | For Health Systems" into a single combined page (or two pages max).

### C4: Restructure Homepage CTA
Replace three CTA cards with single CTA block + one or two buttons.

### C5: Add Device Callout Section
Create dedicated visual section for "Same intelligence. Any device." with SVG icons for phone, tablet, VR headset — each with context (VR = in-clinic optimal, tablet = in-clinic alternative, phone = remote accessibility).

### C6: Create Trial Recruitment Landing Page [NEW]
Separate page for RCT recruitment — remove recruitment language from Evidence and Our Story.

### C7: Create AI Governance Page [NEW]
Short page under Platform nav section.

### C8: Hero Interaction Fix (Alek)
Allow dots to be interactive behind title text and all non-interactive elements. Only CTA buttons should block/occlude dot interaction. "See How It Works" button needs stronger accent color. Transparent outline buttons need more visual weight.

### C9: Contact Form
Ensure form is functional and routes to Sacha's email. Remove phone number display. Remove or monitor info@augmend.health.

### C10: Evidence Page — Add Publication Links
Add actual hyperlinks to all cited publications and founder publications.

### C11: Footer Cleanup
Remove tagline or replace per Decision 8. Remove email if not monitored.

---

## PART 4: VISUAL CHANGES

### V1: Replace problem-data-capture.png with SVG [BLOCKED on copy]
Genevieve: current dots-on-field reads like a gram stain. Reframe as percentage visual: today's assessments capture ~10% of what the patient presents with. Use simple, clean SVG — not dense dot-matrix.

### V2: Replace text-flow-indigo image in How It Works [BLOCKED on copy]
Replace with SVG or React component showing: what outputs are generated, who they're for, that it's a continuous loop of information leading to longitudinal data. Sacha: not stages (too AI-tech), but data layers. Genevieve: Layer 1 raw data → Layer 2 structured → Layer 3 insights/billing → Layer 4 continuous intelligence.

### V3: Device Section Visual
Create SVG icons or illustrations showing three patients using AugMend three different ways: phone, tablet, VR headset. Not just device icons — show the context (remote home use, clinic tablet, in-clinic VR).

### V4: Blue Lady Image → Content
Alek: feels like placeholder where content should be. Either redistribute content into that space or replace with purposeful content. Genevieve: make faces smaller, move to column sidebars, present more intentionally. Sacha: faces building complete picture are well-received — bring more faces in, but as backgrounds or side elements, not hero-scale.

### V5: Simplify Session Diagram (Clinics Page)
Alek: sessions 1–5 diagram over-complicates a simple concept. Replace with simpler visual showing data accrual and compounding over time. Don't imply cap of 5 sessions. Make connection lines more visible.

### V6: Fix Flow Diagram (Clinics Page)
Remove duplicate arrow from Longitudinal Insights back to Pre-visit AI Intake. Keep only the bottom-routing arrow.

### V7: Hero Button Treatments
Alek: "See How It Works" needs stronger accent color. Transparent outline buttons need more visual weight to remain legible against dot animation.

### V8: Evidence Section — Cleaner Attribution Visual
Design clear visual distinction between: AugMend's own research (top), founder publications (middle), third-party supporting literature (bottom).

### V9: Faces / Dot-Line Portraits
Sacha: bring more faces into the website. Use them as backgrounds in key sections or side elements. Keep the dot-line aesthetic that builds complete pictures. These work well per feedback — just be more intentional about placement.

### V10: Team Page — Accelerator Logos
Pull from public/logos folder and add to team page.

---

## PART 5: EXECUTION SEQUENCE

Given dependencies, here is the recommended order of work:

### Phase 0: Strategic Alignment (This Document)
Resolve all 9 decisions in Part 1. This is where we are now.

### Phase 1: Copy V18 — Homepage (Depends on Decisions 1–3, 5, 8)
Once decisions are made, rewrite homepage copy section by section. Produce updated 02C-Website-Copy-V18.md. This is the foundation everything else builds on.

**Sections in order:**
1. Hero (headline + subhead)
2. The Gap (problem reframe + new stats)
3. Solution (merged with architecture concepts)
4. How It Works (reframed stages + device callout)
5. The Shift (terminology fixes)
6. Evidence (reorganized, cleaned)
7. CTA (simplified)
8. Footer

### Phase 2: Copy V18 — Sub-Pages (Depends on Decision 4, 7)
1. Combined Platform/Use Cases page (merged from three pages)
2. Our Story (rewrite per Decision 7)
3. Evidence page (full version)
4. Team + Advisory (standardize)
5. Contact (cleanup)
6. AI Governance (new)

### Phase 3: Visual Assets
1. SVG replacements for PNG/static images (V1, V2, V3)
2. Device callout section design (V3)
3. Face/portrait placement strategy (V4, V9)
4. Session diagram simplification (V5)
5. Flow diagram fix (V6)
6. Accelerator logos (V10)

### Phase 4: Code Implementation
1. Homepage structural changes (delete Architecture, delete Intake Missing, restructure CTA)
2. Hero interaction fixes (C8)
3. Page merges (C3)
4. New pages (AI Governance, Trial Recruitment)
5. Contact form + footer cleanup
6. Evidence page links

### Phase 5: QA and Review
1. Full copy audit for terminology consistency (GTM standard terms)
2. Reduce cross-section redundancy (Sacha: tighten repetition)
3. All claims audit (evidence discipline per GTM framework)
4. Send V2 to Genevieve for re-review (Mark recommends, Genevieve offered)

---

## PART 6: REFERENCE — COMPLETE FEEDBACK TRACKER

Every discrete feedback item mapped to its resolution. Use this to confirm nothing was missed.

### Gen/Jeff/Leslie
| # | Feedback | Resolution | Phase |
|---|----------|------------|-------|
| 1 | "Chronic conditions" too vague | Decision 2 → replace with "complex patients" + named specialties | 1 |
| 2 | Find narrower characterization without being hyper-specific | Decision 2 | 1 |
| 3 | Bridging the gap — still generic | Rewrite Gap section copy | 1 |

### Sacha (32 items)
| # | Feedback | Resolution | Phase |
|---|----------|------------|-------|
| 1 | Review product spec doc | Done — GTM framework reviewed and integrated | 0 |
| 2 | Hero hook — find right phrasing based on Gen's feedback | Decision 1 | 1 |
| 3 | Actionable data, not just data collection | Thread throughout copy rewrite | 1 |
| 4 | Gap section — right language, who is it targeted to | Decision 2 + Gap rewrite | 1 |
| 5 | problem-data-capture.png → SVG | Visual V1 | 3 |
| 6 | Medical language accuracy across all copy | Copy audit Phase 5 | 5 |
| 7 | Language about biopsychosocial + SDOH for chronic pain and behavioral health | Terminology standardization per GTM | 1 |
| 8 | Clear: incomplete data gap → RCM issues + lost revenue | Gap section rewrite | 1 |
| 9 | Not blaming providers — time/workflow constraint framing | Gap section + Solution rewrite | 1 |
| 10 | Facilitating the job of collection for quality + revenue | Solution section rewrite | 1 |
| 11 | Emphasize self-guided, no provider time, non-clinical staff | Solution + How It Works + Clinics page | 1, 2 |
| 12 | Reduce cross-section repetition | Phase 5 audit | 5 |
| 13 | Use "augment" and "mending" to map to brand | Hero + Solution rewrite | 1 |
| 14 | Separate copy edits from visual edits | This document does this | 0 |
| 15 | How It Works images — redesign per Gen's feedback | Visual V2 | 3 |
| 16 | How It Works stages — clarify patient-facing vs provider-facing | How It Works rewrite | 1 |
| 17 | text-flow-indigo image → SVG showing outputs, stakeholders, continuous loop | Visual V2 | 3 |
| 18 | "Same intelligence, any device" → own callout with SVG icons | Visual V3 + Code C5 | 3, 4 |
| 19 | Architecture cards → move into Solution | Code C1 + Solution rewrite | 1, 4 |
| 20 | Faces/dots aesthetic — bring more faces into website as backgrounds | Visual V9 | 3 |
| 21 | Add founder publications to Evidence page | Evidence page rewrite | 2 |
| 22 | Remove "see what your intake is missing" | Code C2 | 4 |
| 23 | Simplify CTA — two buttons max | Code C4 + CTA rewrite | 1, 4 |
| 24 | "Clinical data intelligence platform" — remove or contextualize | Footer rewrite + CTA rewrite | 1 |
| 25 | Merge use case pages into one | Decision 4 → Code C3 | 2 |
| 26 | Lucas et al. — old, find more recent studies | Evidence rewrite | 2 |
| 27 | Add accelerator logos to team page | Visual V10 | 3 |
| 28 | AI governance page under Platform | Code C7 | 4 |
| 29 | Our Story rewrite — simplify, team faces, mission-led | Decision 7 → Our Story rewrite | 2 |
| 30 | Sacha's detailed pivot narrative | Our Story rewrite source material | 2 |
| 31 | Founding story direction | Our Story rewrite source material | 2 |
| 32 | Product features — Anodyne exercises description | Integrate where appropriate, don't over-expose | 2 |

### Alek (38 items)
| # | Feedback | Resolution | Phase |
|---|----------|------------|-------|
| 1 | Dots interactive behind all non-CTA elements | Code C8 | 4 |
| 2 | "See How It Works" button needs accent color | Visual V7 | 3 |
| 3 | Transparent outline buttons need more visual weight | Visual V7 | 3 |
| 4 | "easier" → "possible" in Gap section | Gap rewrite | 1 |
| 5 | Stats feel investor-facing | Decision 3 | 1 |
| 6 | References dropdown — nice touch (keep) | No change needed | — |
| 7 | Solution opens with redundant problem framing | Solution rewrite | 1 |
| 8 | Remove parenthetical notes from stage descriptions | How It Works rewrite | 1 |
| 9 | Remove "Phone, tablet, or VR headset" from device line | How It Works rewrite | 1 |
| 10 | "Therapeutic" — regulatory concern? | Decision 9 | 0 |
| 11 | Architecture — "in sequence" misleading, "Implementing Knowledge" vague | Delete Architecture (Decision 5) | 1 |
| 12 | Shift section — large stats need justification | Shift section rewrite | 1 |
| 13 | Deeper Data card — reads as product description not outcome | Shift section rewrite | 1 |
| 14 | Better Documentation card — features don't exist yet, <1 min aspirational | Shift section rewrite | 1 |
| 15 | Blue Lady image — placeholder, redistribute content | Visual V4 | 3 |
| 16 | Evidence — "actively recruiting" | Evidence rewrite | 1 |
| 17 | Evidence attribution ambiguous | Evidence rewrite | 1 |
| 18 | "Moderate to large effect" — jargon | Evidence rewrite | 1 |
| 19 | "See what your intake is missing" — accusatory | Delete section (C2) | 4 |
| 20 | Three CTA cards to same page — disingenuous | CTA restructure (C4) | 1, 4 |
| 21 | Our Story content compelling — surface more prominently | Our Story rewrite | 2 |
| 22 | Clinics: spell out non-clinical staff deployment | Clinics page rewrite | 2 |
| 23 | Remove Redox mention | Clinics + Health Systems rewrite | 2 |
| 24 | Remove "2–3 week setup" | Clinics rewrite | 2 |
| 25 | "data remote" → "data remotely" | Clinics rewrite | 2 |
| 26 | Billing report — generalize scribe reference | Clinics rewrite | 2 |
| 27 | Duplicate arrow in flow diagram | Visual V6 | 3 |
| 28 | "Irreplaceable system" — aggressive | Clinics + Health Systems rewrite | 2 |
| 29 | Session diagram — over-complicated, implies cap | Visual V5 | 3 |
| 30 | Provider page: "For Clinicians" → "For Providers" | Provider page rewrite | 2 |
| 31 | Report tiers: product has two, not three | Decision 9 | 0 |
| 32 | Mike quote — weak, wrong title | Decision 9 | 0 |
| 33 | Provider page may be too thin for own page | Decision 4 | 0 |
| 34 | Health Systems — remove Redox diagram | Visual + Health Systems rewrite | 2 |
| 35 | Health Systems — link trust to Secureframe | Code fix | 4 |
| 36 | "Irreplaceable" again in Population Intelligence | Health Systems rewrite | 2 |
| 37 | Evidence page — provide publication links | Code C10 | 4 |
| 38 | Evidence — Lucas disclosure finding isn't ours, attribute clearly | Evidence rewrite | 2 |

### (Alek continued)
| # | Feedback | Resolution | Phase |
|---|----------|------------|-------|
| 39 | Our Story — Mark's "Grandpa" label | Our Story rewrite | 2 |
| 40 | Our Story — 3 missing references | Our Story rewrite | 2 |
| 41 | Contact — remove phone number | Code C9 | 4 |
| 42 | Contact — form routes to email | Code C9 | 4 |
| 43 | Contact — monitor or remove info@augmend.health | Code C9 | 4 |

### Mark (7 items)
| # | Feedback | Resolution | Phase |
|---|----------|------------|-------|
| 1 | Reveal too much strategy/secret sauce | Decision 7 → Our Story rewrite | 2 |
| 2 | Graphics are techy/geeky, unclear meaning | Visual overhaul per Phase 3 | 3 |
| 3 | Triple whammy: Patient Engagement + Provider Support + RCM — where is this? | Hero/Solution/Footer — weave in | 1 |
| 4 | Important terms undefined when introduced | Terminology audit Phase 5 | 5 |
| 5 | Lead with compelling mission statement — 30-second version | Hero rewrite | 1 |
| 6 | Standardize "Dr." usage — use industry formats | Advisory rewrite | 2 |
| 7 | Take Genevieve up on re-review offer | Phase 5 | 5 |

### Genevieve (55+ items)
| # | Feedback | Resolution | Phase |
|---|----------|------------|-------|
| 1 | Create formal messaging framework | Done — GTM V4 reviewed | 0 |
| 2 | Hero: "capture the full complexity of your patients" | Decision 1 | 1 |
| 3 | Decide on "chronic" distinction | Decision 2 | 1 |
| 4 | Clarify audience: speaking to provider | Hero rewrite | 1 |
| 5 | "Present with complexity" not "disclose" | Hero rewrite | 1 |
| 6 | Gap: use medical terminology doctors use | Gap rewrite + Phase 5 audit | 1, 5 |
| 7 | Reframe problem: workflow doesn't capture, not system failure | Gap rewrite | 1 |
| 8 | Remove "never built to capture" | Gap rewrite | 1 |
| 9 | Clarify what isn't captured — workflow/time, not ignorance | Gap rewrite | 1 |
| 10 | Tighten bridge: biopsychosocial complexity not captured | Gap rewrite | 1 |
| 11 | Impact: ineffective care + missed reimbursement | Gap rewrite | 1 |
| 12 | Avoid "manufacturing revenue" framing | Gap rewrite | 1 |
| 13 | Resolve "hidden" vs "not captured" | Gap rewrite | 1 |
| 14 | Don't use "billing complexity" twice | Gap rewrite | 1 |
| 15 | Simplify problem-data-capture visual | Visual V1 | 3 |
| 16 | Stats investor-facing | Decision 3 | 1 |
| 17 | Behavioral health introduced without setup | Gap rewrite | 1 |
| 18 | 5–20% range too wide | Decision 3 | 1 |
| 19 | "Incomplete documentation" disconnected from problem | Gap rewrite | 1 |
| 20 | "Medical notes" / "documentation" interchangeable — standardize | Terminology audit | 5 |
| 21 | Avoid clinical notes/documentation space positioning | Gap rewrite | 1 |
| 22 | Solution: "simplify workflow" inaccurate | Solution rewrite | 1 |
| 23 | Don't repeat problem framing in solution | Solution rewrite | 1 |
| 24 | Name and define the product | Solution rewrite | 1 |
| 25 | Use "augment" | Solution rewrite | 1 |
| 26 | State provider benefit explicitly | Solution rewrite | 1 |
| 27 | Standardize provider/physician/HCP | Terminology audit | 5 |
| 28 | How It Works: reframe four stages | How It Works rewrite | 1 |
| 29 | Lead with platform-level statement | How It Works rewrite | 1 |
| 30 | Add specifics under each stage | How It Works rewrite | 1 |
| 31 | text-flow-indigo → data layers not stages | Visual V2 | 3 |
| 32 | Device section → dedicated callout | Visual V3 + Code C5 | 3, 4 |
| 33 | End How It Works with single CTA | How It Works rewrite | 1 |
| 34 | Delete Architecture section | Decision 5 → Code C1 | 1, 4 |
| 35 | Move copilot concept into Solution | Solution rewrite | 1 |
| 36 | Shift: "bill accurately" → "bill comprehensively" | Shift rewrite | 1 |
| 37 | Keep dots/words aesthetic | No change — confirmed | — |
| 38 | Blue Lady face → smaller, sidebars | Visual V4 | 3 |
| 39 | Evidence: remove "actively recruiting" | Evidence rewrite | 1 |
| 40 | Evidence: be explicit about studies | Evidence rewrite | 1 |
| 41 | Separate trial recruitment to own page | Code C6 | 4 |
| 42 | Allocate 30 min to evidence/claims cleanup | Phase 5 | 5 |
| 43 | "Intake" introduced without setup | Delete section (C2) | 4 |
| 44 | CTA: reduce to one | CTA restructure | 1, 4 |
| 45 | "Clinical data intelligence platform" introduced without context | CTA + Footer rewrite | 1 |
| 46 | Use cases pages — clarify distinction or merge | Decision 4 | 2 |
| 47 | Evidence page: remove "actively recruiting" | Evidence page rewrite | 2 |
| 48 | Evidence: replace CTA with "talk to AugMend Health" | Evidence page rewrite | 2 |
| 49 | Alexandra 2014 study very old | Evidence page rewrite | 2 |
| 50 | Include third-party research on delivery modality | Evidence page rewrite | 2 |
| 51 | Our Story: lead with physician quote | Our Story rewrite | 2 |
| 52 | "Never had enough time" is generic | Our Story rewrite | 2 |
| 53 | Unique insight: mental health → patient engagement | Our Story rewrite | 2 |
| 54 | Collapse "What We Set Out to Build" | Our Story rewrite | 2 |
| 55 | Don't share founding insight in detail | Decision 7 | 2 |
| 56 | Remove "demos completed" | Our Story rewrite | 2 |
| 57 | "Validating" → "partnered with" | Our Story rewrite | 2 |
| 58 | Traction: partnered with X institutions... | Our Story rewrite | 2 |
| 59 | Remove "actively recruiting" from RCT | Our Story rewrite | 2 |
| 60 | Tone down competitive positioning | Our Story rewrite | 2 |
| 61 | Add founding team section | Our Story rewrite | 2 |
| 62 | Team: Thomas title overloaded | Team rewrite | 2 |
| 63 | Standardize degree display | Team rewrite | 2 |
| 64 | Advisory: rename to "Advisory Board" | Advisory rewrite | 2 |
| 65 | Advisory: LinkedIn links | Advisory rewrite | 2 |
| 66 | Advisory: formal designations | Advisory rewrite | 2 |
| 67 | Advisory: "Former" consistently | Advisory rewrite | 2 |
| 68 | Advisory: feature Brain Lab | Advisory rewrite | 2 |
| 69 | Advisory: audit volume vs contribution | Advisory rewrite | 2 |
| 70 | Advisory: "clinical partnership" → "supplier" | Advisory rewrite | 2 |
| 71 | Advisory: specific CTA | Advisory rewrite | 2 |
| 72 | Trust & Security: verify SOC 2 | Decision 6 | 0 |
| 73 | Trust & Security: remove definitive claims | Decision 6 | 2 |
| 74 | Trust & Security: remove "no FDA required" | Decision 6 | 2 |
| 75 | Trust & Security: move to private one-sheet | Decision 6 | 2 |
| 76 | Blog: confirm Montefiore permission | Non-website task | — |
| 77 | Blog: emphasize actionable data | Content guideline | — |
| 78 | Blog: monitor Abridge RCM move | Competitive intelligence | — |
| 79 | Footer: remove "clinical data infrastructure" | Footer rewrite | 1 |
| 80 | Footer: resolve positioning tension (patient-facing + provider-facing + billing infra) | Decision 8 | 1 |

---

*Total discrete feedback items tracked: ~135*
*Items requiring strategic decision before execution: ~45*
*Items ready for immediate execution: ~90*

**Next step:** Your answers to the 9 decisions in Part 1 unlock the copy rewrite. We can start on items marked [READY] in parallel.
