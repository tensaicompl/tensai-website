"use client";

import { useEffect, useRef } from "react";

/* -----------------------------------------------------------------------
   MapScrollSequence
   The enterprise AI system assembles bottom-up as the reader scrolls.
   ----------------------------------------------------------------------- */

export function MapScrollSequence() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion — leave everything visible
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reducedMotion) return;

    const section = sectionRef.current;
    if (!section) return;

    // Add hidden class to all animated layers
    const layers = section.querySelectorAll<HTMLElement>("[data-layer]");
    layers.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition =
        "opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1), transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.disconnect();

          // Reveal order: inputs → band-I → band-II → band-III → frame-label → value
          const order = [
            "inputs",
            "band-I",
            "band-II",
            "band-III",
            "frame-label",
            "value",
          ];

          order.forEach((name, i) => {
            const el = section.querySelector<HTMLElement>(
              `[data-layer="${name}"]`
            );
            if (!el) return;
            setTimeout(() => {
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
            }, i * 120);
          });
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        padding: "96px 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: "1000px" }}>
        {/* Top label — Value */}
        <div data-layer="value" style={{ textAlign: "center", marginBottom: "18px" }}>
          <span
            className="font-display"
            style={{
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "var(--fg-1)",
            }}
          >
            Value — what the enterprise actually gets
          </span>
          <div
            style={{
              marginTop: "8px",
              color: "var(--fg-3)",
              fontSize: "13px",
              lineHeight: 1,
            }}
          >
            ↑
          </div>
        </div>

        {/* Outer frame — Governed · Secured · Observed */}
        <div
          style={{
            border: "1px solid var(--border)",
            background: "var(--bg-surface)",
            padding: "14px",
            position: "relative",
          }}
        >
          {/* Frame label */}
          <div
            data-layer="frame-label"
            style={{
              position: "absolute",
              top: "-9px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "var(--bg-page)",
              padding: "0 14px",
              whiteSpace: "nowrap",
            }}
          >
            <span
              className="font-display"
              style={{
                fontSize: "10.5px",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                color: "var(--fg-3)",
              }}
            >
              Governed · Secured · Observed
            </span>
          </div>

          {/* Two-column inner grid: rail + stack */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "54px 1fr",
              gap: "0",
            }}
          >
            {/* Rail */}
            <div
              style={{
                background: "var(--color-midnight-light)",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "24px 0",
              }}
            >
              <span
                className="font-display"
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.26em",
                  color: "var(--fg-1)",
                  whiteSpace: "nowrap",
                }}
              >
                The Spine · 18 concepts
              </span>
            </div>

            {/* Band stack */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "10px 0 10px 10px",
              }}
            >
              {/* Band III — The Craft */}
              <div
                data-layer="band-III"
                style={{
                  borderLeft: "3px solid var(--fg-3)",
                  background:
                    "linear-gradient(to right, rgba(107,114,128,0.14), transparent)",
                  padding: "18px 22px",
                  display: "flex",
                  alignItems: "baseline",
                  gap: "18px",
                }}
              >
                <span
                  className="font-display"
                  style={{
                    fontWeight: 800,
                    fontSize: "30px",
                    color: "var(--fg-3)",
                    minWidth: "46px",
                    lineHeight: 1,
                    flexShrink: 0,
                  }}
                >
                  III
                </span>
                <div>
                  <div
                    className="font-display"
                    style={{
                      fontWeight: 700,
                      fontSize: "18px",
                      color: "var(--fg-1)",
                    }}
                  >
                    The Craft
                  </div>
                  <div
                    style={{
                      fontSize: "13.5px",
                      color: "var(--fg-2)",
                      marginTop: "2px",
                    }}
                  >
                    Build the agents — the practitioner's concept-level playbook.
                  </div>
                </div>
              </div>

              {/* Band II — The Operating Model */}
              <div
                data-layer="band-II"
                style={{
                  borderLeft: "3px solid var(--fg-2)",
                  background:
                    "linear-gradient(to right, rgba(51,65,85,0.14), transparent)",
                  padding: "18px 22px",
                  display: "flex",
                  alignItems: "baseline",
                  gap: "18px",
                }}
              >
                <span
                  className="font-display"
                  style={{
                    fontWeight: 800,
                    fontSize: "30px",
                    color: "var(--fg-2)",
                    minWidth: "46px",
                    lineHeight: 1,
                    flexShrink: 0,
                  }}
                >
                  II
                </span>
                <div>
                  <div
                    className="font-display"
                    style={{
                      fontWeight: 700,
                      fontSize: "18px",
                      color: "var(--fg-1)",
                    }}
                  >
                    The Operating Model
                  </div>
                  <div
                    style={{
                      fontSize: "13.5px",
                      color: "var(--fg-2)",
                      marginTop: "2px",
                    }}
                  >
                    Scale them — skills, catalogs, power users, enablement.
                  </div>
                </div>
              </div>

              {/* Band I — The Groundwork */}
              <div
                data-layer="band-I"
                style={{
                  borderLeft: "3px solid var(--fg-1)",
                  background:
                    "linear-gradient(to right, rgba(15,23,42,0.14), transparent)",
                  padding: "18px 22px",
                  display: "flex",
                  alignItems: "baseline",
                  gap: "18px",
                }}
              >
                <span
                  className="font-display"
                  style={{
                    fontWeight: 800,
                    fontSize: "30px",
                    color: "var(--fg-1)",
                    minWidth: "46px",
                    lineHeight: 1,
                    flexShrink: 0,
                  }}
                >
                  I
                </span>
                <div>
                  <div
                    className="font-display"
                    style={{
                      fontWeight: 700,
                      fontSize: "18px",
                      color: "var(--fg-1)",
                    }}
                  >
                    The Groundwork
                  </div>
                  <div
                    style={{
                      fontSize: "13.5px",
                      color: "var(--fg-2)",
                      marginTop: "2px",
                    }}
                  >
                    Lay the foundation — operating model, security, governance.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom label — Inputs */}
        <div
          data-layer="inputs"
          style={{ textAlign: "center", marginTop: "18px" }}
        >
          <div
            style={{
              color: "var(--fg-3)",
              fontSize: "13px",
              lineHeight: 1,
              marginBottom: "8px",
            }}
          >
            ↑
          </div>
          <span
            className="font-display"
            style={{
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "var(--fg-1)",
            }}
          >
            Inputs — the commodity layer
          </span>
          <div
            style={{
              marginTop: "5px",
              fontSize: "11px",
              color: "var(--fg-3)",
              letterSpacing: "0.08em",
            }}
          >
            token sourcing · models · compute · data
          </div>
        </div>
      </div>
    </section>
  );
}
