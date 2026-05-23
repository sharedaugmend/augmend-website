# Blog handoff contract — marketing agent → website

How a blog draft moves from the **AugMend Marketing Agent** to the **website**, and what to hand over so it publishes cleanly. This file is safe to copy into the marketing agent's `knowledge/` folder so both sides share one contract.

## The flow

1. Marketing agent drafts the long-form piece into the Notion "Marketing Campaigns" page (full text in the page body) and writes image specs.
2. Human renders any **photographic** imagery in Luma from those specs.
3. Hand the article to the website one of three ways:
   - Drop a folder `augmend-website/blog-inbox/<slug>/` with `draft.md` + `images/`.
   - Paste the text into Claude in the website repo and drop only images in `images/`.
   - Tell Claude the Notion page name — it pulls the approved text directly.
4. The website's `/new-blog-post` skill publishes it at `/blog/<slug>`, rendering data natively.

## What to hand over — the key rule

**Hand over data and text, not pictures of data.** The website renders statistics, comparisons, quotes, and charts as native HTML/SVG (lighter, crisp on every screen, selectable, and indexable by Google — which matters because LinkedIn posts link back to the blog). So:

| You produce | Hand over | Becomes on the site |
|---|---|---|
| A statistic / KPI | the number + citation (as text) | a native stat card |
| A comparison or bar chart | the underlying values + citation | a native SVG chart |
| A quote / statement | the text | a native pull quote / statement card |
| Tabular data | the table as text/markdown | a styled native table |
| A photo, scene, or illustration | the **image file** (Luma) | a `<Figure>` raster image |

Do **not** flatten a statistic into a PNG and send the PNG. Send the number. The site already has the brand-styled card system to render it.

## Article body is the source of truth

The carousel/image set you generate often spans the whole campaign, so it can contain stats that belong to *other* pieces. The website only renders data that appears in **this article's body**. Keep the long-form text complete and self-contained; anything not in the prose won't be published, even if a graphic for it exists.

## Voice & terminology (already enforced on both sides)

Prose is published verbatim — never edited. Any copy the website authors itself (excerpts, captions, alt text) follows the agent's rules: no "infrastructure" for the product, no "surface" as a verb, no "therapeutic"/FDA language, plain-English feature names, tell-don't-sell.

## Byline

First-person founder essays carry the named byline (e.g. "Sacha Moreau"). Company-voice pieces default to "AugMend Health".
