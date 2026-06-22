# AugMend Health — Phase 4: Google Stitch Visual Template Workflow

**Date: March 24, 2026**

---

## OVERVIEW

Google Stitch (stitch.withgoogle.com) is the visual design tool for this project. It generates high-fidelity UI from text prompts, enforces design consistency through a DESIGN.md system file, and exports clean HTML/CSS and Figma-compatible components. The outputs from this phase become the visual reference and starter code for Phase 5 (interactive build).

**What Stitch does well:** Layout composition, color system application, typography pairing, component design, responsive structure, rapid variant generation.

**What Stitch does not do:** Scroll animations, GSAP interactions, custom font loading, micro-interactions, multi-breakpoint responsive testing. These are Phase 5 concerns — Stitch provides the static visual foundation that Phase 5 animates.

**Budget:** 350 standard generations + 200 Pro Screen generations per month. That is more than enough for the full site. Expect to use 3–5 generations per page section (initial + refinements), totaling roughly 60–80 generations for the complete site.

---

## STEP 1: LOAD THE DESIGN SYSTEM

Before generating anything, upload the DESIGN.md file (`04-Stitch-DESIGN.md` in this folder) to Stitch as a design system reference. This tells Stitch your colors, typography, spacing, component patterns, and explicit rules. Every subsequent generation will inherit these constraints.

**How to do it:**
1. Open stitch.withgoogle.com
2. Start a new project — name it "AugMend Health Website"
3. In the design system panel, paste or upload the contents of `04-Stitch-DESIGN.md`
4. Verify Stitch has parsed it: you should see your color swatches (Brand Indigo, Deep Space, Clinical Teal) and font pairings (Libre Baskerville + Poppins) reflected in the system

**Note on fonts:** Stitch is limited to web-safe fonts. It may substitute Libre Baskerville and Poppins with visually similar alternatives. This is acceptable for layout purposes — Phase 5 will load the actual Google Fonts. What matters at this stage is the hierarchy (serif display + sans-serif body) and the scale relationships, not the exact typeface rendering.

---

## STEP 2: GENERATION SEQUENCE

Generate pages in this order. Each section builds visual momentum and establishes patterns that later sections inherit.

### Round 1: Homepage Sections (the narrative scroll)

Generate each homepage section as a separate screen. In Phase 5, these will be assembled into a single continuous scroll page. Generating them separately gives you control over each section's composition.

**Screen 1 — Hero (Section 1: The Opening)**

```
Full-viewport hero for a B2B healthcare technology website.
Dark gradient background: deep navy (#0D0B3E) through indigo (#1F1C98) to teal (#2B8FAD), flowing diagonally from top-left to bottom-right.
Subtle particle field in background — scattered points of light suggesting data coalescing, not decorative sparkles. Low opacity, slow-moving.
Center-aligned white text hierarchy:
- Large serif heading: "Capture the full clinical picture a single consult cannot surface."
- Below, 2-line supporting paragraph in ice blue (#A4DDFF), sans-serif, 20px: "Make the most of your patient face time with patient-guided data collection surrounding your sessions from intake through exit — capturing what visits miss, generating structured reports and billing-ready documentation."
- Below supporting text, two buttons side by side: primary filled button "See How It Works" and secondary outlined button "Schedule a Conversation."
Top navigation bar: white logo placeholder left, horizontal nav links center (Platform, For Clinics, For Providers, Evidence, Company), indigo-filled CTA button right "Schedule a Conversation."
No images. No stock photos. No VR headsets. No device mockups. Pure typography and gradient.
The feeling: walking into a research institution's presentation hall. Authority, not salesmanship.
```

**Screen 2 — The Gap (Section 2: The Problem)**

```
Full-width section, white background (#FFFFFF).
Section label: "THE GAP" in small caps, Clinical Teal (#2B8FAD), Poppins Medium 14px.
Large serif heading in near-black (#1A1A2E): "Your patients withhold more than a single consult can surface. What if you didn't need as many to get the full picture?"
Below the heading, one paragraph of body text in slate (#6B7B8D), sans-serif, 17px, max-width 680px: about specialty clinics operating on incomplete data because standard assessment was never designed to surface full biopsychosocial complexity.
Large pull stat: "5–20%" in Brand Indigo, serif 64px. Below it: "OF ANNUAL SPECIALTY CLINIC REVENUE LOST TO INCOMPLETE DOCUMENTATION" in small caps slate. Below that, an italic caption explaining the clinical-financial gap connection.
Right side of the layout: a subtle data visualization — a vertical bar chart or abstract graph showing "what standard intake captures" (shorter, muted) vs. "what patients actually carry" (taller, teal accent). No axis labels — conceptual, not literal.
Clean grid layout, 1280px max-width, generous vertical padding (128px top and bottom).
The feeling: a well-written clinical paper with one sharp visualization.
```

**Screen 3 — Mechanism (Section 3: The Full Journey)**

