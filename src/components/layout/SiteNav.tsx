"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoPaths } from "@/components/marketing/logo-paths";

interface NavLink {
  label: string;
  href: string;
}

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

const NAV_ITEMS: NavItem[] = [
  {
    label: "The AI Map",
    href: "/",
    dropdown: [
      { label: "The Groundwork", href: "/groundwork" },
      { label: "The Operating Model", href: "/operating-model" },
      { label: "The Craft", href: "/craft" },
      { label: "The Spine", href: "/spine" },
    ],
  },
  { label: "Blog", href: "/notes" },
  { label: "Resources", href: "/resources" },
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
            maxWidth: "1440px",
            margin: "0 auto",
            padding: "0 16px",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "auto 1fr auto",
            alignItems: "center",
            height: "100%",
          }}
        >
          {/* Logo lockup — proportions match the intro animation scaled down */}
          <Link
            href="/"
            aria-label="TensAI home"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <svg
              data-nav-icon
              viewBox="0 0 1500 1500"
              aria-hidden="true"
              style={{
                height: "50px",
                width: "50px",
                display: "block",
                margin: "-6px -10px -10px -10px",
                fill: "var(--color-bg-black)",
              }}
            >
              <LogoPaths />
            </svg>
            <span
              data-nav-divider
              style={{
                width: "1px",
                height: "24px",
                background: "var(--border)",
                flexShrink: 0,
              }}
            />
            <span
              data-nav-wordmark
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "22px",
                letterSpacing: "-0.02em",
                color: "var(--color-midnight)",
                lineHeight: 1,
              }}
            >
              TensAI
            </span>
          </Link>

          {/* Desktop nav links — centered */}
          <div
            aria-label="Site links"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "28px",
            }}
            className="hidden-mobile"
          >
            {NAV_ITEMS.map((item) => {
              const isActive =
                pathname === item.href ||
                item.dropdown?.some((d) => pathname.startsWith(d.href));

              if (item.dropdown) {
                return (
                  <div key={item.href} className="nav-dropdown-wrap">
                    <Link
                      href={item.href}
                      className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        style={{ marginLeft: "4px", display: "inline" }}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </Link>
                    <div className="nav-dropdown">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="nav-dropdown-item"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Sign in — right side */}
          <div style={{ display: "flex", justifyContent: "flex-end" }} className="hidden-mobile">
            <button
              className="nav-signin"
              style={{
                background: "var(--accent)",
                border: "none",
                borderRadius: "var(--radius-pill)",
                padding: "7px 18px",
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                fontWeight: 600,
                color: "#fff",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(109, 40, 217, 0.18)",
                transition: "background var(--dur-fast) var(--ease-out)",
              }}
            >
              Sign in
            </button>
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
            {NAV_ITEMS.flatMap((item) => {
              const links = [item, ...(item.dropdown || [])];
              return links.map((link) => {
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
                      paddingLeft: item.dropdown && link !== item ? "24px" : "8px",
                      borderRadius: "8px",
                      transition: "background-color 120ms var(--ease-out)",
                      display: "block",
                    }}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                );
              });
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
        .nav-signin:hover { background: var(--accent-hover); }
        .nav-dropdown-wrap { position: relative; }
        .nav-dropdown {
          display: none;
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          padding-top: 8px;
          z-index: 60;
        }
        .nav-dropdown-wrap:hover .nav-dropdown { display: block; }
        .nav-dropdown-item {
          display: block;
          white-space: nowrap;
          padding: 10px 20px;
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 500;
          color: var(--fg-2);
          text-decoration: none;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-top: none;
          transition: color 120ms var(--ease-out), background 120ms var(--ease-out);
        }
        .nav-dropdown-item:first-child {
          border-top: 1px solid var(--border);
          border-radius: 8px 8px 0 0;
        }
        .nav-dropdown-item:last-child {
          border-radius: 0 0 8px 8px;
        }
        .nav-dropdown-item:hover {
          color: var(--fg-1);
          background: var(--bg-surface);
        }
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
