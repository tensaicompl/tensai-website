"use client";

/**
 * AfkAutonomousDiagram — The Ralph Loop + Autonomy Gradient
 *
 * Zone 1 (upper): Five-node clockwise loop (regular pentagon)
 * Plan -> Act -> Observe -> Reflect -> Decide -> Plan
 * All 5 nodes equally spaced on a circle at angles
 * [162, 234, 306, 18, 90] degrees (Decide at bottom, Plan/Reflect at sides).
 *
 * Zone 2 (lower): Horizontal autonomy gradient bar
 * HITL | On-rails | AFK with increasing opacity fills.
 * Segment labels rendered INSIDE their boxes.
 *
 * Edges are plain lines at 25% opacity (static rails) with SMIL animated
 * dots flowing along each edge to convey direction. No arrowhead markers.
 *
 * Dashed drop lines from Decide to each autonomy bar segment.
 * Single accent: var(--accent) on the Decide node border only.
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

  /* ── Pentagon geometry ───────────────────────────────── */
  const cx = 600;
  const cy = 200;
  const r = 120;

  /* Regular pentagon: all 5 nodes equally spaced */
  const angles = [162, 234, 306, 18, 90];
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

  /* ── Edge helper (circle border to circle border) ────── */
  function edgePath(from: { x: number; y: number }, to: { x: number; y: number }) {
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const ux = dx / dist;
    const uy = dy / dist;
    return {
      x1: from.x + ux * (nodeR + 2),
      y1: from.y + uy * (nodeR + 2),
      x2: to.x - ux * (nodeR + 2),
      y2: to.y - uy * (nodeR + 2),
    };
  }

  /* ── Build per-edge motion paths for SMIL dots ───────── */
  const edges = [0, 1, 2, 3, 4].map((i) => {
    const next = (i + 1) % 5;
    const e = edgePath(pts[i], pts[next]);
    return {
      id: `afkEdge${i}`,
      d: `M ${e.x1} ${e.y1} L ${e.x2} ${e.y2}`,
      ...e,
    };
  });

  /* ── SMIL dot stagger (5 dots, 0.4s apart, 2s duration) ─ */
  const dotBegin = (i: number) => `${i * 0.4}s`;

  /* ── Autonomy gradient bar ───────────────────────────── */
  const barY = 420;
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

  /* ── Dashed drop lines from Decide to each segment top-centre ── */
  const decideNode = pts[4]; // Decide at angle 90 (bottom)
  const dropTargets = segments.map((_, i) => ({
    x: barX + segW * i + segW / 2,
    y: barY,
  }));

  /* ── Terminate exit arrow from Decide ──────────────── */
  const terminateArrowLen = 44;
  // Point outward from pentagon centre (away from cx, cy)
  const decideAngleRad = rad(0);
  const exitDx = Math.cos(decideAngleRad);
  const exitDy = Math.sin(decideAngleRad);
  const exitStart = {
    x: decideNode.x + exitDx * (nodeR + 3),
    y: decideNode.y + exitDy * (nodeR + 3),
  };
  const exitEnd = {
    x: exitStart.x + exitDx * terminateArrowLen,
    y: exitStart.y + exitDy * terminateArrowLen,
  };

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
        viewBox="0 -24 1200 580"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        {/* ── Motion path definitions (no arrow markers) ─── */}
        <defs>
          {/* Small arrowhead only for the autonomy arrow and terminate */}
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

          {/* Invisible motion paths for per-edge SMIL dots */}
          {edges.map((edge) => (
            <path key={edge.id} id={edge.id} d={edge.d} />
          ))}
        </defs>

        {/* ── Zone 1: The Ralph Loop ─────────────────────── */}

        {/* Zone title */}
        <text
          x={cx}
          y={-6}
          fontFamily="var(--font-display)"
          fontSize="14"
          fontWeight="600"
          fill="var(--color-midnight)"
          textAnchor="middle"
          letterSpacing="0.02em"
        >
          The Ralph Loop
        </text>

        {/* Static edge rails — plain lines at 25% opacity, no arrows */}
        {edges.map((edge, i) => (
          <line
            key={`rail-${i}`}
            x1={edge.x1}
            y1={edge.y1}
            x2={edge.x2}
            y2={edge.y2}
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            style={{
              opacity: showNodes ? 0.25 : 0,
              transition: skipAnimation
                ? "none"
                : `opacity 400ms ease ${nodeDelay(i)}`,
            }}
          />
        ))}

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

        {/* ── Per-edge SMIL animated dots (2s, staggered 0.4s) ── */}
        {visible && !reducedMotion && edges.map((edge, i) => (
          <circle
            key={`dot-${i}`}
            r="5"
            fill="var(--accent)"
            opacity="0.85"
          >
            <animateMotion
              dur="2s"
              repeatCount="indefinite"
              keyPoints="0;1"
              keyTimes="0;1"
              calcMode="linear"
              begin={dotBegin(i)}
            >
              <mpath href={`#${edge.id}`} />
            </animateMotion>
          </circle>
        ))}

        {/* ── Terminate exit arrow from Decide ────────────── */}
        <line
          x1={exitStart.x}
          y1={exitStart.y}
          x2={exitEnd.x}
          y2={exitEnd.y}
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          markerEnd="url(#afkArrowSmall)"
          style={{
            opacity: showNodes ? 0.7 : 0,
            transition: skipAnimation
              ? "none"
              : `opacity 400ms ease ${nodeDelay(4)}`,
          }}
        />
        <text
          x={exitEnd.x + 6}
          y={exitEnd.y - 4}
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--fg-2)"
          letterSpacing="0.04em"
          textAnchor="start"
          style={{
            opacity: showNodes ? 1 : 0,
            transition: skipAnimation
              ? "none"
              : `opacity 400ms ease ${nodeDelay(4)}`,
          }}
        >
          terminate
        </text>

        {/* ── Dashed drop lines from Decide to segment tops ── */}
        {dropTargets.map((target, i) => (
          <line
            key={`drop-${i}`}
            x1={decideNode.x}
            y1={decideNode.y + nodeR + 2}
            x2={target.x}
            y2={target.y}
            stroke="var(--color-midnight)"
            strokeWidth="1"
            strokeDasharray="5 4"
            style={{
              opacity: showBar ? 0.4 : 0,
              transition: skipAnimation
                ? "none"
                : `opacity 400ms ease ${segDelay(i)}`,
            }}
          />
        ))}

        {/* ── Zone 2: Autonomy Gradient ──────────────────── */}

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

        {/* Segment labels INSIDE bar boxes */}
        {segments.map((seg, i) => {
          const sx = barX + segW * i;
          return (
            <text
              key={`lbl-${i}`}
              x={sx + segW / 2}
              y={barY + barH / 2}
              fontFamily="var(--font-display)"
              fontSize="14"
              fontWeight="700"
              fill="var(--color-midnight)"
              textAnchor="middle"
              dominantBaseline="middle"
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

        {/* Horizontal "increasing autonomy" arrow below annotations */}
        <line
          x1={barX}
          y1={barY + barH + 40}
          x2={barX + barW - 6}
          y2={barY + barH + 40}
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          markerEnd="url(#afkArrowSmall)"
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
