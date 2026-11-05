import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/site";

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>;
}

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "inverse";
  arrow?: boolean;
  className?: string;
};

const buttonStyles = {
  primary: "bg-ink text-canvas hover:bg-ink-soft",
  secondary: "border border-line-strong bg-surface text-ink hover:border-ink/40",
  inverse: "bg-canvas text-ink hover:bg-white",
};

export function ButtonLink({ href, children, variant = "primary", arrow, className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex h-11 items-center justify-center gap-2 rounded-lg px-5 text-[15px] font-medium transition-colors duration-200",
        buttonStyles[variant],
        className,
      )}
    >
      {children}
      {arrow && (
        <ArrowRight
          aria-hidden
          className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
          strokeWidth={2}
        />
      )}
    </Link>
  );
}

export function Eyebrow({ children, tone = "light" }: { children: React.ReactNode; tone?: "light" | "dark" }) {
  return (
    <p
      className={cn(
        "flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.14em]",
        tone === "light" ? "text-accent" : "text-[#7fc4a8]",
      )}
    >
      <span aria-hidden className={cn("h-px w-6", tone === "light" ? "bg-accent/50" : "bg-[#7fc4a8]/50")} />
      {children}
    </p>
  );
}

type SectionHeaderProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeader({ eyebrow, title, description, tone = "light", className }: SectionHeaderProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2
        className={cn(
          "mt-5 font-display text-[2rem] leading-[1.08] font-semibold tracking-[-0.025em] text-balance sm:text-[2.75rem]",
          tone === "light" ? "text-ink" : "text-canvas",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-[17px] leading-relaxed text-pretty",
            tone === "light" ? "text-muted" : "text-night-muted",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export type Status = "focus" | "roadmap";

export function StatusTag({ status }: { status: Status }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-1.5 rounded-full px-2 py-0.5 font-mono text-[10.5px] font-medium tracking-wide uppercase",
        status === "focus" ? "bg-accent-soft text-accent-strong" : "bg-sunken text-muted",
      )}
    >
      <span
        aria-hidden
        className={cn("size-1.5 rounded-full", status === "focus" ? "bg-accent" : "border border-muted/60")}
      />
      {status === "focus" ? "Initial focus" : "Roadmap"}
    </span>
  );
}
