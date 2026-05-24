"use client";

/**
 * RagEvolutionsDiagram — Five-Rung Retrieval Ladder
 *
 * Vertical ladder with five horizontal bar rungs stacked bottom to top,
 * each slightly wider than the one below. Represents the evolution of
 * RAG retrieval strategies from naive dense top-k to self-correcting loops.
 *
 * Monochrome throughout; the single accent element is the top rung
 * (Self-correcting) highlighted in var(--accent) (violet).
 *
 * Animations:
 * - Bar fill: each rung expands from 0 width to full, staggered bottom-to-top.
 * - Feedback loop arc + SMIL dot on top rung.
 * - Vertical arrows fade in after all bars finish.
 */

import { useEffect, useRef, useState } from "react";

export function RagEvolutionsDiagram() {
  /* ── Intersection Observer ────────────────────────── */
  const figRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

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
  const ladderX = 120;
  const barH = 32;
  const gap = 22;
  const rungStep = barH + gap; // 54

  /* Five rungs, bottom to top */
  const rungs = [
    { label: "Naive", detail: "Dense top-k", width: 460 },
    { label: "Hybrid", detail: "Dense + sparse + reranker", width: 520 },
    { label: "Graph / Structured", detail: "Entity graph or RAPTOR tree", width: 580 },
    { label: "Agentic", detail: "Query decomposition + tool routing", width: 640 },
    { label: "Self-correcting", detail: "Retrieve-grade-requery loop", width: 700 },
  ];

  /* Y positions: bottom rung at y=360, top rung at y=360 - 4*54 = 144 */
  const bottomY = 360;
  const rungYs = rungs.map((_, i) => bottomY - i * rungStep);

  /* Right-side annotation area */
  const arrowX1 = 900;
  const arrowX2 = 1000;
  const arrowTop = rungYs[4] - 4;
  const arrowBot = rungYs[0] + barH + 4;

  /* Dashed "Most production systems" line between rung 1 and 2 */
  const dashY = (rungYs[0] + rungYs[1] + barH) / 2;

  /* Animation timing */
  const barDelay = 0.2; // seconds between each rung
  const totalBarTime = barDelay * (rungs.length - 1) + 0.6; // last bar transition duration 0.6s
  const arrowFadeDelay = totalBarTime + 0.1;

  /* Feedback loop on top rung */
  const loopCx = ladderX + rungs[4].width - 56;
  const loopCy = rungYs[4] + barH / 2;
  const loopR = 9;

  return (
    <figure
      ref={figRef}
      role="img"
      aria-label="Five-rung retrieval ladder showing RAG evolution from naive dense top-k to self-correcting retrieve-grade-requery loops, with increasing cost, complexity, and retrieval reliability"
      style={{ margin: 0, width: "100%", marginInline: "auto" }}
    >
      <svg
        viewBox="0 0 1200 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        {/* ── Marker definitions ──────────────────────────── */}
        <defs>
          <marker
            id="ragArrow"
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
          <marker
            id="ragArrowMuted"
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
              stroke="var(--fg-3)"
              strokeWidth="1.5"
            />
          </marker>
          <marker
            id="ragArrowAccent"
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
              stroke="var(--accent)"
              strokeWidth="1.5"
            />
          </marker>

          {/* Clip paths for bar fill animation — one per rung */}
          {rungs.map((rung, i) => (
            <clipPath key={`clip-${i}`} id={`ragBarClip${i}`}>
              <rect
                x={ladderX}
                y={rungYs[i] - 1}
                width={visible ? rung.width : 0}
                height={barH + 2}
                style={{
                  transition: `width 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${i * barDelay}s`,
                }}
              />
            </clipPath>
          ))}
        </defs>

        {/* ── Rung bars ───────────────────────────────────── */}
        {rungs.map((rung, i) => {
          const y = rungYs[i];
          const isTop = i === 4;
          const barStroke = isTop ? "var(--accent)" : "var(--color-midnight)";
          const barFill = "var(--bg-surface)";
          const labelFill = isTop ? "var(--accent)" : "var(--color-midnight)";
          const detailFill = "var(--fg-3)";

          return (
            <g key={rung.label} clipPath={`url(#ragBarClip${i})`}>
              {/* Bar */}
              <rect
                x={ladderX}
                y={y}
                width={rung.width}
                height={barH}
                rx={4}
                stroke={barStroke}
                strokeWidth="1.5"
                fill={barFill}
              />

              {/* Rung number */}
              <text
                x={ladderX - 16}
                y={y + barH / 2 + 1}
                fontFamily="var(--font-mono)"
                fontSize="12"
                fill="var(--fg-3)"
                textAnchor="end"
                dominantBaseline="central"
              >
                {i + 1}
              </text>

              {/* Primary label */}
              <text
                x={ladderX + 16}
                y={y + barH / 2 - 1}
                fontFamily="var(--font-display)"
                fontSize="14"
                fontWeight="600"
                fill={labelFill}
                dominantBaseline="central"
              >
                {rung.label}
              </text>

              {/* Detail label */}
              <text
                x={ladderX + rung.width - 16}
                y={y + barH / 2 - 1}
                fontFamily="var(--font-mono)"
                fontSize="11"
                fill={detailFill}
                textAnchor="end"
                dominantBaseline="central"
                letterSpacing="0.02em"
              >
                {rung.detail}
              </text>
            </g>
          );
        })}

        {/* ── Vertical ladder rails (left + right edges) ─── */}
        <line
          x1={ladderX}
          y1={rungYs[4] - 2}
          x2={ladderX}
          y2={rungYs[0] + barH + 2}
          stroke="var(--border)"
          strokeWidth="1"
        />
        <line
          x1={ladderX + rungs[0].width}
          y1={rungYs[4] + barH / 2}
          x2={ladderX + rungs[0].width}
          y2={rungYs[0] + barH + 2}
          stroke="var(--border)"
          strokeWidth="1"
          strokeDasharray="3 4"
        />

        {/* ── Dashed "Most production systems" line ────────── */}
        <line
          x1={ladderX - 24}
          y1={dashY}
          x2={ladderX + rungs[1].width + 24}
          y2={dashY}
          stroke="var(--fg-3)"
          strokeWidth="1"
          strokeDasharray="6 4"
        />
        <text
          x={ladderX + rungs[1].width + 32}
          y={dashY + 1}
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--fg-3)"
          dominantBaseline="central"
          letterSpacing="0.04em"
        >
          Most production systems
        </text>

        {/* ── Right-side vertical arrows (fade in after bars) ── */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transition: `opacity 0.5s ease ${arrowFadeDelay}s`,
          }}
        >
          {/* Arrow 1: Cost & complexity */}
          <line
            x1={arrowX1}
            y1={arrowBot}
            x2={arrowX1}
            y2={arrowTop}
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            markerEnd="url(#ragArrow)"
          />
          <text
            x={arrowX1}
            y={arrowTop - 14}
            fontFamily="var(--font-mono)"
            fontSize="10"
            fontWeight="600"
            fill="var(--color-midnight)"
            textAnchor="middle"
            letterSpacing="0.06em"
          >
            COST &amp;
          </text>
          <text
            x={arrowX1}
            y={arrowTop - 3}
            fontFamily="var(--font-mono)"
            fontSize="10"
            fontWeight="600"
            fill="var(--color-midnight)"
            textAnchor="middle"
            letterSpacing="0.06em"
          >
            COMPLEXITY
          </text>

          {/* Arrow 2: Retrieval reliability */}
          <line
            x1={arrowX2}
            y1={arrowBot}
            x2={arrowX2}
            y2={arrowTop}
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            markerEnd="url(#ragArrow)"
          />
          <text
            x={arrowX2}
            y={arrowTop - 14}
            fontFamily="var(--font-mono)"
            fontSize="10"
            fontWeight="600"
            fill="var(--color-midnight)"
            textAnchor="middle"
            letterSpacing="0.06em"
          >
            RETRIEVAL
          </text>
          <text
            x={arrowX2}
            y={arrowTop - 3}
            fontFamily="var(--font-mono)"
            fontSize="10"
            fontWeight="600"
            fill="var(--color-midnight)"
            textAnchor="middle"
            letterSpacing="0.06em"
          >
            RELIABILITY
          </text>
        </g>

        {/* ── Feedback loop arc + SMIL dot on top rung ──────── */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transition: `opacity 0.4s ease ${4 * barDelay + 0.3}s`,
          }}
        >
          <path
            id="ragFeedbackArc"
            d={`M ${loopCx + loopR} ${loopCy - 3}
                A ${loopR} ${loopR} 0 1 0 ${loopCx + loopR} ${loopCy + 3}`}
            stroke="var(--accent)"
            strokeWidth="1.5"
            fill="none"
            markerEnd="url(#ragArrowAccent)"
          />
          {/* Animated dot travelling along the arc */}
          <circle r="2.5" fill="var(--accent)">
            <animateMotion
              dur="2s"
              repeatCount="indefinite"
              path={`M ${loopCx + loopR} ${loopCy - 3}
                     A ${loopR} ${loopR} 0 1 0 ${loopCx + loopR} ${loopCy + 3}`}
            />
          </circle>
        </g>

        {/* ── "Fixes" annotations between rungs ───────────── */}
        {[
          { from: 0, to: 1, text: "fixes vocabulary mismatch" },
          { from: 1, to: 2, text: "fixes relational gaps" },
          { from: 2, to: 3, text: "fixes complex multi-part questions" },
          { from: 3, to: 4, text: "fixes undetected retrieval failures" },
        ].map(({ from, to, text }) => {
          const midY = (rungYs[from] + rungYs[to] + barH) / 2;
          return (
            <text
              key={text}
              x={ladderX + 16}
              y={midY + 1}
              fontFamily="var(--font-mono)"
              fontSize="9.5"
              fill="var(--fg-3)"
              dominantBaseline="central"
              letterSpacing="0.02em"
            >
              {"↑ " + text}
            </text>
          );
        })}

        {/* ── Title ───────────────────────────────────────── */}
        <text
          x={ladderX}
          y={rungYs[4] - 36}
          fontFamily="var(--font-display)"
          fontSize="16"
          fontWeight="700"
          fill="var(--color-midnight)"
          letterSpacing="0.02em"
        >
          Retrieval Ladder
        </text>
        <text
          x={ladderX}
          y={rungYs[4] - 18}
          fontFamily="var(--font-mono)"
          fontSize="11"
          fill="var(--fg-3)"
          letterSpacing="0.04em"
        >
          Five rungs of RAG sophistication
        </text>
      </svg>
    </figure>
  );
}
