"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { LogoPaths } from "./logo-paths";
import styles from "./LogoIntro.module.css";

const SWEEP_DURATION = 2.0;
const WORD = "TensAI";
const TAGLINE = "Driving innovation.";

export function LogoIntro({ onComplete }: { onComplete?: () => void }) {
  const lockupRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const charsRef = useRef<HTMLSpanElement[]>([]);
  const taglineRef = useRef<HTMLSpanElement>(null);
  const wetRef = useRef<SVGSVGElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const pageWrapRef = useRef<HTMLDivElement | null>(null);
  const [phase, setPhase] = useState<"intro" | "flying" | "done">("intro");
  const played = useRef(false);

  const addCharRef = useCallback(
    (i: number) => (el: HTMLSpanElement | null) => {
      if (el) charsRef.current[i] = el;
    },
    []
  );

  useEffect(() => {
    if (played.current) return;
    played.current = true;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    import("gsap").then((mod) => {
      const gsap = mod.gsap;

      const lockup = lockupRef.current;
      const mark = markRef.current;
      const divider = dividerRef.current;
      const chars = charsRef.current;
      const tagline = taglineRef.current;
      const wet = wetRef.current;
      const backdrop = backdropRef.current;

      if (!lockup || !mark || !divider || !wet || !backdrop) return;

      if (prefersReduced) {
        setPhase("done");
        onComplete?.();
        return;
      }

      // Step 1: Draw animation
      const tl = gsap.timeline({ paused: true });

      tl.set(lockup, { opacity: 1 }, 0)
        .set(mark, { scale: 1.06, "--swept": 0, transformOrigin: "50% 50%" }, 0)
        .set(wet, { opacity: 1 }, 0)
        .set(divider, { scaleY: 0 }, 0)
        .set(chars, { yPercent: 125, opacity: 0 }, 0)
        .set(tagline, { yPercent: 80, opacity: 0 }, 0);

      // Brush sweep
      tl.to(mark, { scale: 1, duration: SWEEP_DURATION, ease: "power2.out" }, 0);
      tl.to(mark, { "--swept": 392, duration: SWEEP_DURATION, ease: "power1.inOut" }, 0)
        .to(wet, { opacity: 0, duration: 0.55, ease: "power1.in" }, SWEEP_DURATION - 0.45);

      // Divider + letters + tagline
      tl.to(divider, { scaleY: 1, duration: 0.5, ease: "power3.inOut" }, SWEEP_DURATION - 0.35)
        .to(chars, {
          yPercent: 0, opacity: 1, duration: 0.66,
          ease: "power3.out", stagger: 0.035,
        }, SWEEP_DURATION - 0.15)
        .to(tagline, {
          yPercent: 0, opacity: 1, duration: 0.5, ease: "power3.out",
        }, SWEEP_DURATION + 0.3);

      // Brief hold
      tl.to({}, { duration: 0.6 });

      // Step 2: Fly lockup to nav position
      tl.call(() => setPhase("flying"));

      // Calculate target position (top-left nav area)
      const navTargetX = 24; // nav padding-left
      const navTargetY = 14; // vertically centered in 72px nav
      const lockupRect = lockup.getBoundingClientRect();
      const centerX = lockupRect.left + lockupRect.width / 2;
      const centerY = lockupRect.top + lockupRect.height / 2;

      // Target: icon shrinks to 72px (nav size), wordmark to 22px
      // Nav lockup left edge ~ 24px from viewport left, centered at ~72px vertically
      const targetCenterX = navTargetX + 60; // approximate center of nav lockup
      const targetCenterY = navTargetY + 22; // center of 72px nav height

      const deltaX = targetCenterX - centerX;
      const deltaY = targetCenterY - centerY;
      const scaleFactor = 72 / 168; // nav icon / intro icon

      // Fade out divider and tagline during fly
      tl.to(divider, { opacity: 0, scaleY: 0, duration: 0.3, ease: "power2.in" }, "<")
        .to(tagline, { opacity: 0, duration: 0.3, ease: "power2.in" }, "<");

      // Fly + shrink the lockup
      tl.to(lockup, {
        x: deltaX,
        y: deltaY,
        scale: scaleFactor,
        duration: 0.9,
        ease: "power3.inOut",
      }, "<+=0.1");

      // Step 3: Fade backdrop out, reveal page
      tl.to(backdrop, {
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => {
          setPhase("done");
          onComplete?.();
        },
      }, "-=0.2");

      document.fonts?.ready
        ? document.fonts.ready.then(() => tl.play())
        : tl.play();
    });
  }, [onComplete]);

  if (phase === "done") return null;

  return (
    <div
      ref={backdropRef}
      className={styles.backdrop}
      style={{ pointerEvents: phase === "flying" ? "none" : undefined }}
    >
      <div ref={lockupRef} className={styles.lockup}>
        <div ref={markRef} className={styles.mark} role="img" aria-label="TensAI">
          <svg
            className={`${styles.art} ${styles.artInk}`}
            viewBox="0 0 1500 1500"
            aria-hidden="true"
          >
            <LogoPaths />
          </svg>
          <svg
            ref={wetRef}
            className={`${styles.art} ${styles.artWet}`}
            viewBox="0 0 1500 1500"
            aria-hidden="true"
          >
            <LogoPaths />
          </svg>
        </div>

        <span ref={dividerRef} className={styles.divider} />

        <span className={styles.wordmark}>
          <span className={styles.wordmarkName}>
            {[...WORD].map((ch, i) => (
              <span
                key={i}
                ref={addCharRef(i)}
                className={styles.ch}
              >
                {ch}
              </span>
            ))}
          </span>
          <span ref={taglineRef} className={styles.tagline}>
            {TAGLINE}
          </span>
        </span>
      </div>
    </div>
  );
}
