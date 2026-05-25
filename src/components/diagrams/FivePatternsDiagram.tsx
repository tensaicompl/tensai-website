"use client";

/**
 * FivePatternsDiagram — Five Workflow Compositions
 *
 * A horizontal strip showing all five patterns side by side, in order of
 * increasing structural complexity: chaining, routing, parallelisation,
 * orchestrator-workers, evaluator-optimiser.
 *
 * Each pattern is a small abstract node-and-edge diagram.
 * Monochrome line art throughout; the single accent element is the
 * loop arrow in evaluator-optimiser (var(--accent), violet).
 *
 * Animations:
 * - IntersectionObserver triggers entrance (fade+slide, staggered per column)
 * - Edges draw themselves via stroke-dashoffset CSS transitions
 * - Static rails at 25% opacity underlie all animated edges
 * - SMIL flowing dots on every topology's edges (staggered begin times):
 *   1. Chaining — three dots flowing sequentially down each segment
 *   2. Routing — three dots fanning out from router to destinations
 *   3. Parallelisation — six dots: three fan-out, three converge
 *   4. Orchestrator-Workers — six dots: three dispatch, three return
 *   5. Evaluator-Optimiser — one accent dot circling the loop
 * - All animation respects prefers-reduced-motion
 */

import { useEffect, useRef, useState } from "react";

