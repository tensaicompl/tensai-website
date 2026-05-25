"use client";

/**
 * PowerUsersDiagram -- The Three-Tier Distribution
 *
 * A horizontal pyramid divided into three tiers, widening top to bottom:
 * Builders (narrowest, accent), Power Users (middle), Consumers (widest).
 * Left arrow: "capability flows down". Right arrow: "governance flows up".
 *
 * Entrance: tiers fill bottom-to-top (Consumers first, then Power Users,
 * then Builders) via CSS opacity transitions with staggered delays.
 * Animated dots travel along the vertical arrows (SMIL animateMotion).
 */

import { useEffect, useRef, useState } from "react";

export function PowerUsersDiagram() {
  /* ── Visibility via IntersectionObserver ──────────── */
  const figRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onMotionChange = (e: MediaQueryListEvent) =>
      setReducedMotion(e.matches);
    mq.addEventListener("change", onMotionChange);

    if (mq.matches) {
      setVisible(true);
      return () => mq.removeEventListener("change", onMotionChange);
    }

    const el = figRef.current;
    if (!el) {
      return () => mq.removeEventListener("change", onMotionChange);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      mq.removeEventListener("change", onMotionChange);
    };
  }, []);

  /* ── Layout constants (scaled to 1200-wide viewBox) ─ */
  const cx = 600; // horizontal center
  const pyramidTop = 60;
  const tierH = 120;
  const totalH = tierH * 3; // 360
  const pyramidBottom = pyramidTop + totalH;

  /* Tier widths (narrowest at top, widest at bottom) */
  const topW = 310;
  const midW = 620;
  const botW = 920;

  /* Vertical positions for each tier */
  const t0 = pyramidTop;
  const t1 = pyramidTop + tierH;
  const t2 = pyramidTop + tierH * 2;

  /* Arrow column positions */
  const arrowLeftX = cx - botW / 2 - 75;
  const arrowRightX = cx + botW / 2 + 75;
  const arrowTop = t0 + 15;
  const arrowBottom = pyramidBottom - 15;

  /* Helper: trapezoid path for a tier */
  function tierPath(
    topWidth: number,
    bottomWidth: number,
    y: number,
    h: number,
  ) {
    const tl = cx - topWidth / 2;
    const tr = cx + topWidth / 2;
    const bl = cx - bottomWidth / 2;
    const br = cx + bottomWidth / 2;
    return `M ${tl} ${y} L ${tr} ${y} L ${br} ${y + h} L ${bl} ${y + h} Z`;
  }

  /* ── Transition styles for bottom-to-top tier fill ── */
  const tierStyle = (
    delay: number,
  ): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transition: `opacity 0.6s ease ${delay}s`,
  });

  /* Bottom tier (Consumers) fills first, middle second, top last */
  const consumerDelay = 0;
  const powerDelay = 0.35;
  const builderDelay = 0.7;

  /* Arrow fade-in after all tiers */
  const arrowDelay = 1.05;
  const arrowStyle: React.CSSProperties = {
    opacity: visible ? 1 : 0,
    transition: `opacity 0.5s ease ${arrowDelay}s`,
  };

  return (
    <figure
      ref={figRef}
      role="img"
      aria-label="The Three-Tier Distribution -- Builders at the top create skills, Power Users compose them, Consumers use agents through natural interfaces"
      style={{
        margin: 0,
        width: "100%",
        marginInline: "auto",
      }}
    >
      <svg
        viewBox="0 0 1200 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        <defs>
          {/* Down arrow marker */}
          <marker
            id="puArrowDown"
            viewBox="0 0 10 10"
            refX="5"
            refY="10"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path
              d="M 2 0 L 5 10 L 8 0"
              fill="none"
              stroke="var(--fg-2)"
              strokeWidth="1.5"
            />
          </marker>

          {/* Up arrow marker */}
          <marker
            id="puArrowUp"
            viewBox="0 0 10 10"
            refX="5"
            refY="0"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path
              d="M 2 10 L 5 0 L 8 10"
              fill="none"
              stroke="var(--fg-2)"
              strokeWidth="1.5"
            />
          </marker>

          {/* Path for "capability flows down" dot animation (left arrow) */}
          <path
            id="puCapPath"
            d={`M ${arrowLeftX} ${arrowTop} L ${arrowLeftX} ${arrowBottom}`}
          />

          {/* Path for "governance flows up" dot animation (right arrow) */}
          <path
            id="puGovPath"
            d={`M ${arrowRightX} ${arrowBottom} L ${arrowRightX} ${arrowTop}`}
          />
        </defs>

        {/* ==================================================
            TIER 3 -- CONSUMERS (bottom, widest) -- fills FIRST
            ================================================== */}
        <g style={tierStyle(consumerDelay)}>
          <path
            d={tierPath(midW, botW, t2, tierH)}
            fill="var(--color-midnight)"
            fillOpacity="0.05"
            stroke="var(--border)"
            strokeWidth="1"
          />

          <text
            x={cx}
            y={t2 + 42}
            fontFamily="var(--font-display)"
            fontSize="21"
            fontWeight="700"
            fill="var(--color-midnight)"
            textAnchor="middle"
            letterSpacing="0.1em"
          >
            CONSUMERS
          </text>

          <text
            x={cx}
            y={t2 + 68}
            fontFamily="var(--font-mono)"
            fontSize="14"
            fill="var(--fg-2)"
            textAnchor="middle"
          >
            Use agents through natural interfaces
          </text>

          <text
            x={cx}
            y={t2 + 96}
            fontFamily="var(--font-mono)"
            fontSize="14"
            fill="var(--fg-3)"
            textAnchor="middle"
          >
            ~80%
          </text>
        </g>

        {/* ==================================================
            TIER 2 -- POWER USERS (middle) -- fills SECOND
            ================================================== */}
        <g style={tierStyle(powerDelay)}>
          <path
            d={tierPath(topW, midW, t1, tierH)}
            fill="var(--color-midnight)"
            fillOpacity="0.10"
            stroke="var(--border)"
            strokeWidth="1"
          />

          <text
            x={cx}
            y={t1 + 42}
            fontFamily="var(--font-display)"
            fontSize="21"
            fontWeight="700"
            fill="var(--color-midnight)"
            textAnchor="middle"
            letterSpacing="0.1em"
          >
            POWER USERS
          </text>

          <text
            x={cx}
            y={t1 + 68}
            fontFamily="var(--font-mono)"
            fontSize="14"
            fill="var(--fg-2)"
            textAnchor="middle"
          >
            Compose skills, configure agents
          </text>

          <text
            x={cx}
            y={t1 + 96}
            fontFamily="var(--font-mono)"
            fontSize="14"
            fill="var(--fg-3)"
            textAnchor="middle"
          >
            ~15%
          </text>
        </g>

        {/* ==================================================
            TIER 1 -- BUILDERS (top, narrowest) -- fills LAST
            ================================================== */}
        <g style={tierStyle(builderDelay)}>
          <path
            d={tierPath(topW, topW, t0, tierH)}
            fill="var(--color-midnight)"
            fillOpacity="0.20"
            stroke="var(--border)"
            strokeWidth="1"
          />

          {/* Tier label -- accent (the ONE accent element) */}
          <text
            x={cx}
            y={t0 + 42}
            fontFamily="var(--font-display)"
            fontSize="21"
            fontWeight="700"
            fill="var(--accent)"
            textAnchor="middle"
            letterSpacing="0.1em"
          >
            BUILDERS
          </text>

          <text
            x={cx}
            y={t0 + 68}
            fontFamily="var(--font-mono)"
            fontSize="14"
            fill="var(--fg-2)"
            textAnchor="middle"
          >
            Create skills, build agents
          </text>

          <text
            x={cx}
            y={t0 + 96}
            fontFamily="var(--font-mono)"
            fontSize="14"
            fill="var(--fg-3)"
            textAnchor="middle"
          >
            ~5%
          </text>
        </g>

        {/* ==================================================
            LEFT ARROW -- capability flows down
            ================================================== */}
        <g style={arrowStyle}>
          <line
            x1={arrowLeftX}
            y1={arrowTop}
            x2={arrowLeftX}
            y2={arrowBottom}
            stroke="var(--fg-2)"
            strokeWidth="1.5"
            markerEnd="url(#puArrowDown)"
          />

          {/* Arrow label -- rotated */}
          <text
            x={arrowLeftX - 20}
            y={(arrowTop + arrowBottom) / 2}
            fontFamily="var(--font-mono)"
            fontSize="13"
            fill="var(--fg-3)"
            textAnchor="middle"
            letterSpacing="0.04em"
            transform={`rotate(-90, ${arrowLeftX - 20}, ${(arrowTop + arrowBottom) / 2})`}
          >
            capability flows down
          </text>

          {/* Animated dots flowing down */}
          {visible && !reducedMotion && (
            <>
              <circle r="4" fill="var(--accent)" opacity="0.7">
                <animateMotion
                  dur="2.5s"
                  repeatCount="indefinite"
                  begin="1.2s"
                >
                  <mpath href="#puCapPath" />
                </animateMotion>
              </circle>

              <circle r="4" fill="var(--accent)" opacity="0.4">
                <animateMotion
                  dur="2.5s"
                  repeatCount="indefinite"
                  begin="2.45s"
                >
                  <mpath href="#puCapPath" />
                </animateMotion>
              </circle>
            </>
          )}
        </g>

        {/* ==================================================
            RIGHT ARROW -- governance flows up
            ================================================== */}
        <g style={arrowStyle}>
          <line
            x1={arrowRightX}
            y1={arrowBottom}
            x2={arrowRightX}
            y2={arrowTop}
            stroke="var(--fg-2)"
            strokeWidth="1.5"
            markerEnd="url(#puArrowUp)"
          />

          {/* Arrow label -- rotated */}
          <text
            x={arrowRightX + 20}
            y={(arrowTop + arrowBottom) / 2}
            fontFamily="var(--font-mono)"
            fontSize="13"
            fill="var(--fg-3)"
            textAnchor="middle"
            letterSpacing="0.04em"
            transform={`rotate(90, ${arrowRightX + 20}, ${(arrowTop + arrowBottom) / 2})`}
          >
            governance flows up
          </text>

          {/* Animated dots flowing up */}
          {visible && !reducedMotion && (
            <>
              <circle r="4" fill="var(--fg-2)" opacity="0.7">
                <animateMotion
                  dur="2.5s"
                  repeatCount="indefinite"
                  begin="1.2s"
                >
                  <mpath href="#puGovPath" />
                </animateMotion>
              </circle>

              <circle r="4" fill="var(--fg-2)" opacity="0.4">
                <animateMotion
                  dur="2.5s"
                  repeatCount="indefinite"
                  begin="2.45s"
                >
                  <mpath href="#puGovPath" />
                </animateMotion>
              </circle>
            </>
          )}
        </g>
      </svg>
    </figure>
  );
}
