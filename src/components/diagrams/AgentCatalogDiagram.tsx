/**
 * AgentCatalogDiagram — Three Registries, One Catalog
 *
 * Three columns showing the three registries as stacked card groups,
 * connected by dependency arrows:
 *
 *   Left — AGENT REGISTRY: Two agent cards with owner/risk-tier labels.
 *   Centre — SKILL REGISTRY: Three skill cards with version labels.
 *   Right — TOOL REGISTRY: Two tool cards with data-classification labels.
 *
 * Dependency arrows flow left-to-right: agents -> skills -> tools.
 * Cross-reference lines show which agent uses which skill, which skill
 * calls which tool.
 *
 * Above all three: a header bar "THE CATALOG" spanning full width
 * in var(--accent) — the ONE accent element.
 *
 * No gradients, no shadows. Clean structural diagram.
 */

export function AgentCatalogDiagram() {
  /* ── Layout constants ──────────────────────────────── */
  const svgW = 780;
  const colW = 190;
  const colGap = 55;
  const totalColsW = colW * 3 + colGap * 2;
  const startX = (svgW - totalColsW) / 2;

  const colX = [
    startX,
    startX + colW + colGap,
    startX + 2 * (colW + colGap),
  ];

  /* Catalog header bar */
  const headerBarY = 16;
  const headerBarH = 30;

  /* Registry headers */
  const registryHeaderY = headerBarY + headerBarH + 20;

  /* Cards */
  const cardStartY = registryHeaderY + 22;
  const cardH = 56;
  const cardGap = 10;

  function cardY(index: number) {
    return cardStartY + index * (cardH + cardGap);
  }

  function cardCenterY(index: number) {
    return cardY(index) + cardH / 2;
  }

  /* ── Registry data ─────────────────────────────────── */
  const agents = [
    { label: "Fraud Monitor", owner: "risk-team", tier: "high-risk" },
    { label: "Support Drafter", owner: "cx-team", tier: "medium-risk" },
  ];

  const skills = [
    { label: "Transaction Scoring", version: "v2.4.1" },
    { label: "PII Redactor", version: "v1.1.0" },
    { label: "Reply Drafting", version: "v3.0.2" },
  ];

  const tools = [
    { label: "Payment API", classification: "confidential" },
    { label: "Knowledge Base", classification: "internal" },
  ];

  /* ── Cross-reference arrows ────────────────────────── */
  // agents -> skills
  const agentToSkill: Array<{ from: number; to: number }> = [
    { from: 0, to: 0 }, // Fraud Monitor -> Transaction Scoring
    { from: 0, to: 1 }, // Fraud Monitor -> PII Redactor
    { from: 1, to: 1 }, // Support Drafter -> PII Redactor
    { from: 1, to: 2 }, // Support Drafter -> Reply Drafting
  ];

  // skills -> tools
  const skillToTool: Array<{ from: number; to: number }> = [
    { from: 0, to: 0 }, // Transaction Scoring -> Payment API
    { from: 2, to: 1 }, // Reply Drafting -> Knowledge Base
    { from: 1, to: 1 }, // PII Redactor -> Knowledge Base
  ];

  /* ── Column outline bounds ─────────────────────────── */
  const maxCards = Math.max(agents.length, skills.length, tools.length);
  const colTop = registryHeaderY - 10;
  const colBottom = cardY(maxCards - 1) + cardH + 14;

  return (
    <figure
      role="img"
      aria-label="Agent catalog diagram showing three registries — Agent, Skill, and Tool — with cross-reference dependency arrows flowing left to right"
      style={{ margin: 0, width: "100%", maxWidth: "780px", marginInline: "auto" }}
    >
      <svg
        viewBox="0 0 780 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        <defs>
          {/* Primary arrow marker */}
          <marker
            id="acArrow"
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

          {/* Muted arrow for cross-reference lines */}
          <marker
            id="acArrowMuted"
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
        </defs>

        {/* ═══════════════════════════════════════════════════
            THE CATALOG — accent header bar
            ═══════════════════════════════════════════════════ */}
        <rect
          x={startX - 8}
          y={headerBarY}
          width={totalColsW + 16}
          height={headerBarH}
          rx={4}
          fill="var(--accent)"
        />
        <text
          x={svgW / 2}
          y={headerBarY + headerBarH / 2 + 1}
          fontFamily="var(--font-mono)"
          fontSize="11"
          fontWeight="700"
          fill="#fff"
          textAnchor="middle"
          dominantBaseline="middle"
          letterSpacing="0.12em"
        >
          THE CATALOG
        </text>

        {/* ═══════════════════════════════════════════════════
            COLUMN OUTLINES — subtle boundaries
            ═══════════════════════════════════════════════════ */}
        {colX.map((x, i) => (
          <rect
            key={`col-outline-${i}`}
            x={x - 8}
            y={colTop}
            width={colW + 16}
            height={colBottom - colTop}
            rx={4}
            stroke="var(--border)"
            strokeWidth="1"
            fill="none"
            opacity={0.35}
          />
        ))}

        {/* ═══════════════════════════════════════════════════
            REGISTRY HEADERS
            ═══════════════════════════════════════════════════ */}
        {["AGENT REGISTRY", "SKILL REGISTRY", "TOOL REGISTRY"].map(
          (title, i) => (
            <g key={`reg-header-${i}`}>
              <text
                x={colX[i] + colW / 2}
                y={registryHeaderY + 4}
                fontFamily="var(--font-mono)"
                fontSize="9"
                fontWeight="600"
                fill="var(--fg-2)"
                textAnchor="middle"
                letterSpacing="0.08em"
              >
                {title}
              </text>
              <line
                x1={colX[i]}
                y1={registryHeaderY + 10}
                x2={colX[i] + colW}
                y2={registryHeaderY + 10}
                stroke="var(--border)"
                strokeWidth="1"
                opacity={0.5}
              />
            </g>
          ),
        )}

        {/* ═══════════════════════════════════════════════════
            AGENT REGISTRY — left column
            ═══════════════════════════════════════════════════ */}
        {agents.map((agent, i) => {
          const x = colX[0];
          const y = cardY(i);
          return (
            <g key={`agent-${i}`}>
              <rect
                x={x}
                y={y}
                width={colW}
                height={cardH}
                rx={4}
                stroke="var(--color-midnight)"
                strokeWidth="1.5"
                fill="var(--bg-surface)"
              />
              <text
                x={x + colW / 2}
                y={y + 20}
                fontFamily="var(--font-display)"
                fontSize="13"
                fontWeight="600"
                fill="var(--color-midnight)"
                textAnchor="middle"
              >
                {agent.label}
              </text>
              <text
                x={x + 10}
                y={y + 40}
                fontFamily="var(--font-mono)"
                fontSize="8"
                fill="var(--fg-3)"
                letterSpacing="0.04em"
              >
                {agent.owner}
              </text>
              <text
                x={x + colW - 10}
                y={y + 40}
                fontFamily="var(--font-mono)"
                fontSize="8"
                fill="var(--fg-3)"
                textAnchor="end"
                letterSpacing="0.04em"
              >
                {agent.tier}
              </text>
            </g>
          );
        })}

        {/* ═══════════════════════════════════════════════════
            SKILL REGISTRY — centre column
            ═══════════════════════════════════════════════════ */}
        {skills.map((skill, i) => {
          const x = colX[1];
          const y = cardY(i);
          return (
            <g key={`skill-${i}`}>
              <rect
                x={x}
                y={y}
                width={colW}
                height={cardH}
                rx={4}
                stroke="var(--border)"
                strokeWidth="1"
                fill="var(--bg-surface)"
              />
              <text
                x={x + colW / 2}
                y={y + 22}
                fontFamily="var(--font-display)"
                fontSize="12"
                fontWeight="500"
                fill="var(--color-midnight)"
                textAnchor="middle"
              >
                {skill.label}
              </text>
              <text
                x={x + colW / 2}
                y={y + 40}
                fontFamily="var(--font-mono)"
                fontSize="8"
                fill="var(--fg-3)"
                textAnchor="middle"
                letterSpacing="0.04em"
              >
                {skill.version}
              </text>
            </g>
          );
        })}

        {/* ═══════════════════════════════════════════════════
            TOOL REGISTRY — right column
            ═══════════════════════════════════════════════════ */}
        {tools.map((tool, i) => {
          const x = colX[2];
          const y = cardY(i);
          return (
            <g key={`tool-${i}`}>
              <rect
                x={x}
                y={y}
                width={colW}
                height={cardH}
                rx={4}
                stroke="var(--border)"
                strokeWidth="1"
                fill="var(--bg-surface)"
              />
              <text
                x={x + colW / 2}
                y={y + 22}
                fontFamily="var(--font-display)"
                fontSize="12"
                fontWeight="500"
                fill="var(--color-midnight)"
                textAnchor="middle"
              >
                {tool.label}
              </text>
              <text
                x={x + colW / 2}
                y={y + 40}
                fontFamily="var(--font-mono)"
                fontSize="8"
                fill="var(--fg-3)"
                textAnchor="middle"
                letterSpacing="0.04em"
              >
                {tool.classification}
              </text>
            </g>
          );
        })}

        {/* ═══════════════════════════════════════════════════
            DEPENDENCY ARROWS: agents -> skills
            ═══════════════════════════════════════════════════ */}
        {agentToSkill.map((link, i) => {
          const fromX = colX[0] + colW;
          const toX = colX[1];
          const fromCY = cardCenterY(link.from);
          const toCY = cardCenterY(link.to);

          if (fromCY === toCY) {
            return (
              <line
                key={`a2s-${i}`}
                x1={fromX + 4}
                y1={fromCY}
                x2={toX - 6}
                y2={toCY}
                stroke="var(--color-midnight)"
                strokeWidth="1"
                markerEnd="url(#acArrowMuted)"
                opacity={0.5}
              />
            );
          }

          const midX = (fromX + toX) / 2;
          return (
            <path
              key={`a2s-${i}`}
              d={`M ${fromX + 4} ${fromCY} L ${midX} ${fromCY} L ${midX} ${toCY} L ${toX - 6} ${toCY}`}
              stroke="var(--color-midnight)"
              strokeWidth="1"
              fill="none"
              markerEnd="url(#acArrowMuted)"
              opacity={0.5}
            />
          );
        })}

        {/* ═══════════════════════════════════════════════════
            DEPENDENCY ARROWS: skills -> tools
            ═══════════════════════════════════════════════════ */}
        {skillToTool.map((link, i) => {
          const fromX = colX[1] + colW;
          const toX = colX[2];
          const fromCY = cardCenterY(link.from);
          const toCY = cardCenterY(link.to);

          if (fromCY === toCY) {
            return (
              <line
                key={`s2t-${i}`}
                x1={fromX + 4}
                y1={fromCY}
                x2={toX - 6}
                y2={toCY}
                stroke="var(--color-midnight)"
                strokeWidth="1"
                markerEnd="url(#acArrowMuted)"
                opacity={0.5}
              />
            );
          }

          const midX = (fromX + toX) / 2;
          return (
            <path
              key={`s2t-${i}`}
              d={`M ${fromX + 4} ${fromCY} L ${midX} ${fromCY} L ${midX} ${toCY} L ${toX - 6} ${toCY}`}
              stroke="var(--color-midnight)"
              strokeWidth="1"
              fill="none"
              markerEnd="url(#acArrowMuted)"
              opacity={0.5}
            />
          );
        })}

        {/* ═══════════════════════════════════════════════════
            BOTTOM ANNOTATION
            ═══════════════════════════════════════════════════ */}
        <text
          x={svgW / 2}
          y={360}
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="var(--fg-3)"
          textAnchor="middle"
          letterSpacing="0.02em"
        >
          {"agents depend on skills · skills call tools · catalog enforces contracts"}
        </text>
      </svg>
    </figure>
  );
}