export function FivePatternsDiagram() {
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

  /* ── Layout constants ──────────────────────────────── */
  const colW = 240; // 1200 / 5
  const nodeR = 12;

  /* Column centres */
  const cx = [
    colW * 0 + colW / 2, // 120
    colW * 1 + colW / 2, // 360
    colW * 2 + colW / 2, // 600
    colW * 3 + colW / 2, // 840
    colW * 4 + colW / 2, // 1080
  ];

  /* Edge draw helper: total length for dash trick */
  const edgeStyle = (
    patternIndex: number,
    length: number
  ): React.CSSProperties =>
    reducedMotion
      ? {}
      : {
          strokeDasharray: length,
          strokeDashoffset: visible ? 0 : length,
          transition: `stroke-dashoffset 0.6s ease ${patternIndex * 0.3}s`,
        };

  /* Straight line length helper */
  const lineLen = (
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ): number => Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  /* Column entrance style */
  const colStyle = (index: number): React.CSSProperties =>
    reducedMotion
      ? { opacity: 1 }
      : {
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(18px)",
          transition: `opacity 0.5s ease ${index * 0.12}s, transform 0.5s ease ${index * 0.12}s`,
        };

  /* ── Loop path data for evaluator-optimiser ─────── */
  const genX = cx[4] - 34;
  const evalX = cx[4] + 34;
  const loopNodeY = 120;
  const loopTopD = `M ${genX + nodeR} ${loopNodeY - 7} Q ${cx[4]} ${loopNodeY - 42} ${evalX - nodeR} ${loopNodeY - 7}`;
  const loopBotD = `M ${evalX - nodeR} ${loopNodeY + 7} Q ${cx[4]} ${loopNodeY + 42} ${genX + nodeR} ${loopNodeY + 7}`;
  /* Combined full loop for the SMIL dot (top arc then bottom arc, forming a cycle) */
  const loopFullD = `M ${genX + nodeR} ${loopNodeY - 7} Q ${cx[4]} ${loopNodeY - 42} ${evalX - nodeR} ${loopNodeY - 7} L ${evalX - nodeR} ${loopNodeY + 7} Q ${cx[4]} ${loopNodeY + 42} ${genX + nodeR} ${loopNodeY + 7} Z`;

  return (
    <figure
      ref={figureRef}
      role="img"
      aria-label="Five workflow compositions in order of increasing structural complexity: chaining, routing, parallelisation, orchestrator-workers, evaluator-optimiser"
      style={{ margin: 0, width: "100%", marginInline: "auto" }}
    >
      <svg
        viewBox="0 0 1200 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        {/* ── Defs ────────────────────────────────────────── */}
        <defs>
          <marker
            id="fpArrow"
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
            id="fpArrowAccent"
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

          {/* ── Motion paths for SMIL dots ─────────────────── */}

          {/* 1. Chaining: node1 → gate → node2 → node3 (three segments) */}
          <path id="fpChainSeg1" d={`M ${cx[0]} ${60 + nodeR} L ${cx[0]} 92`} />
          <path id="fpChainSeg2" d={`M ${cx[0]} 108 L ${cx[0]} ${140 - nodeR}`} />
          <path id="fpChainSeg3" d={`M ${cx[0]} ${140 + nodeR} L ${cx[0]} ${210 - nodeR}`} />

          {/* 2. Routing: top → three bottom nodes */}
          <path id="fpRouteFan0" d={`M ${cx[1]} ${60 + nodeR} L ${cx[1] - 56} ${200 - nodeR}`} />
          <path id="fpRouteFan1" d={`M ${cx[1]} ${60 + nodeR} L ${cx[1]} ${200 - nodeR}`} />
          <path id="fpRouteFan2" d={`M ${cx[1]} ${60 + nodeR} L ${cx[1] + 56} ${200 - nodeR}`} />

          {/* 3. Parallelisation: top → three mid nodes, three mid → bottom */}
          <path id="fpParaDown0" d={`M ${cx[2]} ${60 + nodeR} L ${cx[2] - 56} ${140 - nodeR}`} />
          <path id="fpParaDown1" d={`M ${cx[2]} ${60 + nodeR} L ${cx[2]} ${140 - nodeR}`} />
          <path id="fpParaDown2" d={`M ${cx[2]} ${60 + nodeR} L ${cx[2] + 56} ${140 - nodeR}`} />
          <path id="fpParaUp0" d={`M ${cx[2] - 56} ${140 + nodeR} L ${cx[2]} ${210 - nodeR}`} />
          <path id="fpParaUp1" d={`M ${cx[2]} ${140 + nodeR} L ${cx[2]} ${210 - nodeR}`} />
          <path id="fpParaUp2" d={`M ${cx[2] + 56} ${140 + nodeR} L ${cx[2]} ${210 - nodeR}`} />

          {/* 4. Orchestrator-Workers: orch → three workers, three workers → orch-bottom */}
          <path id="fpOrchDown0" d={`M ${cx[3]} ${60 + nodeR} L ${cx[3] - 50} ${150 - nodeR}`} />
          <path id="fpOrchDown1" d={`M ${cx[3]} ${60 + nodeR} L ${cx[3]} ${150 - nodeR}`} />
          <path id="fpOrchDown2" d={`M ${cx[3]} ${60 + nodeR} L ${cx[3] + 50} ${150 - nodeR}`} />
          <path id="fpOrchUp0" d={`M ${cx[3] - 50} ${150 + nodeR} L ${cx[3]} ${220 - nodeR}`} />
          <path id="fpOrchUp1" d={`M ${cx[3]} ${150 + nodeR} L ${cx[3]} ${220 - nodeR}`} />
          <path id="fpOrchUp2" d={`M ${cx[3] + 50} ${150 + nodeR} L ${cx[3]} ${220 - nodeR}`} />

          {/* 5. Evaluator-Optimiser: loop path */}
          <path id="fpLoopMotion" d={loopFullD} fill="none" />
        </defs>

        {/* ── 1. Chaining ──────────────────────────────────── */}
        <g style={colStyle(0)}>
          {(() => {
            const x = cx[0];
            const nodes = [60, 140, 210];
            return (
              <g>
                {/* Nodes */}
                {nodes.map((y) => (
                  <circle
                    key={y}
                    cx={x}
                    cy={y}
                    r={nodeR}
                    stroke="var(--color-midnight)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                ))}

                {/* Static rails at 25% opacity */}
                <line x1={x} y1={nodes[0] + nodeR} x2={x} y2={92} stroke="var(--color-midnight)" strokeWidth="1.5" opacity="0.25" />
                <line x1={x} y1={108} x2={x} y2={nodes[1] - nodeR} stroke="var(--color-midnight)" strokeWidth="1.5" opacity="0.25" />
                <line x1={x} y1={nodes[1] + nodeR} x2={x} y2={nodes[2] - nodeR} stroke="var(--color-midnight)" strokeWidth="1.5" opacity="0.25" />

                {/* Gate marker (between node 1 and node 2) */}
                <text
                  x={x}
                  y={104}
                  fontFamily="var(--font-mono)"
                  fontSize="12"
                  fill="var(--fg-3)"
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  ...
                </text>

                {/* Arrow: node 1 to gate */}
                <line
                  x1={x}
                  y1={nodes[0] + nodeR}
                  x2={x}
                  y2={92}
                  stroke="var(--color-midnight)"
                  strokeWidth="1.5"
                  markerEnd="url(#fpArrow)"
                  style={edgeStyle(0, lineLen(x, nodes[0] + nodeR, x, 92))}
                />

                {/* Arrow: gate to node 2 */}
                <line
                  x1={x}
                  y1={108}
                  x2={x}
                  y2={nodes[1] - nodeR}
                  stroke="var(--color-midnight)"
                  strokeWidth="1.5"
                  markerEnd="url(#fpArrow)"
                  style={edgeStyle(0, lineLen(x, 108, x, nodes[1] - nodeR))}
                />

                {/* Arrow: node 2 to node 3 */}
                <line
                  x1={x}
                  y1={nodes[1] + nodeR}
                  x2={x}
                  y2={nodes[2] - nodeR}
                  stroke="var(--color-midnight)"
                  strokeWidth="1.5"
                  markerEnd="url(#fpArrow)"
                  style={edgeStyle(
                    0,
                    lineLen(x, nodes[1] + nodeR, x, nodes[2] - nodeR)
                  )}
                />

                {/* SMIL flowing dots */}
                {visible && !reducedMotion && (
                  <g>
                    <circle r="3.5" fill="var(--color-midnight)" opacity="0.8">
                      <animateMotion dur="2s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear" begin="0s">
                        <mpath href="#fpChainSeg1" />
                      </animateMotion>
                    </circle>
                    <circle r="3.5" fill="var(--color-midnight)" opacity="0.8">
                      <animateMotion dur="2s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear" begin="0.4s">
                        <mpath href="#fpChainSeg2" />
                      </animateMotion>
                    </circle>
                    <circle r="3.5" fill="var(--color-midnight)" opacity="0.8">
                      <animateMotion dur="2s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear" begin="0.8s">
                        <mpath href="#fpChainSeg3" />
                      </animateMotion>
                    </circle>
                  </g>
                )}

                {/* Label */}
                <text
                  x={x}
                  y={255}
                  fontFamily="var(--font-display)"
                  fontSize="14"
                  fontWeight="600"
                  fill="var(--color-midnight)"
                  textAnchor="middle"
                >
                  Chaining
                </text>
              </g>
            );
          })()}
        </g>

        {/* ── 2. Routing ───────────────────────────────────── */}
        <g style={colStyle(1)}>
          {(() => {
            const x = cx[1];
            const topY = 60;
            const botY = 200;
            const spread = 56;
            const bottoms = [x - spread, x, x + spread];
            return (
              <g>
                {/* Top node */}
                <circle
                  cx={x}
                  cy={topY}
                  r={nodeR}
                  stroke="var(--color-midnight)"
                  strokeWidth="1.5"
                  fill="none"
                />

                {/* Static rails at 25% opacity */}
                {bottoms.map((bx) => (
                  <line key={`rail-${bx}`} x1={x} y1={topY + nodeR} x2={bx} y2={botY - nodeR} stroke="var(--color-midnight)" strokeWidth="1.5" opacity="0.25" />
                ))}

                {/* Fan-out arrows and bottom nodes */}
                {bottoms.map((bx) => (
                  <g key={bx}>
                    <line
                      x1={x}
                      y1={topY + nodeR}
                      x2={bx}
                      y2={botY - nodeR}
                      stroke="var(--color-midnight)"
                      strokeWidth="1.5"
                      markerEnd="url(#fpArrow)"
                      style={edgeStyle(
                        1,
                        lineLen(x, topY + nodeR, bx, botY - nodeR)
                      )}
                    />
                    <circle
                      cx={bx}
                      cy={botY}
                      r={nodeR}
                      stroke="var(--color-midnight)"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </g>
                ))}

                {/* SMIL flowing dots */}
                {visible && !reducedMotion && (
                  <g>
                    <circle r="3.5" fill="var(--color-midnight)" opacity="0.8">
                      <animateMotion dur="2.4s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear" begin="0s">
                        <mpath href="#fpRouteFan0" />
                      </animateMotion>
                    </circle>
                    <circle r="3.5" fill="var(--color-midnight)" opacity="0.8">
                      <animateMotion dur="2.4s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear" begin="0.3s">
                        <mpath href="#fpRouteFan1" />
                      </animateMotion>
                    </circle>
                    <circle r="3.5" fill="var(--color-midnight)" opacity="0.8">
                      <animateMotion dur="2.4s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear" begin="0.6s">
                        <mpath href="#fpRouteFan2" />
                      </animateMotion>
                    </circle>
                  </g>
                )}

                {/* Label */}
                <text
                  x={x}
                  y={255}
                  fontFamily="var(--font-display)"
                  fontSize="14"
                  fontWeight="600"
                  fill="var(--color-midnight)"
                  textAnchor="middle"
                >
                  Routing
                </text>
              </g>
            );
          })()}
        </g>

        {/* ── 3. Parallelisation ───────────────────────────── */}
        <g style={colStyle(2)}>
          {(() => {
            const x = cx[2];
            const topY = 60;
            const midY = 140;
            const botY = 210;
            const spread = 56;
            const mids = [x - spread, x, x + spread];
            return (
              <g>
                {/* Top node */}
                <circle
                  cx={x}
                  cy={topY}
                  r={nodeR}
                  stroke="var(--color-midnight)"
                  strokeWidth="1.5"
                  fill="none"
                />

                {/* Static rails at 25% opacity */}
                {mids.map((mx) => (
                  <g key={`rails-${mx}`}>
                    <line x1={x} y1={topY + nodeR} x2={mx} y2={midY - nodeR} stroke="var(--color-midnight)" strokeWidth="1.5" opacity="0.25" />
                    <line x1={mx} y1={midY + nodeR} x2={x} y2={botY - nodeR} stroke="var(--color-midnight)" strokeWidth="1.5" opacity="0.25" />
                  </g>
                ))}

                {/* Fan-out arrows and middle nodes */}
                {mids.map((mx) => (
                  <g key={mx}>
                    <line
                      x1={x}
                      y1={topY + nodeR}
                      x2={mx}
                      y2={midY - nodeR}
                      stroke="var(--color-midnight)"
                      strokeWidth="1.5"
                      markerEnd="url(#fpArrow)"
                      style={edgeStyle(
                        2,
                        lineLen(x, topY + nodeR, mx, midY - nodeR)
                      )}
                    />
                    <circle
                      cx={mx}
                      cy={midY}
                      r={nodeR}
                      stroke="var(--color-midnight)"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    {/* Converge arrows to bottom */}
                    <line
                      x1={mx}
                      y1={midY + nodeR}
                      x2={x}
                      y2={botY - nodeR}
                      stroke="var(--color-midnight)"
                      strokeWidth="1.5"
                      markerEnd="url(#fpArrow)"
                      style={edgeStyle(
                        2,
                        lineLen(mx, midY + nodeR, x, botY - nodeR)
                      )}
                    />
                  </g>
                ))}

                {/* SMIL flowing dots — fan-out (top → mid) */}
                {visible && !reducedMotion && (
                  <g>
                    <circle r="3.5" fill="var(--color-midnight)" opacity="0.8">
                      <animateMotion dur="2s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear" begin="0s">
                        <mpath href="#fpParaDown0" />
                      </animateMotion>
                    </circle>
                    <circle r="3.5" fill="var(--color-midnight)" opacity="0.8">
                      <animateMotion dur="2s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear" begin="0.2s">
                        <mpath href="#fpParaDown1" />
                      </animateMotion>
                    </circle>
                    <circle r="3.5" fill="var(--color-midnight)" opacity="0.8">
                      <animateMotion dur="2s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear" begin="0.4s">
                        <mpath href="#fpParaDown2" />
                      </animateMotion>
                    </circle>
                    {/* Converge (mid → bottom) — staggered after fan-out */}
                    <circle r="3.5" fill="var(--color-midnight)" opacity="0.8">
                      <animateMotion dur="2s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear" begin="1s">
                        <mpath href="#fpParaUp0" />
                      </animateMotion>
                    </circle>
                    <circle r="3.5" fill="var(--color-midnight)" opacity="0.8">
                      <animateMotion dur="2s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear" begin="1.2s">
                        <mpath href="#fpParaUp1" />
                      </animateMotion>
                    </circle>
                    <circle r="3.5" fill="var(--color-midnight)" opacity="0.8">
                      <animateMotion dur="2s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear" begin="1.4s">
                        <mpath href="#fpParaUp2" />
                      </animateMotion>
                    </circle>
                  </g>
                )}

                {/* Bottom node */}
                <circle
                  cx={x}
                  cy={botY}
                  r={nodeR}
                  stroke="var(--color-midnight)"
                  strokeWidth="1.5"
                  fill="none"
                />

                {/* Label */}
                <text
                  x={x}
                  y={255}
                  fontFamily="var(--font-display)"
                  fontSize="14"
                  fontWeight="600"
                  fill="var(--color-midnight)"
                  textAnchor="middle"
                >
                  Parallelisation
                </text>
              </g>
            );
          })()}
        </g>

        {/* ── 4. Orchestrator-Workers ──────────────────────── */}
        <g style={colStyle(3)}>
          {(() => {
            const x = cx[3];
            const topY = 60;
            const workerY = 150;
            const botY = 220;
            const workers = [x - 50, x, x + 50];
            return (
              <g>
                {/* Orchestrator node (top) */}
                <circle
                  cx={x}
                  cy={topY}
                  r={nodeR}
                  stroke="var(--color-midnight)"
                  strokeWidth="1.5"
                  fill="none"
                />
                <text
                  x={x}
                  y={topY - 18}
                  fontFamily="var(--font-mono)"
                  fontSize="9"
                  fill="var(--fg-3)"
                  textAnchor="middle"
                  letterSpacing="0.04em"
                >
                  orch.
                </text>

                {/* Static rails at 25% opacity */}
                {workers.map((wx) => (
                  <g key={`rails-${wx}`}>
                    <line x1={x} y1={topY + nodeR} x2={wx} y2={workerY - nodeR} stroke="var(--color-midnight)" strokeWidth="1.5" opacity="0.25" />
                    <line x1={wx} y1={workerY + nodeR} x2={x} y2={botY - nodeR} stroke="var(--color-midnight)" strokeWidth="1.5" opacity="0.25" />
                  </g>
                ))}

                {/* Worker nodes and connections down */}
                {workers.map((wx) => (
                  <g key={wx}>
                    <line
                      x1={x}
                      y1={topY + nodeR}
                      x2={wx}
                      y2={workerY - nodeR}
                      stroke="var(--color-midnight)"
                      strokeWidth="1.5"
                      markerEnd="url(#fpArrow)"
                      style={edgeStyle(
                        3,
                        lineLen(x, topY + nodeR, wx, workerY - nodeR)
                      )}
                    />
                    <circle
                      cx={wx}
                      cy={workerY}
                      r={nodeR}
                      stroke="var(--color-midnight)"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </g>
                ))}

                {/* Converge back to orchestrator (bottom) */}
                {workers.map((wx) => (
                  <line
                    key={`ret-${wx}`}
                    x1={wx}
                    y1={workerY + nodeR}
                    x2={x}
                    y2={botY - nodeR}
                    stroke="var(--color-midnight)"
                    strokeWidth="1.5"
                    markerEnd="url(#fpArrow)"
                    style={edgeStyle(
                      3,
                      lineLen(wx, workerY + nodeR, x, botY - nodeR)
                    )}
                  />
                ))}

                {/* SMIL flowing dots — dispatch (orch → workers) */}
                {visible && !reducedMotion && (
                  <g>
                    <circle r="3.5" fill="var(--color-midnight)" opacity="0.8">
                      <animateMotion dur="2.2s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear" begin="0s">
                        <mpath href="#fpOrchDown0" />
                      </animateMotion>
                    </circle>
                    <circle r="3.5" fill="var(--color-midnight)" opacity="0.8">
                      <animateMotion dur="2.2s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear" begin="0.25s">
                        <mpath href="#fpOrchDown1" />
                      </animateMotion>
                    </circle>
                    <circle r="3.5" fill="var(--color-midnight)" opacity="0.8">
                      <animateMotion dur="2.2s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear" begin="0.5s">
                        <mpath href="#fpOrchDown2" />
                      </animateMotion>
                    </circle>
                    {/* Return (workers → orch-bottom) — staggered after dispatch */}
                    <circle r="3.5" fill="var(--color-midnight)" opacity="0.8">
                      <animateMotion dur="2.2s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear" begin="1.1s">
                        <mpath href="#fpOrchUp0" />
                      </animateMotion>
                    </circle>
                    <circle r="3.5" fill="var(--color-midnight)" opacity="0.8">
                      <animateMotion dur="2.2s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear" begin="1.35s">
                        <mpath href="#fpOrchUp1" />
                      </animateMotion>
                    </circle>
                    <circle r="3.5" fill="var(--color-midnight)" opacity="0.8">
                      <animateMotion dur="2.2s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear" begin="1.6s">
                        <mpath href="#fpOrchUp2" />
                      </animateMotion>
                    </circle>
                  </g>
                )}

                {/* Orchestrator node (bottom, same node conceptually) */}
                <circle
                  cx={x}
                  cy={botY}
                  r={nodeR}
                  stroke="var(--color-midnight)"
                  strokeWidth="1.5"
                  fill="none"
                />

                {/* Label */}
                <text
                  x={x}
                  y={262}
                  fontFamily="var(--font-display)"
                  fontSize="14"
                  fontWeight="600"
                  fill="var(--color-midnight)"
                  textAnchor="middle"
                >
                  Orchestrator
                </text>
                <text
                  x={x}
                  y={278}
                  fontFamily="var(--font-display)"
                  fontSize="14"
                  fontWeight="600"
                  fill="var(--color-midnight)"
                  textAnchor="middle"
                >
                  -Workers
                </text>
              </g>
            );
          })()}
        </g>

        {/* ── 5. Evaluator-Optimiser ───────────────────────── */}
        <g style={colStyle(4)}>
          {(() => {
            const x = cx[4];
            const nodeY = loopNodeY;
            const exitY = 220;
            /* Approximate arc lengths for dash animation */
            const arcLen = 90;
            return (
              <g>
                {/* Generator node */}
                <circle
                  cx={genX}
                  cy={nodeY}
                  r={nodeR}
                  stroke="var(--color-midnight)"
                  strokeWidth="1.5"
                  fill="none"
                />
                <text
                  x={genX}
                  y={nodeY - 18}
                  fontFamily="var(--font-mono)"
                  fontSize="9"
                  fill="var(--fg-3)"
                  textAnchor="middle"
                  letterSpacing="0.04em"
                >
                  gen.
                </text>

                {/* Evaluator node */}
                <circle
                  cx={evalX}
                  cy={nodeY}
                  r={nodeR}
                  stroke="var(--color-midnight)"
                  strokeWidth="1.5"
                  fill="none"
                />
                <text
                  x={evalX}
                  y={nodeY - 18}
                  fontFamily="var(--font-mono)"
                  fontSize="9"
                  fill="var(--fg-3)"
                  textAnchor="middle"
                  letterSpacing="0.04em"
                >
                  eval.
                </text>

                {/* Static rails at 25% opacity */}
                <path d={loopTopD} stroke="var(--color-midnight)" strokeWidth="1.5" fill="none" opacity="0.25" />
                <path d={loopBotD} stroke="var(--color-midnight)" strokeWidth="1.5" fill="none" opacity="0.25" />
                <line x1={x} y1={nodeY + 42} x2={x} y2={exitY} stroke="var(--color-midnight)" strokeWidth="1.5" opacity="0.25" />

                {/* Circular loop arrow — top arc (accent colour) */}
                <path
                  d={loopTopD}
                  stroke="var(--color-midnight)"
                  strokeWidth="1.5"
                  fill="none"
                  markerEnd="url(#fpArrowAccent)"
                  style={edgeStyle(4, arcLen)}
                />
                {/* Circular loop arrow — bottom arc (accent colour) */}
                <path
                  d={loopBotD}
                  stroke="var(--color-midnight)"
                  strokeWidth="1.5"
                  fill="none"
                  markerEnd="url(#fpArrowAccent)"
                  style={edgeStyle(4, arcLen)}
                />

                {/* SMIL circling dot on the loop path */}
                {visible && !reducedMotion && (
                  <circle r="3.5" fill="var(--color-midnight)">
                    <animateMotion
                      dur="3s"
                      repeatCount="indefinite"
                      rotate="auto"
                    >
                      <mpath href="#fpLoopMotion" />
                    </animateMotion>
                  </circle>
                )}

                {/* Exit arrow downward from midpoint */}
                <line
                  x1={x}
                  y1={nodeY + 42}
                  x2={x}
                  y2={exitY}
                  stroke="var(--color-midnight)"
                  strokeWidth="1.5"
                  markerEnd="url(#fpArrow)"
                  style={edgeStyle(4, lineLen(x, nodeY + 42, x, exitY))}
                />

                {/* Exit node */}
                <circle
                  cx={x}
                  cy={exitY + 2}
                  r={5}
                  fill="var(--color-midnight)"
                  stroke="none"
                />

                {/* Label */}
                <text
                  x={x}
                  y={262}
                  fontFamily="var(--font-display)"
                  fontSize="14"
                  fontWeight="600"
                  fill="var(--color-midnight)"
                  textAnchor="middle"
                >
                  Evaluator
                </text>
                <text
                  x={x}
                  y={278}
                  fontFamily="var(--font-display)"
                  fontSize="14"
                  fontWeight="600"
                  fill="var(--color-midnight)"
                  textAnchor="middle"
                >
                  -Optimiser
                </text>
              </g>
            );
          })()}
        </g>

        {/* ── Complexity axis ──────────────────────────────── */}
        <g style={colStyle(4)}>
          <line
            x1="60"
            y1="305"
            x2="1140"
            y2="305"
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            markerEnd="url(#fpArrow)"
            style={edgeStyle(4, 1080)}
          />
          <text
            x="600"
            y="325"
            fontFamily="var(--font-mono)"
            fontSize="11"
            fill="var(--color-midnight)"
            textAnchor="middle"
            fontWeight="600"
            letterSpacing="0.14em"
          >
            INCREASING STRUCTURAL COMPLEXITY
          </text>
        </g>
      </svg>
    </figure>
  );
}
