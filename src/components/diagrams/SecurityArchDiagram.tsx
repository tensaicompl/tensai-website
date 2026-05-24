/**
 * SecurityArchDiagram — Defence-in-Depth Security Architecture
 *
 * Three concentric rectangles with left-to-right request flow:
 * Gateway (outermost) → Citadel Isolation (middle) → Output Validation (innermost).
 *
 * Single accent: var(--accent) on the innermost layer border only.
 * Everything else on the midnight/border/muted scale.
 */

export function SecurityArchDiagram() {
  /* ── Layout constants ──────────────────────────────── */

  // Outer layer (Gateway)
  const outerX = 40;
  const outerY = 30;
  const outerW = 700;
  const outerH = 320;

  // Middle layer (Citadel Isolation)
  const midX = 140;
  const midY = 70;
  const midW = 500;
  const midH = 240;

  // Inner layer (Output Validation)
  const innerX = 440;
  const innerY = 110;
  const innerW = 180;
  const innerH = 160;

  // Request flow Y centre
  const flowY = 190;

  // Gateway sub-boxes
  const gateBoxW = 100;
  const gateBoxH = 40;
  const gateBox1X = 60;
  const gateBox1Y = flowY - gateBoxH / 2 - 30;
  const gateBox2X = 60;
  const gateBox2Y = flowY - gateBoxH / 2 + 30;

  // Citadel sub-boxes
  const citadelBoxW = 110;
  const citadelBoxH = 36;
  const citadelStartX = 170;
  const citadelBoxGap = 14;
  const citadelBox1Y = midY + 50;
  const citadelBox2Y = citadelBox1Y + citadelBoxH + citadelBoxGap;
  const citadelBox3Y = citadelBox2Y + citadelBoxH + citadelBoxGap;

  // Output Validation sub-boxes
  const outBoxW = 120;
  const outBoxH = 36;
  const outBox1X = innerX + 30;
  const outBox1Y = innerY + 30;
  const outBox2X = innerX + 30;
  const outBox2Y = outBox1Y + outBoxH + 14;

  return (
    <figure
      role="img"
      aria-label="Defence-in-depth security architecture: request flows through gateway, citadel isolation, and output validation layers"
      style={{ margin: 0, width: "100%", maxWidth: "780px", marginInline: "auto" }}
    >
      <svg
        viewBox="0 0 780 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        {/* ── Outermost layer: GATEWAY ─────────────────────── */}
        <rect
          x={outerX} y={outerY}
          width={outerW} height={outerH} rx="4"
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          fill="var(--bg-surface)"
        />
        <text
          x={outerX + 12} y={outerY + 18}
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="var(--fg-2)"
          letterSpacing="0.12em"
          fontWeight="600"
        >
          GATEWAY
        </text>

        {/* Gateway sub-box: Input Scan */}
        <rect
          x={gateBox1X} y={gateBox1Y}
          width={gateBoxW} height={gateBoxH} rx="3"
          stroke="var(--color-midnight)"
          strokeWidth="1"
          fill="var(--bg-surface)"
        />
        <text
          x={gateBox1X + gateBoxW / 2}
          y={gateBox1Y + gateBoxH / 2}
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--color-midnight)"
          textAnchor="middle"
          dominantBaseline="middle"
          letterSpacing="0.02em"
        >
          Input Scan
        </text>

        {/* Gateway sub-box: Rate Limit */}
        <rect
          x={gateBox2X} y={gateBox2Y}
          width={gateBoxW} height={gateBoxH} rx="3"
          stroke="var(--color-midnight)"
          strokeWidth="1"
          fill="var(--bg-surface)"
        />
        <text
          x={gateBox2X + gateBoxW / 2}
          y={gateBox2Y + gateBoxH / 2}
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--color-midnight)"
          textAnchor="middle"
          dominantBaseline="middle"
          letterSpacing="0.02em"
        >
          Rate Limit
        </text>

        {/* Arrow from Input Scan to Rate Limit */}
        <line
          x1={gateBox1X + gateBoxW / 2}
          y1={gateBox1Y + gateBoxH}
          x2={gateBox2X + gateBoxW / 2}
          y2={gateBox2Y}
          stroke="var(--color-midnight)"
          strokeWidth="1"
          markerEnd="url(#saArrow)"
        />

        {/* ── Middle layer: CITADEL ISOLATION ──────────────── */}
        <rect
          x={midX} y={midY}
          width={midW} height={midH} rx="4"
          stroke="var(--border)"
          strokeWidth="1.5"
          fill="var(--bg-surface)"
        />
        <text
          x={midX + 12} y={midY + 18}
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="var(--fg-2)"
          letterSpacing="0.12em"
          fontWeight="600"
        >
          CITADEL ISOLATION
        </text>

        {/* Citadel sub-box: Filesystem */}
        <rect
          x={citadelStartX} y={citadelBox1Y}
          width={citadelBoxW} height={citadelBoxH} rx="3"
          stroke="var(--color-midnight)"
          strokeWidth="1"
          fill="var(--bg-surface)"
        />
        <text
          x={citadelStartX + citadelBoxW / 2}
          y={citadelBox1Y + citadelBoxH / 2 - 6}
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--color-midnight)"
          textAnchor="middle"
          dominantBaseline="middle"
          letterSpacing="0.02em"
        >
          Filesystem
        </text>
        <text
          x={citadelStartX + citadelBoxW / 2}
          y={citadelBox1Y + citadelBoxH / 2 + 8}
          fontFamily="var(--font-mono)"
          fontSize="8"
          fill="var(--fg-3)"
          textAnchor="middle"
          dominantBaseline="middle"
          letterSpacing="0.02em"
        >
          read-only mounts
        </text>

        {/* Citadel sub-box: Network */}
        <rect
          x={citadelStartX} y={citadelBox2Y}
          width={citadelBoxW} height={citadelBoxH} rx="3"
          stroke="var(--color-midnight)"
          strokeWidth="1"
          fill="var(--bg-surface)"
        />
        <text
          x={citadelStartX + citadelBoxW / 2}
          y={citadelBox2Y + citadelBoxH / 2 - 6}
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--color-midnight)"
          textAnchor="middle"
          dominantBaseline="middle"
          letterSpacing="0.02em"
        >
          Network
        </text>
        <text
          x={citadelStartX + citadelBoxW / 2}
          y={citadelBox2Y + citadelBoxH / 2 + 8}
          fontFamily="var(--font-mono)"
          fontSize="8"
          fill="var(--fg-3)"
          textAnchor="middle"
          dominantBaseline="middle"
          letterSpacing="0.02em"
        >
          allowlist outbound
        </text>

        {/* Citadel sub-box: Capabilities */}
        <rect
          x={citadelStartX} y={citadelBox3Y}
          width={citadelBoxW} height={citadelBoxH} rx="3"
          stroke="var(--color-midnight)"
          strokeWidth="1"
          fill="var(--bg-surface)"
        />
        <text
          x={citadelStartX + citadelBoxW / 2}
          y={citadelBox3Y + citadelBoxH / 2 - 6}
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--color-midnight)"
          textAnchor="middle"
          dominantBaseline="middle"
          letterSpacing="0.02em"
        >
          Capabilities
        </text>
        <text
          x={citadelStartX + citadelBoxW / 2}
          y={citadelBox3Y + citadelBoxH / 2 + 8}
          fontFamily="var(--font-mono)"
          fontSize="8"
          fill="var(--fg-3)"
          textAnchor="middle"
          dominantBaseline="middle"
          letterSpacing="0.02em"
        >
          explicit tool grants
        </text>

        {/* ── Innermost layer: OUTPUT VALIDATION (accent border) ── */}
        <rect
          x={innerX} y={innerY}
          width={innerW} height={innerH} rx="4"
          stroke="var(--accent)"
          strokeWidth="1.5"
          fill="var(--bg-surface)"
        />
        <text
          x={innerX + 12} y={innerY + 18}
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="var(--accent)"
          letterSpacing="0.12em"
          fontWeight="600"
        >
          OUTPUT VALIDATION
        </text>

        {/* Output sub-box: Schema check */}
        <rect
          x={outBox1X} y={outBox1Y}
          width={outBoxW} height={outBoxH} rx="3"
          stroke="var(--color-midnight)"
          strokeWidth="1"
          fill="var(--bg-surface)"
        />
        <text
          x={outBox1X + outBoxW / 2}
          y={outBox1Y + outBoxH / 2}
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--color-midnight)"
          textAnchor="middle"
          dominantBaseline="middle"
          letterSpacing="0.02em"
        >
          Schema check
        </text>

        {/* Output sub-box: Content filter */}
        <rect
          x={outBox2X} y={outBox2Y}
          width={outBoxW} height={outBoxH} rx="3"
          stroke="var(--color-midnight)"
          strokeWidth="1"
          fill="var(--bg-surface)"
        />
        <text
          x={outBox2X + outBoxW / 2}
          y={outBox2Y + outBoxH / 2}
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--color-midnight)"
          textAnchor="middle"
          dominantBaseline="middle"
          letterSpacing="0.02em"
        >
          Content filter
        </text>

        {/* Arrow from Schema check to Content filter */}
        <line
          x1={outBox1X + outBoxW / 2}
          y1={outBox1Y + outBoxH}
          x2={outBox2X + outBoxW / 2}
          y2={outBox2Y}
          stroke="var(--color-midnight)"
          strokeWidth="1"
          markerEnd="url(#saArrow)"
        />

        {/* ── Request flow: main horizontal arrow ─────────── */}

        {/* Entry arrow (left edge into gateway) */}
        <line
          x1={8} y1={flowY}
          x2={outerX} y2={flowY}
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          markerEnd="url(#saArrow)"
        />
        <text
          x={8} y={flowY - 10}
          fontFamily="var(--font-mono)"
          fontSize="8"
          fill="var(--fg-3)"
          letterSpacing="0.04em"
        >
          request
        </text>

        {/* Arrow from gateway boxes to citadel entry */}
        <line
          x1={gateBox1X + gateBoxW}
          y1={flowY}
          x2={midX}
          y2={flowY}
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          markerEnd="url(#saArrow)"
        />

        {/* Arrow through citadel (past sub-boxes) into inner layer */}
        <line
          x1={citadelStartX + citadelBoxW + 10}
          y1={flowY}
          x2={innerX}
          y2={flowY}
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          markerEnd="url(#saArrow)"
        />

        {/* Exit arrow from inner layer out of all layers */}
        <line
          x1={innerX + innerW}
          y1={flowY}
          x2={outerX + outerW + 4}
          y2={flowY}
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
        />
        <line
          x1={outerX + outerW + 4}
          y1={flowY}
          x2={772}
          y2={flowY}
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          markerEnd="url(#saArrow)"
        />
        <text
          x={756} y={flowY - 10}
          fontFamily="var(--font-mono)"
          fontSize="8"
          fill="var(--fg-3)"
          textAnchor="end"
          letterSpacing="0.04em"
        >
          response
        </text>

        {/* ── Flow line connecting gateway boxes to the flow ── */}
        {/* Short connector from flow line down to Input Scan */}
        <line
          x1={gateBox1X + gateBoxW / 2}
          y1={gateBox1Y}
          x2={gateBox1X + gateBoxW / 2}
          y2={outerY + 26}
          stroke="var(--border)"
          strokeWidth="1"
          strokeDasharray="3 3"
        />

        {/* Short connector from Rate Limit down to flow line */}
        <line
          x1={gateBox2X + gateBoxW / 2}
          y1={gateBox2Y + gateBoxH}
          x2={gateBox2X + gateBoxW / 2}
          y2={outerY + outerH - 12}
          stroke="var(--border)"
          strokeWidth="1"
          strokeDasharray="3 3"
        />

        {/* ── Marker definitions ──────────────────────────── */}
        <defs>
          <marker
            id="saArrow"
            viewBox="0 0 10 10"
            refX="10" refY="5"
            markerWidth="7" markerHeight="7"
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
            id="saArrowAccent"
            viewBox="0 0 10 10"
            refX="10" refY="5"
            markerWidth="7" markerHeight="7"
            orient="auto-start-reverse"
          >
            <path
              d="M 0 1.5 L 10 5 L 0 8.5"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="1.5"
            />
          </marker>
        </defs>
      </svg>
    </figure>
  );
}
