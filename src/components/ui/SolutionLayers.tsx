"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

const BRAND_INDIGO = "#1F1C98";
const DEEP_SPACE = "#0D0B3E";
const CREAM = "#F5F0E8";
const SOFT_INDIGO = "#433D81";

const ISO_SCALE = 150;
const ISO_SKEW_X = 1.0;
const ISO_SKEW_Y = 0.5;

interface Dot { cx: number; cy: number; r: number }

function seededRandom(seed: number) {
  let s = seed;
  return () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
}

function toIso(gx: number, gy: number, cx: number, cy: number) {
  return { x: cx + (gx - gy) * ISO_SCALE * ISO_SKEW_X, y: cy + (gx + gy) * ISO_SCALE * ISO_SKEW_Y };
}

function getOffset(cx: number, cy: number) {
  const top = toIso(0, 0, cx, cy); const right = toIso(1, 0, cx, cy);
  const bottom = toIso(1, 1, cx, cy); const left = toIso(0, 1, cx, cy);
  return { dx: -(right.x + left.x) / 2 + cx, dy: -(top.y + bottom.y) / 2 + cy };
}

function diamondPath(cx: number, cy: number, inset = 0): string {
  const s = 1 - inset;
  const pts = [toIso(0, 0, cx, cy), toIso(s, 0, cx, cy), toIso(s, s, cx, cy), toIso(0, s, cx, cy)];
  const { dx, dy } = getOffset(cx, cy);
  return `M ${pts[0].x + dx} ${pts[0].y + dy} L ${pts[1].x + dx} ${pts[1].y + dy} L ${pts[2].x + dx} ${pts[2].y + dy} L ${pts[3].x + dx} ${pts[3].y + dy} Z`;
}

function diamondRightPt(cx: number, cy: number) {
  const right = toIso(1, 0, cx, cy); const { dx, dy } = getOffset(cx, cy);
  return { x: right.x + dx, y: right.y + dy };
}

function generateDots(cx: number, cy: number, density: number, gridSize: number, dotRadius: number, seed: number): Dot[] {
  const dots: Dot[] = []; const rng = seededRandom(seed); const { dx, dy } = getOffset(cx, cy);
  const step = 1 / gridSize; const pad = step * 0.5;
  for (let i = 0; i < gridSize; i++) for (let j = 0; j < gridSize; j++) {
    if (rng() > density) continue;
    const { x, y } = toIso(pad + i * step, pad + j * step, cx, cy);
    dots.push({ cx: x + dx, cy: y + dy, r: dotRadius + rng() * (dotRadius * 0.2) });
  }
  return dots;
}

function generateDrips(fromDots: Dot[], toY: number, fraction: number, seed: number) {
  const lines: { x: number; y1: number; y2: number }[] = []; const rng = seededRandom(seed);
  for (const dot of fromDots) { if (rng() > fraction) continue; lines.push({ x: dot.cx + (rng() - 0.5) * 3, y1: dot.cy + 6, y2: toY - 20 + rng() * 35 }); }
  return lines;
}

function Layer({ dots, outlinePath, depth, delay }: { dots: Dot[]; outlinePath: string; depth: number; delay: number }) {
  const slabHeight = [10, 18, 28][depth];
  const fillBg = depth === 2 ? BRAND_INDIGO : CREAM;
  const fillBgOp = [0.015, 0.04, 0.1][depth];
  const sideOp = [0.06, 0.14, 0.28][depth];
  const dotOp = [0.55, 0.75, 0.92][depth];
  const strokeOp = [0.2, 0.35, 0.55][depth];
  const coords = outlinePath.replace(/[MLZ]/g, "").trim().split(/\s+/).map(Number);
  const [, , rX, rY, bX, bY, lX, lY] = coords;
  const rightFace = `M ${rX} ${rY} L ${bX} ${bY} L ${bX} ${bY + slabHeight} L ${rX} ${rY + slabHeight} Z`;
  const leftFace = `M ${bX} ${bY} L ${lX} ${lY} L ${lX} ${lY + slabHeight} L ${bX} ${bY + slabHeight} Z`;

  return (
    <motion.g initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay, ease: "easeOut" }}>
      <path d={outlinePath} fill={DEEP_SPACE} fillOpacity={sideOp * 0.4} transform={`translate(0, ${slabHeight})`} />
      <path d={rightFace} fill={BRAND_INDIGO} fillOpacity={sideOp} />
      <path d={leftFace} fill={BRAND_INDIGO} fillOpacity={sideOp * 0.7} />
      <path d={outlinePath} fill={fillBg} fillOpacity={fillBgOp} stroke={BRAND_INDIGO} strokeWidth={1.2} strokeOpacity={strokeOp} />
      {dots.map((d, i) => <circle key={i} cx={d.cx} cy={d.cy} r={d.r} fill={BRAND_INDIGO} fillOpacity={dotOp} />)}
    </motion.g>
  );
}

