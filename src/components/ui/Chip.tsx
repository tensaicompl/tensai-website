"use client";

import * as React from "react";

export interface ChipProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export function Chip({
  children,
  active = false,
  onClick,
  className = "",
}: ChipProps) {
  const base = [
    "inline-flex items-center justify-center",
    "rounded-pill",
    "px-4 py-1.5",
    "text-small font-medium font-body",
    "leading-none",
    "transition-all duration-base ease-standard",
    "cursor-pointer",
    "select-none",
    "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-violet-tint",
  ].join(" ");

  const stateClasses = active
    ? "bg-midnight-base text-white border border-midnight-base"
    : "bg-transparent text-gray-base border border-border hover:border-midnight-muted hover:text-midnight-base";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={active}
      onClick={onClick}
      className={[base, stateClasses, className].filter(Boolean).join(" ")}
    >
      {children}
    </button>
  );
}
