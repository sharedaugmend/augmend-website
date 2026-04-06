import Link from "next/link"
import Image from "next/image"
import { footerColumns, legalLinks } from "@/data/navigation"
import Button from "@/components/ui/Button"

export default function Footer() {
  return (
    <footer className="bg-brand-deep-space text-white">
      <div className="mx-auto max-w-[1280px] px-6 py-16 md:py-20">
        {/* Top section */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Logo + tagline */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Image
                src="/images/logos/250507_JustLogo_Main-V2.png"
                alt="AugMend Health logo"
                width={32}
                height={32}
                className="brightness-0 invert"
              />
              <span className="font-display font-semibold text-xl tracking-tight text-white">
                AugMend Health
              </span>
            </Link>
            <p className="mt-3 font-body text-[15px] leading-relaxed text-white/70">
              Clinical data infrastructure for specialty care.
            </p>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-5 grid grid-cols-3 gap-8">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h4 className="font-body font-bold text-sm uppercase tracking-[0.05em] text-white/50 mb-4">
                  {column.title}
                </h4>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="font-body text-[15px] text-white/70 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact + CTA */}
          <div className="lg:col-span-3">
            <a
              href="mailto:info@augmend.health"
              className="font-body text-[15px] text-white/70 hover:text-white transition-colors duration-200"
            >
              info@augmend.health
            </a>
            <div className="mt-4">
              <Button variant="ghost" href="/contact" className="!h-10 !px-6 !text-sm">
                Schedule a Conversation
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.12] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-white/50">
            &copy; 2026 AugMend Health, Inc.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm text-white/50 hover:text-white/70 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
