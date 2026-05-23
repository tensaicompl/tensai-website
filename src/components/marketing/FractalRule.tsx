/* FractalRule — server component, no "use client" */

/* -----------------------------------------------------------------------
   FractalRule
   Two-column layout: copy on left, nested-boxes diagram on right.
   Explains the "whole before parts" fractal pattern of the site.
   ----------------------------------------------------------------------- */

export function FractalRule() {
  return (
    <section
      style={{
        padding: "96px 24px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <div className="fractal-grid">
        {/* Left column — copy */}
        <div>
          <h3
            className="font-display"
            style={{
              fontWeight: 700,
              fontSize: "clamp(20px, 2.5vw, 28px)",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              color: "var(--fg-1)",
            }}
          >
            Whole before parts — the fractal rule
          </h3>
          <p
            style={{
              marginTop: "12px",
              fontSize: "15px",
              color: "var(--fg-2)",
              lineHeight: 1.6,
            }}
          >
            The Map is not a one-off. It is the pattern the entire site
            repeats. Every pillar opens with its own map. Every concept page
            opens with its own diagram. The reader descends from whole to part,
            never the reverse — because that is how the thinking actually works.
          </p>
        </div>

        {/* Right column — nested boxes */}
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* Outer box — THE SITE */}
          <div
            style={{
              border: "1px solid var(--fg-3)",
              padding: "24px",
              background: "rgba(107, 114, 128, 0.04)",
              width: "100%",
            }}
          >
            <div
              className="font-display"
              style={{
                fontWeight: 700,
                fontSize: "10.5px",
                textTransform: "uppercase",
                letterSpacing: "0.16em",
                color: "var(--fg-3)",
              }}
            >
              The Site
            </div>
            <div
              style={{
                fontStyle: "italic",
                fontSize: "13px",
                color: "var(--fg-2)",
                marginTop: "8px",
              }}
            >
              opens with — The Map
            </div>

            {/* Middle box — EACH PILLAR */}
            <div
              style={{
                border: "1px solid var(--fg-2)",
                padding: "20px",
                background: "rgba(51, 65, 85, 0.04)",
                marginTop: "14px",
              }}
            >
              <div
                className="font-display"
                style={{
                  fontWeight: 700,
                  fontSize: "10.5px",
                  textTransform: "uppercase",
                  letterSpacing: "0.16em",
                  color: "var(--fg-2)",
                }}
              >
                Each Pillar
              </div>
              <div
                style={{
                  fontStyle: "italic",
                  fontSize: "13px",
                  color: "var(--fg-2)",
                  marginTop: "8px",
                }}
              >
                opens with — its pillar map
              </div>

              {/* Inner box — EACH PAGE */}
              <div
                style={{
                  border: "1px solid var(--fg-1)",
                  padding: "18px",
                  background: "rgba(15, 23, 42, 0.04)",
                  marginTop: "14px",
                }}
              >
                <div
                  className="font-display"
                  style={{
                    fontWeight: 700,
                    fontSize: "10.5px",
                    textTransform: "uppercase",
                    letterSpacing: "0.16em",
                    color: "var(--fg-1)",
                  }}
                >
                  Each Page
                </div>
                <div
                  style={{
                    fontStyle: "italic",
                    fontSize: "13px",
                    color: "var(--fg-2)",
                    marginTop: "8px",
                  }}
                >
                  opens with — its hero diagram
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .fractal-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }
        @media (max-width: 768px) {
          .fractal-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
      `}</style>
    </section>
  );
}
