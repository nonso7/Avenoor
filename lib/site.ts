export const site = {
  name: "Avenor",
  tagline: "The infrastructure for autonomous commerce.",
  description:
    "Avenor is building the global infrastructure layer for businesses and AI agents to establish, operate, and transact across borders, with verified identity, delegated permissions, and stablecoin-based settlement.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://avenor.com",
  // TODO: replace with Avenor's real contact address before launch.
  email: "hello@avenor.com",
} as const;

export const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Solutions", href: "#solutions" },
  { label: "Developers", href: "#developers" },
  { label: "Company", href: "#company" },
] as const;

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
