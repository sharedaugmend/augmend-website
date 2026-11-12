import type { StaticImageData } from "next/image"

interface ArticleVideoProps {
  /** Main source under /public (H.264 MP4, faststart). */
  src: string
  /** Optional lighter source for narrow screens (≤767px). */
  srcSmall?: string
  /** Poster frame: an imported image or a /public path. */
  poster: StaticImageData | string
  /** Accessible name for the player. */
  title: string
  /** Runtime in seconds (metadata only; the player shows it). */
  durationSeconds?: number
  caption?: string
  /** On-screen text of the film, line by line (films without voice-over). */
  transcript?: string[]
  /** Extend beyond the text column when used inline in a post. */
  wide?: boolean
  className?: string
}

/**
 * Standard video treatment for blog posts: the same frame as <Figure>
 * (rounded corners, hairline border), native controls, no autoplay (films
 * carry music), poster first, metadata-only preload so the page stays light.
 * Used by the article page for `heroVideo`, and usable inline in MDX.
 */
export default function ArticleVideo({
  src,
  srcSmall,
  poster,
  title,
  caption,
  transcript,
  wide = false,
  className = "",
}: ArticleVideoProps) {
  const posterSrc = typeof poster === "string" ? poster : poster.src
  const meta = caption ?? ""

  return (
    <figure className={`${wide ? "my-10 md:-mx-24" : ""} ${className}`}>
      <div className="overflow-hidden rounded-2xl border border-neutral-border bg-brand-deep-space">
        <video
          controls
          playsInline
          preload="metadata"
          poster={posterSrc}
          aria-label={title}
          width={1920}
          height={1080}
          className="block aspect-video h-auto w-full"
        >
          {srcSmall ? <source src={srcSmall} type="video/mp4" media="(max-width: 767px)" /> : null}
          <source src={src} type="video/mp4" />
          <a href={src}>Download the video ({title})</a>
        </video>
      </div>
      {meta ? (
        <figcaption className="mt-3 text-center font-body text-[13px] leading-relaxed text-neutral-slate">
          {meta}
        </figcaption>
      ) : null}
      {transcript && transcript.length > 0 ? (
        <details className="mx-auto mt-3 max-w-[720px] rounded-xl border border-neutral-border bg-surface-cream px-5 py-3 font-body text-[14px] text-neutral-slate">
          <summary className="cursor-pointer font-bold text-brand-indigo">Text in the film</summary>
          <ol className="mt-3 list-none space-y-1 pl-0">
            {transcript.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ol>
        </details>
      ) : null}
    </figure>
  )
}
