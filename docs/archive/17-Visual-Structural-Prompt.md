# Prompt 17: Visual + Structural Code Changes (V18)

## Context
This prompt handles visual asset changes and structural code fixes that are not purely copy-related. Run this AFTER Prompts 15 and 16 (copy changes). Read `14-Website-Copy-V18.md` for full context.

## Visual Changes

### V1: Replace problem-data-capture.png with SVG

The current image under the Gap section (`problem-data-capture.png` or equivalent) shows a dense dot-matrix visualization that reads like a gram stain to clinician audiences.

**Replace with a clean SVG or React component** that communicates:
- Standard assessments capture only a fraction of what the patient presents with
- The biopsychosocial dimensions that get missed: trauma, substance use, SDOH, functional limitations, psychosocial stressors

Design direction:
- Simple, minimal, clean — not dense or noisy
- Use a percentage or fraction visual metaphor (e.g., a circle or bar showing captured vs uncaptured data)
- Brand colors: use Brand Indigo #1F1C98 for captured data, Cream #F5F0E8 or light gray for the gap
- Must read immediately at a glance for a busy clinician
- Avoid anything that looks like a scientific assay, gram stain, or abstract tech visualization

### V2: Replace text-flow-indigo image in How It Works

The current `text-flow-indigo-1-IMG-06.png` (or equivalent) under the How It Works section needs to be replaced with an SVG or React component.

**The visual should show:**
- What is captured at each stage of the care journey
- Who receives the outputs (patient-facing vs provider-facing)
- That the process forms a continuous loop (not a linear pipeline)
- Data layers rather than AI-tech stages:
  1. Raw patient data (collected via self-guided session)
  2. Structured and analyzed (by the platform)
  3. Clinical insights + billing documentation (delivered to provider + billing team)
  4. Continuous intelligence supporting long-term care and revenue cycle management

Design direction:
- Use a circular or cyclical layout showing the continuous loop
- Label each layer clearly — avoid AI jargon
- Brand colors and clean typography
- Could be an animated React component (subtle, not distracting)

### V3: Device Section Visual

Create SVG icons or an illustration for the new "Same intelligence. Any device." callout section.

**Three items, each with a visual:**
1. **VR headset** — Show in a clinic setting context. Primary modality.
2. **Tablet** — Show in a clinic waiting area context. Alternative.
3. **Phone** — Show at-home context. Remote accessibility.

Design direction:
- Simple SVG icons are fine for v1 — can be upgraded to illustrations later
- Each icon should suggest the context of use (clinic vs home)
- Use consistent brand styling
- Could use Lucide React icons as a starting point (the project already has lucide-react installed)

### V4: Blue Lady Image → Content Space

The large face/figure visual (referenced as "the-shift-woman-dots.png" or "blue lady image") currently sits under The Shift section and feels like a placeholder.

**Options (choose based on layout):**
- A: Replace with the face-with-dots aesthetic at a smaller scale, positioned as a sidebar or background element — not the main content
- B: Remove entirely and redistribute content into that space
- C: Move to the Our Story page as atmospheric background

The dots/words face aesthetic IS well-received — the issue is scale and placement. It should be decorative/atmospheric, not a primary content element.

### V5: Simplify Session Diagram (In Practice Page, Practice Leaders Section)

If a sessions 1–5 diagram exists (showing data accruing over sessions):
- Replace with a simpler visual showing data compounding over time
- Do NOT imply a cap of 5 sessions
- Make connection lines more visible
- Could be a simple upward curve or growing bar chart with no session numbers

### V6: Fix Flow Diagram (In Practice Page)

If a flow diagram exists showing the care journey loop:
- Remove duplicate arrow from Longitudinal Insights back to Pre-visit AI Intake
- Keep only the single arrow that routes through the bottom of the diagram
- Fix "data remote" typo → "data remotely" if it appears in any diagram text

### V7: Hero Button Treatments

Already specified in Prompt 15, but for visual clarity:

