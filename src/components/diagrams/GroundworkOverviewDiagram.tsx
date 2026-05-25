/**
 * GroundworkOverviewDiagram — Pillar I at a Glance
 *
 * Six concept cards in a 3x2 grid showing the Groundwork concepts
 * as a connected system. Dependency arrows link cards; Governance & Risk
 * sits centre-bottom as the hub node with the ONE accent border.
 *
 * Top row:  Operating Model & Maturity -> Build . Buy . Boost -> Token Sourcing
 * Bottom row: Security Architecture <- Governance & Risk -> FinOps
 *
 * Bottom throughline in display italic:
 * "AI is an operating decision before it is a technology one."
 *
 * Animated: flowing dots along connector paths (SMIL), staggered
 * fade+slide entrance via IntersectionObserver + CSS transitions.
 */

"use client";

import { useEffect, useRef, useState } from "react";

export function GroundworkOverviewDiagram() {
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

    if (reducedMotion) {
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
  }, [reducedMotion]);

  /* ── Layout constants (scaled to 1200-wide viewBox) ── */
  const cardW = 308;
  const cardH = 98;
  const colGap = 68;
  const rowGap = 92;

  const gridW = cardW * 3 + colGap * 2;
  const offsetX = (1200 - gridW) / 2;

  const topY = 46;
  const botY = topY + cardH + rowGap;

  const col = (c: number) => offsetX + c * (cardW + colGap);
  const midX = (c: number) => col(c) + cardW / 2;
  const midY = (row: number) => (row === 0 ? topY : botY) + cardH / 2;

  /* ── Card data ──────────────────────────────────────── */
  const cards: {
    label: string;
    sub: string;
    col: number;
    row: number;
    accent?: boolean;
  }[] = [
    { label: "Operating Model", sub: "& Maturity", col: 0, row: 0 },
    { label: "Build · Buy · Boost", sub: "strategy mix", col: 1, row: 0 },
    { label: "Token Sourcing", sub: "supply chain", col: 2, row: 0 },
    { label: "Security Architecture", sub: "threat model", col: 0, row: 1 },
    {
      label: "Governance & Risk",
      sub: "central hub",
      col: 1,
      row: 1,
      accent: true,
    },
    { label: "FinOps", sub: "cost control", col: 2, row: 1 },
  ];

  /* ── Arrow connections ─────────────────────────────── */
  const arrows: { from: number; to: number }[] = [
    { from: 0, to: 1 }, // Operating Model -> Build/Buy/Boost
    { from: 2, to: 5 }, // Token Sourcing -> FinOps
    { from: 4, to: 0 }, // Governance -> Operating Model
    { from: 4, to: 1 }, // Governance -> Build/Buy/Boost
    { from: 4, to: 2 }, // Governance -> Token Sourcing
    { from: 4, to: 3 }, // Governance -> Security Architecture
    { from: 4, to: 5 }, // Governance -> FinOps
  ];

  /**
   * Compute connection points on card edges.
   * Pick the edge closest to the target centre.
   */
  function edgePoint(
    cardIdx: number,
    towardIdx: number,
    inset: number
  ): { x: number; y: number } {
    const c = cards[cardIdx];
    const t = cards[towardIdx];
    const cx = midX(c.col);
    const cy = midY(c.row);
    const tx = midX(t.col);
    const ty = midY(t.row);
    const dx = tx - cx;
    const dy = ty - cy;

    const absX = Math.abs(dx);
    const absY = Math.abs(dy);

    if (absX / (cardW / 2) > absY / (cardH / 2)) {
      return {
        x: cx + (dx > 0 ? cardW / 2 + inset : -cardW / 2 - inset),
        y: cy,
      };
    }
    return {
      x: cx,
      y: cy + (dy > 0 ? cardH / 2 + inset : -cardH / 2 - inset),
    };
  }

  /* ── Build motion-path d-strings for each arrow ────── */
  function arrowPath(from: number, to: number): string {
    const start = edgePoint(from, to, 3);
    const end = edgePoint(to, from, 3);

    return `M ${start.x} ${start.y} L ${end.x} ${end.y}`;
  }

  return (
    <figure
      ref={figRef}
      role="img"
      aria-label="Pillar I — The Groundwork at a Glance: six interconnected concepts with Governance and Risk as the central hub"
      style={{ margin: 0, width: "100%", marginInline: "auto" }}
    >
      {/* Entrance transition styles */}
      <style>{`
        .go-enter {
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .go-enter.go-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .go-d1 { transition-delay: 0s; }
        .go-d2 { transition-delay: 0.10s; }
        .go-d3 { transition-delay: 0.20s; }
        .go-d4 { transition-delay: 0.30s; }
        .go-d5 { transition-delay: 0.40s; }
        .go-d6 { transition-delay: 0.50s; }
        .go-d7 { transition-delay: 0.60s; }
        .go-d8 { transition-delay: 0.70s; }
      `}</style>

      <svg
        viewBox="0 0 1200 492"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        <defs>
          {/* Standard arrow — midnight */}
          <marker
            id="goArrow"
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

          {/* Accent arrow — governance spokes */}
          <marker
            id="goArrowAccent"
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
              stroke="var(--accent)"
              strokeWidth="1.5"
              opacity="0.5"
            />
          </marker>

          {/* Muted arrow — cross-row deps */}
          <marker
            id="goArrowMuted"
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
          {arrows.map(({ from, to }, i) => (
            <path key={`mp-${i}`} id={`goFlow${i}`} d={arrowPath(from, to)} />
          ))}
        </defs>

        {/* ── Section title ──────────────────────────────── */}
        <g
          className={`go-enter go-d1 ${visible ? "go-visible" : ""}`}
        >
          <text
            x={600}
            y={28}
            fontFamily="var(--font-mono)"
            fontSize="10"
            fill="var(--fg-3)"
            textAnchor="middle"
            letterSpacing="0.14em"
          >
            PILLAR I — THE GROUNDWORK
          </text>
        </g>

        {/* ── Static arrow rails (25% opacity) ──────────── */}
        <g
          className={`go-enter go-d7 ${visible ? "go-visible" : ""}`}
        >
          {arrows.map(({ from, to }, i) => {
            const isGovernance = from === 4;
            const isCrossRow = cards[from].row !== cards[to].row;

            let strokeColor = "var(--color-midnight)";
            let strokeW = 1.5;
            let dashArray: string | undefined;

            if (isGovernance) {
              strokeColor = "var(--accent)";
              strokeW = 1;
              dashArray = "4 3";
            } else if (isCrossRow) {
              strokeColor = "var(--fg-3)";
              strokeW = 1;
            }

            const markerEnd = isGovernance
              ? "url(#goArrowAccent)"
              : isCrossRow
                ? "url(#goArrowMuted)"
                : "url(#goArrow)";

            return (
              <path
                key={`rail-${i}`}
                d={arrowPath(from, to)}
                stroke={strokeColor}
                strokeWidth={strokeW}
                opacity={0.25}
                strokeDasharray={dashArray}
                fill="none"
                markerEnd={markerEnd}
              />
            );
          })}
        </g>

        {/* ── Cards (staggered entrance) ─────────────────── */}
        {cards.map((card, i) => {
          const x = col(card.col);
          const y = card.row === 0 ? topY : botY;
          const cx = x + cardW / 2;
          const cy = y + cardH / 2;
          const delay = i + 2; // d2..d7

          return (
            <g
              key={`card-${i}`}
              className={`go-enter go-d${delay} ${visible ? "go-visible" : ""}`}
            >
              <rect
                x={x}
                y={y}
                width={cardW}
                height={cardH}
                rx={6}
                stroke={card.accent ? "var(--accent)" : "var(--border)"}
                strokeWidth={card.accent ? 2 : 1}
                fill="var(--bg-surface)"
              />
              <text
                x={cx}
                y={cy - 8}
                fontFamily="var(--font-display)"
                fontSize="15"
                fontWeight="600"
                fill={
                  card.accent ? "var(--accent)" : "var(--color-midnight)"
                }
                textAnchor="middle"
              >
                {card.label}
              </text>
              <text
                x={cx}
                y={cy + 14}
                fontFamily="var(--font-mono)"
                fontSize="10"
                fill="var(--fg-3)"
                textAnchor="middle"
                letterSpacing="0.04em"
              >
                {card.sub}
              </text>
            </g>
          );
        })}

        {/* ── Flowing dots (rendered only when visible and motion allowed) ──── */}
        {visible && !reducedMotion && (
          <g>
            {arrows.map(({ from }, i) => {
              const isGovernance = from === 4;
              return (
                <circle
                  key={`dot-${i}`}
                  r="4"
                  fill={isGovernance ? "var(--accent)" : "var(--color-midnight)"}
                  opacity={isGovernance ? 0.6 : 0.8}
                >
                  <animateMotion
                    dur="2s"
                    repeatCount="indefinite"
                    keyPoints="0;1"
                    keyTimes="0;1"
                    calcMode="linear"
                    begin={`${i * 0.3}s`}
                  >
                    <mpath href={`#goFlow${i}`} />
                  </animateMotion>
                </circle>
              );
            })}
          </g>
        )}

        {/* ── Throughline ─────────────────────────────────── */}
        <g
          className={`go-enter go-d8 ${visible ? "go-visible" : ""}`}
        >
          <text
            x={600}
            y={botY + cardH + 62}
            fontFamily="var(--font-display)"
            fontSize="13"
            fontStyle="italic"
            fill="var(--fg-2)"
            textAnchor="middle"
          >
            AI is an operating decision before it is a technology one.
          </text>
        </g>
      </svg>
    </figure>
  );
}
