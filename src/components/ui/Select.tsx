import * as React from "react";

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  className?: string;
};

/*
 * lucide-react is not present in package.json.
 * The chevron icon is rendered as an inline SVG so there is no
 * runtime dependency. If you later install lucide-react you can
 * swap this for <ChevronDown size={16} />.
 */
function ChevronDownIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className = "", children, ...rest }, ref) => {
    return (
      <div className="relative w-full">
        <select
          ref={ref}
          className={[
            /* Layout */
            "block w-full",
            "px-4 py-3 pr-10",   // extra right-padding for chevron
            /* Typography */
            "font-body text-body text-midnight-base",
            /* Appearance — suppress native arrow */
            "appearance-none",
            "bg-bg-card",
            "border border-border",
            "rounded-sm",         // 8px
            "shadow-xs",
            "cursor-pointer",
            /* Focus ring */
            "outline-none",
            "focus-visible:ring-3 focus-visible:ring-violet-tint",
            "focus-visible:border-violet-base",
            /* Transitions */
            "transition-all duration-base ease-standard",
            /* Disabled */
            "disabled:opacity-50 disabled:cursor-not-allowed",
            className,
          ]
            .filter(Boolean)
            .join(" ")}
          {...rest}
        >
          {children}
        </select>

        {/* Chevron overlay — non-interactive */}
        <span
          className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-base"
          aria-hidden="true"
        >
          <ChevronDownIcon />
        </span>
      </div>
    );
  }
);

Select.displayName = "Select";
