export const smoothEase = [0.23, 1, 0.32, 1] as const

export const staggerParent = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

export const staggerChild = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: smoothEase },
  },
}

export const viewportOnce = { once: true, amount: "some" } as const
