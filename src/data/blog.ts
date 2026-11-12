import type { StaticImageData } from "next/image"
import type { ComponentType } from "react"

export type BlogCategory =
  | "clinical-evidence"
  | "product-updates"
  | "industry-perspectives"
  | "press"
  | "newsletter"

export const blogCategories: Record<BlogCategory, string> = {
  "clinical-evidence": "Clinical Evidence",
  "product-updates": "Product Updates",
  "industry-perspectives": "Industry Perspectives",
  press: "Press",
  newsletter: "Newsletter",
}

/** House byline used when a post doesn't name an author. */
export const DEFAULT_AUTHOR = "AugMend Health"

/**
 * A video shown in place of the cover image at the top of a post (or inline
 * via <ArticleVideo>). Files live in /public/videos/blog/ — see the
 * new-blog-post skill for export standards.
 */
export interface BlogVideo {
  /** Main source under /public, e.g. "/videos/blog/the-space-between-1080.mp4". */
  src: string
  /** Optional lighter source for narrow screens (≤767px), e.g. a 720p encode. */
  srcSmall?: string
  /** Imported 16:9 poster frame, shown before play and used as the share image. */
  poster: StaticImageData
  /** Accessible name for the player. */
  title: string
  /** Runtime in seconds (shown under the player when set). */
  durationSeconds?: number
  /** Optional one-line caption under the player (credits, AI-imagery disclosure). */
  caption?: string
  /**
   * The on-screen text of the film, line by line, for films without voice-over.
   * Rendered in an expandable "Text in the film" panel for screen readers,
   * muted viewers and search engines.
   */
  transcript?: string[]
}

export interface BlogPost {
  /** URL slug — must match the post's folder name under src/content/blog/. */
  slug: string
  title: string
  excerpt: string
  category: BlogCategory
  /** ISO date, e.g. "2026-04-01". */
  date: string
  /** Defaults to DEFAULT_AUTHOR when omitted. */
  author?: string
  /** Imported cover image. Omit to render a branded fallback cover. */
  cover?: StaticImageData
  /** Video shown in place of the cover at the top of the article. The cover (or the video poster) still drives cards and share images. */
  heroVideo?: BlogVideo
  /** Estimated read time in minutes (the publishing skill fills this in). */
  readingMinutes?: number
  /** Lazy loader for the MDX article body — keeps bodies out of the index bundle. */
  load: () => Promise<{ default: ComponentType }>
}
