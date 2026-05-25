import Link from "next/link";
import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HomeWithIntro } from "@/components/marketing/HomeWithIntro";

const STATS = [
  { value: "18", label: "Canonical concepts" },
  { value: "3", label: "Pillars" },
  { value: "59", label: "Reference repos" },
  { value: "27", label: "Interactive diagrams" },
];

const NOTES = [
  {
    title: "Harness Engineering Is the New Senior Discipline",
    excerpt: "The model is frozen. Everything that matters — memory, validation, tool use, permissioning — lives in the harness.",
    date: "20 May 2026",
    href: "/notes/harness-engineering-discipline",
  },
  {
    title: "Build vs Buy vs Boost — the 2026 Decision Framework",
    excerpt: "Forty-two percent of companies abandoned most of their AI initiatives in 2025. The pattern that survived: Boost.",
    date: "15 May 2026",
    href: "/notes/build-buy-boost",
  },
  {
    title: "Context Engineering Has Replaced Prompt Engineering",
    excerpt: "Karpathy named it. Schmid formalised the four operations. Quality, not presence, is the variable.",
    date: "10 May 2026",
    href: "/notes/context-engineering-replaces-prompts",
  },
];

const TESTIMONIALS = [
  {
    quote: "TensAI gave our leadership team a shared vocabulary for AI architecture in a single afternoon. We stopped arguing about tools and started designing systems.",
    name: "Chief Technology Officer",
    company: "European Financial Services",
  },
  {
    quote: "The Spine is the clearest map of enterprise AI I have seen. We use it as the reference frame for every new initiative.",
    name: "VP of Engineering",
    company: "Global SaaS Platform",
  },
  {
    quote: "We were stuck at Stage 2 for eighteen months. The Operating Model pages showed us exactly which three things were blocking the transition.",
    name: "Head of AI Centre of Excellence",
    company: "Industrial Manufacturer",
  },
];

