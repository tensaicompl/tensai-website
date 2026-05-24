"use client";

/**
 * AdoptionPatternsDiagram — Three Cliffs
 *
 * A horizontal line graph showing adoption progress (x) vs organisational
 * maturity (y). The line rises in three steps with three steep drop-offs:
 *
 * 1. Adoption cliff — demo to production gap (no platform).
 * 2. Scaling cliff — one team to many teams (no catalog). Accent marker.
 * 3. Governance gap — fast to compliant (no risk tiers).
 *
 * Monochrome line art. One accent: var(--accent) on the scaling cliff marker.
 *
 * Animations:
 * - IntersectionObserver triggers entrance at 20% visibility
 * - Axes fade in first
 * - Line draws left-to-right via stroke-dashoffset
 * - Cliff markers pulse when line is drawn
 * - A dot travels along the drawn line (SMIL animateMotion)
 * - Respects prefers-reduced-motion
 */

import { useEffect, useRef, useState } from "react";

export function AdoptionPatternsDiagram() {
  /* ── Intersection Observer ────────────────────────── */
  const figRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const el = figRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* ── Layout (scaled to 1200-wide viewBox) ─────────── */
  const padL = 92;
  const padR = 46;
  const padT = 37;
  const padB = 83;
  const plotW = 1200 - padL - padR; // 1062
  const plotH = 523 - padT - padB; // 403

  /* ── Line path waypoints (x%, y%) within the plot area ── */
  const waypoints: [number, number][] = [
    [0, 0.02],
    [0.14, 0.32],
    [0.16, 0.30],
    [0.20, 0.12],
    [0.22, 0.14],
    [0.36, 0.58],
    [0.38, 0.56],
    [0.44, 0.28],
    [0.46, 0.30],
    [0.64, 0.78],
    [0.66, 0.76],
    [0.71, 0.52],
    [0.73, 0.54],
    [1.0, 0.95],
  ];

  /* Convert to SVG coordinates (y inverted) */
  const pts = waypoints.map(([px, py]) => ({
    x: padL + px * plotW,
    y: padT + plotH - py * plotH,
  }));

  const pathD = pts
    .map(
      (p, i) =>
        `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`
    )
    .join(" ");

  /* Approximate total line length for dashoffset animation */
  let totalLen = 0;
  for (let i = 1; i < pts.length; i++) {
    const dx = pts[i].x - pts[i - 1].x;
    const dy = pts[i].y - pts[i - 1].y;
    totalLen += Math.sqrt(dx * dx + dy * dy);
  }
  const lineLen = Math.ceil(totalLen);

  /* ── Cliff definitions ──────────────────────────────── */
  const cliffs = [
    {
      topIdx: 2,
      bottomIdx: 3,
      label: "Adoption cliff",
      sublabel: "demo → production gap",
      missing: "no platform",
      accent: false,
    },
    {
      topIdx: 6,
      bottomIdx: 7,
      label: "Scaling cliff",
      sublabel: "one team → many teams",
      missing: "no catalog",
      accent: true,
    },
    {
      topIdx: 10,
      bottomIdx: 11,
      label: "Governance gap",
      sublabel: "fast → compliant",
      missing: "no risk tiers",
      accent: false,
    },
  ];

  /* ── Timing constants ───────────────────────────────── */
  const AXIS_DURATION = "0.5s";
  const AXIS_DELAY = "0s";
  const LINE_DURATION = "1.8s";
  const LINE_DELAY = "0.5s"; // after axes
  const CLIFF_DELAY = "2.4s"; // after line drawn
  const DOT_DURATION = "3s";
  const DOT_DELAY = "0.5s"; // starts shortly after line begins

  const instant = reducedMotion;
  const show = visible || instant;

  return (
    <figure
      ref={figRef}
      role="img"
      aria-label="Adoption patterns diagram showing three cliffs — adoption cliff, scaling cliff, and governance gap — that organisations encounter on the path from AI pilots to governed operation"
      style={{ margin: 0, width: "100%", marginInline: "auto" }}
    >
      {/* ── Scoped styles ─────────────────────────────── */}
      <style>{`
        /* Axes entrance */
        .ap-axis {
          opacity: 0;
          transition: opacity ${instant ? "0s" : AXIS_DURATION} ease ${instant ? "0s" : AXIS_DELAY};
        }
        .ap-axis.ap-visible {
          opacity: 1;
        }

        /* Line draw via stroke-dashoffset */
        .ap-line {
          stroke-dasharray: ${lineLen};
          stroke-dashoffset: ${lineLen};
          transition: stroke-dashoffset ${instant ? "0s" : LINE_DURATION} ease-in-out ${instant ? "0s" : LINE_DELAY};
        }
        .ap-line.ap-visible {
          stroke-dashoffset: 0;
        }

        /* Cliff marker pulse */
        .ap-cliff-marker {
          opacity: 0;
          transform-origin: center;
          transition:
            opacity 0.3s ease ${instant ? "0s" : CLIFF_DELAY},
            transform 0.3s ease ${instant ? "0s" : CLIFF_DELAY};
          transform: scale(0.5);
        }
        .ap-cliff-marker.ap-visible {
          opacity: 1;
          transform: scale(1);
        }
        .ap-cliff-marker.ap-visible.ap-pulse {
          animation: ${instant ? "none" : `ap-pulse-kf 0.6s ease ${CLIFF_DELAY} 1`};
        }

        @keyframes ap-pulse-kf {
          0%   { transform: scale(0.5); opacity: 0; }
          50%  { transform: scale(1.4); opacity: 1; }
          100% { transform: scale(1);   opacity: 1; }
        }

        /* Cliff annotation text */
        .ap-cliff-text {
          opacity: 0;
          transition: opacity 0.4s ease ${instant ? "0s" : CLIFF_DELAY};
        }
        .ap-cliff-text.ap-visible {
          opacity: 1;
        }

        /* Grid lines */
        .ap-grid {
          opacity: 0;
          transition: opacity ${instant ? "0s" : AXIS_DURATION} ease ${instant ? "0s" : AXIS_DELAY};
        }
        .ap-grid.ap-visible {
          opacity: 0.35;
        }

        /* Phase labels along bottom */
        .ap-phase-label {
          opacity: 0;
          transition: opacity 0.4s ease ${instant ? "0s" : LINE_DELAY};
        }
        .ap-phase-label.ap-visible {
          opacity: 1;
        }

        /* Travelling dot */
        .ap-dot {
          opacity: 0;
          transition: opacity 0.2s ease ${instant ? "0s" : DOT_DELAY};
        }
        .ap-dot.ap-visible {
          opacity: 1;
        }
      `}</style>

      <svg
        viewBox="0 0 1200 523"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        <defs>
          <marker
            id="apArrow"
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
              stroke="var(--color-midnight)"
              strokeWidth="1.5"
            />
          </marker>
        </defs>

        {/* ═══ Axes ═══════════════════════════════════════ */}
        <g className={`ap-axis ${show ? "ap-visible" : ""}`}>
          {/* Y-axis */}
          <line
            x1={padL}
            y1={padT}
            x2={padL}
            y2={padT + plotH}
            stroke="var(--border)"
            strokeWidth="1"
          />
          {/* X-axis */}
          <line
            x1={padL}
            y1={padT + plotH}
            x2={padL + plotW}
            y2={padT + plotH}
            stroke="var(--border)"
            strokeWidth="1"
          />

          {/* Axis arrowheads */}
          <line
            x1={padL}
            y1={padT}
            x2={padL}
            y2={padT - 6}
            stroke="var(--border)"
            strokeWidth="1"
            markerEnd="url(#apArrow)"
          />
          <line
            x1={padL + plotW}
            y1={padT + plotH}
            x2={padL + plotW + 6}
            y2={padT + plotH}
            stroke="var(--border)"
            strokeWidth="1"
            markerEnd="url(#apArrow)"
          />

          {/* Y-axis label */}
          <text
            x={padL - 18}
            y={padT + plotH / 2}
            fontFamily="var(--font-mono)"
            fontSize="13"
            letterSpacing="0.1em"
            fill="var(--fg-3)"
            textAnchor="middle"
            transform={`rotate(-90 ${padL - 18} ${padT + plotH / 2})`}
          >
            MATURITY
          </text>

          {/* X-axis label */}
          <text
            x={padL + plotW / 2}
            y={padT + plotH + 55}
            fontFamily="var(--font-mono)"
            fontSize="13"
            letterSpacing="0.1em"
            fill="var(--fg-3)"
            textAnchor="middle"
          >
            TIME
          </text>
        </g>

        {/* ═══ Horizontal grid lines (subtle) ═════════════ */}
        {[0.25, 0.5, 0.75].map((frac) => (
          <line
            key={`grid-${frac}`}
            className={`ap-grid ${show ? "ap-visible" : ""}`}
            x1={padL + 1}
            y1={padT + plotH - frac * plotH}
            x2={padL + plotW}
            y2={padT + plotH - frac * plotH}
            stroke="var(--border)"
            strokeWidth="0.5"
            strokeDasharray="4 6"
          />
        ))}

        {/* ═══ Main line path (draws left-to-right) ═══════ */}
        <path
          className={`ap-line ${show ? "ap-visible" : ""}`}
          d={pathD}
          stroke="var(--color-midnight)"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="none"
        />

        {/* ═══ Travelling dot (SMIL animateMotion) ════════ */}
        {show && !instant && (
          <circle
            className={`ap-dot ${show ? "ap-visible" : ""}`}
            r="4"
            fill="var(--color-midnight)"
          >
            <animateMotion
              dur={DOT_DURATION}
              begin={DOT_DELAY}
              fill="freeze"
              repeatCount="1"
              path={pathD}
            />
          </circle>
        )}

        {/* ═══ Cliff annotations ══════════════════════════ */}
        {cliffs.map((cliff, ci) => {
          const top = pts[cliff.topIdx];
          const bottom = pts[cliff.bottomIdx];
          const cliffColor = cliff.accent
            ? "var(--accent)"
            : "var(--color-midnight)";
          const midX = (top.x + bottom.x) / 2;
          const dropX = bottom.x + 12;

          return (
            <g key={ci}>
              {/* Cliff drop indicator -- vertical dashed line */}
              <line
                className={`ap-cliff-text ${show ? "ap-visible" : ""}`}
                x1={dropX}
                y1={top.y}
                x2={dropX}
                y2={bottom.y}
                stroke={cliffColor}
                strokeWidth="1.5"
                strokeDasharray="3 3"
              />
              {/* Top tick */}
              <line
                className={`ap-cliff-text ${show ? "ap-visible" : ""}`}
                x1={dropX - 4}
                y1={top.y}
                x2={dropX + 4}
                y2={top.y}
                stroke={cliffColor}
                strokeWidth="1.5"
              />
              {/* Bottom tick */}
              <line
                className={`ap-cliff-text ${show ? "ap-visible" : ""}`}
                x1={dropX - 4}
                y1={bottom.y}
                x2={dropX + 4}
                y2={bottom.y}
                stroke={cliffColor}
                strokeWidth="1.5"
              />

              {/* Cliff dot at the top of the fall */}
              <circle
                className={`ap-cliff-marker ap-pulse ${show ? "ap-visible" : ""}`}
                cx={top.x}
                cy={top.y}
                r={cliff.accent ? 6 : 5}
                fill={
                  cliff.accent ? "var(--accent)" : "var(--bg-surface)"
                }
                stroke={cliffColor}
                strokeWidth="1.5"
              />

              {/* Cliff label (above) */}
              <text
                className={`ap-cliff-text ${show ? "ap-visible" : ""}`}
                x={midX}
                y={top.y - 34}
                fontFamily="var(--font-display)"
                fontSize="15"
                fontWeight="600"
                fill={cliffColor}
                textAnchor="middle"
              >
                {cliff.label}
              </text>

              {/* Sublabel (below label) */}
              <text
                className={`ap-cliff-text ${show ? "ap-visible" : ""}`}
                x={midX}
                y={top.y - 14}
                fontFamily="var(--font-mono)"
                fontSize="11"
                fill="var(--fg-2)"
                textAnchor="middle"
                letterSpacing="0.02em"
              >
                {cliff.sublabel}
              </text>

              {/* Missing annotation (below the cliff drop) */}
              <text
                className={`ap-cliff-text ${show ? "ap-visible" : ""}`}
                x={midX}
                y={bottom.y + 24}
                fontFamily="var(--font-mono)"
                fontSize="11"
                fill="var(--fg-3)"
                textAnchor="middle"
                letterSpacing="0.02em"
              >
                {cliff.missing}
              </text>
            </g>
          );
        })}

        {/* ═══ Phase labels along the bottom ══════════════ */}
        {[
          { x: 0.07, label: "Pilots" },
          { x: 0.28, label: "First prod" },
          { x: 0.54, label: "Org-wide" },
          { x: 0.82, label: "Governed" },
        ].map((phase) => (
          <text
            key={phase.label}
            className={`ap-phase-label ${show ? "ap-visible" : ""}`}
            x={padL + phase.x * plotW}
            y={padT + plotH + 34}
            fontFamily="var(--font-mono)"
            fontSize="12"
            fill="var(--fg-3)"
            textAnchor="middle"
            letterSpacing="0.04em"
          >
            {phase.label}
          </text>
        ))}
      </svg>
    </figure>
  );
}
