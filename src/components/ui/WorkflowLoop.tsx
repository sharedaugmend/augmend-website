"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  "Pre-visit\nAI intake",
  "In-clinic\nVR session",
  "Clinical\nreport",
  "Provider\nconsult",
  "Billing\nreport",
  "Patient\nfollow-up",
  "Longitudinal\ninsights",
];

const VB_W = 960;
const CARD_W = 108;
const CARD_H = 60;
const CARD_R = 6;
const GAP = 14;
const TOTAL_W = steps.length * CARD_W + (steps.length - 1) * GAP;
const START_X = (VB_W - TOTAL_W) / 2;
const CARD_Y = 30;
const LOOP_BOTTOM = CARD_Y + CARD_H + 32;
const VB_H = LOOP_BOTTOM + 22;

const cardPositions = steps.map((_, i) => START_X + i * (CARD_W + GAP));

export default function WorkflowLoop({ className = "", variant = "light" }: { className?: string; variant?: "light" | "dark" }) {
  const color = variant === "dark" ? "#F5F0E8" : "#1F1C98";
  const loopR = 14;
  const midY = CARD_Y + CARD_H / 2;
  const rightEnd = cardPositions[6] + CARD_W;
  const leftStart = cardPositions[0];

  const loopPath = [
    `M ${rightEnd} ${midY}`, `H ${rightEnd + 8}`,
    `A ${loopR} ${loopR} 0 0 1 ${rightEnd + 8 + loopR} ${midY + loopR}`,
    `V ${LOOP_BOTTOM - loopR}`,
    `A ${loopR} ${loopR} 0 0 1 ${rightEnd + 8} ${LOOP_BOTTOM}`,
    `H ${leftStart - 8}`,
    `A ${loopR} ${loopR} 0 0 1 ${leftStart - 8 - loopR} ${LOOP_BOTTOM - loopR}`,
    `V ${midY + loopR}`,
    `A ${loopR} ${loopR} 0 0 1 ${leftStart - 8} ${midY}`,
    `H ${leftStart}`,
  ].join(" ");

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }} className={`w-full max-w-[960px] mx-auto ${className}`}>
      <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="w-full h-auto" role="img" aria-label="Seven-step clinical workflow loop">
        <defs>
          <marker id="wf-arr" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M1 1.5L7 4L1 6.5" fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
          </marker>
          <marker id="wf-arr-dim" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M1 1.5L7 4L1 6.5" fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
          </marker>
        </defs>
        {steps.map((title, i) => {
          const x = cardPositions[i]; const lines = title.split("\n");
          return (
            <g key={i}>
              <rect x={x} y={CARD_Y} width={CARD_W} height={CARD_H} rx={CARD_R} fill="none" stroke={color} strokeWidth="1.6" />
              <text x={x + CARD_W / 2} y={midY - (lines.length - 1) * 7} textAnchor="middle" dominantBaseline="central" fill={color} fontSize="12" fontFamily="'Atkinson Hyperlegible', system-ui, sans-serif" fontWeight="700">
                {lines.map((line, li) => <tspan key={li} x={x + CARD_W / 2} dy={li === 0 ? 0 : 15}>{line}</tspan>)}
              </text>
            </g>
          );
        })}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line key={i} x1={cardPositions[i] + CARD_W + 2} y1={midY} x2={cardPositions[i + 1] - 2} y2={midY} stroke={color} strokeWidth="1.3" markerEnd="url(#wf-arr)" />
        ))}
        <path d={loopPath} fill="none" stroke={color} strokeWidth="1.3" opacity="0.5" markerEnd="url(#wf-arr)" />
      </svg>
    </motion.div>
  );
}
