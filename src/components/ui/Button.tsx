"use client";

import * as React from "react";

export type ButtonVariant = "primary" | "outline" | "ghost" | "midnight" | "link";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /**
   * When true, renders children directly as the interactive element.
   * Useful for wrapping Next.js <Link> or anchor tags.
   */
  asChild?: boolean;
  className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: [
    "bg-violet-base text-white",
    "hover:bg-violet-hover",
    "active:bg-violet-pressed",
    "shadow-accent",
    "focus-visible:ring-3 focus-visible:ring-violet-tint focus-visible:outline-none",
    "disabled:opacity-50 disabled:pointer-events-none",
  ].join(" "),

  outline: [
    "bg-bg-card text-midnight-base border border-border",
    "hover:border-midnight-muted",
    "active:bg-surface",
    "focus-visible:ring-3 focus-visible:ring-violet-tint focus-visible:outline-none",
    "disabled:opacity-50 disabled:pointer-events-none",
  ].join(" "),

  ghost: [
    "bg-transparent text-midnight-base",
    "hover:bg-surface",
    "active:bg-border",
    "focus-visible:ring-3 focus-visible:ring-violet-tint focus-visible:outline-none",
    "disabled:opacity-50 disabled:pointer-events-none",
  ].join(" "),

  midnight: [
    "bg-midnight-base text-white",
    "hover:bg-midnight-light",
    "active:bg-midnight-muted",
    "focus-visible:ring-3 focus-visible:ring-violet-tint focus-visible:outline-none",
    "disabled:opacity-50 disabled:pointer-events-none",
  ].join(" "),

  link: [
    "bg-transparent text-violet-base underline-offset-4",
    "hover:underline hover:text-violet-hover",
    "active:text-violet-pressed",
    "focus-visible:ring-2 focus-visible:ring-violet-tint focus-visible:outline-none focus-visible:rounded-xs",
    "disabled:opacity-50 disabled:pointer-events-none",
    "px-0",
  ].join(" "),
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-small font-semibold gap-1.5",
  md: "px-6 py-3 text-body font-semibold gap-2",
  lg: "px-8 py-4 text-lead font-semibold gap-2",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      className = "",
      children,
      asChild: _asChild,
      disabled,
      type = "button",
      ...rest
    },
    ref
  ) => {
    const base = [
      "inline-flex items-center justify-center",
      "rounded-pill",
      "font-body",
      "transition-all duration-base ease-standard",
      "cursor-pointer",
      "select-none",
      "whitespace-nowrap",
    ].join(" ");

    const classes = [
      base,
      variantClasses[variant],
      variant !== "link" ? sizeClasses[size] : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={classes}
        aria-disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
