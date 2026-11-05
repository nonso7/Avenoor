import { Container, Eyebrow } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

const principles = [
  {
    title: "Accountable by design",
    body: "Every agent acts under the authority of a verified business or owner. Agents are never independent legal parties.",
  },
  {
    title: "Bounded, not unbounded",
    body: "Owners decide what an agent may spend, with whom, and when a human must approve. Nothing happens outside that.",
  },
  {
    title: "Global from the start",
    body: "Built first for founders in emerging markets, so a company in Lagos can trade as easily as one in London.",
  },
];

export function Vision() {
  return (
    <section id="company" aria-labelledby="vision-title" className="border-t border-line bg-surface py-24 sm:py-36">
      <Container>
        <Reveal>
          <Eyebrow>Vision</Eyebrow>
          <h2
            id="vision-title"
            className="mt-6 max-w-4xl font-display text-[2.4rem] leading-[1.04] font-semibold tracking-[-0.03em] text-balance sm:text-6xl"
          >
            The next economy will have more participants than people.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <Reveal delay={80}>
            <div className="space-y-5 text-lg leading-relaxed text-ink-soft text-pretty">
              <p>
                Today, almost every payment traces back to a person clicking a button. Increasingly, businesses will
                delegate routine commerce, such as procurement, invoicing, reconciliation, and supplier payments, to
                software agents that act on their behalf.
              </p>
              <p className="text-muted">
                That shift needs infrastructure built on a simple principle: every agent answers to an accountable
                business, and every action stays within the authority it was given. Avenor is building that foundation,
                starting with the businesses that have historically been hardest to serve.
              </p>
            </div>
          </Reveal>

          <ul className="divide-y divide-line border-y border-line">
            {principles.map((p, i) => (
              <li key={p.title} className="py-5">
                <Reveal delay={120 + i * 80}>
                  <h3 className="font-medium">{p.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{p.body}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
