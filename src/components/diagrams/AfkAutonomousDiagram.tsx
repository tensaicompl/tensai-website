"use client";

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
 *
 * Animations:
 * - Pentagon nodes appear staggered clockwise via CSS transitions
 * - Gradient bar segments fill left-to-right with CSS opacity transitions
 * - SMIL dot continuously circles the pentagon when visible
 */

import { useEffect, useRef, useState } from "react";

export function AfkAutonomousDiagram() {
  const figureRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const el = figureRef.current;
    if (!el) return;
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

  /* ── Pentagon geometry (scaled to 1200x480 viewBox) ──── */
  const cx = 600;
  const cy = 160;
  const r = 120;

  // Pentagon vertices (clockwise from top centre)
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

  const nodeR = 36;

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

  /* ── Build the full pentagon loop path for SMIL dot ──── */
  function buildLoopPath(): string {
    const segments: string[] = [];
    for (let i = 0; i < 5; i++) {
      const next = (i + 1) % 5;
      const e = edgePath(pts[i], pts[next]);
      if (i === 0) {
        segments.push(`M ${e.x1} ${e.y1}`);
      } else {
        segments.push(`L ${e.x1} ${e.y1}`);
      }
      segments.push(`L ${e.x2} ${e.y2}`);
    }
    // Close back to start
    const e0 = edgePath(pts[0], pts[1]);
    segments.push(`L ${e0.x1} ${e0.y1}`);
    return segments.join(" ");
  }

  const loopPathD = buildLoopPath();

  /* ── Autonomy gradient bar ───────────────────────────── */
  const barY = 350;
  const barH = 54;
  const barX = 160;
  const barW = 880;
  const segW = barW / 3;

  const segments = [
    {
      label: "HITL",
      opacity: 0.05,
      annotation: "Human approves every action",
    },
    {
      label: "On-rails",
      opacity: 0.15,
      annotation: "Agent acts within pre-approved bounds",
    },
    {
      label: "AFK",
      opacity: 0.30,
      annotation: "Agent acts alone — kill switch is live",
    },
  ];

  /* ── Dashed drop lines from Decide to each segment centre ── */
  const decideNode = pts[4];
  const dropTargets = segments.map((_, i) => barX + segW * i + segW / 2);

  /* ── Stagger delays ──────────────────────────────────── */
  const nodeDelay = (i: number) => `${i * 120}ms`;
  const segDelay = (i: number) => `${600 + i * 200}ms`;

  const skipAnimation = reducedMotion;
  const showNodes = skipAnimation || visible;
  const showBar = skipAnimation || visible;

  return (
    <figure
      ref={figureRef}
      role="img"
      aria-label="The Ralph Loop: a five-step autonomous agent cycle with Plan, Act, Observe, Reflect, and Decide nodes, plus an autonomy gradient from HITL to AFK"
      style={{ margin: 0, width: "100%", marginInline: "auto" }}
    >
      <svg
        viewBox="0 0 1200 480"
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
          fontSize="14"
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
              style={{
                opacity: showNodes ? 1 : 0,
                transition: skipAnimation
                  ? "none"
                  : `opacity 400ms ease ${nodeDelay(i)}`,
              }}
            />
          );
        })}

        {/* Node circles + labels (staggered clockwise entrance) */}
        {nodes.map((node, i) => {
          const p = pts[i];
          const isAccent = node.accent;
          return (
            <g
              key={node.label}
              style={{
                opacity: showNodes ? 1 : 0,
                transform: showNodes ? "scale(1)" : "scale(0.7)",
                transformOrigin: `${p.x}px ${p.y}px`,
                transition: skipAnimation
                  ? "none"
                  : `opacity 400ms ease ${nodeDelay(i)}, transform 400ms ease ${nodeDelay(i)}`,
              }}
            >
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

        {/* ── SMIL dot circling the pentagon ────────────── */}
        <path id="ralphLoopPath" d={loopPathD} fill="none" stroke="none" />
        {visible && !reducedMotion && (
          <circle r="5" fill="var(--accent)" opacity="0.85">
            <animateMotion
              dur="4s"
              repeatCount="indefinite"
              rotate="auto"
            >
              <mpath href="#ralphLoopPath" />
            </animateMotion>
          </circle>
        )}

        {/* Exit arrow from Decide downward, labeled "terminate" */}
        <line
          x1={decideNode.x}
          y1={decideNode.y + nodeR + 2}
          x2={decideNode.x}
          y2={barY - 50}
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          markerEnd="url(#afkArrow)"
          style={{
            opacity: showNodes ? 1 : 0,
            transition: skipAnimation
              ? "none"
              : `opacity 400ms ease ${nodeDelay(4)}`,
          }}
        />
        <text
          x={decideNode.x + 8}
          y={(decideNode.y + nodeR + barY - 50) / 2}
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--fg-2)"
          letterSpacing="0.04em"
          style={{
            opacity: showNodes ? 1 : 0,
            transition: skipAnimation
              ? "none"
              : `opacity 400ms ease ${nodeDelay(4)}`,
          }}
        >
          terminate
        </text>

        {/* ── Dashed lines from Decide to segment centres ── */}
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
            style={{
              opacity: showBar ? 0.4 : 0,
              transition: skipAnimation
                ? "none"
                : `opacity 400ms ease ${segDelay(i)}`,
            }}
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
              style={{
                opacity: showBar ? 1 : 0,
                transition: skipAnimation
                  ? "none"
                  : `opacity 400ms ease ${segDelay(i)}`,
              }}
            >
              {seg.label}
            </text>
          );
        })}

        {/* Bar segments — opacity animated left-to-right */}
        {segments.map((seg, i) => {
          const sx = barX + segW * i;
          return (
            <rect
              key={`seg-${i}`}
              x={sx}
              y={barY}
              width={segW}
              height={barH}
              fill="rgb(15, 23, 42)"
              stroke="var(--color-midnight)"
              strokeWidth="1"
              style={{
                opacity: showBar ? seg.opacity : 0,
                transition: skipAnimation
                  ? "none"
                  : `opacity 600ms ease ${segDelay(i)}`,
              }}
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
              y={barY + barH + 18}
              fontFamily="var(--font-mono)"
              fontSize="10"
              fill="var(--fg-3)"
              textAnchor="middle"
              letterSpacing="0.02em"
              style={{
                opacity: showBar ? 1 : 0,
                transition: skipAnimation
                  ? "none"
                  : `opacity 400ms ease ${segDelay(i)}`,
              }}
            >
              {seg.annotation}
            </text>
          );
        })}

        {/* Horizontal arrow below annotations */}
        <line
          x1={barX}
          y1={barY + barH + 40}
          x2={barX + barW - 6}
          y2={barY + barH + 40}
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          markerEnd="url(#afkArrow)"
          style={{
            opacity: showBar ? 1 : 0,
            transition: skipAnimation
              ? "none"
              : `opacity 400ms ease ${segDelay(2)}`,
          }}
        />
        <text
          x={cx}
          y={barY + barH + 56}
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--fg-2)"
          textAnchor="middle"
          letterSpacing="0.04em"
          style={{
            opacity: showBar ? 1 : 0,
            transition: skipAnimation
              ? "none"
              : `opacity 400ms ease ${segDelay(2)}`,
          }}
        >
          increasing autonomy &mdash; earned, not configured
        </text>
      </svg>
    </figure>
  );
}
