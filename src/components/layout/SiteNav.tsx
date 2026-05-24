"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "The Map", href: "/" },
  { label: "Spine", href: "/spine" },
  { label: "Groundwork", href: "/groundwork" },
  { label: "Operating Model", href: "/operating-model" },
  { label: "Craft", href: "/craft" },
  { label: "Notes", href: "/notes" },
  { label: "About", href: "/about" },
];

export function SiteNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const prevPathname = useRef(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    requestAnimationFrame(handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      setMobileOpen(false);
    }
  }, [pathname]);

  // Trap focus / close on Escape
  useEffect(() => {
    if (!mobileOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [mobileOpen]);

  return (
    <>
      <nav
        aria-label="Main navigation"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          height: "72px",
          display: "flex",
          alignItems: "center",
          backgroundColor: scrolled ? "rgba(250,250,250,0.82)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
          transition:
            "background-color 200ms var(--ease-standard), border-color 200ms var(--ease-standard), backdrop-filter 200ms var(--ease-standard)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          {/* Logo lockup */}
          <Link
            href="/"
            aria-label="TensAI home"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <img
              src="/logos/icon-black.svg"
              alt="TensAI"
              style={{
                height: "72px",
                width: "72px",
                display: "block",
                margin: "-10px -14px -14px -14px",
                objectFit: "contain",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "22px",
                letterSpacing: "-0.02em",
                color: "var(--color-midnight)",
                marginLeft: "-6px",
                lineHeight: 1,
              }}
            >
              TensAI
            </span>
          </Link>

          {/* Desktop nav links */}
          <div
            aria-label="Site links"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
            }}
            className="hidden-mobile"
          >
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile hamburger button */}
          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((prev) => !prev)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              color: "var(--fg-1)",
            }}
            className="show-mobile"
          >
            {mobileOpen ? (
              /* X icon */
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              /* Hamburger icon */
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          ref={mobileMenuRef}
          role="dialog"
          aria-label="Mobile navigation"
          style={{
            position: "fixed",
            top: "72px",
            left: 0,
            right: 0,
            zIndex: 49,
            background: "var(--bg-card)",
            borderBottom: "1px solid var(--border)",
            boxShadow: "var(--shadow-md)",
            padding: "16px 24px 24px",
          }}
          className="show-mobile"
        >
          <nav style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "16px",
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? "var(--fg-1)" : "var(--fg-2)",
                    textDecoration: "none",
                    padding: "12px 8px",
                    borderRadius: "8px",
                    transition: "background-color 120ms var(--ease-out)",
                    display: "block",
                  }}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}

      {/* Responsive utility styles */}
      <style>{`
        .nav-link {
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 500;
          color: var(--fg-2);
          text-decoration: none;
          transition: color 120ms var(--ease-out);
          white-space: nowrap;
        }
        .nav-link:hover { color: var(--fg-1); }
        .nav-link-active { font-weight: 600; color: var(--fg-1); }
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
