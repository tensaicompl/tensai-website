/**
 * AgentsVsWorkflowsDiagram — The Autonomy Gradient
 *
 * Three tiers on a horizontal gradient: single model call (left),
 * workflow (centre), agent (right). The axis label is "who decides
 * the next step" — moving from "you, in code" to "the model, at runtime".
 * The workflow box shows a fixed path; the agent box shows a dynamic one.
 */

export function AgentsVsWorkflowsDiagram() {
  return (
    <figure
      role="img"
      aria-label="The autonomy gradient: single model call, workflow, and agent — from fixed control flow to model-directed"
      style={{ margin: 0, width: "100%", maxWidth: "780px", marginInline: "auto" }}
    >
      <svg
        viewBox="0 0 780 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        {/* ── Gradient axis ─────────────────────────────────── */}
        <line
          x1="60" y1="340" x2="720" y2="340"
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          markerEnd="url(#avwArrow)"
        />
        <text
          x="60" y="366"
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="var(--fg-3)"
          letterSpacing="0.08em"
        >
          you decide, in code
        </text>
        <text
          x="720" y="366"
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="var(--fg-3)"
          textAnchor="end"
          letterSpacing="0.08em"
        >
          the model decides, at runtime
        </text>
        <text
          x="390" y="366"
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--color-midnight)"
          textAnchor="middle"
          fontWeight="600"
          letterSpacing="0.14em"
        >
          AUTONOMY
        </text>

        {/* ── Tier 1: Single model call ─────────────────────── */}
        <rect
          x="40" y="60" width="180" height="250" rx="4"
          stroke="var(--border)"
          strokeWidth="1"
          fill="none"
        />
        <text
          x="130" y="90"
          fontFamily="var(--font-display)"
          fontSize="15"
          fontWeight="700"
          fill="var(--color-midnight)"
          textAnchor="middle"
        >
          Single Call
        </text>
        <text
          x="130" y="108"
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="var(--fg-3)"
          textAnchor="middle"
          letterSpacing="0.04em"
        >
          one step, one model
        </text>

        {/* Single call flow: input → model → output */}
        <rect x="90" y="140" width="80" height="30" rx="3" fill="var(--bg-surface)" stroke="var(--border)" strokeWidth="1" />
        <text x="130" y="159" fontFamily="var(--font-mono)" fontSize="9" fill="var(--fg-2)" textAnchor="middle">input</text>

        <line x1="130" y1="170" x2="130" y2="195" stroke="var(--color-midnight)" strokeWidth="1" markerEnd="url(#avwArrowSm)" />

        <rect x="90" y="198" width="80" height="30" rx="3" fill="var(--bg-surface)" stroke="var(--color-midnight)" strokeWidth="1.5" />
        <text x="130" y="217" fontFamily="var(--font-mono)" fontSize="9" fill="var(--color-midnight)" textAnchor="middle" fontWeight="600">model</text>

        <line x1="130" y1="228" x2="130" y2="253" stroke="var(--color-midnight)" strokeWidth="1" markerEnd="url(#avwArrowSm)" />

        <rect x="90" y="256" width="80" height="30" rx="3" fill="var(--bg-surface)" stroke="var(--border)" strokeWidth="1" />
        <text x="130" y="275" fontFamily="var(--font-mono)" fontSize="9" fill="var(--fg-2)" textAnchor="middle">output</text>

        {/* ── Tier 2: Workflow ──────────────────────────────── */}
        <rect
          x="260" y="60" width="260" height="250" rx="4"
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          fill="none"
        />
        <text
          x="390" y="90"
          fontFamily="var(--font-display)"
          fontSize="15"
          fontWeight="700"
          fill="var(--color-midnight)"
          textAnchor="middle"
        >
          Workflow
        </text>
        <text
          x="390" y="108"
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="var(--fg-3)"
          textAnchor="middle"
          letterSpacing="0.04em"
        >
          fixed path, predefined in code
        </text>

        {/* Workflow: classify → route → draft → send (linear) */}
        {[
          { label: "classify", x: 300, y: 135 },
          { label: "route", x: 380, y: 135 },
          { label: "draft", x: 460, y: 135 },
        ].map((step, i, arr) => (
          <g key={step.label}>
            <rect x={step.x} y={step.y} width="60" height="26" rx="3" fill="var(--bg-surface)" stroke="var(--color-midnight)" strokeWidth="1" />
            <text x={step.x + 30} y={step.y + 17} fontFamily="var(--font-mono)" fontSize="8" fill="var(--color-midnight)" textAnchor="middle">{step.label}</text>
            {i < arr.length - 1 && (
              <line x1={step.x + 60} y1={step.y + 13} x2={arr[i + 1].x} y2={arr[i + 1].y + 13} stroke="var(--color-midnight)" strokeWidth="1" markerEnd="url(#avwArrowSm)" />
            )}
          </g>
        ))}

        {/* Route branching down */}
        <line x1="410" y1="161" x2="410" y2="180" stroke="var(--color-midnight)" strokeWidth="1" />
        <line x1="330" y1="180" x2="450" y2="180" stroke="var(--color-midnight)" strokeWidth="1" />

        {/* Branch A */}
        <line x1="330" y1="180" x2="330" y2="196" stroke="var(--color-midnight)" strokeWidth="1" markerEnd="url(#avwArrowSm)" />
        <rect x="300" y="200" width="60" height="26" rx="3" fill="var(--bg-surface)" stroke="var(--border)" strokeWidth="1" />
        <text x="330" y="217" fontFamily="var(--font-mono)" fontSize="8" fill="var(--fg-2)" textAnchor="middle">refund</text>

        {/* Branch B */}
        <line x1="450" y1="180" x2="450" y2="196" stroke="var(--color-midnight)" strokeWidth="1" markerEnd="url(#avwArrowSm)" />
        <rect x="420" y="200" width="60" height="26" rx="3" fill="var(--bg-surface)" stroke="var(--border)" strokeWidth="1" />
        <text x="450" y="217" fontFamily="var(--font-mono)" fontSize="8" fill="var(--fg-2)" textAnchor="middle">escalate</text>

        {/* Converge to send */}
        <line x1="330" y1="226" x2="330" y2="246" stroke="var(--color-midnight)" strokeWidth="1" />
        <line x1="450" y1="226" x2="450" y2="246" stroke="var(--color-midnight)" strokeWidth="1" />
        <line x1="330" y1="246" x2="450" y2="246" stroke="var(--color-midnight)" strokeWidth="1" />
        <line x1="390" y1="246" x2="390" y2="260" stroke="var(--color-midnight)" strokeWidth="1" markerEnd="url(#avwArrowSm)" />
        <rect x="360" y="264" width="60" height="26" rx="3" fill="var(--bg-surface)" stroke="var(--color-midnight)" strokeWidth="1" />
        <text x="390" y="281" fontFamily="var(--font-mono)" fontSize="8" fill="var(--color-midnight)" textAnchor="middle" fontWeight="600">send</text>

        {/* ── Tier 3: Agent ─────────────────────────────────── */}
        <rect
          x="560" y="60" width="180" height="250" rx="4"
          stroke="var(--color-midnight)"
          strokeWidth="2"
          fill="none"
        />
        <text
          x="650" y="90"
          fontFamily="var(--font-display)"
          fontSize="15"
          fontWeight="700"
          fill="var(--color-midnight)"
          textAnchor="middle"
        >
          Agent
        </text>
        <text
          x="650" y="108"
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="var(--fg-3)"
          textAnchor="middle"
          letterSpacing="0.04em"
        >
          dynamic path, model-directed
        </text>

        {/* Agent loop: think → act → observe (cycle) */}
        <rect x="610" y="130" width="80" height="28" rx="3" fill="var(--bg-surface)" stroke="var(--color-midnight)" strokeWidth="1.5" />
        <text x="650" y="148" fontFamily="var(--font-mono)" fontSize="9" fill="var(--color-midnight)" textAnchor="middle" fontWeight="600">think</text>

        <line x1="690" y1="144" x2="710" y2="144" stroke="var(--color-midnight)" strokeWidth="1" />
        <line x1="710" y1="144" x2="710" y2="195" stroke="var(--color-midnight)" strokeWidth="1" markerEnd="url(#avwArrowSm)" />

        <rect x="610" y="200" width="80" height="28" rx="3" fill="var(--bg-surface)" stroke="var(--color-midnight)" strokeWidth="1" />
        <text x="650" y="218" fontFamily="var(--font-mono)" fontSize="9" fill="var(--color-midnight)" textAnchor="middle">act</text>

        <line x1="610" y1="214" x2="590" y2="214" stroke="var(--color-midnight)" strokeWidth="1" />
        <line x1="590" y1="214" x2="590" y2="265" stroke="var(--color-midnight)" strokeWidth="1" markerEnd="url(#avwArrowSm)" />

        <rect x="610" y="270" width="80" height="28" rx="3" fill="var(--bg-surface)" stroke="var(--border)" strokeWidth="1" />
        <text x="650" y="288" fontFamily="var(--font-mono)" fontSize="9" fill="var(--fg-2)" textAnchor="middle">observe</text>

        {/* Loop back arrow */}
        <path
          d="M 610 284 L 580 284 Q 572 284 572 276 L 572 148 Q 572 140 580 140 L 606 140"
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="4 3"
          markerEnd="url(#avwArrowSm)"
        />
        <text
          x="564" y="215"
          fontFamily="var(--font-mono)"
          fontSize="8"
          fill="var(--fg-3)"
          textAnchor="middle"
          letterSpacing="0.04em"
          transform="rotate(-90 564 215)"
        >
          loop
        </text>

        {/* ── Marker definitions ──────────────────────────── */}
        <defs>
          <marker
            id="avwArrow"
            viewBox="0 0 10 10"
            refX="10" refY="5"
            markerWidth="8" markerHeight="8"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9" fill="none" stroke="var(--color-midnight)" strokeWidth="1.5" />
          </marker>
          <marker
            id="avwArrowSm"
            viewBox="0 0 10 10"
            refX="10" refY="5"
            markerWidth="6" markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 2 L 10 5 L 0 8" fill="none" stroke="var(--color-midnight)" strokeWidth="1.5" />
          </marker>
        </defs>
      </svg>
    </figure>
  );
}
