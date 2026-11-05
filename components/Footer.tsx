import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui/primitives";
import { site } from "@/lib/site";

const columns = [
  {
    title: "Platform",
    links: [
      { label: "Business infrastructure", href: "/#platform" },
      { label: "Agent financial infrastructure", href: "/#platform" },
      { label: "Global settlement", href: "/#solutions" },
      { label: "How it works", href: "/#how-it-works" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Developer infrastructure", href: "/#developers" },
      { label: "Early developer access", href: "/#waitlist" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Vision", href: "/#company" },
      { label: "Join the waitlist", href: "/#waitlist" },
      { label: "Contact", href: `mailto:${site.email}` },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line pt-16 pb-10">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-[14.5px] leading-relaxed text-muted">{site.tagline}</p>
            <a href={`mailto:${site.email}`} className="mt-4 inline-block text-[14.5px] text-ink-soft hover:text-ink">
              {site.email}
            </a>
          </div>
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="text-[13px] font-medium text-ink">{col.title}</h2>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-[14.5px] text-muted transition-colors hover:text-ink">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 text-[13px] text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Avenor. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-ink">
              Privacy policy
            </Link>
            <Link href="/terms" className="hover:text-ink">
              Terms of service
            </Link>
          </div>
        </div>
        <p className="mt-6 max-w-3xl text-[12.5px] leading-relaxed text-muted/90">
          Avenor is an early-stage company. Products and capabilities described on this site are in development or
          planned and are not yet available. Avenor does not issue a stablecoin and does not currently provide regulated
          financial services.
        </p>
      </Container>
    </footer>
  );
}
