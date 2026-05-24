/**
 * HarnessDiagram — Agent = Model + Harness
 *
 * Control loop: model at the centre, harness as the enclosing frame,
 * guides feeding in from the left, sensors reading out on the right,
 * and a feedback-loop arrow from sensors back to guides (the focal element).
 *
 * Monochrome on the midnight/gray scale. The single permitted accent
 * is the feedback-loop arrow.
 */

export function HarnessDiagram() {
  return (
    <figure
      role="img"
      aria-label="Agent architecture: Model at the centre, Harness frame around it with Guides feeding in and Sensors reading out, connected by a feedback loop"
      style={{ margin: 0, width: "100%", maxWidth: "780px", marginInline: "auto" }}
    >
      <svg
        viewBox="0 0 780 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        {/* ── Harness frame ───────────────────────────────── */}
        <rect
          x="40" y="40" width="700" height="300" rx="4"
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          fill="none"
        />
        <text
          x="56" y="30"
          fontFamily="var(--font-mono)"
          fontSize="10"
          letterSpacing="0.18em"
          fill="var(--fg-3)"
        >
          HARNESS
        </text>

        {/* ── Model box (centre) ──────────────────────────── */}
        <rect
          x="300" y="130" width="180" height="100" rx="4"
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          fill="var(--bg-surface)"
        />
        <text
          x="390" y="175"
          fontFamily="var(--font-display)"
          fontSize="18"
          fontWeight="700"
          fill="var(--color-midnight)"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          Model
        </text>
        <text
          x="390" y="200"
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--fg-3)"
          textAnchor="middle"
          dominantBaseline="middle"
          letterSpacing="0.06em"
        >
          reasoning core
        </text>

        {/* ── Guides (left side) ──────────────────────────── */}
        <rect
          x="70" y="100" width="160" height="160" rx="4"
          stroke="var(--border)"
          strokeWidth="1"
          strokeDasharray="4 3"
          fill="none"
        />
        <text
          x="150" y="130"
          fontFamily="var(--font-display)"
          fontSize="14"
          fontWeight="600"
          fill="var(--color-midnight)"
          textAnchor="middle"
        >
          Guides
        </text>
        <text
          x="150" y="148"
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="var(--fg-3)"
          textAnchor="middle"
          letterSpacing="0.04em"
        >
          feedforward
        </text>

        {/* Guide items */}
        {[
          { label: "System prompts", y: 170 },
          { label: "Tool definitions", y: 188 },
          { label: "Context retrieval", y: 206 },
          { label: "AGENTS.md", y: 224 },
        ].map((item) => (
          <text
            key={item.label}
            x="94"
            y={item.y}
            fontFamily="var(--font-mono)"
            fontSize="9"
            fill="var(--fg-2)"
            letterSpacing="0.02em"
          >
            · {item.label}
          </text>
        ))}

        {/* Arrow: Guides → Model */}
        <line
          x1="230" y1="180" x2="296" y2="180"
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          markerEnd="url(#arrowMid)"
        />

        {/* ── Sensors (right side) ────────────────────────── */}
        <rect
          x="550" y="100" width="160" height="160" rx="4"
          stroke="var(--border)"
          strokeWidth="1"
          strokeDasharray="4 3"
          fill="none"
        />
        <text
          x="630" y="130"
          fontFamily="var(--font-display)"
          fontSize="14"
          fontWeight="600"
          fill="var(--color-midnight)"
          textAnchor="middle"
        >
          Sensors
        </text>
        <text
          x="630" y="148"
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="var(--fg-3)"
          textAnchor="middle"
          letterSpacing="0.04em"
        >
          feedback
        </text>

        {/* Sensor items */}
        {[
          { label: "Type checkers", y: 170 },
          { label: "Schema validators", y: 188 },
          { label: "Linters", y: 206 },
          { label: "Evaluator models", y: 224 },
        ].map((item) => (
          <text
            key={item.label}
            x="574"
            y={item.y}
            fontFamily="var(--font-mono)"
            fontSize="9"
            fill="var(--fg-2)"
            letterSpacing="0.02em"
          >
            · {item.label}
          </text>
        ))}

        {/* Arrow: Model → Sensors */}
        <line
          x1="480" y1="180" x2="546" y2="180"
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          markerEnd="url(#arrowMid)"
        />

        {/* ── Feedback loop arrow (focal element) ─────────── */}
        <path
          d="M 630 264 L 630 360 Q 630 376 614 376 L 166 376 Q 150 376 150 360 L 150 264"
          stroke="var(--color-midnight)"
          strokeWidth="2"
          fill="none"
        />
        {/* Upward arrowhead at the end of the loop (pointing into Guides) */}
        <polyline
          points="143,274 150,258 157,274"
          stroke="var(--color-midnight)"
          strokeWidth="2"
          fill="none"
          strokeLinejoin="miter"
        />
        <text
          x="390" y="392"
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--color-midnight)"
          textAnchor="middle"
          letterSpacing="0.14em"
          fontWeight="600"
        >
          FEEDBACK LOOP
        </text>

        {/* ── Axis labels ─────────────────────────────────── */}
        <text
          x="150" y="80"
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="var(--fg-3)"
          textAnchor="middle"
          letterSpacing="0.08em"
        >
          before the model acts
        </text>
        <text
          x="630" y="80"
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="var(--fg-3)"
          textAnchor="middle"
          letterSpacing="0.08em"
        >
          after the model acts
        </text>

        {/* ── Marker definitions ──────────────────────────── */}
        <defs>
          <marker
            id="arrowMid"
            viewBox="0 0 10 10"
            refX="10" refY="5"
            markerWidth="8" markerHeight="8"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9" fill="none" stroke="var(--color-midnight)" strokeWidth="1.5" />
          </marker>
        </defs>
      </svg>
    </figure>
  );
}
