"use client";

import { useEffect, useRef, useState } from "react";

export function OperatingModelDiagram() {
  const figRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = figRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const W = 1200;
  const H = 420;
  const stageW = 220;
  const stageGap = 60;
  const totalW = stageW * 4 + stageGap * 3;
  const offsetX = (W - totalW) / 2;
  const stageX = (i: number) => offsetX + i * (stageW + stageGap) + stageW / 2;

  const stageTop = 80;
  const stageH = 260;
  const midY = stageTop + stageH / 2;
  const dotZoneY = stageTop + 70;

  const wallX = stageX(1) + stageW / 2 + stageGap / 2;
  const wallTop = stageTop - 14;
  const wallBottom = stageTop + stageH + 14;
  const wallW = 10;

  const barY = dotZoneY + 14;
  const barW = 150;
  const barH = 12;
  const hangDots = [
    { dx: -50, dy: 50 },
    { dx: -15, dy: 70 },
    { dx: 20, dy: 50 },
    { dx: 55, dy: 65 },
  ];
  const loopRight = stageX(3) + barW / 2 + 6;

  const flowPaths = [
    { id: "om-flow-12", d: `M${stageX(0) + stageW / 2 + 4},${midY} L${stageX(1) - stageW / 2 - 4},${midY}`, color: "var(--color-midnight)", dur: "2.5s", r: 3.5 },
    { id: "om-flow-2w", d: `M${stageX(1) + stageW / 2 + 4},${midY} L${wallX - wallW / 2 - 4},${midY}`, color: "var(--accent)", dur: "1.5s", r: 3 },
    { id: "om-flow-w3", d: `M${wallX + wallW / 2 + 4},${midY} L${stageX(2) - stageW / 2 - 4},${midY}`, color: "var(--accent)", dur: "1.5s", r: 3 },
    { id: "om-flow-34", d: `M${stageX(2) + stageW / 2 + 4},${midY} L${stageX(3) - stageW / 2 - 4},${midY}`, color: "var(--color-midnight)", dur: "2.5s", r: 3.5 },
    { id: "om-flow-loop", d: `M${stageX(3) + barW / 2 - 8},${barY + barH} C${loopRight},${barY + 30} ${loopRight},${barY + 80} ${stageX(3)},${barY + 100} C${stageX(3) - barW / 2 + 8},${barY + 80} ${stageX(3) - barW / 2 - 6},${barY + 30} ${stageX(3) - barW / 2 + 8},${barY + barH}`, color: "var(--color-midnight)", dur: "3.5s", r: 2.5 },
  ];

  const stageEntrance = (i: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(14px)",
    transition: `opacity 0.5s ease ${i * 120}ms, transform 0.5s ease ${i * 120}ms`,
  });

  return (
    <figure
      ref={figRef}
      role="img"
      aria-label="AI operating model maturity — four stages from Experimentation through AI Factory, separated by The Wall between Standardisation and Scaling"
      style={{ margin: 0, width: "100%" }}
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        <defs>
          <marker id="omArrow" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M 0 2 L 10 5 L 0 8" fill="none" stroke="var(--color-midnight)" strokeWidth="1.5" />
          </marker>
          <marker id="omArrowMuted" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 2 L 10 5 L 0 8" fill="none" stroke="var(--fg-3)" strokeWidth="1.5" />
          </marker>
          <pattern id="omHatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="7" stroke="var(--accent)" strokeWidth="1.5" opacity="0.5" />
          </pattern>
          <marker id="omLoopArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 2 L 10 5 L 0 8" fill="none" stroke="var(--color-midnight)" strokeWidth="1.5" />
          </marker>
          {flowPaths.map((fp) => (
            <path key={fp.id} id={fp.id} d={fp.d} fill="none" stroke="none" />
          ))}
        </defs>

        {/* ── Stage labels ────────────────────────────────── */}
        {[
          { n: "01", label: "Experimentation" },
          { n: "02", label: "Standardisation" },
          { n: "03", label: "Scaling" },
          { n: "04", label: "AI Factory" },
        ].map(({ n, label }, i) => (
          <g key={n} style={stageEntrance(i)}>
            <text x={stageX(i)} y={38} fontFamily="var(--font-mono)" fontSize="11" fill="var(--fg-3)" textAnchor="middle" letterSpacing="0.1em">{n}</text>
            <text x={stageX(i)} y={60} fontFamily="var(--font-display)" fontSize="16" fontWeight="700" fill="var(--color-midnight)" textAnchor="middle" letterSpacing="-0.02em">{label}</text>
          </g>
        ))}

        {/* ── Stage boxes ─────────────────────────────────── */}
        {[0, 1, 2, 3].map((i) => (
          <rect key={`box-${i}`} style={stageEntrance(i)} x={stageX(i) - stageW / 2} y={stageTop} width={stageW} height={stageH} rx={8} stroke="var(--border)" strokeWidth="1" fill="var(--bg-surface)" opacity={0.6} />
        ))}

        {/* ── Stage 1 — scattered dots ────────────────────── */}
        <g style={stageEntrance(0)}>
          {[
            { dx: -45, dy: 30 },
            { dx: 35, dy: 65 },
            { dx: -15, dy: 110 },
          ].map((d, i) => (
            <circle key={`s1d-${i}`} cx={stageX(0) + d.dx} cy={dotZoneY + d.dy} r={10} stroke="var(--color-midnight)" strokeWidth="1.5" fill="none" />
          ))}
          <text x={stageX(0)} y={dotZoneY + 160} fontFamily="var(--font-body)" fontSize="12" fill="var(--fg-3)" textAnchor="middle">isolated pilots</text>
        </g>

        {/* ── Stage 2 — hub-and-spoke (CoE) ───────────────── */}
        {(() => {
          const cx = stageX(1);
          const hubY = dotZoneY + 65;
          const hubR = 22;
          const spokes = [
            { dx: -55, dy: -38 }, { dx: 55, dy: -33 },
            { dx: -50, dy: 42 }, { dx: 55, dy: 38 }, { dx: 0, dy: -58 },
          ];
          return (
            <g style={stageEntrance(1)}>
              {spokes.map((s, i) => {
                const dist = Math.hypot(s.dx, s.dy);
                const edgeX = cx + (s.dx / dist) * hubR;
                const edgeY = hubY + (s.dy / dist) * hubR;
                return (
                  <g key={`s2s-${i}`}>
                    <line x1={edgeX} y1={edgeY} x2={cx + s.dx} y2={hubY + s.dy} stroke="var(--border)" strokeWidth="1" />
                    <circle cx={cx + s.dx} cy={hubY + s.dy} r={8} stroke="var(--color-midnight)" strokeWidth="1.5" fill="none" />
                  </g>
                );
              })}
              <circle cx={cx} cy={hubY} r={hubR} stroke="var(--color-midnight)" strokeWidth="2" fill="var(--bg-card)" />
              <text x={cx} y={hubY + 1} fontFamily="var(--font-display)" fontSize="12" fill="var(--color-midnight)" textAnchor="middle" dominantBaseline="middle" fontWeight="700" letterSpacing="-0.01em">CoE</text>
              <text x={cx} y={dotZoneY + 160} fontFamily="var(--font-body)" fontSize="12" fill="var(--fg-3)" textAnchor="middle">central hub</text>
            </g>
          );
        })()}

        {/* ── Stage 3 — platform + hanging dots ───────────── */}
        <g style={stageEntrance(2)}>
          <rect x={stageX(2) - barW / 2} y={barY} width={barW} height={barH} rx={3} stroke="var(--color-midnight)" strokeWidth="1.5" fill="var(--bg-card)" />
          <text x={stageX(2)} y={barY + 9} fontFamily="var(--font-mono)" fontSize="9" fill="var(--color-midnight)" textAnchor="middle" fontWeight="600" letterSpacing="0.1em">PLATFORM</text>
          {hangDots.map((d, i) => (
            <g key={`s3d-${i}`}>
              <line x1={stageX(2) + d.dx} y1={barY + barH} x2={stageX(2) + d.dx} y2={barY + d.dy - 8} stroke="var(--border)" strokeWidth="1" />
              <circle cx={stageX(2) + d.dx} cy={barY + d.dy} r={8} stroke="var(--color-midnight)" strokeWidth="1.5" fill="none" />
            </g>
          ))}
          <text x={stageX(2)} y={dotZoneY + 160} fontFamily="var(--font-body)" fontSize="12" fill="var(--fg-3)" textAnchor="middle">self-serve</text>
        </g>

        {/* ── Stage 4 — platform + feedback loop ──────────── */}
        <g style={stageEntrance(3)}>
          <rect x={stageX(3) - barW / 2} y={barY} width={barW} height={barH} rx={3} stroke="var(--color-midnight)" strokeWidth="1.5" fill="var(--bg-card)" />
          <text x={stageX(3)} y={barY + 9} fontFamily="var(--font-mono)" fontSize="9" fill="var(--color-midnight)" textAnchor="middle" fontWeight="600" letterSpacing="0.1em">PLATFORM</text>
          {hangDots.map((d, i) => (
            <g key={`s4d-${i}`}>
              <line x1={stageX(3) + d.dx} y1={barY + barH} x2={stageX(3) + d.dx} y2={barY + d.dy - 8} stroke="var(--border)" strokeWidth="1" />
              <circle cx={stageX(3) + d.dx} cy={barY + d.dy} r={8} stroke="var(--color-midnight)" strokeWidth="1.5" fill="none" />
            </g>
          ))}
          <path d={flowPaths[4].d} stroke="var(--color-midnight)" strokeWidth="1.5" fill="none" opacity="0.2" />
          <text x={stageX(3)} y={dotZoneY + 160} fontFamily="var(--font-body)" fontSize="12" fill="var(--fg-3)" textAnchor="middle">continuous feedback</text>
        </g>

        {/* ── Static connector rails ──────────────────────── */}
        <line x1={stageX(0) + stageW / 2 + 4} y1={midY} x2={stageX(1) - stageW / 2 - 4} y2={midY} stroke="var(--fg-3)" strokeWidth="1.5" opacity="0.2" markerEnd="url(#omArrowMuted)" />
        <line x1={stageX(1) + stageW / 2 + 4} y1={midY} x2={wallX - wallW / 2 - 6} y2={midY} stroke="var(--fg-3)" strokeWidth="1.5" opacity="0.2" strokeDasharray="6 4" />
        <line x1={wallX + wallW / 2 + 6} y1={midY} x2={stageX(2) - stageW / 2 - 4} y2={midY} stroke="var(--fg-3)" strokeWidth="1.5" opacity="0.2" strokeDasharray="6 4" markerEnd="url(#omArrowMuted)" />
        <line x1={stageX(2) + stageW / 2 + 4} y1={midY} x2={stageX(3) - stageW / 2 - 4} y2={midY} stroke="var(--fg-3)" strokeWidth="1.5" opacity="0.2" markerEnd="url(#omArrowMuted)" />

        {/* ── THE WALL ────────────────────────────────────── */}
        <g style={{ opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.5s" }}>
          <rect x={wallX - wallW / 2} y={wallTop} width={wallW} height={wallBottom - wallTop} rx={2} fill="url(#omHatch)" />
          <rect x={wallX - wallW / 2} y={wallTop} width={wallW} height={wallBottom - wallTop} rx={2} stroke="var(--accent)" strokeWidth="2.5" fill="none" />
          <text x={wallX} y={wallBottom + 22} fontFamily="var(--font-display)" fontSize="14" fontWeight="700" fill="var(--accent)" textAnchor="middle" letterSpacing="0.04em">The Wall</text>
        </g>

        {/* ── Animated flow dots ───────────────────────────── */}
        {visible && flowPaths.map((fp, i) => (
          <g key={`dots-${fp.id}`}>
            <circle r={fp.r} fill={fp.color} opacity="0.8">
              <animateMotion dur={fp.dur} repeatCount="indefinite" begin={`${i * 0.3}s`}>
                <mpath href={`#${fp.id}`} />
              </animateMotion>
            </circle>
            <circle r={fp.r * 0.6} fill={fp.color} opacity="0.35">
              <animateMotion dur={fp.dur} repeatCount="indefinite" begin={`${i * 0.3 + parseFloat(fp.dur) * 0.4}s`}>
                <mpath href={`#${fp.id}`} />
              </animateMotion>
            </circle>
          </g>
        ))}

        {/* ── Caption ──────────────────────────────────────── */}
        <text style={{ opacity: visible ? 1 : 0, transition: "opacity 0.5s ease 0.8s" }} x={W / 2} y={H - 8} fontFamily="var(--font-body)" fontSize="13" fill="var(--fg-3)" textAnchor="middle">Most organisations stall at the wall. The platform is the bridge.</text>
      </svg>
    </figure>
  );
}
