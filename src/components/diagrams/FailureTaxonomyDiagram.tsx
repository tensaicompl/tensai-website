"use client";

/**
 * FailureTaxonomyDiagram — Failure Taxonomy & Cascade
 *
 * Upper zone: five failure classes in a horizontal row, each with an
 * abstract glyph and label (Memory, Reflection, Planning, Action, System).
 *
 * Lower zone: a cascade chain showing how failures propagate left-to-right
 * (System -> Memory -> Planning -> Reflection), connected by arrows with
 * an animated flowing dot.
 *
 * Monochrome line art throughout; the single accent element is the
 * jagged crack on the System glyph (var(--accent), violet).
 *
 * Animations:
 *  - Upper cells stagger in left-to-right on intersection
 *  - Cascade zone fades in after cells
 *  - Flowing dot traverses the cascade chain path (SMIL)
 *  - Dashed connector from upper System to cascade System pulses
 */

import { useEffect, useRef, useState } from "react";

export function FailureTaxonomyDiagram() {
  const figureRef = useRef<HTMLElement>(null);
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
    const el = figureRef.current;
    if (!el) return;
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

  /* ── Layout constants (scaled to 1200x400) ──────────── */
  const cellW = 160;
  const cellH = 110;
  const gutter = (1200 - cellW * 5) / 6; // ~33.3px
  const upperY = 30;

  /* Cell centres */
  const cx = Array.from(
    { length: 5 },
    (_, i) => gutter + cellW / 2 + i * (cellW + gutter)
  );
  const cellCy = upperY + cellH / 2;
  const glyphCy = cellCy - 8;

  /* Lower zone */
  const cascadeY = 290;
  const cascadeBandTop = 260;
  const cascadeBandBottom = 360;
  const cascadeGlyphY = cascadeY;

  /* Cascade chain order: System, Memory, Planning, Reflection */
  const cascadeStartX = 220;
  const cascadeSpacing = 220;
  const cascadeCx = Array.from(
    { length: 4 },
    (_, i) => cascadeStartX + i * cascadeSpacing
  );

  /* ── Build the cascade flow path for the dot ────────── */
  // The dot flows along the connectors between the 4 cascade glyphs
  const flowPathD = [
    `M ${cascadeCx[0] + 14} ${cascadeGlyphY}`,
    `L ${cascadeCx[1] - 18} ${cascadeGlyphY}`,
    `M ${cascadeCx[1] + 18} ${cascadeGlyphY}`,
    `L ${cascadeCx[2] - 22} ${cascadeGlyphY}`,
    `M ${cascadeCx[2] + 18} ${cascadeGlyphY}`,
    `L ${cascadeCx[3] - 22} ${cascadeGlyphY}`,
  ].join(" ");

  // Continuous path for animateMotion (no gaps — dot traverses the full span)
  const flowContinuousD = [
    `M ${cascadeCx[0] + 14} ${cascadeGlyphY}`,
    `L ${cascadeCx[3] - 22} ${cascadeGlyphY}`,
  ].join(" ");

  /* ── Stagger delays ─────────────────────────────────── */
  const cellDelays = [0, 0.1, 0.2, 0.3, 0.4]; // left-to-right, 100ms stagger
  const cascadeDelay = 0.65; // after all cells have entered

  /* CSS entrance class helper */
  const entrance = (delay: number) =>
    reducedMotion
      ? { opacity: visible ? 1 : 0, transition: "opacity 0.01s" }
      : {
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(12px)",
          transition: `opacity 0.5s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        };

  const fadeIn = (delay: number) =>
    reducedMotion
      ? { opacity: visible ? 1 : 0, transition: "opacity 0.01s" }
      : {
          opacity: visible ? 1 : 0,
          transition: `opacity 0.6s ease ${delay}s`,
        };

  return (
    <figure
      ref={figureRef}
      role="img"
      aria-label="Failure taxonomy showing five failure classes — Memory, Reflection, Planning, Action, System — and their cascade chain from root cause to symptom"
      style={{ margin: 0, width: "100%", marginInline: "auto" }}
    >
      <svg
        viewBox="0 0 1200 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        <defs>
          {/* Primary arrow marker */}
          <marker
            id="ftArrow"
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

          {/* Muted arrow for cascade connectors */}
          <marker
            id="ftArrowMuted"
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

          {/* Downward drop arrow (upper cells to cascade) */}
          <marker
            id="ftArrowDown"
            viewBox="0 0 10 10"
            refX="5"
            refY="10"
            markerWidth="5"
            markerHeight="5"
            orient="auto"
          >
            <path
              d="M 1 3 L 5 9 L 9 3"
              fill="none"
              stroke="var(--border)"
              strokeWidth="1.5"
            />
          </marker>

          {/* Cascade flow path (for reference / dot motion) */}
          <path id="ftCascadeFlow" d={flowContinuousD} fill="none" />
        </defs>

        {/* ═══════════════════════════════════════════════════
            UPPER ZONE — Five failure classes
            ═══════════════════════════════════════════════════ */}

        {/* Cell borders + glyphs + labels — staggered entrance */}
        {cx.map((x, i) => (
          <g key={`cell-group-${i}`} style={entrance(cellDelays[i])}>
            <rect
              x={x - cellW / 2}
              y={upperY}
              width={cellW}
              height={cellH}
              rx={6}
              stroke="var(--border)"
              strokeWidth="1"
              fill="none"
              opacity={0.5}
            />
          </g>
        ))}

        {/* ── 1. Memory — broken horizontal bar ────────── */}
        {(() => {
          const x = cx[0];
          const y = glyphCy;
          const halfW = 26;
          const gap = 7;
          return (
            <g style={entrance(cellDelays[0])}>
              <line
                x1={x - halfW}
                y1={y}
                x2={x - gap}
                y2={y}
                stroke="var(--color-midnight)"
                strokeWidth="2"
              />
              <line
                x1={x + gap}
                y1={y}
                x2={x + halfW}
                y2={y}
                stroke="var(--color-midnight)"
                strokeWidth="2"
              />
              <line
                x1={x - gap}
                y1={y}
                x2={x + gap}
                y2={y}
                stroke="var(--color-midnight)"
                strokeWidth="2"
                strokeDasharray="3 3"
              />
            </g>
          );
        })()}

        {/* ── 2. Reflection — open circular arrow ──────── */}
        {(() => {
          const x = cx[1];
          const y = glyphCy;
          const r = 16;
          const startAngle = 40 * (Math.PI / 180);
          const endAngle = 350 * (Math.PI / 180);
          const sx = x + r * Math.cos(startAngle);
          const sy = y - r * Math.sin(startAngle);
          const ex = x + r * Math.cos(endAngle);
          const ey = y - r * Math.sin(endAngle);
          return (
            <g style={entrance(cellDelays[1])}>
              <path
                d={`M ${sx} ${sy} A ${r} ${r} 0 1 0 ${ex} ${ey}`}
                stroke="var(--color-midnight)"
                strokeWidth="2"
                fill="none"
              />
              {(() => {
                const tangentAngle = endAngle - Math.PI / 2;
                const aLen = 6;
                const aSpread = 2.5;
                const tipX = ex;
                const tipY = ey;
                const backX = tipX - aLen * Math.cos(tangentAngle);
                const backY = tipY + aLen * Math.sin(tangentAngle);
                const perpX = aSpread * Math.sin(tangentAngle);
                const perpY = aSpread * Math.cos(tangentAngle);
                return (
                  <path
                    d={`M ${backX + perpX} ${backY + perpY} L ${tipX} ${tipY} L ${backX - perpX} ${backY - perpY}`}
                    stroke="var(--color-midnight)"
                    strokeWidth="2"
                    fill="none"
                  />
                );
              })()}
            </g>
          );
        })()}

        {/* ── 3. Planning — three bars, middle crossed ──── */}
        {(() => {
          const x = cx[2];
          const y = glyphCy;
          const barW = 30;
          const barH = 4;
          const spacing = 12;
          const bars = [y - spacing, y, y + spacing];
          return (
            <g style={entrance(cellDelays[2])}>
              {bars.map((by, bi) => (
                <rect
                  key={bi}
                  x={x - barW / 2}
                  y={by - barH / 2}
                  width={barW}
                  height={barH}
                  rx={1}
                  stroke="var(--color-midnight)"
                  strokeWidth="2"
                  fill="none"
                />
              ))}
              <line
                x1={x - barW / 2 - 4}
                y1={y + spacing / 2 + 2}
                x2={x + barW / 2 + 4}
                y2={y - spacing / 2 - 2}
                stroke="var(--color-midnight)"
                strokeWidth="2"
              />
            </g>
          );
        })()}

        {/* ── 4. Action — detached arrowhead ───────────── */}
        {(() => {
          const x = cx[3];
          const y = glyphCy;
          const shaftLen = 26;
          const shaftX1 = x - shaftLen / 2 - 6;
          const shaftX2 = x + shaftLen / 2 - 10;
          const headBaseX = x + shaftLen / 2 - 4;
          const headTipX = headBaseX + 12;
          const headY = y + 6;
          return (
            <g style={entrance(cellDelays[3])}>
              <line
                x1={shaftX1}
                y1={y}
                x2={shaftX2}
                y2={y}
                stroke="var(--color-midnight)"
                strokeWidth="2"
              />
              <path
                d={`M ${headBaseX} ${headY - 7} L ${headTipX} ${headY} L ${headBaseX} ${headY + 7}`}
                stroke="var(--color-midnight)"
                strokeWidth="2"
                fill="none"
              />
            </g>
          );
        })()}

        {/* ── 5. System — cracked square ───────────────── */}
        {(() => {
          const x = cx[4];
          const y = glyphCy;
          const size = 28;
          const half = size / 2;
          return (
            <g style={entrance(cellDelays[4])}>
              <rect
                x={x - half}
                y={y - half}
                width={size}
                height={size}
                stroke="var(--color-midnight)"
                strokeWidth="2"
                fill="none"
              />
              {/* Jagged crack diagonal — accent violet */}
              <path
                d={`M ${x - half + 4} ${y - half + 4}
                    L ${x - 3} ${y - 4}
                    L ${x + 2} ${y + 1}
                    L ${x - 1} ${y + 5}
                    L ${x + 4} ${y + 8}
                    L ${x + half - 4} ${y + half - 4}`}
                stroke="var(--accent)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          );
        })()}

        {/* ── Class labels ─────────────────────────────── */}
        {["Memory", "Reflection", "Planning", "Action", "System"].map(
          (label, i) => (
            <text
              key={label}
              x={cx[i]}
              y={upperY + cellH + 22}
              fontFamily="var(--font-display)"
              fontSize="14"
              fontWeight="500"
              fill="var(--color-midnight)"
              textAnchor="middle"
              style={entrance(cellDelays[i])}
            >
              {label}
            </text>
          )
        )}

        {/* ── Downward arrows from upper cells to cascade zone ── */}
        {cx.map((x, i) => (
          <line
            key={`drop-${i}`}
            x1={x}
            y1={upperY + cellH + 30}
            x2={x}
            y2={cascadeBandTop - 8}
            stroke="var(--border)"
            strokeWidth="1"
            strokeDasharray="3 4"
            opacity={0.5}
            style={fadeIn(cellDelays[i] + 0.3)}
          />
        ))}

        {/* ═══════════════════════════════════════════════════
            LOWER ZONE — Cascade chain (fades in after cells)
            ═══════════════════════════════════════════════════ */}
        <g style={fadeIn(cascadeDelay)}>
          {/* Cascade band borders */}
          <line
            x1={100}
            y1={cascadeBandTop}
            x2={1100}
            y2={cascadeBandTop}
            stroke="var(--border)"
            strokeWidth="1"
            opacity={0.3}
          />
          <line
            x1={100}
            y1={cascadeBandBottom}
            x2={1100}
            y2={cascadeBandBottom}
            stroke="var(--border)"
            strokeWidth="1"
            opacity={0.3}
          />

          {/* Dashed connector from upper System cell to cascade System glyph — pulsing */}
          <line
            x1={cx[4]}
            y1={upperY + cellH + 30}
            x2={cascadeCx[0]}
            y2={cascadeGlyphY - 18}
            stroke="var(--color-midnight)"
            strokeWidth="1"
            strokeDasharray="4 4"
            opacity={0.6}
          >
            {visible && !reducedMotion && (
              <animate
                attributeName="opacity"
                values="0.6;0.25;0.6"
                dur="2.5s"
                repeatCount="indefinite"
              />
            )}
          </line>

          {/* ── Cascade glyphs ────────────────────────────── */}

          {/* System — small cracked square */}
          {(() => {
            const x = cascadeCx[0];
            const y = cascadeGlyphY;
            const size = 18;
            const half = size / 2;
            return (
              <g>
                <rect
                  x={x - half}
                  y={y - half}
                  width={size}
                  height={size}
                  stroke="var(--color-midnight)"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d={`M ${x - half + 2} ${y - half + 2}
                      L ${x - 1} ${y - 2}
                      L ${x + 1} ${y + 1}
                      L ${x + half - 2} ${y + half - 2}`}
                  stroke="var(--accent)"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <text
                  x={x}
                  y={y + half + 16}
                  fontFamily="var(--font-mono)"
                  fontSize="10"
                  fill="var(--fg-3)"
                  textAnchor="middle"
                  letterSpacing="0.03em"
                >
                  System
                </text>
              </g>
            );
          })()}

          {/* Arrow: System -> Memory */}
          <line
            x1={cascadeCx[0] + 14}
            y1={cascadeGlyphY}
            x2={cascadeCx[1] - 18}
            y2={cascadeGlyphY}
            stroke="var(--fg-2)"
            strokeWidth="1.5"
            markerEnd="url(#ftArrowMuted)"
          />

          {/* Memory — small broken bar */}
          {(() => {
            const x = cascadeCx[1];
            const y = cascadeGlyphY;
            const halfW = 14;
            const gap2 = 4;
            return (
              <g>
                <line
                  x1={x - halfW}
                  y1={y}
                  x2={x - gap2}
                  y2={y}
                  stroke="var(--color-midnight)"
                  strokeWidth="1.5"
                />
                <line
                  x1={x + gap2}
                  y1={y}
                  x2={x + halfW}
                  y2={y}
                  stroke="var(--color-midnight)"
                  strokeWidth="1.5"
                />
                <line
                  x1={x - gap2}
                  y1={y}
                  x2={x + gap2}
                  y2={y}
                  stroke="var(--color-midnight)"
                  strokeWidth="1.5"
                  strokeDasharray="2 2"
                />
                <text
                  x={x}
                  y={y + 24}
                  fontFamily="var(--font-mono)"
                  fontSize="10"
                  fill="var(--fg-3)"
                  textAnchor="middle"
                  letterSpacing="0.03em"
                >
                  Memory
                </text>
              </g>
            );
          })()}

          {/* Arrow: Memory -> Planning */}
          <line
            x1={cascadeCx[1] + 18}
            y1={cascadeGlyphY}
            x2={cascadeCx[2] - 22}
            y2={cascadeGlyphY}
            stroke="var(--fg-2)"
            strokeWidth="1.5"
            markerEnd="url(#ftArrowMuted)"
          />

          {/* Planning — small bars with strike */}
          {(() => {
            const x = cascadeCx[2];
            const y = cascadeGlyphY;
            const barW = 18;
            const barH = 2.5;
            const spacing = 7;
            const bars = [y - spacing, y, y + spacing];
            return (
              <g>
                {bars.map((by, bi) => (
                  <rect
                    key={bi}
                    x={x - barW / 2}
                    y={by - barH / 2}
                    width={barW}
                    height={barH}
                    rx={0.5}
                    stroke="var(--color-midnight)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                ))}
                <line
                  x1={x - barW / 2 - 2}
                  y1={y + spacing / 2 + 1}
                  x2={x + barW / 2 + 2}
                  y2={y - spacing / 2 - 1}
                  stroke="var(--color-midnight)"
                  strokeWidth="1.5"
                />
                <text
                  x={x}
                  y={y + spacing + 19}
                  fontFamily="var(--font-mono)"
                  fontSize="10"
                  fill="var(--fg-3)"
                  textAnchor="middle"
                  letterSpacing="0.03em"
                >
                  Planning
                </text>
              </g>
            );
          })()}

          {/* Arrow: Planning -> Reflection */}
          <line
            x1={cascadeCx[2] + 18}
            y1={cascadeGlyphY}
            x2={cascadeCx[3] - 22}
            y2={cascadeGlyphY}
            stroke="var(--fg-2)"
            strokeWidth="1.5"
            markerEnd="url(#ftArrowMuted)"
          />

          {/* Reflection — small open circular arrow */}
          {(() => {
            const x = cascadeCx[3];
            const y = cascadeGlyphY;
            const r = 10;
            const startAngle = 40 * (Math.PI / 180);
            const endAngle = 350 * (Math.PI / 180);
            const sx = x + r * Math.cos(startAngle);
            const sy = y - r * Math.sin(startAngle);
            const ex = x + r * Math.cos(endAngle);
            const ey = y - r * Math.sin(endAngle);
            return (
              <g>
                <path
                  d={`M ${sx} ${sy} A ${r} ${r} 0 1 0 ${ex} ${ey}`}
                  stroke="var(--color-midnight)"
                  strokeWidth="1.5"
                  fill="none"
                />
                {(() => {
                  const tangentAngle = endAngle - Math.PI / 2;
                  const aLen = 4;
                  const aSpread = 2;
                  const tipX = ex;
                  const tipY = ey;
                  const backX = tipX - aLen * Math.cos(tangentAngle);
                  const backY = tipY + aLen * Math.sin(tangentAngle);
                  const perpX = aSpread * Math.sin(tangentAngle);
                  const perpY = aSpread * Math.cos(tangentAngle);
                  return (
                    <path
                      d={`M ${backX + perpX} ${backY + perpY} L ${tipX} ${tipY} L ${backX - perpX} ${backY - perpY}`}
                      stroke="var(--color-midnight)"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  );
                })()}
                <text
                  x={x}
                  y={y + r + 16}
                  fontFamily="var(--font-mono)"
                  fontSize="10"
                  fill="var(--fg-3)"
                  textAnchor="middle"
                  letterSpacing="0.03em"
                >
                  Reflection
                </text>
              </g>
            );
          })()}

          {/* ── Animated flowing dot along cascade chain ── */}
          {visible && !reducedMotion && (
            <circle r="4" fill="var(--accent)" opacity="0.8">
              <animateMotion
                dur="3s"
                repeatCount="indefinite"
                path={flowContinuousD}
              />
              <animate
                attributeName="opacity"
                values="0;0.8;0.8;0"
                keyTimes="0;0.1;0.85;1"
                dur="3s"
                repeatCount="indefinite"
              />
            </circle>
          )}

          {/* ── Cascade caption ────────────────────────────── */}
          <text
            x={600}
            y={cascadeBandBottom + 24}
            fontFamily="var(--font-mono)"
            fontSize="11"
            fill="var(--fg-2)"
            textAnchor="middle"
            letterSpacing="0.06em"
          >
            Symptom at the end. Root cause at the start.
          </text>
        </g>
      </svg>
    </figure>
  );
}
