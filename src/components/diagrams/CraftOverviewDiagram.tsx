/**
 * CraftOverviewDiagram — Pillar III: The Craft at a Glance
 *
 * The 12 Craft concepts arranged as a layered architecture, bottom to top:
 *   Foundation -> Core -> Orchestration -> Quality -> Frontier
 *
 * Vertical arrows connect layers upward. "Harness Engineering" gets the ONE
 * accent border (it is the frame everything hangs on). A throughline quote
 * sits below the Foundation layer in display italic.
 *
 * Animated: layers reveal bottom-to-top with staggered CSS transitions,
 * flowing dots on vertical layer arrows (SMIL), triggered by
 * IntersectionObserver.
 */

"use client";

import { useEffect, useRef, useState } from "react";

export function CraftOverviewDiagram() {
  const figRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mql.matches);
    const motionHandler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mql.addEventListener("change", motionHandler);
    return () => mql.removeEventListener("change", motionHandler);
  }, []);

  useEffect(() => {
    const el = figRef.current;
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

  /* ── Layout constants (scaled to 1200-wide viewBox) ── */
  const cardH = 52;
  const cardR = 6;
  const bandGap = 50; // vertical space between layer bands (includes arrow room)
  const cardGap = 12; // horizontal gap between cards in a layer
  const padX = 37;
  const bandW = 1200 - padX * 2; // usable width

  /* Layer Y positions — Foundation at bottom, Frontier at top.
     SVG Y increases downward, so Foundation has the largest Y. */
  const foundationY = 470;
  const coreY = foundationY - bandGap - cardH; // 368
  const orchestrationY = coreY - bandGap - cardH; // 266
  const qualityY = orchestrationY - bandGap - cardH; // 164
  const frontierY = qualityY - bandGap - cardH; // 62

  const quoteY = foundationY + cardH + 40;

  /* ── Card layout helper ─────────────────────────── */
  function cards(count: number, y: number) {
    const w = (bandW - cardGap * (count - 1)) / count;
    return Array.from({ length: count }, (_, i) => ({
      x: padX + i * (w + cardGap),
      y,
      w,
    }));
  }

  /* ── Layer data (bottom-to-top reveal order) ──────── */
  const layers: {
    key: string;
    label: string;
    y: number;
    items: { text: string; accent?: boolean }[];
    delay: number; // stagger class index (bottom-to-top: foundation=1, frontier=5)
  }[] = [
    {
      key: "frontier",
      label: "FRONTIER",
      y: frontierY,
      items: [{ text: "AFK & Autonomous" }],
      delay: 5,
    },
    {
      key: "quality",
      label: "QUALITY",
      y: qualityY,
      items: [
        { text: "Evals & Observability" },
        { text: "Failure Taxonomy" },
        { text: "Code & Doc Indexing" },
      ],
      delay: 4,
    },
    {
      key: "orchestration",
      label: "ORCHESTRATION",
      y: orchestrationY,
      items: [{ text: "Multi-Agent" }, { text: "Steering" }],
      delay: 3,
    },
    {
      key: "core",
      label: "CORE",
      y: coreY,
      items: [
        { text: "Harness Engineering", accent: true },
        { text: "Memory & Context" },
        { text: "Tools & MCP" },
        { text: "RAG Evolutions" },
      ],
      delay: 2,
    },
    {
      key: "foundation",
      label: "FOUNDATION",
      y: foundationY,
      items: [{ text: "Agents vs Workflows" }, { text: "Five Patterns" }],
      delay: 1,
    },
  ];

  /* ── Arrow segments (bottom-of-lower -> top-of-upper, pointing up) ── */
  const arrowSegments = [
    { from: foundationY, to: coreY },
    { from: coreY, to: orchestrationY },
    { from: orchestrationY, to: qualityY },
    { from: qualityY, to: frontierY },
  ];

  const cx = 600; // diagram centre x

  return (
    <figure
      ref={figRef}
      role="img"
      aria-label="Pillar III — The Craft at a Glance: 12 concepts arranged in five layers from Foundation through Frontier"
      style={{ margin: 0, width: "100%", marginInline: "auto" }}
    >
      {/* Entrance transition styles — layers reveal bottom-to-top */}
      <style>{`
        .co-enter {
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .co-enter.co-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .co-d1 { transition-delay: 0s; }
        .co-d2 { transition-delay: 0.14s; }
        .co-d3 { transition-delay: 0.28s; }
        .co-d4 { transition-delay: 0.42s; }
        .co-d5 { transition-delay: 0.56s; }
        .co-d6 { transition-delay: 0.70s; }
        .co-d7 { transition-delay: 0.84s; }
      `}</style>

      <svg
        viewBox="0 0 1200 585"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        <defs>
          <marker
            id="coArrowUp"
            viewBox="0 0 10 10"
            refX="5"
            refY="1"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path
              d="M 1 9 L 5 1 L 9 9"
              fill="none"
              stroke="var(--color-midnight)"
              strokeWidth="1.5"
            />
          </marker>

          {/* Vertical motion paths for flowing dots (bottom-to-top) */}
          {arrowSegments.map(({ from, to }, i) => (
            <path
              key={`coMP-${i}`}
              id={`coFlow${i}`}
              d={`M ${cx} ${from - 5} L ${cx} ${to + cardH + 5}`}
            />
          ))}
        </defs>

        {/* ═══════════════════════════════════════════════════
            VERTICAL ARROWS between layers (static rails at 25% opacity)
            ═══════════════════════════════════════════════════ */}
        <g className={`co-enter co-d6 ${visible ? "co-visible" : ""}`}>
          {arrowSegments.map(({ from, to }, i) => (
            <line
              key={`arrow-${i}`}
              x1={cx}
              y1={from - 5}
              x2={cx}
              y2={to + cardH + 5}
              stroke="var(--color-midnight)"
              strokeWidth="1.5"
              opacity="0.25"
              markerEnd="url(#coArrowUp)"
            />
          ))}
        </g>

        {/* ═══════════════════════════════════════════════════
            LAYER CARDS + LABELS (bottom-to-top stagger)
            ═══════════════════════════════════════════════════ */}
        {layers.map((layer) => {
          const rects = cards(layer.items.length, layer.y);
          return (
            <g
              key={layer.key}
              className={`co-enter co-d${layer.delay} ${visible ? "co-visible" : ""}`}
            >
              {/* Layer label — left-aligned above band */}
              <text
                x={padX}
                y={layer.y - 10}
                fontFamily="var(--font-mono)"
                fontSize="9"
                fill="var(--fg-3)"
                letterSpacing="0.1em"
              >
                {layer.label}
              </text>

              {/* Concept cards */}
              {layer.items.map((item, i) => {
                const r = rects[i];
                const isAccent = item.accent === true;
                return (
                  <g key={`${layer.key}-${i}`}>
                    <rect
                      x={r.x}
                      y={r.y}
                      width={r.w}
                      height={cardH}
                      rx={cardR}
                      stroke={isAccent ? "var(--accent)" : "var(--border)"}
                      strokeWidth={isAccent ? 2 : 1}
                      fill="var(--bg-surface)"
                    />
                    <text
                      x={r.x + r.w / 2}
                      y={r.y + cardH / 2 + 5}
                      fontFamily="var(--font-mono)"
                      fontSize="12"
                      fill={
                        isAccent ? "var(--accent)" : "var(--color-midnight)"
                      }
                      fontWeight={isAccent ? 600 : 400}
                      textAnchor="middle"
                    >
                      {item.text}
                    </text>
                  </g>
                );
              })}
            </g>
          );
        })}

        {/* ── Flowing dots on vertical arrows (rendered only when visible) ── */}
        {visible && !reducedMotion && (
          <g>
            {arrowSegments.map((_, i) => (
              <circle
                key={`dot-${i}`}
                r="4"
                fill="var(--color-midnight)"
                opacity="0.8"
              >
                <animateMotion
                  dur="2.2s"
                  repeatCount="indefinite"
                  keyPoints="0;1"
                  keyTimes="0;1"
                  calcMode="linear"
                  begin={`${i * 0.5}s`}
                >
                  <mpath href={`#coFlow${i}`} />
                </animateMotion>
              </circle>
            ))}
          </g>
        )}

        {/* ═══════════════════════════════════════════════════
            THROUGHLINE QUOTE
            ═══════════════════════════════════════════════════ */}
        <g className={`co-enter co-d7 ${visible ? "co-visible" : ""}`}>
          <text
            x={cx}
            y={quoteY}
            fontFamily="var(--font-display)"
            fontSize="13"
            fontStyle="italic"
            fill="var(--fg-2)"
            textAnchor="middle"
          >
            An agent is a model plus a harness — everything hard lives in the
            harness.
          </text>
        </g>
      </svg>
    </figure>
  );
}