```
White background with subtle warm ivory (#FAFAF7) tint.
Section label: "HOW IT WORKS" in small caps, Clinical Teal.
Serif heading: "Intake. Progress. Outcomes. One platform across the full journey."
Four-step vertical or staggered layout showing the clinical workflow, each step with a large indigo step number (01, 02, 03, 04):
Step 01 "Before the visit" — AI-guided avatar collects biopsychosocial information, connects to clinic EHR, non-clinical staff administer, 15–45 minutes. Annotation in teal: "Last time you mentioned trouble sleeping. Has that changed?"
Step 02 "During the visit" — provider reviews structured clinical summary in under a minute: risk flags, medication, symptom deltas, psychosocial context. Annotation: "One page. Under a minute."
Step 03 "After the visit" — intake report, progress note, or exit report plus billing documentation mapped to CPT codes. Works alongside in-session scribes. Annotation: "Revenue recovered from the first session."
Step 04 "Between visits" — interval check-ins, progress assessments, provider-prescribed exercises personalized to disclosures. Annotation in teal: "Intake. Progress. Outcomes. Not a single snapshot — a continuous clinical relationship."
Below the four steps: a horizontal device showcase showing three device silhouettes (phone, tablet, VR headset) with label: "Same intelligence. Any device. Phone, tablet, or VR headset."
The devices are abstract outlines, not detailed product shots. Indigo stroke on ivory background.
1280px max-width. 12-column grid. Generous whitespace between elements.
The feeling: a process diagram from a clinical operations manual — but one that shows a continuous relationship, not a single encounter.
```

**Screen 4 — Two Copilots (Section 4)**

```
Split-screen layout, full width.
Left half — "Patient Copilot": background #F8FAFB (very light cool gray), teal accent (#2B8FAD) for the title. 4 feature points with small line icons: intake sessions, therapeutic exercises, longitudinal follow-up, safety alerts. Each point is icon + short sentence, not a bullet list.
Right half — "Provider Copilot": background #F5F4FA (very light warm lavender-gray), indigo accent (#1F1C98) for the title. 4 feature points: clinical reports, billing documentation, risk tracking, population intelligence.
A subtle connecting element between the two halves: a thin gradient line or data-flow arrow suggesting information passing from patient side to provider side.
Above the split: a single centered intro line: "Two copilots. One session. Complete clinical intelligence."
Below the split: a centered pull quote in serif: "The more sessions a patient completes, the more precise both copilots become."
No photos. Abstract and structural. Blueprint aesthetic.
```

**Screen 5 — What Changes (Section 5: The Shift)**

```
Warm ivory (#FAFAF7) background section.
Section label: "THE SHIFT" in small caps, Clinical Teal.
Serif heading: "Know more. Document better. Bill accurately."
Three equal-width cards in a row, 32px gap:
Card 1 — "Deeper data": line icon in indigo, body text about conversational AI that adapts and remembers. Stat in Coral Punch (#E8566D): "β = 10.40" with label "additional words per response vs. standard assessment (p = .020)".
Card 2 — "Better documentation": line icon in indigo, body text about three report tiers, SOAP notes, patient quotes linked to claims. Stat in Coral Punch: "< 1 min" with label "provider review time per pre-encounter brief".
Card 3 — "Recovered revenue": line icon in indigo, body text about CPT codes, multiple reimbursement pathways, no new infrastructure. Stat in Coral Punch: "Day 1" with label "Revenue recovery under existing CPT codes from the first session".
Cards: white background, 1px border #E2E8F0, 16px radius, 32px padding.
The feeling: three precise value propositions, each quantified. Clinical rigor, not marketing claims.
```

**Screen 6 — Evidence (Section 6: The Proof)**

```
Dark section. Background gradient from #0D0B3E to #1F1C98.
Section label: "EVIDENCE" in small caps, Horizon Cyan (#48C6D8).
Serif heading in white: "Peer-reviewed. Independently validated. Actively recruiting."
Two evidence cards, dark transparent background (rgba(255,255,255,0.06)), 16px radius:
Card 1: Italic serif quote in white: "Patients disclose significantly more through AugMend's conversational AI than through standard web-based assessment." Attribution in ice blue: "Ko et al., Johns Hopkins Bloomberg School of Public Health, 2026". Stat: "β = 10.40 (p = .020)" in Horizon Cyan.
Card 2: Italic serif quote: "People disclose more when they believe they're interacting with a non-human agent..." Attribution: "Lucas et al. (2014), Computers in Human Behavior, USC Institute for Creative Technologies"
Below cards: a trial badge with Horizon Cyan left border — "Registered Randomized Controlled Trial · NCT07336537 · n=50 · MIT.nano Immersion Lab · Actively recruiting"
Below: a row of institutional logos in white/monochrome — Harvard, Johns Hopkins, Yale, USC, MGH, Montefiore, Google Foundation, LA Children's, Université de Montréal.
No decorative elements. Data and institutions only.
The feeling: a research poster at a medical conference.
```

**Screen 7 — Differentiation (Section 7: What We Are Not)**

