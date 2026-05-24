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
  const wordmarkRef = useRef<HTMLSpanElement>(null);
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
      const wordmarkBlock = wordmarkRef.current;

      if (!lockup || !mark || !divider || !wet || !backdrop) return;

      if (prefersReduced) {
        setPhase("done");
        onComplete?.();
        return;
      }

      const tl = gsap.timeline({ paused: true });

      // Initial states
      tl.set(lockup, { opacity: 1 }, 0)
        .set(mark, { scale: 1.06, "--swept": 0, transformOrigin: "50% 50%" }, 0)
        .set(wet, { opacity: 1 }, 0)
        .set(divider, { scaleY: 0 }, 0)
        .set(chars, { yPercent: 125, opacity: 0 }, 0)
        .set(tagline, { yPercent: 80, opacity: 0 }, 0);

      // Step 1: Brush sweep
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
      tl.to({}, { duration: 0.8 });

      // Step 2: Fly to nav position
      tl.call(() => {
        setPhase("flying");

        const navIcon = document.querySelector("[data-nav-icon]");
        const navWordmark = document.querySelector("[data-nav-wordmark]");
        const navDivider = document.querySelector("[data-nav-divider]");

        if (!navIcon || !navWordmark) {
          gsap.to(backdrop, {
            opacity: 0, duration: 0.6, ease: "power2.out",
            onComplete: () => { setPhase("done"); onComplete?.(); },
          });
          return;
        }

        // Measure current positions of animated elements
        const markRect = mark.getBoundingClientRect();
        const dividerRect = divider.getBoundingClientRect();
        const wordmarkNameEl = wordmarkBlock;

        // Measure nav target positions
        const navIconRect = navIcon.getBoundingClientRect();
        const navWordmarkRect = navWordmark.getBoundingClientRect();
        const navDividerRect = navDivider?.getBoundingClientRect();

        // Icon: center-to-center delta + scale
        const iconScale = navIconRect.width / markRect.width;
        const markCX = markRect.left + markRect.width / 2;
        const markCY = markRect.top + markRect.height / 2;
        const navIconCX = navIconRect.left + navIconRect.width / 2;
        const navIconCY = navIconRect.top + navIconRect.height / 2;

        // Hide nav lockup during flight
        gsap.set(navIcon, { opacity: 0 });
        gsap.set(navWordmark, { opacity: 0 });
        if (navDivider) gsap.set(navDivider, { opacity: 0 });

        const flyTl = gsap.timeline();

        // Fade tagline only (divider stays and flies)
        flyTl.to(tagline, { opacity: 0, yPercent: -20, duration: 0.3, ease: "power2.in" }, 0);

        // Fly icon to nav position
        flyTl.to(mark, {
          x: navIconCX - markCX,
          y: navIconCY - markCY,
          scale: iconScale,
          duration: 1.2,
          ease: "power3.inOut",
        }, 0.15);

        // Fly divider to nav divider position (scale height down)
        if (navDividerRect) {
          const divCX = dividerRect.left + dividerRect.width / 2;
          const divCY = dividerRect.top + dividerRect.height / 2;
          const navDivCX = navDividerRect.left + navDividerRect.width / 2;
          const navDivCY = navDividerRect.top + navDividerRect.height / 2;
          const divScale = navDividerRect.height / dividerRect.height;

          flyTl.to(divider, {
            x: navDivCX - divCX,
            y: navDivCY - divCY,
            scaleY: divScale,
            duration: 1.2,
            ease: "power3.inOut",
          }, 0.15);
        } else {
          flyTl.to(divider, { opacity: 0, duration: 0.4 }, 0);
        }

        // Fly wordmark to nav wordmark position
        if (wordmarkNameEl) {
          const wmRect = wordmarkNameEl.getBoundingClientRect();
          const wordScale = navWordmarkRect.height / wmRect.height;
          const wmCX = wmRect.left + wmRect.width / 2;
          const wmCY = wmRect.top + wmRect.height / 2;
          const navWmCX = navWordmarkRect.left + navWordmarkRect.width / 2;
          const navWmCY = navWordmarkRect.top + navWordmarkRect.height / 2;

          flyTl.to(wordmarkNameEl, {
            x: navWmCX - wmCX,
            y: navWmCY - wmCY,
            scale: wordScale,
            duration: 1.2,
            ease: "power3.inOut",
          }, 0.15);
        }

        // Fade backdrop
        flyTl.to(backdrop, {
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        }, 0.9);

        // Restore nav elements and finish
        flyTl.call(() => {
          gsap.set(navIcon, { opacity: 1 });
          gsap.set(navWordmark, { opacity: 1 });
          if (navDivider) gsap.set(navDivider, { opacity: 1 });
          setPhase("done");
          onComplete?.();
        });
      });

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

        <span ref={wordmarkRef} className={styles.wordmark}>
          <span className={styles.wordmarkName}>
            {[...WORD].map((ch, i) => (
              <span key={i} ref={addCharRef(i)} className={styles.ch}>
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
