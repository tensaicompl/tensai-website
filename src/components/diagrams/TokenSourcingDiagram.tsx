"use client";

/**
 * TokenSourcingDiagram — AI Gateway Architecture
 *
 * Three-column left-to-right flow:
 * Applications → AI Gateway (accent border) → Providers.
 *
 * Single accent: var(--accent) on the gateway border.
 * Everything else on the midnight/gray scale.
 *
 * IntersectionObserver triggers entrance + SMIL animations at 20% visibility.
 * Respects prefers-reduced-motion.
 *
 * Entrance: apps stagger in, then gateway scales up, then providers stagger in.
 * Animated dots flow from each app through the gateway to a provider (3 flows,
 * staggered 0.4s). Dots pause inside the gateway via a longer curved path segment.
 * Static connector lines remain at 25% opacity beneath the animated flows.
 */

import { useEffect, useRef, useState } from "react";

export function TokenSourcingDiagram() {
  const figRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = figRef.current;
    if (!el) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* ── Layout constants (viewBox 1200x400) ────────────────── */

  const appX = 40;
  const appW = 180;
  const appH = 80;
  const appRight = appX + appW;

  const gwX = 380;
  const gwW = 280;
  const gwLeft = gwX;
  const gwRight = gwX + gwW;
  const gwCenterX = gwX + gwW / 2;

  const provX = 820;
  const provW = 180;
  const provH = 80;

  const appBoxes = [
    { label: "Support Agent", y: 50 },
    { label: "Knowledge Base", y: 160 },
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
    { label: "Anthropic", y: 50 },
    { label: "OpenAI", y: 160 },
    { label: "Mistral", y: 270 },
  ] as const;

  /* ── Flow path helpers ──────────────────────────────────── */
  // Each flow: App[i] → enters gateway left → curves through gateway internals → exits gateway right → Provider[i]
  // The curve inside the gateway creates a visual "pause" as the dot lingers there.

  const appMidY = (idx: number) => appBoxes[idx].y + appH / 2;
  const provMidY = (idx: number) => providerBoxes[idx].y + provH / 2;

  // Flow 0: Support Agent → gateway internals → Anthropic
  const flow0 = `M ${appRight} ${appMidY(0)} L ${gwLeft} ${appMidY(0)} C ${gwLeft + 40} ${appMidY(0)}, ${gwCenterX - 30} ${120}, ${gwCenterX} ${160} C ${gwCenterX + 30} ${200}, ${gwRight - 40} ${provMidY(0)}, ${gwRight} ${provMidY(0)} L ${provX} ${provMidY(0)}`;

  // Flow 1: Knowledge Base → gateway internals → OpenAI
  const flow1 = `M ${appRight} ${appMidY(1)} L ${gwLeft} ${appMidY(1)} C ${gwLeft + 50} ${appMidY(1)}, ${gwCenterX - 40} ${180}, ${gwCenterX} ${210} C ${gwCenterX + 40} ${240}, ${gwRight - 50} ${provMidY(1)}, ${gwRight} ${provMidY(1)} L ${provX} ${provMidY(1)}`;

  // Flow 2: Code Assistant → gateway internals → Mistral
  const flow2 = `M ${appRight} ${appMidY(2)} L ${gwLeft} ${appMidY(2)} C ${gwLeft + 40} ${appMidY(2)}, ${gwCenterX - 30} ${280}, ${gwCenterX} ${250} C ${gwCenterX + 30} ${220}, ${gwRight - 40} ${provMidY(2)}, ${gwRight} ${provMidY(2)} L ${provX} ${provMidY(2)}`;

  return (
    <figure
      ref={figRef}
      role="img"
      aria-label="Token sourcing architecture: three applications connect through an AI Gateway to three model providers"
      style={{ margin: 0, width: "100%", marginInline: "auto" }}
    >
      <svg
        viewBox="0 0 1200 400"
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

          {/* ── Flow paths for animated dots ────────────────── */}
          <path id="tsFlow0" d={flow0} />
          <path id="tsFlow1" d={flow1} />
          <path id="tsFlow2" d={flow2} />
        </defs>

        {/* ── Static connector lines at 25% opacity ────────── */}
        <g opacity="0.25">
          {/* App → Gateway connectors */}
          {appBoxes.map((app, i) => (
            <line
              key={`conn-l-${i}`}
              x1={appRight}
              y1={app.y + appH / 2}
              x2={gwLeft}
              y2={app.y + appH / 2}
              stroke="var(--color-midnight)"
              strokeWidth="1.5"
            />
          ))}
          {/* Gateway → Provider connectors */}
          {providerBoxes.map((prov, i) => (
            <line
              key={`conn-r-${i}`}
              x1={gwRight}
              y1={prov.y + provH / 2}
              x2={provX}
              y2={prov.y + provH / 2}
              stroke="var(--color-midnight)"
              strokeWidth="1.5"
            />
          ))}
        </g>

        {/* ── Column label: Applications ────────────────────── */}
        <text
          x={appX + appW / 2}
          y="32"
          fontFamily="var(--font-mono)"
          fontSize="10"
          fontWeight="500"
          fill="var(--fg-3)"
          textAnchor="middle"
          letterSpacing="0.06em"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.5s ease-out",
            transitionDelay: "0s",
          }}
        >
          APPLICATIONS
        </text>

        {/* ── Left column: Application boxes (stagger in first) ── */}
        {appBoxes.map((app, i) => (
          <g
            key={app.label}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-30px)",
              transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
              transitionDelay: `${i * 0.12}s`,
            }}
          >
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
              fontSize="14"
              fontWeight="600"
              fill="var(--color-midnight)"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {app.label}
            </text>
          </g>
        ))}

        {/* ── Column label: AI Gateway ──────────────────────── */}
        <text
          x={gwCenterX}
          y="32"
          fontFamily="var(--font-mono)"
          fontSize="10"
          fontWeight="500"
          fill="var(--fg-3)"
          textAnchor="middle"
          letterSpacing="0.06em"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.5s ease-out",
            transitionDelay: "0.4s",
          }}
        >
          AI GATEWAY
        </text>

        {/* ── Centre column: Gateway (appears after apps) ──── */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "scale(1)" : "scale(0.92)",
            transformOrigin: `${gwCenterX}px 200px`,
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            transitionDelay: "0.45s",
          }}
        >
          <rect
            x={gwX}
            y="50"
            width={gwW}
            height="300"
            rx="6"
            stroke="var(--accent)"
            strokeWidth="2"
            fill="rgba(109, 40, 217, 0.04)"
          />

          {/* ── Gateway internal labels ───────────────────────── */}
          {gatewayLabels.map((label, i) => {
            const labelY = 84 + i * 52;
            return (
              <g key={label}>
                <rect
                  x={gwX + 20}
                  y={labelY - 14}
                  width={gwW - 40}
                  height="32"
                  rx="3"
                  stroke="var(--border)"
                  strokeWidth="1"
                  fill="var(--bg-surface)"
                />
                <text
                  x={gwCenterX}
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
        </g>

        {/* ── Column label: Providers ───────────────────────── */}
        <text
          x={provX + provW / 2}
          y="32"
          fontFamily="var(--font-mono)"
          fontSize="10"
          fontWeight="500"
          fill="var(--fg-3)"
          textAnchor="middle"
          letterSpacing="0.06em"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.5s ease-out",
            transitionDelay: "0.7s",
          }}
        >
          PROVIDERS
        </text>

        {/* ── Right column: Provider boxes (stagger in last) ── */}
        {providerBoxes.map((prov, i) => (
          <g
            key={prov.label}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(30px)",
              transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
              transitionDelay: `${0.7 + i * 0.12}s`,
            }}
          >
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
              fontSize="14"
              fontWeight="600"
              fill="var(--color-midnight)"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {prov.label}
            </text>
          </g>
        ))}

        {/* ── SMIL animated dots (only when visible) ──────── */}
        {visible && (
          <g>
            {/* Flow 0: Support Agent → Anthropic */}
            <circle r="4" fill="var(--accent)" opacity="0.85">
              <animateMotion dur="4s" repeatCount="indefinite" begin="0s">
                <mpath xlinkHref="#tsFlow0" />
              </animateMotion>
            </circle>

            {/* Flow 1: Knowledge Base → OpenAI */}
            <circle r="4" fill="var(--accent)" opacity="0.85">
              <animateMotion dur="4s" repeatCount="indefinite" begin="0.4s">
                <mpath xlinkHref="#tsFlow1" />
              </animateMotion>
            </circle>

            {/* Flow 2: Code Assistant → Mistral */}
            <circle r="4" fill="var(--accent)" opacity="0.85">
              <animateMotion dur="4s" repeatCount="indefinite" begin="0.8s">
                <mpath xlinkHref="#tsFlow2" />
              </animateMotion>
            </circle>
          </g>
        )}
      </svg>
    </figure>
  );
}