```
Warm ivory (#FAFAF7) background. Clean, text-heavy section.
Section label: "CATEGORY" in small caps, Clinical Teal.
Serif heading: "Different product. Different buyer. Different economics."
Four blocks stacked vertically, each with a bold sans-serif title and explanation:
- "Not a scribe." — AugMend creates conversations that wouldn't happen otherwise, not transcribes ones that do.
- "Not an AI therapist." — We don't replace clinical judgment. We extend it with data capture, provider-prescribed exercises, and longitudinal intelligence. The provider decides. Always.
- "Not a VR company." — Phone, tablet, VR headset. Same intelligence. VR deepens engagement where immersion adds value. One modality, not the product.
- "Not a point solution." — Continuous data and care support layer that makes every clinical tool in the stack work with a more complete patient picture.
Each block separated by a thin 1px #E2E8F0 horizontal rule.
After the four blocks, a closing line in serif, centered: "AugMend captures net-new patient data and closes the loop between what's disclosed and what care follows."
Max-width 800px, centered. Generous padding.
The feeling: a position paper. Intellectual clarity.
```

**Screen 8 — Recognized By (Section 8: Programs & Awards)**

```
White background section.
Section label: "RECOGNIZED BY" in small caps, Clinical Teal.
Centered serif heading: "Built through the programs that vet what works."
Below: a 2-row logo grid of accelerator programs and awards, grayscale logos, center-aligned.
Row 1: delta v · MIT Sandbox · Harvard Innovation Lab · Harvard Health Lab · MassChallenge
Row 2: Harvard President's Innovation Challenge (Finalist) · AAPM Innovation Awards (Finalist) · Google Foundation · Start.Nano
Logos are grayscale, uniform height (~40px), generous horizontal spacing. Below the grid: a small caption in slate: "Selected accelerator programs, innovation awards, and institutional grants."
No customer logos. No institutional partner names. These are programs the company was selected for, not clients.
The feeling: vetted by serious programs. Earned, not purchased.
```

**Screen 9 — CTA + Footer (Section 9: Go Deeper)**

```
White background transitioning to dark (#0D0B3E) at the bottom for the footer.
Three options in a row, each a card:
Card 1: "See the platform in action" — teal icon (play button), brief description, link text "Watch the Demo →"
Card 2: "Explore the ROI for your clinic" — teal icon (calculator), brief description, link text "Open ROI Calculator →"
Card 3: "Talk to our clinical team" — teal icon (calendar), brief description, link text "Schedule a Conversation →"
Cards: white background, medium shadow, 16px radius, 32px padding.
Below the cards: a simple footer with dark background. Logo left, nav columns center (Platform, Company, Legal, Resources), contact info right. Social links at bottom. Small legal text.
The feeling: confident close. Three clear paths. No pressure language.
```

### Round 2: Audience Pages

**Screen 10 — For Clinics (Practice Leaders)**

```
Interior page layout for "For Practice Leaders" — a B2B healthcare audience page.
Hero area: ivory background, left-aligned. Section label "FOR PRACTICE LEADERS" in small caps teal. Large serif heading: "Your clinic isn't under-delivering care. It's under-documenting and lacking resources to support every patient fully." Subtitle in slate about under-documentation creating the billing gap, from intake through ongoing care.
Economics section — white background. Serif heading: "Revenue you're already earning — just not capturing." Body text about multiple revenue pathways from a single session: E/M uplift, health behavior assessment, chronic care management time. Three stat cards: "Multiple" (reimbursement pathways per session), "Day 1" (revenue recovery begins), "$0" (new billing infrastructure required). Stats in Brand Indigo, clean card layout.
Deployment section — ivory background. Heading: "Non-clinical staff run it. Providers review it. Revenue follows." Six feature items in a 2-column grid with line icons: device-agnostic, 15–45 min sessions, continuous AI safety monitoring, longitudinal tracking, EHR integration via Redox, works alongside existing tools.
Over Time section — white background. Heading: "A care relationship that compounds." Body about longitudinal data building across intakes, check-ins, assessments, and exercises.
Bottom CTA: indigo background banner, white text: "Model the revenue impact for your clinic" with primary button "Open ROI Calculator."
Standard navigation at top. 1280px max-width.
```

**Screen 11 — For Providers**

```
Interior page for clinician audience: "For Providers"
Hero: warm ivory background. Serif heading: "A structured picture of who your patient is — before the visit begins." Supporting text about reducing documentation burden.
Main content: two-column layout.
Left column: "What you receive" — a mock clinical report card with sections (Biopsychosocial Summary, Risk Flags, Functional Status, Recommended Domains). Styled as a document preview with subtle shadow.
Right column: "What changes" — 3 points about workflow improvement: less history-taking, better-informed decisions, documentation that writes itself.
Bottom section: evidence callout on dark indigo background — the Ko et al. finding about deeper disclosure. Serif quote, institutional attribution.
```

**Screen 12 — For Health Systems**

