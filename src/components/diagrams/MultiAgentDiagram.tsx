"use client";

import { useEffect, useRef, useState } from "react";

/**
 * MultiAgentDiagram — Five Multi-Agent Topologies
 *
 * A horizontal strip showing five topology patterns side by side, in order of
 * increasing agent autonomy: supervisor, pipeline, parallelisation, swarm,
 * hierarchy.
 *
 * Each topology is a small abstract node-and-edge diagram with SMIL-animated
 * dots flowing along defined paths when the diagram is in view.
 * Monochrome line art throughout; no violet accent in this diagram.
 * The control-holder node in each topology gets var(--bg-surface) fill.
 */

export function MultiAgentDiagram() {
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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
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

  const animate = visible && !reducedMotion;

  /* Stagger delays for entrance (left-to-right) */
  const entranceDelays = [0, 0.12, 0.24, 0.36, 0.48];

  return (
    <figure
      ref={figRef}
      role="img"
      aria-label="Five multi-agent topologies in order of increasing autonomy: supervisor, pipeline, parallelisation, swarm, hierarchy"
      style={{ margin: 0, width: "100%", marginInline: "auto" }}
    >
      <svg
        viewBox="0 0 1200 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        {/* ── Marker & path definitions ──────────────────── */}
        <defs>
          <marker
            id="maArrow"
            viewBox="0 0 10 10"
            refX="10" refY="5"
            markerWidth="6" markerHeight="6"
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
            id="maArrowBorder"
            viewBox="0 0 10 10"
            refX="10" refY="5"
            markerWidth="6" markerHeight="6"
            orient="auto-start-reverse"
          >
            <path
              d="M 0 2 L 10 5 L 0 8"
              fill="none"
              stroke="var(--border)"
              strokeWidth="1.5"
            />
          </marker>

          {/* ── Supervisor: S → A2 → S (one spoke, bottom-right) */}
          {(() => {
            const x = cx[0];
            const sY = 110;
            const a2 = { x: x + 56, y: sY + 36 };
            return (
              <path
                id="supPath"
                d={`M ${x},${sY} L ${a2.x},${a2.y} L ${x},${sY}`}
                fill="none"
              />
            );
          })()}

          {/* ── Pipeline: left-to-right through 4 nodes */}
          {(() => {
            const x = cx[1];
            const y = 110;
            const gap = 40;
            const totalW = gap * 3;
            const startX = x - totalW / 2;
            const nodes = [0, 1, 2, 3].map((i) => startX + i * gap);
            return (
              <path
                id="pipePath"
                d={`M ${nodes[0]},${y} L ${nodes[1]},${y} L ${nodes[2]},${y} L ${nodes[3]},${y}`}
                fill="none"
              />
            );
          })()}

          {/* ── Parallelisation: C → W1 → M (fan-out left spoke) */}
          {(() => {
            const x = cx[2];
            const topY = 55;
            const midY = 115;
            const botY = 175;
            const spread = 52;
            return (
              <>
                <path id="paraPath1" d={`M ${x},${topY} L ${x - spread},${midY} L ${x},${botY}`} fill="none" />
                <path id="paraPath2" d={`M ${x},${topY} L ${x},${midY} L ${x},${botY}`} fill="none" />
                <path id="paraPath3" d={`M ${x},${topY} L ${x + spread},${midY} L ${x},${botY}`} fill="none" />
              </>
            );
          })()}

          {/* ── Swarm: bidirectional edges between peers */}
          {(() => {
            const x = cx[3];
            const positions = [
              { x: x - 32, y: 80 },
              { x: x + 32, y: 80 },
              { x: x - 32, y: 140 },
              { x: x + 32, y: 140 },
            ];
            return (
              <>
                {/* P1 ↔ P2 (top edge) */}
                <path id="swarmPath1" d={`M ${positions[0].x},${positions[0].y} L ${positions[1].x},${positions[1].y}`} fill="none" />
                <path id="swarmPath1r" d={`M ${positions[1].x},${positions[1].y} L ${positions[0].x},${positions[0].y}`} fill="none" />
                {/* P1 ↔ P3 (left edge) */}
                <path id="swarmPath2" d={`M ${positions[0].x},${positions[0].y} L ${positions[2].x},${positions[2].y}`} fill="none" />
                <path id="swarmPath2r" d={`M ${positions[2].x},${positions[2].y} L ${positions[0].x},${positions[0].y}`} fill="none" />
                {/* P2 ↔ P4 (right edge) */}
                <path id="swarmPath3" d={`M ${positions[1].x},${positions[1].y} L ${positions[3].x},${positions[3].y}`} fill="none" />
                <path id="swarmPath3r" d={`M ${positions[3].x},${positions[3].y} L ${positions[1].x},${positions[1].y}`} fill="none" />
              </>
            );
          })()}

          {/* ── Hierarchy: R → M1 → L1, R → M2 → L4 */}
          {(() => {
            const x = cx[4];
            const rootY = 55;
            const midY = 110;
            const leafY = 165;
            const midSpread = 44;
            const leafSpread = 22;
            return (
              <>
                <path
                  id="hierPath1"
                  d={`M ${x},${rootY} L ${x - midSpread},${midY} L ${x - midSpread - leafSpread},${leafY}`}
                  fill="none"
                />
                <path
                  id="hierPath2"
                  d={`M ${x},${rootY} L ${x + midSpread},${midY} L ${x + midSpread + leafSpread},${leafY}`}
                  fill="none"
                />
              </>
            );
          })()}
        </defs>

        {/* ── 1. Supervisor ────────────────────────────────── */}
        {(() => {
          const x = cx[0];
          const sY = 110;
          const agentPositions = [
            { x: x, y: sY - 66 },
            { x: x + 56, y: sY + 36 },
            { x: x - 56, y: sY + 36 },
          ];
          const idx = 0;
          return (
            <g
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.5s ease ${entranceDelays[idx]}s, transform 0.5s ease ${entranceDelays[idx]}s`,
              }}
            >
              {/* Static edges (rails) */}
              {agentPositions.map((pos, i) => {
                const dx = pos.x - x;
                const dy = pos.y - sY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const ux = dx / dist;
                const uy = dy / dist;
                return (
                  <line
                    key={`sup-rail-${i}`}
                    x1={x + ux * nodeR} y1={sY + uy * nodeR}
                    x2={pos.x - ux * nodeR} y2={pos.y - uy * nodeR}
                    stroke="var(--color-midnight)"
                    strokeWidth="1.5"
                    opacity="0.25"
                    markerEnd="url(#maArrow)"
                  />
                );
              })}

              {/* Supervisor node (filled) */}
              <circle
                cx={x} cy={sY} r={nodeR}
                stroke="var(--color-midnight)"
                strokeWidth="1.5"
                fill="var(--bg-surface)"
              />
              <text
                x={x} y={sY + 3.5}
                fontFamily="var(--font-mono)"
                fontSize="9"
                fill="var(--color-midnight)"
                textAnchor="middle"
              >
                S
              </text>

              {/* Agent nodes */}
              {agentPositions.map((pos, i) => {
                const label = `A${i + 1}`;
                return (
                  <g key={label}>
                    <circle
                      cx={pos.x} cy={pos.y} r={nodeR}
                      stroke="var(--color-midnight)"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <text
                      x={pos.x} y={pos.y + 3.5}
                      fontFamily="var(--font-mono)"
                      fontSize="9"
                      fill="var(--fg-2)"
                      textAnchor="middle"
                    >
                      {label}
                    </text>
                  </g>
                );
              })}

              {/* SMIL animated dot */}
              {animate && (
                <circle r="4" fill="var(--color-midnight)" opacity="0.8">
                  <animateMotion
                    dur="2.4s"
                    repeatCount="indefinite"
                    begin="0.3s"
                  >
                    <mpath href="#supPath" />
                  </animateMotion>
                </circle>
              )}

              <text
                x={x} y={255}
                fontFamily="var(--font-display)"
                fontSize="13"
                fontWeight="600"
                fill="var(--color-midnight)"
                textAnchor="middle"
              >
                Supervisor
              </text>
            </g>
          );
        })()}

        {/* ── 2. Pipeline ──────────────────────────────────── */}
        {(() => {
          const y = 110;
          const x = cx[1];
          const gap = 40;
          const totalW = gap * 3;
          const startX = x - totalW / 2;
          const nodes = [0, 1, 2, 3].map((i) => startX + i * gap);
          const labels = ["1", "2", "3", "4"];
          const idx = 1;
          return (
            <g
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.5s ease ${entranceDelays[idx]}s, transform 0.5s ease ${entranceDelays[idx]}s`,
              }}
            >
              {/* Static edge rails */}
              {nodes.map((nx, i) =>
                i < nodes.length - 1 ? (
                  <line
                    key={`pipe-rail-${i}`}
                    x1={nx + nodeR} y1={y}
                    x2={nodes[i + 1] - nodeR} y2={y}
                    stroke="var(--color-midnight)"
                    strokeWidth="1.5"
                    opacity="0.25"
                    markerEnd="url(#maArrow)"
                  />
                ) : null,
              )}

              {nodes.map((nx, i) => (
                <g key={i}>
                  <circle
                    cx={nx} cy={y} r={nodeR}
                    stroke="var(--color-midnight)"
                    strokeWidth="1.5"
                    fill={i === 0 ? "var(--bg-surface)" : "none"}
                  />
                  <text
                    x={nx} y={y + 3.5}
                    fontFamily="var(--font-mono)"
                    fontSize="9"
                    fill={i === 0 ? "var(--color-midnight)" : "var(--fg-2)"}
                    textAnchor="middle"
                  >
                    {labels[i]}
                  </text>
                </g>
              ))}

              {/* SMIL animated dot */}
              {animate && (
                <circle r="4" fill="var(--color-midnight)" opacity="0.8">
                  <animateMotion
                    dur="2s"
                    repeatCount="indefinite"
                    begin="0.5s"
                  >
                    <mpath href="#pipePath" />
                  </animateMotion>
                </circle>
              )}

              <text
                x={x} y={255}
                fontFamily="var(--font-display)"
                fontSize="13"
                fontWeight="600"
                fill="var(--color-midnight)"
                textAnchor="middle"
              >
                Pipeline
              </text>
            </g>
          );
        })()}

        {/* ── 3. Parallelisation ───────────────────────────── */}
        {(() => {
          const x = cx[2];
          const topY = 55;
          const midY = 115;
          const botY = 175;
          const spread = 52;
          const mids = [x - spread, x, x + spread];
          const idx = 2;
          return (
            <g
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.5s ease ${entranceDelays[idx]}s, transform 0.5s ease ${entranceDelays[idx]}s`,
              }}
            >
              {/* Static edge rails: fan-out */}
              {mids.map((mx, i) => {
                const dx = mx - x;
                const dy = midY - topY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const ux = dx / dist;
                const uy = dy / dist;

                const dxB = x - mx;
                const dyB = botY - midY;
                const distB = Math.sqrt(dxB * dxB + dyB * dyB);
                const uxB = dxB / distB;
                const uyB = dyB / distB;
                return (
                  <g key={`para-rail-${i}`}>
                    <line
                      x1={x + ux * nodeR} y1={topY + uy * nodeR}
                      x2={mx - ux * nodeR} y2={midY - uy * nodeR}
                      stroke="var(--color-midnight)"
                      strokeWidth="1.5"
                      opacity="0.25"
                      markerEnd="url(#maArrow)"
                    />
                    <line
                      x1={mx + uxB * nodeR} y1={midY + uyB * nodeR}
                      x2={x - uxB * nodeR} y2={botY - uyB * nodeR}
                      stroke="var(--color-midnight)"
                      strokeWidth="1.5"
                      opacity="0.25"
                      markerEnd="url(#maArrow)"
                    />
                  </g>
                );
              })}

              {/* Coordinator node */}
              <circle
                cx={x} cy={topY} r={nodeR}
                stroke="var(--color-midnight)"
                strokeWidth="1.5"
                fill="var(--bg-surface)"
              />
              <text
                x={x} y={topY + 3.5}
                fontFamily="var(--font-mono)"
                fontSize="9"
                fill="var(--color-midnight)"
                textAnchor="middle"
              >
                C
              </text>

              {/* Worker nodes */}
              {mids.map((mx, i) => (
                <g key={`w-${i}`}>
                  <circle
                    cx={mx} cy={midY} r={nodeR}
                    stroke="var(--color-midnight)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <text
                    x={mx} y={midY + 3.5}
                    fontFamily="var(--font-mono)"
                    fontSize="9"
                    fill="var(--fg-2)"
                    textAnchor="middle"
                  >
                    {`W${i + 1}`}
                  </text>
                </g>
              ))}

              {/* Merge node */}
              <circle
                cx={x} cy={botY} r={nodeR}
                stroke="var(--color-midnight)"
                strokeWidth="1.5"
                fill="var(--bg-surface)"
              />
              <text
                x={x} y={botY + 3.5}
                fontFamily="var(--font-mono)"
                fontSize="9"
                fill="var(--color-midnight)"
                textAnchor="middle"
              >
                M
              </text>

              {/* SMIL dots on 3 fan-out/fan-in paths, staggered */}
              {animate && (
                <>
                  <circle r="4" fill="var(--color-midnight)" opacity="0.8">
                    <animateMotion dur="2s" repeatCount="indefinite" begin="0s">
                      <mpath href="#paraPath1" />
                    </animateMotion>
                  </circle>
                  <circle r="4" fill="var(--color-midnight)" opacity="0.8">
                    <animateMotion dur="2s" repeatCount="indefinite" begin="0.35s">
                      <mpath href="#paraPath2" />
                    </animateMotion>
                  </circle>
                  <circle r="4" fill="var(--color-midnight)" opacity="0.8">
                    <animateMotion dur="2s" repeatCount="indefinite" begin="0.7s">
                      <mpath href="#paraPath3" />
                    </animateMotion>
                  </circle>
                </>
              )}

              <text
                x={x} y={255}
                fontFamily="var(--font-display)"
                fontSize="13"
                fontWeight="600"
                fill="var(--color-midnight)"
                textAnchor="middle"
              >
                Parallelisation
              </text>
            </g>
          );
        })()}

        {/* ── 4. Swarm ─────────────────────────────────────── */}
        {(() => {
          const x = cx[3];
          const positions = [
            { x: x - 32, y: 80 },
            { x: x + 32, y: 80 },
            { x: x - 32, y: 140 },
            { x: x + 32, y: 140 },
          ];
          const labels = ["P1", "P2", "P3", "P4"];
          const edges: [number, number][] = [
            [0, 1], [0, 2], [1, 3], [2, 3], [0, 3], [1, 2],
          ];
          const idx = 3;
          return (
            <g
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.5s ease ${entranceDelays[idx]}s, transform 0.5s ease ${entranceDelays[idx]}s`,
              }}
            >
              {/* Static edges as rails at 25% */}
              {edges.map(([a, b]) => (
                <line
                  key={`swarm-rail-${a}-${b}`}
                  x1={positions[a].x} y1={positions[a].y}
                  x2={positions[b].x} y2={positions[b].y}
                  stroke="var(--border)"
                  strokeWidth="1.5"
                  opacity="0.25"
                />
              ))}

              {/* Peer nodes */}
              {positions.map((pos, i) => (
                <g key={i}>
                  <circle
                    cx={pos.x} cy={pos.y} r={nodeR}
                    stroke="var(--color-midnight)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <text
                    x={pos.x} y={pos.y + 3.5}
                    fontFamily="var(--font-mono)"
                    fontSize="9"
                    fill="var(--fg-2)"
                    textAnchor="middle"
                  >
                    {labels[i]}
                  </text>
                </g>
              ))}

              {/* SMIL dots on bidirectional edges */}
              {animate && (
                <>
                  {/* P1 → P2 */}
                  <circle r="3.5" fill="var(--color-midnight)" opacity="0.7">
                    <animateMotion dur="1.6s" repeatCount="indefinite" begin="0s">
                      <mpath href="#swarmPath1" />
                    </animateMotion>
                  </circle>
                  {/* P2 → P1 */}
                  <circle r="3.5" fill="var(--color-midnight)" opacity="0.7">
                    <animateMotion dur="1.6s" repeatCount="indefinite" begin="0.8s">
                      <mpath href="#swarmPath1r" />
                    </animateMotion>
                  </circle>
                  {/* P1 → P3 */}
                  <circle r="3.5" fill="var(--color-midnight)" opacity="0.7">
                    <animateMotion dur="1.8s" repeatCount="indefinite" begin="0.3s">
                      <mpath href="#swarmPath2" />
                    </animateMotion>
                  </circle>
                  {/* P3 → P1 */}
                  <circle r="3.5" fill="var(--color-midnight)" opacity="0.7">
                    <animateMotion dur="1.8s" repeatCount="indefinite" begin="1.1s">
                      <mpath href="#swarmPath2r" />
                    </animateMotion>
                  </circle>
                  {/* P2 → P4 */}
                  <circle r="3.5" fill="var(--color-midnight)" opacity="0.7">
                    <animateMotion dur="1.8s" repeatCount="indefinite" begin="0.5s">
                      <mpath href="#swarmPath3" />
                    </animateMotion>
                  </circle>
                  {/* P4 → P2 */}
                  <circle r="3.5" fill="var(--color-midnight)" opacity="0.7">
                    <animateMotion dur="1.8s" repeatCount="indefinite" begin="1.3s">
                      <mpath href="#swarmPath3r" />
                    </animateMotion>
                  </circle>
                </>
              )}

              <text
                x={x} y={255}
                fontFamily="var(--font-display)"
                fontSize="13"
                fontWeight="600"
                fill="var(--color-midnight)"
                textAnchor="middle"
              >
                Swarm
              </text>
            </g>
          );
        })()}

        {/* ── 5. Hierarchy ─────────────────────────────────── */}
        {(() => {
          const x = cx[4];
          const rootY = 55;
          const midY = 110;
          const leafY = 165;
          const midSpread = 44;
          const leafSpread = 22;

          const root = { x, y: rootY };
          const midNodes = [
            { x: x - midSpread, y: midY },
            { x: x + midSpread, y: midY },
          ];
          const leafNodes = [
            { x: x - midSpread - leafSpread, y: leafY },
            { x: x - midSpread + leafSpread, y: leafY },
            { x: x + midSpread - leafSpread, y: leafY },
            { x: x + midSpread + leafSpread, y: leafY },
          ];

          function railLine(
            from: { x: number; y: number },
            to: { x: number; y: number },
            key: string,
          ) {
            const dx = to.x - from.x;
            const dy = to.y - from.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const ux = dx / dist;
            const uy = dy / dist;
            return (
              <line
                key={key}
                x1={from.x + ux * nodeR} y1={from.y + uy * nodeR}
                x2={to.x - ux * nodeR} y2={to.y - uy * nodeR}
                stroke="var(--color-midnight)"
                strokeWidth="1.5"
                opacity="0.25"
                markerEnd="url(#maArrow)"
              />
            );
          }

          const idx = 4;
          return (
            <g
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.5s ease ${entranceDelays[idx]}s, transform 0.5s ease ${entranceDelays[idx]}s`,
              }}
            >
              {/* Static edge rails */}
              {railLine(root, midNodes[0], "r-m0")}
              {railLine(root, midNodes[1], "r-m1")}
              {railLine(midNodes[0], leafNodes[0], "m0-l0")}
              {railLine(midNodes[0], leafNodes[1], "m0-l1")}
              {railLine(midNodes[1], leafNodes[2], "m1-l2")}
              {railLine(midNodes[1], leafNodes[3], "m1-l3")}

              {/* Root node */}
              <circle
                cx={root.x} cy={root.y} r={nodeR}
                stroke="var(--color-midnight)"
                strokeWidth="1.5"
                fill="var(--bg-surface)"
              />
              <text
                x={root.x} y={root.y + 3.5}
                fontFamily="var(--font-mono)"
                fontSize="9"
                fill="var(--color-midnight)"
                textAnchor="middle"
              >
                R
              </text>

              {/* Mid-level nodes */}
              {midNodes.map((pos, i) => (
                <g key={`mid-${i}`}>
                  <circle
                    cx={pos.x} cy={pos.y} r={nodeR}
                    stroke="var(--color-midnight)"
                    strokeWidth="1.5"
                    fill="var(--bg-surface)"
                  />
                  <text
                    x={pos.x} y={pos.y + 3.5}
                    fontFamily="var(--font-mono)"
                    fontSize="9"
                    fill="var(--color-midnight)"
                    textAnchor="middle"
                  >
                    {`M${i + 1}`}
                  </text>
                </g>
              ))}

              {/* Leaf nodes */}
              {leafNodes.map((pos, i) => (
                <g key={`leaf-${i}`}>
                  <circle
                    cx={pos.x} cy={pos.y} r={nodeR}
                    stroke="var(--color-midnight)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <text
                    x={pos.x} y={pos.y + 3.5}
                    fontFamily="var(--font-mono)"
                    fontSize="9"
                    fill="var(--fg-2)"
                    textAnchor="middle"
                  >
                    {`L${i + 1}`}
                  </text>
                </g>
              ))}

              {/* SMIL dots flowing root → mid → leaf */}
              {animate && (
                <>
                  <circle r="4" fill="var(--color-midnight)" opacity="0.8">
                    <animateMotion dur="2.2s" repeatCount="indefinite" begin="0s">
                      <mpath href="#hierPath1" />
                    </animateMotion>
                  </circle>
                  <circle r="4" fill="var(--color-midnight)" opacity="0.8">
                    <animateMotion dur="2.2s" repeatCount="indefinite" begin="1.1s">
                      <mpath href="#hierPath2" />
                    </animateMotion>
                  </circle>
                </>
              )}

              <text
                x={x} y={255}
                fontFamily="var(--font-display)"
                fontSize="13"
                fontWeight="600"
                fill="var(--color-midnight)"
                textAnchor="middle"
              >
                Hierarchy
              </text>
            </g>
          );
        })()}

        {/* ── Annotation bar: More control <-> More autonomy ── */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease 0.6s",
          }}
        >
          <line
            x1="60" y1="295"
            x2="1140" y2="295"
            stroke="var(--color-midnight)"
            strokeWidth="1"
          />
          {/* Left arrowhead */}
          <path
            d="M 60 295 L 68 291 M 60 295 L 68 299"
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            fill="none"
          />
          {/* Right arrowhead */}
          <path
            d="M 1140 295 L 1132 291 M 1140 295 L 1132 299"
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            fill="none"
          />
          <text
            x="110" y="315"
            fontFamily="var(--font-mono)"
            fontSize="10"
            fill="var(--fg-3)"
            textAnchor="start"
            letterSpacing="0.08em"
          >
            More control
          </text>
          <text
            x="1090" y="315"
            fontFamily="var(--font-mono)"
            fontSize="10"
            fill="var(--fg-3)"
            textAnchor="end"
            letterSpacing="0.08em"
          >
            More autonomy
          </text>
        </g>
      </svg>
    </figure>
  );
}
