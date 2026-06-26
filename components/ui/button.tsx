"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "gradient" | "outline";
type ButtonSize = "sm" | "md" | "lg" | "xl";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "bg-white text-gray-900 border border-gray-200 hover:border-blue-600/30 hover:bg-gray-50 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0",
  ghost:
    "text-gray-600 hover:text-gray-900 hover:bg-gray-100",
  gradient:
    "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 hover:opacity-90",
  outline:
    "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-base",
  xl: "h-14 px-10 text-base",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
