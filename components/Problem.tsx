import { Container, SectionHeader } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

const problems = [
  {
    label: "Businesses",
    title: "Global by default, fragmented in practice.",
    body: "More companies sell across borders from day one. But for founders in emerging markets, setting up abroad, getting verified, opening financial accounts, and staying compliant still means stitching together providers that don't talk to each other.",
    missing: ["Portable identity", "Financial access", "Ongoing compliance"],
  },
  {
    label: "AI agents",
    title: "Capable of the work. Not trusted with the money.",
    body: "AI agents can already research suppliers, prepare invoices, and execute tasks. What they lack is the identity, permissions, and financial infrastructure to transact safely on behalf of the business that deploys them.",
    missing: ["Agent identity", "Delegated limits", "Audit trail"],
  },
  {
    label: "Payments",
    title: "Value still moves slower than work.",
    body: "Cross-border payments remain slow, costly, and hard to program. Neither a founder paying an overseas supplier nor an agent completing a purchase can rely on rails that were never designed for software.",
    missing: ["Fast settlement", "Programmable rules", "Global reach"],
  },
];

export function Problem() {
  return (
    <section id="problem" aria-labelledby="problem-title" className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="The problem"
            title={<span id="problem-title">Commerce is evolving. Infrastructure needs to catch up.</span>}
          />
        </Reveal>

        <ol className="mt-14 grid border-t border-line md:grid-cols-3">
          {problems.map((p, i) => (
            <li
              key={p.label}
              className="border-b border-line py-8 md:border-b-0 md:px-8 md:py-10 md:first:pl-0 md:last:pr-0 md:[&:not(:first-child)]:border-l"
            >
              <Reveal delay={i * 90}>
                <p className="font-mono text-xs text-muted">
                  <span className="text-accent">0{i + 1}</span> &nbsp;{p.label}
                </p>
                <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-balance">{p.title}</h3>
                <p className="mt-3 text-[15.5px] leading-relaxed text-muted">{p.body}</p>
                <div className="mt-6">
                  <p className="text-[12px] font-medium tracking-wide text-ink-soft uppercase">Missing today</p>
                  <ul className="mt-2.5 flex flex-wrap gap-1.5">
                    {p.missing.map((m) => (
                      <li
                        key={m}
                        className="rounded-md border border-dashed border-line-strong px-2 py-1 text-[12.5px] text-ink-soft"
                      >
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
