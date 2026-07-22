'use client'

import { useEffect, useRef } from 'react'

const SYMPTOMS = [
  "my head feels heavy, a constant dull ache that radiates to my eyes",
  "vision is blurry, lights have halos",
  "extreme fatigue, muscles weak, can barely move",
  "chest tight, short of breath, heart racing",
  "my hands tingle when i wake up",
  "the fatigue never fully goes away",
  "i feel disconnected from myself",
  "pain that moves and is hard to describe",
  "dizzy when i stand up too fast",
  "my thoughts feel foggy most days",
  "more anxious than i used to be",
  "sharp pains that come and go",
  "can't concentrate like i used to",
  "joints ache especially in the morning",
  "nauseous but i can't explain why",
  "my mood shifts without warning",
  "exhausted but i can't sleep",
  "numbness spreading into my feet",
  "pressure that builds behind my eyes",
  "my chest feels tight sometimes",
  "i lose track of what i was saying",
  "cold even when others are warm",
  "heart racing for no reason",
  "my memory isn't what it was",
  "the ringing in my ears comes back",
  "i feel heavy when i try to move",
  "muscle twitches mostly at night",
  "blurry vision after reading",
  "everything feels slightly off",
  "i'm not sure how to describe it",
  "it started around six months ago",
  "waking up tired no matter how long i sleep",
  "a heaviness i carry through the day",
  "hard to stay present in conversations",
  "sensitive to sounds i used to ignore",
  "a dull ache that never fully leaves",
  "my hands don't feel like mine",
  "something shifted but i can't say when",
  "i know something isn't right",
  "the doctor said everything looks fine",
  "my appetite comes and goes",
  "a fog that sits behind my eyes",
  "i tire from things that never used to tire me",
  "my legs feel like they belong to someone else",
]

interface Dot {
  x: number
  y: number
  vx: number
  vy: number
}

interface TextLine {
  text: string
  y: number
  speed: number
  opacity: number
  textWidth: number
  offset: number
}

