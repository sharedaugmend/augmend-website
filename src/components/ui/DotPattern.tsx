import Image from "next/image"

type PatternVariant = "cream" | "white" | "dark"

interface DotPatternProps {
  variant?: PatternVariant
  className?: string
}

const sources: Record<PatternVariant, string> = {
  cream: "/images/illustrations/dots-cream-background.png",
  white: "/images/illustrations/dots-indigo-background.png",
  dark: "/images/illustrations/dots-deepspace-background.png",
}

const opacities: Record<PatternVariant, string> = {
  cream: "opacity-[0.15]",
  white: "opacity-[0.10]",
  dark: "opacity-[0.20]",
}

export default function DotPattern({ variant = "cream", className = "" }: DotPatternProps) {
  return (
    <Image
      src={sources[variant]}
      alt=""
      fill
      className={`absolute inset-0 object-cover z-0 pointer-events-none ${opacities[variant]} ${className}`}
      aria-hidden
      priority={false}
    />
  )
}
