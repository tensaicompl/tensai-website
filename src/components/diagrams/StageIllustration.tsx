"use client";

import { useEffect, useState } from "react";

const STAGE_W = 140;
const STAGE_H = 160;

function Stage1() {
  const dots = [
    { dx: -30, dy: 20 }, { dx: 25, dy: 50 }, { dx: -10, dy: 85 },
  ];
  return (
    <g>
      {dots.map((d, i) => (
        <circle key={i} cx={STAGE_W / 2 + d.dx} cy={30 + d.dy} r={8} stroke="var(--color-midnight)" strokeWidth="1.5" fill="none" />
      ))}
      <text x={STAGE_W / 2} y={STAGE_H - 8} fontFamily="var(--font-body)" fontSize="9" fill="var(--fg-3)" textAnchor="middle">Isolated Pilots</text>
    </g>
  );
}

function Stage2({ reducedMotion }: { reducedMotion: boolean }) {
  const cx = STAGE_W / 2, hubY = 60;
  const spokes = [
    { dx: -38, dy: -28 }, { dx: 38, dy: -23 },
    { dx: -35, dy: 30 }, { dx: 38, dy: 28 }, { dx: 0, dy: -42 },
  ];
  return (
    <g>
      <defs>
        {spokes.map((s, i) => {
          const dist = Math.hypot(s.dx, s.dy);
          const eX = cx + (s.dx / dist) * 16;
          const eY = hubY + (s.dy / dist) * 16;
          return <path key={`sp-${i}`} id={`si2-spoke-${i}`} d={`M${eX},${eY} L${cx + s.dx},${hubY + s.dy}`} fill="none" stroke="none" />;
        })}
      </defs>
      {spokes.map((s, i) => {
        const dist = Math.hypot(s.dx, s.dy);
        const eX = cx + (s.dx / dist) * 16;
        const eY = hubY + (s.dy / dist) * 16;
        return (
          <g key={i}>
            <line x1={eX} y1={eY} x2={cx + s.dx} y2={hubY + s.dy} stroke="var(--border)" strokeWidth="1" />
            <circle cx={cx + s.dx} cy={hubY + s.dy} r={6} stroke="var(--color-midnight)" strokeWidth="1.5" fill="none" />
            {!reducedMotion && (
              <circle r="2" fill="var(--color-midnight)" opacity="0.6">
                <animateMotion dur="2s" repeatCount="indefinite" begin={`${i * 0.4}s`}>
                  <mpath href={`#si2-spoke-${i}`} />
                </animateMotion>
              </circle>
            )}
          </g>
        );
      })}
      <circle cx={cx} cy={hubY} r={16} stroke="var(--color-midnight)" strokeWidth="2" fill="var(--bg-card)" />
      <text x={cx} y={hubY + 1} fontFamily="var(--font-display)" fontSize="9" fill="var(--color-midnight)" textAnchor="middle" dominantBaseline="middle" fontWeight="700">CoE</text>
      <text x={STAGE_W / 2} y={STAGE_H - 8} fontFamily="var(--font-body)" fontSize="9" fill="var(--fg-3)" textAnchor="middle">Central Hub</text>
    </g>
  );
}

function Stage3({ reducedMotion }: { reducedMotion: boolean }) {
  const cx = STAGE_W / 2, barY = 42, barW = 100, barH = 10;
  const coeY = 22, coeR = 12;
  const dots = [
    { dx: -32, dy: 36 }, { dx: -8, dy: 50 }, { dx: 16, dy: 36 }, { dx: 38, dy: 46 },
  ];
  return (
    <g>
      <defs>
        <path id="si3-coe-plat" d={`M${cx},${coeY + coeR} L${cx},${barY}`} fill="none" stroke="none" />
      </defs>
      <circle cx={cx} cy={coeY} r={coeR} stroke="var(--color-midnight)" strokeWidth="1.5" fill="var(--bg-card)" />
      <text x={cx} y={coeY + 1} fontFamily="var(--font-display)" fontSize="7" fill="var(--color-midnight)" textAnchor="middle" dominantBaseline="middle" fontWeight="700">CoE</text>
      <line x1={cx} y1={coeY + coeR} x2={cx} y2={barY} stroke="var(--border)" strokeWidth="1" strokeDasharray="3 2" />
      {!reducedMotion && (
        <circle r="2" fill="var(--color-midnight)" opacity="0.5">
          <animateMotion dur="1.5s" repeatCount="indefinite">
            <mpath href="#si3-coe-plat" />
          </animateMotion>
        </circle>
      )}
      <rect x={cx - barW / 2} y={barY} width={barW} height={barH} rx={2} stroke="var(--color-midnight)" strokeWidth="1.5" fill="var(--bg-card)" />
      <text x={cx} y={barY + 7.5} fontFamily="var(--font-mono)" fontSize="7" fill="var(--color-midnight)" textAnchor="middle" fontWeight="600" letterSpacing="0.08em">PLATFORM</text>
      {dots.map((d, i) => (
        <g key={i}>
          <line x1={cx + d.dx} y1={barY + barH} x2={cx + d.dx} y2={barY + d.dy - 6} stroke="var(--border)" strokeWidth="1" />
          <circle cx={cx + d.dx} cy={barY + d.dy} r={6} stroke="var(--color-midnight)" strokeWidth="1.5" fill="none" />
        </g>
      ))}
      <text x={STAGE_W / 2} y={STAGE_H - 8} fontFamily="var(--font-body)" fontSize="9" fill="var(--fg-3)" textAnchor="middle">Self-Serve</text>
    </g>
  );
}

