/**
 * GovernanceRiskDiagram — Governance & Risk Framework
 *
 * Three vertical pillars side by side:
 *   1. Risk Classification (left) — four stacked risk tiers
 *   2. Policy Framework (centre) — three stacked policy items
 *   3. Operational Governance (right) — three stacked governance items
 *
 * Horizontal dependency arrows connect the pillars.
 * Bottom timeline bar shows EU AI Act regulatory milestones.
 *
 * ONE accent: the "High" risk tier border uses var(--accent).
 * No gradients, no shadows. Clean structural diagram.
 */

export function GovernanceRiskDiagram() {
  /* ── Layout constants ──────────────────────────────── */
  const svgW = 780;
  const pillarW = 200;
  const pillarGap = 50;
  const totalPillarsW = pillarW * 3 + pillarGap * 2;
  const startX = (svgW - totalPillarsW) / 2;

  const pillarX = [
    startX,
    startX + pillarW + pillarGap,
    startX + 2 * (pillarW + pillarGap),
  ];

  const headerY = 16;
  const headerH = 24;
  const cardStartY = headerY + headerH + 12;
  const cardH = 44;
  const cardGap = 8;

  /* ── Pillar data ───────────────────────────────────── */
  const pillar1Title = "RISK CLASSIFICATION";
  const pillar1Items = [
    { label: "Unacceptable", sub: "Banned", accent: false },
    { label: "High", sub: "Full treatment", accent: true },
    { label: "Limited", sub: "Transparency", accent: false },
    { label: "Minimal", sub: "Inventory", accent: false },
  ];

  const pillar2Title = "POLICY FRAMEWORK";
  const pillar2Items = [
    { label: "Acceptable Use Policy" },
    { label: "Incident Response" },
    { label: "Model Inventory" },
  ];

  const pillar3Title = "OPERATIONAL GOVERNANCE";
  const pillar3Items = [
    { label: "Risk Register" },
    { label: "Audit Cycle" },
    { label: "Human Oversight" },
  ];

  /* ── Arrow helpers ─────────────────────────────────── */
  const arrowPairs: Array<{
    fromPillar: number;
    fromCard: number;
    toPillar: number;
    toCard: number;
  }> = [
    // High Risk -> Acceptable Use Policy
    { fromPillar: 0, fromCard: 1, toPillar: 1, toCard: 0 },
    // High Risk -> Incident Response
    { fromPillar: 0, fromCard: 1, toPillar: 1, toCard: 1 },
    // Limited -> Model Inventory
    { fromPillar: 0, fromCard: 2, toPillar: 1, toCard: 2 },
    // Acceptable Use Policy -> Risk Register
    { fromPillar: 1, fromCard: 0, toPillar: 2, toCard: 0 },
    // Incident Response -> Audit Cycle
    { fromPillar: 1, fromCard: 1, toPillar: 2, toCard: 1 },
    // Model Inventory -> Human Oversight
    { fromPillar: 1, fromCard: 2, toPillar: 2, toCard: 2 },
  ];

  function cardY(index: number) {
    return cardStartY + index * (cardH + cardGap);
  }

  function cardCenterY(index: number) {
    return cardY(index) + cardH / 2;
  }

  /* ── Timeline constants ────────────────────────────── */
  const timelineY = 320;
  const timelineBarH = 4;
  const timelineStartX = 60;
  const timelineEndX = svgW - 60;
  const milestones = [
    { label: "Aug 2024", sub: "Entry into force", x: timelineStartX + 40 },
    { label: "Feb 2025", sub: "Banned AI", x: timelineStartX + 200 },
    { label: "Aug 2025", sub: "GPAI rules", x: timelineStartX + 360 },
    { label: "Aug 2026", sub: "High-risk (full)", x: timelineStartX + 540 },
  ];

  /* ── Pillar bottom (for calculating column height) ── */
  const pillar1Bottom = cardY(pillar1Items.length - 1) + cardH;
  const pillar2Bottom = cardY(pillar2Items.length - 1) + cardH;
  const pillar3Bottom = cardY(pillar3Items.length - 1) + cardH;
  const maxBottom = Math.max(pillar1Bottom, pillar2Bottom, pillar3Bottom);
  const pillarOutlineTop = headerY - 6;
  const pillarOutlineBottom = maxBottom + 12;

  return (
    <figure
      role="img"
      aria-label="AI governance and risk framework showing three pillars — Risk Classification, Policy Framework, and Operational Governance — with dependency arrows and EU AI Act timeline"
      style={{ margin: 0, width: "100%", maxWidth: "780px", marginInline: "auto" }}
    >
      <svg
        viewBox="0 0 780 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        <defs>
          {/* Horizontal arrow marker */}
          <marker
            id="grArrow"
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

          {/* Muted arrow for secondary connectors */}
          <marker
            id="grArrowMuted"
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

          {/* Timeline dot marker */}
          <marker
            id="grDot"
            viewBox="0 0 6 6"
            refX="3"
            refY="3"
            markerWidth="6"
            markerHeight="6"
          >
            <circle cx="3" cy="3" r="2.5" fill="var(--color-midnight)" />
          </marker>
        </defs>

        {/* ═══════════════════════════════════════════════════
            PILLAR OUTLINES — subtle column boundaries
            ═══════════════════════════════════════════════════ */}
        {pillarX.map((x, i) => (
          <rect
            key={`outline-${i}`}
            x={x - 8}
            y={pillarOutlineTop}
            width={pillarW + 16}
            height={pillarOutlineBottom - pillarOutlineTop}
            rx={4}
            stroke="var(--border)"
            strokeWidth="1"
            fill="none"
            opacity={0.35}
          />
        ))}

        {/* ═══════════════════════════════════════════════════
            PILLAR HEADERS
            ═══════════════════════════════════════════════════ */}
        {[pillar1Title, pillar2Title, pillar3Title].map((title, i) => (
          <text
            key={`header-${i}`}
            x={pillarX[i] + pillarW / 2}
            y={headerY + 14}
            fontFamily="var(--font-mono)"
            fontSize="9"
            fontWeight="600"
            fill="var(--fg-2)"
            textAnchor="middle"
            letterSpacing="0.08em"
          >
            {title}
          </text>
        ))}

        {/* Header underlines */}
        {pillarX.map((x, i) => (
          <line
            key={`hline-${i}`}
            x1={x}
            y1={headerY + headerH}
            x2={x + pillarW}
            y2={headerY + headerH}
            stroke="var(--border)"
            strokeWidth="1"
            opacity={0.5}
          />
        ))}

        {/* ═══════════════════════════════════════════════════
            PILLAR 1 — Risk Classification
            ═══════════════════════════════════════════════════ */}
        {pillar1Items.map((item, i) => {
          const x = pillarX[0];
          const y = cardY(i);
          const isAccent = item.accent;
          return (
            <g key={`p1-${i}`}>
              <rect
                x={x}
                y={y}
                width={pillarW}
                height={cardH}
                rx={4}
                stroke={isAccent ? "var(--accent)" : "var(--border)"}
                strokeWidth={isAccent ? 1.5 : 1}
                fill="var(--bg-surface)"
              />
              <text
                x={x + pillarW / 2}
                y={y + 18}
                fontFamily="var(--font-display)"
                fontSize="13"
                fontWeight="500"
                fill={isAccent ? "var(--accent)" : "var(--color-midnight)"}
                textAnchor="middle"
              >
                {item.label}
              </text>
              <text
                x={x + pillarW / 2}
                y={y + 34}
                fontFamily="var(--font-mono)"
                fontSize="9"
                fill="var(--fg-3)"
                textAnchor="middle"
                letterSpacing="0.04em"
              >
                {item.sub}
              </text>
            </g>
          );
        })}

        {/* ═══════════════════════════════════════════════════
            PILLAR 2 — Policy Framework
            ═══════════════════════════════════════════════════ */}
        {pillar2Items.map((item, i) => {
          const x = pillarX[1];
          const y = cardY(i);
          return (
            <g key={`p2-${i}`}>
              <rect
                x={x}
                y={y}
                width={pillarW}
                height={cardH}
                rx={4}
                stroke="var(--border)"
                strokeWidth={1}
                fill="var(--bg-surface)"
              />
              <text
                x={x + pillarW / 2}
                y={y + cardH / 2 + 4}
                fontFamily="var(--font-display)"
                fontSize="13"
                fontWeight="500"
                fill="var(--color-midnight)"
                textAnchor="middle"
              >
                {item.label}
              </text>
            </g>
          );
        })}

        {/* ═══════════════════════════════════════════════════
            PILLAR 3 — Operational Governance
            ═══════════════════════════════════════════════════ */}
        {pillar3Items.map((item, i) => {
          const x = pillarX[2];
          const y = cardY(i);
          return (
            <g key={`p3-${i}`}>
              <rect
                x={x}
                y={y}
                width={pillarW}
                height={cardH}
                rx={4}
                stroke="var(--border)"
                strokeWidth={1}
                fill="var(--bg-surface)"
              />
              <text
                x={x + pillarW / 2}
                y={y + cardH / 2 + 4}
                fontFamily="var(--font-display)"
                fontSize="13"
                fontWeight="500"
                fill="var(--color-midnight)"
                textAnchor="middle"
              >
                {item.label}
              </text>
            </g>
          );
        })}

        {/* ═══════════════════════════════════════════════════
            DEPENDENCY ARROWS between pillars
            ═══════════════════════════════════════════════════ */}
        {arrowPairs.map((arrow, i) => {
          const fromX = pillarX[arrow.fromPillar] + pillarW;
          const toX = pillarX[arrow.toPillar];
          const fromCY = cardCenterY(arrow.fromCard);
          const toCY = cardCenterY(arrow.toCard);

          // Straight horizontal if same row, otherwise a step path
          if (fromCY === toCY) {
            return (
              <line
                key={`arrow-${i}`}
                x1={fromX + 4}
                y1={fromCY}
                x2={toX - 6}
                y2={toCY}
                stroke="var(--color-midnight)"
                strokeWidth="1"
                markerEnd="url(#grArrowMuted)"
                opacity={0.6}
              />
            );
          }

          // Stepped path for cross-row connections
          const midX = (fromX + toX) / 2;
          return (
            <path
              key={`arrow-${i}`}
              d={`M ${fromX + 4} ${fromCY} L ${midX} ${fromCY} L ${midX} ${toCY} L ${toX - 6} ${toCY}`}
              stroke="var(--color-midnight)"
              strokeWidth="1"
              fill="none"
              markerEnd="url(#grArrowMuted)"
              opacity={0.6}
            />
          );
        })}

        {/* ═══════════════════════════════════════════════════
            TIMELINE BAR — EU AI Act milestones
            ═══════════════════════════════════════════════════ */}

        {/* Timeline label */}
        <text
          x={svgW / 2}
          y={timelineY - 16}
          fontFamily="var(--font-mono)"
          fontSize="9"
          fontWeight="600"
          fill="var(--fg-2)"
          textAnchor="middle"
          letterSpacing="0.08em"
        >
          EU AI ACT TIMELINE
        </text>

        {/* Baseline bar */}
        <line
          x1={timelineStartX}
          y1={timelineY + timelineBarH / 2}
          x2={timelineEndX}
          y2={timelineY + timelineBarH / 2}
          stroke="var(--border)"
          strokeWidth={timelineBarH}
          strokeLinecap="round"
        />

        {/* Milestone ticks and labels */}
        {milestones.map((m, i) => (
          <g key={`ms-${i}`}>
            {/* Tick mark */}
            <line
              x1={m.x}
              y1={timelineY - 4}
              x2={m.x}
              y2={timelineY + timelineBarH + 4}
              stroke="var(--color-midnight)"
              strokeWidth="1.5"
            />
            {/* Dot */}
            <circle
              cx={m.x}
              cy={timelineY + timelineBarH / 2}
              r="3"
              fill="var(--color-midnight)"
            />
            {/* Date label */}
            <text
              x={m.x}
              y={timelineY + timelineBarH + 20}
              fontFamily="var(--font-mono)"
              fontSize="9"
              fontWeight="600"
              fill="var(--color-midnight)"
              textAnchor="middle"
              letterSpacing="0.02em"
            >
              {m.label}
            </text>
            {/* Description */}
            <text
              x={m.x}
              y={timelineY + timelineBarH + 33}
              fontFamily="var(--font-mono)"
              fontSize="8"
              fill="var(--fg-3)"
              textAnchor="middle"
              letterSpacing="0.02em"
            >
              {m.sub}
            </text>
          </g>
        ))}

        {/* Terminal arrow on timeline */}
        <line
          x1={timelineEndX}
          y1={timelineY + timelineBarH / 2}
          x2={timelineEndX + 14}
          y2={timelineY + timelineBarH / 2}
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          markerEnd="url(#grArrow)"
        />
      </svg>
    </figure>
  );
}
