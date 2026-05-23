import type { StaticImageData } from "next/image"
import type { ComponentType } from "react"

export type BlogCategory =
  | "clinical-evidence"
  | "product-updates"
  | "industry-perspectives"
  | "press"

export const blogCategories: Record<BlogCategory, string> = {
  "clinical-evidence": "Clinical Evidence",
  "product-updates": "Product Updates",
  "industry-perspectives": "Industry Perspectives",
  press: "Press",
}

/** House byline used when a post doesn't name an author. */
export const DEFAULT_AUTHOR = "AugMend Health"

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
  /** Estimated read time in minutes (the publishing skill fills this in). */
  readingMinutes?: number
  /** Lazy loader for the MDX article body — keeps bodies out of the index bundle. */
  load: () => Promise<{ default: ComponentType }>
}
