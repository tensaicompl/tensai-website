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
  const [done, setDone] = useState(false);
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

    let gsapModule: typeof import("gsap") | null = null;

    import("gsap").then((mod) => {
      gsapModule = mod;
      const gsap = mod.gsap;

      const lockup = lockupRef.current;
      const mark = markRef.current;
      const divider = dividerRef.current;
      const chars = charsRef.current;
      const tagline = taglineRef.current;
      const wet = wetRef.current;
      const backdrop = backdropRef.current;

      if (!lockup || !mark || !divider || !wet || !backdrop) return;

      const tl = gsap.timeline({
        paused: true,
        onComplete: () => {
          setTimeout(() => {
            setDone(true);
            onComplete?.();
          }, 600);
        },
      });

      tl.set(lockup, { opacity: 1 }, 0)
        .set(mark, { scale: 1.06, "--swept": 0, transformOrigin: "50% 50%" }, 0)
        .set(wet, { opacity: 1 }, 0)
        .set(divider, { scaleY: 0 }, 0)
        .set(chars, { yPercent: 125, opacity: 0 }, 0)
        .set(tagline, { yPercent: 80, opacity: 0 }, 0);

      tl.to(mark, { scale: 1, duration: SWEEP_DURATION, ease: "power2.out" }, 0);

      tl.to(
        mark,
        { "--swept": 392, duration: SWEEP_DURATION, ease: "power1.inOut" },
        0
      ).to(
        wet,
        { opacity: 0, duration: 0.55, ease: "power1.in" },
        SWEEP_DURATION - 0.45
      );

      tl.to(
        divider,
        { scaleY: 1, duration: 0.5, ease: "power3.inOut" },
        SWEEP_DURATION - 0.35
      )
        .to(
          chars,
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.66,
            ease: "power3.out",
            stagger: 0.035,
          },
          SWEEP_DURATION - 0.15
        )
        .to(
          tagline,
          { yPercent: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
          SWEEP_DURATION + 0.3
        );

      if (prefersReduced) {
        tl.progress(1);
      } else {
        document.fonts?.ready
          ? document.fonts.ready.then(() => tl.play())
          : tl.play();
      }
    });

    return () => {
      if (gsapModule) {
        gsapModule.gsap.killTweensOf("*");
      }
    };
  }, [onComplete]);

  if (done) return null;

  return (
    <div
      ref={backdropRef}
      className={`${styles.backdrop} ${done ? styles.backdropHidden : ""}`}
    >
      <div ref={lockupRef} className={styles.lockup}>
        {/* The brush mark */}
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

        {/* Divider */}
        <span ref={dividerRef} className={styles.divider} />

        {/* Wordmark + tagline */}
        <span className={styles.wordmark}>
          <span className={styles.wordmarkName}>
            {[...WORD].map((ch, i) => (
              <span
                key={i}
                ref={addCharRef(i)}
                className={styles.ch}
                style={ch === " " ? { width: "0.32em" } : undefined}
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
