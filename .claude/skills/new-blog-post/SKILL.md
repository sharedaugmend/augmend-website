---
name: new-blog-post
description: Publish a new AugMend blog post from supplied text and images. Use whenever Sacha (or anyone) says "new blog post", "publish this post", "add a blog article", "draft this as a blog post", "here's the blog text and images", or provides article copy intended for the /blog section. Handles the full pipeline — folder scaffolding, MDX file creation with verbatim prose, image placement and export standards, Luma image-generation prompts, registry wiring, and a build check — while guaranteeing the author's written text is never altered.
---

# New Blog Post

Turn supplied text and images into a published article at `/blog/<slug>` on the AugMend website. The system is MDX-based: each post is a self-contained folder, and one registry entry wires it into the index and article routes.

## The one inviolable rule

**Never edit, rewrite, paraphrase, condense, "improve", or correct the author's prose.** Paste it into the `.mdx` file exactly as given — same words, same punctuation, same paragraph breaks. Your only additions are the metadata block at the top and visual components (`<Figure>`, `<PullQuote>`, `StatCard`, tables, charts) placed *between* paragraphs. If text seems to have a typo, leave it and mention it separately to the author; do not change it. The MDX format exists specifically so the prose lives untouched as plain markdown.

## Where content comes from

Blog content is drafted by the **AugMend Marketing Agent** (`~/Documents/augmend-marketing-agent`), which writes drafts into the Notion "Marketing Campaigns" database and produces text-only image specs. The author then generates any raster images in Luma. The same article is also posted to LinkedIn in short form, linking back to the published blog post — so the website is the canonical long-form home and SEO matters.

