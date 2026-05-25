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
  subtitle: string;
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
    href: "/ai-map",
    dropdown: [
      { label: "The Groundwork", subtitle: "Data, infra, and governance foundations", href: "/groundwork" },
      { label: "The Operating Model", subtitle: "Teams, process, and organisational design", href: "/operating-model" },
      { label: "The Craft", subtitle: "Prompt engineering, evaluation, and deployment", href: "/craft" },
      { label: "The Spine", subtitle: "All 18 concepts on one page", href: "/spine" },
      { label: "Reusables", subtitle: "Curated reference repos for every concept", href: "/reusables" },
    ],
  },
  { label: "Blog", href: "/notes" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
];

function NavDropdown({
  item,
  isActive,
  pathname,
}: {
  item: NavItem;
  isActive: boolean;
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      className="nav-dropdown-wrap"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
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
          className={`nav-chevron ${open ? "nav-chevron-open" : ""}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </Link>
      {/* Hover bridge */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            height: "16px",
          }}
        />
      )}
      <div className={`nav-dropdown ${open ? "nav-dropdown-open" : ""}`}>
        {item.dropdown!.map((sub) => {
          const subActive = pathname.startsWith(sub.href);
          return (
            <Link
              key={sub.href}
              href={sub.href}
              className={`nav-dropdown-item ${subActive ? "nav-dropdown-item-active" : ""}`}
            >
              <span className="nav-dropdown-dot" />
              <span>
                <span className="nav-dropdown-label">{sub.label}</span>
                <span className="nav-dropdown-subtitle">{sub.subtitle}</span>
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

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
                (item.dropdown?.some((d) => pathname.startsWith(d.href)) ?? false);

              if (item.dropdown) {
                return (
                  <NavDropdown
                    key={item.href}
                    item={item}
                    isActive={isActive}
                    pathname={pathname}
                  />
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
        .nav-chevron {
          margin-left: 4px;
          display: inline-block;
          transition: transform 200ms var(--ease-out);
        }
        .nav-chevron-open { transform: rotate(180deg); }
        .nav-dropdown {
          position: absolute;
          top: calc(100% + 12px);
          left: 50%;
          transform: translateX(-50%) scale(0.96);
          width: 300px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          padding: 6px;
          z-index: 60;
          opacity: 0;
          pointer-events: none;
          transform-origin: top center;
          transition: opacity 200ms var(--ease-out), transform 200ms var(--ease-out);
        }
        .nav-dropdown-open {
          opacity: 1;
          transform: translateX(-50%) scale(1);
          pointer-events: auto;
        }
        .nav-dropdown-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 10px 12px;
          border-radius: var(--radius-sm);
          text-decoration: none;
          transition: background 150ms var(--ease-out);
        }
        .nav-dropdown-item:hover {
          background: var(--bg-surface);
        }
        .nav-dropdown-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent);
          flex-shrink: 0;
          margin-top: 7px;
          opacity: 0.3;
          transition: opacity 150ms var(--ease-out);
        }
        .nav-dropdown-item:hover .nav-dropdown-dot,
        .nav-dropdown-item-active .nav-dropdown-dot {
          opacity: 1;
        }
        .nav-dropdown-label {
          display: block;
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 500;
          color: var(--fg-1);
          line-height: 1.3;
        }
        .nav-dropdown-subtitle {
          display: block;
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 400;
          color: var(--fg-3);
          margin-top: 2px;
          line-height: 1.3;
        }
        .nav-dropdown-item-active .nav-dropdown-label {
          font-weight: 600;
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
