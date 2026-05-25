import Link from "next/link";
import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TheIndex } from "@/components/marketing/TheIndex";

export const metadata = {
  title: "The AI Map — TensAI",
  description:
    "Enterprise AI drawn as one system. 18 canonical concepts, three pillars, one spine.",
};

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

export default function AiMapPage() {
  return (
    <>
      <SiteNav />

      <main>
        {/* Hero */}
        <section style={{ padding: "96px 16px 48px" }}>
          <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
            <Eyebrow>THE AI MAP</Eyebrow>
            <h1
              className="font-display"
              style={{
                marginTop: "12px",
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
                color: "var(--fg-1)",
              }}
            >
              Enterprise AI, drawn as one system.
            </h1>
            <p
              style={{
                maxWidth: "680px",
                color: "var(--fg-2)",
                fontSize: "20px",
                lineHeight: 1.55,
                marginTop: "16px",
              }}
            >
              One system. It converts sourced, commodity intelligence into
              governed, compounding value. Commodity inputs at the floor, three
              pillars in elevation, the spine threading through them, governance
              framing the whole.
            </p>
          </div>
        </section>

        {/* The Map */}
        <section style={{ padding: "0 16px 96px" }}>
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
    </>
  );
}
