import { ArrowDown, Bot, Building2, Check, Globe, Receipt, SlidersHorizontal, Truck } from "lucide-react";
import { Container, SectionHeader } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

const useCases = [
  {
    icon: Globe,
    title: "Cross-border business payments",
    body: "Pay and get paid internationally without waiting on correspondent banking.",
  },
  {
    icon: Truck,
    title: "Supplier payments",
    body: "Settle invoices with overseas suppliers directly from the business account.",
  },
  {
    icon: Bot,
    title: "AI agent payments",
    body: "Let agents complete approved purchases, within the limits their owner sets.",
  },
  {
    icon: SlidersHorizontal,
    title: "Programmable permissions",
    body: "Payment rules written in software and checked before every transaction.",
  },
];

const flow = [
  { icon: Building2, title: "Acme Trading Inc.", meta: "Procurement agent initiates $420.00 to supplier" },
  { icon: SlidersHorizontal, title: "Policy check", meta: "Within daily limit · Approved payee", check: true },
  { icon: Receipt, title: "Stablecoin settlement", meta: "Established, regulated stablecoin" },
  { icon: Globe, title: "Shenzhen Components Co.", meta: "Funds received" },
];

export function Settlement() {
  return (
    <section id="solutions" aria-labelledby="settlement-title" className="bg-night py-24 text-canvas sm:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-20 [&>*]:min-w-0">
          <div>
            <Reveal>
              <SectionHeader
                tone="dark"
                eyebrow="Global settlement"
                title={<span id="settlement-title">Move value at the speed of software.</span>}
                description="Stablecoins are the settlement layer underneath Avenor, not the product itself. They let value move across borders at any hour, and let payment rules be expressed in code."
              />
            </Reveal>

            <ul className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {useCases.map((u, i) => (
                <li key={u.title}>
                  <Reveal delay={i * 80}>
                    <u.icon className="size-5 text-[#7fc4a8]" strokeWidth={1.75} aria-hidden />
                    <h3 className="mt-3 text-[15.5px] font-medium">{u.title}</h3>
                    <p className="mt-1.5 text-[14.5px] leading-relaxed text-night-muted">{u.body}</p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>

          <Reveal delay={150}>
            <figure aria-label="Illustrative payment flow: a business agent payment passes a policy check, settles in a stablecoin, and reaches the supplier">
              <div className="rounded-xl border border-night-line bg-night-raised p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <p className="text-[13px] font-medium">Payment flow</p>
                  <span className="rounded-md border border-night-line px-2 py-0.5 font-mono text-[10.5px] tracking-wide text-night-muted uppercase">
                    Illustrative
                  </span>
                </div>
                <ol className="mt-5">
                  {flow.map((step, i) => (
                    <li key={step.title}>
                      <div className="flex items-center gap-4 rounded-lg border border-night-line bg-night px-4 py-3.5">
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-night-raised">
                          <step.icon className="size-4 text-canvas" strokeWidth={1.75} aria-hidden />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-[14px] font-medium">{step.title}</p>
                          <p className="text-[12.5px] text-night-muted">{step.meta}</p>
                        </div>
                        {step.check && (
                          <span className="flex size-6 items-center justify-center rounded-full bg-[#7fc4a8]/15">
                            <Check className="size-3.5 text-[#7fc4a8]" strokeWidth={2.5} aria-label="Passed" />
                          </span>
                        )}
                      </div>
                      {i < flow.length - 1 && (
                        <div aria-hidden className="flex justify-center py-1.5">
                          <ArrowDown className="size-4 text-night-muted/60" strokeWidth={1.75} />
                        </div>
                      )}
                    </li>
                  ))}
                </ol>
              </div>
              <figcaption className="mt-5 text-[13px] leading-relaxed text-night-muted">
                Avenor does not issue its own stablecoin. Settlement is intended to use established stablecoins through
                appropriately licensed providers, subject to local regulation.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