**"See How It Works" button:**
- Needs a stronger accent color — currently gets lost against the dot animation
- Suggestion: use Lime Signal #B8D94E or Bright Orange #E8843A as accent background with white text
- Alternatively, use white background with Brand Indigo text

**"Schedule a Conversation" outline button:**
- Increase border weight from 1px to 2px
- Increase border opacity to full white (currently may be semi-transparent)
- Ensure text is fully white and legible against the animated canvas

### V8: Evidence Section — Visual Attribution

On the Evidence section of the homepage, add a clear visual distinction between:
- AugMend's own research cards (default dark card style)
- Third-party supporting research card (add a different accent border color or a subtle "Supporting Research" label chip)

This can be as simple as a small tag/badge on the Lucas et al. card that says "Supporting Literature" in a different accent color.

### V9: Faces / Dot-Line Portraits

The faces-built-from-dots aesthetic is well-received across reviewers. Guidelines for placement:

**DO use face-with-dots visuals:**
- As atmospheric backgrounds on Our Story page
- As sidebar/column accents on the Solution or How It Works sections
- At smaller scale, integrated with content sections

**DON'T use face-with-dots visuals:**
- As primary content elements that dominate the section
- At hero-scale (the hero has the particle animation)
- Where they replace content that should be there (the "blue lady" problem)

### V10: Accelerator Logos on Team Page

1. Scan the `public/logos/` directory (or equivalent) for all logo files
2. Display ALL logos EXCEPT the AugMend logo
3. Place in a "Backed and accelerated by:" section on the Team page
4. Standard logo row layout: grayscale or original colors, consistent height, horizontally scrolling on mobile if needed

## Structural Code Changes

### S1: Create Route for Merged Page

Create `/in-practice` route. This is the new merged page replacing the three use-case pages.

### S2: Set Up Redirects

If the framework supports it, add redirects:
- `/platform/for-providers` → `/in-practice`
- `/platform/for-clinics` → `/in-practice`
- `/platform/for-health-systems` → `/in-practice`
- `/for-providers` → `/in-practice`
- `/for-clinics` → `/in-practice`
- `/for-health-systems` → `/in-practice`

In Next.js, add to `next.config.ts`:
```typescript
async redirects() {
  return [
    { source: '/platform/for-providers', destination: '/in-practice', permanent: true },
    { source: '/platform/for-clinics', destination: '/in-practice', permanent: true },
    { source: '/platform/for-health-systems', destination: '/in-practice', permanent: true },
    { source: '/for-providers', destination: '/in-practice', permanent: true },
    { source: '/for-clinics', destination: '/in-practice', permanent: true },
    { source: '/for-health-systems', destination: '/in-practice', permanent: true },
  ]
}
```

### S3: Remove Trust & Security from Nav

Remove the Trust & Security page link from the main navigation. The page can remain accessible by direct URL but should not be in the nav menu. Trust information now lives inline on the In Practice page.

### S4: Update Nav Component

The nav should render:
```
How It Works · In Practice · Evidence · Company ▾
                                          └── Our Story
                                              Team
                                              Advisory Board
```

With `[Schedule a Conversation]` as the right-side CTA button.

### S5: Contact Form Routing

Ensure the contact form submits to a backend that routes to sachaxmoreau@gmail.com (or a team inbox). If using a form service (e.g., Formspree, Resend), configure the destination email.

Remove the phone number display from the contact page component.

### S6: Dead Link for Secureframe Trust Page

Anywhere the copy references "See full trust and security details →", link to `#` (placeholder) with a `title` attribute noting it's a placeholder:
```html
<a href="#" title="Secureframe trust page — URL pending from Lucas">
  See full trust and security details →
</a>
```

This will be updated to the real URL once Sacha gets it from Lucas.

## Order of Execution

1. Visual V7 (hero buttons) — can run with Prompt 15
2. Visual V1, V2, V3 (SVG replacements) — can be done in parallel
3. Structural S1-S4 (routes, redirects, nav) — run with Prompt 16
4. Visual V4, V5, V6, V8, V9, V10 (remaining visuals) — after page structure is stable
5. Structural S5, S6 (form routing, dead links) — final polish