function Stage4({ reducedMotion }: { reducedMotion: boolean }) {
  const cx = STAGE_W / 2, barY = 46, barW = 100, barH = 10;
  const coeY = 20, coeR = 12;
  const usersY = 118, usersW = 44, usersH = 16;
  const R = 8, off = 52;
  const dots = [
    { dx: -32, dy: 36 }, { dx: -8, dy: 50 }, { dx: 16, dy: 36 }, { dx: 38, dy: 46 },
  ];
  const elbows = [
    { id: "si4-gov", d: `M${cx - off},${barY} L${cx - off},${coeY + R} Q${cx - off},${coeY} ${cx - off + R},${coeY} L${cx - coeR},${coeY}` },
    { id: "si4-rep", d: `M${cx + coeR},${coeY} L${cx + off - R},${coeY} Q${cx + off},${coeY} ${cx + off},${coeY + R} L${cx + off},${barY}` },
    { id: "si4-del", d: `M${cx - off},${barY + barH} L${cx - off},${usersY + usersH / 2 - R} Q${cx - off},${usersY + usersH / 2} ${cx - off + R},${usersY + usersH / 2} L${cx - usersW / 2},${usersY + usersH / 2}` },
    { id: "si4-fb", d: `M${cx + usersW / 2},${usersY + usersH / 2} L${cx + off - R},${usersY + usersH / 2} Q${cx + off},${usersY + usersH / 2} ${cx + off},${usersY + usersH / 2 - R} L${cx + off},${barY + barH}` },
  ];
  return (
    <g>
      <defs>
        {elbows.map((e) => <path key={e.id} id={e.id} d={e.d} fill="none" stroke="none" />)}
      </defs>
      <circle cx={cx} cy={coeY} r={coeR} stroke="var(--color-midnight)" strokeWidth="1.5" fill="var(--bg-card)" />
      <text x={cx} y={coeY + 1} fontFamily="var(--font-display)" fontSize="7" fill="var(--color-midnight)" textAnchor="middle" dominantBaseline="middle" fontWeight="700">CoE</text>
      <rect x={cx - barW / 2} y={barY} width={barW} height={barH} rx={2} stroke="var(--color-midnight)" strokeWidth="1.5" fill="var(--bg-card)" />
      <text x={cx} y={barY + 7.5} fontFamily="var(--font-mono)" fontSize="7" fill="var(--color-midnight)" textAnchor="middle" fontWeight="600" letterSpacing="0.08em">PLATFORM</text>
      {dots.map((d, i) => (
        <g key={i}>
          <line x1={cx + d.dx} y1={barY + barH} x2={cx + d.dx} y2={barY + d.dy - 6} stroke="var(--border)" strokeWidth="1" />
          <circle cx={cx + d.dx} cy={barY + d.dy} r={6} stroke="var(--color-midnight)" strokeWidth="1.5" fill="none" />
        </g>
      ))}
      {elbows.map((e, i) => (
        <g key={e.id}>
          <path d={e.d} stroke="var(--fg-3)" strokeWidth="0.8" fill="none" opacity="0.25" />
          {!reducedMotion && (
            <circle r="2" fill="var(--color-midnight)" opacity="0.6">
              <animateMotion dur="2.5s" repeatCount="indefinite" begin={`${i * 0.5}s`}>
                <mpath href={`#${e.id}`} />
              </animateMotion>
            </circle>
          )}
        </g>
      ))}
      <rect x={cx - usersW / 2} y={usersY} width={usersW} height={usersH} rx={2} stroke="var(--color-midnight)" strokeWidth="1.5" fill="var(--bg-card)" />
      <text x={cx} y={usersY + usersH / 2 + 1} fontFamily="var(--font-display)" fontSize="8" fill="var(--color-midnight)" textAnchor="middle" dominantBaseline="middle" fontWeight="600">Users</text>
      <text x={STAGE_W / 2} y={STAGE_H - 8} fontFamily="var(--font-body)" fontSize="9" fill="var(--fg-3)" textAnchor="middle">Continuous Feedback</text>
    </g>
  );
}

const STAGES: Record<number, (props: { reducedMotion: boolean }) => React.JSX.Element> = {
  1: () => <Stage1 />,
  2: ({ reducedMotion }) => <Stage2 reducedMotion={reducedMotion} />,
  3: ({ reducedMotion }) => <Stage3 reducedMotion={reducedMotion} />,
  4: ({ reducedMotion }) => <Stage4 reducedMotion={reducedMotion} />,
};

export function StageIllustration({ stage }: { stage: number | string }) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onMotionChange = (e: MediaQueryListEvent) =>
      setReducedMotion(e.matches);
    mq.addEventListener("change", onMotionChange);
    return () => mq.removeEventListener("change", onMotionChange);
  }, []);

  const StageComponent = STAGES[Number(stage)];
  if (!StageComponent) return null;
  return (
    <span
      style={{
        display: "block",
        float: "right",
        clear: "right",
        margin: "0 0 16px 24px",
        width: `${STAGE_W}px`,
      }}
    >
      <svg
        viewBox={`0 0 ${STAGE_W} ${STAGE_H}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-sm)",
          background: "var(--bg-surface)",
          padding: "8px",
        }}
      >
        <StageComponent reducedMotion={reducedMotion} />
      </svg>
    </span>
  );
}
