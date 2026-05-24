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
 */

export function FivePatternsDiagram() {
  /* ── Layout constants ──────────────────────────────── */
  const colW = 156; // 780 / 5
  const nodeR = 10;

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
      aria-label="Five workflow compositions in order of increasing structural complexity: chaining, routing, parallelisation, orchestrator-workers, evaluator-optimiser"
      style={{ margin: 0, width: "100%", maxWidth: "780px", marginInline: "auto" }}
    >
      <svg
        viewBox="0 0 780 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        {/* ── 1. Chaining ──────────────────────────────────── */}
        {(() => {
          const x = cx[0];
          const nodes = [60, 130, 200];
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
                x1={x} y1={nodes[0] + nodeR}
                x2={x} y2={88}
                stroke="var(--color-midnight)"
                strokeWidth="1.5"
                markerEnd="url(#fpArrow)"
              />

              {/* Gate marker (dashed horizontal bar) */}
              <line
                x1={x - 16} y1={95}
                x2={x + 16} y2={95}
                stroke="var(--color-midnight)"
                strokeWidth="1.5"
                strokeDasharray="4 3"
              />

              {/* Arrow: gate to node 2 */}
              <line
                x1={x} y1={102}
                x2={x} y2={nodes[1] - nodeR}
                stroke="var(--color-midnight)"
                strokeWidth="1.5"
                markerEnd="url(#fpArrow)"
              />

              {/* Arrow: node 2 to node 3 */}
              <line
                x1={x} y1={nodes[1] + nodeR}
                x2={x} y2={nodes[2] - nodeR}
                stroke="var(--color-midnight)"
                strokeWidth="1.5"
                markerEnd="url(#fpArrow)"
              />

              {/* Label */}
              <text
                x={x} y={245}
                fontFamily="var(--font-display)"
                fontSize="13"
                fontWeight="600"
                fill="var(--color-midnight)"
                textAnchor="middle"
              >
                Chaining
              </text>
            </g>
          );
        })()}

        {/* ── 2. Routing ───────────────────────────────────── */}
        {(() => {
          const x = cx[1];
          const topY = 60;
          const botY = 190;
          const spread = 44;
          const bottoms = [x - spread, x, x + spread];
          return (
            <g>
              {/* Top node */}
              <circle
                cx={x} cy={topY} r={nodeR}
                stroke="var(--color-midnight)"
                strokeWidth="1.5"
                fill="none"
              />

              {/* Fan-out arrows and bottom nodes */}
              {bottoms.map((bx) => (
                <g key={bx}>
                  <line
                    x1={x} y1={topY + nodeR}
                    x2={bx} y2={botY - nodeR}
                    stroke="var(--color-midnight)"
                    strokeWidth="1.5"
                    markerEnd="url(#fpArrow)"
                  />
                  <circle
                    cx={bx} cy={botY} r={nodeR}
                    stroke="var(--color-midnight)"
                    strokeWidth="1.5"
                    fill="none"
                  />
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
                Routing
              </text>
            </g>
          );
        })()}

        {/* ── 3. Parallelisation ───────────────────────────── */}
        {(() => {
          const x = cx[2];
          const topY = 60;
          const midY = 130;
          const botY = 200;
          const spread = 44;
          const mids = [x - spread, x, x + spread];
          return (
            <g>
              {/* Top node */}
              <circle
                cx={x} cy={topY} r={nodeR}
                stroke="var(--color-midnight)"
                strokeWidth="1.5"
                fill="none"
              />

              {/* Fan-out arrows and middle nodes */}
              {mids.map((mx) => (
                <g key={mx}>
                  <line
                    x1={x} y1={topY + nodeR}
                    x2={mx} y2={midY - nodeR}
                    stroke="var(--color-midnight)"
                    strokeWidth="1.5"
                    markerEnd="url(#fpArrow)"
                  />
                  <circle
                    cx={mx} cy={midY} r={nodeR}
                    stroke="var(--color-midnight)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  {/* Converge arrows to bottom */}
                  <line
                    x1={mx} y1={midY + nodeR}
                    x2={x} y2={botY - nodeR}
                    stroke="var(--color-midnight)"
                    strokeWidth="1.5"
                    markerEnd="url(#fpArrow)"
                  />
                </g>
              ))}

              {/* Bottom node */}
              <circle
                cx={x} cy={botY} r={nodeR}
                stroke="var(--color-midnight)"
                strokeWidth="1.5"
                fill="none"
              />

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

        {/* ── 4. Orchestrator-Workers ──────────────────────── */}
        {(() => {
          const x = cx[3];
          const topY = 60;
          const workerY = 140;
          const botY = 210;
          const workers = [x - 40, x, x + 40];
          return (
            <g>
              {/* Orchestrator node (top) */}
              <circle
                cx={x} cy={topY} r={nodeR}
                stroke="var(--color-midnight)"
                strokeWidth="1.5"
                fill="none"
              />
              <text
                x={x} y={topY - 16}
                fontFamily="var(--font-mono)"
                fontSize="8"
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
                    x1={x} y1={topY + nodeR}
                    x2={wx} y2={workerY - nodeR}
                    stroke="var(--color-midnight)"
                    strokeWidth="1.5"
                    markerEnd="url(#fpArrow)"
                  />
                  <circle
                    cx={wx} cy={workerY} r={nodeR}
                    stroke="var(--color-midnight)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </g>
              ))}

              {/* Ellipsis between last two workers */}
              <text
                x={x + 20} y={workerY + 4}
                fontFamily="var(--font-mono)"
                fontSize="11"
                fill="var(--fg-3)"
                textAnchor="middle"
              >
                ...
              </text>

              {/* Converge back to orchestrator (bottom) */}
              {workers.map((wx) => (
                <line
                  key={`ret-${wx}`}
                  x1={wx} y1={workerY + nodeR}
                  x2={x} y2={botY - nodeR}
                  stroke="var(--color-midnight)"
                  strokeWidth="1.5"
                  markerEnd="url(#fpArrow)"
                />
              ))}

              {/* Orchestrator node (bottom, same node conceptually) */}
              <circle
                cx={x} cy={botY} r={nodeR}
                stroke="var(--color-midnight)"
                strokeWidth="1.5"
                fill="none"
              />

              {/* Label */}
              <text
                x={x} y={252}
                fontFamily="var(--font-display)"
                fontSize="13"
                fontWeight="600"
                fill="var(--color-midnight)"
                textAnchor="middle"
              >
                Orchestrator
              </text>
              <text
                x={x} y={267}
                fontFamily="var(--font-display)"
                fontSize="13"
                fontWeight="600"
                fill="var(--color-midnight)"
                textAnchor="middle"
              >
                -Workers
              </text>
            </g>
          );
        })()}

        {/* ── 5. Evaluator-Optimiser ───────────────────────── */}
        {(() => {
          const x = cx[4];
          const genX = x - 28;
          const evalX = x + 28;
          const nodeY = 110;
          const exitY = 210;
          return (
            <g>
              {/* Generator node */}
              <circle
                cx={genX} cy={nodeY} r={nodeR}
                stroke="var(--color-midnight)"
                strokeWidth="1.5"
                fill="none"
              />
              <text
                x={genX} y={nodeY - 16}
                fontFamily="var(--font-mono)"
                fontSize="8"
                fill="var(--fg-3)"
                textAnchor="middle"
                letterSpacing="0.04em"
              >
                gen.
              </text>

              {/* Evaluator node */}
              <circle
                cx={evalX} cy={nodeY} r={nodeR}
                stroke="var(--color-midnight)"
                strokeWidth="1.5"
                fill="none"
              />
              <text
                x={evalX} y={nodeY - 16}
                fontFamily="var(--font-mono)"
                fontSize="8"
                fill="var(--fg-3)"
                textAnchor="middle"
                letterSpacing="0.04em"
              >
                eval.
              </text>

              {/* Circular loop arrow (accent colour) */}
              <path
                d={`M ${genX + nodeR} ${nodeY - 6}
                    Q ${x} ${nodeY - 34} ${evalX - nodeR} ${nodeY - 6}`}
                stroke="var(--accent)"
                strokeWidth="1.5"
                fill="none"
                markerEnd="url(#fpArrowAccent)"
              />
              <path
                d={`M ${evalX - nodeR} ${nodeY + 6}
                    Q ${x} ${nodeY + 34} ${genX + nodeR} ${nodeY + 6}`}
                stroke="var(--accent)"
                strokeWidth="1.5"
                fill="none"
                markerEnd="url(#fpArrowAccent)"
              />

              {/* Exit arrow downward from midpoint */}
              <line
                x1={x} y1={nodeY + 34}
                x2={x} y2={exitY}
                stroke="var(--color-midnight)"
                strokeWidth="1.5"
                markerEnd="url(#fpArrow)"
              />

              {/* Exit node */}
              <circle
                cx={x} cy={exitY + 2}
                r={4}
                fill="var(--color-midnight)"
                stroke="none"
              />

              {/* Label */}
              <text
                x={x} y={252}
                fontFamily="var(--font-display)"
                fontSize="13"
                fontWeight="600"
                fill="var(--color-midnight)"
                textAnchor="middle"
              >
                Evaluator
              </text>
              <text
                x={x} y={267}
                fontFamily="var(--font-display)"
                fontSize="13"
                fontWeight="600"
                fill="var(--color-midnight)"
                textAnchor="middle"
              >
                -Optimiser
              </text>
            </g>
          );
        })()}

        {/* ── Complexity axis ──────────────────────────────── */}
        <line
          x1="40" y1="295"
          x2="740" y2="295"
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          markerEnd="url(#fpArrow)"
        />
        <text
          x="390" y="313"
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--color-midnight)"
          textAnchor="middle"
          fontWeight="600"
          letterSpacing="0.14em"
        >
          INCREASING STRUCTURAL COMPLEXITY
        </text>

        {/* ── Marker definitions ──────────────────────────── */}
        <defs>
          <marker
            id="fpArrow"
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
            id="fpArrowAccent"
            viewBox="0 0 10 10"
            refX="10" refY="5"
            markerWidth="6" markerHeight="6"
            orient="auto-start-reverse"
          >
            <path
              d="M 0 2 L 10 5 L 0 8"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="1.5"
            />
          </marker>
        </defs>
      </svg>
    </figure>
  );
}
