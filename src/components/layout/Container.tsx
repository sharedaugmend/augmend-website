import { type ReactNode } from "react"

interface ContainerProps {
  className?: string
  children: ReactNode
}

export default function Container({ className = "", children }: ContainerProps) {
  return (
    <div className={`mx-auto max-w-[1280px] px-6 ${className}`}>
      {children}
    </div>
  )
}
