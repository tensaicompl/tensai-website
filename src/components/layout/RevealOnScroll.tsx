"use client";

import React, { useEffect, useRef, useState } from "react";

export interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  /** Stagger delay in milliseconds (default: 0) */
  delay?: number;
  /** IntersectionObserver threshold (default: 0.12) */
  threshold?: number;
}

export function RevealOnScroll({
  children,
  className,
  delay = 0,
  threshold = 0.12,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  // Default to visible (SSR-safe) — will be overridden client-side unless reduced-motion
  const [visible, setVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    setReducedMotion(prefersReduced);

    if (prefersReduced) {
      // No animation — stay visible
      setVisible(true);
      return;
    }

    // Start hidden before observing
    setVisible(false);

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  // SSR + pre-mount: render visibly so there's no flash on reduced-motion or no-JS
  if (!mounted || reducedMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(22px)",
        transition: `opacity 900ms var(--ease-out), transform 900ms var(--ease-out)`,
        transitionDelay: `${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
