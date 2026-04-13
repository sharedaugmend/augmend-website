"use client";

import React from "react";
import { motion } from "framer-motion";

const BRAND_INDIGO = "#1F1C98";
const SOFT_INDIGO = "#433D81";
const CREAM = "#F5F0E8";

const VB_W = 960;
const VB_H = 260;
const PILL_H = 36;
const PILL_R = 18;
const ROW_Y = 40;

interface Stage { label: string; sub: string; x: number; w: number }

const stages: Stage[] = [
  { label: "Patient session", sub: "VR / Tablet / Phone", x: 48, w: 158 },
  { label: "Structured data", sub: "AI processing", x: 252, w: 148 },
  { label: "Clinical + billing reports", sub: "Portal / EHR", x: 446, w: 220 },
  { label: "Longitudinal record", sub: "Compounds over time", x: 712, w: 180 },
];

const STEP_Y = 155;
interface WhoStep { label: string; cx: number }
const whoSteps: WhoStep[] = [
  { label: "Staff hands off headset", cx: 210 },
  { label: "Patient self-guides", cx: 480 },
  { label: "Compounding insights", cx: 750 },
];

function HeadsetIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      <rect x={cx - 12} y={cy - 6} width={24} height={13} rx={6} fill="none" stroke={CREAM} strokeWidth="1.4" />
      <circle cx={cx - 5} cy={cy + 1} r={3.2} fill="none" stroke={CREAM} strokeWidth="1" />
      <circle cx={cx + 5} cy={cy + 1} r={3.2} fill="none" stroke={CREAM} strokeWidth="1" />
      <path d={`M ${cx - 12} ${cy - 3} C ${cx - 12} ${cy - 9} ${cx - 6} ${cy - 13} ${cx} ${cy - 13} C ${cx + 6} ${cy - 13} ${cx + 12} ${cy - 9} ${cx + 12} ${cy - 3}`} fill="none" stroke={CREAM} strokeWidth="1.2" />
    </g>
  );
}

function PatientIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy - 8} r={4.5} fill="none" stroke={CREAM} strokeWidth="1.3" />
      <path d={`M ${cx - 8} ${cy + 7} C ${cx - 8} ${cy} ${cx - 5} ${cy - 2} ${cx} ${cy - 2} C ${cx + 5} ${cy - 2} ${cx + 8} ${cy} ${cx + 8} ${cy + 7}`} fill="none" stroke={CREAM} strokeWidth="1.3" />
    </g>
  );
}

function InsightsIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      <rect x={cx - 10} y={cy + 1} width={5} height={8} rx={1} fill={CREAM} fillOpacity={0.5} />
      <rect x={cx - 3} y={cy - 4} width={5} height={13} rx={1} fill={CREAM} fillOpacity={0.7} />
      <rect x={cx + 4} y={cy - 10} width={5} height={19} rx={1} fill={CREAM} fillOpacity={0.9} />
    </g>
  );
}

export default function HowItWorksFlow({ className = "" }: { className?: string }) {
  const loopR = 16;
  const loopBottom = ROW_Y + 56;
  const rightEdge = stages[3].x + stages[3].w;
  const leftEdge = stages[0].x;
  const rX = rightEdge + 12;
  const lX = leftEdge - 12;

  const loopPath = [
    `M ${rightEdge + 6} ${ROW_Y}`, `H ${rX}`,
    `A ${loopR} ${loopR} 0 0 1 ${rX + loopR} ${ROW_Y + loopR}`,
    `V ${loopBottom - loopR}`,
    `A ${loopR} ${loopR} 0 0 1 ${rX} ${loopBottom}`,
    `H ${lX}`,
    `A ${loopR} ${loopR} 0 0 1 ${lX - loopR} ${loopBottom - loopR}`,
    `V ${ROW_Y + loopR}`,
    `A ${loopR} ${loopR} 0 0 1 ${lX} ${ROW_Y}`,
    `H ${leftEdge - 6}`,
  ].join(" ");

  const iconComponents = [HeadsetIcon, PatientIcon, InsightsIcon];

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, ease: "easeOut" }} className={`w-full max-w-[960px] mx-auto px-4 ${className}`}>
      <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="w-full h-auto" role="img" aria-label="How AugMend works: a continuous data cycle">
        <defs>
          <marker id="hw-arr" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M1 1.5L7 4L1 6.5" fill="none" stroke={CREAM} strokeWidth="1.2" strokeLinecap="round" />
          </marker>
          <marker id="hw-arr-dim" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M1 1.5L7 4L1 6.5" fill="none" stroke={CREAM} strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
          </marker>
        </defs>

        {stages.map((s, i) => {
          const cx = s.x + s.w / 2;
          return (
            <g key={`pill-${i}`}>
              <rect x={s.x} y={ROW_Y - PILL_H / 2} width={s.w} height={PILL_H} rx={PILL_R} fill={SOFT_INDIGO} />
              <text x={cx} y={ROW_Y + 1} textAnchor="middle" dominantBaseline="central" fill={CREAM} fontSize="13" fontFamily="'Atkinson Hyperlegible', system-ui, sans-serif" fontWeight="700">{s.label}</text>
              <text x={cx} y={ROW_Y + PILL_H / 2 + 15} textAnchor="middle" fill={CREAM} opacity="0.5" fontSize="10.5" fontFamily="'Atkinson Hyperlegible', system-ui, sans-serif">{s.sub}</text>
            </g>
          );
        })}

        {[0, 1, 2].map((i) => (
          <line key={`fa-${i}`} x1={stages[i].x + stages[i].w + 5} y1={ROW_Y} x2={stages[i + 1].x - 5} y2={ROW_Y} stroke={CREAM} strokeWidth="1.2" markerEnd="url(#hw-arr)" />
        ))}

        <path d={loopPath} fill="none" stroke={CREAM} strokeWidth="1.2" opacity="0.5" markerEnd="url(#hw-arr)" />

        <line x1={120} y1={122} x2={840} y2={122} stroke={CREAM} strokeWidth="0.5" opacity="0.12" />

        {whoSteps.map((step, i) => {
          const Icon = iconComponents[i];
          return (
            <g key={`who-${i}`}>
              <Icon cx={step.cx} cy={STEP_Y - 2} />
              <text x={step.cx} y={STEP_Y + 22} textAnchor="middle" fill={CREAM} fontSize="12" fontFamily="'Atkinson Hyperlegible', system-ui, sans-serif" fontWeight="600" opacity="0.85">{step.label}</text>
            </g>
          );
        })}

        {[0, 1].map((i) => (
          <line key={`wa-${i}`} x1={whoSteps[i].cx + 80} y1={STEP_Y + 2} x2={whoSteps[i + 1].cx - 80} y2={STEP_Y + 2} stroke={CREAM} strokeWidth="1" opacity="0.4" markerEnd="url(#hw-arr-dim)" />
        ))}

        <text x={VB_W / 2} y={232} textAnchor="middle" fill={CREAM} opacity="0.8" fontSize="17" fontFamily="'Source Serif 4', Georgia, serif" fontStyle="italic" fontWeight="600">
          Intake. Progress. Outcomes. Exit. Not a single snapshot, a continuous clinical relationship.
        </text>
      </svg>
    </motion.div>
  );
}
