"use client";

/**
 * CodeDocIndexingDiagram — Three retrieval paths
 *
 * Three horizontal lanes, left to right:
 * 1. Indexed retrieval: Codebase → Parse → Extract → Embed → Store → Context Window
 * 2. Runtime exploration: Codebase → grep → read file → follow imports → Context Window
 * 3. No retrieval (failure): Training knowledge → Context Window → phantom API error
 *
 * IntersectionObserver triggers entrance + SMIL animations.
 * CSS transition entrance: lanes reveal top-to-bottom staggered.
 * Animated dots flow along defined paths; Lane 2 is thicker/slower.
 * No violet accent — uses var(--status-danger) only for the phantom API error.
 * Bottom lane visually dimmer with var(--fg-3).
 */

import { useEffect, useRef, useState } from "react";

export function CodeDocIndexingDiagram() {
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
  const laneH = 80;
  const laneGap = 30;
  const lane1Y = 40;
  const lane2Y = lane1Y + laneH + laneGap;
  const lane3Y = lane2Y + laneH + laneGap;

  const codebaseX = 40;
  const pipeStartX = 160;
  const pipeStepW = 130;
  const ctxX = 920;
  const ctxW = 180;
  const ctxY = 30;
  const ctxH = 340;

  const stageW = 100;
  const stageH = 36;
  const stageRx = 4;

  /* ── Lane 1 stage centers (for path) ─────────────────── */
  const lane1CY = lane1Y + laneH / 2;
  const l1Stages = [0, 1, 2, 3].map((i) => ({
    left: pipeStartX + i * pipeStepW,
    right: pipeStartX + i * pipeStepW + stageW,
    cx: pipeStartX + i * pipeStepW + stageW / 2,
  }));

  /* ── Lane 2 stage layout ─────────────────────────────── */
  const lane2CY = lane2Y + laneH / 2;
  const l2StepW = pipeStepW + 14;
  const l2Labels = ["grep", "read file", "follow imports"];
  const l2Widths = [stageW, stageW, 130];
  const l2Stages = l2Labels.map((_, i) => {
    const x = pipeStartX + i * l2StepW;
    const w = l2Widths[i];
    return { left: x, right: x + w, cx: x + w / 2 };
  });

  /* ── Lane 3 layout ───────────────────────────────────── */
  const lane3CY = lane3Y + laneH / 2;
  const trainingW = 150;

  /* ── Path definitions (string) ───────────────────────── */
  // Lane 1: codebase icon right edge → through each stage center → into context window
  const lane1Path = [
    `M ${codebaseX + 34} ${lane1CY}`,
    `L ${l1Stages[0].cx} ${lane1CY}`,
    `L ${l1Stages[1].cx} ${lane1CY}`,
    `L ${l1Stages[2].cx} ${lane1CY}`,
    `L ${l1Stages[3].cx} ${lane1CY}`,
    `L ${ctxX} ${lane1CY}`,
  ].join(" ");

  // Lane 2: codebase → through each tool → into context window (same Y)
  const lane2Path = [
    `M ${codebaseX + 34} ${lane2CY}`,
    `L ${l2Stages[0].cx} ${lane2CY}`,
    `L ${l2Stages[1].cx} ${lane2CY}`,
    `L ${l2Stages[2].cx} ${lane2CY}`,
    `L ${ctxX} ${lane2CY}`,
  ].join(" ");

  // Lane 3: training knowledge right edge → into context window
  const lane3Path = [
    `M ${codebaseX + trainingW + 4} ${lane3CY}`,
    `L ${ctxX} ${lane3CY}`,
  ].join(" ");

  const animateProps = !reducedMotion && visible;

  return (
    <figure
      ref={figureRef}
      role="img"
      aria-label="Three retrieval paths: indexed retrieval pipeline, runtime exploration tools, and no-retrieval failure mode feeding into a shared context window"
      style={{ margin: 0, width: "100%", marginInline: "auto" }}
    >
      <svg
        viewBox="0 0 1200 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        {/* ── Marker definitions ──────────────────────────── */}
        <defs>
          <marker
            id="cdiArrow"
            viewBox="0 0 10 10"
            refX="10"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path
              d="M 0 1 L 10 5 L 0 9"
              fill="none"
              stroke="var(--color-midnight)"
              strokeWidth="1.5"
            />
          </marker>
          <marker
            id="cdiArrowDim"
            viewBox="0 0 10 10"
            refX="10"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path
              d="M 0 1 L 10 5 L 0 9"
              fill="none"
              stroke="var(--fg-3)"
              strokeWidth="1.5"
            />
          </marker>
          <marker
            id="cdiArrowDanger"
            viewBox="0 0 10 10"
            refX="10"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path
              d="M 0 1 L 10 5 L 0 9"
              fill="none"
              stroke="var(--status-danger)"
              strokeWidth="1.5"
            />
          </marker>

          {/* ── Motion paths ──────────────────────────────── */}
          <path id="cdiLane1Flow" d={lane1Path} fill="none" />
          <path id="cdiLane2Flow" d={lane2Path} fill="none" />
          <path id="cdiLane3Flow" d={lane3Path} fill="none" />
        </defs>

        {/* ── Static pipeline connector lines (25% opacity) ─ */}
        <line
          x1={codebaseX + 34}
          y1={lane1CY}
          x2={ctxX}
          y2={lane1CY}
          stroke="var(--color-midnight)"
          strokeWidth="1"
          opacity="0.25"
        />
        <line
          x1={codebaseX + 34}
          y1={lane2CY}
          x2={ctxX}
          y2={lane2CY}
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          opacity="0.25"
        />
        <line
          x1={codebaseX + trainingW}
          y1={lane3CY}
          x2={ctxX}
          y2={lane3CY}
          stroke="var(--fg-3)"
          strokeWidth="1"
          opacity="0.25"
          strokeDasharray="6 4"
        />

        {/* ════════════════════════════════════════════════════
            LANE 1 — Indexed retrieval
            ════════════════════════════════════════════════════ */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
            transitionDelay: "0s",
          }}
        >
          {/* Lane label */}
          <text
            x="18"
            y={lane1Y + 8}
            fontFamily="var(--font-mono)"
            fontSize="9"
            fill="var(--fg-2)"
            letterSpacing="0.08em"
            textAnchor="middle"
            transform={`rotate(-90, 18, ${lane1Y + 8})`}
          >
            INDEXED
          </text>

          {/* Codebase icon */}
          <g transform={`translate(${codebaseX}, ${lane1CY - 18})`}>
            <rect
              x="0"
              y="0"
              width="28"
              height="36"
              rx="3"
              stroke="var(--color-midnight)"
              strokeWidth="1.5"
              fill="var(--bg-surface)"
            />
            <line x1="7" y1="10" x2="21" y2="10" stroke="var(--color-midnight)" strokeWidth="1" />
            <line x1="7" y1="16" x2="21" y2="16" stroke="var(--color-midnight)" strokeWidth="1" />
            <line x1="7" y1="22" x2="17" y2="22" stroke="var(--color-midnight)" strokeWidth="1" />
            <path
              d="M 0 6 L 0 2 Q 0 0 2 0 L 10 0 L 12 4 L 28 4"
              stroke="var(--color-midnight)"
              strokeWidth="1.5"
              fill="none"
            />
          </g>

          {/* Arrow: codebase → first stage */}
          <line
            x1={codebaseX + 34}
            y1={lane1CY}
            x2={pipeStartX - 4}
            y2={lane1CY}
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            markerEnd="url(#cdiArrow)"
          />

          {/* Pipeline stages */}
          {["Parse", "Extract", "Embed", "Store"].map((label, i) => {
            const x = l1Stages[i].left;
            const y = lane1CY - stageH / 2;
            return (
              <g key={label}>
                <rect
                  x={x}
                  y={y}
                  width={stageW}
                  height={stageH}
                  rx={stageRx}
                  stroke="var(--color-midnight)"
                  strokeWidth="1.5"
                  fill="var(--bg-surface)"
                />
                <text
                  x={x + stageW / 2}
                  y={y + stageH / 2}
                  fontFamily="var(--font-display)"
                  fontSize="13"
                  fontWeight="600"
                  fill="var(--color-midnight)"
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  {label}
                </text>
                {/* Arrow to next stage */}
                {i < 3 && (
                  <line
                    x1={x + stageW}
                    y1={lane1CY}
                    x2={x + pipeStepW - 4}
                    y2={lane1CY}
                    stroke="var(--color-midnight)"
                    strokeWidth="1.5"
                    markerEnd="url(#cdiArrow)"
                  />
                )}
              </g>
            );
          })}

          {/* Arrow: Store → Context Window */}
          <line
            x1={l1Stages[3].right}
            y1={lane1CY}
            x2={ctxX - 4}
            y2={lane1CY}
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            markerEnd="url(#cdiArrow)"
          />

          {/* Symbol labels below pipeline */}
          <text
            x={l1Stages[1].cx + pipeStepW / 2}
            y={lane1CY + stageH / 2 + 18}
            fontFamily="var(--font-mono)"
            fontSize="10"
            fill="var(--fg-2)"
            textAnchor="middle"
            letterSpacing="0.02em"
          >
            getUserById, createUser
          </text>
        </g>

        {/* ════════════════════════════════════════════════════
            LANE 2 — Runtime exploration
            ════════════════════════════════════════════════════ */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
            transitionDelay: "0.15s",
          }}
        >
          {/* Lane label */}
          <text
            x="18"
            y={lane2Y + 8}
            fontFamily="var(--font-mono)"
            fontSize="9"
            fill="var(--fg-2)"
            letterSpacing="0.08em"
            textAnchor="middle"
            transform={`rotate(-90, 18, ${lane2Y + 8})`}
          >
            RUNTIME
          </text>

          {/* Codebase icon */}
          <g transform={`translate(${codebaseX}, ${lane2CY - 18})`}>
            <rect
              x="0"
              y="0"
              width="28"
              height="36"
              rx="3"
              stroke="var(--color-midnight)"
              strokeWidth="1.5"
              fill="var(--bg-surface)"
            />
            <line x1="7" y1="10" x2="21" y2="10" stroke="var(--color-midnight)" strokeWidth="1" />
            <line x1="7" y1="16" x2="21" y2="16" stroke="var(--color-midnight)" strokeWidth="1" />
            <line x1="7" y1="22" x2="17" y2="22" stroke="var(--color-midnight)" strokeWidth="1" />
            <path
              d="M 0 6 L 0 2 Q 0 0 2 0 L 10 0 L 12 4 L 28 4"
              stroke="var(--color-midnight)"
              strokeWidth="1.5"
              fill="none"
            />
          </g>

          {/* Arrow: codebase → first tool */}
          <line
            x1={codebaseX + 34}
            y1={lane2CY}
            x2={pipeStartX - 4}
            y2={lane2CY}
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            markerEnd="url(#cdiArrow)"
          />

          {/* Tool stages */}
          {l2Labels.map((label, i) => {
            const x = l2Stages[i].left;
            const y = lane2CY - stageH / 2;
            const w = l2Widths[i];
            return (
              <g key={label}>
                <rect
                  x={x}
                  y={y}
                  width={w}
                  height={stageH}
                  rx={stageRx}
                  stroke="var(--color-midnight)"
                  strokeWidth="1.5"
                  fill="var(--bg-surface)"
                />
                <text
                  x={x + w / 2}
                  y={y + stageH / 2}
                  fontFamily="var(--font-mono)"
                  fontSize="12"
                  fill="var(--color-midnight)"
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  {label}
                </text>
                {/* Arrow to next tool */}
                {i < 2 && (
                  <line
                    x1={x + w}
                    y1={lane2CY}
                    x2={x + l2StepW - 4}
                    y2={lane2CY}
                    stroke="var(--color-midnight)"
                    strokeWidth="1.5"
                    markerEnd="url(#cdiArrow)"
                  />
                )}
              </g>
            );
          })}

          {/* Thicker arrow: follow imports → Context Window */}
          <line
            x1={l2Stages[2].right}
            y1={lane2CY}
            x2={ctxX - 4}
            y2={lane2CY}
            stroke="var(--color-midnight)"
            strokeWidth="2.5"
            markerEnd="url(#cdiArrow)"
          />

          {/* "variable cost" label */}
          <text
            x={(l2Stages[2].right + ctxX) / 2}
            y={lane2CY - 12}
            fontFamily="var(--font-mono)"
            fontSize="10"
            fill="var(--fg-2)"
            textAnchor="middle"
            letterSpacing="0.02em"
          >
            variable cost
          </text>
        </g>

        {/* ════════════════════════════════════════════════════
            LANE 3 — No retrieval (failure, dimmer)
            ════════════════════════════════════════════════════ */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
            transitionDelay: "0.3s",
          }}
        >
          {/* Lane label */}
          <text
            x="18"
            y={lane3Y + 8}
            fontFamily="var(--font-mono)"
            fontSize="9"
            fill="var(--fg-3)"
            letterSpacing="0.08em"
            textAnchor="middle"
            transform={`rotate(-90, 18, ${lane3Y + 8})`}
          >
            NONE
          </text>

          {/* "Training knowledge" box */}
          <rect
            x={codebaseX}
            y={lane3CY - stageH / 2}
            width={trainingW}
            height={stageH}
            rx={stageRx}
            stroke="var(--fg-3)"
            strokeWidth="1.5"
            fill="var(--bg-surface)"
            strokeDasharray="4 3"
          />
          <text
            x={codebaseX + trainingW / 2}
            y={lane3CY}
            fontFamily="var(--font-display)"
            fontSize="12"
            fontWeight="600"
            fill="var(--fg-3)"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            Training knowledge
          </text>

          {/* Arrow: Training knowledge → Context Window */}
          <line
            x1={codebaseX + trainingW}
            y1={lane3CY}
            x2={ctxX - 4}
            y2={lane3CY}
            stroke="var(--fg-3)"
            strokeWidth="1.5"
            strokeDasharray="6 4"
            markerEnd="url(#cdiArrowDim)"
          />

          {/* Branching arrow from midpoint down to phantom API */}
          {(() => {
            const branchX = 540;
            const phantomY = lane3CY + 44;
            return (
              <g>
                {/* Vertical drop */}
                <line
                  x1={branchX}
                  y1={lane3CY}
                  x2={branchX}
                  y2={phantomY - 4}
                  stroke="var(--fg-3)"
                  strokeWidth="1.5"
                />
                {/* Horizontal to phantom box */}
                <line
                  x1={branchX}
                  y1={phantomY}
                  x2={branchX + 60}
                  y2={phantomY}
                  stroke="var(--status-danger)"
                  strokeWidth="1.5"
                  markerEnd="url(#cdiArrowDanger)"
                />
                {/* Phantom API callout */}
                <rect
                  x={branchX + 68}
                  y={phantomY - 15}
                  width="210"
                  height="30"
                  rx="3"
                  stroke="var(--status-danger)"
                  strokeWidth="1.5"
                  fill="var(--bg-surface)"
                >
                  {/* Red flash/pulse animation on the phantom API box */}
                  {animateProps && (
                    <>
                      <animate
                        attributeName="stroke-opacity"
                        values="1;0.3;1"
                        dur="1.8s"
                        begin="2.5s"
                        repeatCount="3"
                      />
                      <animate
                        attributeName="stroke-width"
                        values="1.5;3;1.5"
                        dur="1.8s"
                        begin="2.5s"
                        repeatCount="3"
                      />
                    </>
                  )}
                </rect>
                <text
                  x={branchX + 68 + 105}
                  y={phantomY}
                  fontFamily="var(--font-mono)"
                  fontSize="11"
                  fill="var(--status-danger)"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  textDecoration="line-through"
                >
                  userService.findByEmail
                  {animateProps && (
                    <animate
                      attributeName="opacity"
                      values="1;0.3;1"
                      dur="1.8s"
                      begin="2.5s"
                      repeatCount="3"
                    />
                  )}
                </text>
              </g>
            );
          })()}
        </g>

        {/* ════════════════════════════════════════════════════
            CONTEXT WINDOW (shared, right side)
            ════════════════════════════════════════════════════ */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease",
            transitionDelay: "0.45s",
          }}
        >
          <rect
            x={ctxX}
            y={ctxY}
            width={ctxW}
            height={ctxH}
            rx="6"
            stroke="var(--color-midnight)"
            strokeWidth="2"
            fill="var(--bg-surface)"
          />
          <text
            x={ctxX + ctxW / 2}
            y={ctxY + 26}
            fontFamily="var(--font-display)"
            fontSize="15"
            fontWeight="700"
            fill="var(--color-midnight)"
            textAnchor="middle"
          >
            Context
          </text>
          <text
            x={ctxX + ctxW / 2}
            y={ctxY + 44}
            fontFamily="var(--font-display)"
            fontSize="15"
            fontWeight="700"
            fill="var(--color-midnight)"
            textAnchor="middle"
          >
            Window
          </text>

          {/* Lane entry indicators on Context Window */}
          {[lane1CY, lane2CY, lane3CY].map((y, i) => (
            <line
              key={i}
              x1={ctxX}
              y1={y}
              x2={ctxX + 8}
              y2={y}
              stroke={i === 2 ? "var(--fg-3)" : "var(--color-midnight)"}
              strokeWidth={i === 2 ? 1 : 1.5}
            />
          ))}
        </g>

        {/* ════════════════════════════════════════════════════
            ANIMATED DOTS (SMIL)
            ════════════════════════════════════════════════════ */}
        {animateProps && (
          <>
            {/* Lane 1 dot — flows through Parse→Extract→Embed→Store→Context */}
            <circle r="5" fill="var(--color-midnight)" opacity="0.85">
              <animateMotion
                dur="3.5s"
                begin="0.6s"
                repeatCount="indefinite"
                fill="freeze"
              >
                <mpath href="#cdiLane1Flow" />
              </animateMotion>
              <animate
                attributeName="opacity"
                values="0;0.85;0.85;0"
                keyTimes="0;0.05;0.9;1"
                dur="3.5s"
                begin="0.6s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Lane 2 dot — thicker & slower, flows through grep→read→follow→Context */}
            <circle r="7" fill="var(--color-midnight)" opacity="0.7">
              <animateMotion
                dur="5.5s"
                begin="1.0s"
                repeatCount="indefinite"
                fill="freeze"
              >
                <mpath href="#cdiLane2Flow" />
              </animateMotion>
              <animate
                attributeName="opacity"
                values="0;0.7;0.7;0"
                keyTimes="0;0.05;0.9;1"
                dur="5.5s"
                begin="1.0s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Lane 3 dot — dim, flows training→context */}
            <circle r="4" fill="var(--fg-3)" opacity="0.5">
              <animateMotion
                dur="3s"
                begin="1.5s"
                repeatCount="indefinite"
                fill="freeze"
              >
                <mpath href="#cdiLane3Flow" />
              </animateMotion>
              <animate
                attributeName="opacity"
                values="0;0.5;0.5;0"
                keyTimes="0;0.05;0.9;1"
                dur="3s"
                begin="1.5s"
                repeatCount="indefinite"
              />
            </circle>
          </>
        )}

        {/* ── Diagram caption ────────────────────────────── */}
        <text
          x="600"
          y="394"
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--fg-3)"
          textAnchor="middle"
          letterSpacing="0.14em"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease",
            transitionDelay: "0.6s",
          }}
        >
          THREE RETRIEVAL PATHS
        </text>
      </svg>
    </figure>
  );
}
