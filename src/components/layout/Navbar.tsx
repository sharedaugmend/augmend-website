"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { mainNav, type NavItem } from "@/data/navigation"
import Button from "@/components/ui/Button"

function DesktopDropdown({
  item,
  isTransparent,
  pathname,
}: {
  item: NavItem
  isTransparent: boolean
  pathname: string
}) {
  const [open, setOpen] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  function handleEnter() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpen(true)
  }

  function handleLeave() {
    timeoutRef.current = setTimeout(() => setOpen(false), 150)
  }

  // Check if any child link is active
  const isActive = item.dropdown?.some((group) =>
    group.links.some((link) => pathname.startsWith(link.href))
  )

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        aria-expanded={open}
        aria-haspopup="menu"
        className={`flex items-center gap-1 font-body font-bold text-[15px] tracking-[0.01em] transition-colors duration-200 ${
          isTransparent
            ? "text-white/90 hover:text-white"
            : "text-neutral-near-black hover:text-brand-indigo"
        } ${
          isActive
            ? "after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-current"
            : ""
        }`}
      >
        {item.label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          strokeWidth={2}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
          >
            <div className="min-w-[220px] rounded-xl border border-neutral-border bg-surface-white p-2 shadow-md">
              {item.dropdown!.map((group, gi) => (
                <div key={gi}>
                  {group.heading && (
                    <p className="px-3 pt-3 pb-1 font-body font-bold text-xs uppercase tracking-[0.05em] text-neutral-slate">
                      {group.heading}
                    </p>
                  )}
                  {gi > 0 && !group.heading && (
                    <div className="my-1 border-t border-neutral-border" />
                  )}
                  {group.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-lg px-3 py-2 font-body text-[15px] transition-colors duration-150 ${
                        pathname === link.href || pathname.startsWith(link.href + "/")
                          ? "bg-surface-cream text-brand-indigo font-bold"
                          : "text-neutral-near-black hover:bg-surface-cream"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function MobileNavItem({
  item,
  pathname,
  onNavigate,
}: {
  item: NavItem
  pathname: string
  onNavigate: () => void
}) {
  const [expanded, setExpanded] = useState(false)

  if (!item.dropdown) {
    return (
      <Link
        href={item.href}
        className="block py-3 font-body font-bold text-lg text-neutral-near-black"
        onClick={onNavigate}
      >
        {item.label}
      </Link>
    )
  }

  return (
    <div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-between py-3"
      >
        <span className="font-body font-bold text-lg text-neutral-near-black">
          {item.label}
        </span>
        <motion.span
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-5 w-5 text-neutral-slate" strokeWidth={1.5} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="ml-4 pb-2">
              {item.dropdown.map((group, gi) => (
                <div key={gi}>
                  {group.heading && (
                    <p className="pt-2 pb-1 font-body font-bold text-xs uppercase tracking-[0.05em] text-neutral-slate">
                      {group.heading}
                    </p>
                  )}
                  {group.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block py-2 font-body text-[15px] ${
                        pathname === link.href
                          ? "text-brand-indigo font-bold"
                          : "text-neutral-slate"
                      }`}
                      onClick={onNavigate}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const isTransparent = isHome && !scrolled && !mobileOpen

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
          isTransparent
            ? "bg-transparent"
            : "bg-surface-warm-white/90 backdrop-blur-lg border-b border-neutral-border"
        }`}
      >
        <nav className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image
              src="/images/logos/250507_JustLogo_Main-V2.png"
              alt="AugMend Health logo"
              width={32}
              height={32}
              className={`transition-all duration-300 ${isTransparent ? "brightness-0 invert" : ""}`}
            />
            <span
              className={`font-display font-semibold text-xl tracking-tight transition-colors duration-300 ${
                isTransparent ? "text-white" : "text-brand-indigo"
              }`}
            >
              AugMend Health
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {mainNav.map((item) =>
              item.dropdown ? (
                <DesktopDropdown
                  key={item.label}
                  item={item}
                  isTransparent={isTransparent}
                  pathname={pathname}
                />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative font-body font-bold text-[15px] tracking-[0.01em] transition-colors duration-200 ${
                    isTransparent
                      ? "text-white/90 hover:text-white"
                      : "text-neutral-near-black hover:text-brand-indigo"
                  } ${
                    pathname.startsWith(item.href)
                      ? "after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-current"
                      : ""
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button
              variant="lime"
              href="/contact"
              className="!h-10 !px-6 !text-sm"
            >
              Schedule a Conversation
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X
                className={`h-6 w-6 ${isTransparent ? "text-white" : "text-neutral-near-black"}`}
                strokeWidth={1.5}
              />
            ) : (
              <Menu
                className={`h-6 w-6 ${isTransparent ? "text-white" : "text-neutral-near-black"}`}
                strokeWidth={1.5}
              />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 top-16 z-40 bg-surface-warm-white overflow-y-auto"
          >
            <div className="flex flex-col gap-1 p-6">
              {mainNav.map((item) => (
                <MobileNavItem
                  key={item.label}
                  item={item}
                  pathname={pathname}
                  onNavigate={() => setMobileOpen(false)}
                />
              ))}
              <div className="mt-4 pt-4 border-t border-neutral-border">
                <Button variant="primary" href="/contact" className="w-full">
                  Schedule a Conversation
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