function LabelWithLeader({ anchorX, anchorY, labelX, labelY, title, subtitle, delay }: { anchorX: number; anchorY: number; labelX: number; labelY: number; title: string; subtitle: string; delay: number }) {
  return (
    <motion.g initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: delay + 0.15 }}>
      <line x1={anchorX + 4} y1={anchorY} x2={labelX - 10} y2={labelY + 4} stroke={BRAND_INDIGO} strokeWidth={0.8} strokeOpacity={0.18} strokeDasharray="3 2.5" />
      <circle cx={anchorX + 4} cy={anchorY} r={2.2} fill={BRAND_INDIGO} fillOpacity={0.25} />
      <text x={labelX} y={labelY} textAnchor="start" fontFamily="'Atkinson Hyperlegible', system-ui, sans-serif" fontWeight={700} fontSize={14} fill={DEEP_SPACE}>{title}</text>
      <text x={labelX} y={labelY + 19} textAnchor="start" fontFamily="'Atkinson Hyperlegible', system-ui, sans-serif" fontWeight={400} fontSize={12.5} fill={SOFT_INDIGO}>
        {subtitle.split("\n").map((line, i) => <tspan key={i} x={labelX} dy={i === 0 ? 0 : 16}>{line}</tspan>)}
      </text>
    </motion.g>
  );
}

export default function SolutionLayers({ className = "" }: { className?: string }) {
  const viewW = 720; const viewH = 700;
  const layerCx = 215; const layer1Cy = 125; const layer2Cy = 335; const layer3Cy = 545;
  const labelX = 415;

  const data = useMemo(() => {
    const l1 = generateDots(layerCx, layer1Cy, 0.12, 16, 2.6, 42);
    const l2 = generateDots(layerCx, layer2Cy, 0.5, 22, 2.4, 137);
    const l3 = generateDots(layerCx, layer3Cy, 0.92, 28, 2.6, 891);
    const d1 = generateDrips(l1, layer2Cy - 60, 0.3, 55);
    const d2 = generateDrips(l2, layer3Cy - 60, 0.18, 77);
    return { l1, l2, l3, d1, d2 };
  }, []);

  const path1 = diamondPath(layerCx, layer1Cy);
  const path2 = diamondPath(layerCx, layer2Cy);
  const path3 = diamondPath(layerCx, layer3Cy);
  const r1 = diamondRightPt(layerCx, layer1Cy);
  const r2 = diamondRightPt(layerCx, layer2Cy);
  const r3 = diamondRightPt(layerCx, layer3Cy);

  return (
    <div className={`w-full flex justify-center ${className}`} aria-label="Three layers of clinical data capture">
      <svg viewBox={`0 0 ${viewW} ${viewH}`} className="w-full h-auto" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}>
          {data.d1.map((d, i) => <line key={`d1-${i}`} x1={d.x} y1={d.y1} x2={d.x} y2={d.y2} stroke={BRAND_INDIGO} strokeWidth={0.6} strokeOpacity={0.1} />)}
          {data.d2.map((d, i) => <line key={`d2-${i}`} x1={d.x} y1={d.y1} x2={d.x} y2={d.y2} stroke={BRAND_INDIGO} strokeWidth={0.6} strokeOpacity={0.08} />)}
        </motion.g>
        <Layer dots={data.l3} outlinePath={path3} depth={2} delay={0.5} />
        <Layer dots={data.l2} outlinePath={path2} depth={1} delay={0.25} />
        <Layer dots={data.l1} outlinePath={path1} depth={0} delay={0} />
        <LabelWithLeader anchorX={r1.x} anchorY={r1.y} labelX={labelX} labelY={layer1Cy - 6} title="Standard data collection methods" subtitle="Surface-level data points." delay={0} />
        <LabelWithLeader anchorX={r2.x} anchorY={r2.y} labelX={labelX} labelY={layer2Cy - 6} title="AugMend's data collection platform" subtitle={"Structured biopsychosocial\ninsights from every session."} delay={0.25} />
        <LabelWithLeader anchorX={r3.x} anchorY={r3.y} labelX={labelX} labelY={layer3Cy - 6} title="AugMend + the care team" subtitle={"Full clinical picture.\nRich, compounding understanding."} delay={0.5} />
      </svg>
    </div>
  );
}
