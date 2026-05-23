import * as React from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", type = "text", ...rest }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={[
          /* Layout */
          "block w-full",
          "px-4 py-3",
          /* Typography */
          "font-body text-body text-midnight-base",
          "placeholder:text-gray-light",
          /* Appearance */
          "bg-bg-card",
          "border border-border",
          "rounded-sm",          // 8px
          "shadow-xs",
          /* Focus ring — 3px violet at 20% opacity + 1px violet outline */
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
      />
    );
  }
);

Input.displayName = "Input";
