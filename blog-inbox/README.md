# Blog inbox — drop content here for publishing

This is the handoff folder between the **AugMend Marketing Agent** (which drafts
blog content into Notion + writes image specs) and the **website** (which
publishes it at `/blog/<slug>`). Drop a draft here and ask Claude to "publish
this blog post" — the `/new-blog-post` skill takes it from here.

Nothing in this folder is built or deployed; it's a staging area. Once a post is
published, its processed images live in `src/content/blog/<slug>/` and the inbox
copy can be cleared.

## How to drop a post

Create one folder per post, named with the intended slug:

```
blog-inbox/
  what-patients-withhold/
    draft.md         ← the article text (paste/export from the agent or Notion)
    images/          ← raster images you generated in Luma (photos/scenes only)
      cover.jpg
      clinic-scene.jpg
```

`draft.md` can be plain text or markdown — just the title and the body as the
marketing agent produced it. If you have a one-line excerpt and a category, note
them at the top; if not, Claude will draft an excerpt for your approval and ask
for the category.

You can also just **paste the text directly into chat** and drop only the images
here — whatever's easier. The text is treated as final and is published verbatim.

## What to hand over (the contract with the marketing agent)

The lightest, sharpest blog comes from handing over **data and text, not
pre-rendered pictures of data**. So:

- **Raster image** (drop the file in `images/`): photographs, generated scenes,
  illustrations — anything pictorial. These become `<Figure>` images.
- **Text / data instead of an image** (just describe it in `draft.md`): quotes,
  statistics, comparisons, charts, tables. Claude renders these natively
  (`<PullQuote>`, `StatCard`, markdown tables, SVG charts) so they stay light,
  selectable, SEO-indexable, and crisp.

Concretely: if the marketing agent's output includes a chart, give the **numbers
behind it** (and the source citation) rather than a rendered chart image — Claude
will rebuild it in brand colors. Same for any quote or stat: text is enough.

## Pulling from Notion instead

If you'd rather not copy-paste, Claude can read the approved draft straight from
the Notion "Marketing Campaigns" page via the Notion integration — just give it
the page name or link, and still drop the Luma raster images in `images/`.
