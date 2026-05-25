import Link from "next/link";
import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TheIndex } from "@/components/marketing/TheIndex";
import { HomeWithIntro } from "@/components/marketing/HomeWithIntro";

const GATEWAYS = [
  {
    numeral: "I",
    name: "The Groundwork",
    description:
      "The enterprise framework for AI — operating model, security, governance, FinOps. Written for sharp people, not for a board deck.",
    href: "/groundwork",
  },
  {
    numeral: "II",
    name: "The Operating Model",
    description:
      "How an organisation actually runs agents — skills, catalogs, power users, enablement.",
    href: "/operating-model",
  },
  {
    numeral: "III",
    name: "The Craft",
    description:
      "The practitioner's complete, concept-level playbook of AI today — novelties included.",
    href: "/craft",
  },
];

export default function Home() {
  return (
    <HomeWithIntro>
      <SiteNav />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden" style={{ padding: "64px 16px 96px" }}>
          <div
            className="hero-grid mx-auto grid max-w-[1440px] items-center gap-16"
            style={{ gridTemplateColumns: "1.1fr 1fr" }}
          >
            <div>
              <Eyebrow>A FIELD GUIDE TO ENTERPRISE AI</Eyebrow>

              <h1
                className="font-display"
                style={{
                  marginTop: "24px",
                  fontSize: "clamp(40px, 5vw, 64px)",
                  fontWeight: 700,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.05,
                  color: "var(--fg-1)",
                }}
              >
                Building AI properly is an architecture problem.
              </h1>

              <p
                style={{
                  marginTop: "24px",
                  fontSize: "20px",
                  lineHeight: 1.55,
                  color: "var(--fg-2)",
                  maxWidth: "540px",
                }}
              >
                Most enterprises are not short on models. They are short on the
                structure that turns models into something that compounds. TensAI
                maps that structure — the whole of it, on one page — before the
                descent into detail.
              </p>

              <div
                style={{
                  marginTop: "20px",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "var(--fs-small)",
                  letterSpacing: "var(--tracking-wide)",
                  color: "var(--fg-3)",
                }}
              >
                Driving innovation.
              </div>

              <div className="mt-8 flex items-center gap-3">
                <Link
                  href="/spine"
                  className="inline-flex items-center justify-center font-semibold"
                  style={{
                    background: "var(--accent)",
                    color: "#fff",
                    padding: "14px 26px",
                    borderRadius: "var(--radius-pill)",
                    fontSize: "15px",
                    boxShadow: "var(--shadow-accent)",
                    textDecoration: "none",
                    transition: "background var(--dur-fast) var(--ease-out)",
                  }}
                >
                  Open the Spine
                </Link>
                <Link
                  href="/craft"
                  className="inline-flex items-center justify-center font-semibold"
                  style={{
                    background: "var(--bg-card)",
                    color: "var(--fg-1)",
                    border: "1px solid var(--border)",
                    padding: "13px 25px",
                    borderRadius: "var(--radius-pill)",
                    fontSize: "15px",
                    textDecoration: "none",
                    transition: "border-color var(--dur-fast) var(--ease-out)",
                  }}
                >
                  Read the Craft
                </Link>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <img
                src="/logos/icon-black-cropped.svg"
                alt=""
                className="relative"
                style={{
                  width: "min(260px, 50%)",
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

        {/* The Map */}
        <section style={{ padding: "96px 16px" }}>
          <div
            style={{
              maxWidth: "1440px",
              margin: "0 auto",
              textAlign: "center",
              marginBottom: "64px",
            }}
          >
            <Eyebrow className="justify-center">THE WHOLE SYSTEM</Eyebrow>
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
              Enterprise AI, drawn as one system.
            </h2>
            <p
              style={{
                marginTop: "16px",
                fontSize: "20px",
                lineHeight: 1.55,
                color: "var(--fg-2)",
                maxWidth: "680px",
                margin: "16px auto 0",
              }}
            >
              One system. It converts sourced, commodity intelligence into
              governed, compounding value. Commodity inputs at the floor, three
              pillars in elevation, the spine threading through them, governance
              framing the whole.
            </p>
          </div>

          <TheIndex />
        </section>

        {/* Fractal Rule */}
        <section style={{ padding: "96px 16px" }}>
          <div
            className="fractal-grid"
            style={{
              maxWidth: "1440px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "48px",
              alignItems: "center",
            }}
          >
            <div>
              <Eyebrow>HOW TO READ THIS SITE</Eyebrow>
              <p
                className="font-display"
                style={{
                  marginTop: "18px",
                  fontSize: "clamp(24px, 3vw, 36px)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.15,
                  color: "var(--fg-1)",
                }}
              >
                Whole before parts.
                <br />
                <em style={{ fontStyle: "italic", fontWeight: 400 }}>
                  At every level.
                </em>
              </p>
              <p
                style={{
                  marginTop: "22px",
                  fontSize: "20px",
                  lineHeight: 1.55,
                  color: "var(--fg-2)",
                  maxWidth: "460px",
                }}
              >
                The same shape — frame, pillars, spine — appears at the scale of
                the site, of a pillar, and of a single page. The site opens with
                this map. Each pillar opens with its own map. Each page opens
                with its own diagram. You always see the shape of a thing before
                its detail.
              </p>
            </div>

            <div
              style={{
                border: "1px solid var(--fg-3)",
                padding: "24px",
                position: "relative",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "10.5px",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--fg-3)",
                }}
              >
                Site
              </span>
              <div
                style={{
                  border: "1px solid var(--fg-2)",
                  padding: "24px",
                  marginTop: "14px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "10.5px",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--fg-2)",
                  }}
                >
                  Pillar
                </span>
                <div
                  style={{
                    border: "1px solid var(--fg-1)",
                    padding: "24px",
                    marginTop: "14px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "10.5px",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "var(--fg-1)",
                    }}
                  >
                    Page
                  </span>
                </div>
              </div>
            </div>
          </div>

          <style>{`
            @media (max-width: 768px) {
              .fractal-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </section>

        {/* Pillar Gateways */}
        <section style={{ padding: "96px 16px" }}>
          <div
            style={{
              maxWidth: "1440px",
              margin: "0 auto",
              textAlign: "center",
              marginBottom: "48px",
            }}
          >
            <Eyebrow className="justify-center">PILLARS</Eyebrow>
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
              Enter the field guide.
            </h2>
          </div>

          <div
            className="gateway-grid"
            style={{
              maxWidth: "1440px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
            }}
          >
            {GATEWAYS.map((g) => (
              <Link
                key={g.numeral}
                href={g.href}
                className="gateway-card"
                style={{
                  display: "block",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "28px",
                  textDecoration: "none",
                  color: "var(--fg-1)",
                  transition:
                    "box-shadow var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--fg-3)",
                  }}
                >
                  {g.numeral} · PILLAR
                </div>
                <div
                  className="font-display"
                  style={{
                    fontWeight: 700,
                    fontSize: "22px",
                    marginTop: "12px",
                    letterSpacing: "-0.02em",
                    color: "var(--fg-1)",
                  }}
                >
                  {g.name}
                </div>
                <p
                  style={{
                    marginTop: "8px",
                    fontSize: "14px",
                    lineHeight: 1.55,
                    color: "var(--fg-2)",
                  }}
                >
                  {g.description}
                </p>
                <div
                  style={{
                    marginTop: "20px",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "var(--fg-1)",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  Read pillar
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          <style>{`
            .gateway-card:hover {
              box-shadow: var(--shadow-md);
              border-color: var(--color-midnight-muted);
            }
            @media (max-width: 768px) {
              .gateway-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </section>
      </main>

      <SiteFooter />
    </HomeWithIntro>
  );
}
