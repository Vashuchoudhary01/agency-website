import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "blue" | "purple" | "green" | "outline";
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  const variants = {
    default: "bg-gray-100 text-gray-700",
    blue: "bg-blue-50 text-blue-700 border border-blue-100",
    purple: "bg-violet-50 text-violet-700 border border-violet-100",
    green: "bg-emerald-50 text-emerald-700 border border-emerald-100",
    outline: "border border-gray-200 text-gray-600",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
