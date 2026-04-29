"use client"

import Image from "next/image"

interface BlurredBackdropProps {
  /** Path under /public to the source image. */
  src: string
  /** Surface tone to wash over the blur. "warm-white" or "cream" most common. */
  tone?: "warm-white" | "cream" | "dark"
  /** Opacity of the underlying image (0–1). Default low so it reads as texture. */
  imageOpacity?: number
  /** Optional position override for the image. Defaults to "center". */
  position?: string
}

const toneOverlay: Record<NonNullable<BlurredBackdropProps["tone"]>, string> = {
  "warm-white":
    "linear-gradient(180deg, rgba(252,250,244,0.92) 0%, rgba(252,250,244,0.85) 60%, rgba(252,250,244,0.95) 100%)",
  cream:
    "linear-gradient(180deg, rgba(244,239,226,0.94) 0%, rgba(244,239,226,0.88) 60%, rgba(244,239,226,0.96) 100%)",
  dark:
    "linear-gradient(180deg, rgba(13,11,62,0.82) 0%, rgba(13,11,62,0.74) 60%, rgba(13,11,62,0.88) 100%)",
}

/**
 * Subtle blurred photographic backdrop for sections that have cards in front.
 * The cards' frosted glass treatment pops against the photographic texture,
 * and the heavy surface-tone wash keeps content readable.
 */
export default function BlurredBackdrop({
  src,
  tone = "warm-white",
  imageOpacity = 0.55,
  position = "center",
}: BlurredBackdropProps) {
  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0" style={{ opacity: imageOpacity }}>
        <Image
          src={src}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          style={{
            objectPosition: position,
            filter: "blur(48px) saturate(120%)",
            transform: "scale(1.1)",
          }}
        />
      </div>
      <div className="absolute inset-0" style={{ background: toneOverlay[tone] }} />
    </div>
  )
}
