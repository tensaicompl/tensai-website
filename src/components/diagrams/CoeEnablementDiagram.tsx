/**
 * CoeEnablementDiagram — Hub-and-Spoke CoE Model
 *
 * Centre: rounded rect labelled "CoE" with accent border,
 * containing three stacked labels: Standards, Reviews, Enablement.
 *
 * Five spoke lines radiate outward to team boxes:
 * Product Team A, Product Team B, Data Science, Platform, Compliance.
 * Bidirectional arrows on each spoke.
 *
 * Left annotation: "Governance out" (CoE -> teams).
 * Right annotation: "Capability in" (teams -> CoE).
 *
 * Bottom contrast strip: "Federated" model as a flat row of
 * peer boxes with no hub, labelled "no centre, slower convergence".
 *
 * ONE accent: the CoE centre box border uses var(--accent).
 * No gradients, no shadows. Clean structural diagram.
 */

export function CoeEnablementDiagram() {
  /* ── Layout constants ──────────────────────────────── */
  const svgW = 780;
  const svgH = 360;

  /* Centre hub */
  const hubCx = svgW / 2;
  const hubCy = 130;
  const hubW = 120;
  const hubH = 80;

  /* Spoke team boxes */
  const teamW = 110;
  const teamH = 32;
  /* Teams positioned around the hub */
  const teams: Array<{ label: string; x: number; y: number }> = [
    { label: "Product Team A", x: hubCx - 250, y: hubCy - 50 },
    { label: "Product Team B", x: hubCx - 230, y: hubCy + 60 },
    { label: "Data Science", x: hubCx, y: hubCy - 90 - teamH / 2 },
    { label: "Platform", x: hubCx + 230, y: hubCy - 50 },
    { label: "Compliance", x: hubCx + 250, y: hubCy + 60 },
  ];

  /* Hub inner labels */
  const hubLabels = ["Standards", "Reviews", "Enablement"];

  /* Federated model (bottom strip) */
  const fedY = 290;
  const fedBoxW = 90;
  const fedBoxH = 28;
  const fedGap = 16;
  const fedCount = 5;
  const fedTotalW = fedCount * fedBoxW + (fedCount - 1) * fedGap;
  const fedStartX = (svgW - fedTotalW) / 2;

  /* ── Arrow endpoint helpers ────────────────────────── */
  function hubEdgePoint(tx: number, ty: number): { x: number; y: number } {
    const dx = tx - hubCx;
    const dy = ty - hubCy;
    const halfW = hubW / 2;
    const halfH = hubH / 2;

    // Find intersection with hub rect edges
    const scaleX = Math.abs(dx) > 0 ? halfW / Math.abs(dx) : Infinity;
    const scaleY = Math.abs(dy) > 0 ? halfH / Math.abs(dy) : Infinity;
    const scale = Math.min(scaleX, scaleY);

    return { x: hubCx + dx * scale, y: hubCy + dy * scale };
  }

  function teamEdgePoint(
    teamCx: number,
    teamCy: number,
    targetX: number,
    targetY: number
  ): { x: number; y: number } {
    const dx = targetX - teamCx;
    const dy = targetY - teamCy;
    const halfW = teamW / 2;
    const halfH = teamH / 2;

    const scaleX = Math.abs(dx) > 0 ? halfW / Math.abs(dx) : Infinity;
    const scaleY = Math.abs(dy) > 0 ? halfH / Math.abs(dy) : Infinity;
    const scale = Math.min(scaleX, scaleY);

    return { x: teamCx + dx * scale, y: teamCy + dy * scale };
  }

  return (
    <figure
      role="img"
      aria-label="Hub-and-spoke CoE enablement model with five teams radiating from a Centre of Excellence, contrasted with a flat federated alternative below"
      style={{ margin: 0, width: "100%", maxWidth: "780px", marginInline: "auto" }}
    >
      <svg
        viewBox={`0 0 ${svgW} ${svgH}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        <defs>
          {/* Bidirectional arrow markers — outward (hub to team) */}
          <marker
            id="ceArrowOut"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path
              d="M 0 2 L 10 5 L 0 8"
              fill="none"
              stroke="var(--color-midnight)"
              strokeWidth="1.5"
            />
          </marker>

          {/* Bidirectional arrow markers — inward (team to hub) */}
          <marker
            id="ceArrowIn"
            viewBox="0 0 10 10"
            refX="1"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path
              d="M 10 2 L 0 5 L 10 8"
              fill="none"
              stroke="var(--color-midnight)"
              strokeWidth="1.5"
            />
          </marker>
        </defs>

        {/* ═══════════════════════════════════════════════════
            SPOKE LINES — bidirectional arrows
            ═══════════════════════════════════════════════════ */}
        {teams.map((team, i) => {
          const hub = hubEdgePoint(team.x, team.y);
          const te = teamEdgePoint(team.x, team.y, hubCx, hubCy);
          return (
            <line
              key={`spoke-${i}`}
              x1={hub.x}
              y1={hub.y}
              x2={te.x}
              y2={te.y}
              stroke="var(--color-midnight)"
              strokeWidth="1"
              markerStart="url(#ceArrowIn)"
              markerEnd="url(#ceArrowOut)"
              opacity={0.55}
            />
          );
        })}

        {/* ═══════════════════════════════════════════════════
            TEAM BOXES — spoke endpoints
            ═══════════════════════════════════════════════════ */}
        {teams.map((team, i) => (
          <g key={`team-${i}`}>
            <rect
              x={team.x - teamW / 2}
              y={team.y - teamH / 2}
              width={teamW}
              height={teamH}
              rx={4}
              stroke="var(--border)"
              strokeWidth="1"
              fill="var(--bg-surface)"
            />
            <text
              x={team.x}
              y={team.y + 4}
              fontFamily="var(--font-display)"
              fontSize="11"
              fontWeight="500"
              fill="var(--color-midnight)"
              textAnchor="middle"
            >
              {team.label}
            </text>
          </g>
        ))}

        {/* ═══════════════════════════════════════════════════
            CENTRE HUB — CoE box (accent border)
            ═══════════════════════════════════════════════════ */}
        <rect
          x={hubCx - hubW / 2}
          y={hubCy - hubH / 2}
          width={hubW}
          height={hubH}
          rx={6}
          stroke="var(--accent)"
          strokeWidth="2"
          fill="var(--bg-surface)"
        />

        {/* Hub title */}
        <text
          x={hubCx}
          y={hubCy - hubH / 2 + 20}
          fontFamily="var(--font-display)"
          fontSize="15"
          fontWeight="700"
          fill="var(--color-midnight)"
          textAnchor="middle"
          letterSpacing="0.04em"
        >
          CoE
        </text>

        {/* Hub inner labels — stacked */}
        {hubLabels.map((label, i) => (
          <text
            key={`hub-lbl-${i}`}
            x={hubCx}
            y={hubCy - hubH / 2 + 36 + i * 14}
            fontFamily="var(--font-mono)"
            fontSize="9"
            fill="var(--fg-2)"
            textAnchor="middle"
            letterSpacing="0.04em"
          >
            {label}
          </text>
        ))}

        {/* ═══════════════════════════════════════════════════
            ANNOTATIONS — left and right
            ═══════════════════════════════════════════════════ */}

        {/* Left annotation: "Governance out" */}
        <text
          x={68}
          y={hubCy + 4}
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="var(--fg-3)"
          textAnchor="middle"
          letterSpacing="0.04em"
        >
          Governance out
        </text>
        {/* Small arrow indicating direction */}
        <line
          x1={98}
          y1={hubCy + 10}
          x2={120}
          y2={hubCy + 18}
          stroke="var(--fg-3)"
          strokeWidth="1"
          markerEnd="url(#ceArrowOut)"
          opacity={0.5}
        />

        {/* Right annotation: "Capability in" */}
        <text
          x={svgW - 68}
          y={hubCy + 4}
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="var(--fg-3)"
          textAnchor="middle"
          letterSpacing="0.04em"
        >
          Capability in
        </text>
        {/* Small arrow indicating direction */}
        <line
          x1={svgW - 120}
          y1={hubCy + 18}
          x2={svgW - 98}
          y2={hubCy + 10}
          stroke="var(--fg-3)"
          strokeWidth="1"
          markerEnd="url(#ceArrowOut)"
          opacity={0.5}
        />

        {/* ═══════════════════════════════════════════════════
            SEPARATOR LINE
            ═══════════════════════════════════════════════════ */}
        <line
          x1={100}
          y1={240}
          x2={svgW - 100}
          y2={240}
          stroke="var(--border)"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity={0.5}
        />

        {/* ═══════════════════════════════════════════════════
            BOTTOM STRIP — Federated model contrast
            ═══════════════════════════════════════════════════ */}

        {/* Section label */}
        <text
          x={svgW / 2}
          y={265}
          fontFamily="var(--font-mono)"
          fontSize="9"
          fontWeight="600"
          fill="var(--fg-2)"
          textAnchor="middle"
          letterSpacing="0.08em"
        >
          FEDERATED
        </text>

        {/* Flat row of peer boxes */}
        {Array.from({ length: fedCount }).map((_, i) => {
          const bx = fedStartX + i * (fedBoxW + fedGap);
          return (
            <g key={`fed-${i}`}>
              <rect
                x={bx}
                y={fedY}
                width={fedBoxW}
                height={fedBoxH}
                rx={4}
                stroke="var(--border)"
                strokeWidth="1"
                fill="var(--bg-surface)"
                opacity={0.5}
              />
              <text
                x={bx + fedBoxW / 2}
                y={fedY + fedBoxH / 2 + 3}
                fontFamily="var(--font-mono)"
                fontSize="9"
                fill="var(--fg-3)"
                textAnchor="middle"
              >
                {`Team ${i + 1}`}
              </text>
            </g>
          );
        })}

        {/* Connecting dashes between federated boxes (peer-to-peer, no hub) */}
        {Array.from({ length: fedCount - 1 }).map((_, i) => {
          const x1 = fedStartX + i * (fedBoxW + fedGap) + fedBoxW;
          const x2 = fedStartX + (i + 1) * (fedBoxW + fedGap);
          const cy = fedY + fedBoxH / 2;
          return (
            <line
              key={`fed-link-${i}`}
              x1={x1 + 2}
              y1={cy}
              x2={x2 - 2}
              y2={cy}
              stroke="var(--border)"
              strokeWidth="1"
              strokeDasharray="3 3"
              opacity={0.4}
            />
          );
        })}

        {/* Bottom caption */}
        <text
          x={svgW / 2}
          y={345}
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--fg-3)"
          textAnchor="middle"
          letterSpacing="0.04em"
        >
          no centre, slower convergence
        </text>
      </svg>
    </figure>
  );
}
