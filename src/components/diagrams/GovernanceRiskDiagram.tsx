/**
 * GovernanceRiskDiagram — Governance & Risk Framework
 *
 * Three vertical pillars side by side:
 *   1. Risk Classification (left) — four stacked risk tiers
 *   2. Policy Framework (centre) — three stacked policy items
 *   3. Operational Governance (right) — three stacked governance items
 *
 * Horizontal dependency arrows connect the pillars.
 * Bottom timeline bar shows EU AI Act regulatory milestones.
 *
 * Animated: IntersectionObserver entrance with staggered pillar reveal
 * (left-to-right), timeline bar fill, flowing SMIL dots on cross-pillar
 * arrows and chronological dot appearance at timeline milestones.
 *
 * ONE accent: the "High" risk tier border uses var(--accent).
 * No gradients, no shadows. Clean structural diagram.
 */

"use client";

import { useEffect, useRef, useState } from "react";

export function GovernanceRiskDiagram() {
  const figRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = figRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* ── Layout constants ──────────────────────────────── */
  const svgW = 1200;
  const pillarW = 300;
  const pillarGap = 80;
  const totalPillarsW = pillarW * 3 + pillarGap * 2;
  const startX = (svgW - totalPillarsW) / 2;

  const pillarX = [
    startX,
    startX + pillarW + pillarGap,
    startX + 2 * (pillarW + pillarGap),
  ];

  const headerY = 20;
  const headerH = 28;
  const cardStartY = headerY + headerH + 14;
  const cardH = 52;
  const cardGap = 10;

  /* ── Pillar data ───────────────────────────────────── */
  const pillar1Title = "RISK CLASSIFICATION";
  const pillar1Items = [
    { label: "Unacceptable", sub: "Banned", accent: false },
    { label: "High", sub: "Full treatment", accent: true },
    { label: "Limited", sub: "Transparency", accent: false },
    { label: "Minimal", sub: "Inventory", accent: false },
  ];

  const pillar2Title = "POLICY FRAMEWORK";
  const pillar2Items = [
    { label: "Acceptable Use Policy" },
    { label: "Incident Response" },
    { label: "Model Inventory" },
  ];

  const pillar3Title = "OPERATIONAL GOVERNANCE";
  const pillar3Items = [
    { label: "Risk Register" },
    { label: "Audit Cycle" },
    { label: "Human Oversight" },
  ];

  /* ── Arrow helpers ─────────────────────────────────── */
  const arrowPairs: Array<{
    fromPillar: number;
    fromCard: number;
    toPillar: number;
    toCard: number;
  }> = [
    // High Risk -> Acceptable Use Policy
    { fromPillar: 0, fromCard: 1, toPillar: 1, toCard: 0 },
    // High Risk -> Incident Response
    { fromPillar: 0, fromCard: 1, toPillar: 1, toCard: 1 },
    // Limited -> Model Inventory
    { fromPillar: 0, fromCard: 2, toPillar: 1, toCard: 2 },
    // Acceptable Use Policy -> Risk Register
    { fromPillar: 1, fromCard: 0, toPillar: 2, toCard: 0 },
    // Incident Response -> Audit Cycle
    { fromPillar: 1, fromCard: 1, toPillar: 2, toCard: 1 },
    // Model Inventory -> Human Oversight
    { fromPillar: 1, fromCard: 2, toPillar: 2, toCard: 2 },
  ];

  function cardY(index: number) {
    return cardStartY + index * (cardH + cardGap);
  }

  function cardCenterY(index: number) {
    return cardY(index) + cardH / 2;
  }

  /* ── Timeline constants ────────────────────────────── */
  const timelineY = 340;
  const timelineBarH = 4;
  const timelineStartX = 90;
  const timelineEndX = svgW - 90;
  const timelineW = timelineEndX - timelineStartX;
  const milestones = [
    { label: "Aug 2024", sub: "Entry into force", pct: 0.08 },
    { label: "Feb 2025", sub: "Banned AI", pct: 0.33 },
    { label: "Aug 2025", sub: "GPAI rules", pct: 0.58 },
    { label: "Aug 2026", sub: "High-risk (full)", pct: 0.85 },
  ];
  const milestonePositions = milestones.map((m) => ({
    ...m,
    x: timelineStartX + timelineW * m.pct,
  }));

  /* ── Pillar bottom (for calculating column height) ── */
  const pillar1Bottom = cardY(pillar1Items.length - 1) + cardH;
  const pillar2Bottom = cardY(pillar2Items.length - 1) + cardH;
  const pillar3Bottom = cardY(pillar3Items.length - 1) + cardH;
  const maxBottom = Math.max(pillar1Bottom, pillar2Bottom, pillar3Bottom);
  const pillarOutlineTop = headerY - 8;
  const pillarOutlineBottom = maxBottom + 14;

  /* ── Build arrow path data for SMIL motion ─────────── */
  const arrowPaths = arrowPairs.map((arrow) => {
    const fromX = pillarX[arrow.fromPillar] + pillarW;
    const toX = pillarX[arrow.toPillar];
    const fromCY = cardCenterY(arrow.fromCard);
    const toCY = cardCenterY(arrow.toCard);

    if (fromCY === toCY) {
      return `M ${fromX + 4} ${fromCY} L ${toX - 6} ${toCY}`;
    }
    const midX = (fromX + toX) / 2;
    return `M ${fromX + 4} ${fromCY} L ${midX} ${fromCY} L ${midX} ${toCY} L ${toX - 6} ${toCY}`;
  });

  const vis = visible ? "gr-visible" : "";

  return (
    <figure
      ref={figRef}
      role="img"
      aria-label="AI governance and risk framework showing three pillars — Risk Classification, Policy Framework, and Operational Governance — with dependency arrows and EU AI Act timeline"
      style={{ margin: 0, width: "100%", marginInline: "auto" }}
    >
      {/* Entrance transition styles */}
      <style>{`
        .gr-enter {
          opacity: 0;
          transform: translateX(-18px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .gr-enter.gr-visible {
          opacity: 1;
          transform: translateX(0);
        }
        .gr-pillar1 { transition-delay: 0s; }
        .gr-pillar2 { transition-delay: 0.25s; }
        .gr-pillar3 { transition-delay: 0.50s; }
        .gr-arrows  { transition-delay: 0.65s; }
        .gr-timeline-label {
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
          transition-delay: 0.75s;
        }
        .gr-timeline-label.gr-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .gr-timeline-bar {
          stroke-dasharray: ${timelineW + 20};
          stroke-dashoffset: ${timelineW + 20};
          transition: stroke-dashoffset 1.2s ease-out;
          transition-delay: 0.85s;
        }
        .gr-timeline-bar.gr-visible {
          stroke-dashoffset: 0;
        }
        .gr-ms0 { opacity:0; transition: opacity 0.4s ease-out; transition-delay: 1.05s; }
        .gr-ms1 { opacity:0; transition: opacity 0.4s ease-out; transition-delay: 1.25s; }
        .gr-ms2 { opacity:0; transition: opacity 0.4s ease-out; transition-delay: 1.45s; }
        .gr-ms3 { opacity:0; transition: opacity 0.4s ease-out; transition-delay: 1.65s; }
        .gr-ms0.gr-visible, .gr-ms1.gr-visible,
        .gr-ms2.gr-visible, .gr-ms3.gr-visible { opacity: 1; }
      `}</style>

      <svg
        viewBox="0 0 1200 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        <defs>
          {/* Horizontal arrow marker */}
          <marker
            id="grArrow"
            viewBox="0 0 10 10"
            refX="10"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path
              d="M 0 2 L 10 5 L 0 8"
              fill="none"
              stroke="var(--color-midnight)"
              strokeWidth="1.5"
            />
          </marker>

          {/* Muted arrow for secondary connectors */}
          <marker
            id="grArrowMuted"
            viewBox="0 0 10 10"
            refX="10"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto-start-reverse"
          >
            <path
              d="M 0 2 L 10 5 L 0 8"
              fill="none"
              stroke="var(--fg-2)"
              strokeWidth="1.5"
            />
          </marker>

          {/* Timeline dot marker */}
          <marker
            id="grDot"
            viewBox="0 0 6 6"
            refX="3"
            refY="3"
            markerWidth="6"
            markerHeight="6"
          >
            <circle cx="3" cy="3" r="2.5" fill="var(--color-midnight)" />
          </marker>

          {/* Motion paths for flowing dots on cross-pillar arrows */}
          {arrowPaths.map((d, i) => (
            <path key={`mp-${i}`} id={`grFlow${i}`} d={d} />
          ))}
        </defs>

        {/* ═══════════════════════════════════════════════════
            PILLAR 1 — Risk Classification (left)
            ═══════════════════════════════════════════════════ */}
        <g className={`gr-enter gr-pillar1 ${vis}`}>
          {/* Column outline */}
          <rect
            x={pillarX[0] - 10}
            y={pillarOutlineTop}
            width={pillarW + 20}
            height={pillarOutlineBottom - pillarOutlineTop}
            rx={4}
            stroke="var(--border)"
            strokeWidth="1"
            fill="none"
            opacity={0.35}
          />

          {/* Header */}
          <text
            x={pillarX[0] + pillarW / 2}
            y={headerY + 16}
            fontFamily="var(--font-mono)"
            fontSize="10"
            fontWeight="600"
            fill="var(--fg-2)"
            textAnchor="middle"
            letterSpacing="0.08em"
          >
            {pillar1Title}
          </text>
          <line
            x1={pillarX[0]}
            y1={headerY + headerH}
            x2={pillarX[0] + pillarW}
            y2={headerY + headerH}
            stroke="var(--border)"
            strokeWidth="1"
            opacity={0.5}
          />

          {/* Cards */}
          {pillar1Items.map((item, i) => {
            const x = pillarX[0];
            const y = cardY(i);
            const isAccent = item.accent;
            return (
              <g key={`p1-${i}`}>
                <rect
                  x={x}
                  y={y}
                  width={pillarW}
                  height={cardH}
                  rx={4}
                  stroke={isAccent ? "var(--accent)" : "var(--border)"}
                  strokeWidth={isAccent ? 1.5 : 1}
                  fill="var(--bg-surface)"
                />
                <text
                  x={x + pillarW / 2}
                  y={y + 21}
                  fontFamily="var(--font-display)"
                  fontSize="14"
                  fontWeight="500"
                  fill={isAccent ? "var(--accent)" : "var(--color-midnight)"}
                  textAnchor="middle"
                >
                  {item.label}
                </text>
                <text
                  x={x + pillarW / 2}
                  y={y + 39}
                  fontFamily="var(--font-mono)"
                  fontSize="10"
                  fill="var(--fg-3)"
                  textAnchor="middle"
                  letterSpacing="0.04em"
                >
                  {item.sub}
                </text>
              </g>
            );
          })}
        </g>

        {/* ═══════════════════════════════════════════════════
            PILLAR 2 — Policy Framework (centre)
            ═══════════════════════════════════════════════════ */}
        <g className={`gr-enter gr-pillar2 ${vis}`}>
          {/* Column outline */}
          <rect
            x={pillarX[1] - 10}
            y={pillarOutlineTop}
            width={pillarW + 20}
            height={pillarOutlineBottom - pillarOutlineTop}
            rx={4}
            stroke="var(--border)"
            strokeWidth="1"
            fill="none"
            opacity={0.35}
          />

          {/* Header */}
          <text
            x={pillarX[1] + pillarW / 2}
            y={headerY + 16}
            fontFamily="var(--font-mono)"
            fontSize="10"
            fontWeight="600"
            fill="var(--fg-2)"
            textAnchor="middle"
            letterSpacing="0.08em"
          >
            {pillar2Title}
          </text>
          <line
            x1={pillarX[1]}
            y1={headerY + headerH}
            x2={pillarX[1] + pillarW}
            y2={headerY + headerH}
            stroke="var(--border)"
            strokeWidth="1"
            opacity={0.5}
          />

          {/* Cards */}
          {pillar2Items.map((item, i) => {
            const x = pillarX[1];
            const y = cardY(i);
            return (
              <g key={`p2-${i}`}>
                <rect
                  x={x}
                  y={y}
                  width={pillarW}
                  height={cardH}
                  rx={4}
                  stroke="var(--border)"
                  strokeWidth={1}
                  fill="var(--bg-surface)"
                />
                <text
                  x={x + pillarW / 2}
                  y={y + cardH / 2 + 5}
                  fontFamily="var(--font-display)"
                  fontSize="14"
                  fontWeight="500"
                  fill="var(--color-midnight)"
                  textAnchor="middle"
                >
                  {item.label}
                </text>
              </g>
            );
          })}
        </g>

        {/* ═══════════════════════════════════════════════════
            PILLAR 3 — Operational Governance (right)
            ═══════════════════════════════════════════════════ */}
        <g className={`gr-enter gr-pillar3 ${vis}`}>
          {/* Column outline */}
          <rect
            x={pillarX[2] - 10}
            y={pillarOutlineTop}
            width={pillarW + 20}
            height={pillarOutlineBottom - pillarOutlineTop}
            rx={4}
            stroke="var(--border)"
            strokeWidth="1"
            fill="none"
            opacity={0.35}
          />

          {/* Header */}
          <text
            x={pillarX[2] + pillarW / 2}
            y={headerY + 16}
            fontFamily="var(--font-mono)"
            fontSize="10"
            fontWeight="600"
            fill="var(--fg-2)"
            textAnchor="middle"
            letterSpacing="0.08em"
          >
            {pillar3Title}
          </text>
          <line
            x1={pillarX[2]}
            y1={headerY + headerH}
            x2={pillarX[2] + pillarW}
            y2={headerY + headerH}
            stroke="var(--border)"
            strokeWidth="1"
            opacity={0.5}
          />

          {/* Cards */}
          {pillar3Items.map((item, i) => {
            const x = pillarX[2];
            const y = cardY(i);
            return (
              <g key={`p3-${i}`}>
                <rect
                  x={x}
                  y={y}
                  width={pillarW}
                  height={cardH}
                  rx={4}
                  stroke="var(--border)"
                  strokeWidth={1}
                  fill="var(--bg-surface)"
                />
                <text
                  x={x + pillarW / 2}
                  y={y + cardH / 2 + 5}
                  fontFamily="var(--font-display)"
                  fontSize="14"
                  fontWeight="500"
                  fill="var(--color-midnight)"
                  textAnchor="middle"
                >
                  {item.label}
                </text>
              </g>
            );
          })}
        </g>

        {/* ═══════════════════════════════════════════════════
            DEPENDENCY ARROWS between pillars
            ═══════════════════════════════════════════════════ */}
        <g className={`gr-enter gr-arrows ${vis}`}>
          {arrowPairs.map((arrow, i) => {
            const fromX = pillarX[arrow.fromPillar] + pillarW;
            const toX = pillarX[arrow.toPillar];
            const fromCY = cardCenterY(arrow.fromCard);
            const toCY = cardCenterY(arrow.toCard);

            if (fromCY === toCY) {
              return (
                <line
                  key={`arrow-${i}`}
                  x1={fromX + 4}
                  y1={fromCY}
                  x2={toX - 6}
                  y2={toCY}
                  stroke="var(--color-midnight)"
                  strokeWidth="1"
                  markerEnd="url(#grArrowMuted)"
                  opacity={0.6}
                />
              );
            }

            const midX = (fromX + toX) / 2;
            return (
              <path
                key={`arrow-${i}`}
                d={`M ${fromX + 4} ${fromCY} L ${midX} ${fromCY} L ${midX} ${toCY} L ${toX - 6} ${toCY}`}
                stroke="var(--color-midnight)"
                strokeWidth="1"
                fill="none"
                markerEnd="url(#grArrowMuted)"
                opacity={0.6}
              />
            );
          })}
        </g>

        {/* ═══════════════════════════════════════════════════
            FLOWING DOTS on cross-pillar arrows (SMIL)
            ═══════════════════════════════════════════════════ */}
        {visible && (
          <g>
            {arrowPaths.map((_, i) => (
              <circle
                key={`dot-${i}`}
                r="3.5"
                fill="var(--color-midnight)"
                opacity="0.7"
              >
                <animateMotion
                  dur={`${2 + (i % 3) * 0.4}s`}
                  repeatCount="indefinite"
                  keyPoints="0;1"
                  keyTimes="0;1"
                  calcMode="linear"
                  begin={`${i * 0.35}s`}
                >
                  <mpath href={`#grFlow${i}`} />
                </animateMotion>
              </circle>
            ))}
          </g>
        )}

        {/* ═══════════════════════════════════════════════════
            TIMELINE BAR — EU AI Act milestones
            ═══════════════════════════════════════════════════ */}

        {/* Timeline label */}
        <text
          className={`gr-timeline-label ${vis}`}
          x={svgW / 2}
          y={timelineY - 18}
          fontFamily="var(--font-mono)"
          fontSize="10"
          fontWeight="600"
          fill="var(--fg-2)"
          textAnchor="middle"
          letterSpacing="0.08em"
        >
          EU AI ACT TIMELINE
        </text>

        {/* Baseline bar (static track) */}
        <line
          x1={timelineStartX}
          y1={timelineY + timelineBarH / 2}
          x2={timelineEndX}
          y2={timelineY + timelineBarH / 2}
          stroke="var(--border)"
          strokeWidth={timelineBarH}
          strokeLinecap="round"
          opacity={0.3}
        />

        {/* Animated fill bar (left-to-right reveal) */}
        <line
          className={`gr-timeline-bar ${vis}`}
          x1={timelineStartX}
          y1={timelineY + timelineBarH / 2}
          x2={timelineEndX}
          y2={timelineY + timelineBarH / 2}
          stroke="var(--color-midnight)"
          strokeWidth={timelineBarH}
          strokeLinecap="round"
          opacity={0.5}
        />

        {/* Milestone ticks, dots, and labels (staggered entrance) */}
        {milestonePositions.map((m, i) => (
          <g key={`ms-${i}`} className={`gr-ms${i} ${vis}`}>
            {/* Tick mark */}
            <line
              x1={m.x}
              y1={timelineY - 5}
              x2={m.x}
              y2={timelineY + timelineBarH + 5}
              stroke="var(--color-midnight)"
              strokeWidth="1.5"
            />
            {/* Dot */}
            <circle
              cx={m.x}
              cy={timelineY + timelineBarH / 2}
              r="3.5"
              fill="var(--color-midnight)"
            />
            {/* Date label */}
            <text
              x={m.x}
              y={timelineY + timelineBarH + 22}
              fontFamily="var(--font-mono)"
              fontSize="10"
              fontWeight="600"
              fill="var(--color-midnight)"
              textAnchor="middle"
              letterSpacing="0.02em"
            >
              {m.label}
            </text>
            {/* Description */}
            <text
              x={m.x}
              y={timelineY + timelineBarH + 37}
              fontFamily="var(--font-mono)"
              fontSize="9"
              fill="var(--fg-3)"
              textAnchor="middle"
              letterSpacing="0.02em"
            >
              {m.sub}
            </text>
          </g>
        ))}

        {/* Terminal arrow on timeline */}
        <g className={`gr-timeline-label ${vis}`}>
          <line
            x1={timelineEndX}
            y1={timelineY + timelineBarH / 2}
            x2={timelineEndX + 16}
            y2={timelineY + timelineBarH / 2}
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            markerEnd="url(#grArrow)"
          />
        </g>
      </svg>
    </figure>
  );
}
