import { Fingerprint, Network, Send, SlidersHorizontal } from "lucide-react";
import { Container, SectionHeader } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    icon: Fingerprint,
    title: "Establish identity",
    body: "A business or its authorised operator establishes a verified identity.",
    detail: "business.verified",
  },
  {
    icon: Network,
    title: "Connect participants",
    body: "The business connects team members and the AI agents that work for it.",
    detail: "agents.connected: 3",
  },
  {
    icon: SlidersHorizontal,
    title: "Define authority",
    body: "Owners set permissions, transaction limits, approved payees, and approval rules.",
    detail: "limit: $2,500 / day",
  },
  {
    icon: Send,
    title: "Enable commerce",
    body: "Authorised participants transact through connected financial infrastructure, within policy.",
    detail: "payment.settled",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-title" className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="How it works"
            title={<span id="how-title">From identity to economic participation.</span>}
          />
        </Reveal>

        <div className="relative mt-16">
          {/* Connecting line: vertical on mobile, horizontal from md */}
          <span aria-hidden className="absolute top-2 bottom-2 left-5 w-px bg-line-strong md:hidden" />
          <span aria-hidden className="absolute top-5 right-[12%] left-5 hidden h-px bg-line-strong md:block" />

          <ol className="relative grid gap-10 md:grid-cols-4 md:gap-6">
            {steps.map((step, i) => (
              <li key={step.title}>
                <Reveal delay={i * 110} className="relative pl-16 md:pl-0">
                  <span className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-full border border-line-strong bg-canvas md:relative">
                    <step.icon className="size-[18px] text-accent" strokeWidth={1.75} aria-hidden />
                  </span>
                  <p className="font-mono text-xs text-muted md:mt-6">Step {i + 1}</p>
                  <h3 className="mt-2 font-display text-lg font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{step.body}</p>
                  <p className="mt-4 inline-block rounded-md bg-sunken px-2 py-1 font-mono text-[11.5px] text-ink-soft">
                    {step.detail}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
