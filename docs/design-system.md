# AugMend Health — Design System for Google Stitch

## Brand Identity

**Company:** AugMend Health
**Category:** Clinical data infrastructure for specialty care
**Register:** Minimal layout. Sophisticated imagery. The interface is simple and clear — easy to work with. The visuals are dimensional, technological, and visionary — data points forming clinical pictures, faces dissolving into information streams, healthcare worlds shaped by patient data. Not a startup. Not wellness. Not consumer health.
**Core visual metaphor:** Data captured point by point, forming the full clinical picture. In imagery: point cloud faces emerging from frosted glass surfaces, dissolving into structured text. In UI: clean dot-grids, generous whitespace, warm backgrounds. Two layers — simple chrome, visionary content.
**Audience:** Clinic buyers — Practice Administrators, Medical Directors, CFOs, CIOs at specialty care organizations treating complex chronic patients.

## Colors

### Primary
- Brand Indigo: #1F1C98 — primary brand color. CTAs, headings, data points, links. A distinctive purple-blue that no competitor uses. This is AugMend's signature color.
- Deep Space: #0D0B3E — dark backgrounds (used sparingly), hero, footer. Creates depth in imagery.
- Soft Indigo: #433D81 — hover states, secondary emphasis

### Secondary
- Pale Pink: #F2DDD8 — warm accent backgrounds, card tints, section alternation
- Cream: #F5F0E8 — primary background alternative to white, warm paper-like
- Lime Signal: #B8D94E — success states, positive data indicators, progress markers
- Bright Orange: #E8843A — attention markers, key stats, CTA accents, warm callouts

### Neutral
- White: #FFFFFF — card backgrounds, input fields
- Warm White: #FAF8F5 — primary page background (not stark white)
- Near Black: #1A1A1A — primary text color (true black-adjacent, no blue tint)
- Slate: #6B7B8D — secondary text, captions, descriptions
- Silver Mist: #C4CDD5 — disabled states, dividers, dot-grid pattern (sparse)
- Border: #E8E4DE — card borders, separators (warm-toned, not blue-gray)

### Accent (for data visualization and emphasis)
- Soft Rose: #F8E8E5 — light accent background, warmth
- Lime Wash: #EAF4C8 — positive-outcome callout boxes, sparingly
- Peach Light: #FDE8D8 — warm highlight backgrounds
- Blue Wash: #E4EDF8 — light blue tint backgrounds, clinical feel

### Semantic
- Success: #B8D94E (Lime Signal)
- Warning: #E8843A (Bright Orange)
- Danger: #D94F4F
- Info: #1F1C98 (Brand Indigo)