export default function ParticleFlow({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const animRef = useRef<number>(0)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let W = 0
    let H = 0
    let textLines: TextLine[] = []
    let dots: Dot[] = []
    let time = 0

    const FONT_SIZE = 10
    const LINE_HEIGHT = 14
    const DOT_SIZE = 1.5
    const ERASER_SIZE = 8
    const DEEP = "#0a082e"

    // Desktop density is the reference point (30k dots at 1440x900). Scaling
    // by canvas area keeps dots-per-pixel constant so mobile isn't paying for
    // desktop-scale dot counts it can't even see the benefit of, while a
    // desktop-sized canvas still yields exactly 30000 (capped, unchanged).
    const REFERENCE_DOT_COUNT = 30000
    const REFERENCE_AREA = 1440 * 900
    const computeDotCount = (w: number, h: number) =>
      Math.min(REFERENCE_DOT_COUNT, Math.round(w * h * (REFERENCE_DOT_COUNT / REFERENCE_AREA)))

    let lastWidth = 0
    let resizeDebounce: ReturnType<typeof setTimeout> | null = null

    const init = () => {
      W = canvas.offsetWidth
      H = canvas.offsetHeight
      lastWidth = W
      canvas.width = W * dpr
      canvas.height = H * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      ctx.font = `${FONT_SIZE}px "Courier New", Courier, monospace`

      textLines = []
      const lineCount = Math.ceil(H / LINE_HEIGHT) + 1
      for (let i = 0; i < lineCount; i++) {
        let line = ''
        let si = (i * 7) % SYMPTOMS.length
        while (ctx.measureText(line).width < W * 3) {
          line += SYMPTOMS[si % SYMPTOMS.length] + '   '
          si++
        }
        const textWidth = ctx.measureText(line).width
        const direction = i % 2 === 0 ? 1 : -1
        const speed = direction * (0.08 + Math.random() * 0.12)
        const opacity = 0.40 + Math.abs(Math.sin(i * 0.17)) * 0.25

        textLines.push({
          text: line, y: i * LINE_HEIGHT,
          speed, opacity, textWidth,
          offset: Math.random() * textWidth * 0.3,
        })
      }

      const DOT_COUNT = computeDotCount(W, H)
      dots = new Array(DOT_COUNT)
      for (let i = 0; i < DOT_COUNT; i++) {
        dots[i] = {
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
        }
      }
    }

    init()

    const flowAngle = (x: number, y: number): number => {
      const t = time * 0.10
      const n1 = Math.sin(x * 0.0012 + t) * Math.cos(y * 0.0010 + t * 0.7)
      const n2 = Math.sin(x * 0.0035 + t * 1.3 + 2.5) *
                 Math.cos(y * 0.0040 - t * 0.5 + 1.7)
      const n3 = Math.sin((x + y) * 0.0008 + t * 0.4) *
                 Math.cos((x - y) * 0.0012 + t * 0.3)
      return (n1 + n2 * 0.4 + n3 * 0.25) * Math.PI * 2.5
    }

    const animate = () => {
      time += 0.008
      const mouse = mouseRef.current
      const mouseActive = mouse.x > -9000

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i]
        const angle = flowAngle(dot.x, dot.y)

        dot.vx += Math.cos(angle) * 0.008
        dot.vy += Math.sin(angle) * 0.008

        dot.vx += (Math.random() - 0.5) * 0.20
        dot.vy += (Math.random() - 0.5) * 0.20

        if (mouseActive) {
          const dx = dot.x - mouse.x
          const dy = dot.y - mouse.y
          const d2 = dx * dx + dy * dy
          if (d2 < 20000) {
            const d = Math.sqrt(d2) + 1
            const f = (141 - d) / 141
            dot.vx += (dx / d) * f * 0.5
            dot.vy += (dy / d) * f * 0.5
          }
        }

        dot.vx *= 0.96
        dot.vy *= 0.96
        dot.x += dot.vx
        dot.y += dot.vy

        if (dot.x < -5) dot.x += W + 10
        else if (dot.x > W + 5) dot.x -= W + 10
        if (dot.y < -5) dot.y += H + 10
        else if (dot.y > H + 5) dot.y -= H + 10
      }

      // Step 1: Clear with deep space blue
      ctx.fillStyle = DEEP
      ctx.fillRect(0, 0, W, H)

      // Step 2: Scrolling text
      ctx.save()
      ctx.beginPath()
      ctx.rect(0, 0, W, H)
      ctx.clip()

      ctx.font = `${FONT_SIZE}px "Courier New", Courier, monospace`
      ctx.textBaseline = 'top'

      for (let i = 0; i < textLines.length; i++) {
        const line = textLines[i]
        line.offset += line.speed
        if (line.offset > line.textWidth) line.offset -= line.textWidth
        if (line.offset < 0) line.offset += line.textWidth

        ctx.fillStyle = `rgba(255,255,255,${line.opacity})`
        const x = -line.offset
        ctx.fillText(line.text, x, line.y)
        ctx.fillText(line.text, x + line.textWidth, line.y)
      }

      ctx.restore()

      // Step 2b: Diffuse text into background toward the right so the
      // doctor image on the right side has visual room to breathe.
      const diffuse = ctx.createLinearGradient(W * 0.28, 0, W * 0.68, 0)
      diffuse.addColorStop(0, "rgba(10,8,46,0)")
      diffuse.addColorStop(1, "rgba(10,8,46,1)")
      ctx.fillStyle = diffuse
      ctx.fillRect(0, 0, W, H)

      // Step 3: Deep-space erasers — each dot occludes text behind it
      ctx.fillStyle = DEEP
      const half = ERASER_SIZE / 2
      for (let i = 0; i < dots.length; i++) {
        ctx.fillRect(dots[i].x - half, dots[i].y - half, ERASER_SIZE, ERASER_SIZE)
      }

      // Step 4: Visible dots
      ctx.fillStyle = 'rgba(255,255,255,0.55)'
      for (let i = 0; i < dots.length; i++) {
        ctx.fillRect(dots[i].x, dots[i].y, DOT_SIZE, DOT_SIZE)
      }

      if (running) {
        animRef.current = requestAnimationFrame(animate)
      }
    }

    // The rAF loop only runs while the canvas is actually on screen and the
    // tab is visible — offscreen frames are invisible by definition, so
    // there is no reason to pay for 30k-dot physics + redraw for them.
    let running = false
    let isIntersecting = false
    const startLoop = () => {
      if (running) return
      running = true
      animate()
    }
    const stopLoop = () => {
      running = false
      cancelAnimationFrame(animRef.current)
    }

    // iOS Safari fires `resize` whenever the URL bar collapses/expands
    // during normal scrolling. That resize used to re-run init(), which
    // re-randomizes every dot position and rebuilds the text lines — the
    // whole field would visibly flash/reset mid-scroll. A real resize
    // (rotation, window resize, responsive breakpoint change) always
    // changes the width; a URL-bar-only event does not. So: only do the
    // full reset when the width actually changed, and debounce so rapid
    // address-bar events collapse into a single reset at most.
    const handleResize = () => {
      if (resizeDebounce) clearTimeout(resizeDebounce)
      resizeDebounce = setTimeout(() => {
        const newWidth = canvas.offsetWidth
        if (newWidth === lastWidth) {
          // Height-only change — resync the backing store so the canvas
          // doesn't stretch, but keep the existing dots/text state intact.
          H = canvas.offsetHeight
          canvas.height = H * dpr
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
          return
        }
        cancelAnimationFrame(animRef.current)
        init()
        if (running) animate()
      }, 200)
    }
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current.x = e.clientX - rect.left
      mouseRef.current.y = e.clientY - rect.top
    }
    const handleMouseLeave = () => {
      mouseRef.current.x = -9999
      mouseRef.current.y = -9999
    }

    const observer = new IntersectionObserver(
      (entries) => {
        isIntersecting = entries[0]?.isIntersecting ?? false
        if (isIntersecting && !document.hidden) {
          startLoop()
        } else {
          stopLoop()
        }
      },
      { threshold: 0 }
    )
    observer.observe(canvas)

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopLoop()
      } else if (isIntersecting) {
        startLoop()
      }
    }

    window.addEventListener('resize', handleResize)
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      stopLoop()
      if (resizeDebounce) clearTimeout(resizeDebounce)
      observer.disconnect()
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      window.removeEventListener('resize', handleResize)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ background: '#0a082e' }}
    />
  )
}
