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
  const wordmarkNameRef = useRef<HTMLSpanElement>(null);
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

      // Step 2: Fly to nav
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

        // Measure positions
        const markRect = mark.getBoundingClientRect();
        const dividerRect = divider.getBoundingClientRect();
        const navIconRect = navIcon.getBoundingClientRect();
        const navWordmarkRect = navWordmark.getBoundingClientRect();
        const navDividerRect = navDivider?.getBoundingClientRect();

        const iconScale = navIconRect.width / markRect.width;
        const markCX = markRect.left + markRect.width / 2;
        const markCY = markRect.top + markRect.height / 2;
        const navIconCX = navIconRect.left + navIconRect.width / 2;
        const navIconCY = navIconRect.top + navIconRect.height / 2;

        // Hide nav elements during flight
        gsap.set(navIcon, { opacity: 0 });
        gsap.set(navWordmark, { opacity: 0 });
        if (navDivider) gsap.set(navDivider, { opacity: 0 });

        const flyTl = gsap.timeline();

        // Fade tagline
        flyTl.to(tagline, { opacity: 0, yPercent: -20, duration: 0.3, ease: "power2.in" }, 0);

        // Fly icon
        flyTl.to(mark, {
          x: navIconCX - markCX,
          y: navIconCY - markCY,
          scale: iconScale,
          duration: 1.2,
          ease: "power3.inOut",
        }, 0.15);

        // Fly divider
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
        }

        // Fly just the "TensAI" name (not the full wordmark block with tagline)
        const nameEl = wordmarkNameRef.current;
        if (nameEl) {
          const nameRect = nameEl.getBoundingClientRect();
          const wordScale = navWordmarkRect.height / nameRect.height;
          const nameCX = nameRect.left + nameRect.width / 2;
          const nameCY = nameRect.top + nameRect.height / 2;
          const navWmCX = navWordmarkRect.left + navWordmarkRect.width / 2;
          const navWmCY = navWordmarkRect.top + navWordmarkRect.height / 2;

          flyTl.to(nameEl, {
            x: navWmCX - nameCX,
            y: navWmCY - nameCY,
            scale: wordScale,
            duration: 1.2,
            ease: "power3.inOut",
          }, 0.15);
        }

        // Once elements have landed, fade backdrop BEHIND them
        // and trigger the page fade-in simultaneously
        flyTl.to(backdrop, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          onStart: () => {
            // Signal page to fade in NOW (while lockup is still visible)
            onComplete?.();
          },
        }, 1.0);

        // After backdrop is gone and page is visible,
        // show the real nav elements and remove the overlay
        flyTl.call(() => {
          gsap.set(navIcon, { opacity: 1 });
          gsap.set(navWordmark, { opacity: 1 });
          if (navDivider) gsap.set(navDivider, { opacity: 1 });
          setPhase("done");
        }, undefined, 1.8);
      });

      document.fonts?.ready
        ? document.fonts.ready.then(() => tl.play())
        : tl.play();
    });
  }, [onComplete]);

  if (phase === "done") return null;

  return (
    <>
      {/* Backdrop — covers the page, fades out behind the lockup */}
      <div
        ref={backdropRef}
        className={styles.backdrop}
      />
      {/* Lockup — sits ABOVE the backdrop so it stays visible when backdrop fades */}
      <div className={styles.lockupLayer} style={{ pointerEvents: phase === "flying" ? "none" : undefined }}>
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
            <span ref={wordmarkNameRef} className={styles.wordmarkName}>
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
    </>
  );
}
