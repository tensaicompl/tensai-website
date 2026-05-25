"use client";

import { useEffect, useRef, useState } from "react";

/**
 * FinopsDiagram — FinOps Four Levers & Metric Ladder
 *
 * Two sections side by side:
 *
 * LEFT — Four Levers (funnel): Vertical funnel narrowing top to bottom
 * with four horizontal bars, each progressively narrower:
 *   1. Model routing — Route to cheapest capable tier
 *   2. Context management — Remove tokens that don't earn their place
 *   3. Prompt caching — Reuse processed prefixes at 10% cost
 *   4. Semantic caching — Eliminate redundant calls entirely
 * Below funnel: "Cost per task: EUR 0.12"
 *
 * RIGHT — Metric Ladder: Four rungs stacked bottom to top:
 *   1. Provider billing (bottom)
 *   2. Cost per token
 *   3. Cost per task
 *   4. Cost per outcome (top) — accent element
 * Vertical arrow alongside with "climb to measure what matters".
 *
 * Single accent: var(--accent) on the "Cost per outcome" rung only.
 *
 * Animations:
 *   - Funnel bars narrow from full width to target width, staggered top-to-bottom
 *   - Ladder rungs fade+slide in bottom-to-top
 *   - Top rung (accent) pulses gently after appearing
 *   - All animations respect prefers-reduced-motion
 */

