/**
 * MultiAgentDiagram — Five Multi-Agent Topologies
 *
 * A horizontal strip showing five topology patterns side by side, in order of
 * increasing agent autonomy: supervisor, pipeline, parallelisation, swarm,
 * hierarchy.
 *
 * Each topology is a small abstract node-and-edge diagram.
 * Monochrome line art throughout; no violet accent in this diagram.
 * The control-holder node in each topology gets var(--bg-surface) fill.
 */

export function MultiAgentDiagram() {
  /* ── Layout constants ──────────────────────────────── */
  const colW = 156; // 780 / 5
  const nodeR = 12;

  /* Column centres */
  const cx = [
    colW * 0 + colW / 2, // 78
    colW * 1 + colW / 2, // 234
    colW * 2 + colW / 2, // 390
    colW * 3 + colW / 2, // 546
    colW * 4 + colW / 2, // 702
  ];

  return (
    <figure
      role="img"
      aria-label="Five multi-agent topologies in order of increasing autonomy: supervisor, pipeline, parallelisation, swarm, hierarchy"
      style={{ margin: 0, width: "100%", maxWidth: "780px", marginInline: "auto" }}
    >
      <svg
        viewBox="0 0 780 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        {/* ── Marker definitions ──────────────────────────── */}
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
        </defs>

        {/* ── 1. Supervisor ────────────────────────────────── */}
        {(() => {
          const x = cx[0];
          const sY = 110; // supervisor centre
          const agentPositions = [
            { x: x, y: sY - 60 },      // A1 top
            { x: x + 52, y: sY + 30 }, // A2 bottom-right
            { x: x - 52, y: sY + 30 }, // A3 bottom-left
          ];
          return (
            <g>
              {/* Supervisor node (filled = control holder) */}
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

              {/* Agent nodes and spokes */}
              {agentPositions.map((pos, i) => {
                const label = `A${i + 1}`;
                // Calculate line endpoints to stop at circle edges
                const dx = pos.x - x;
                const dy = pos.y - sY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const ux = dx / dist;
                const uy = dy / dist;
                return (
                  <g key={label}>
                    {/* Arrow from supervisor to agent */}
                    <line
                      x1={x + ux * nodeR} y1={sY + uy * nodeR}
                      x2={pos.x - ux * nodeR} y2={pos.y - uy * nodeR}
                      stroke="var(--color-midnight)"
                      strokeWidth="1.5"
                      markerEnd="url(#maArrow)"
                    />
                    {/* Agent node */}
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

              {/* Label */}
              <text
                x={x} y={245}
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
          const gap = 32;
          const totalW = gap * 3;
          const startX = x - totalW / 2;
          const nodes = [0, 1, 2, 3].map((i) => startX + i * gap);
          const labels = ["1", "2", "3", "4"];
          return (
            <g>
              {nodes.map((nx, i) => (
                <g key={i}>
                  {/* Node */}
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
                  {/* Arrow to next node */}
                  {i < nodes.length - 1 && (
                    <line
                      x1={nx + nodeR} y1={y}
                      x2={nodes[i + 1] - nodeR} y2={y}
                      stroke="var(--color-midnight)"
                      strokeWidth="1.5"
                      markerEnd="url(#maArrow)"
                    />
                  )}
                </g>
              ))}

              {/* Label */}
              <text
                x={x} y={245}
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
          const spread = 44;
          const mids = [x - spread, x, x + spread];
          return (
            <g>
              {/* Coordinator node (top, filled) */}
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

              {/* Fan-out arrows and worker nodes */}
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
                  <g key={i}>
                    {/* Down arrow */}
                    <line
                      x1={x + ux * nodeR} y1={topY + uy * nodeR}
                      x2={mx - ux * nodeR} y2={midY - uy * nodeR}
                      stroke="var(--color-midnight)"
                      strokeWidth="1.5"
                      markerEnd="url(#maArrow)"
                    />
                    {/* Worker node */}
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
                    {/* Converge arrow to merge node */}
                    <line
                      x1={mx + uxB * nodeR} y1={midY + uyB * nodeR}
                      x2={x - uxB * nodeR} y2={botY - uyB * nodeR}
                      stroke="var(--color-midnight)"
                      strokeWidth="1.5"
                      markerEnd="url(#maArrow)"
                    />
                  </g>
                );
              })}

              {/* Merge node (bottom, filled) */}
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

              {/* Label */}
              <text
                x={x} y={245}
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
            { x: x - 28, y: 80 },   // top-left
            { x: x + 28, y: 80 },   // top-right
            { x: x - 28, y: 140 },  // bottom-left
            { x: x + 28, y: 140 },  // bottom-right
          ];
          const labels = ["P1", "P2", "P3", "P4"];
          // Bidirectional pairs (most connections for mesh feel)
          const edges: [number, number][] = [
            [0, 1], [0, 2], [1, 3], [2, 3], [0, 3], [1, 2],
          ];
          return (
            <g>
              {/* Edges (bidirectional, no arrows, use border color for softer look) */}
              {edges.map(([a, b]) => (
                <line
                  key={`${a}-${b}`}
                  x1={positions[a].x} y1={positions[a].y}
                  x2={positions[b].x} y2={positions[b].y}
                  stroke="var(--border)"
                  strokeWidth="1.5"
                />
              ))}

              {/* Peer nodes (no fill — no single control holder) */}
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

              {/* Label */}
              <text
                x={x} y={245}
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
          const midSpread = 36;
          const leafSpread = 18;

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

          function edgeLine(
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
                markerEnd="url(#maArrow)"
              />
            );
          }

          return (
            <g>
              {/* Root to mid edges */}
              {edgeLine(root, midNodes[0], "r-m0")}
              {edgeLine(root, midNodes[1], "r-m1")}

              {/* Mid to leaf edges */}
              {edgeLine(midNodes[0], leafNodes[0], "m0-l0")}
              {edgeLine(midNodes[0], leafNodes[1], "m0-l1")}
              {edgeLine(midNodes[1], leafNodes[2], "m1-l2")}
              {edgeLine(midNodes[1], leafNodes[3], "m1-l3")}

              {/* Root node (filled) */}
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

              {/* Mid-level nodes (filled, delegators) */}
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

              {/* Label */}
              <text
                x={x} y={245}
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

        {/* ── Annotation bar: More control ←→ More autonomy ── */}
        <line
          x1="40" y1="285"
          x2="740" y2="285"
          stroke="var(--color-midnight)"
          strokeWidth="1"
        />
        {/* Left arrowhead */}
        <path
          d="M 40 285 L 48 281 M 40 285 L 48 289"
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Right arrowhead */}
        <path
          d="M 740 285 L 732 281 M 740 285 L 732 289"
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          fill="none"
        />
        <text
          x="90" y="303"
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--fg-3)"
          textAnchor="start"
          letterSpacing="0.08em"
        >
          More control
        </text>
        <text
          x="690" y="303"
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--fg-3)"
          textAnchor="end"
          letterSpacing="0.08em"
        >
          More autonomy
        </text>
      </svg>
    </figure>
  );
}
