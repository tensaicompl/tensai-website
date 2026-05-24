"use client";

/**
 * BuildBuyBoostDiagram — Build vs Buy vs Boost
 *
 * Three stacked horizontal bars showing the split between Model and
 * Harness investment across three strategies. Build is model-heavy,
 * Buy is vendor-owned (hatched), Boost is harness-heavy — the only
 * row with accent colour, because that is where practitioners work.
 *
 * Left-edge vertical arrow shows model commoditisation direction.
 * Single accent: var(--accent) on the Boost harness segment only.
 *
 * Animated: bar segments expand from zero width when scrolled into
 * view, staggered top-to-bottom. The vertical arrow draws itself
 * downward via stroke-dashoffset. Respects prefers-reduced-motion.
 */

import { useEffect, useRef, useState } from "react";

export function BuildBuyBoostDiagram() {
  /* ── Visibility via IntersectionObserver ───────────── */
  const figRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setVisible(true);
      return;
    }

    const el = figRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* ── Layout constants (scaled to 1200-wide viewBox) ── */
  const barLeft = 200;
  const barWidth = 800;
  const barHeight = 68;
  const rowGap = 34;
  const startY = 48;

  const rows = [
    {
      label: "Build",
      modelPct: 0.75,
      y: startY,
      annotation: "weights, training pipeline, retraining",
      delay: 0,
    },
    {
      label: "Buy",
      modelPct: 0.08,
      y: startY + barHeight + rowGap,
      annotation: "vendor owns the system",
      hatched: true,
      delay: 0.3,
    },
    {
      label: "Boost",
      modelPct: 0.25,
      y: startY + (barHeight + rowGap) * 2,
      annotation: "data, evals, orchestration, steering",
      accent: true,
      delay: 0.6,
    },
  ];

  const annotationX = barLeft + barWidth + 20;

  /* ── Arrow geometry ─────────────────────────────────── */
  const arrowX = 46;
  const arrowTop = rows[0].y + 8;
  const arrowBottom = rows[rows.length - 1].y + barHeight - 8;
  const arrowLength = arrowBottom - arrowTop;

  return (
    <figure
      ref={figRef}
      role="img"
      aria-label="Build vs Buy vs Boost: three strategies showing the split between model and harness investment, with Boost emphasising the harness"
      style={{
        margin: 0,
        width: "100%",
        marginInline: "auto",
      }}
    >
      <svg
        viewBox="0 0 1200 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        <defs>
          {/* Hatched / stipple pattern for Buy row */}
          <pattern
            id="bbbStipple"
            width="6"
            height="6"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="0.7" fill="var(--color-midnight)" opacity="0.15" />
            <circle cx="4" cy="4" r="0.7" fill="var(--color-midnight)" opacity="0.15" />
          </pattern>

          {/* Arrow marker for the vertical commoditisation arrow */}
          <marker
            id="bbbArrowDown"
            viewBox="0 0 10 10"
            refX="5"
            refY="10"
            markerWidth="7"
            markerHeight="7"
            orient="auto"
          >
            <path
              d="M 1 0 L 5 10 L 9 0"
              fill="none"
              stroke="var(--color-midnight)"
              strokeWidth="1.5"
            />
          </marker>
        </defs>

        {/* ── Column headers ──────────────────────────────── */}
        <text
          x={barLeft + 60}
          y={startY - 14}
          fontFamily="var(--font-mono)"
          fontSize="11"
          letterSpacing="0.14em"
          fill="var(--fg-3)"
        >
          MODEL
        </text>
        <text
          x={barLeft + barWidth - 60}
          y={startY - 14}
          fontFamily="var(--font-mono)"
          fontSize="11"
          letterSpacing="0.14em"
          fill="var(--fg-3)"
          textAnchor="end"
        >
          HARNESS
        </text>

        {/* ── Rows ────────────────────────────────────────── */}
        {rows.map((row) => {
          const modelW = barWidth * row.modelPct;
          const harnessW = barWidth - modelW;

          /* Current animated widths — 0 until visible, then full */
          const animModelW = visible ? modelW : 0;
          const animHarnessW = visible ? harnessW : 0;

          /* Base transition for segments */
          const modelTransition = `width 0.8s ease ${row.delay}s`;
          const harnessTransition = `width 0.8s ease ${row.delay + 0.15}s`;
          /* Boost harness gets extra delay for emphasis */
          const boostHarnessTransition = row.accent
            ? `width 0.8s ease ${row.delay + 0.4}s`
            : harnessTransition;

          return (
            <g key={row.label}>
              {/* Row label */}
              <text
                x={barLeft - 20}
                y={row.y + barHeight / 2}
                fontFamily="var(--font-display)"
                fontSize="18"
                fontWeight="700"
                fill="var(--color-midnight)"
                textAnchor="end"
                dominantBaseline="middle"
              >
                {row.label}
              </text>

              {/* Full bar outline */}
              <rect
                x={barLeft}
                y={row.y}
                width={barWidth}
                height={barHeight}
                rx="3"
                stroke="var(--border)"
                strokeWidth="1"
                fill="none"
              />

              {/* Model segment — grows from left */}
              <rect
                x={barLeft}
                y={row.y}
                width={animModelW}
                height={barHeight}
                rx={modelW === barWidth ? 3 : 0}
                fill={
                  row.hatched
                    ? "url(#bbbStipple)"
                    : "var(--color-midnight)"
                }
                opacity={row.hatched ? 1 : 0.1}
                style={{ transition: modelTransition }}
              />
              {/* Clean left corners on model segment */}
              {animModelW > 0 && (
                <rect
                  x={barLeft}
                  y={row.y}
                  width={Math.min(animModelW, 6)}
                  height={barHeight}
                  fill={
                    row.hatched
                      ? "url(#bbbStipple)"
                      : "var(--color-midnight)"
                  }
                  opacity={row.hatched ? 1 : 0.1}
                  rx="3"
                  style={{ transition: modelTransition }}
                />
              )}

              {/* Harness segment — hatched for Buy, accent for Boost */}
              {row.hatched ? (
                <rect
                  x={barLeft + modelW}
                  y={row.y}
                  width={animHarnessW}
                  height={barHeight}
                  fill="url(#bbbStipple)"
                  style={{ transition: harnessTransition }}
                />
              ) : row.accent ? (
                <g>
                  {/* Violet fill — fills last with emphasis */}
                  <rect
                    x={barLeft + modelW}
                    y={row.y}
                    width={animHarnessW}
                    height={barHeight}
                    fill="var(--accent)"
                    opacity="0.15"
                    style={{ transition: boostHarnessTransition }}
                  />
                  {/* Violet left border on harness */}
                  <line
                    x1={barLeft + modelW}
                    y1={row.y}
                    x2={barLeft + modelW}
                    y2={row.y + barHeight}
                    stroke="var(--accent)"
                    strokeWidth="2.5"
                    opacity={visible ? 1 : 0}
                    style={{ transition: `opacity 0.3s ease ${row.delay + 0.4}s` }}
                  />
                </g>
              ) : null}

              {/* Clean right corners */}
              <rect
                x={barLeft + barWidth - 6}
                y={row.y}
                width={6}
                height={barHeight}
                fill="none"
                rx="3"
              />

              {/* Divider line between model and harness (skip if hatched) */}
              {!row.hatched && (
                <line
                  x1={barLeft + modelW}
                  y1={row.y}
                  x2={barLeft + modelW}
                  y2={row.y + barHeight}
                  stroke="var(--border)"
                  strokeWidth="1"
                  opacity={visible ? 1 : 0}
                  style={{ transition: `opacity 0.3s ease ${row.delay + 0.1}s` }}
                />
              )}

              {/* Annotation text */}
              <text
                x={annotationX}
                y={row.y + barHeight / 2}
                fontFamily="var(--font-mono)"
                fontSize="11"
                fill={row.accent ? "var(--accent)" : "var(--fg-3)"}
                dominantBaseline="middle"
                letterSpacing="0.02em"
                opacity={visible ? 1 : 0}
                style={{ transition: `opacity 0.5s ease ${row.delay + 0.3}s` }}
              >
                {row.annotation}
              </text>
            </g>
          );
        })}

        {/* ── Left vertical arrow: "model commoditises" ───── */}
        <g>
          <line
            x1={arrowX}
            y1={arrowTop}
            x2={arrowX}
            y2={arrowBottom}
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            markerEnd="url(#bbbArrowDown)"
            strokeDasharray={arrowLength}
            strokeDashoffset={visible ? 0 : arrowLength}
            style={{ transition: "stroke-dashoffset 1.2s ease 0.2s" }}
          />

          {/* Travelling dot along the arrow path */}
          <circle
            cx={arrowX}
            cy={arrowTop}
            r="2.5"
            fill="var(--color-midnight)"
            opacity={visible ? 0.7 : 0}
          >
            {visible && (
              <animate
                attributeName="cy"
                from={arrowTop}
                to={arrowBottom}
                dur="1.2s"
                begin="0.2s"
                fill="freeze"
                calcMode="spline"
                keySplines="0.42 0 0.58 1"
                keyTimes="0;1"
              />
            )}
            {visible && (
              <animate
                attributeName="opacity"
                values="0;0.7;0.7;0"
                keyTimes="0;0.05;0.85;1"
                dur="1.2s"
                begin="0.2s"
                fill="freeze"
              />
            )}
          </circle>

          <text
            x={arrowX - 10}
            y={(arrowTop + arrowBottom) / 2}
            fontFamily="var(--font-mono)"
            fontSize="11"
            fill="var(--fg-2)"
            textAnchor="middle"
            letterSpacing="0.06em"
            transform={`rotate(-90, ${arrowX - 10}, ${(arrowTop + arrowBottom) / 2})`}
            opacity={visible ? 1 : 0}
            style={{ transition: "opacity 0.6s ease 0.6s" }}
          >
            model commoditises
          </text>
        </g>

        {/* ── Bottom annotation ────────────────────────────── */}
        <text
          x={barLeft + barWidth / 2}
          y={rows[rows.length - 1].y + barHeight + 42}
          fontFamily="var(--font-mono)"
          fontSize="11"
          fill="var(--fg-3)"
          textAnchor="middle"
          letterSpacing="0.06em"
          opacity={visible ? 1 : 0}
          style={{ transition: "opacity 0.5s ease 1s" }}
        >
          value accrues to the harness, not the model
        </text>
      </svg>
    </figure>
  );
}
