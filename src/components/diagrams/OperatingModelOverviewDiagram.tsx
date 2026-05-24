/**
 * OperatingModelOverviewDiagram — Pillar II at a Glance
 *
 * Five concept cards showing the operating model as a flow:
 *
 *   Left: "Skills" (the reusable unit)
 *     -> Centre-top: "Agent Catalog" (the registry) — accent border
 *     <- Right-top: "Power Users" (three-tier distribution)
 *   Centre-bottom: "CoE & Enablement" (the governing body) connects to all above
 *   Far right: "Adoption Patterns" (the failure modes) — dashed connection
 *
 * Throughline at bottom in display italic.
 * ONE accent: Agent Catalog card border.
 *
 * Animated: flowing dots along connector paths (SMIL), staggered
 * fade+slide entrance via IntersectionObserver + CSS transitions.
 */

"use client";

import { useEffect, useRef, useState } from "react";

export function OperatingModelOverviewDiagram() {
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

  /* ── Layout constants (scaled to 1200-wide viewBox) ── */
  const svgW = 1200;
  const svgH = 492;

  const cardW = 216;
  const cardH = 110;
  const cardRx = 6;

  /* Card positions (centre-based), proportionally scaled */
  const skillsCx = 169;
  const skillsCy = 138;

  const catalogCx = 508;
  const catalogCy = 102;

  const powerCx = 815;
  const powerCy = 102;

  const coeCx = 508;
  const coeCy = 286;

  const adoptionCx = 1046;
  const adoptionCy = 286;

  /* ── Card renderer ────────────────────────────────── */
  function cardRect(
    cx: number,
    cy: number,
    opts: {
      label: string;
      sub: string;
      accent?: boolean;
      dashed?: boolean;
    }
  ) {
    const x = cx - cardW / 2;
    const y = cy - cardH / 2;
    return (
      <g>
        <rect
          x={x}
          y={y}
          width={cardW}
          height={cardH}
          rx={cardRx}
          stroke={
            opts.accent
              ? "var(--accent)"
              : opts.dashed
                ? "var(--fg-3)"
                : "var(--color-midnight)"
          }
          strokeWidth={opts.accent ? 2 : 1.5}
          strokeDasharray={opts.dashed ? "6 4" : undefined}
          fill="var(--bg-surface)"
        />
        <text
          x={cx}
          y={cy - 8}
          fontFamily="var(--font-display)"
          fontSize="15"
          fontWeight="600"
          fill={opts.accent ? "var(--accent)" : "var(--color-midnight)"}
          textAnchor="middle"
        >
          {opts.label}
        </text>
        <text
          x={cx}
          y={cy + 16}
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--fg-3)"
          textAnchor="middle"
          letterSpacing="0.02em"
        >
          {opts.sub}
        </text>
      </g>
    );
  }

  /* ── Arrow path d-strings for motion paths ─────────── */
  // 0: Skills -> Agent Catalog
  const p0 = `M ${skillsCx + cardW / 2 + 6} ${skillsCy - 12} L ${catalogCx - cardW / 2 - 12} ${catalogCy}`;
  // 1: Power Users -> Agent Catalog
  const p1 = `M ${powerCx - cardW / 2 - 6} ${powerCy} L ${catalogCx + cardW / 2 + 12} ${catalogCy}`;
  // 2: CoE -> Skills (governs) — L-shaped path
  const p2 = `M ${coeCx - cardW / 2 - 6} ${coeCy - 22} L ${skillsCx + 30} ${coeCy - 22} L ${skillsCx + 30} ${skillsCy + cardH / 2 + 12}`;
  // 3: CoE -> Agent Catalog (curates) — vertical
  const p3 = `M ${coeCx} ${coeCy - cardH / 2 - 6} L ${catalogCx} ${catalogCy + cardH / 2 + 12}`;
  // 4: CoE -> Power Users (enables) — L-shaped path
  const p4 = `M ${coeCx + cardW / 2 + 6} ${coeCy - 22} L ${powerCx - 30} ${coeCy - 22} L ${powerCx - 30} ${powerCy + cardH / 2 + 12}`;
  // 5: CoE -> Adoption Patterns (mitigates)
  const p5 = `M ${coeCx + cardW / 2 + 6} ${coeCy} L ${adoptionCx - cardW / 2 - 12} ${adoptionCy}`;

  const motionPaths = [p0, p1, p2, p3, p4, p5];

  return (
    <figure
      ref={figRef}
      role="img"
      aria-label="Operating model overview — five concept cards: Skills, Agent Catalog, Power Users, CoE and Enablement, and Adoption Patterns, connected by directional arrows showing the flow from reusable capability to governed, findable asset"
      style={{ margin: 0, width: "100%", marginInline: "auto" }}
    >
      {/* Entrance transition styles */}
      <style>{`
        .omo-enter {
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .omo-enter.omo-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .omo-d1 { transition-delay: 0s; }
        .omo-d2 { transition-delay: 0.12s; }
        .omo-d3 { transition-delay: 0.20s; }
        .omo-d4 { transition-delay: 0.32s; }
        .omo-d5 { transition-delay: 0.44s; }
        .omo-d6 { transition-delay: 0.56s; }
        .omo-d7 { transition-delay: 0.68s; }
      `}</style>

      <svg
        viewBox={`0 0 ${svgW} ${svgH}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        <defs>
          {/* Solid arrow — midnight */}
          <marker
            id="omoArrow"
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

          {/* Muted arrow — fg-2 */}
          <marker
            id="omoArrowMuted"
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

          {/* Dashed arrow — fg-3 */}
          <marker
            id="omoArrowDashed"
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
              stroke="var(--fg-3)"
              strokeWidth="1.5"
            />
          </marker>

          {/* Motion paths for flowing dots */}
          {motionPaths.map((d, i) => (
            <path key={`omoMP-${i}`} id={`omoFlow${i}`} d={d} />
          ))}
        </defs>

        {/* ═══════════════════════════════════════════════════
            CONCEPT CARDS (staggered entrance in flow order)
            ═══════════════════════════════════════════════════ */}

        {/* Skills — the reusable unit */}
        <g className={`omo-enter omo-d1 ${visible ? "omo-visible" : ""}`}>
          {cardRect(skillsCx, skillsCy, {
            label: "Skills",
            sub: "the reusable unit",
          })}
        </g>

        {/* Agent Catalog — the registry (ACCENT) */}
        <g className={`omo-enter omo-d2 ${visible ? "omo-visible" : ""}`}>
          {cardRect(catalogCx, catalogCy, {
            label: "Agent Catalog",
            sub: "the registry",
            accent: true,
          })}
        </g>

        {/* Power Users — three-tier distribution */}
        <g className={`omo-enter omo-d3 ${visible ? "omo-visible" : ""}`}>
          {cardRect(powerCx, powerCy, {
            label: "Power Users",
            sub: "three-tier distribution",
          })}
        </g>

        {/* CoE & Enablement — the governing body */}
        <g className={`omo-enter omo-d4 ${visible ? "omo-visible" : ""}`}>
          {cardRect(coeCx, coeCy, {
            label: "CoE & Enablement",
            sub: "the governing body",
          })}
        </g>

        {/* Adoption Patterns — the failure modes */}
        <g className={`omo-enter omo-d5 ${visible ? "omo-visible" : ""}`}>
          {cardRect(adoptionCx, adoptionCy, {
            label: "Adoption Patterns",
            sub: "the failure modes",
            dashed: true,
          })}
        </g>

        {/* ═══════════════════════════════════════════════════
            STATIC ARROW RAILS (25% opacity)
            ═══════════════════════════════════════════════════ */}
        <g className={`omo-enter omo-d6 ${visible ? "omo-visible" : ""}`}>
          {/* Skills -> Agent Catalog */}
          <line
            x1={skillsCx + cardW / 2 + 6}
            y1={skillsCy - 12}
            x2={catalogCx - cardW / 2 - 12}
            y2={catalogCy}
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            opacity="0.25"
            markerEnd="url(#omoArrow)"
          />
          <text
            x={(skillsCx + cardW / 2 + catalogCx - cardW / 2) / 2}
            y={skillsCy - 36}
            fontFamily="var(--font-mono)"
            fontSize="10"
            fill="var(--fg-2)"
            textAnchor="middle"
            letterSpacing="0.04em"
          >
            publish
          </text>

          {/* Power Users -> Agent Catalog */}
          <line
            x1={powerCx - cardW / 2 - 6}
            y1={powerCy}
            x2={catalogCx + cardW / 2 + 12}
            y2={catalogCy}
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            opacity="0.25"
            markerEnd="url(#omoArrow)"
          />
          <text
            x={(powerCx - cardW / 2 + catalogCx + cardW / 2) / 2}
            y={powerCy - 24}
            fontFamily="var(--font-mono)"
            fontSize="10"
            fill="var(--fg-2)"
            textAnchor="middle"
            letterSpacing="0.04em"
          >
            consume
          </text>

          {/* CoE -> Skills (governs) — L-shaped */}
          <path
            d={p2}
            stroke="var(--color-midnight)"
            strokeWidth="1"
            fill="none"
            opacity="0.25"
            markerEnd="url(#omoArrowMuted)"
          />
          <text
            x={skillsCx - 16}
            y={coeCy - 34}
            fontFamily="var(--font-mono)"
            fontSize="9"
            fill="var(--fg-3)"
            textAnchor="end"
            letterSpacing="0.04em"
          >
            governs
          </text>

          {/* CoE -> Agent Catalog (curates) — vertical */}
          <line
            x1={coeCx}
            y1={coeCy - cardH / 2 - 6}
            x2={catalogCx}
            y2={catalogCy + cardH / 2 + 12}
            stroke="var(--color-midnight)"
            strokeWidth="1"
            opacity="0.25"
            markerEnd="url(#omoArrowMuted)"
          />
          <text
            x={coeCx + 18}
            y={(coeCy - cardH / 2 + catalogCy + cardH / 2) / 2 + 2}
            fontFamily="var(--font-mono)"
            fontSize="9"
            fill="var(--fg-3)"
            textAnchor="start"
            letterSpacing="0.04em"
          >
            curates
          </text>

          {/* CoE -> Power Users (enables) — L-shaped */}
          <path
            d={p4}
            stroke="var(--color-midnight)"
            strokeWidth="1"
            fill="none"
            opacity="0.25"
            markerEnd="url(#omoArrowMuted)"
          />
          <text
            x={powerCx + 16}
            y={coeCy - 34}
            fontFamily="var(--font-mono)"
            fontSize="9"
            fill="var(--fg-3)"
            textAnchor="start"
            letterSpacing="0.04em"
          >
            enables
          </text>

          {/* CoE -> Adoption Patterns (mitigates) — dashed */}
          <line
            x1={coeCx + cardW / 2 + 6}
            y1={coeCy}
            x2={adoptionCx - cardW / 2 - 12}
            y2={adoptionCy}
            stroke="var(--fg-3)"
            strokeWidth="1"
            strokeDasharray="6 4"
            opacity="0.25"
            markerEnd="url(#omoArrowDashed)"
          />
          <text
            x={(coeCx + cardW / 2 + adoptionCx - cardW / 2) / 2}
            y={coeCy + 22}
            fontFamily="var(--font-mono)"
            fontSize="9"
            fill="var(--fg-3)"
            textAnchor="middle"
            letterSpacing="0.04em"
          >
            mitigates
          </text>
        </g>

        {/* ── Flowing dots (rendered only when visible) ──── */}
        {visible && (
          <g>
            {motionPaths.map((_, i) => {
              const isDashed = i === 5;
              return (
                <circle
                  key={`dot-${i}`}
                  r="4"
                  fill={isDashed ? "var(--fg-3)" : "var(--color-midnight)"}
                  opacity={isDashed ? 0.6 : 0.8}
                >
                  <animateMotion
                    dur={i >= 2 ? "2.8s" : "2s"}
                    repeatCount="indefinite"
                    keyPoints="0;1"
                    keyTimes="0;1"
                    calcMode="linear"
                    begin={`${i * 0.4}s`}
                  >
                    <mpath href={`#omoFlow${i}`} />
                  </animateMotion>
                </circle>
              );
            })}
          </g>
        )}

        {/* ═══════════════════════════════════════════════════
            THROUGHLINE
            ═══════════════════════════════════════════════════ */}
        <g className={`omo-enter omo-d7 ${visible ? "omo-visible" : ""}`}>
          <text
            x={svgW / 2}
            y={svgH - 34}
            fontFamily="var(--font-display)"
            fontSize="13"
            fontStyle="italic"
            fill="var(--fg-2)"
            textAnchor="middle"
          >
            Capability becomes an asset only when reusable, governed, and
            findable.
          </text>
        </g>
      </svg>
    </figure>
  );
}
