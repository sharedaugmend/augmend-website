import Image, { type StaticImageData } from "next/image"
import { type ReactNode } from "react"

interface FigureProps {
  /** Imported image (preferred — auto dimensions) or a /public path string. */
  src: StaticImageData | string
  /** Accessible description. Falls back to the caption text when omitted. */
  alt?: string
  /** Optional caption rendered beneath the image. */
  caption?: ReactNode
  /**
   * Force an aspect ratio (e.g. "16/9", "4/3", "1/1"). Required when `src`
   * is a string path. With an imported image, omit it to use native size.
   */
  aspect?: string
  /** Sit the image on a cream matte — good for charts, logos, or transparent art. */
  mat?: boolean
  /** Extend beyond the text column for impact (full content width). */
  wide?: boolean
  /** Prioritize loading (use only for a cover/above-the-fold image). */
  priority?: boolean
  className?: string
}

/**
 * Standardized image treatment for blog posts.
 *
 * Every figure shares the same frame — rounded corners, hairline border,
 * consistent vertical rhythm, and caption styling — so visual consistency
 * holds even when the imagery itself varies (photo, chart, abstract, quote).
 */
export default function Figure({
  src,
  alt,
  caption,
  aspect,
  mat = false,
  wide = false,
  priority = false,
  className = "",
}: FigureProps) {
  const altText = alt ?? (typeof caption === "string" ? caption : "")
  const isStringSrc = typeof src === "string"
  // String sources need an aspect ratio to size the fill container.
  const ratio = aspect ?? (isStringSrc ? "16/9" : undefined)

  const frame = `overflow-hidden rounded-xl border border-neutral-border ${
    mat ? "bg-surface-cream p-4 md:p-6" : "bg-surface-cream"
  }`

  return (
    <figure className={`${wide ? "my-10 md:-mx-24" : "my-8"} ${className}`}>
      {ratio ? (
        <div className={frame}>
          <div className="relative w-full" style={{ aspectRatio: ratio }}>
            <Image
              src={src}
              alt={altText}
              fill
              priority={priority}
              sizes={wide ? "(min-width: 768px) 960px, 100vw" : "(min-width: 768px) 720px, 100vw"}
              className={mat ? "object-contain" : "object-cover"}
            />
          </div>
        </div>
      ) : (
        <div className={frame}>
          <Image
            src={src}
            alt={altText}
            priority={priority}
            sizes={wide ? "(min-width: 768px) 960px, 100vw" : "(min-width: 768px) 720px, 100vw"}
            className="w-full h-auto"
          />
        </div>
      )}
      {caption && (
        <figcaption className="mt-3 text-center font-body text-[13px] leading-relaxed text-neutral-slate">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
