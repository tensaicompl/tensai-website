import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: "Content",
    links: [
      { label: "Spine", href: "/spine" },
      { label: "The Groundwork", href: "/groundwork" },
      { label: "The Operating Model", href: "/operating-model" },
      { label: "The Craft", href: "/craft" },
    ],
  },
  {
    heading: "Notes",
    links: [
      { label: "Latest", href: "/notes" },
      { label: "Engineering", href: "/notes/engineering" },
      { label: "Product", href: "/notes/product" },
      { label: "Industry", href: "/notes/industry" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

const eyebrowStyle: React.CSSProperties = {
  fontSize: "11px",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.14em",
  color: "var(--fg-sub-dark)",
  marginBottom: "16px",
  fontFamily: "var(--font-body)",
};


export function SiteFooter() {
  return (
    <footer
      style={{
        backgroundColor: "var(--color-midnight)",
        paddingTop: "72px",
        paddingBottom: "36px",
      }}
    >
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Top section — 5-column grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1fr 1fr",
            gap: "48px",
          }}
          className="footer-grid"
        >
          {/* Column 1: Brand */}
          <div>
            <Link
              href="/"
              aria-label="TensAI home"
              style={{
                display: "inline-flex",
                alignItems: "center",
                textDecoration: "none",
                marginBottom: "16px",
              }}
            >
              <img
                src="/logos/icon-black.svg"
                alt="TensAI"
                style={{
                  height: "40px",
                  width: "auto",
                  display: "block",
                  filter: "brightness(0) invert(1)",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "20px",
                  letterSpacing: "-0.02em",
                  color: "var(--fg-on-dark)",
                  marginLeft: "-4px",
                  lineHeight: 1,
                }}
              >
                TensAI
              </span>
            </Link>
            <p
              style={{
                fontSize: "14px",
                color: "var(--fg-sub-dark)",
                margin: 0,
                fontFamily: "var(--font-body)",
                lineHeight: 1.5,
              }}
            >
              Driving innovation.
            </p>
          </div>

          {/* Columns 2–5: Link groups */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <p style={eyebrowStyle}>{col.heading}</p>
              <nav aria-label={col.heading}>
                {col.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="footer-link"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid var(--color-midnight-muted)",
            marginTop: "60px",
            paddingTop: "28px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <span
            style={{
              fontSize: "13px",
              color: "var(--fg-sub-dark)",
              fontFamily: "var(--font-body)",
            }}
          >
            &copy; 2026 TensAI Inc.
          </span>

          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            {[
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="footer-bottom-link"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive grid styles */}
      <style>{`
        .footer-link {
          font-size: 14px;
          color: var(--fg-on-dark);
          text-decoration: none;
          display: block;
          margin-bottom: 10px;
          transition: color 120ms var(--ease-out);
          font-family: var(--font-body);
        }
        .footer-link:hover { color: #ffffff; }
        .footer-bottom-link {
          font-size: 13px;
          color: var(--fg-sub-dark);
          text-decoration: none;
          font-family: var(--font-body);
          transition: color 120ms var(--ease-out);
        }
        .footer-bottom-link:hover { color: var(--fg-on-dark); }
        .footer-grid {
          grid-template-columns: 1.4fr 1fr 1fr 1fr 1fr;
        }
        @media (max-width: 1023px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 599px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
