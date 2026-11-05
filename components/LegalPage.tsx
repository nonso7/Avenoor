import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui/primitives";
import { site } from "@/lib/site";

export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <header className="border-b border-line">
        <Container className="flex h-16 items-center">
          <Link href="/" aria-label="Avenor home">
            <Logo />
          </Link>
        </Container>
      </header>
      <main id="main" className="py-20 sm:py-28">
        <Container className="max-w-2xl">
          <h1 className="font-display text-4xl font-semibold tracking-tight">{title}</h1>
          <div className="mt-8 space-y-4 text-[16.5px] leading-relaxed text-ink-soft">
            {children}
            <p>
              Questions? Contact us at{" "}
              <a href={`mailto:${site.email}`} className="text-accent underline underline-offset-4">
                {site.email}
              </a>
              .
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
