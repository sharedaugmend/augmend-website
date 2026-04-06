export const smoothEase = [0.25, 0.1, 0.25, 1] as const

export const staggerParent = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

export const staggerChild = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: smoothEase },
  },
}

export const viewportOnce = { once: true, amount: 0.15 } as const