### Gradients
- Hero imagery: linear-gradient(135deg, #0D0B3E 0%, #1F1C98 40%, cream/pink ambient) — for imagery and hero backgrounds, dimensional
- UI surface: linear-gradient(180deg, #FAF8F5 0%, #F5F0E8 100%) — subtle warm, for layout sections
- CTA: linear-gradient(135deg, #1F1C98 0%, #433D81 100%) — for CTA bars
- Warm: linear-gradient(180deg, #FFFFFF 0%, #F2DDD8 30%, #F5F0E8 100%) — pale pink to cream

## Typography

### Confirmed Pairing: Atkinson Hyperlegible + Source Serif 4

**Display / Headings:** Source Serif 4 (serif) — Adobe's workhorse serif. Professional, understated, warm without being decorative. Google Fonts. Used for H1–H3, hero statements, stat numbers, pull quotes.

**Body / UI / Data:** Atkinson Hyperlegible (sans-serif) — designed by the Braille Institute for maximum readability at all sizes. The accessibility angle aligns with AugMend's mission: patients who can't communicate easily, clinicians who need to scan reports quickly. Distinctive letterforms (open counters, exaggerated differentiation between similar characters) without being trendy. Google Fonts. Used for everything else: paragraphs, buttons, navigation, data tables, captions, labels.

**Why this pairing:** Source Serif 4 brings clinical gravitas to headlines — it reads as institutional and precise, like a research publication header. Atkinson Hyperlegible is the body workhorse — designed for the hardest-to-read conditions, which maps directly to AugMend's ethos of capturing what's missed. Together they read as "clinical infrastructure built with care."

**Google Fonts imports:**
```
@import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,500;0,8..60,600;0,8..60,700;1,8..60,400&display=swap');
```

**Note:** Atkinson Hyperlegible currently supports Regular (400) and Bold (700) weights. Where SemiBold (600) is specified in the type scale, use Bold (700) instead. Source Serif 4 is a variable font supporting 200–900 weights.

### Type Scale
- Hero: 56px / 1.1 line-height / Display Bold
- H1: 48px / 1.15 / Display Bold
- H2: 36px / 1.2 / Display Bold
- H3: 28px / 1.3 / Display Regular
- H4: 22px / 1.35 / Body SemiBold
- Body Large: 20px / 1.6 / Body Regular
- Body: 17px / 1.65 / Body Regular
- Small: 15px / 1.5 / Body Regular
- Caption: 14px / 1.4 / Body Medium (uppercase, letter-spacing 0.05em)
- Data: 13px / 1.3 / Body Medium (for labels, metadata, dot-grid annotations)

### Rules
- Maximum two font weights on any single screen: Regular (400) + Bold (700) for Atkinson Hyperlegible
- Source Serif 4 is variable (200–900) — use SemiBold (600) for H1/H2/Hero, Regular (400) for H3, Bold (700) for stats
- Never use colored text for emphasis — use size, weight, and spatial hierarchy
- Line length: 60-75 characters for body text
- Favor generous letter-spacing at caption/label sizes (0.03-0.06em)
- Monospaced numerals in data displays (use tabular figures where available)

## Spacing

- Base unit: 8px
- Scale: 4px, 8px, 16px, 24px, 32px, 48px, 64px, 96px, 128px, 160px
- Section padding: 96px–128px vertical
- Card padding: 32px–48px
- Grid: 12 columns, 24px gap, 1280px max-width
- Generous whitespace is non-negotiable. When in doubt, add more space, not more content.

## Borders and Shadows

- Border radius: 4px (small), 8px (medium), 12px (large), 16px (extra large)
- Shadow small: 0 1px 3px rgba(26, 26, 26, 0.04)
- Shadow medium: 0 4px 12px rgba(26, 26, 26, 0.06)
- Shadow large: 0 8px 24px rgba(26, 26, 26, 0.08)
- Shadows are subtle and warm-toned (black-based, not blue-based). Less shadow = more trust.
- Prefer borders over shadows where possible. Flat > elevated.

## Component Patterns

### Buttons
- Primary: AugMend Blue (#1F1C98) fill, white text, 8px radius, 48px height, Body SemiBold 15px
- Secondary: transparent, 1.5px AugMend Blue border, blue text, 8px radius
- Ghost: transparent, slate text, no border — used in navigation
- Accent: Bright Orange (#E8843A) fill, white text — for high-priority CTAs only, used very sparingly

### Cards
- White background, 1px #E8E4DE border, 12px radius, minimal or no shadow
- Padding: 32px
- Title: H4 in Near Black, description in Slate
- Cards should feel like paper, not floating panels

### Stat Cards
- Large number (48-64px, Display font) in AugMend Blue or Near Black
- Small label beneath in Slate
- Minimal container — number and label only, no heavy borders
- Can use a subtle left-border accent (2px) in Blue, Lime, Orange, or Pink to categorize

### Navigation
- Height: 64px
- Background: Warm White (#FAF8F5) with 1px bottom border
- Logo left, nav links center (Body Medium 15px), CTA button right
- No transparency tricks. Solid, simple, always visible.
- Mobile: hamburger at 768px breakpoint

### Data Points / Dot Grid
- The dot-grid pattern is a signature brand element.
- Base grid: Silver Mist (#C4CDD5) dots at ~3px diameter, regular spacing
- Active/highlighted data: AugMend Blue (#1F1C98) dots, larger (4-6px), denser
- Density variation conveys information: sparse = incomplete picture, dense = complete picture
- This pattern can be used as: section backgrounds (very low opacity), decorative accents, data visualization, illustration style

## Section Theming

### Dark Sections (used sparingly — CTA bars, footer, one hero variant)
- Background: Deep Space (#0D0B3E)
- Text: #FFFFFF
- Secondary text: rgba(255, 255, 255, 0.7)
- Accent: Soft Indigo (#433D81)
- Border: rgba(255, 255, 255, 0.12)
- NOTE: Dark sections are the exception, not the default. The brand is predominantly light. Use dark only for strong contrast moments (CTA, footer, one key section per page maximum).

### Light Sections (default — most content)
- Background: #FFFFFF or #FAF8F5 (Warm White) or #F5F0E8 (Cream)
- Text: #1A1A1A (Near Black)
- Secondary text: #6B7B8D (Slate)
- Accent: #1F1C98 (AugMend Blue)
- Border: #E8E4DE

### Warm Accent Sections (alternating, for visual rhythm)
- Background: #F2DDD8 (Pale Pink) at 30-40% opacity, or #F5F0E8 (Cream)
- Text: #1A1A1A
- Accent: #E8843A (Bright Orange) or #B8D94E (Lime Signal)
- Use for: testimonial sections, "what changes" sections, warm evidence callouts

## Visual Language

### Two-Layer Principle
The brand operates on two layers simultaneously. **Layout is simple and minimal** — clean chrome, generous whitespace, warm backgrounds, paper-like UI surfaces. **Imagery is sophisticated and visionary** — dimensional point clouds emerging from frosted glass, faces dissolving into data streams, VR worlds shaped by patient data. The interface is easy to work with. The visuals are technological and aspirational.

### Core Visual Metaphor
Individual points of patient data, captured and structured, forming a complete clinical picture. Data points emerge from a creamy frosted glass surface with depth and density — not flat on paper, but as if they merge from the surface itself. Density conveys completeness. Sparsity conveys what's still missing. This manifests as:

1. **Dot-grid portraiture on frosted glass** — human forms (hands, faces, silhouettes) rendered as deep indigo blue dots on a very dense, very fine regular grid against a creamy frosted glass background. Dot SIZE creates the image — larger dots in dense areas define the subject, dots shrink toward the edges until they disappear into the background grid. The grid never breaks; even empty areas have tiny visible dots. The frosted glass surface gives dots subtle three-dimensional depth (like raised pins, not flat ink). Up close: individual data points on a grid. At a distance: a human form. This is the signature visual.

2. **Face → data → text streams (Hero concept)** — a human face rendered in point-cloud style dissolves at its edges into structured text and data streams. The transition from human form to clinical information is the central brand image. Information flows outward from the portrait like data being captured and organized.

3. **Dot-grid backgrounds** — subtle, regular grids of small dots as section textures. The grid represents the structured framework AugMend provides. Where data is captured, dots are denser and bluer. Where it's missing, dots are sparse and gray.

4. **VR worlds as point-cloud architecture** — for platform pages (Anodyne, How It Works), immersive barrel-vaulted spaces made entirely of the dot-grid, like a LiDAR scan rendered in indigo on cream. Dots trace curved ceilings, walls, floors. Human-scale warm-glowing figures within. Healthcare worlds made of data.

5. **Isometric data layers** — for platform architecture and Anamnesis depth. Stacked planes in isometric view showing data at different depths: scattered at top, structured in the middle, dense at bottom. Same dot-grid system, different density levels.

6. **Data density visualization** — scatter-plot-style visuals where thousands of tiny dots create patterns through density. For gap visualization, revenue pathways, compounding data. Inspired by data journalism aesthetics.

7. **Clean line data visualization** — thin-line charts, minimal axes, generous whitespace. Data should breathe. No decorative chart elements.

6. **Paper-like UI surfaces** — cards and containers in the layout layer feel like clean clinical forms. Minimal shadows. Warm borders. The UI chrome is simple so the imagery can be visionary.

### What We Never Do
1. No stock photos of doctors, patients, or medical settings
2. No VR headsets as primary imagery (the experience matters, not the device)
3. No bubbly/rounded elements beyond 16px radius
4. No wellness language or consumer health aesthetics
5. No visual clutter — if it doesn't clarify, remove it
6. No flat-ink-on-paper aesthetics — dots have three-dimensional depth on frosted glass, not flat print
7. No dark backgrounds as default — light and warm is the default atmosphere

### What We Always Do
1. Lead with whitespace in layout — when in doubt, add more space
2. Use the dot-grid as a structural element on every page
3. Let typography carry the message in the layout layer
4. Give imagery sophistication and depth — frosted glass surfaces, dimensional point clouds
5. Use warm backgrounds (cream, pale pink) to humanize clinical content
6. Reserve indigo for information-carrying elements (data points, links, CTAs)
7. Use orange and lime sparingly — as signal, not atmosphere
8. Include VR world / avatar / experiential imagery on platform pages to represent the patient experience
9. Show the face → data → text dissolution at least once on the homepage

## Explicit Rules

1. Never place a VR headset as the primary image on any page. The experience matters, not the device.
2. The background is predominantly light and warm (cream, white, pale pink). Dark sections are exceptions, not defaults.
3. Maximum 16px border radius. Prefer 8px or 12px. Nothing bubbly.
4. Maximum two font weights on a single screen.
5. Never use colored text for emphasis within body copy.
6. Never use a carousel or auto-advancing slider.
7. No stock photos. Use point-cloud illustration, data visualization, VR world imagery, and typography.
8. The primary blue is Brand Indigo (#1F1C98) — a distinctive deep purple-blue. This is AugMend's signature color. All primary CTAs, headings, data points, and links use this.
9. Every section must have generous whitespace — clarity over density.
10. The dot-grid pattern should appear somewhere on every page — as background texture, illustration element, or data visualization. It is the brand's visual signature.
11. Warm accent colors (pink, cream, orange, lime) are used at low saturation for backgrounds and at full saturation only for small signal elements (badges, status indicators, stat accents).
12. Shadows are almost invisible. Prefer 1px borders in warm gray (#E8E4DE) over shadow elevation.
13. Imagery has depth and dimensionality — frosted glass surfaces, point clouds with spatial presence. Layout is flat and minimal; imagery is not.
14. Platform pages (Anodyne, How It Works) include VR environment and avatar imagery rendered in the point-cloud / frosted glass style.
