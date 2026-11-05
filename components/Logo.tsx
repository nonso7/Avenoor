import { cn } from "@/lib/site";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" aria-hidden className={cn("size-7", className)}>
      <rect width="28" height="28" rx="7" fill="#121210" />
      <path
        d="M8 20.5 14 7.5l6 13"
        fill="none"
        stroke="#f7f5f0"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="14" cy="16.25" r="2" fill="#3fb98a" />
    </svg>
  );
}

export function Logo({ className, tone = "light" }: { className?: string; tone?: "light" | "dark" }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      <span
        className={cn(
          "font-display text-[19px] font-semibold tracking-[-0.02em]",
          tone === "light" ? "text-ink" : "text-canvas",
        )}
      >
        Avenor
      </span>
    </span>
  );
}
