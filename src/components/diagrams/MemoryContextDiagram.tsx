"use client";

/**
 * MemoryContextDiagram — The Memory-Context Loop
 *
 * Centre: large Working Memory (Context Window) box with accent border.
 * Left: three persistent stores stacked vertically (Episodic, Semantic, Procedural).
 * Four operations form the cycle:
 *   Select  — arrows from stores into Working Memory (animated dots rightward)
 *   Write   — arrows from Working Memory back to stores (animated dots leftward)
 *   Compress — circular arrow within Working Memory (animated dot loop)
 *   Isolate  — Working Memory splits into scoped rectangles on the right
 *
 * Single accent: var(--accent) on Working Memory border and operation labels.
 *
 * IntersectionObserver triggers entrance + SMIL animations at 20% visibility.
 * Respects prefers-reduced-motion.
 */

import { useEffect, useRef, useState } from "react";

export function MemoryContextDiagram() {
  const figRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = figRef.current;
    if (!el) return;

    // Respect reduced-motion preference
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

  return (
    <figure
      ref={figRef}
      role="img"
      aria-label="The Memory-Context Loop: three persistent memory stores feed into a central Working Memory via Select, Write, Compress, and Isolate operations"
      style={{ margin: 0, width: "100%", marginInline: "auto" }}
    >
      <svg
        viewBox="0 0 1200 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        {/* ── Marker definitions ──────────────────────────── */}
        <defs>
          <marker
            id="mcArrow"
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
          <marker
            id="mcArrowAccent"
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
              stroke="var(--accent)"
              strokeWidth="1.5"
            />
          </marker>

          {/* ── Flow paths for animated dots ────────────── */}

          {/* Select: Episodic → WM */}
          <path id="selectPathEpisodic" d="M 240 95 L 400 170" />
          {/* Select: Semantic → WM */}
          <path id="selectPathSemantic" d="M 240 210 L 400 210" />
          {/* Select: Procedural → WM */}
          <path id="selectPathProcedural" d="M 240 325 L 400 260" />

          {/* Write: WM → Episodic */}
          <path id="writePathEpisodic" d="M 400 185 L 240 115" />
          {/* Write: WM → Semantic */}
          <path id="writePathSemantic" d="M 400 230 L 240 230" />
          {/* Write: WM → Procedural */}
          <path id="writePathProcedural" d="M 400 280 L 240 345" />

          {/* Compress: loop inside WM */}
          <path
            id="compressPath"
            d="M 540 190 C 520 230, 520 280, 550 300 C 580 320, 630 305, 640 275 C 650 245, 635 210, 610 195"
          />
        </defs>

        {/* ── CSS transition entrance groups ─────────────── */}
        {/* Group 1: Memory stores (stagger in first) */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-30px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            transitionDelay: "0s",
          }}
        >
          {/* Episodic Memory */}
          <rect
            x="60"
            y="55"
            width="180"
            height="80"
            rx="4"
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            fill="var(--bg-surface)"
          />
          <text
            x="150"
            y="88"
            fontFamily="var(--font-display)"
            fontSize="14"
            fontWeight="600"
            fill="var(--color-midnight)"
            textAnchor="middle"
          >
            Episodic
          </text>
          <text
            x="150"
            y="112"
            fontFamily="var(--font-mono)"
            fontSize="10"
            fill="var(--fg-3)"
            textAnchor="middle"
            letterSpacing="0.04em"
          >
            past interactions
          </text>
        </g>

        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-30px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            transitionDelay: "0.12s",
          }}
        >
          {/* Semantic Memory */}
          <rect
            x="60"
            y="170"
            width="180"
            height="80"
            rx="4"
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            fill="var(--bg-surface)"
          />
          <text
            x="150"
            y="203"
            fontFamily="var(--font-display)"
            fontSize="14"
            fontWeight="600"
            fill="var(--color-midnight)"
            textAnchor="middle"
          >
            Semantic
          </text>
          <text
            x="150"
            y="227"
            fontFamily="var(--font-mono)"
            fontSize="10"
            fill="var(--fg-3)"
            textAnchor="middle"
            letterSpacing="0.04em"
          >
            facts and knowledge
          </text>
        </g>

        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-30px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            transitionDelay: "0.24s",
          }}
        >
          {/* Procedural Memory */}
          <rect
            x="60"
            y="285"
            width="180"
            height="80"
            rx="4"
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            fill="var(--bg-surface)"
          />
          <text
            x="150"
            y="318"
            fontFamily="var(--font-display)"
            fontSize="14"
            fontWeight="600"
            fill="var(--color-midnight)"
            textAnchor="middle"
          >
            Procedural
          </text>
          <text
            x="150"
            y="342"
            fontFamily="var(--font-mono)"
            fontSize="10"
            fill="var(--fg-3)"
            textAnchor="middle"
            letterSpacing="0.04em"
          >
            skills and patterns
          </text>
        </g>

        {/* Group 2: Working Memory (appears after stores) */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "scale(1)" : "scale(0.92)",
            transformOrigin: "560px 210px",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            transitionDelay: "0.45s",
          }}
        >
          {/* ── Working Memory (centre, focal element) ──────── */}
          <rect
            x="400"
            y="80"
            width="320"
            height="260"
            rx="6"
            stroke="var(--accent)"
            strokeWidth="2"
            fill="rgba(109, 40, 217, 0.05)"
          />
          <text
            x="560"
            y="125"
            fontFamily="var(--font-display)"
            fontSize="16"
            fontWeight="700"
            fill="var(--color-midnight)"
            textAnchor="middle"
          >
            Working Memory
          </text>
          <text
            x="560"
            y="148"
            fontFamily="var(--font-mono)"
            fontSize="10"
            fill="var(--fg-3)"
            textAnchor="middle"
            letterSpacing="0.06em"
          >
            context window
          </text>

          {/* ── Compress (circular arrow within WM) ─────────── */}
          <path
            d="M 540 190 C 520 230, 520 280, 550 300 C 580 320, 630 305, 640 275 C 650 245, 635 210, 610 195"
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            fill="none"
            markerEnd="url(#mcArrow)"
          />
          <text
            x="570"
            y="265"
            fontFamily="var(--font-mono)"
            fontSize="11"
            fill="var(--accent)"
            textAnchor="middle"
            letterSpacing="0.06em"
          >
            compress
          </text>
        </g>

        {/* Group 3: Operation arrows and labels (last to appear) */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.5s ease-out",
            transitionDelay: "0.7s",
          }}
        >
          {/* ── Select arrows (stores -> working memory) ─────── */}

          {/* Episodic -> WM */}
          <line
            x1="240"
            y1="88"
            x2="396"
            y2="160"
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            markerEnd="url(#mcArrow)"
          />

          {/* Semantic -> WM */}
          <line
            x1="240"
            y1="206"
            x2="396"
            y2="206"
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            markerEnd="url(#mcArrow)"
          />

          {/* Procedural -> WM */}
          <line
            x1="240"
            y1="328"
            x2="396"
            y2="268"
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            markerEnd="url(#mcArrow)"
          />

          {/* Select label */}
          <text
            x="310"
            y="192"
            fontFamily="var(--font-mono)"
            fontSize="11"
            fill="var(--accent)"
            textAnchor="middle"
            letterSpacing="0.06em"
          >
            select
          </text>

          {/* ── Write arrows (working memory -> stores) ──────── */}

          {/* WM -> Episodic */}
          <line
            x1="396"
            y1="175"
            x2="240"
            y2="108"
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            markerEnd="url(#mcArrow)"
          />

          {/* WM -> Semantic */}
          <line
            x1="396"
            y1="226"
            x2="240"
            y2="226"
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            markerEnd="url(#mcArrow)"
          />

          {/* WM -> Procedural */}
          <line
            x1="396"
            y1="288"
            x2="240"
            y2="348"
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            markerEnd="url(#mcArrow)"
          />

          {/* Write label */}
          <text
            x="310"
            y="256"
            fontFamily="var(--font-mono)"
            fontSize="11"
            fill="var(--accent)"
            textAnchor="middle"
            letterSpacing="0.06em"
          >
            write
          </text>

          {/* ── Isolate (right side - scoped rectangles) ─────── */}

          {/* Scope A */}
          <rect
            x="810"
            y="100"
            width="170"
            height="110"
            rx="4"
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            fill="var(--bg-surface)"
          />
          <text
            x="895"
            y="145"
            fontFamily="var(--font-display)"
            fontSize="13"
            fontWeight="600"
            fill="var(--color-midnight)"
            textAnchor="middle"
          >
            Scope A
          </text>
          <text
            x="895"
            y="166"
            fontFamily="var(--font-mono)"
            fontSize="10"
            fill="var(--fg-3)"
            textAnchor="middle"
            letterSpacing="0.04em"
          >
            isolated context
          </text>

          {/* Scope B */}
          <rect
            x="810"
            y="240"
            width="170"
            height="110"
            rx="4"
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            fill="var(--bg-surface)"
          />
          <text
            x="895"
            y="285"
            fontFamily="var(--font-display)"
            fontSize="13"
            fontWeight="600"
            fill="var(--color-midnight)"
            textAnchor="middle"
          >
            Scope B
          </text>
          <text
            x="895"
            y="306"
            fontFamily="var(--font-mono)"
            fontSize="10"
            fill="var(--fg-3)"
            textAnchor="middle"
            letterSpacing="0.04em"
          >
            isolated context
          </text>

          {/* Dashed line connecting Scope A and Scope B */}
          <line
            x1="895"
            y1="210"
            x2="895"
            y2="240"
            stroke="var(--border)"
            strokeWidth="1"
            strokeDasharray="4 3"
          />

          {/* Arrow: WM -> Scope A */}
          <line
            x1="720"
            y1="170"
            x2="806"
            y2="155"
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            markerEnd="url(#mcArrow)"
          />

          {/* Arrow: WM -> Scope B */}
          <line
            x1="720"
            y1="270"
            x2="806"
            y2="285"
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            markerEnd="url(#mcArrow)"
          />

          {/* Isolate label */}
          <text
            x="762"
            y="216"
            fontFamily="var(--font-mono)"
            fontSize="11"
            fill="var(--accent)"
            textAnchor="middle"
            letterSpacing="0.06em"
          >
            isolate
          </text>
        </g>

        {/* ── SMIL animated dots (only render when visible) ── */}
        {visible && (
          <g>
            {/* ── Select dots (stores -> WM, rightward) ─────── */}
            <circle r="4" fill="var(--accent)" opacity="0.85">
              <animateMotion
                dur="2s"
                repeatCount="indefinite"
                begin="0s"
              >
                <mpath xlinkHref="#selectPathEpisodic" />
              </animateMotion>
            </circle>
            <circle r="4" fill="var(--accent)" opacity="0.85">
              <animateMotion
                dur="1.8s"
                repeatCount="indefinite"
                begin="0.3s"
              >
                <mpath xlinkHref="#selectPathSemantic" />
              </animateMotion>
            </circle>
            <circle r="4" fill="var(--accent)" opacity="0.85">
              <animateMotion
                dur="2.2s"
                repeatCount="indefinite"
                begin="0.6s"
              >
                <mpath xlinkHref="#selectPathProcedural" />
              </animateMotion>
            </circle>

            {/* ── Write dots (WM -> stores, leftward) ────────── */}
            <circle r="3.5" fill="var(--color-midnight)" opacity="0.6">
              <animateMotion
                dur="2.2s"
                repeatCount="indefinite"
                begin="1s"
              >
                <mpath xlinkHref="#writePathEpisodic" />
              </animateMotion>
            </circle>
            <circle r="3.5" fill="var(--color-midnight)" opacity="0.6">
              <animateMotion
                dur="2s"
                repeatCount="indefinite"
                begin="1.3s"
              >
                <mpath xlinkHref="#writePathSemantic" />
              </animateMotion>
            </circle>
            <circle r="3.5" fill="var(--color-midnight)" opacity="0.6">
              <animateMotion
                dur="2.4s"
                repeatCount="indefinite"
                begin="1.6s"
              >
                <mpath xlinkHref="#writePathProcedural" />
              </animateMotion>
            </circle>

            {/* ── Compress dot (circles within WM) ───────────── */}
            <circle r="3.5" fill="var(--accent)" opacity="0.7">
              <animateMotion
                dur="3s"
                repeatCount="indefinite"
                begin="0.5s"
              >
                <mpath xlinkHref="#compressPath" />
              </animateMotion>
            </circle>
          </g>
        )}

        {/* ── Diagram title ───────────────────────────────── */}
        <text
          x="560"
          y="404"
          fontFamily="var(--font-mono)"
          fontSize="11"
          fill="var(--fg-3)"
          textAnchor="middle"
          letterSpacing="0.14em"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.5s ease-out",
            transitionDelay: "0.9s",
          }}
        >
          THE MEMORY-CONTEXT LOOP
        </text>
      </svg>
    </figure>
  );
}
