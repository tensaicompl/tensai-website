/**
 * EvalsObservabilityDiagram — Evals, Observability & Issue Lifecycle
 *
 * Three vertical zones:
 * 1. Top — Three concentric eval surfaces (unit -> task -> system) with
 *    an agent dot at the centre.
 * 2. Middle — Trace tree: root span branches to child spans, each with
 *    gen_ai.chat and tool_call leaves. One leaf highlighted with accent.
 * 3. Bottom — Issue lifecycle ratchet: five nodes in a clockwise circle
 *    connected by arrows, with "new eval case" feeding back up.
 *
 * Animated:
 *   - Entrance: concentric rings expand outward staggered, then trace tree,
 *     then lifecycle nodes
 *   - Failure signal arrow: dot flows downward from outer ring to trace tree
 *   - Lifecycle ratchet: dot continuously circles clockwise through the 5 nodes
 *   - Feedback arrow: dot flows upward from harness improvement to eval ring
 *
 * Single accent: var(--accent) on the highlighted trace span only.
 */

"use client";

import { useEffect, useRef, useState } from "react";

export function EvalsObservabilityDiagram() {
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

  /* ── Lifecycle ring geometry ─────────────────────────── */
  const cx = 600;
  const cy = 430;
  const rx = 260;
  const ry = 58;

  const nodes = [
    { label: "Detection", angle: -90 },
    { label: "Triage", angle: -18 },
    { label: "Root-cause", angle: 54 },
    { label: "Harness impr.", angle: 126 },
    { label: "Verification", angle: 198 },
  ];

  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const pos = (angle: number) => ({
    x: cx + rx * Math.cos(toRad(angle)),
    y: cy + ry * Math.sin(toRad(angle)),
  });

  const nodeW = 110;
  const nodeH = 26;

  /* Build the SMIL motion path for the lifecycle ratchet.
     We trace through all 5 node positions clockwise and close the loop. */
  const lifecyclePoints = nodes.map((n) => pos(n.angle));
  const lifecyclePath =
    `M ${lifecyclePoints[0].x} ${lifecyclePoints[0].y}` +
    lifecyclePoints
      .slice(1)
      .map((p) => ` L ${p.x} ${p.y}`)
      .join("") +
    ` L ${lifecyclePoints[0].x} ${lifecyclePoints[0].y}`;

  /* Feedback arrow: from "Harness impr." node upward to the innermost eval ring */
  const harnessPos = pos(nodes[3].angle);
  const feedbackStartX = harnessPos.x;
  const feedbackStartY = harnessPos.y - nodeH / 2 - 2;
  const feedbackEndX = 480;
  const feedbackEndY = 148;
  const feedbackPath = `M ${feedbackStartX} ${feedbackStartY} C ${feedbackStartX - 40} ${(feedbackStartY + feedbackEndY) / 2}, ${feedbackEndX - 20} ${(feedbackStartY + feedbackEndY) / 2 - 40}, ${feedbackEndX} ${feedbackEndY}`;

  return (
    <figure
      ref={figRef}
      role="img"
      aria-label="Evals and observability: three eval surfaces, a trace tree with spans, and an issue lifecycle ratchet feeding new eval cases back to the innermost ring"
      style={{ margin: 0, width: "100%", marginInline: "auto" }}
    >
      {/* Entrance transition styles */}
      <style>{`
        .eo-enter {
          opacity: 0;
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        /* Concentric rings expand outward from centre */
        .eo-ring {
          transform: scale(0.85);
          transform-origin: 600px 100px;
        }
        .eo-enter.eo-visible {
          opacity: 1;
        }
        .eo-ring.eo-visible {
          transform: scale(1);
        }
        /* Trace tree slides in from left */
        .eo-trace {
          transform: translateX(-16px);
        }
        .eo-trace.eo-visible {
          transform: translateX(0);
        }
        /* Lifecycle slides up */
        .eo-life {
          transform: translateY(14px);
        }
        .eo-life.eo-visible {
          transform: translateY(0);
        }
        /* Stagger delays — rings first (inside-out), then trace, then lifecycle */
        .eo-d1 { transition-delay: 0s; }
        .eo-d2 { transition-delay: 0.12s; }
        .eo-d3 { transition-delay: 0.24s; }
        .eo-d4 { transition-delay: 0.40s; }
        .eo-d5 { transition-delay: 0.52s; }
        .eo-d6 { transition-delay: 0.64s; }
        .eo-d7 { transition-delay: 0.76s; }
        .eo-d8 { transition-delay: 0.88s; }
        .eo-d9 { transition-delay: 1.00s; }
      `}</style>

      <svg
        viewBox="0 0 1200 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        {/* ── Marker definitions ──────────────────────────────── */}
        <defs>
          <marker
            id="eoArrow"
            viewBox="0 0 10 10"
            refX="10"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9" fill="none" stroke="var(--color-midnight)" strokeWidth="1.5" />
          </marker>
          <marker
            id="eoArrowMuted"
            viewBox="0 0 10 10"
            refX="10"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9" fill="none" stroke="var(--fg-3)" strokeWidth="1.5" />
          </marker>
          <marker
            id="eoArrowBorder"
            viewBox="0 0 10 10"
            refX="10"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9" fill="none" stroke="var(--border)" strokeWidth="1.5" />
          </marker>

          {/* ── SMIL motion paths ───────────────────────────── */}

          {/* Failure signal: from bottom of outer ring down to trace tree */}
          <path id="eoFlowFailure" d="M 600 168 L 600 210" />

          {/* Lifecycle ratchet: clockwise through all 5 nodes */}
          <path id="eoFlowLifecycle" d={lifecyclePath} />

          {/* Feedback: harness improvement upward to eval ring */}
          <path id="eoFlowFeedback" d={feedbackPath} />
        </defs>

        {/* ════════════════════════════════════════════════════════
            TOP ZONE — Three concentric eval surfaces
            Entrance: inside-out (unit first, then task, then system)
            ════════════════════════════════════════════════════════ */}

        {/* Innermost ring — Unit evals (appears first) */}
        <g className={`eo-enter eo-ring eo-d1 ${visible ? "eo-visible" : ""}`}>
          <rect
            x="430" y="62" width="340" height="76" rx="4"
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            fill="var(--bg-surface)"
          />
          <text
            x="450" y="80"
            fontFamily="var(--font-mono)"
            fontSize="9"
            fill="var(--fg-3)"
            letterSpacing="0.06em"
          >
            Unit evals — single turn — ms
          </text>
        </g>

        {/* Middle ring — Task evals */}
        <g className={`eo-enter eo-ring eo-d2 ${visible ? "eo-visible" : ""}`}>
          <rect
            x="370" y="38" width="460" height="124" rx="4"
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            fill="none"
          />
          <text
            x="390" y="56"
            fontFamily="var(--font-mono)"
            fontSize="9"
            fill="var(--fg-3)"
            letterSpacing="0.06em"
          >
            Task evals — full trajectory — seconds
          </text>
        </g>

        {/* Outermost ring — System evals */}
        <g className={`eo-enter eo-ring eo-d3 ${visible ? "eo-visible" : ""}`}>
          <rect
            x="300" y="12" width="600" height="156" rx="4"
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            fill="none"
          />
          <text
            x="320" y="30"
            fontFamily="var(--font-mono)"
            fontSize="9"
            fill="var(--fg-3)"
            letterSpacing="0.06em"
          >
            System evals — N runs — minutes
          </text>
        </g>

        {/* Agent dot at centre */}
        <g className={`eo-enter eo-ring eo-d1 ${visible ? "eo-visible" : ""}`}>
          <circle
            cx="600" cy="105"
            r="6"
            fill="var(--color-midnight)"
          />
          <text
            x="616" y="109"
            fontFamily="var(--font-mono)"
            fontSize="9"
            fill="var(--fg-2)"
            letterSpacing="0.04em"
          >
            agent
          </text>
        </g>

        {/* ── Downward arrow: failure signal ──────────────────── */}
        <g className={`eo-enter eo-ring eo-d4 ${visible ? "eo-visible" : ""}`}>
          <line
            x1="600" y1="168" x2="600" y2="206"
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            markerEnd="url(#eoArrow)"
          />
          <text
            x="616" y="194"
            fontFamily="var(--font-mono)"
            fontSize="9"
            fill="var(--fg-3)"
            letterSpacing="0.04em"
          >
            failure signal
          </text>
        </g>

        {/* ════════════════════════════════════════════════════════
            MIDDLE ZONE — Trace tree
            ════════════════════════════════════════════════════════ */}

        <g className={`eo-enter eo-trace eo-d5 ${visible ? "eo-visible" : ""}`}>
          {/* Root span */}
          <rect
            x="100" y="218" width="120" height="30" rx="4"
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            fill="var(--bg-surface)"
          />
          <text
            x="160" y="237"
            fontFamily="var(--font-mono)"
            fontSize="10"
            fill="var(--color-midnight)"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            agent.task
          </text>

          {/* Branch lines from root to children */}
          <line
            x1="220" y1="233" x2="260" y2="233"
            stroke="var(--color-midnight)"
            strokeWidth="1"
          />
          <line
            x1="260" y1="215" x2="260" y2="283"
            stroke="var(--color-midnight)"
            strokeWidth="1"
          />
        </g>

        {/* ── Child span: step.1 ──────────────────────────────── */}
        <g className={`eo-enter eo-trace eo-d6 ${visible ? "eo-visible" : ""}`}>
          <line x1="260" y1="215" x2="290" y2="215" stroke="var(--color-midnight)" strokeWidth="1" />
          <rect
            x="290" y="201" width="80" height="28" rx="4"
            stroke="var(--border)"
            strokeWidth="1"
            fill="var(--bg-surface)"
          />
          <text
            x="330" y="219"
            fontFamily="var(--font-mono)"
            fontSize="9"
            fill="var(--color-midnight)"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            step.1
          </text>

          {/* step.1 leaves */}
          <line x1="370" y1="209" x2="390" y2="209" stroke="var(--border)" strokeWidth="1" />
          <line x1="390" y1="201" x2="390" y2="217" stroke="var(--border)" strokeWidth="1" />

          <line x1="390" y1="201" x2="408" y2="201" stroke="var(--border)" strokeWidth="1" />
          <rect
            x="408" y="191" width="90" height="20" rx="4"
            stroke="var(--border)"
            strokeWidth="1"
            fill="var(--bg-surface)"
          />
          <text
            x="453" y="205"
            fontFamily="var(--font-mono)"
            fontSize="8"
            fill="var(--fg-2)"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            gen_ai.chat
          </text>

          <line x1="390" y1="217" x2="408" y2="217" stroke="var(--border)" strokeWidth="1" />
          <rect
            x="408" y="207" width="90" height="20" rx="4"
            stroke="var(--border)"
            strokeWidth="1"
            fill="var(--bg-surface)"
          />
          <text
            x="453" y="221"
            fontFamily="var(--font-mono)"
            fontSize="8"
            fill="var(--fg-2)"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            tool_call
          </text>
        </g>

        {/* ── Child span: step.2 ──────────────────────────────── */}
        <g className={`eo-enter eo-trace eo-d7 ${visible ? "eo-visible" : ""}`}>
          <line x1="260" y1="249" x2="290" y2="249" stroke="var(--color-midnight)" strokeWidth="1" />
          <rect
            x="290" y="235" width="80" height="28" rx="4"
            stroke="var(--border)"
            strokeWidth="1"
            fill="var(--bg-surface)"
          />
          <text
            x="330" y="253"
            fontFamily="var(--font-mono)"
            fontSize="9"
            fill="var(--color-midnight)"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            step.2
          </text>

          {/* step.2 leaves */}
          <line x1="370" y1="243" x2="390" y2="243" stroke="var(--border)" strokeWidth="1" />
          <line x1="390" y1="235" x2="390" y2="251" stroke="var(--border)" strokeWidth="1" />

          <line x1="390" y1="235" x2="408" y2="235" stroke="var(--border)" strokeWidth="1" />
          <rect
            x="408" y="225" width="90" height="20" rx="4"
            stroke="var(--border)"
            strokeWidth="1"
            fill="var(--bg-surface)"
          />
          <text
            x="453" y="239"
            fontFamily="var(--font-mono)"
            fontSize="8"
            fill="var(--fg-2)"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            gen_ai.chat
          </text>

          {/* HIGHLIGHTED leaf -- accent fill */}
          <line x1="390" y1="251" x2="408" y2="251" stroke="var(--border)" strokeWidth="1" />
          <rect
            x="408" y="241" width="90" height="20" rx="4"
            stroke="var(--accent)"
            strokeWidth="1.5"
            fill="var(--accent)"
            fillOpacity="0.12"
          />
          <text
            x="453" y="255"
            fontFamily="var(--font-mono)"
            fontSize="8"
            fill="var(--accent)"
            fontWeight="600"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            tool_call
          </text>
        </g>

        {/* ── Child span: step.3 ──────────────────────────────── */}
        <g className={`eo-enter eo-trace eo-d8 ${visible ? "eo-visible" : ""}`}>
          <line x1="260" y1="283" x2="290" y2="283" stroke="var(--color-midnight)" strokeWidth="1" />
          <rect
            x="290" y="269" width="80" height="28" rx="4"
            stroke="var(--border)"
            strokeWidth="1"
            fill="var(--bg-surface)"
          />
          <text
            x="330" y="287"
            fontFamily="var(--font-mono)"
            fontSize="9"
            fill="var(--color-midnight)"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            step.3
          </text>

          {/* step.3 leaves */}
          <line x1="370" y1="277" x2="390" y2="277" stroke="var(--border)" strokeWidth="1" />
          <line x1="390" y1="269" x2="390" y2="285" stroke="var(--border)" strokeWidth="1" />

          <line x1="390" y1="269" x2="408" y2="269" stroke="var(--border)" strokeWidth="1" />
          <rect
            x="408" y="259" width="90" height="20" rx="4"
            stroke="var(--border)"
            strokeWidth="1"
            fill="var(--bg-surface)"
          />
          <text
            x="453" y="273"
            fontFamily="var(--font-mono)"
            fontSize="8"
            fill="var(--fg-2)"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            gen_ai.chat
          </text>

          <line x1="390" y1="285" x2="408" y2="285" stroke="var(--border)" strokeWidth="1" />
          <rect
            x="408" y="275" width="90" height="20" rx="4"
            stroke="var(--border)"
            strokeWidth="1"
            fill="var(--bg-surface)"
          />
          <text
            x="453" y="289"
            fontFamily="var(--font-mono)"
            fontSize="8"
            fill="var(--fg-2)"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            tool_call
          </text>

          {/* Trace annotation */}
          <text
            x="560" y="298"
            fontFamily="var(--font-mono)"
            fontSize="10"
            fill="var(--fg-3)"
            letterSpacing="0.06em"
          >
            trace with bodies
          </text>
        </g>

        {/* ════════════════════════════════════════════════════════
            BOTTOM ZONE — Issue lifecycle ratchet
            ════════════════════════════════════════════════════════ */}

        <g className={`eo-enter eo-life eo-d9 ${visible ? "eo-visible" : ""}`}>
          {/* Arrows between consecutive nodes */}
          {nodes.map((_, i) => {
            const from = pos(nodes[i].angle);
            const to = pos(nodes[(i + 1) % nodes.length].angle);

            const dx = to.x - from.x;
            const dy = to.y - from.y;
            const len = Math.sqrt(dx * dx + dy * dy);
            const shortenFrom = 60;
            const shortenTo = 60;
            const sx = from.x + (dx / len) * shortenFrom;
            const sy = from.y + (dy / len) * shortenFrom;
            const ex = to.x - (dx / len) * shortenTo;
            const ey = to.y - (dy / len) * shortenTo;

            return (
              <line
                key={`eo-lifecycle-arrow-${i}`}
                x1={sx} y1={sy} x2={ex} y2={ey}
                stroke="var(--color-midnight)"
                strokeWidth="1.5"
                markerEnd="url(#eoArrow)"
              />
            );
          })}

          {/* Nodes */}
          {nodes.map((node, i) => {
            const p = pos(node.angle);
            return (
              <g key={`eo-lifecycle-node-${i}`}>
                <rect
                  x={p.x - nodeW / 2}
                  y={p.y - nodeH / 2}
                  width={nodeW}
                  height={nodeH}
                  rx="4"
                  stroke="var(--color-midnight)"
                  strokeWidth="1.5"
                  fill="var(--bg-surface)"
                />
                <text
                  x={p.x}
                  y={p.y}
                  fontFamily="var(--font-mono)"
                  fontSize="9"
                  fill="var(--color-midnight)"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  letterSpacing="0.02em"
                >
                  {node.label}
                </text>
              </g>
            );
          })}

          {/* Feedback arrow from "Harness improvement" up to innermost eval ring */}
          <path
            d={feedbackPath}
            stroke="var(--fg-3)"
            strokeWidth="1"
            strokeDasharray="4 3"
            fill="none"
            markerEnd="url(#eoArrowMuted)"
          />
          <text
            x={feedbackStartX - 56}
            y={(feedbackStartY + feedbackEndY) / 2}
            fontFamily="var(--font-mono)"
            fontSize="8"
            fill="var(--fg-3)"
            letterSpacing="0.04em"
            textAnchor="middle"
            transform={`rotate(-62, ${feedbackStartX - 56}, ${(feedbackStartY + feedbackEndY) / 2})`}
          >
            new eval case
          </text>
        </g>

        {/* ── Flowing SMIL dots (rendered only when visible) ──── */}
        {visible && (
          <g>
            {/* Dot: failure signal flowing downward */}
            <circle r="4" fill="var(--color-midnight)" opacity="0.8">
              <animateMotion
                dur="1.8s"
                repeatCount="indefinite"
                keyPoints="0;1"
                keyTimes="0;1"
                calcMode="linear"
              >
                <mpath href="#eoFlowFailure" />
              </animateMotion>
            </circle>

            {/* Dot: lifecycle ratchet circling clockwise */}
            <circle r="4" fill="var(--color-midnight)" opacity="0.8">
              <animateMotion
                dur="6s"
                repeatCount="indefinite"
                keyPoints="0;1"
                keyTimes="0;1"
                calcMode="linear"
                begin="0.5s"
              >
                <mpath href="#eoFlowLifecycle" />
              </animateMotion>
            </circle>

            {/* Dot: feedback flowing upward */}
            <circle r="3.5" fill="var(--fg-3)" opacity="0.7">
              <animateMotion
                dur="2.5s"
                repeatCount="indefinite"
                keyPoints="0;1"
                keyTimes="0;1"
                calcMode="linear"
                begin="1s"
              >
                <mpath href="#eoFlowFeedback" />
              </animateMotion>
            </circle>
          </g>
        )}
      </svg>
    </figure>
  );
}
