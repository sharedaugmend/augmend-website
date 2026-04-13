# Prompt 15: Homepage Copy + Structural Changes (V18)

## Context
This prompt implements the V18 homepage rewrite based on stakeholder feedback from 6 reviewers. The copy reference document is `14-Website-Copy-V18.md` in the Marketing Advisory folder. Read it before making changes.

## Instructions

### 1. Update the Homepage Hero Section

Find the hero section in the homepage component (likely `src/app/page.tsx` or `src/components/sections/Hero.tsx`).

**Replace the headline** with:
```
Augmenting clinic capabilities. Mending the gap in patient data.
```

**Replace the subhead** with:
```
Capture the full biopsychosocial picture of your patients through self-guided AI sessions before and between visits. Summarized data supports clinical decision-making during the encounter. Optimized documentation recovers missed revenue after. No provider time consumed.
```

**CTA buttons:**
- Primary: "See How It Works" — give this button a stronger accent color (it currently gets lost against the dots). Use a solid background color with sufficient contrast.
- Secondary: "Schedule a Conversation" — increase the border weight and opacity of the outline button so it remains legible against the dot animation.

**ParticleFlow interaction:** Update the ParticleFlow component so that the dot animation is interactive behind ALL elements (headline, subhead, nav) EXCEPT the CTA buttons. Only CTA buttons should block/occlude dot interaction. This likely means adjusting pointer-events CSS — set `pointer-events: none` on text elements overlaying the canvas, and `pointer-events: auto` only on the CTA buttons.

### 2. Update the Nav Bar

**Replace the nav links.** The new nav structure is:

```
How It Works · In Practice · Evidence · Company
```

Where:
- "How It Works" links to `/how-it-works` (detailed platform page)
- "In Practice" links to `/in-practice` (merged use-case page, replaces For Providers / For Clinics / For Health Systems)
- "Evidence" links to `/evidence`
- "Company" is a dropdown with: Our Story · Team · Advisory Board

**Remove** any separate nav items for "For Clinics," "For Providers," "For Health Systems," or "Platform" dropdown.

The right-side CTA button "Schedule a Conversation" stays.

### 3. Rewrite The Gap Section

Find the Gap/Problem section on the homepage.

**Replace the section header and body text:**

Header: `Managing patients who present with complexity requires data the visit was never designed to capture.`

Body:
```
Managing complex patients — across biological, psychological, and social dimensions — requires far more information than a standard clinical encounter has time to collect. It is not that providers fail to ask. It is that the visit structure and workflow leave no room to surface the biopsychosocial depth that drives both treatment decisions and documentation completeness. Social determinants of health, trauma history, substance use, functional limitations, psychosocial stressors — the information that shapes clinical outcomes stays outside the chart.

The result is twofold: clinical decisions made with incomplete information, and documentation that cannot support the complexity of care actually delivered. The same gap that limits medical judgment also limits revenue.
```

**Replace the stat cards** with these four:

Card 1:
- Stat: `60–80%`
- Label: `OF PATIENTS HAVE WITHHELD MEDICALLY RELEVANT INFORMATION FROM THEIR CLINICIANS`
- Caption: `Including symptoms, medications, lifestyle factors, mental health concerns, and disagreement with provider recommendations. [1]`

Card 2:
- Stat: `~2 hours`
- Label: `OF EHR AND CLERICAL WORK FOR EVERY 1 HOUR OF PATIENT FACE TIME`
- Caption: `The documentation burden consumes provider capacity that should be spent on clinical decision-making and patient care. [2]`

Card 3:
- Stat: `86,000`
- Label: `PROJECTED PHYSICIAN SHORTAGE BY 2036`
- Caption: `Fewer providers serving more patients with increasingly complex needs. The capacity gap is structural and widening. [3]`

Card 4:
- Stat: `$1,386`
- Label: `ADDITIONAL HOSPITAL COST PER PATIENT FROM INCOMPLETE DOCUMENTATION`
- Caption: `Associated with a 0.4-day increase in length of stay per admission. Analysis of 20,000+ hospital admissions. Meanwhile, 68% of Medicare improper payments stem from insufficient or missing documentation. [4][5]`

**Update the references** at the bottom of the section:

