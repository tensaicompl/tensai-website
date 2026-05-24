"use client";

import React, { useEffect, useRef, useState, useSyncExternalStore } from "react";

export interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

function getReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

const subscribe = () => () => {};

export function RevealOnScroll({
  children,
  className,
  delay = 0,
  threshold = 0.12,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const reducedMotion = useSyncExternalStore(subscribe, getReducedMotion, () => false);

  useEffect(() => {
    if (reducedMotion) return;

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
    return () => observer.disconnect();
  }, [threshold, reducedMotion]);

  const show = visible || reducedMotion;

  return (
    <div
      ref={ref}
      className={className}
      style={
        reducedMotion
          ? undefined
          : {
              opacity: show ? 1 : 0,
              transform: show ? "translateY(0)" : "translateY(22px)",
              transition:
                "opacity 900ms var(--ease-out), transform 900ms var(--ease-out)",
              transitionDelay: `${delay}ms`,
            }
      }
    >
      {children}
    </div>
  );
}
