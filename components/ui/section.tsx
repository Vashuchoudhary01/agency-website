import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  container?: boolean;
  narrow?: boolean;
}

export function Section({
  id,
  className,
  container = true,
  narrow = false,
  children,
  ...props
}: SectionProps) {
  return (
    <section id={id} className={cn("py-24 lg:py-32", className)} {...props}>
      {container ? (
        <div
          className={cn(
            "mx-auto px-6 lg:px-8",
            narrow ? "max-w-4xl" : "max-w-7xl"
          )}
        >
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-16 lg:mb-20",
        centered && "text-center",
        className
      )}
    >
      {eyebrow && (
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-50 border border-primary-100 px-4 py-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-primary-600" />
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-600">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed text-gray-500",
            centered && "mx-auto max-w-2xl"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
