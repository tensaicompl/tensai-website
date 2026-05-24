/**
 * MemoryContextDiagram — The Memory-Context Loop
 *
 * Centre: large Working Memory (Context Window) box with accent border.
 * Left: three persistent stores stacked vertically (Episodic, Semantic, Procedural).
 * Four operations form the cycle:
 *   Select — arrows from stores into Working Memory
 *   Write  — arrows from Working Memory back to stores
 *   Compress — circular arrow within Working Memory
 *   Isolate — Working Memory splits into scoped rectangles on the right
 *
 * Single accent: var(--accent) on Working Memory border and operation labels.
 */

export function MemoryContextDiagram() {
  return (
    <figure
      role="img"
      aria-label="The Memory-Context Loop: three persistent memory stores feed into a central Working Memory via Select, Write, Compress, and Isolate operations"
      style={{ margin: 0, width: "100%", maxWidth: "780px", marginInline: "auto" }}
    >
      <svg
        viewBox="0 0 780 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        {/* ── Marker definitions ──────────────────────────── */}
        <defs>
          <marker
            id="mcArrow"
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
            id="mcArrowAccent"
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
              stroke="var(--accent)"
              strokeWidth="1.5"
            />
          </marker>
        </defs>

        {/* ── Memory stores (left column) ─────────────────── */}

        {/* Episodic Memory */}
        <rect
          x="40"
          y="50"
          width="150"
          height="70"
          rx="4"
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          fill="var(--bg-surface)"
        />
        <text
          x="115"
          y="80"
          fontFamily="var(--font-display)"
          fontSize="13"
          fontWeight="600"
          fill="var(--color-midnight)"
          textAnchor="middle"
        >
          Episodic
        </text>
        <text
          x="115"
          y="100"
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="var(--fg-3)"
          textAnchor="middle"
          letterSpacing="0.04em"
        >
          past interactions
        </text>

        {/* Semantic Memory */}
        <rect
          x="40"
          y="165"
          width="150"
          height="70"
          rx="4"
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          fill="var(--bg-surface)"
        />
        <text
          x="115"
          y="195"
          fontFamily="var(--font-display)"
          fontSize="13"
          fontWeight="600"
          fill="var(--color-midnight)"
          textAnchor="middle"
        >
          Semantic
        </text>
        <text
          x="115"
          y="215"
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="var(--fg-3)"
          textAnchor="middle"
          letterSpacing="0.04em"
        >
          facts and knowledge
        </text>

        {/* Procedural Memory */}
        <rect
          x="40"
          y="280"
          width="150"
          height="70"
          rx="4"
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          fill="var(--bg-surface)"
        />
        <text
          x="115"
          y="310"
          fontFamily="var(--font-display)"
          fontSize="13"
          fontWeight="600"
          fill="var(--color-midnight)"
          textAnchor="middle"
        >
          Procedural
        </text>
        <text
          x="115"
          y="330"
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="var(--fg-3)"
          textAnchor="middle"
          letterSpacing="0.04em"
        >
          skills and patterns
        </text>

        {/* ── Working Memory (centre, focal element) ──────── */}
        <rect
          x="270"
          y="80"
          width="240"
          height="240"
          rx="6"
          stroke="var(--accent)"
          strokeWidth="2"
          fill="rgba(109, 40, 217, 0.05)"
        />
        <text
          x="390"
          y="118"
          fontFamily="var(--font-display)"
          fontSize="15"
          fontWeight="700"
          fill="var(--color-midnight)"
          textAnchor="middle"
        >
          Working Memory
        </text>
        <text
          x="390"
          y="138"
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="var(--fg-3)"
          textAnchor="middle"
          letterSpacing="0.06em"
        >
          context window
        </text>

        {/* ── Select arrows (stores → working memory) ─────── */}

        {/* Episodic → WM */}
        <line
          x1="190"
          y1="78"
          x2="266"
          y2="140"
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          markerEnd="url(#mcArrow)"
        />

        {/* Semantic → WM */}
        <line
          x1="190"
          y1="200"
          x2="266"
          y2="200"
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          markerEnd="url(#mcArrow)"
        />

        {/* Procedural → WM */}
        <line
          x1="190"
          y1="322"
          x2="266"
          y2="260"
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          markerEnd="url(#mcArrow)"
        />

        {/* Select label */}
        <text
          x="222"
          y="186"
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--accent)"
          textAnchor="middle"
          letterSpacing="0.06em"
        >
          select
        </text>

        {/* ── Write arrows (working memory → stores) ──────── */}

        {/* WM → Episodic */}
        <line
          x1="266"
          y1="158"
          x2="190"
          y2="98"
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          markerEnd="url(#mcArrow)"
        />

        {/* WM → Semantic */}
        <line
          x1="266"
          y1="218"
          x2="190"
          y2="218"
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          markerEnd="url(#mcArrow)"
        />

        {/* WM → Procedural */}
        <line
          x1="266"
          y1="278"
          x2="190"
          y2="342"
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          markerEnd="url(#mcArrow)"
        />

        {/* Write label */}
        <text
          x="222"
          y="244"
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--accent)"
          textAnchor="middle"
          letterSpacing="0.06em"
        >
          write
        </text>

        {/* ── Compress (circular arrow within WM) ─────────── */}
        <path
          d="M 360 180 C 340 210, 340 250, 365 270 C 390 290, 430 280, 440 255 C 450 230, 435 200, 415 185"
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          fill="none"
          markerEnd="url(#mcArrow)"
        />
        <text
          x="390"
          y="248"
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--accent)"
          textAnchor="middle"
          letterSpacing="0.06em"
        >
          compress
        </text>

        {/* ── Isolate (right side — scoped rectangles) ─────── */}

        {/* Scope A */}
        <rect
          x="590"
          y="100"
          width="140"
          height="100"
          rx="4"
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          fill="var(--bg-surface)"
        />
        <text
          x="660"
          y="140"
          fontFamily="var(--font-display)"
          fontSize="12"
          fontWeight="600"
          fill="var(--color-midnight)"
          textAnchor="middle"
        >
          Scope A
        </text>
        <text
          x="660"
          y="158"
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="var(--fg-3)"
          textAnchor="middle"
          letterSpacing="0.04em"
        >
          isolated context
        </text>

        {/* Scope B */}
        <rect
          x="590"
          y="230"
          width="140"
          height="100"
          rx="4"
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          fill="var(--bg-surface)"
        />
        <text
          x="660"
          y="270"
          fontFamily="var(--font-display)"
          fontSize="12"
          fontWeight="600"
          fill="var(--color-midnight)"
          textAnchor="middle"
        >
          Scope B
        </text>
        <text
          x="660"
          y="288"
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="var(--fg-3)"
          textAnchor="middle"
          letterSpacing="0.04em"
        >
          isolated context
        </text>

        {/* Dashed line connecting Scope A and Scope B */}
        <line
          x1="660"
          y1="200"
          x2="660"
          y2="230"
          stroke="var(--border)"
          strokeWidth="1"
          strokeDasharray="4 3"
        />

        {/* Arrow: WM → Scope A */}
        <line
          x1="510"
          y1="160"
          x2="586"
          y2="150"
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          markerEnd="url(#mcArrow)"
        />

        {/* Arrow: WM → Scope B */}
        <line
          x1="510"
          y1="260"
          x2="586"
          y2="270"
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          markerEnd="url(#mcArrow)"
        />

        {/* Isolate label */}
        <text
          x="548"
          y="206"
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--accent)"
          textAnchor="middle"
          letterSpacing="0.06em"
        >
          isolate
        </text>

        {/* ── Diagram title ───────────────────────────────── */}
        <text
          x="390"
          y="384"
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--fg-3)"
          textAnchor="middle"
          letterSpacing="0.14em"
        >
          THE MEMORY-CONTEXT LOOP
        </text>
      </svg>
    </figure>
  );
}
