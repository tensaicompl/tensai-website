/**
 * SecurityArchDiagram — Defence-in-Depth Security Architecture
 *
 * Three concentric rectangles with left-to-right request flow:
 * Gateway (outermost) -> Citadel Isolation (middle) -> Output Validation (innermost).
 *
 * Single accent: var(--accent) on the innermost layer border only.
 * Everything else on the midnight/border/muted scale.
 *
 * Animated: IntersectionObserver entrance (outside-in stagger),
 * static 25% flow line, SMIL dot traversing all three layers.
 */

"use client";

import { useEffect, useRef, useState } from "react";

export function SecurityArchDiagram() {
  const figRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = figRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
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

  /* -- Layout constants (scaled to 1200x400) --------------- */

  // Outer layer (Gateway)
  const outerX = 60;
  const outerY = 30;
  const outerW = 1080;
  const outerH = 340;

  // Middle layer (Citadel Isolation)
  const midX = 220;
  const midY = 70;
  const midW = 760;
  const midH = 260;

  // Inner layer (Output Validation)
  const innerX = 680;
  const innerY = 120;
  const innerW = 270;
  const innerH = 170;

  // Request flow Y centre
  const flowY = 200;

  // Gateway sub-boxes
  const gateBoxW = 140;
  const gateBoxH = 44;
  const gateBox1X = 85;
  const gateBox1Y = flowY - gateBoxH / 2 - 32;
  const gateBox2X = 85;
  const gateBox2Y = flowY - gateBoxH / 2 + 32;

  // Citadel sub-boxes
  const citadelBoxW = 150;
  const citadelBoxH = 40;
  const citadelStartX = 260;
  const citadelBoxGap = 14;
  const citadelBox1Y = midY + 50;
  const citadelBox2Y = citadelBox1Y + citadelBoxH + citadelBoxGap;
  const citadelBox3Y = citadelBox2Y + citadelBoxH + citadelBoxGap;

  // Output Validation sub-boxes
  const outBoxW = 160;
  const outBoxH = 40;
  const outBox1X = innerX + 55;
  const outBox1Y = innerY + 30;
  const outBox2X = innerX + 55;
  const outBox2Y = outBox1Y + outBoxH + 14;

  /* -- Request flow path (continuous L-to-R through all 3 layers) -- */
  const flowPath = [
    `M 12 ${flowY}`,
    `L ${outerX} ${flowY}`,
    `L ${gateBox1X + gateBoxW} ${flowY}`,
    `L ${midX} ${flowY}`,
    `L ${citadelStartX + citadelBoxW + 14} ${flowY}`,
    `L ${innerX} ${flowY}`,
    `L ${innerX + innerW} ${flowY}`,
    `L ${outerX + outerW + 6} ${flowY}`,
    `L 1188 ${flowY}`,
  ].join(" ");

  return (
    <figure
      ref={figRef}
      role="img"
      aria-label="Defence-in-depth security architecture: request flows through gateway, citadel isolation, and output validation layers"
      style={{ margin: 0, width: "100%", marginInline: "auto" }}
    >
      {/* Entrance transition styles */}
      <style>{`
        .sa-enter {
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .sa-enter.sa-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .sa-d1 { transition-delay: 0s; }
        .sa-d2 { transition-delay: 0.15s; }
        .sa-d3 { transition-delay: 0.30s; }
        .sa-d4 { transition-delay: 0.45s; }
        .sa-d5 { transition-delay: 0.55s; }
      `}</style>

      <svg
        viewBox="0 0 1200 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        {/* -- Definitions ---------------------------------------- */}
        <defs>
          <marker
            id="saArrow"
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
            id="saArrowAccent"
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
              stroke="var(--accent)"
              strokeWidth="1.5"
            />
          </marker>

          {/* Full request flow motion path */}
          <path id="saFlowPath" d={flowPath} />
        </defs>

        {/* -- Layer 1 (entrance first): GATEWAY (outermost) ------ */}
        <g className={`sa-enter sa-d1 ${visible ? "sa-visible" : ""}`}>
          <rect
            x={outerX}
            y={outerY}
            width={outerW}
            height={outerH}
            rx="4"
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            fill="var(--bg-surface)"
          />
          <text
            x={outerX + 14}
            y={outerY + 20}
            fontFamily="var(--font-mono)"
            fontSize="10"
            fill="var(--fg-2)"
            letterSpacing="0.12em"
            fontWeight="600"
          >
            GATEWAY
          </text>

          {/* Gateway sub-box: Input Scan */}
          <rect
            x={gateBox1X}
            y={gateBox1Y}
            width={gateBoxW}
            height={gateBoxH}
            rx="3"
            stroke="var(--color-midnight)"
            strokeWidth="1"
            fill="var(--bg-surface)"
          />
          <text
            x={gateBox1X + gateBoxW / 2}
            y={gateBox1Y + gateBoxH / 2}
            fontFamily="var(--font-mono)"
            fontSize="11"
            fill="var(--color-midnight)"
            textAnchor="middle"
            dominantBaseline="middle"
            letterSpacing="0.02em"
          >
            Input Scan
          </text>

          {/* Gateway sub-box: Rate Limit */}
          <rect
            x={gateBox2X}
            y={gateBox2Y}
            width={gateBoxW}
            height={gateBoxH}
            rx="3"
            stroke="var(--color-midnight)"
            strokeWidth="1"
            fill="var(--bg-surface)"
          />
          <text
            x={gateBox2X + gateBoxW / 2}
            y={gateBox2Y + gateBoxH / 2}
            fontFamily="var(--font-mono)"
            fontSize="11"
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

          {/* Dashed connectors to layer edges */}
          <line
            x1={gateBox1X + gateBoxW / 2}
            y1={gateBox1Y}
            x2={gateBox1X + gateBoxW / 2}
            y2={outerY + 28}
            stroke="var(--border)"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
          <line
            x1={gateBox2X + gateBoxW / 2}
            y1={gateBox2Y + gateBoxH}
            x2={gateBox2X + gateBoxW / 2}
            y2={outerY + outerH - 14}
            stroke="var(--border)"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
        </g>

        {/* -- Layer 2 (entrance second): CITADEL ISOLATION ------- */}
        <g className={`sa-enter sa-d2 ${visible ? "sa-visible" : ""}`}>
          <rect
            x={midX}
            y={midY}
            width={midW}
            height={midH}
            rx="4"
            stroke="var(--border)"
            strokeWidth="1.5"
            fill="var(--bg-surface)"
          />
          <text
            x={midX + 14}
            y={midY + 20}
            fontFamily="var(--font-mono)"
            fontSize="10"
            fill="var(--fg-2)"
            letterSpacing="0.12em"
            fontWeight="600"
          >
            CITADEL ISOLATION
          </text>

          {/* Citadel sub-box: Filesystem */}
          <rect
            x={citadelStartX}
            y={citadelBox1Y}
            width={citadelBoxW}
            height={citadelBoxH}
            rx="3"
            stroke="var(--color-midnight)"
            strokeWidth="1"
            fill="var(--bg-surface)"
          />
          <text
            x={citadelStartX + citadelBoxW / 2}
            y={citadelBox1Y + citadelBoxH / 2 - 7}
            fontFamily="var(--font-mono)"
            fontSize="11"
            fill="var(--color-midnight)"
            textAnchor="middle"
            dominantBaseline="middle"
            letterSpacing="0.02em"
          >
            Filesystem
          </text>
          <text
            x={citadelStartX + citadelBoxW / 2}
            y={citadelBox1Y + citadelBoxH / 2 + 9}
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
            x={citadelStartX}
            y={citadelBox2Y}
            width={citadelBoxW}
            height={citadelBoxH}
            rx="3"
            stroke="var(--color-midnight)"
            strokeWidth="1"
            fill="var(--bg-surface)"
          />
          <text
            x={citadelStartX + citadelBoxW / 2}
            y={citadelBox2Y + citadelBoxH / 2 - 7}
            fontFamily="var(--font-mono)"
            fontSize="11"
            fill="var(--color-midnight)"
            textAnchor="middle"
            dominantBaseline="middle"
            letterSpacing="0.02em"
          >
            Network
          </text>
          <text
            x={citadelStartX + citadelBoxW / 2}
            y={citadelBox2Y + citadelBoxH / 2 + 9}
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
            x={citadelStartX}
            y={citadelBox3Y}
            width={citadelBoxW}
            height={citadelBoxH}
            rx="3"
            stroke="var(--color-midnight)"
            strokeWidth="1"
            fill="var(--bg-surface)"
          />
          <text
            x={citadelStartX + citadelBoxW / 2}
            y={citadelBox3Y + citadelBoxH / 2 - 7}
            fontFamily="var(--font-mono)"
            fontSize="11"
            fill="var(--color-midnight)"
            textAnchor="middle"
            dominantBaseline="middle"
            letterSpacing="0.02em"
          >
            Capabilities
          </text>
          <text
            x={citadelStartX + citadelBoxW / 2}
            y={citadelBox3Y + citadelBoxH / 2 + 9}
            fontFamily="var(--font-mono)"
            fontSize="8"
            fill="var(--fg-3)"
            textAnchor="middle"
            dominantBaseline="middle"
            letterSpacing="0.02em"
          >
            explicit tool grants
          </text>
        </g>

        {/* -- Layer 3 (entrance third): OUTPUT VALIDATION (accent) */}
        <g className={`sa-enter sa-d3 ${visible ? "sa-visible" : ""}`}>
          <rect
            x={innerX}
            y={innerY}
            width={innerW}
            height={innerH}
            rx="4"
            stroke="var(--accent)"
            strokeWidth="1.5"
            fill="var(--bg-surface)"
          />
          <text
            x={innerX + 14}
            y={innerY + 20}
            fontFamily="var(--font-mono)"
            fontSize="10"
            fill="var(--accent)"
            letterSpacing="0.12em"
            fontWeight="600"
          >
            OUTPUT VALIDATION
          </text>

          {/* Output sub-box: Schema check */}
          <rect
            x={outBox1X}
            y={outBox1Y}
            width={outBoxW}
            height={outBoxH}
            rx="3"
            stroke="var(--color-midnight)"
            strokeWidth="1"
            fill="var(--bg-surface)"
          />
          <text
            x={outBox1X + outBoxW / 2}
            y={outBox1Y + outBoxH / 2}
            fontFamily="var(--font-mono)"
            fontSize="11"
            fill="var(--color-midnight)"
            textAnchor="middle"
            dominantBaseline="middle"
            letterSpacing="0.02em"
          >
            Schema check
          </text>

          {/* Output sub-box: Content filter */}
          <rect
            x={outBox2X}
            y={outBox2Y}
            width={outBoxW}
            height={outBoxH}
            rx="3"
            stroke="var(--color-midnight)"
            strokeWidth="1"
            fill="var(--bg-surface)"
          />
          <text
            x={outBox2X + outBoxW / 2}
            y={outBox2Y + outBoxH / 2}
            fontFamily="var(--font-mono)"
            fontSize="11"
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
        </g>

        {/* -- Static flow line at 25% opacity -------------------- */}
        <g className={`sa-enter sa-d4 ${visible ? "sa-visible" : ""}`}>
          <path
            d={flowPath}
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.25"
            markerEnd="url(#saArrow)"
          />

          {/* Entry label */}
          <text
            x={12}
            y={flowY - 12}
            fontFamily="var(--font-mono)"
            fontSize="9"
            fill="var(--fg-3)"
            letterSpacing="0.04em"
          >
            request
          </text>

          {/* Exit label */}
          <text
            x={1188}
            y={flowY - 12}
            fontFamily="var(--font-mono)"
            fontSize="9"
            fill="var(--fg-3)"
            textAnchor="end"
            letterSpacing="0.04em"
          >
            response
          </text>
        </g>

        {/* -- Animated flowing dot (rendered only when visible) --- */}
        {visible && (
          <g className={`sa-enter sa-d5 ${visible ? "sa-visible" : ""}`}>
            <circle r="4.5" fill="var(--color-midnight)" opacity="0.8">
              <animateMotion
                dur="4s"
                repeatCount="indefinite"
                keyPoints="0;1"
                keyTimes="0;1"
                calcMode="linear"
              >
                <mpath href="#saFlowPath" />
              </animateMotion>
            </circle>
          </g>
        )}
      </svg>
    </figure>
  );
}