export default function Home() {
  return (
    <HomeWithIntro>
      <SiteNav />

      <main>
        {/* ── Hero ─────────────────────────────────────────── */}
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
                  href="/ai-map"
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
                  Open the AI Map
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
                className="relative enso-icon"
                style={{
                  width: "min(320px, 28vw)",
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

        {/* ── Stats strip ──────────────────────────────────── */}
        <section style={{ padding: "0 16px 96px" }}>
          <div
            style={{
              maxWidth: "1440px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1px",
              background: "var(--border)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-md)",
              overflow: "hidden",
            }}
          >
            {STATS.map((s) => (
              <div
                key={s.label}
                style={{
                  background: "var(--bg-page)",
                  padding: "32px 24px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "40px",
                    fontWeight: 800,
                    color: "var(--fg-1)",
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "14px",
                    color: "var(--fg-3)",
                    marginTop: "8px",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <style>{`
            @media (max-width: 640px) {
              .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
            }
          `}</style>
        </section>

        {/* ── What TensAI covers ───────────────────────────── */}
        <section style={{ padding: "96px 16px", background: "var(--bg-surface)" }}>
          <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
            <Eyebrow>WHAT WE COVER</Eyebrow>
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
              Three pillars. One coherent system.
            </h2>
            <p
              style={{
                marginTop: "16px",
                fontSize: "18px",
                lineHeight: 1.55,
                color: "var(--fg-2)",
                maxWidth: "640px",
              }}
            >
              The Groundwork sets the operating decisions. The Operating Model defines who does what. The Craft is the practitioner playbook. Together they form the complete architecture of enterprise AI.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "24px",
                marginTop: "48px",
              }}
              className="pillars-grid"
            >
              {[
                { num: "I", name: "The Groundwork", desc: "Operating model, security, governance, FinOps. The decisions that determine whether AI scales or stalls.", href: "/groundwork", tag: "For those who decide" },
                { num: "II", name: "The Operating Model", desc: "Skills, catalogs, power users, enablement. The layer between strategy and code.", href: "/operating-model", tag: "For those who organise" },
                { num: "III", name: "The Craft", desc: "Harness engineering, RAG, multi-agent, steering, evals. The practitioner's complete playbook.", href: "/craft", tag: "For those who build" },
              ].map((p) => (
                <Link
                  key={p.num}
                  href={p.href}
                  className="pillar-home-card"
                  style={{
                    display: "block",
                    padding: "32px",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-lg)",
                    textDecoration: "none",
                    color: "inherit",
                    transition: "box-shadow 150ms var(--ease-out), border-color 150ms var(--ease-out)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "28px", color: "var(--color-surface)", WebkitTextStroke: "1px var(--color-midnight)", lineHeight: 1 }}>{p.num}</span>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "18px", color: "var(--fg-1)" }}>{p.name}</span>
                  </div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--fg-3)", marginBottom: "12px" }}>{p.tag}</div>
                  <p style={{ fontSize: "14px", lineHeight: 1.55, color: "var(--fg-2)" }}>{p.desc}</p>
                </Link>
              ))}
            </div>
          </div>

          <style>{`
            .pillar-home-card:hover { box-shadow: var(--shadow-md); border-color: var(--color-midnight-muted); }
            @media (max-width: 768px) { .pillars-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* ── Testimonials ─────────────────────────────────── */}
        <section style={{ padding: "96px 16px" }}>
          <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <Eyebrow className="justify-center">WHAT LEADERS SAY</Eyebrow>
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
                Built for the conversation that matters.
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "24px",
              }}
              className="testimonials-grid"
            >
              {TESTIMONIALS.map((t, i) => (
                <div
                  key={i}
                  style={{
                    padding: "28px",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-lg)",
                    background: "var(--bg-card)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: 1.6,
                      color: "var(--fg-2)",
                      fontStyle: "italic",
                    }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div style={{ marginTop: "20px", borderTop: "1px solid var(--border)", paddingTop: "16px" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "14px", color: "var(--fg-1)" }}>{t.name}</div>
                    <div style={{ fontSize: "13px", color: "var(--fg-3)", marginTop: "2px" }}>{t.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <style>{`
            @media (max-width: 768px) { .testimonials-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* ── Latest from the blog ─────────────────────────── */}
        <section style={{ padding: "96px 16px", background: "var(--bg-surface)" }}>
          <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "40px" }}>
              <div>
                <Eyebrow>LATEST NOTES</Eyebrow>
                <h2
                  className="font-display"
                  style={{
                    marginTop: "12px",
                    fontSize: "clamp(28px, 4vw, 36px)",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                  }}
                >
                  From the field.
                </h2>
              </div>
              <Link
                href="/notes"
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "var(--fg-1)",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                All notes
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </Link>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "24px",
              }}
              className="notes-grid"
            >
              {NOTES.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="note-home-card"
                  style={{
                    display: "block",
                    padding: "28px",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-lg)",
                    textDecoration: "none",
                    color: "inherit",
                    transition: "box-shadow 150ms var(--ease-out), border-color 150ms var(--ease-out)",
                  }}
                >
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--fg-3)", letterSpacing: "0.04em" }}>{n.date}</div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "17px", color: "var(--fg-1)", marginTop: "10px", lineHeight: 1.3, letterSpacing: "-0.01em" }}>{n.title}</div>
                  <p style={{ fontSize: "14px", lineHeight: 1.55, color: "var(--fg-2)", marginTop: "10px" }}>{n.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>

          <style>{`
            .note-home-card:hover { box-shadow: var(--shadow-md); border-color: var(--color-midnight-muted); }
            @media (max-width: 768px) { .notes-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* ── CTA banner ───────────────────────────────────── */}
        <section style={{ padding: "96px 16px" }}>
          <div
            style={{
              maxWidth: "960px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                color: "var(--fg-1)",
              }}
            >
              Start with the whole system.
            </h2>
            <p
              style={{
                marginTop: "16px",
                fontSize: "18px",
                lineHeight: 1.55,
                color: "var(--fg-2)",
                maxWidth: "560px",
                margin: "16px auto 0",
              }}
            >
              Eighteen concepts. Three pillars. One spine. See the complete architecture of enterprise AI before you descend into the detail.
            </p>
            <div style={{ marginTop: "32px", display: "flex", justifyContent: "center", gap: "12px" }}>
              <Link
                href="/ai-map"
                className="inline-flex items-center justify-center font-semibold"
                style={{
                  background: "var(--accent)",
                  color: "#fff",
                  padding: "14px 28px",
                  borderRadius: "var(--radius-pill)",
                  fontSize: "15px",
                  boxShadow: "var(--shadow-accent)",
                  textDecoration: "none",
                  transition: "background var(--dur-fast) var(--ease-out)",
                }}
              >
                Open the AI Map
              </Link>
              <Link
                href="/reusables"
                className="inline-flex items-center justify-center font-semibold"
                style={{
                  background: "var(--bg-card)",
                  color: "var(--fg-1)",
                  border: "1px solid var(--border)",
                  padding: "13px 27px",
                  borderRadius: "var(--radius-pill)",
                  fontSize: "15px",
                  textDecoration: "none",
                  transition: "border-color var(--dur-fast) var(--ease-out)",
                }}
              >
                Browse Reusables
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </HomeWithIntro>
  );
}