```
Interior page for health system buyers.
Hero: deep space background (#0D0B3E). Large white serif heading: "Infrastructure that scales across service lines." Subtitle about enterprise deployment.
Content sections on white background:
Section 1: "Service Line Coverage" — icons for Pain Medicine, Behavioral Health, Neurology, Rehabilitation, Oncology Supportive Care.
Section 2: "Integration Architecture" — clean diagram showing AugMend connecting to EHR systems, billing platforms, patient portals. Device-agnostic. No data leaves the existing infrastructure without authorization.
Section 3: "Compliance Profile" — three cards: HIPAA, SOC2 Type 2 (in progress), No FDA Required. Each with a brief explanation and a "See full Trust & Security details →" link below the cards pointing to the Trust, Security & AI Governance page.
Section 4: "Population Intelligence" — description of Summa system, longitudinal data compounding across patients and visits.
CTA: "Schedule an enterprise conversation" on indigo background.
```

### Round 3: Platform Pages

**Screen 13 — How It Works (Platform Overview)**

```
Platform overview page showing AugMend's three-system architecture.
Hero: gradient background (#0D0B3E to #1F1C98). Heading: "Three systems. One clinical workflow."
Below hero, white background: a horizontal architecture diagram showing three connected systems:
Left: "Anamnesis" (labeled "Listening") — teal accent, icon of ear/waveform
Center: "Anodyne" (labeled "Response") — indigo accent, icon of conversation
Right: "Summa" (labeled "Intelligence") — cyan accent, icon of data/chart
Arrows flow left to right between the three.
Below the diagram: one paragraph per system explaining what it does, with a "Learn more →" link for each.
Bottom: device showcase — phone, tablet, VR — with label "Runs on any device. Same workflow. Same outputs."
Clean, architectural. Think technical documentation, not marketing page.
```

**Screen 14 — Anamnesis System Page**

```
Product detail page for "Anamnesis — The Listening System."
Hero: teal-to-indigo gradient, subtle. White serif heading with the system name.
Content on white background:
Section 1: What it does — 21 biopsychosocial domains, adaptive conversational AI, patient self-guided.
Section 2: How a session works — timeline visualization: Check-in (5 min) → Core Assessment (15-25 min) → Summary (5 min). Horizontal timeline with nodes.
Section 3: Clinical domains covered — a clean grid of domain names organized by category (Psychological, Social, Functional, Behavioral). No icons — just well-organized text.
Section 4: Device flexibility — three columns for Phone, Tablet, VR with brief notes on when each is optimal.
CTA: "See Anamnesis in a demo session"
```

**Screen 15 — Anodyne System Page**

```
Product detail page for "Anodyne — The Response System."
Hero: warm indigo background. White heading.
Content:
Section 1: What it does — therapeutic exercises, guided interventions, between-visit engagement.
Section 2: Clinical modalities — grid showing types of interventions (relaxation, exposure, psychoeducation, mindfulness exercises) with brief clinical rationale for each.
Section 3: VR advantage — side-by-side showing tablet experience vs. VR experience for the same exercise. VR adds immersion for specific clinical use cases. Not better — different, and clinically indicated.
Section 4: Provider control — "Every session is provider-initiated. Every safety alert routes to a clinician."
```

**Screen 16 — Summa System Page**

```
Product detail page for "Summa — The Intelligence System."
Hero: dark gradient. White heading.
Content:
Section 1: What it does — aggregates patient data across sessions, generates longitudinal intelligence.
Section 2: Two outputs — split layout: Clinical Report (structured for the provider) and Billing Documentation (mapped to CPT codes). Show a simplified mock of each.
Section 3: Population intelligence — how data compounds across patients to generate population-level insights for the service line.
Section 4: "The more sessions, the more precise" — a simple graph showing data richness increasing over time/sessions.
Indigo and cyan color accents. Data-forward design.
```

### Round 4: Evidence Pages

**Screen 17 — Our Research**

```
Evidence page showing AugMend's research program.
White background. Serif heading: "Our Research"
Content: a curated list of research items, each as a card:
Card format: Publication title (linked), authors, journal/venue, year, and a 1-2 line summary of finding.
Cards include:
- Ko et al. (Johns Hopkins) — modality effects study
- Murnane et al. (JMedXR) — RCT protocol
- 3 narrative reviews
- Case Study Analysis
Each card: white background, left border accent (teal for published, indigo for in-progress), subtle shadow.
At top: a filter bar with tags: All | Peer-Reviewed | Conference | In Progress
Bottom section: darker background with institutional partner logos and a note about ongoing research collaborations.
```

**Screen 18 — ROI Calculator**

```
Interactive ROI calculator page.
Left side: input form — dropdowns and number fields for: specialty type, monthly patient volume, current average billing level, current use of psychosocial screening (yes/no). Clean form design with clear labels.
Right side: live output — three result cards showing: Monthly Additional Revenue, Annual Revenue Recovery, ROI Multiple.
Below the calculator: assumptions panel — expandable section showing the math (session cost, average CPT reimbursement, documentation completion rate). Transparency builds credibility.
Bottom CTA: "These projections are based on validated billing pathways. Schedule a conversation to model your specific clinic."
Teal accents for the input focus states. Indigo for the result numbers.
```

