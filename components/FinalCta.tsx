import { WaitlistForm } from "@/components/WaitlistForm";
import { Container } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCta() {
  return (
    <section id="waitlist" aria-labelledby="cta-title" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-night px-6 py-14 text-canvas sm:px-12 sm:py-20">
            <div
              aria-hidden
              className="hero-grid pointer-events-none absolute inset-0 opacity-[0.07] [mask-image:radial-gradient(ellipse_60%_80%_at_100%_0%,#000_20%,transparent_70%)]"
            />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-16">
              <div>
                <h2
                  id="cta-title"
                  className="font-display text-[2rem] leading-[1.08] font-semibold tracking-[-0.025em] text-balance sm:text-5xl"
                >
                  Build for the next generation of commerce.
                </h2>
                <p className="mt-5 max-w-md text-[17px] leading-relaxed text-night-muted">
                  Join the early community shaping the infrastructure for businesses, AI agents, and autonomous
                  commerce.
                </p>
              </div>
              <WaitlistForm />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
