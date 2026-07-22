"use client"

import Image from "next/image"
import Button from "@/components/ui/Button"
import ParticleFlow from "@/components/ui/ParticleFlow"

/**
 * Hero — exact port of the Claude design ref `Home.html` hero.
 * Space-blue gradient backdrop, 30k-dot symptoms canvas, hero-doctor image
 * masked into the gradient on the right, frosted glass content box on the left.
 */
export default function Hero() {
  return (
    <section
      className="relative overflow-hidden flex items-center"
      style={{
        minHeight: "100vh",
        paddingTop: 64,
        background:
          "linear-gradient(130deg, #070619 0%, #0c0a3e 55%, #181070 100%)",
      }}
    >
      <ParticleFlow className="absolute inset-0 w-full h-full z-0" />

      {/* Right-side doctor image, soft-masked into the gradient.
          Image is positioned to keep the physician's face roughly centered
          with the headline on the left. */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 bottom-0 pointer-events-none z-[1]"
        style={{
          width: "55%",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 14%, rgba(0,0,0,0.6) 36%, black 64%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 14%, rgba(0,0,0,0.6) 36%, black 64%)",
        }}
      >
        <Image
          src="/images/home/hero-doctor.jpg"
          alt=""
          fill
          sizes="55vw"
          priority
          className="object-cover"
          style={{
            objectPosition: "32% 22%",
            opacity: 0.78,
            mixBlendMode: "luminosity",
            filter: "hue-rotate(190deg) saturate(0.4) brightness(0.85)",
          }}
        />
      </div>

      {/* Left-aligned content. The glass box's right edge sits roughly on the
          horizontal center of the viewport so the headline can breathe. The
          width formula keeps the box comfortable across widths without
          overflowing the viewport on tablets. */}
      <div
        className="relative z-[2] py-16 md:py-20 pointer-events-none"
        style={{
          marginLeft: "max(1.5rem, calc((100vw - 1280px)/2 + 1.5rem))",
          paddingRight: "1.5rem",
          width: "min(calc(100vw - 3rem), max(440px, 52vw))",
          maxWidth: 720,
        }}
      >
        {/* Frosted glass content box. The mask-image gradient feathers the
            edges so the box dissolves into the gradient instead of sitting on
            top of it as a hard rectangle. */}
        <div
          className="rounded-3xl relative"
          style={{
            background: "rgba(7, 6, 25, 0.42)",
            backdropFilter: "blur(20px) saturate(130%)",
            WebkitBackdropFilter: "blur(20px) saturate(130%)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            boxShadow:
              "0 0 60px 30px rgba(7, 6, 25, 0.35), 0 30px 60px -20px rgba(0, 0, 0, 0.6)",
            padding: "44px 56px",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 62%, rgba(0,0,0,0.85) 82%, rgba(0,0,0,0.5) 100%)",
            maskImage:
              "radial-gradient(ellipse at center, black 62%, rgba(0,0,0,0.85) 82%, rgba(0,0,0,0.5) 100%)",
          }}
        >
          <h1
            className="font-display text-white"
            style={{
              fontSize: "clamp(36px, 4.2vw, 54px)",
              fontWeight: 600,
              lineHeight: 1.08,
              letterSpacing: "-0.025em",
            }}
          >
            Augmenting clinic capabilities. Mending the gap in{" "}
            <em className="italic" style={{ fontWeight: 500 }}>patient data.</em>
          </h1>
          <p
            className="font-body mt-5"
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: "rgba(255, 255, 255, 0.78)",
            }}
          >
            Capture the full biopsychosocial patient self-reported experience of complex chronic conditions before face-to-face visits with providers to enhance care quality, speed of care, and reimbursement compliance.
          </p>
        </div>

        <div className="relative z-[3] mt-6 flex flex-wrap gap-4 pointer-events-auto">
          <Button variant="primary" href="#contact" size="large">
            Schedule a Conversation
          </Button>
          <Button variant="frosted" href="/platform/how-it-works" size="large">
            See How It Works
          </Button>
        </div>
      </div>
    </section>
  )
}