```
[1] Levy AG, Scherer AM, Zikmund-Fisher BJ, et al. "Prevalence of and Factors Associated With Patient Nondisclosure of Medically Relevant Information to Clinicians." JAMA Network Open. 2018;1(7):e185293.

[2] AMA Policy Research Perspectives. "Physician time spent on EHR and clerical tasks." 2024.

[3] AAMC. "The Complexities of Physician Supply and Demand: Projections From 2021 to 2036." March 2024.

[4] Journal of General Internal Medicine. Study on incomplete medical notes and hospital costs. Analysis of 20,000+ hospital admissions.

[5] CMS FY 2024 Improper Payments Fact Sheet. 68% of Medicare improper payments due to insufficient or missing documentation.
```

### 4. Rewrite The Solution Section

This section replaces both the old "Solution" section AND the old "Architecture" (Two Copilots) section. **Delete the Architecture section entirely** — its concepts are now integrated here.

**Section header:** `THE SOLUTION`

**Headline:** `Your patients present with complexity your workflow was never designed to capture. AugMend captures it.`

**Body:**
```
AugMend Health is a patient engagement platform that augments clinic capabilities through two AI agents — one patient-facing, one provider-facing — working across the care journey to capture information otherwise missed in visits.
```

**Patient-facing block:**
```
Self-guided conversational AI sessions that patients complete before and between visits on phone, tablet, or VR headset. No provider time consumed. Non-clinical staff set it up; the patient completes it independently. Biopsychosocial data and social determinants of health are captured across clinical domains configured by your team — not a generic form, but an adaptive conversation that goes deeper where it matters and remembers everything across sessions.
```

**Provider-facing block:**
```
Every session generates two structured reports — a clinical report for medical decision-making and a billing-ready report optimized for revenue cycle management. The provider reviews a pre-encounter summary before the visit. The appointment starts with a relationship, informed discussion, and treatment decisions — not history-taking.
```

**Closing:**
```
All they receive is the information they need. All the clinic adds is the time the patient spends with the system. Providers are better informed. Documentation reflects the complexity of care actually delivered. Revenue is recovered from the first session.
```

**CTA:** `[See How It Works →]`

### 5. Rewrite How It Works (Teaser) Section

**Section headline:** `One platform across the full care journey.`

Add a patient-facing / provider-facing label to each step:

- Step 01: "Before the visit — Patient-facing"
- Step 02: "During the visit — Provider-facing"
- Step 03: "After the visit — Provider-facing"
- Step 04: "Between visits — Patient-facing"

**Update step content** per V18 copy document. Key changes:
- Remove any parenthetical internal notes like "(dots are very dense and small)" or "(dots contain organized clusters)"
- Step 03: change to "Two structured reports" (not "two outputs")
- Step 04: change "therapeutic exercises" to "behavioral exercises"

**Device callout** becomes its own distinct section after the four steps:

Header: `Same intelligence. Any device.`

Three items (with SVG icons when visual assets are ready):
- **VR headset** — Primary in-clinic modality. Highest engagement and disclosure rates.
- **Tablet** — In-clinic alternative. Same clinical intelligence and structured outputs.
- **Phone** — Remote accessibility. Before the visit from home, between visits for check-ins.

Remove the inline text "Phone, tablet, or VR headset" from the "Same intelligence. Any device." line — the three items below now carry that information.

**Single CTA** at end of this section: `[See How It Works →]` linking to /how-it-works.
Remove the second "Schedule a Conversation" CTA from this section.

### 6. Rewrite The Shift Section

**Headline:** `Know more. Document better. Bill comprehensively.`

(Changed from "Bill accurately" to "Bill comprehensively")

**Deeper Data card:**
Replace "Conversational AI that adapts to each patient: going deeper where it matters, remembering what's been said, building on every prior session. Patients disclose what they wouldn't say in person." with:

```
Patients disclose what they would not say in a rushed face-to-face visit. The system captures biopsychosocial complexity across sessions — going deeper where it matters, carrying forward everything that has been said.
```

Stat for this card: `60–80%` / `OF PATIENTS WITHHOLD MEDICALLY RELEVANT INFORMATION IN STANDARD VISITS` / `See the evidence ↓`

Remove the β = 10.40 stat from this card — it belongs only on the Evidence section.

