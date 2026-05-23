import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MapScrollSequence } from "@/components/marketing/MapScrollSequence";
import { FractalRule } from "@/components/marketing/FractalRule";

const PILLARS = [
  {
    numeral: "I",
    tag: "For those who decide",
    name: "The Groundwork",
    description:
      "The enterprise framework for AI. Operating model, security, governance, FinOps.",
    href: "/groundwork",
  },
  {
    numeral: "II",
    tag: "For those who scale it",
    name: "The Operating Model",
    description:
      "How an organisation actually runs agents. Skills, catalogs, enablement.",
    href: "/operating-model",
  },
  {
    numeral: "III",
    tag: "For those who build it",
    name: "The Craft",
    description:
      "The practitioner's complete, concept-level playbook of AI today.",
    href: "/craft",
  },
];

export default function Home() {
  return (
    <>
      <SiteNav />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden" style={{ padding: "64px 24px 96px" }}>
          <div className="hero-grid mx-auto grid max-w-[1200px] items-center gap-16" style={{ gridTemplateColumns: "1.1fr 1fr" }}>
            <div>
              <div
                className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5"
                style={{
                  background: "var(--bg-surface)",
                  borderColor: "var(--border)",
                  color: "var(--fg-2)",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent)" }} />
                THE ENTERPRISE AI BLUEPRINT
              </div>

              <h1
                className="font-display"
                style={{
                  marginTop: "24px",
                  fontSize: "clamp(48px, 6vw, 76px)",
                  fontWeight: 700,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.05,
                  color: "var(--fg-1)",
                }}
              >
                One system.
                <br />
                Whole before parts.
              </h1>

              <p
                style={{
                  marginTop: "24px",
                  fontSize: "20px",
                  lineHeight: 1.55,
                  color: "var(--fg-2)",
                  maxWidth: "520px",
                }}
              >
                TensAI maps the territory of enterprise AI — from commodity
                token sourcing to governed, compounding value. One taxonomy.
                Three pillars. Every concept connected.
              </p>

              <div className="mt-9 flex items-center gap-3">
                <Button variant="primary" size="lg">
                  Explore the Spine
                </Button>
                <Button variant="outline" size="lg">
                  Read the Craft
                </Button>
              </div>

              <div
                className="mt-7 flex items-center gap-3"
                style={{ fontSize: "13px", color: "var(--fg-3)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                18 canonical concepts &nbsp;·&nbsp; 3 pillars &nbsp;·&nbsp; Vendor-neutral
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div
                className="absolute inset-0"
                style={{
                  background: "radial-gradient(circle at center, rgba(109,40,217,0.06), transparent 60%)",
                }}
              />
              <img
                src="/logos/icon-black.svg"
                alt=""
                className="relative"
                style={{
                  width: "min(520px, 100%)",
                  height: "auto",
                  objectFit: "contain",
                  animation: "ensoIn 1.2s var(--ease-out) both",
                }}
              />
            </div>
          </div>

          <style>{`
            @keyframes ensoIn {
              0% { opacity: 0; transform: scale(0.92) rotate(-6deg); }
              100% { opacity: 1; transform: scale(1) rotate(0); }
            }
            @media (max-width: 768px) {
              .hero-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </section>

        <MapScrollSequence />

        <FractalRule />

        {/* Pillar Gateways */}
        <section style={{ padding: "96px 24px" }}>
          <div className="mx-auto max-w-[1200px]">
            <Eyebrow>THREE PILLARS, ONE ASCENT</Eyebrow>
            <h2
              className="font-display"
              style={{
                marginTop: "12px",
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Lay the groundwork. Install the model. Master the craft.
            </h2>

            <div
              className="mt-14 grid gap-5"
              style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}
            >
              {PILLARS.map((p) => (
                <a key={p.numeral} href={p.href} className="no-underline">
                  <Card className="h-full">
                    <div
                      className="font-display"
                      style={{
                        fontWeight: 800,
                        fontSize: "48px",
                        lineHeight: 0.9,
                        color: "var(--color-surface)",
                        WebkitTextStroke: "1.2px var(--color-midnight)",
                      }}
                    >
                      {p.numeral}
                    </div>
                    <div
                      className="mt-4"
                      style={{
                        fontSize: "11px",
                        fontWeight: 600,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "var(--fg-3)",
                      }}
                    >
                      {p.tag}
                    </div>
                    <h3
                      className="font-display mt-2"
                      style={{ fontSize: "22px", fontWeight: 700, color: "var(--fg-1)" }}
                    >
                      {p.name}
                    </h3>
                    <p className="mt-2" style={{ fontSize: "14px", color: "var(--fg-2)", lineHeight: 1.6 }}>
                      {p.description}
                    </p>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="relative overflow-hidden"
          style={{ background: "var(--bg-darker)", color: "var(--fg-on-dark)", padding: "120px 24px" }}
        >
          <img
            src="/logos/icon-black.svg"
            alt=""
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: "760px",
              opacity: 0.16,
              pointerEvents: "none",
              filter: "invert(1)",
            }}
          />
          <div className="relative mx-auto max-w-[760px] text-center">
            <Eyebrow className="text-[var(--fg-sub-dark)]">DRIVING INNOVATION</Eyebrow>
            <h2
              className="font-display"
              style={{
                marginTop: "14px",
                fontSize: "clamp(32px, 5vw, 60px)",
                fontWeight: 700,
                color: "var(--fg-on-dark)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              The territory, mapped. The craft, codified.
            </h2>
            <p className="mt-5" style={{ fontSize: "20px", color: "var(--fg-sub-dark)", lineHeight: 1.55 }}>
              Explore 18 canonical concepts across three altitudes — from
              enterprise governance to practitioner playbook.
            </p>
            <div className="mt-9 flex items-center justify-center gap-3">
              <Button variant="primary" size="lg">
                Explore the Spine
              </Button>
              <button
                className="inline-flex items-center justify-center font-semibold"
                style={{
                  background: "transparent",
                  color: "var(--fg-on-dark)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  padding: "16px 30px",
                  borderRadius: "999px",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                Read the Groundwork
              </button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
