import type { BlogPost } from "@/data/blog"

/**
 * Blog post registry — the single source of truth for the index and articles.
 *
 * To publish a post, add one entry below (the /new-blog-post skill does this):
 *
 *   import coverWpw from "./what-patients-withhold/cover.jpg"
 *
 *   {
 *     slug: "what-patients-withhold",          // must match the folder name
 *     title: "What Patients Withhold…",
 *     excerpt: "One- or two-sentence summary for the card and meta tags.",
 *     category: "clinical-evidence",
 *     date: "2026-04-01",
 *     author: "AugMend Health",                // optional; omit for house byline
 *     cover: coverWpw,                          // optional; omit for branded fallback
 *     readingMinutes: 6,
 *     load: () => import("./what-patients-withhold/post.mdx"),
 *   },
 *
 * Cover image imports go at the top of this file; inline images are imported
 * inside each post's own .mdx file.
 */
export const posts: BlogPost[] = [
  {
    slug: "why-patients-dont-tell-you-everything",
    title: "Why patients don't tell you everything",
    excerpt:
      "A 38-provider survey found that in pain management, every provider named patient nondisclosure a top challenge. The reason isn't patients — it's a visit format never built to collect biopsychosocial context.",
    category: "industry-perspectives",
    date: "2026-05-22",
    author: "Sacha Moreau",
    readingMinutes: 5,
    load: () => import("./why-patients-dont-tell-you-everything/post.mdx"),
  },
]

/** Posts newest-first. */
export function getAllPosts(): BlogPost[] {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date))
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug)
}

/** Up to `limit` related posts: same category first, then most recent. */
export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(slug)
  if (!current) return []
  const others = getAllPosts().filter((p) => p.slug !== slug)
  const sameCategory = others.filter((p) => p.category === current.category)
  const rest = others.filter((p) => p.category !== current.category)
  return [...sameCategory, ...rest].slice(0, limit)
}
