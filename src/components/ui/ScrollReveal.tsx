"use client"

import { motion } from "framer-motion"
import { type ReactNode } from "react"

const smoothEase = [0.25, 0.1, 0.25, 1] as const

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: smoothEase, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
