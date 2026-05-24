/**
 * SkillsDiagram — The Skill Contract
 *
 * Centre: large rounded rect "SKILL" with five stacked compartments:
 *   1. Manifest (name, version, description)
 *   2. Entry point (step-by-step instructions)
 *   3. Resource bundle (references, scripts)
 *   4. Governance (owner, risk tier, audit date) — accent border
 *   5. Interface (inputs, outputs, triggers)
 *
 * Left: "Registry" box with "discover" arrow pointing into the skill.
 * Right: "Agent" box with "invoke" arrow pointing into the skill.
 * Bottom: dashed "progressive disclosure" arrow showing on-demand loading.
 *
 * ONE accent: Governance compartment border uses var(--accent).
 * No gradients, no shadows. Clean structural diagram.
 */

export function SkillsDiagram() {
  /* ── Layout constants ──────────────────────────────── */
  const svgW = 780;
  const svgH = 380;

  /* Central skill block */
  const skillW = 300;
  const skillH = 290;
  const skillX = (svgW - skillW) / 2;
  const skillY = 20;

  /* Compartment layout */
  const compPadX = 12;
  const compW = skillW - compPadX * 2;
  const compH = 42;
  const compGap = 6;
  const headerH = 34;
  const compStartY = skillY + headerH + 8;

  /* Side boxes */
  const sideW = 120;
  const sideH = 56;
  const sideLeftX = 40;
  const sideRightX = svgW - sideW - 40;
  const sideCenterY = skillY + skillH / 2;

  /* Compartment data */
  const compartments = [
    { title: "Manifest", sub: "name, version, description", accent: false },
    { title: "Entry point", sub: "step-by-step instructions", accent: false },
    { title: "Resource bundle", sub: "references, scripts", accent: false },
    { title: "Governance", sub: "owner, risk tier, audit date", accent: true },
    { title: "Interface", sub: "inputs, outputs, triggers", accent: false },
  ];

  function compY(i: number) {
    return compStartY + i * (compH + compGap);
  }

  /* Bottom arrow */
  const bottomArrowY = skillY + skillH + 28;

  return (
    <figure
      role="img"
      aria-label="The Skill Contract: a central skill block with five compartments — Manifest, Entry point, Resource bundle, Governance, and Interface — flanked by Registry and Agent boxes connected by discover and invoke arrows, with a progressive disclosure annotation below"
      style={{ margin: 0, width: "100%", maxWidth: "780px", marginInline: "auto" }}
    >
      <svg
        viewBox={`0 0 ${svgW} ${svgH}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        <defs>
          {/* Solid arrow marker */}
          <marker
            id="skArrow"
            viewBox="0 0 10 10"
            refX="10"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path
              d="M 0 1.5 L 10 5 L 0 8.5"
              fill="none"
              stroke="var(--color-midnight)"
              strokeWidth="1.5"
            />
          </marker>

          {/* Dashed arrow marker (muted) */}
          <marker
            id="skArrowMuted"
            viewBox="0 0 10 10"
            refX="10"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path
              d="M 0 1.5 L 10 5 L 0 8.5"
              fill="none"
              stroke="var(--fg-2)"
              strokeWidth="1.5"
            />
          </marker>
        </defs>

        {/* ═══════════════════════════════════════════════════
            CENTRAL SKILL BLOCK — outer container
            ═══════════════════════════════════════════════════ */}
        <rect
          x={skillX}
          y={skillY}
          width={skillW}
          height={skillH}
          rx={6}
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          fill="var(--bg-surface)"
        />

        {/* SKILL title */}
        <text
          x={skillX + skillW / 2}
          y={skillY + headerH / 2 + 5}
          fontFamily="var(--font-display)"
          fontSize="16"
          fontWeight="700"
          fill="var(--color-midnight)"
          textAnchor="middle"
          letterSpacing="0.06em"
        >
          SKILL
        </text>

        {/* Header divider */}
        <line
          x1={skillX + compPadX}
          y1={skillY + headerH}
          x2={skillX + skillW - compPadX}
          y2={skillY + headerH}
          stroke="var(--border)"
          strokeWidth="1"
        />

        {/* ═══════════════════════════════════════════════════
            FIVE COMPARTMENTS
            ═══════════════════════════════════════════════════ */}
        {compartments.map((comp, i) => {
          const x = skillX + compPadX;
          const y = compY(i);
          const isAccent = comp.accent;

          return (
            <g key={`comp-${i}`}>
              <rect
                x={x}
                y={y}
                width={compW}
                height={compH}
                rx={3}
                stroke={isAccent ? "var(--accent)" : "var(--color-midnight)"}
                strokeWidth={isAccent ? 1.5 : 1}
                fill="none"
              />
              <text
                x={x + 12}
                y={y + 17}
                fontFamily="var(--font-display)"
                fontSize="12"
                fontWeight="600"
                fill={isAccent ? "var(--accent)" : "var(--color-midnight)"}
              >
                {comp.title}
              </text>
              <text
                x={x + 12}
                y={y + 33}
                fontFamily="var(--font-mono)"
                fontSize="9"
                fill="var(--fg-3)"
                letterSpacing="0.02em"
              >
                {comp.sub}
              </text>
            </g>
          );
        })}

        {/* ═══════════════════════════════════════════════════
            LEFT — Registry box
            ═══════════════════════════════════════════════════ */}
        <rect
          x={sideLeftX}
          y={sideCenterY - sideH / 2}
          width={sideW}
          height={sideH}
          rx={4}
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          fill="var(--bg-surface)"
        />
        <text
          x={sideLeftX + sideW / 2}
          y={sideCenterY + 5}
          fontFamily="var(--font-display)"
          fontSize="14"
          fontWeight="600"
          fill="var(--color-midnight)"
          textAnchor="middle"
        >
          Registry
        </text>

        {/* Arrow: Registry → SKILL ("discover") */}
        <line
          x1={sideLeftX + sideW + 6}
          y1={sideCenterY}
          x2={skillX - 8}
          y2={sideCenterY}
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          markerEnd="url(#skArrow)"
        />

        {/* "discover" label */}
        <text
          x={(sideLeftX + sideW + skillX) / 2}
          y={sideCenterY - 10}
          fontFamily="var(--font-mono)"
          fontSize="10"
          fontWeight="500"
          fill="var(--fg-2)"
          textAnchor="middle"
          letterSpacing="0.04em"
        >
          discover
        </text>

        {/* ═══════════════════════════════════════════════════
            RIGHT — Agent box
            ═══════════════════════════════════════════════════ */}
        <rect
          x={sideRightX}
          y={sideCenterY - sideH / 2}
          width={sideW}
          height={sideH}
          rx={4}
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          fill="var(--bg-surface)"
        />
        <text
          x={sideRightX + sideW / 2}
          y={sideCenterY + 5}
          fontFamily="var(--font-display)"
          fontSize="14"
          fontWeight="600"
          fill="var(--color-midnight)"
          textAnchor="middle"
        >
          Agent
        </text>

        {/* Arrow: Agent → SKILL ("invoke") */}
        <line
          x1={sideRightX - 6}
          y1={sideCenterY}
          x2={skillX + skillW + 8}
          y2={sideCenterY}
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          markerStart="url(#skArrow)"
        />

        {/* "invoke" label */}
        <text
          x={(sideRightX + skillX + skillW) / 2}
          y={sideCenterY - 10}
          fontFamily="var(--font-mono)"
          fontSize="10"
          fontWeight="500"
          fill="var(--fg-2)"
          textAnchor="middle"
          letterSpacing="0.04em"
        >
          invoke
        </text>

        {/* ═══════════════════════════════════════════════════
            BOTTOM — Progressive disclosure (dashed arrow)
            ═══════════════════════════════════════════════════ */}
        {/* Dashed horizontal line spanning below the skill block */}
        <line
          x1={skillX + 40}
          y1={bottomArrowY}
          x2={skillX + skillW - 40}
          y2={bottomArrowY}
          stroke="var(--fg-2)"
          strokeWidth="1"
          strokeDasharray="6 4"
          markerEnd="url(#skArrowMuted)"
        />

        {/* "progressive disclosure" label */}
        <text
          x={skillX + skillW / 2}
          y={bottomArrowY - 10}
          fontFamily="var(--font-mono)"
          fontSize="10"
          fontWeight="500"
          fill="var(--fg-2)"
          textAnchor="middle"
          letterSpacing="0.04em"
        >
          progressive disclosure
        </text>

        {/* Sub-annotation */}
        <text
          x={skillX + skillW / 2}
          y={bottomArrowY + 18}
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="var(--fg-3)"
          textAnchor="middle"
          letterSpacing="0.02em"
        >
          resources load on demand
        </text>
      </svg>
    </figure>
  );
}
