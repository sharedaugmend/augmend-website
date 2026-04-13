"use client"

import { useRef, useEffect } from "react"

function seededRandom(seed: number) {
  let s = seed;
  return () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
}

// Box-Muller transform for Gaussian distribution
function gaussianPair(rng: () => number): [number, number] {
  const u1 = rng()
  const u2 = rng()
  const mag = Math.sqrt(-2 * Math.log(u1 + 1e-10))
  const angle = 2 * Math.PI * u2
  return [mag * Math.cos(angle), mag * Math.sin(angle)]
}

interface Particle {
  nx: number
  ny: number
  radius: number
  opacity: number
  phase: number
  dist: number
  angle: number
}

function generateCloud(
  seed: number,
  count: number,
  spread: number,
  opacityMin: number,
  opacityMax: number,
  radiusMin: number,
  radiusMax: number,
): Particle[] {
  const rng = seededRandom(seed)
  const particles: Particle[] = []

  for (let i = 0; i < count; i++) {
    const [gx, gy] = gaussianPair(rng)
    const nx = gx * spread
    const ny = gy * spread
    const dist = Math.sqrt(nx * nx + ny * ny)
    const angle = Math.atan2(ny, nx)

    particles.push({
      nx,
      ny,
      radius: radiusMin + rng() * (radiusMax - radiusMin),
      opacity: opacityMin + rng() * (opacityMax - opacityMin),
      phase: rng() * Math.PI * 2,
      dist,
      angle,
    })
  }

  return particles
}

export default function DataCaptureGap({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const animFrameRef = useRef<number>(0)
  const blueParticlesRef = useRef<Particle[]>([])
  const greenParticlesRef = useRef<Particle[]>([])

  // Generate particles once
  if (blueParticlesRef.current.length === 0) {
    blueParticlesRef.current = generateCloud(42, 3500, 0.28, 0.2, 0.7, 0.5, 2)
  }
  if (greenParticlesRef.current.length === 0) {
    greenParticlesRef.current = generateCloud(137, 1000, 0.08, 0.4, 0.9, 0.5, 2)
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = 0
    let height = 0

    function resize() {
      if (!canvas || !container) return
      const dpr = window.devicePixelRatio || 1
      const rect = container.getBoundingClientRect()
      width = rect.width
      height = rect.width // square aspect ratio
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const observer = new ResizeObserver(() => resize())
    observer.observe(container)
    resize()

    const blueParticles = blueParticlesRef.current
    const greenParticles = greenParticlesRef.current

    function drawCloud(
      particles: Particle[],
      pulseSpeed: number,
      pulseAmount: number,
      time: number,
    ) {
      if (!ctx) return
      const cx = width / 2
      const cy = height / 2
      const scale = width

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        const pulseFactor = Math.sin(time * pulseSpeed + p.phase) * pulseAmount
        const offsetX = Math.cos(p.angle) * p.dist * pulseFactor * scale
        const offsetY = Math.sin(p.angle) * p.dist * pulseFactor * scale

        const x = cx + p.nx * scale + offsetX
        const y = cy + p.ny * scale + offsetY

        ctx.globalAlpha = p.opacity
        ctx.beginPath()
        ctx.arc(x, y, p.radius, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    function animate(timestamp: number) {
      if (!ctx) return
      const time = timestamp / 1000

      ctx.clearRect(0, 0, width, height)

      // Blue cloud (behind) — pulse cycle ~6s -> speed = 2*PI/6 ~ 1.047
      ctx.fillStyle = "#1F1C98"
      drawCloud(blueParticles, 1.047, 0.06, time)

      // Green cloud (on top) — pulse cycle ~5.2s -> speed = 2*PI/5.2 ~ 1.208
      ctx.fillStyle = "#B8D94E"
      drawCloud(greenParticles, 1.208, 0.07, time)

      ctx.globalAlpha = 1
      animFrameRef.current = requestAnimationFrame(animate)
    }

    animFrameRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animFrameRef.current)
      observer.disconnect()
    }
  }, [])

  return (
    <div ref={containerRef} className={`w-full max-w-[500px] ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full"
        role="img"
        aria-label="Data visualization showing the gap between what patients disclose and what they experience"
        style={{ background: "transparent", borderRadius: "50%" }}
      />

      {/* Labels below the canvas */}
      <div className="mt-4 space-y-3">
        <div className="flex items-start gap-3 px-3">
          <span
            className="mt-1.5 block w-2.5 h-2.5 rounded-full shrink-0"
            style={{ backgroundColor: "#B8D94E" }}
          />
          <div>
            <p className="font-body font-bold text-[12px] text-neutral-near-black">
              What patients disclose
            </p>
            <p className="font-body text-[11px] text-neutral-slate leading-snug">
              Chief complaint, vitals, medications, brief history
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 px-3">
          <span
            className="mt-1.5 block w-2.5 h-2.5 rounded-full shrink-0"
            style={{ backgroundColor: "#1F1C98" }}
          />
          <div>
            <p className="font-body font-bold text-[12px] text-neutral-near-black">
              What patients experience
            </p>
            <p className="font-body text-[11px] text-neutral-slate leading-snug">
              Everything the patient carries across biological, psychological, and social dimensions
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