### Round 5: Company Pages

**Screen 19 — Our Story**

```
Company origin story page. Long-form editorial layout, single centered column, max-width 720px.
Hero: Dark background (#0D0B3E). A large italic serif quote centered in white, 28px: "The time I meet with my patient is the most important part of my day — that's when their bodies tell me everything, and during that time I aspire to give them my full attention." Attribution in ice blue (#A4DDFF): "— Grandpa, MD, PhD." Breadcrumb in ice blue above: Home / Company / Our Story.
After hero, white background section. Label: "THE VISIT THAT NEVER HAD ENOUGH TIME" in small caps teal. Opening text in serif 20px italic: a passage about a provider in a specialty clinic who doesn't have enough time, and a patient who carries more than the visit can surface.
Below, body text in sans-serif 17px slate: the patient's complex history — trauma, job loss, substance use — that never makes it into the chart. Not because the provider doesn't care. Because the system was never designed for it.
Next section, ivory background. Label: "WHAT WE SET OUT TO BUILD." Serif heading: "A system that listens the way a visit never could." Body text about AugMend being founded at MIT by researchers, clinicians, and engineers who built infrastructure to surround the visit with patient-guided data collection — before, after, and between appointments.
Next section, white background. Label: "THE FOUNDING INSIGHT." Serif italic pull quote about research showing people disclose more to AI-driven digital environments. Then body text about three systems — Anamnesis, Anodyne, Summa — designed to compound in value.
Dark traction section (#0D0B3E). Label: "TRACTION" in cyan. Serif heading in white: "Where we are today." Four stat cards in a row: "10" (Institutions), "250+" (Demos Completed), "RCT" (Registered Randomized Controlled Trial · NCT07336537), "$250K" (Google Foundation Grant). Stats in Horizon Cyan, labels in ice blue, captions in slate.
Closing section, white background. Italic serif centered: "The current system is destroying hope on both sides of the hospital aisle. We are building the infrastructure to restore it." CTA button: "Meet the Team →"
The feeling: a long-form profile piece in a quality publication. Generous whitespace. No sidebar clutter. No timeline visualization — the narrative carries itself.
```

**Screen 20 — Team & Leadership**

```
Team page. Ivory background for hero, white for content.
Breadcrumb: Home / Company / Team.
Label: "THE TEAM" in small caps teal.
Serif heading: "Clinicians, engineers, and researchers who built this because the system was failing in a specific, documentable way."
Founders section, white background. Label: "FOUNDERS." Four cards in a 2×2 grid (1-column mobile), 32px gap:
Card 1: Photo placeholder (square, 1:1, grayscale, 16px radius). Name: "Sacha Moreau" in sans-serif semibold 22px. Small LinkedIn icon link. Title: "Co-Founder, CEO & President" in teal 15px. Credentials: "MIT" in slate 14px. Bio in slate 15px: 7 years in product design and environmental psychology, built product architecture from the insight that disclosure conditions determine what patients reveal.
Card 2: "Thomas J. Schneider" — Co-Founder, COO, General Counsel & Treasurer. LinkedIn icon. DPhil & DLaws (Hon), Oxford · Harvard College · Harvard Law · Deakin University. 45+ years in business restructuring and healthcare operations.
Card 3: "Aleksy Dojnow" — Co-Founder, CTO & Secretary. LinkedIn icon. MIT. 6 years in product development spanning VR, AI, and 3D systems. Designed device-agnostic architecture.
Card 4: "Alexandra Therond" — Co-Founder & Chief Clinical Officer (Part-Time, in Residency). LinkedIn icon. PhD & PsyD, Université du Québec à Montréal. 10 years in clinical and experimental psychology, designed the clinical domain architecture.
Leadership section, ivory background. Label: "LEADERSHIP." Single wider horizontal card: photo left, text right. "Dr. Mark Ruchman" — Chief Medical Officer. LinkedIn icon. Yale Medical School. Former CMO of Versant Health (MetLife / Fortune 500). 45+ years as clinician and healthcare administrator.
No team fun photos. No personality quirks. Restrained, credibility-focused.
Bottom CTA bar: indigo background, white text: "Interested in joining the team?" Button: "View Careers."
```

**Screen 21 — Advisors & Partners**

