import Link from "next/link"
import { type ReactNode } from "react"

type ButtonVariant = "primary" | "secondary" | "ghost"
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
  primary:
    "bg-brand-indigo text-white hover:bg-brand-soft-indigo",
  secondary:
    "bg-transparent border-[1.5px] border-brand-indigo text-brand-indigo hover:bg-brand-indigo hover:text-white",
  ghost:
    "bg-transparent border-[1.5px] border-white text-white hover:bg-white hover:text-brand-indigo",
}

const sizeClasses: Record<ButtonSize, string> = {
  default: "h-12 px-8",
  large: "h-14 px-10",
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
  const classes = `inline-flex items-center justify-center font-body font-bold text-[15px] tracking-[0.02em] rounded-lg transition-colors duration-200 ease-out ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
