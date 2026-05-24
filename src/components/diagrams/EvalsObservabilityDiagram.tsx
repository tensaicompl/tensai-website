/**
 * EvalsObservabilityDiagram — Evals, Observability & Issue Lifecycle
 *
 * Three vertical zones:
 * 1. Top — Three concentric eval surfaces (unit → task → system) with
 *    an agent dot at the centre.
 * 2. Middle — Trace tree: root span branches to child spans, each with
 *    gen_ai.chat and tool_call leaves. One leaf highlighted with accent.
 * 3. Bottom — Issue lifecycle ratchet: five nodes in a clockwise circle
 *    connected by arrows, with "new eval case" feeding back up.
 *
 * Single accent: var(--accent) on the highlighted trace span only.
 */

export function EvalsObservabilityDiagram() {
  return (
    <figure
      role="img"
      aria-label="Evals and observability: three eval surfaces, a trace tree with spans, and an issue lifecycle ratchet feeding new eval cases back to the innermost ring"
      style={{ margin: 0, width: "100%", maxWidth: "780px", marginInline: "auto" }}
    >
      <svg
        viewBox="0 0 780 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        {/* ── Marker definitions ──────────────────────────────── */}
        <defs>
          <marker
            id="eoArrow"
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
            id="eoArrowMuted"
            viewBox="0 0 10 10"
            refX="10"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9" fill="none" stroke="var(--fg-3)" strokeWidth="1.5" />
          </marker>
          <marker
            id="eoArrowBorder"
            viewBox="0 0 10 10"
            refX="10"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9" fill="none" stroke="var(--border)" strokeWidth="1.5" />
          </marker>
        </defs>

        {/* ════════════════════════════════════════════════════════
            TOP ZONE — Three concentric eval surfaces
            ════════════════════════════════════════════════════════ */}

        {/* Outermost ring — System evals */}
        <rect
          x="190" y="12" width="400" height="140" rx="4"
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          fill="none"
        />
        <text
          x="206" y="28"
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="var(--fg-3)"
          letterSpacing="0.06em"
        >
          System evals — N runs — minutes
        </text>

        {/* Middle ring — Task evals */}
        <rect
          x="230" y="36" width="320" height="100" rx="4"
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          fill="none"
        />
        <text
          x="246" y="52"
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="var(--fg-3)"
          letterSpacing="0.06em"
        >
          Task evals — full trajectory — seconds
        </text>

        {/* Innermost ring — Unit evals */}
        <rect
          x="280" y="58" width="220" height="64" rx="4"
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          fill="var(--bg-surface)"
        />
        <text
          x="296" y="74"
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="var(--fg-3)"
          letterSpacing="0.06em"
        >
          Unit evals — single turn — ms
        </text>

        {/* Agent dot at centre */}
        <circle
          cx="390" cy="95"
          r="6"
          fill="var(--color-midnight)"
        />
        <text
          x="404" y="99"
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="var(--fg-2)"
          letterSpacing="0.04em"
        >
          agent
        </text>

        {/* ── Downward arrow: failure signal ──────────────────── */}
        <line
          x1="390" y1="152" x2="390" y2="188"
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          markerEnd="url(#eoArrow)"
        />
        <text
          x="404" y="176"
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="var(--fg-3)"
          letterSpacing="0.04em"
        >
          failure signal
        </text>

        {/* ════════════════════════════════════════════════════════
            MIDDLE ZONE — Trace tree
            ════════════════════════════════════════════════════════ */}

        {/* Root span */}
        <rect
          x="40" y="198" width="100" height="28" rx="4"
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          fill="var(--bg-surface)"
        />
        <text
          x="90" y="216"
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--color-midnight)"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          agent.task
        </text>

        {/* Branch lines from root to children */}
        {/* Horizontal trunk */}
        <line
          x1="140" y1="212" x2="172" y2="212"
          stroke="var(--color-midnight)"
          strokeWidth="1"
        />
        {/* Vertical connector */}
        <line
          x1="172" y1="198" x2="172" y2="262"
          stroke="var(--color-midnight)"
          strokeWidth="1"
        />

        {/* ── Child span: step.1 ──────────────────────────────── */}
        <line x1="172" y1="198" x2="196" y2="198" stroke="var(--color-midnight)" strokeWidth="1" />
        <rect
          x="196" y="184" width="70" height="28" rx="4"
          stroke="var(--border)"
          strokeWidth="1"
          fill="var(--bg-surface)"
        />
        <text
          x="231" y="202"
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="var(--color-midnight)"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          step.1
        </text>

        {/* step.1 leaves */}
        <line x1="266" y1="192" x2="282" y2="192" stroke="var(--border)" strokeWidth="1" />
        <line x1="282" y1="184" x2="282" y2="200" stroke="var(--border)" strokeWidth="1" />

        <line x1="282" y1="184" x2="296" y2="184" stroke="var(--border)" strokeWidth="1" />
        <rect
          x="296" y="174" width="80" height="20" rx="4"
          stroke="var(--border)"
          strokeWidth="1"
          fill="var(--bg-surface)"
        />
        <text
          x="336" y="188"
          fontFamily="var(--font-mono)"
          fontSize="8"
          fill="var(--fg-2)"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          gen_ai.chat
        </text>

        <line x1="282" y1="200" x2="296" y2="200" stroke="var(--border)" strokeWidth="1" />
        <rect
          x="296" y="190" width="80" height="20" rx="4"
          stroke="var(--border)"
          strokeWidth="1"
          fill="var(--bg-surface)"
        />
        <text
          x="336" y="204"
          fontFamily="var(--font-mono)"
          fontSize="8"
          fill="var(--fg-2)"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          tool_call
        </text>

        {/* ── Child span: step.2 ──────────────────────────────── */}
        <line x1="172" y1="230" x2="196" y2="230" stroke="var(--color-midnight)" strokeWidth="1" />
        <rect
          x="196" y="216" width="70" height="28" rx="4"
          stroke="var(--border)"
          strokeWidth="1"
          fill="var(--bg-surface)"
        />
        <text
          x="231" y="234"
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="var(--color-midnight)"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          step.2
        </text>

        {/* step.2 leaves */}
        <line x1="266" y1="224" x2="282" y2="224" stroke="var(--border)" strokeWidth="1" />
        <line x1="282" y1="216" x2="282" y2="232" stroke="var(--border)" strokeWidth="1" />

        <line x1="282" y1="216" x2="296" y2="216" stroke="var(--border)" strokeWidth="1" />
        <rect
          x="296" y="206" width="80" height="20" rx="4"
          stroke="var(--border)"
          strokeWidth="1"
          fill="var(--bg-surface)"
        />
        <text
          x="336" y="220"
          fontFamily="var(--font-mono)"
          fontSize="8"
          fill="var(--fg-2)"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          gen_ai.chat
        </text>

        {/* HIGHLIGHTED leaf — accent fill */}
        <line x1="282" y1="232" x2="296" y2="232" stroke="var(--border)" strokeWidth="1" />
        <rect
          x="296" y="222" width="80" height="20" rx="4"
          stroke="var(--accent)"
          strokeWidth="1.5"
          fill="var(--accent)"
          fillOpacity="0.12"
        />
        <text
          x="336" y="236"
          fontFamily="var(--font-mono)"
          fontSize="8"
          fill="var(--accent)"
          fontWeight="600"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          tool_call
        </text>

        {/* ── Child span: step.3 ──────────────────────────────── */}
        <line x1="172" y1="262" x2="196" y2="262" stroke="var(--color-midnight)" strokeWidth="1" />
        <rect
          x="196" y="248" width="70" height="28" rx="4"
          stroke="var(--border)"
          strokeWidth="1"
          fill="var(--bg-surface)"
        />
        <text
          x="231" y="266"
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="var(--color-midnight)"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          step.3
        </text>

        {/* step.3 leaves */}
        <line x1="266" y1="256" x2="282" y2="256" stroke="var(--border)" strokeWidth="1" />
        <line x1="282" y1="248" x2="282" y2="264" stroke="var(--border)" strokeWidth="1" />

        <line x1="282" y1="248" x2="296" y2="248" stroke="var(--border)" strokeWidth="1" />
        <rect
          x="296" y="238" width="80" height="20" rx="4"
          stroke="var(--border)"
          strokeWidth="1"
          fill="var(--bg-surface)"
        />
        <text
          x="336" y="252"
          fontFamily="var(--font-mono)"
          fontSize="8"
          fill="var(--fg-2)"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          gen_ai.chat
        </text>

        <line x1="282" y1="264" x2="296" y2="264" stroke="var(--border)" strokeWidth="1" />
        <rect
          x="296" y="254" width="80" height="20" rx="4"
          stroke="var(--border)"
          strokeWidth="1"
          fill="var(--bg-surface)"
        />
        <text
          x="336" y="268"
          fontFamily="var(--font-mono)"
          fontSize="8"
          fill="var(--fg-2)"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          tool_call
        </text>

        {/* Trace annotation */}
        <text
          x="390" y="278"
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--fg-3)"
          letterSpacing="0.06em"
        >
          trace with bodies
        </text>

        {/* ════════════════════════════════════════════════════════
            BOTTOM ZONE — Issue lifecycle ratchet
            ════════════════════════════════════════════════════════ */}

        {/* Five nodes arranged in a clockwise ellipse
            Centre of ellipse at (390, 410), rx=200, ry=60
            Positions (clockwise from top):
              Detection        — top centre
              Triage           — right
              Root-cause       — bottom-right
              Harness improvement — bottom-left
              Verification     — left
        */}

        {(() => {
          const cx = 390;
          const cy = 410;
          const rx = 200;
          const ry = 56;

          const nodes = [
            { label: "Detection", angle: -90 },
            { label: "Triage", angle: -18 },
            { label: "Root-cause", angle: 54 },
            { label: "Harness impr.", angle: 126 },
            { label: "Verification", angle: 198 },
          ];

          const toRad = (deg: number) => (deg * Math.PI) / 180;
          const pos = (angle: number) => ({
            x: cx + rx * Math.cos(toRad(angle)),
            y: cy + ry * Math.sin(toRad(angle)),
          });

          const nodeW = 100;
          const nodeH = 24;

          const elements: React.JSX.Element[] = [];

          // Draw arrows between consecutive nodes
          for (let i = 0; i < nodes.length; i++) {
            const from = pos(nodes[i].angle);
            const to = pos(nodes[(i + 1) % nodes.length].angle);

            // Calculate midpoint arc — offset outward for curve
            const midAngle = (nodes[i].angle + nodes[(i + 1) % nodes.length].angle) / 2;
            // Handle wrap-around for last→first
            const actualMidAngle = i === nodes.length - 1
              ? (nodes[i].angle + nodes[0].angle + 360) / 2
              : midAngle;
            const mid = pos(actualMidAngle);

            // Shorten line to avoid overlapping node boxes
            const dx = to.x - from.x;
            const dy = to.y - from.y;
            const len = Math.sqrt(dx * dx + dy * dy);
            const shortenFrom = 54;
            const shortenTo = 54;
            const sx = from.x + (dx / len) * shortenFrom;
            const sy = from.y + (dy / len) * shortenFrom;
            const ex = to.x - (dx / len) * shortenTo;
            const ey = to.y - (dy / len) * shortenTo;

            elements.push(
              <line
                key={`eo-lifecycle-arrow-${i}`}
                x1={sx} y1={sy} x2={ex} y2={ey}
                stroke="var(--color-midnight)"
                strokeWidth="1.5"
                markerEnd="url(#eoArrow)"
              />
            );
          }

          // Draw nodes
          nodes.forEach((node, i) => {
            const p = pos(node.angle);
            elements.push(
              <g key={`eo-lifecycle-node-${i}`}>
                <rect
                  x={p.x - nodeW / 2}
                  y={p.y - nodeH / 2}
                  width={nodeW}
                  height={nodeH}
                  rx="4"
                  stroke="var(--color-midnight)"
                  strokeWidth="1.5"
                  fill="var(--bg-surface)"
                />
                <text
                  x={p.x}
                  y={p.y}
                  fontFamily="var(--font-mono)"
                  fontSize="9"
                  fill="var(--color-midnight)"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  letterSpacing="0.02em"
                >
                  {node.label}
                </text>
              </g>
            );
          });

          // Arrow from "Harness improvement" up to innermost eval ring
          const harnessPos = pos(nodes[3].angle);
          elements.push(
            <line
              key="eo-new-eval-arrow"
              x1={harnessPos.x}
              y1={harnessPos.y - nodeH / 2 - 2}
              x2={320}
              y2={126}
              stroke="var(--fg-3)"
              strokeWidth="1"
              strokeDasharray="4 3"
              markerEnd="url(#eoArrowMuted)"
            />
          );
          elements.push(
            <text
              key="eo-new-eval-label"
              x={harnessPos.x - 48}
              y={(harnessPos.y - nodeH / 2 + 126) / 2}
              fontFamily="var(--font-mono)"
              fontSize="8"
              fill="var(--fg-3)"
              letterSpacing="0.04em"
              textAnchor="middle"
              transform={`rotate(-58, ${harnessPos.x - 48}, ${(harnessPos.y - nodeH / 2 + 126) / 2})`}
            >
              new eval case
            </text>
          );

          return elements;
        })()}
      </svg>
    </figure>
  );
}
