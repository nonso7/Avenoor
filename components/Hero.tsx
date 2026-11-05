import { HeroConsole } from "@/components/HeroConsole";
import { ButtonLink, Container } from "@/components/ui/primitives";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden pt-32 sm:pt-40">
      <div aria-hidden className="hero-grid pointer-events-none absolute inset-x-0 top-0 h-[720px]" />

      <Container className="relative">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-[13px] text-ink-soft">
            <span aria-hidden className="pulse-dot size-1.5 rounded-full bg-accent" />
            Now building. Early access opens through the waitlist.
          </p>

          <h1
            id="hero-title"
            className="mt-7 font-display text-[2.6rem] leading-[1.02] font-semibold tracking-[-0.035em] text-balance sm:text-6xl lg:text-[4.5rem]"
          >
            The infrastructure for autonomous commerce.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted text-pretty sm:text-xl">
            Businesses are going global and AI agents are becoming economic participants. Avenor connects both to
            verified business identity, delegated financial permissions, and cross-border settlement.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#waitlist" arrow>
              Join the waitlist
            </ButtonLink>
            <ButtonLink href="#platform" variant="secondary">
              Explore the platform
            </ButtonLink>
          </div>
        </div>

        <div className="relative mt-16 sm:mt-20">
          <HeroConsole />
        </div>
      </Container>
    </section>
  );
}
