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
 * - The evaluator-optimiser loop has a circling SMIL dot in var(--accent)
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
              stroke="var(--accent)"
              strokeWidth="1.5"
            />
          </marker>

          {/* Loop motion path for the SMIL dot */}
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

                {/* Gate marker (dashed horizontal bar) */}
                <line
                  x1={x - 18}
                  y1={100}
                  x2={x + 18}
                  y2={100}
                  stroke="var(--color-midnight)"
                  strokeWidth="1.5"
                  strokeDasharray="4 3"
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

                {/* Ellipsis between last two workers */}
                <text
                  x={x + 25}
                  y={workerY + 5}
                  fontFamily="var(--font-mono)"
                  fontSize="12"
                  fill="var(--fg-3)"
                  textAnchor="middle"
                >
                  ...
                </text>

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

                {/* Circular loop arrow — top arc (accent colour) */}
                <path
                  d={loopTopD}
                  stroke="var(--accent)"
                  strokeWidth="1.5"
                  fill="none"
                  markerEnd="url(#fpArrowAccent)"
                  style={edgeStyle(4, arcLen)}
                />
                {/* Circular loop arrow — bottom arc (accent colour) */}
                <path
                  d={loopBotD}
                  stroke="var(--accent)"
                  strokeWidth="1.5"
                  fill="none"
                  markerEnd="url(#fpArrowAccent)"
                  style={edgeStyle(4, arcLen)}
                />

                {/* SMIL circling dot on the loop path */}
                {visible && !reducedMotion && (
                  <circle r="3.5" fill="var(--accent)">
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
