import Link from "next/link"
import { type ReactNode } from "react"

type ButtonVariant = "primary" | "secondary" | "lime" | "ghost"
type ButtonSize = "default" | "large"

interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  className?: string
  children: ReactNode
  onClick?: () => void
  type?: "button" | "submit"
}

const variantClasses: Record<ButtonVariant, string> = {
  // Light backgrounds: indigo fill
  primary:
    "bg-brand-indigo text-white hover:bg-brand-deep-space hover:-translate-y-px active:scale-[0.97] shadow-sm hover:shadow-md",
  // Light backgrounds: indigo outline
  secondary:
    "bg-transparent border-2 border-brand-indigo text-brand-indigo hover:bg-brand-indigo/[0.06] active:scale-[0.97]",
  // Dark backgrounds: lime fill (primary action on dark)
  lime:
    "bg-accent-lime text-brand-deep-space hover:brightness-110 hover:-translate-y-px active:scale-[0.97] shadow-sm hover:shadow-md",
  // Dark backgrounds: white outline (secondary action on dark)
  ghost:
    "bg-transparent border-2 border-white text-white hover:bg-white/10 active:scale-[0.97]",
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
  children,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center font-body font-bold text-[15px] tracking-[0.02em] rounded-md transition-all duration-150 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`
  const style = { transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }

  if (href) {
    return (
      <Link href={href} className={classes} style={style}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} style={style}>
      {children}
    </button>
  )
}