**Better Documentation card:**
Replace with:
```
Every session produces a clinical report for the provider and a billing-ready report for revenue cycle management. Detailed intake reports for new patients. SOAP notes for follow-ups. Medication tables, standardized scores with trends, patient quotes for sensitive items. Every claim linked to the patient's own words.
```

Stat: `Under 1 min` / `PROVIDER REVIEW TIME PER PRE-ENCOUNTER BRIEF`

(Changed from "Three report tiers" to describe the actual output types: detailed intake reports, SOAP notes, billing-ready reports.)

**Recovered Revenue card:**
Replace with:
```
Billing documentation mapped to CPT codes at the complexity your care actually delivers. Multiple reimbursement pathways from a single session. No new billing infrastructure. Bills under existing codes from the first session.
```

Remove "No FDA clearance required." from this card.

Stat: `Day 1` / `REVENUE RECOVERY UNDER EXISTING CPT CODES`

### 7. Rewrite Evidence Section

**Headline:** `Peer-reviewed. Independently validated.`

(Remove "Actively recruiting." from the headline.)

**Card 1 — AugMend Research:**
Keep the Ko et al. card largely as-is. No changes needed.

**Card 2 — AugMend Research:**
Keep the MIT trial card. Remove "Actively recruiting" from the trial badge. The badge should read: `Registered Randomized Controlled Trial · NCT07336537 · n=45 · MIT.nano Immersion Lab`

**Card 3 — Third-Party Research:**
Keep the Lucas et al. card but add a visible label: `Supporting literature — not AugMend research`

This makes the attribution distinction that multiple reviewers flagged.

Add link text at bottom: `See full evidence and publications →` linking to `/evidence`

### 8. Delete "See What Your Intake Is Missing" Section

Find and **completely remove** the section that reads "See what your intake is missing." along with its associated content about "Our team includes clinicians, health economists, and engineers..."

This section was flagged by three reviewers as accusatory in tone and not adding value.

### 9. Restructure CTA Section

Replace the three separate CTA cards (See it in practice / Estimate your revenue impact / Talk to our team) with a single CTA block:

```
See how AugMend works in your specialty.

Our team includes clinicians, health economists, and engineers who adapt the platform to your workflow. We come to you.

[Schedule a Conversation] (primary button)
[See How It Works] (secondary button)
```

Remove the "clinical data intelligence platform" label that was previously in this section.

### 10. Update Footer

**Replace the tagline** "Clinical data infrastructure for specialty care." with:
```
Augmenting clinic capabilities. Mending the gap in patient data.
```

**Update footer nav links** to match new nav structure:
```
How It Works · In Practice · Evidence | Company: Our Story · Team · Advisory Board | Resources: FAQ · Blog · Contact
```

**Remove** info@augmend.health from the footer. (It stays on the Contact page.)

Remove any remaining reference to "clinical data infrastructure" or "clinical data intelligence platform."

### 11. Global Text Replacements

Across the entire homepage, make the following find-and-replace changes:

- "chronic conditions" → "complex patients" or "patient complexity" (context-dependent)
- "therapeutic exercises" → "behavioral exercises" (everywhere)
- "Three report tiers" → "Two report types per session" or describe as "detailed intake reports, SOAP notes, and billing-ready reports"
- "No FDA clearance required" → DELETE (remove everywhere on homepage)
- "irreplaceable" → "compounds over time" or "grows more valuable" (context-dependent)
- "clinical data intelligence platform" → DELETE
- "clinical data infrastructure" → DELETE (except if used in a clearly defined context)
- "Actively recruiting" → DELETE
- "Bill accurately" → "Bill comprehensively"

### Summary of Structural Changes
1. ✅ Hero: new headline, subhead, button treatments
2. ✅ Nav: restructured (How It Works · In Practice · Evidence · Company)
3. ✅ Gap: rewritten with new stats
4. ✅ Solution: rewritten, absorbs Architecture section concepts
5. ✅ Architecture section: DELETED
6. ✅ How It Works teaser: rewritten with patient/provider labels, device callout separated
7. ✅ The Shift: "Bill comprehensively," report types corrected, β stat removed
8. ✅ Evidence: "Actively recruiting" removed, third-party labeled
9. ✅ "See what your intake is missing": DELETED
10. ✅ CTA: three cards → single block with two buttons
11. ✅ Footer: new tagline, updated nav, email removed
