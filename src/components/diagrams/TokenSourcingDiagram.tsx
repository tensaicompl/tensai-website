/**
 * TokenSourcingDiagram — AI Gateway Architecture
 *
 * Three-column left-to-right flow:
 * Applications → AI Gateway (accent border) → Providers.
 *
 * Single accent: var(--accent) on the gateway border.
 * Everything else on the midnight/gray scale.
 */

export function TokenSourcingDiagram() {
  const appBoxes = [
    { label: "Support Agent", y: 40 },
    { label: "Knowledge Base", y: 155 },
    { label: "Code Assistant", y: 270 },
  ] as const;

  const gatewayLabels = [
    "Unified Routing",
    "Fallback Chains",
    "Rate-Limit Pool",
    "Cost Ledger",
    "Tier Selection",
  ] as const;

  const providerBoxes = [
    { label: "Anthropic", y: 40 },
    { label: "OpenAI", y: 155 },
    { label: "Mistral", y: 270 },
  ] as const;

  /* Layout constants */
  const appX = 24;
  const appW = 150;
  const appH = 70;
  const appMidX = appX + appW;

  const gwX = 280;
  const gwW = 220;
  const gwMidLeft = gwX;
  const gwMidRight = gwX + gwW;

  const provX = 606;
  const provW = 150;
  const provH = 70;
  const provMidX = provX;

  return (
    <figure
      role="img"
      aria-label="Token sourcing architecture: three applications connect through an AI Gateway to three model providers"
      style={{ margin: 0, width: "100%", maxWidth: "780px", marginInline: "auto" }}
    >
      <svg
        viewBox="0 0 780 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        <defs>
          <marker
            id="tsArrowRight"
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
        </defs>

        {/* ── Column label: Applications ────────────────────── */}
        <text
          x={appX + appW / 2}
          y="24"
          fontFamily="var(--font-mono)"
          fontSize="10"
          fontWeight="500"
          fill="var(--fg-3)"
          textAnchor="middle"
          letterSpacing="0.06em"
        >
          APPLICATIONS
        </text>

        {/* ── Left column: Application boxes ────────────────── */}
        {appBoxes.map((app) => (
          <g key={app.label}>
            <rect
              x={appX}
              y={app.y}
              width={appW}
              height={appH}
              rx="4"
              stroke="var(--color-midnight)"
              strokeWidth="1.5"
              fill="var(--bg-surface)"
            />
            <text
              x={appX + appW / 2}
              y={app.y + appH / 2}
              fontFamily="var(--font-display)"
              fontSize="13"
              fontWeight="600"
              fill="var(--color-midnight)"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {app.label}
            </text>
          </g>
        ))}

        {/* ── Arrows: Applications → Gateway ────────────────── */}
        {appBoxes.map((app) => (
          <line
            key={`arr-l-${app.y}`}
            x1={appMidX}
            y1={app.y + appH / 2}
            x2={gwMidLeft}
            y2={app.y + appH / 2}
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            markerEnd="url(#tsArrowRight)"
          />
        ))}

        {/* ── Column label: AI Gateway ──────────────────────── */}
        <text
          x={gwX + gwW / 2}
          y="24"
          fontFamily="var(--font-mono)"
          fontSize="10"
          fontWeight="500"
          fill="var(--fg-3)"
          textAnchor="middle"
          letterSpacing="0.06em"
        >
          AI GATEWAY
        </text>

        {/* ── Centre column: Gateway rectangle ──────────────── */}
        <rect
          x={gwX}
          y="40"
          width={gwW}
          height="300"
          rx="4"
          stroke="var(--accent)"
          strokeWidth="1.5"
          fill="rgba(109, 40, 217, 0.04)"
        />

        {/* ── Gateway internal labels ───────────────────────── */}
        {gatewayLabels.map((label, i) => {
          const labelY = 72 + i * 56;
          return (
            <g key={label}>
              <rect
                x={gwX + 16}
                y={labelY - 14}
                width={gwW - 32}
                height="32"
                rx="3"
                stroke="var(--border)"
                strokeWidth="1"
                fill="var(--bg-surface)"
              />
              <text
                x={gwX + gwW / 2}
                y={labelY + 3}
                fontFamily="var(--font-mono)"
                fontSize="11"
                fontWeight="500"
                fill="var(--fg-2)"
                textAnchor="middle"
                dominantBaseline="middle"
                letterSpacing="0.02em"
              >
                {label}
              </text>
            </g>
          );
        })}

        {/* ── Arrows: Gateway → Providers ───────────────────── */}
        {providerBoxes.map((prov) => (
          <line
            key={`arr-r-${prov.y}`}
            x1={gwMidRight}
            y1={prov.y + provH / 2}
            x2={provMidX}
            y2={prov.y + provH / 2}
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            markerEnd="url(#tsArrowRight)"
          />
        ))}

        {/* ── Column label: Providers ───────────────────────── */}
        <text
          x={provX + provW / 2}
          y="24"
          fontFamily="var(--font-mono)"
          fontSize="10"
          fontWeight="500"
          fill="var(--fg-3)"
          textAnchor="middle"
          letterSpacing="0.06em"
        >
          PROVIDERS
        </text>

        {/* ── Right column: Provider boxes ──────────────────── */}
        {providerBoxes.map((prov) => (
          <g key={prov.label}>
            <rect
              x={provX}
              y={prov.y}
              width={provW}
              height={provH}
              rx="4"
              stroke="var(--color-midnight)"
              strokeWidth="1.5"
              fill="var(--bg-surface)"
            />
            <text
              x={provX + provW / 2}
              y={prov.y + provH / 2}
              fontFamily="var(--font-display)"
              fontSize="13"
              fontWeight="600"
              fill="var(--color-midnight)"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {prov.label}
            </text>
          </g>
        ))}
      </svg>
    </figure>
  );
}