The handoff into this repo happens one of three ways (author's choice, all fine):

1. **Drop folder** — `blog-inbox/<slug>/` with `draft.md` (the text) and `images/` (raster files). See `blog-inbox/README.md`.
2. **Paste in chat** — the author pastes the text and drops only images in `blog-inbox/<slug>/images/`.
3. **Notion** — read the approved draft directly from the Notion "Marketing Campaigns" page via the Notion integration (ask for the page name/link), with raster images dropped in the inbox.

After publishing, move processed images into `src/content/blog/<slug>/`; the inbox copy is transient (gitignored).

## What you need from the author

Before publishing, make sure you have:

1. **Title** and the **body text** (the article itself).
2. A **category** — one of: `clinical-evidence`, `product-updates`, `industry-perspectives`, `press`.
3. A **publish date** (defaults to today if not given).
4. **Images**, if any, and a note of roughly where each goes in the text. A **cover image** is optional — if none is given, a branded fallback cover is generated automatically.
5. An **author/byline** only if it differs from the house default ("AugMend Health").
6. A short **excerpt** (1–2 sentences) for the card and meta tags. If not supplied, draft one and show it to the author for approval — this is summary copy, not the prose, so it may be written, but confirm it.

If anything essential is missing, ask before proceeding.

## Native vs. raster: how to render each visual

Default to **native rendering** (HTML/SVG/CSS) for anything made of data, text, or numbers. It's lighter, stays crisp on every screen, recolors with brand tokens, and — unlike a flattened image — is selectable and indexable by search engines (important, since LinkedIn posts link back here). Reserve raster images for genuinely pictorial content.

| Content | Render as | How |
|---|---|---|
| Photo, generated scene, illustration | **Raster** | `<Figure src={…} />` (Luma image) |
| Quote / testimonial | **Native** | `<PullQuote cite="…" variant="light">` |
| A statistic or KPI callout | **Native** | `StatCard` (value/label/description, optional accent) |
| Tabular data | **Native** | a GFM markdown table (styled automatically) |
| Bar / comparison / before-after chart | **Native** | a small bespoke SVG/CSS component (see below) |
| Diagram / flow | **Native if simple**, else raster | reuse/extend existing UI, or `<Figure mat>` |

Rule of thumb the marketing agent should follow: if its output contains a chart, hand over the **numbers and the source citation**, not a rendered chart picture — the chart gets rebuilt natively in brand colors. Quotes and stats only need their text.

**Charts are built per-post, not from a generic library.** The site's house style is hand-built SVG (see `src/components/ui/DisclosureBarChart.tsx`, `StatCard`, `Counter`). When a post needs a chart, build a small dedicated component for that post (or reuse an existing one), wrap it in the `<Figure>` frame for a caption, and keep it accessible (real text labels, `prefers-reduced-motion` respected). Do **not** pre-build speculative charting infrastructure.

`StatCard`, `PullQuote`, and bespoke chart components are client components but render correctly inside server-rendered MDX. Import any you use at the top of the post's `.mdx`.

The native data-card components live in `src/components/ui/blog/`: `DataCard` (navy frame), `StatGraphic` (one or more big stats; `layout="row"` for 2–3 side by side, a `"muted"` tone for the dimmed half of a prevalence-vs-documentation gap), `StatementGraphic` (large typographic statement), and `BarCompareGraphic` (horizontal bars). They mirror the marketing agent's carousel cards but stay live text on a deep-space-navy background with lime/orange figures.

**MDX paragraph-wrapping gotcha (important).** MDX wraps any element's *text children* that sit on their own lines in a `<p>` styled by the global `p` mapping — which both nests invalidly inside a component's own `<p>` (hydration error) and forces dark body color (illegible on a navy card). So: pass card text via **props, not children** (`StatGraphic`/`StatementGraphic`/`BarCompareGraphic` already do this — `StatementGraphic` takes `lead`/`emphasis`/`footnote` strings). For components that do take children (`PullQuote`), keep the text on a **single line** between the tags so MDX leaves it inline.

## Voice and terminology (for copy YOU author)

The author's prose is never touched, but any copy *you* write — excerpts, captions, alt text — must follow the marketing agent's rules (`~/Documents/augmend-marketing-agent/CLAUDE.md` §6–8):

- Never use **"surface"** as a verb — use "data collection", "capture", or "collect".
- Never use **"infrastructure"** to describe the AugMend product — use "clinical data collection software/service", "clinical context layer", or "patient self-reported biopsychosocial data collection".
- Never use **"therapeutic"** or FDA regulatory language in marketing copy.
- Plain-English feature names: "intake", "exercises", "reports", "population/longitudinal intelligence".
- Tell, don't sell — captions and excerpts educate; they don't pitch.

Draft excerpts/captions and show them to the author for approval rather than publishing copy silently.

## Folder structure

Create one folder per post under `src/content/blog/`, named with the slug (kebab-case, derived from the title):

```
src/content/blog/<slug>/
  post.mdx          ← metadata export + verbatim prose + figure tags
  cover.jpg         ← optional
  01-<desc>.jpg     ← inline images, numbered in reading order
  02-<desc>.jpg
```

## Step-by-step

### 1. Pick the slug
Kebab-case, concise, derived from the title (e.g. "What Patients Withhold…" → `what-patients-withhold`). It must match the folder name and the `slug` in the registry.

### 2. Place and process images
- Save inline images into the post folder, numbered in reading order (`01-…`, `02-…`).
- **Enforce export standards** (see below). If a supplied image exceeds the size ceiling, downscale/re-encode it before saving — large source files bloat the build.
- The cover (if any) is saved as `cover.<ext>` in the folder.

### 3. Write `post.mdx`
Top of file: image imports, then the `meta` export, then the prose with figures interleaved.

```mdx
import chart from "./01-disclosure-chart.jpg"
import scene from "./02-clinic-scene.jpg"

export const meta = {
  title: "What Patients Withhold, and Why It Matters",
  excerpt: "Research shows patients disclose significantly more through conversational AI than standard intake.",
  category: "clinical-evidence",
  date: "2026-04-01",
}

The author's first paragraph, exactly as written.

<Figure src={chart} caption="Disclosure rates: conversational AI vs. standard intake." />

The author's next paragraph, exactly as written.

<PullQuote cite="— Dr. Jane Smith, Montefiore">
A sentence of the author's worth amplifying.
</PullQuote>

More of the author's prose, untouched.
```

Notes:
- `meta` here is for reference/co-location; the **registry entry** (step 4) is what the site reads, so keep them consistent.
- Use `<Figure>` for every image (props: `src`, `caption?`, `alt?`, `aspect?`, `mat?`, `wide?`). Use `mat` for charts/diagrams/transparent art so they sit on a cream matte; use `wide` to break an image out beyond the text column for impact.
- Use the existing `<PullQuote cite="…">` for quotes (it must be imported at the top: `import PullQuote from "@/components/ui/PullQuote"`). For light article backgrounds pass `variant="light"`.
- `<Figure>` and `<PullQuote>` must be imported at the top of the MDX unless registered globally. Currently import them explicitly:
  `import Figure from "@/components/ui/Figure"`
  `import PullQuote from "@/components/ui/PullQuote"`

### 4. Register the post
Add one entry to `src/content/blog/posts.ts`. Import the cover (if any) at the top of that file, then add to the `posts` array:

```ts
import coverWpw from "./what-patients-withhold/cover.jpg"

// inside posts: BlogPost[] = [ ... ]
{
  slug: "what-patients-withhold",
  title: "What Patients Withhold, and Why It Matters",
  excerpt: "Research shows patients disclose significantly more through conversational AI than standard intake.",
  category: "clinical-evidence",
  date: "2026-04-01",
  cover: coverWpw,            // omit the line entirely for a branded fallback
  readingMinutes: 6,          // compute: round(wordCount / 225), min 1
  load: () => import("./what-patients-withhold/post.mdx"),
}
```

Compute `readingMinutes` from the body word count (≈225 words/min, rounded, minimum 1).

### 5. Build check
Run `npm run build` and confirm the new `/blog/<slug>` route prerenders without errors. Fix any MDX/import issues. Then tell the author it's live and link the route.

## Image export standards

Keep the blog fast — the rest of the site ships oversized PNGs, but blog images must not.

- **Format:** JPG or WebP for photos and rendered scenes; PNG only when transparency is required.
- **Dimensions:** longest edge ≤ 2000px.
- **File size:** target < 500KB per inline image, < 800KB for covers; hard ceiling 1MB. Downscale/re-encode anything larger before committing.
- **Cover aspect ratio:** 16:9.
- **Inline:** any ratio works (the `<Figure>` frame normalizes the look). For charts/diagrams, native ratio + `mat` is fine.

## Luma image-generation standards

The author generates imagery with Luma Labs. Visual *subjects* vary (realistic scenes, charts/data, abstract elements, quote cards), so consistency comes from a shared **style signature**, not a fixed background. Append this signature to any subject prompt:

> `<subject>, editorial healthcare aesthetic, warm soft natural light, generous negative space, muted palette of deep indigo (#1F1C98), deep-space navy (#0D0B3E), warm cream (#F5F0E8) with a single lime accent (#B8D94E), subtle film grain, calm and clean, no text overlays.`

Guidance:
- **Covers:** generate at 16:9.
- **Consistency across a post:** reuse one Luma output as a reference/style image for the others so a post's images share a family resemblance.
- **Charts/data:** when the author wants real data visualized accurately, prefer a clean chart rather than an AI-imagined one; render or build it, then place with `<Figure mat>`.
- **No baked-in text:** keep generated images text-free; captions live in `<Figure caption>`.

## Building blocks reference

- `src/data/blog.ts` — types, `blogCategories`, `DEFAULT_AUTHOR`.
- `src/content/blog/posts.ts` — the registry + `getAllPosts`, `getPostBySlug`, `getRelatedPosts`.
- `src/components/ui/Figure.tsx` — standardized image frame.
- `src/components/ui/PullQuote.tsx` — quote treatment.
- `src/components/ui/BrandedCover.tsx` — fallback cover when no image is supplied.
- `src/mdx-components.tsx` — global markdown element styling (handles all prose typography automatically).
- Article route: `src/app/blog/[slug]/page.tsx`. Index: `src/components/sections/blog/BlogContent.tsx`.