```
Advisory board page. White background for hero, alternating white/ivory for sections.
Breadcrumb: Home / Company / Advisors.
Label: "ADVISORY BOARD" in small caps teal.
Serif heading: "Clinical expertise, regulatory depth, and institutional credibility."
Body text in sans-serif 17px slate: AugMend's advisory board spans clinical medicine, AI/ML research, regulatory strategy, healthcare economics, and executive leadership.
Advisor grid: 2-column layout on desktop, 1-column mobile, 32px gap. 16 rows. Each row: name in sans-serif semibold 18px, institutional affiliation in teal medium 15px, domain expertise in slate 14px.
Row 1: Dr. Michael Kritzer-Cheren — MGH, Harvard Medical School — Neuropsychiatry, neuromodulation, ketamine services.
Row 2: Dr. Min Lang — MGH, Brigham & Women's, Harvard Medical School — Neuroradiology, AI/XR in clinical imaging.
Row 3: Dr. Soo Jeong Youn — OptumCare, Harvard Medical School — Product & implementation, evidence-based treatments.
Row 4: Dr. Hilary Weingarden — HabitAware, Harvard Medical School — Digital mental health, former MGH Digital Health.
Row 5: Dr. Jessica Jackson — Mental Health America, FDA Advisory — Regulatory strategy, clinical AI governance.
Row 6: Dr. Christine Palermo — Encore Consulting, former CommonSpirit Health — Revenue cycle, denials management.
Row 7: Dr. Roger Ferguson Jr. — Alphabet, Memorial Sloan Kettering, former Federal Reserve — Institutional governance.
Row 8: Dr. Jeffrey Gold — USC Keck, former AppliedVR/Limbix — Pediatric pain, VR therapeutics commercialization.
Row 9: Dr. Christopher Robinson — Johns Hopkins, Harvard Medical School — Pain medicine, clinical research.
Row 10: Dr. Mahnaz Maddah — Broad Institute — ML in healthcare, clinical data modeling.
Row 11: Dr. Francesco Onorati — Takeda, former Empatica — Digital health, wearables, AI.
Row 12: Nancy Santiago — Tribus Global, former U.S. Surgeon General's Office — Healthcare engagement.
Row 13: Genevieve Paquette — Vincer, former Level Ex/Brainlab — AI workforce, MedTech marketing.
Row 14: Jeff Herrmann — Launchpad Venture Group — Technology startups, investor.
Row 15: Jorge Cortell — TECH-Tokyo, former Harvard Innovation Labs — Biotech/MedTech VC.
Row 16: Michael Madon — ABCorp, former U.S. Treasury — Intelligence, security, revenue.
Institutional Partners section, ivory background. Label: "INSTITUTIONAL PARTNERS." Two-row logo grid, grayscale, center-aligned. Row 1: Harvard Medical School · Johns Hopkins · Massachusetts General Hospital · Yale School of Medicine · USC Keck. Row 2: Google Foundation · LA Children's Hospital · Université de Montréal · Montefiore Hospital. Caption: "Research collaborations and institutional partnerships."
CTA bar: indigo background. Text: "Talk to our team about a clinical partnership." Button: "Schedule a Conversation."
The feeling: an academic department's advisory committee page. Substance over style.
```

**Screen 22 — Blog & News (Listing Page)**

```
Blog listing page. White background throughout.
Breadcrumb: Home / Resources / Blog.
Label: "INSIGHTS" in small caps teal.
Serif heading in 48px near-black: "From the field."
Subhead in sans-serif 20px slate: "Clinical evidence, product updates, and perspectives on the future of specialty care infrastructure."
Filter bar: horizontal row of text links in sans-serif medium 14px — All | Clinical Evidence | Product Updates | Industry Perspectives | Press. Active filter in Brand Indigo with a subtle underline, inactive in Slate.
Article grid: 3-column on desktop, 1-column mobile, 32px gap. Each card: 16:9 image placeholder with 16px top radius → category label in small caps teal 12px → title in sans-serif semibold 20px near-black (max 2 lines) → excerpt in 15px slate (max 3 lines with ellipsis) → meta line "March 26, 2026 · 5 min read" in 13px slate → "Read More →" link in teal 15px. Cards: white background, subtle shadow, 16px radius.
Show 6 cards (2 rows of 3).
Pagination centered below: active page "1" in indigo semibold, inactive "2 · 3 · Next →" in slate.
No sidebar. No newsletter signup banner. Clean grid of content.
The feeling: a research journal's article index. Professional, scannable, no visual clutter.
```

**Screen 23 — Blog & News (Article Template)**

```
Individual article page template.
Breadcrumb: Home / Blog / Article Title.
Category label in small caps teal 12px. Title in serif bold 40px near-black, max-width 800px. Meta: "By Author Name · March 26, 2026 · 5 min read" in sans-serif 15px slate.
Hero image: full-width, 16:9 ratio, 16px radius, subtle shadow. Use an abstract data visualization or product-related visual as placeholder.
Article body: single centered column, max-width 720px. Sans-serif 17px near-black. Show placeholder content with:
- A paragraph of body text
- A serif bold 24px subhead
- Another paragraph
- A pull quote: 3px teal left border, serif italic 20px near-black, attribution in sans-serif 14px slate
- Another paragraph
Share bar below article: "Share: LinkedIn · Email · Copy Link" in sans-serif medium 14px slate. Tags as pill-shaped badges in teal: #ClinicalEvidence #SpecialtyCare.
Related articles section: label "RELATED." Three article cards in a row, same card template as listing page.
The feeling: a well-typeset long-form article. Ample whitespace. Reading-optimized line length. No distractions.
```

### Round 6: Utility & Trust Pages

**Screen 24 — Contact**

