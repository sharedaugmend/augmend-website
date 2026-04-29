import Link from "next/link"
import { type ReactNode, type CSSProperties } from "react"

type ButtonVariant =
  | "primary" // indigo fill, white text — universal primary CTA
  | "secondary" // indigo outline, indigo text on light backgrounds
  | "lime" // lime accent — used sparingly on body sections, never on heros
  | "ghost" // transparent + white border — only on dark sections
  | "frosted" // white border + frosted glass fill, white text — use on dark heros
  | "frosted-light" // indigo border + frosted glass fill — use on light heros

type ButtonSize = "default" | "large"

interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  className?: string
  style?: CSSProperties
  children: ReactNode
  onClick?: () => void
  type?: "button" | "submit"
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-indigo text-white hover:bg-brand-deep-space hover:-translate-y-px active:scale-[0.97] shadow-sm hover:shadow-md",
  secondary:
    "bg-transparent border-2 border-brand-indigo text-brand-indigo hover:bg-brand-indigo/[0.06] active:scale-[0.97]",
  lime:
    "bg-accent-lime text-brand-deep-space hover:brightness-110 hover:-translate-y-px active:scale-[0.97] shadow-sm hover:shadow-md",
  ghost:
    "bg-transparent border-2 border-white text-white hover:bg-white/10 active:scale-[0.97]",
  frosted:
    "text-white border-2 border-white/70 hover:border-white hover:-translate-y-px active:scale-[0.97]",
  "frosted-light":
    "text-brand-indigo border-2 border-brand-indigo/50 hover:border-brand-indigo hover:-translate-y-px active:scale-[0.97]",
}

// Frosted variants need backdrop-filter, applied via inline style so it works
// reliably even when Tailwind's arbitrary-value engine isn't loaded yet.
const variantStyle: Partial<Record<ButtonVariant, CSSProperties>> = {
  frosted: {
    background: "rgba(255, 255, 255, 0.12)",
    backdropFilter: "blur(14px) saturate(120%)",
    WebkitBackdropFilter: "blur(14px) saturate(120%)",
  },
  "frosted-light": {
    background: "rgba(255, 255, 255, 0.55)",
    backdropFilter: "blur(14px) saturate(120%)",
    WebkitBackdropFilter: "blur(14px) saturate(120%)",
  },
}

const sizeClasses: Record<ButtonSize, string> = {
  default: "h-12 px-7",
  large: "h-14 px-10 text-base",
}

export default function Button({
  variant = "primary",
  size = "default",
  href,
  className = "",
  style,
  children,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center font-body font-bold text-[15px] tracking-[0.02em] rounded-md transition-all duration-150 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`
  const mergedStyle: CSSProperties = {
    transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
    ...variantStyle[variant],
    ...style,
  }

  if (href) {
    return (
      <Link href={href} className={classes} style={mergedStyle}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} style={mergedStyle}>
      {children}
    </button>
  )
}
