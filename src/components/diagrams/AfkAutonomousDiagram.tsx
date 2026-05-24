/**
 * AfkAutonomousDiagram — The Ralph Loop + Autonomy Gradient
 *
 * Zone 1 (upper): Five-node clockwise pentagon loop
 * Plan -> Act -> Observe -> Reflect -> Decide -> Plan
 * with an exit arrow from Decide labeled "terminate".
 *
 * Zone 2 (lower): Horizontal autonomy gradient bar
 * HITL | On-rails | AFK with increasing opacity fills.
 *
 * Single accent: var(--accent) on the Decide node border only.
 */

export function AfkAutonomousDiagram() {
  /* ── Pentagon geometry ─────────────────────────────── */
  const cx = 390;
  const cy = 145;
  const r = 110;

  // Pentagon vertices (clockwise from top centre)
  // Angles: -90, -90+72=-18, -90+144=54, -90+216=126, -90+288=198
  const angles = [-90, -18, 54, 126, 198];
  const rad = (deg: number) => (deg * Math.PI) / 180;
  const pts = angles.map((a) => ({
    x: cx + r * Math.cos(rad(a)),
    y: cy + r * Math.sin(rad(a)),
  }));

  const nodes = [
    { label: "Plan", accent: false },
    { label: "Act", accent: false },
    { label: "Observe", accent: false },
    { label: "Reflect", accent: false },
    { label: "Decide", accent: true },
  ];

  const nodeR = 32;

  /* ── Arrow edge helper (circle border to circle border) ── */
  function edgePath(from: { x: number; y: number }, to: { x: number; y: number }) {
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const ux = dx / dist;
    const uy = dy / dist;
    return {
      x1: from.x + ux * (nodeR + 2),
      y1: from.y + uy * (nodeR + 2),
      x2: to.x - ux * (nodeR + 6),
      y2: to.y - uy * (nodeR + 6),
    };
  }

  /* ── Autonomy gradient bar ─────────────────────────── */
  const barY = 320;
  const barH = 50;
  const barX = 80;
  const barW = 620;
  const segW = barW / 3;

  const segments = [
    {
      label: "HITL",
      fill: "rgba(15, 23, 42, 0.05)",
      annotation: "Human approves every action",
    },
    {
      label: "On-rails",
      fill: "rgba(15, 23, 42, 0.15)",
      annotation: "Agent acts within pre-approved bounds",
    },
    {
      label: "AFK",
      fill: "rgba(15, 23, 42, 0.30)",
      annotation: "Agent acts alone — kill switch is live",
    },
  ];

  /* ── Dashed drop lines from Decide to each segment centre ── */
  const decideNode = pts[4]; // upper left
  const dropTargets = segments.map((_, i) => barX + segW * i + segW / 2);

  return (
    <figure
      role="img"
      aria-label="The Ralph Loop: a five-step autonomous agent cycle with Plan, Act, Observe, Reflect, and Decide nodes, plus an autonomy gradient from HITL to AFK"
      style={{ margin: 0, width: "100%", maxWidth: "780px", marginInline: "auto" }}
    >
      <svg
        viewBox="0 0 780 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        {/* ── Marker definitions ──────────────────────────── */}
        <defs>
          <marker
            id="afkArrow"
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
          <marker
            id="afkArrowSmall"
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
              stroke="var(--color-midnight)"
              strokeWidth="1.5"
            />
          </marker>
        </defs>

        {/* ── Zone 1: The Ralph Loop ─────────────────────── */}

        {/* Zone title */}
        <text
          x={cx}
          y={18}
          fontFamily="var(--font-display)"
          fontSize="13"
          fontWeight="600"
          fill="var(--color-midnight)"
          textAnchor="middle"
          letterSpacing="0.02em"
        >
          The Ralph Loop
        </text>

        {/* Clockwise arrows: 0->1, 1->2, 2->3, 3->4, 4->0 */}
        {[0, 1, 2, 3, 4].map((i) => {
          const next = (i + 1) % 5;
          const e = edgePath(pts[i], pts[next]);
          return (
            <line
              key={`edge-${i}`}
              x1={e.x1}
              y1={e.y1}
              x2={e.x2}
              y2={e.y2}
              stroke="var(--color-midnight)"
              strokeWidth="1.5"
              markerEnd="url(#afkArrow)"
            />
          );
        })}

        {/* Node circles + labels */}
        {nodes.map((node, i) => {
          const p = pts[i];
          const isAccent = node.accent;
          return (
            <g key={node.label}>
              <circle
                cx={p.x}
                cy={p.y}
                r={nodeR}
                stroke={isAccent ? "var(--accent)" : "var(--color-midnight)"}
                strokeWidth={isAccent ? 3 : 2}
                fill="none"
              />
              <text
                x={p.x}
                y={p.y}
                fontFamily="var(--font-display)"
                fontSize="14"
                fontWeight="500"
                fill="var(--color-midnight)"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                {node.label}
              </text>
            </g>
          );
        })}

        {/* Exit arrow from Decide downward, labeled "terminate" */}
        <line
          x1={decideNode.x}
          y1={decideNode.y + nodeR + 2}
          x2={decideNode.x}
          y2={barY - 50}
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          markerEnd="url(#afkArrow)"
        />
        <text
          x={decideNode.x + 8}
          y={(decideNode.y + nodeR + barY - 50) / 2}
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--fg-2)"
          letterSpacing="0.04em"
        >
          terminate
        </text>

        {/* ── Dashed vertical lines from Decide to segments ── */}
        {dropTargets.map((tx, i) => (
          <line
            key={`drop-${i}`}
            x1={decideNode.x}
            y1={decideNode.y + nodeR + 2}
            x2={tx}
            y2={barY}
            stroke="var(--color-midnight)"
            strokeWidth="1"
            strokeDasharray="5 4"
            opacity="0.4"
          />
        ))}

        {/* ── Zone 2: Autonomy Gradient ──────────────────── */}

        {/* Segment labels above bar */}
        {segments.map((seg, i) => {
          const sx = barX + segW * i;
          return (
            <text
              key={`lbl-${i}`}
              x={sx + segW / 2}
              y={barY - 8}
              fontFamily="var(--font-display)"
              fontSize="14"
              fontWeight="700"
              fill="var(--color-midnight)"
              textAnchor="middle"
            >
              {seg.label}
            </text>
          );
        })}

        {/* Bar segments (no rounded corners, sharp rectangles) */}
        {segments.map((seg, i) => {
          const sx = barX + segW * i;
          return (
            <rect
              key={`seg-${i}`}
              x={sx}
              y={barY}
              width={segW}
              height={barH}
              fill={seg.fill}
              stroke="var(--color-midnight)"
              strokeWidth="1"
            />
          );
        })}

        {/* Annotations below bar */}
        {segments.map((seg, i) => {
          const sx = barX + segW * i;
          return (
            <text
              key={`ann-${i}`}
              x={sx + segW / 2}
              y={barY + barH + 16}
              fontFamily="var(--font-mono)"
              fontSize="10"
              fill="var(--fg-3)"
              textAnchor="middle"
              letterSpacing="0.02em"
            >
              {seg.annotation}
            </text>
          );
        })}

        {/* Horizontal arrow below annotations */}
        <line
          x1={barX}
          y1={barY + barH + 38}
          x2={barX + barW - 6}
          y2={barY + barH + 38}
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          markerEnd="url(#afkArrow)"
        />
        <text
          x={cx}
          y={barY + barH + 54}
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--fg-2)"
          textAnchor="middle"
          letterSpacing="0.04em"
        >
          increasing autonomy &mdash; earned, not configured
        </text>
      </svg>
    </figure>
  );
}