```
Contact page. Clean, minimal.
Left side: heading "Schedule a Conversation" with supporting text: "Our team includes clinicians, health economists, and engineers who understand your workflow. Not a sales call."
Below: form fields — Name, Email, Organization, Role, "What are you looking to solve?" (textarea). Primary button "Send."
Right side: direct contact info — email, phone (if applicable). Office location if relevant.
Below the form area: three cards for specific inquiry types: "Clinical Partnership," "Enterprise Deployment," "Research Collaboration" — each with a brief description and specific email.
Clean, professional. No chatbot widget. No "we'll get back to you in 24 hours" language.
```

**Screen 25 — FAQ**

```
FAQ page. Accordion layout.
Categories: "For Clinics," "Clinical & Evidence," "Technical & Compliance," "Billing & ROI"
Each question is a clickable row that expands to show the answer. Closed state: question text in sans-serif semibold, small chevron right. Open state: question highlighted, answer text below in body weight, chevron rotated down.
Clean vertical list. No cards for individual questions — just lines. 1px #E2E8F0 separators between items.
Max-width 800px, centered.
```

**Screen 26 — Trust, Security & AI Governance**

```
Trust & Security page. This is a critical page for IT/compliance buyers — treat it as infrastructure documentation, not marketing.

Hero: white background. Serif heading: "Trust & Security." Sans-serif subtitle: "How AugMend protects patient data, governs AI, and maintains regulatory compliance." No gradient, no imagery. Clean, serious, document-like.

Content layout: single-column, max-width 900px, centered. Long-form structured content with clear section dividers.

Section 1: "Data Security" — heading in sans-serif semibold. Content organized as labeled subsections: Encryption, Audio Processing, Access Controls, Infrastructure, Data Isolation, Incident Response, Compliance Certifications. Each subsection has a bold label followed by body text. No cards — this should read like a technical specification, not a feature grid.

Section 2: "AI Governance" — heading in sans-serif semibold. Three subsections: "What the AI does" (brief, precise), "What the AI does not do" (comprehensive list), "How the clinical report works" (CASReport three-content-category breakdown). Followed by "The human-in-the-loop principle" subsection. Tone: declarative, boundary-setting. No softening language.

Section 3: "AI Safety Monitoring" — this is the section that earns trust with technical buyers. Subsections: Real-time safety detection (dual-layer system — describe Layer 1 deterministic and Layer 2 contextual), Post-session risk classification (Tier 0–3 table with four rows showing tier, definition, and response posture), Safety event logging, Evidence traceability and audit trail, Session termination, System error procedures. The Tier table should be styled as a clean data table: 1px borders, #F8F9FA header row, left-aligned text.

Section 4: "Regulatory Classification" — subsections for CAS (Non-Device CDS exclusion with the four FDA criteria as a numbered list), VRAIE (General Wellness Product), statutory citations in precise legal language. No cards or icons. Text-forward.

Section 5: "Data Ownership & Portability" — brief subsection. FHIR compatibility, export formats, no data sales.

Section 6: "EHR Integration" — brief diagram showing the Redox middleware architecture: EHR → Redox → AugMend (inbound) and AugMend → Redox → EHR (outbound). Simple two-directional flow, not a complex architecture diagram. Labels at each node.

Section 7: "Third-Party AI Providers" — includes a vendor controls table. Table columns: Vendor, Function, BAA, Data Retention, Training Use. One row for OpenAI. Clean table styling matching the Tier table above.

Section 8: "IT Governance FAQ" — accordion-style questions, same pattern as the FAQ page. 12 questions covering audio storage, de-identification, AI diagnosis, safety detection, FDA classification, data storage, model training, EHR integration, AI malfunction, data discontinuation, security audits, personnel access.

Footer: "security@augmend.health" contact line.

The feeling: a security whitepaper, not a marketing page. Every element earns trust through precision, not design. Minimal color — mostly white, ivory, and deep space for section dividers. No teal accents. No gradient backgrounds. No stat cards. This page must look like it was written by engineers and reviewed by lawyers.
```

---

## STEP 3: ITERATION WORKFLOW

For each screen generated:

**First pass — Composition review:**
Does the layout hierarchy match the copy hierarchy from `02C-Website-Production-Copy.md`? Is the most important message the largest element? Does the visual weight flow in the right order (heading → supporting text → evidence → CTA)?

**Second pass — Brand compliance:**
Check against the DESIGN.md rules. Indigo, not blue. No VR headsets as primary imagery. No more than two font weights. No lavender backgrounds. No bubbly elements. If any violation appears, prompt Stitch to correct it specifically.

**Third pass — Section-to-section consistency:**
Open two generated screens side by side. Do they feel like the same website? Same margins, same text sizes, same color application? If not, reference the DESIGN.md in your refinement prompt: "Apply the same heading size and margin as [previous screen]."

**Refinement prompt format:**
Keep refinement prompts surgical. Example:
```
In this screen, change the heading to serif (Libre Baskerville). Increase vertical padding between sections to 96px. Replace the blue (#3B82F6) with Brand Indigo (#1F1C98). Remove the rounded corners on the stat cards — use 12px radius maximum.
```

