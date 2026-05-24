/**
 * ToolsMcpDiagram — The MCP Interface
 *
 * Left-to-right flow: three client boxes → JSON-RPC 2.0 wire → one MCP server
 * exposing three primitives (Tools, Resources, Prompts).
 *
 * Single accent: var(--accent) on the protocol label and primitive names.
 * Everything else on the midnight/gray scale.
 */

export function ToolsMcpDiagram() {
  return (
    <figure
      role="img"
      aria-label="MCP interface: three clients connect over JSON-RPC 2.0 to one server exposing Tools, Resources, and Prompts primitives"
      style={{ margin: 0, width: "100%", maxWidth: "780px", marginInline: "auto" }}
    >
      <svg
        viewBox="0 0 780 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        {/* ── Client boxes (left) ────────────────────────────── */}
        {[
          { label: "Client A", y: 40 },
          { label: "Client B", y: 145 },
          { label: "Client C", y: 250 },
        ].map((client) => (
          <g key={client.label}>
            <rect
              x="40"
              y={client.y}
              width="150"
              height="70"
              rx="4"
              stroke="var(--color-midnight)"
              strokeWidth="1.5"
              fill="var(--bg-surface)"
            />
            <text
              x="115"
              y={client.y + 38}
              fontFamily="var(--font-display)"
              fontSize="14"
              fontWeight="600"
              fill="var(--color-midnight)"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {client.label}
            </text>
          </g>
        ))}

        {/* ── Connection lines: clients → central wire ────────── */}
        {[75, 180, 285].map((cy) => (
          <line
            key={cy}
            x1="190"
            y1={cy}
            x2="310"
            y2={180}
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
          />
        ))}

        {/* ── Central wire ───────────────────────────────────── */}
        <line
          x1="310"
          y1={180}
          x2="460"
          y2={180}
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          markerEnd="url(#mcpArrow)"
        />

        {/* Wire label: JSON-RPC 2.0 */}
        <text
          x="385"
          y="164"
          fontFamily="var(--font-mono)"
          fontSize="11"
          fontWeight="600"
          fill="var(--accent)"
          textAnchor="middle"
          letterSpacing="0.04em"
        >
          JSON-RPC 2.0
        </text>

        {/* Wire annotation */}
        <text
          x="385"
          y="206"
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="var(--fg-3)"
          textAnchor="middle"
          letterSpacing="0.02em"
        >
          capability negotiation at connect
        </text>

        {/* ── MCP Server box (right) ──────────────────────────── */}
        <rect
          x="470"
          y="40"
          width="270"
          height="280"
          rx="4"
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          fill="rgba(109, 40, 217, 0.05)"
        />

        {/* Server title */}
        <text
          x="605"
          y="72"
          fontFamily="var(--font-display)"
          fontSize="16"
          fontWeight="700"
          fill="var(--color-midnight)"
          textAnchor="middle"
        >
          MCP Server
        </text>

        {/* ── Primitive: Tools ─────────────────────────────────── */}
        <rect
          x="490"
          y="94"
          width="230"
          height="76"
          rx="3"
          stroke="var(--border)"
          strokeWidth="1"
          fill="var(--bg-surface)"
        />
        <text
          x="510"
          y="116"
          fontFamily="var(--font-display)"
          fontSize="13"
          fontWeight="600"
          fill="var(--accent)"
        >
          Tools
        </text>
        <text
          x="510"
          y="138"
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="var(--fg-2)"
          letterSpacing="0.02em"
        >
          create_invoice
        </text>
        <text
          x="510"
          y="156"
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="var(--fg-2)"
          letterSpacing="0.02em"
        >
          get_invoice
        </text>

        {/* ── Primitive: Resources ─────────────────────────────── */}
        <rect
          x="490"
          y="184"
          width="230"
          height="52"
          rx="3"
          stroke="var(--border)"
          strokeWidth="1"
          fill="var(--bg-surface)"
        />
        <text
          x="510"
          y="215"
          fontFamily="var(--font-display)"
          fontSize="13"
          fontWeight="600"
          fill="var(--accent)"
          dominantBaseline="middle"
        >
          Resources
        </text>

        {/* ── Primitive: Prompts ────────────────────────────────── */}
        <rect
          x="490"
          y="250"
          width="230"
          height="52"
          rx="3"
          stroke="var(--border)"
          strokeWidth="1"
          fill="var(--bg-surface)"
        />
        <text
          x="510"
          y="281"
          fontFamily="var(--font-display)"
          fontSize="13"
          fontWeight="600"
          fill="var(--accent)"
          dominantBaseline="middle"
        >
          Prompts
        </text>

        {/* ── Transport annotation (below server) ──────────────── */}
        <text
          x="605"
          y="348"
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="var(--fg-3)"
          textAnchor="middle"
          letterSpacing="0.02em"
        >
          {"stdio (local) · streamable HTTP (remote)"}
        </text>

        {/* ── Marker definitions ──────────────────────────────── */}
        <defs>
          <marker
            id="mcpArrow"
            viewBox="0 0 10 10"
            refX="10"
            refY="5"
            markerWidth="8"
            markerHeight="8"
            orient="auto-start-reverse"
          >
            <path
              d="M 0 1 L 10 5 L 0 9"
              fill="none"
              stroke="var(--color-midnight)"
              strokeWidth="1.5"
            />
          </marker>
        </defs>
      </svg>
    </figure>
  );
}
