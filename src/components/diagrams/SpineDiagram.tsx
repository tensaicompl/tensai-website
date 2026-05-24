"use client";

/**
 * SpineDiagram — The 18-Concept Spine Map
 *
 * Three horizontal rows of concept cards (01-06, 07-12, 13-18),
 * connected by a vertical accent "spine" line through the centre.
 * Cards within each row are linked by subtle horizontal lines.
 * Each row is labelled by its pillar affinity.
 *
 * Animations (CSS transition entrance):
 *   - Spine line draws top-to-bottom on viewport entry
 *   - Concept card rows stagger in per pillar (row 0 → 1 → 2)
 *   - A dot flows continuously along the spine via SMIL animateMotion
 *   - Static spine line shown at 25% opacity as a rail
 *
 * Single accent: var(--accent) on the spine line only.
 */

import { useEffect, useRef, useState } from "react";

export function SpineDiagram() {
  /* ── Intersection Observer ──────────────────────────── */
  const figureRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mql.matches);
    const motionHandler = (e: MediaQueryListEvent) =>
      setReduceMotion(e.matches);
    mql.addEventListener("change", motionHandler);

    // IntersectionObserver at 20% threshold
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (figureRef.current) {
      observer.observe(figureRef.current);
    }

    return () => {
      mql.removeEventListener("change", motionHandler);
      observer.disconnect();
    };
  }, []);

  /* ── Data ──────────────────────────────────────────── */
  const concepts = [
    { n: "01", label: "Model" },
    { n: "02", label: "Harness" },
    { n: "03", label: "Tools" },
    { n: "04", label: "Ctx Eng" },
    { n: "05", label: "Ctx Mgmt" },
    { n: "06", label: "Memory" },
    { n: "07", label: "RAG" },
    { n: "08", label: "Skills" },
    { n: "09", label: "Workflows" },
    { n: "10", label: "Agents" },
    { n: "11", label: "Handoffs" },
    { n: "12", label: "Multi-Agent" },
    { n: "13", label: "Steering" },
    { n: "14", label: "Evals" },
    { n: "15", label: "Guardrails" },
    { n: "16", label: "AFK" },
    { n: "17", label: "Code Index" },
    { n: "18", label: "Standards" },
  ];

  const rows = [
    {
      pillar: "I",
      name: "The Groundwork",
      concepts: concepts.slice(0, 6),
    },
    {
      pillar: "II",
      name: "The Operating Model",
      concepts: concepts.slice(6, 12),
    },
    {
      pillar: "III",
      name: "The Craft",
      concepts: concepts.slice(12, 18),
    },
  ];

  /* ── Layout constants (proportionally wider) ────────── */
  const svgW = 1200;
  const cardW = 130;
  const cardH = 52;
  const cardRx = 6;
  const cols = 6;
  const cardGap = 22;
  const rowGap = 100;
  const topPad = 60;
  const pillarLabelW = 32;

  const totalCardsW = cols * cardW + (cols - 1) * cardGap;
  const offsetX = (svgW - totalCardsW - pillarLabelW) / 2 + pillarLabelW;

  const cardX = (col: number) => offsetX + col * (cardW + cardGap);
  const rowY = (row: number) => topPad + row * (cardH + rowGap);

  const spineX = svgW / 2;
  const svgH = topPad + 3 * cardH + 2 * rowGap + 80;

  /* ── Spine geometry ────────────────────────────────── */
  const spineY1 = topPad - 14;
  const spineY2 = rowY(2) + cardH + 14;
  const spineLength = spineY2 - spineY1;

  /* ── Animation helpers ─────────────────────────────── */
  const shouldAnimate = visible && !reduceMotion;

  // Spine draw duration
  const spineDuration = 0.8; // seconds
  // Row stagger: each row waits for spine + its own delay
  const rowDelay = (ri: number) =>
    spineDuration + 0.15 + ri * 0.25; // seconds

  return (
    <figure
      ref={figureRef}
      role="img"
      aria-label="The 18-Concept Spine Map — 18 AI concepts arranged in three rows by pillar, connected by a central spine"
      style={{
        margin: 0,
        width: "100%",
        marginInline: "auto",
      }}
    >
      {/* ── Scoped animation styles ───────────────────── */}
      <style>{`
        .spine-rail {
          opacity: 0.25;
        }
        .spine-draw {
          stroke-dasharray: ${spineLength};
          stroke-dashoffset: ${shouldAnimate ? 0 : spineLength};
          transition: stroke-dashoffset ${spineDuration}s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .spine-draw--hidden {
          stroke-dashoffset: ${spineLength};
        }
        .spine-row {
          opacity: ${shouldAnimate ? 1 : 0};
          transform: translateY(${shouldAnimate ? "0" : "12px"});
        }
        ${[0, 1, 2]
          .map(
            (ri) => `
        .spine-row--${ri} {
          transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${rowDelay(ri)}s,
                      transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${rowDelay(ri)}s;
        }`
          )
          .join("")}
        .spine-row--hidden {
          opacity: 0;
          transform: translateY(12px);
        }
        .spine-junction {
          opacity: ${shouldAnimate ? 1 : 0};
          transition: opacity 0.3s ease ${spineDuration + 0.1}s;
        }
        .spine-junction--hidden {
          opacity: 0;
        }
        .spine-label-top,
        .spine-label-bottom,
        .spine-caption {
          opacity: ${shouldAnimate ? 1 : 0};
          transition: opacity 0.5s ease ${spineDuration}s;
        }
        .spine-label-top--hidden,
        .spine-label-bottom--hidden,
        .spine-caption--hidden {
          opacity: 0;
        }
        ${reduceMotion ? `.spine-flow-dot { display: none; }` : ""}
      `}</style>

      <svg
        viewBox={`0 0 ${svgW} ${svgH}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        <defs>
          {/* Spine dot marker */}
          <marker
            id="spDot"
            viewBox="0 0 10 10"
            refX="5"
            refY="5"
            markerWidth="6"
            markerHeight="6"
          >
            <circle cx="5" cy="5" r="3" fill="var(--accent)" />
          </marker>

          {/* Flow dot path (vertical spine) */}
          <path
            id="spineMotionPath"
            d={`M ${spineX} ${spineY1} L ${spineX} ${spineY2}`}
          />
        </defs>

        {/* =====================================================
            TITLE
            ===================================================== */}
        <text
          x={spineX}
          y={28}
          fontFamily="var(--font-display)"
          fontSize="18"
          fontWeight="600"
          fill="var(--color-midnight)"
          textAnchor="middle"
          letterSpacing="0.04em"
          className={`spine-label-top${visible ? "" : " spine-label-top--hidden"}`}
        >
          The 18-Concept Spine
        </text>

        {/* =====================================================
            STATIC SPINE RAIL (25% opacity, always visible)
            ===================================================== */}
        <line
          x1={spineX}
          y1={spineY1}
          x2={spineX}
          y2={spineY2}
          stroke="var(--accent)"
          strokeWidth="2"
          className="spine-rail"
        />

        {/* =====================================================
            ANIMATED SPINE LINE (draws top-to-bottom)
            ===================================================== */}
        <line
          x1={spineX}
          y1={spineY1}
          x2={spineX}
          y2={spineY2}
          stroke="var(--accent)"
          strokeWidth="2"
          markerStart="url(#spDot)"
          markerEnd="url(#spDot)"
          className={`spine-draw${visible ? "" : " spine-draw--hidden"}`}
        />

        {/* =====================================================
            FLOWING DOT (SMIL animateMotion along spine)
            ===================================================== */}
        {!reduceMotion && (
          <circle
            r="4"
            fill="var(--accent)"
            opacity="0.8"
            className="spine-flow-dot"
          >
            <animateMotion
              dur="3s"
              repeatCount="indefinite"
              rotate="auto"
            >
              <mpath href="#spineMotionPath" />
            </animateMotion>
          </circle>
        )}

        {/* Spine junction dots at each row centre */}
        {[0, 1, 2].map((r) => (
          <circle
            key={`sp-junction-${r}`}
            cx={spineX}
            cy={rowY(r) + cardH / 2}
            r={5}
            fill="var(--accent)"
            className={`spine-junction${visible ? "" : " spine-junction--hidden"}`}
          />
        ))}

        {/* =====================================================
            ROWS (stagger in per pillar)
            ===================================================== */}
        {rows.map((row, ri) => {
          const y = rowY(ri);
          const labelX = offsetX - 40;

          return (
            <g
              key={row.pillar}
              className={`spine-row spine-row--${ri}${visible ? "" : " spine-row--hidden"}`}
            >
              {/* -- Pillar numeral (left side) ----------- */}
              <text
                x={labelX}
                y={y + cardH / 2}
                fontFamily="var(--font-display)"
                fontSize="15"
                fontWeight="700"
                fill="var(--color-midnight)"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                {row.pillar}
              </text>

              {/* -- Pillar name (small, below numeral) --- */}
              <text
                x={labelX}
                y={y + cardH / 2 + 17}
                fontFamily="var(--font-mono)"
                fontSize="9"
                fill="var(--fg-3)"
                textAnchor="middle"
                letterSpacing="0.04em"
              >
                {row.name}
              </text>

              {/* -- Horizontal connector line (row) ------ */}
              <line
                x1={cardX(0) + cardW / 2}
                y1={y + cardH / 2}
                x2={cardX(5) + cardW / 2}
                y2={y + cardH / 2}
                stroke="var(--border)"
                strokeWidth="1"
              />

              {/* -- Concept cards ----------------------- */}
              {row.concepts.map((concept, ci) => {
                const cx = cardX(ci);
                const cy = y;

                return (
                  <g key={concept.n}>
                    {/* Card background */}
                    <rect
                      x={cx}
                      y={cy}
                      width={cardW}
                      height={cardH}
                      rx={cardRx}
                      stroke="var(--border)"
                      strokeWidth="1"
                      fill="var(--bg-surface)"
                    />

                    {/* Concept number */}
                    <text
                      x={cx + 12}
                      y={cy + 19}
                      fontFamily="var(--font-mono)"
                      fontSize="10"
                      fill="var(--fg-3)"
                      letterSpacing="0.06em"
                    >
                      {concept.n}
                    </text>

                    {/* Concept name */}
                    <text
                      x={cx + 12}
                      y={cy + 37}
                      fontFamily="var(--font-mono)"
                      fontSize="11"
                      fill="var(--color-midnight)"
                      letterSpacing="0.02em"
                      fontWeight="500"
                    >
                      {concept.label}
                    </text>
                  </g>
                );
              })}
            </g>
          );
        })}

        {/* =====================================================
            SPINE LABEL
            ===================================================== */}
        <text
          x={spineX + 10}
          y={rowY(2) + cardH + 44}
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--accent)"
          textAnchor="middle"
          letterSpacing="0.08em"
          className={`spine-label-bottom${visible ? "" : " spine-label-bottom--hidden"}`}
        >
          SPINE
        </text>

        {/* =====================================================
            BOTTOM CAPTION
            ===================================================== */}
        <text
          x={spineX}
          y={svgH - 14}
          fontFamily="var(--font-mono)"
          fontSize="11"
          fill="var(--fg-2)"
          textAnchor="middle"
          letterSpacing="0.04em"
          className={`spine-caption${visible ? "" : " spine-caption--hidden"}`}
        >
          18 concepts. 3 pillars. One spine.
        </text>
      </svg>
    </figure>
  );
}
