"use client";

import { useRef, useEffect } from "react";

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

interface Point {
  baseDistance: number;
  angle: number;
  phaseOffset: number;
  pulsePeriod: number;
  oscillationAmp: number;
  size: number;
  colorIndex: number;
  opacity: number;
}

const POINT_COUNT = 6000;
const PADDING = 30;

const COLORS_RGB = [
  { r: 13, g: 11, b: 62 },   // Deep Space #0D0B3E
  { r: 31, g: 28, b: 152 },  // Brand Indigo #1F1C98
] as const;

export default function PointCloudCluster({
  className = "",
}: {
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rand = seededRandom(42);

    // Box-Muller transform for Gaussian distribution
    function gaussianRand(): number {
      const u1 = rand();
      const u2 = rand();
      return (
        Math.sqrt(-2 * Math.log(u1 || 0.0001)) *
        Math.cos(2 * Math.PI * u2)
      );
    }

    // Initialize points with normalized distances (0-1 range relative to maxRadius)
    const points: Point[] = [];
    for (let i = 0; i < POINT_COUNT; i++) {
      // Gaussian distribution with stddev ~0.30 of maxRadius
      // Using absolute value gives half-normal concentrated at center
      const rawDist = Math.abs(gaussianRand() * 0.30);
      // Clamp to 1.0 (will be scaled to maxRadius at render time)
      const baseDistance = Math.min(rawDist, 1.0);

      const angle = rand() * Math.PI * 2;
      const phaseOffset = rand() * Math.PI * 2;

      // Pulse period: 4-6 seconds
      const pulsePeriod = 4000 + rand() * 2000;

      // Oscillation amplitude: 10-15% of base distance (normalized)
      const oscillationAmp = baseDistance * (0.10 + rand() * 0.05);

      // Tiny point sizes: 0.5-2px
      const size = 0.5 + rand() * 1.5;

      // Color distribution: ~50/50
      const colorIndex = rand() < 0.5 ? 0 : 1;

      // Opacity: 0.2-0.8
      const opacity = 0.2 + rand() * 0.6;

      points.push({
        baseDistance,
        angle,
        phaseOffset,
        pulsePeriod,
        oscillationAmp,
        size,
        colorIndex,
        opacity,
      });
    }

    // Sort by color index then by opacity for batched drawing
    points.sort((a, b) => {
      if (a.colorIndex !== b.colorIndex) return a.colorIndex - b.colorIndex;
      // Group similar opacities together to reuse fillStyle
      return Math.round(a.opacity * 10) - Math.round(b.opacity * 10);
    });

    // Pre-compute color+opacity group boundaries for minimal fillStyle changes
    interface DrawGroup {
      start: number;
      end: number;
      colorIndex: number;
      opacity: number;
      fillStyle: string;
    }

    const drawGroups: DrawGroup[] = [];
    let groupStart = 0;
    let currentColorIdx = points[0].colorIndex;
    let currentOpacityBucket = Math.round(points[0].opacity * 10);

    for (let i = 1; i <= points.length; i++) {
      const isEnd = i === points.length;
      const newColor = !isEnd && points[i].colorIndex !== currentColorIdx;
      const newOpacity =
        !isEnd && Math.round(points[i].opacity * 10) !== currentOpacityBucket;

      if (isEnd || newColor || newOpacity) {
        const { r, g, b } = COLORS_RGB[currentColorIdx];
        const avgOpacity = currentOpacityBucket / 10;
        drawGroups.push({
          start: groupStart,
          end: i,
          colorIndex: currentColorIdx,
          opacity: avgOpacity,
          fillStyle: `rgba(${r},${g},${b},${avgOpacity})`,
        });
        if (!isEnd) {
          groupStart = i;
          currentColorIdx = points[i].colorIndex;
          currentOpacityBucket = Math.round(points[i].opacity * 10);
        }
      }
    }

    let width = 0;
    let height = 0;
    let dpr = 1;

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
    }

    resize();

    const observer = new ResizeObserver(() => {
      resize();
    });
    observer.observe(canvas);

    let animationId: number;

    function draw(timestamp: number) {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = (width * dpr) / 2;
      const cy = (height * dpr) / 2;

      // maxRadius: the cloud must fit within this, with PADDING px breathing room
      const maxRadius =
        (Math.min(width, height) / 2 - PADDING) * dpr;

      // Draw batched by color+opacity group to minimize fillStyle changes
      for (const group of drawGroups) {
        ctx.fillStyle = group.fillStyle;

        for (let i = group.start; i < group.end; i++) {
          const p = points[i];

          // Radial pulsing: oscillate along the radial line from center
          const pulsePhase =
            ((timestamp % p.pulsePeriod) / p.pulsePeriod) * Math.PI * 2 +
            p.phaseOffset;
          const radialOffset = Math.sin(pulsePhase) * p.oscillationAmp;
          let currentDist = p.baseDistance + radialOffset;

          // Clamp so no point exceeds maxRadius
          if (currentDist < 0) currentDist = 0;
          if (currentDist > 1.0) currentDist = 1.0;

          const pixelDist = currentDist * maxRadius;

          const x = cx + Math.cos(p.angle) * pixelDist;
          const y = cy + Math.sin(p.angle) * pixelDist;

          const r = p.size * dpr;

          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationId = requestAnimationFrame(draw);
    }

    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}