---

## STEP 4: EXPORT AND ORGANIZE

Once all screens are refined:

**Export HTML/CSS** from each screen. Stitch exports Tailwind-based HTML. Save each screen's export as a separate file:
- `stitch-export-hero.html`
- `stitch-export-insight.html`
- `stitch-export-mechanism.html`
- etc.

These become reference files for Phase 5. The code will be restructured and animated, but the layout logic and class patterns carry forward.

**Export Figma-compatible versions** if you want a design file for future reference or for handing off to visual designers. Stitch's copy-to-Figma produces proper Auto Layout structure with named layers.

**Take screenshots** of each finalized screen at 1280px width. Save as:
- `stitch-screenshot-hero.png`
- `stitch-screenshot-insight.png`
- etc.

These screenshots serve as the visual contract for Phase 5 — "build this, but with scroll animations."

---

## STEP 5: BRIDGE TO PHASE 5

Stitch gives you the static composition. Phase 5 adds:

**Scroll animations (GSAP ScrollTrigger):** The hero fade-out, the scroll-locked mechanism section, the counter animations — none of these exist in Stitch output. Phase 5 wraps the Stitch layouts in GSAP-powered scroll interactions.

**Custom font loading:** Stitch may substitute fonts. Phase 5 loads Libre Baskerville and Poppins from Google Fonts and applies them to the exact type scale defined in the brand guidelines.

**Responsive breakpoints:** Stitch optimizes for one breakpoint per generation (desktop at 1280px). Phase 5 adds media queries for mobile (375px), tablet (768px), and large desktop (1440px+) using the responsive adaptation rules from the brand guidelines.

**Dark-to-light transitions:** The gradient transitions between sections (100–200px scroll distance) that create the cinematic scroll experience are coded in Phase 5, not designed in Stitch.

**Micro-interactions:** Button hovers, card shadows, nav behavior on scroll — these are CSS and JS concerns for Phase 5.

**MCP Server Integration:** Stitch now offers an MCP server (github.com/davideast/stitch-mcp) that allows Claude Code to directly query your Stitch designs during Phase 5. This means we can pull screen code and images directly into the build process. Consider installing this before Phase 5 begins.

---

## GENERATION ORDER CHECKLIST

Use this to track your progress through Stitch:

```
ROUND 1: HOMEPAGE (9 sections)
[ ] Screen 1  — Hero (The Opening)
[ ] Screen 2  — The Gap (The Problem)
[ ] Screen 3  — Mechanism (4-Step Full Journey)
[ ] Screen 4  — Two Copilots (The Architecture)
[ ] Screen 5  — What Changes (The Shift)
[ ] Screen 6  — Evidence (The Proof)
[ ] Screen 7  — Differentiation (What We Are Not)
[ ] Screen 8  — Recognized By (Programs & Awards)
[ ] Screen 9  — CTA + Footer

ROUND 2: AUDIENCE PAGES
[ ] Screen 10 — For Clinics
[ ] Screen 11 — For Providers
[ ] Screen 12 — For Health Systems

ROUND 3: PLATFORM PAGES
[ ] Screen 13 — How It Works (overview)
[ ] Screen 14 — Anamnesis
[ ] Screen 15 — Anodyne
[ ] Screen 16 — Summa

ROUND 4: EVIDENCE PAGES
[ ] Screen 17 — Our Research
[ ] Screen 18 — ROI Calculator

ROUND 5: COMPANY PAGES
[ ] Screen 19 — Our Story
[ ] Screen 20 — Team & Leadership
[ ] Screen 21 — Advisors & Partners
[ ] Screen 22 — Blog & News (Listing)
[ ] Screen 23 — Blog & News (Article Template)

ROUND 6: UTILITY & TRUST PAGES
[ ] Screen 24 — Contact
[ ] Screen 25 — FAQ
[ ] Screen 26 — Trust, Security & AI Governance
```

Estimated generation budget: ~78 first-pass generations (26 screens × 3 avg) + ~39 refinement passes = ~117 total, well within the 350 monthly standard limit.

---

## CRITICAL REMINDERS

1. **Load DESIGN.md first.** Every generation without the design system loaded will drift off-brand.
2. **Generate desktop first, always.** 1280px is the primary design target. Mobile adaptations happen in Phase 5.
3. **Never approve a screen with stock photos.** AugMend's visual identity is typography, gradient, and data — not people in lab coats.
4. **Check indigo vs. blue.** Stitch's default blue palettes will pull toward #3B82F6 or similar. Our Brand Indigo (#1F1C98) is distinctly purple-blue. Correct this in every generation.
5. **Save exports before refining.** Each refinement consumes a generation. Save the HTML/CSS export of promising versions before requesting changes, in case the refinement goes sideways.
6. **Match copy exactly.** The copy in `02C-Website-Production-Copy.md` is production-ready. Don't let Stitch's placeholder text override it — paste exact headlines and body text into prompts for key sections.
