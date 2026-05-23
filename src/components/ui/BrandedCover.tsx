import { blogCategories, type BlogCategory } from "@/data/blog"

interface BrandedCoverProps {
  title: string
  category: BlogCategory
  /** Slug drives a deterministic gradient so a post always looks the same. */
  slug: string
  /** Smaller type + label for the index card vs. the article hero. */
  compact?: boolean
  className?: string
}

// Brand gradient families. Chosen deterministically per slug so covers vary
// across the index without ever clashing with the palette.
const gradients = [
  "linear-gradient(135deg, #0D0B3E 0%, #1F1C98 100%)",
  "linear-gradient(135deg, #1F1C98 0%, #433D81 100%)",
  "linear-gradient(135deg, #0D0B3E 0%, #2820b8 100%)",
  "linear-gradient(135deg, #1F1C98 0%, #0D0B3E 100%)",
]

function hashSlug(slug: string): number {
  let h = 0
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0
  return h
}

/**
 * Typographic fallback cover for posts shipped without a custom image.
 * Keeps the index free of blank cards and gives every article a hero.
 */
export default function BrandedCover({
  title,
  category,
  slug,
  compact = false,
  className = "",
}: BrandedCoverProps) {
  const background = gradients[hashSlug(slug) % gradients.length]

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background }}
      role="img"
      aria-label={title}
    >
      {/* Dot texture, matching the site's section treatment. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1.5' cy='1.5' r='1.5' fill='%23ffffff' fill-opacity='0.05'/%3E%3C/svg%3E\")",
        }}
      />
      {/* Lime accent corner. */}
      <div
        aria-hidden="true"
        className="absolute -right-10 -top-10 h-32 w-32 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(184,217,78,0.35) 0%, transparent 70%)" }}
      />
      <div className={`relative z-10 flex h-full flex-col justify-end ${compact ? "p-6" : "p-8 md:p-12"}`}>
        <span
          className={`font-body font-bold uppercase tracking-[0.05em] text-accent-lime ${
            compact ? "text-[11px]" : "text-xs"
          }`}
        >
          {blogCategories[category]}
        </span>
        <h2
          className={`mt-2 font-display text-white ${
            compact ? "text-[20px] leading-snug" : "text-[28px] md:text-[40px] leading-tight"
          }`}
          style={{ textWrap: "balance" }}
        >
          {title}
        </h2>
      </div>
    </div>
  )
}
