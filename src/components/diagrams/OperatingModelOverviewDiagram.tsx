/**
 * OperatingModelOverviewDiagram — Pillar II at a Glance
 *
 * Five concept cards showing the operating model as a flow:
 *
 *   Left: "Skills" (the reusable unit)
 *     → Centre-top: "Agent Catalog" (the registry) — accent border
 *     ← Right-top: "Power Users" (three-tier distribution)
 *   Centre-bottom: "CoE & Enablement" (the governing body) connects to all above
 *   Far right: "Adoption Patterns" (the failure modes) — dashed connection
 *
 * Throughline at bottom in display italic.
 * ONE accent: Agent Catalog card border.
 * No gradients, no shadows. Clean structural diagram.
 */

export function OperatingModelOverviewDiagram() {
  /* ── Layout constants ──────────────────────────────── */
  const svgW = 780;
  const svgH = 320;

  const cardW = 140;
  const cardH = 72;
  const cardRx = 5;

  /* ── Card positions (centre-based) ────────────────── */
  const skillsCx = 110;
  const skillsCy = 90;

  const catalogCx = 330;
  const catalogCy = 66;

  const powerCx = 530;
  const powerCy = 66;

  const coeCx = 330;
  const coeCy = 186;

  const adoptionCx = 680;
  const adoptionCy = 186;

  /* ── Card renderer ────────────────────────────────── */
  function cardRect(
    cx: number,
    cy: number,
    opts: {
      label: string;
      sub: string;
      accent?: boolean;
      dashed?: boolean;
    },
  ) {
    const x = cx - cardW / 2;
    const y = cy - cardH / 2;
    return (
      <g>
        <rect
          x={x}
          y={y}
          width={cardW}
          height={cardH}
          rx={cardRx}
          stroke={
            opts.accent
              ? "var(--accent)"
              : opts.dashed
                ? "var(--fg-3)"
                : "var(--color-midnight)"
          }
          strokeWidth={opts.accent ? 2 : 1.5}
          strokeDasharray={opts.dashed ? "6 4" : undefined}
          fill="var(--bg-surface)"
        />
        <text
          x={cx}
          y={cy - 6}
          fontFamily="var(--font-display)"
          fontSize="13"
          fontWeight="600"
          fill={opts.accent ? "var(--accent)" : "var(--color-midnight)"}
          textAnchor="middle"
        >
          {opts.label}
        </text>
        <text
          x={cx}
          y={cy + 14}
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="var(--fg-3)"
          textAnchor="middle"
          letterSpacing="0.02em"
        >
          {opts.sub}
        </text>
      </g>
    );
  }

  return (
    <figure
      role="img"
      aria-label="Operating model overview — five concept cards: Skills, Agent Catalog, Power Users, CoE and Enablement, and Adoption Patterns, connected by directional arrows showing the flow from reusable capability to governed, findable asset"
      style={{
        margin: 0,
        width: "100%",
        maxWidth: "780px",
        marginInline: "auto",
      }}
    >
      <svg
        viewBox={`0 0 ${svgW} ${svgH}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        <defs>
          {/* Solid arrow — midnight */}
          <marker
            id="omoArrow"
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

          {/* Muted arrow — fg-2 */}
          <marker
            id="omoArrowMuted"
            viewBox="0 0 10 10"
            refX="10"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto-start-reverse"
          >
            <path
              d="M 0 2 L 10 5 L 0 8"
              fill="none"
              stroke="var(--fg-2)"
              strokeWidth="1.5"
            />
          </marker>

          {/* Dashed arrow — fg-3 */}
          <marker
            id="omoArrowDashed"
            viewBox="0 0 10 10"
            refX="10"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto-start-reverse"
          >
            <path
              d="M 0 2 L 10 5 L 0 8"
              fill="none"
              stroke="var(--fg-3)"
              strokeWidth="1.5"
            />
          </marker>
        </defs>

        {/* ═══════════════════════════════════════════════════
            CONCEPT CARDS
            ═══════════════════════════════════════════════════ */}

        {/* Skills — the reusable unit */}
        {cardRect(skillsCx, skillsCy, {
          label: "Skills",
          sub: "the reusable unit",
        })}

        {/* Agent Catalog — the registry (ACCENT) */}
        {cardRect(catalogCx, catalogCy, {
          label: "Agent Catalog",
          sub: "the registry",
          accent: true,
        })}

        {/* Power Users — three-tier distribution */}
        {cardRect(powerCx, powerCy, {
          label: "Power Users",
          sub: "three-tier distribution",
        })}

        {/* CoE & Enablement — the governing body */}
        {cardRect(coeCx, coeCy, {
          label: "CoE & Enablement",
          sub: "the governing body",
        })}

        {/* Adoption Patterns — the failure modes */}
        {cardRect(adoptionCx, adoptionCy, {
          label: "Adoption Patterns",
          sub: "the failure modes",
          dashed: true,
        })}

        {/* ═══════════════════════════════════════════════════
            CONNECTION ARROWS
            ═══════════════════════════════════════════════════ */}

        {/* Skills → Agent Catalog */}
        <line
          x1={skillsCx + cardW / 2 + 4}
          y1={skillsCy - 8}
          x2={catalogCx - cardW / 2 - 8}
          y2={catalogCy}
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          markerEnd="url(#omoArrow)"
        />
        {/* "publish" label */}
        <text
          x={(skillsCx + cardW / 2 + catalogCx - cardW / 2) / 2}
          y={skillsCy - 24}
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="var(--fg-2)"
          textAnchor="middle"
          letterSpacing="0.04em"
        >
          publish
        </text>

        {/* Power Users → Agent Catalog */}
        <line
          x1={powerCx - cardW / 2 - 4}
          y1={powerCy}
          x2={catalogCx + cardW / 2 + 8}
          y2={catalogCy}
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          markerEnd="url(#omoArrow)"
        />
        {/* "consume" label */}
        <text
          x={(powerCx - cardW / 2 + catalogCx + cardW / 2) / 2}
          y={powerCy - 16}
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="var(--fg-2)"
          textAnchor="middle"
          letterSpacing="0.04em"
        >
          consume
        </text>

        {/* CoE & Enablement → Skills (governs) */}
        <path
          d={`M ${coeCx - cardW / 2 - 4} ${coeCy - 14}
              L ${skillsCx + 20} ${coeCy - 14}
              L ${skillsCx + 20} ${skillsCy + cardH / 2 + 8}`}
          stroke="var(--color-midnight)"
          strokeWidth="1"
          fill="none"
          markerEnd="url(#omoArrowMuted)"
        />
        <text
          x={skillsCx - 10}
          y={coeCy - 22}
          fontFamily="var(--font-mono)"
          fontSize="8"
          fill="var(--fg-3)"
          textAnchor="end"
          letterSpacing="0.04em"
        >
          governs
        </text>

        {/* CoE & Enablement → Agent Catalog (curates) */}
        <line
          x1={coeCx}
          y1={coeCy - cardH / 2 - 4}
          x2={catalogCx}
          y2={catalogCy + cardH / 2 + 8}
          stroke="var(--color-midnight)"
          strokeWidth="1"
          markerEnd="url(#omoArrowMuted)"
        />
        <text
          x={coeCx + 14}
          y={(coeCy - cardH / 2 + catalogCy + cardH / 2) / 2 + 2}
          fontFamily="var(--font-mono)"
          fontSize="8"
          fill="var(--fg-3)"
          textAnchor="start"
          letterSpacing="0.04em"
        >
          curates
        </text>

        {/* CoE & Enablement → Power Users (enables) */}
        <path
          d={`M ${coeCx + cardW / 2 + 4} ${coeCy - 14}
              L ${powerCx - 20} ${coeCy - 14}
              L ${powerCx - 20} ${powerCy + cardH / 2 + 8}`}
          stroke="var(--color-midnight)"
          strokeWidth="1"
          fill="none"
          markerEnd="url(#omoArrowMuted)"
        />
        <text
          x={powerCx + 10}
          y={coeCy - 22}
          fontFamily="var(--font-mono)"
          fontSize="8"
          fill="var(--fg-3)"
          textAnchor="start"
          letterSpacing="0.04em"
        >
          enables
        </text>

        {/* Adoption Patterns — dashed connection from CoE */}
        <line
          x1={coeCx + cardW / 2 + 4}
          y1={coeCy}
          x2={adoptionCx - cardW / 2 - 8}
          y2={adoptionCy}
          stroke="var(--fg-3)"
          strokeWidth="1"
          strokeDasharray="6 4"
          markerEnd="url(#omoArrowDashed)"
        />
        <text
          x={(coeCx + cardW / 2 + adoptionCx - cardW / 2) / 2}
          y={coeCy + 14}
          fontFamily="var(--font-mono)"
          fontSize="8"
          fill="var(--fg-3)"
          textAnchor="middle"
          letterSpacing="0.04em"
        >
          mitigates
        </text>

        {/* ═══════════════════════════════════════════════════
            THROUGHLINE
            ═══════════════════════════════════════════════════ */}
        <text
          x={svgW / 2}
          y={svgH - 22}
          fontFamily="var(--font-display)"
          fontSize="12"
          fontStyle="italic"
          fill="var(--fg-2)"
          textAnchor="middle"
        >
          Capability becomes an asset only when reusable, governed, and
          findable.
        </text>
      </svg>
    </figure>
  );
}