export function FinopsDiagram() {
  const figureRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
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

  /* ── Left section: Funnel layout ────────────────────── */
  const funnelCx = 280; // centre of funnel area
  const funnelTopY = 48;
  const barH = 40;
  const barGap = 20;
  const maxBarW = 460; // full width (animation start)
  const barWidths = [430, 340, 250, 170]; // target narrowed widths

  const levers = [
    { title: "Model routing", desc: "Route to cheapest capable tier" },
    { title: "Context management", desc: "Remove tokens that don't earn their place" },
    { title: "Prompt caching", desc: "Reuse processed prefixes at 10% cost" },
    { title: "Semantic caching", desc: "Eliminate redundant calls" },
  ];

  /* ── Right section: Metric ladder layout ────────────── */
  const ladderX = 700;
  const ladderW = 330;
  const ladderRungH = 36;
  const ladderGap = 28;
  const ladderBottomY = 340; // bottom rung baseline

  const rungs = [
    { label: "Provider billing", accent: false },
    { label: "Cost per token", accent: false },
    { label: "Cost per task", accent: false },
    { label: "Cost per outcome", accent: true },
  ];

  /* Arrow alongside ladder */
  const arrowX = ladderX + ladderW + 44;

  /* ── Entrance delay helpers ── */
  const d = reduceMotion ? 0 : 1; // multiplier: 0 = instant
  const entranceStyle = (delay: string): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(12px)",
    transition: `opacity 0.5s ease ${delay}, transform 0.5s ease ${delay}`,
  });

  return (
    <figure
      ref={figureRef}
      role="img"
      aria-label="FinOps diagram: four cost-reduction levers forming a narrowing funnel on the left, and a metric ladder climbing from provider billing to cost per outcome on the right"
      style={{ margin: 0, width: "100%", marginInline: "auto" }}
    >
      <svg
        viewBox="0 0 1200 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        {/* ── Style block for animations ─────────────────────── */}
        <style>{`
          @keyframes fo-pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.65; }
          }

          .fo-bar {
            transition: width 0.6s cubic-bezier(0.22, 1, 0.36, 1),
                        x 0.6s cubic-bezier(0.22, 1, 0.36, 1);
          }

          .fo-rung-group {
            transition: opacity 0.5s ease, transform 0.5s ease;
          }

          .fo-accent-rung {
            animation: fo-pulse 2.8s ease-in-out infinite;
            animation-delay: 2s;
          }

          @media (prefers-reduced-motion: reduce) {
            .fo-bar {
              transition: none !important;
            }
            .fo-rung-group {
              transition: none !important;
            }
            .fo-accent-rung {
              animation: none !important;
            }
          }
        `}</style>

        {/* ── Marker definitions & motion paths ────────────────── */}
        <defs>
          <marker
            id="foArrow"
            viewBox="0 0 10 10"
            refX="10"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9" fill="none" stroke="var(--color-midnight)" strokeWidth="1.5" />
          </marker>
          <marker
            id="foArrowUp"
            viewBox="0 0 10 10"
            refX="5"
            refY="0"
            markerWidth="7"
            markerHeight="7"
            orient="auto"
          >
            <path d="M 0 9 L 5 0 L 10 9" fill="none" stroke="var(--color-midnight)" strokeWidth="1.5" />
          </marker>

        </defs>

        {/* ════════════════════════════════════════════════════════
            LEFT SECTION — Four Levers (Funnel)
            ════════════════════════════════════════════════════════ */}

        {/* Section title */}
        <g style={entranceStyle(`${0 * d}s`)}>
          <text
            x={funnelCx}
            y={28}
            fontFamily="var(--font-display)"
            fontSize="14"
            fill="var(--color-midnight)"
            textAnchor="middle"
            fontWeight="600"
            letterSpacing="0.02em"
          >
            Four Levers
          </text>
        </g>

        {/* Funnel bars — animated narrowing */}
        {levers.map((lever, i) => {
          const targetW = barWidths[i];
          // Before visible: full width; after visible: narrow to target (CSS transition handles it)
          const currentW = reduceMotion ? targetW : (visible ? targetW : maxBarW);
          const currentX = funnelCx - currentW / 2;
          const y = funnelTopY + i * (barH + barGap);
          const barDelay = `${(0.15 + i * 0.15) * d}s`;
          const textDelay = `${(0.2 + i * 0.15) * d}s`;

          return (
            <g key={`fo-lever-${i}`}>
              {/* Bar rectangle — animates width */}
              <rect
                className="fo-bar"
                x={currentX}
                y={y}
                width={currentW}
                height={barH}
                rx="4"
                stroke="var(--color-midnight)"
                strokeWidth="1.5"
                fill="var(--bg-surface)"
                style={{ transitionDelay: barDelay }}
              />

              {/* Title */}
              <g style={entranceStyle(textDelay)}>
                <text
                  x={funnelCx}
                  y={y + 16}
                  fontFamily="var(--font-mono)"
                  fontSize="11"
                  fill="var(--color-midnight)"
                  textAnchor="middle"
                  fontWeight="600"
                  letterSpacing="0.02em"
                >
                  {lever.title}
                </text>
              </g>

              {/* Description */}
              <g style={entranceStyle(textDelay)}>
                <text
                  x={funnelCx}
                  y={y + 31}
                  fontFamily="var(--font-mono)"
                  fontSize="9"
                  fill="var(--fg-3)"
                  textAnchor="middle"
                  letterSpacing="0.04em"
                >
                  {lever.desc}
                </text>
              </g>
            </g>
          );
        })}

        {/* Funnel taper lines — left and right edges */}
        {[0, 1, 2].map((i) => {
          const w1 = barWidths[i];
          const w2 = barWidths[i + 1];
          const y1 = funnelTopY + i * (barH + barGap) + barH;
          const y2 = funnelTopY + (i + 1) * (barH + barGap);
          const x1 = funnelCx - w1 / 2;
          const x2 = funnelCx - w2 / 2;
          const taperDelay = `${(0.4 + i * 0.15) * d}s`;

          return (
            <g key={`fo-taper-${i}`} style={entranceStyle(taperDelay)}>
              {/* Left taper */}
              <line
                x1={x1} y1={y1}
                x2={x2} y2={y2}
                stroke="var(--border)"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              {/* Right taper */}
              <line
                x1={funnelCx + w1 / 2} y1={y1}
                x2={funnelCx + w2 / 2} y2={y2}
                stroke="var(--border)"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
            </g>
          );
        })}


        {/* Cost label below funnel */}
        {(() => {
          const labelY = funnelTopY + 3 * (barH + barGap) + barH + 54;

          return (
            <g style={entranceStyle(`${0.95 * d}s`)}>
              <rect
                x={funnelCx - 90}
                y={labelY - 14}
                width={180}
                height={30}
                rx="4"
                stroke="var(--color-midnight)"
                strokeWidth="1.5"
                fill="var(--bg-surface)"
              />
              <text
                x={funnelCx}
                y={labelY + 4}
                fontFamily="var(--font-mono)"
                fontSize="12"
                fill="var(--color-midnight)"
                textAnchor="middle"
                fontWeight="600"
                letterSpacing="0.02em"
              >
                Cost per task: EUR 0.12
              </text>
            </g>
          );
        })()}

        {/* ── Divider between sections ───────────────────────── */}
        <g style={entranceStyle(`${0.5 * d}s`)}>
          <line
            x1="600" y1="30"
            x2="600" y2="420"
            stroke="var(--border)"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        </g>

        {/* ════════════════════════════════════════════════════════
            RIGHT SECTION — Metric Ladder
            ════════════════════════════════════════════════════════ */}

        {/* Section title */}
        <g style={entranceStyle(`${0.6 * d}s`)}>
          <text
            x={ladderX + ladderW / 2}
            y={28}
            fontFamily="var(--font-display)"
            fontSize="14"
            fill="var(--color-midnight)"
            textAnchor="middle"
            fontWeight="600"
            letterSpacing="0.02em"
          >
            Metric Ladder
          </text>
        </g>

        {/* Ladder rungs — bottom to top, animated */}
        {rungs.map((rung, i) => {
          const y = ladderBottomY - i * (ladderRungH + ladderGap);
          const isAccent = rung.accent;

          // Bottom-to-top: rung 0 (bottom) appears first, rung 3 (top) last
          const staggerDelay = `${(0.7 + i * 0.18) * d}s`;
          const rungOpacity = reduceMotion ? 1 : (visible ? 1 : 0);
          const rungTranslateY = reduceMotion ? 0 : (visible ? 0 : 16);

          return (
            <g
              key={`fo-rung-${i}`}
              className={`fo-rung-group${isAccent && visible && !reduceMotion ? " fo-accent-rung" : ""}`}
              style={{
                opacity: rungOpacity,
                transform: `translateY(${rungTranslateY}px)`,
                transitionDelay: staggerDelay,
              }}
            >
              <rect
                x={ladderX}
                y={y}
                width={ladderW}
                height={ladderRungH}
                rx="4"
                stroke={isAccent ? "var(--accent)" : "var(--color-midnight)"}
                strokeWidth={isAccent ? 2 : 1.5}
                fill={isAccent ? "var(--accent)" : "var(--bg-surface)"}
                fillOpacity={isAccent ? 0.10 : 1}
              />
              <text
                x={ladderX + ladderW / 2}
                y={y + ladderRungH / 2 + 1}
                fontFamily="var(--font-mono)"
                fontSize={isAccent ? "12" : "11"}
                fill={isAccent ? "var(--accent)" : "var(--color-midnight)"}
                fontWeight={isAccent ? "700" : "500"}
                textAnchor="middle"
                dominantBaseline="middle"
                letterSpacing="0.02em"
              >
                {rung.label}
              </text>
            </g>
          );
        })}

        {/* Vertical connectors between rungs */}
        {[0, 1, 2].map((i) => {
          const y1 = ladderBottomY - i * (ladderRungH + ladderGap);
          const y2 = ladderBottomY - (i + 1) * (ladderRungH + ladderGap) + ladderRungH;
          const connDelay = `${(0.85 + i * 0.18) * d}s`;

          return (
            <g key={`fo-rung-conn-${i}`} style={entranceStyle(connDelay)}>
              <line
                x1={ladderX + ladderW / 2}
                y1={y1}
                x2={ladderX + ladderW / 2}
                y2={y2}
                stroke="var(--border)"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
            </g>
          );
        })}

        {/* Vertical arrow alongside ladder */}
        {(() => {
          const topRungY = ladderBottomY - 3 * (ladderRungH + ladderGap);
          const bottomRungY = ladderBottomY + ladderRungH;

          return (
            <g style={entranceStyle(`${1.5 * d}s`)}>
              <line
                x1={arrowX}
                y1={bottomRungY - 6}
                x2={arrowX}
                y2={topRungY + 6}
                stroke="var(--color-midnight)"
                strokeWidth="1.5"
                markerEnd="url(#foArrowUp)"
              />

              {/* Rotated label alongside arrow */}
              <text
                x={arrowX + 16}
                y={(bottomRungY + topRungY) / 2}
                fontFamily="var(--font-mono)"
                fontSize="9"
                fill="var(--fg-2)"
                textAnchor="middle"
                letterSpacing="0.04em"
                transform={`rotate(-90, ${arrowX + 16}, ${(bottomRungY + topRungY) / 2})`}
              >
                climb to measure what matters
              </text>
            </g>
          );
        })()}

        {/* Number labels for ladder rungs (bottom to top) */}
        {rungs.map((_, i) => {
          const y = ladderBottomY - i * (ladderRungH + ladderGap) + ladderRungH / 2;
          const numDelay = `${(0.7 + i * 0.18) * d}s`;

          return (
            <g key={`fo-rung-num-${i}`} style={entranceStyle(numDelay)}>
              <text
                x={ladderX - 16}
                y={y + 1}
                fontFamily="var(--font-mono)"
                fontSize="10"
                fill="var(--fg-3)"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                {i + 1}
              </text>
            </g>
          );
        })}

      </svg>
    </figure>
  );
}
