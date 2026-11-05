import { Bot, Building2, Fingerprint, ScrollText, SlidersHorizontal, Wallet } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container, SectionHeader, StatusTag, type Status } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

type Layer = {
  index: string;
  icon: LucideIcon;
  name: string;
  summary: string;
  features: Array<{ label: string; status: Status }>;
};

const layers: Layer[] = [
  {
    index: "Layer 01",
    icon: Building2,
    name: "Business Infrastructure",
    summary:
      "Help founders and businesses, starting in emerging markets, establish a global company and become ready to accept and make international payments.",
    features: [
      { label: "Business identity and verification", status: "focus" },
      { label: "US company formation, delivered with licensed providers", status: "focus" },
      { label: "Payment readiness for global payment processors", status: "focus" },
      { label: "Compliance and document management", status: "focus" },
      { label: "International business accounts and payouts", status: "roadmap" },
    ],
  },
  {
    index: "Layer 02",
    icon: Bot,
    name: "Agent Financial Infrastructure",
    summary:
      "Let businesses give AI agents bounded financial authority. The owner sets the limits, and the agent cannot spend beyond them.",
    features: [
      { label: "AI agent identity, linked to an accountable business", status: "focus" },
      { label: "Delegated financial permissions", status: "focus" },
      { label: "Spending limits and transaction policies", status: "focus" },
      { label: "Auditable payment activity", status: "focus" },
      { label: "Embedded wallets per agent", status: "roadmap" },
      { label: "Stablecoin payments", status: "roadmap" },
      { label: "Agent-to-business and agent-to-agent transactions", status: "roadmap" },
    ],
  },
];

const foundation = [
  { icon: Fingerprint, label: "Verified identity" },
  { icon: SlidersHorizontal, label: "Policy engine" },
  { icon: Wallet, label: "Settlement" },
  { icon: ScrollText, label: "Audit log" },
];

export function Platform() {
  return (
    <section id="platform" aria-labelledby="platform-title" className="border-t border-line bg-surface py-24 sm:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal>
            <SectionHeader
              eyebrow="The platform"
              title={<span id="platform-title">One infrastructure layer. Multiple economic participants.</span>}
              description="Businesses, their teams, and the AI agents acting for them share one foundation of identity, permissions, and settlement."
            />
          </Reveal>
          <Reveal delay={120} className="lg:max-w-xs">
            <div className="rounded-lg border border-line bg-canvas p-4 text-[13.5px] leading-relaxed text-muted">
              <div className="mb-3 flex flex-wrap gap-2">
                <StatusTag status="focus" />
                <StatusTag status="roadmap" />
              </div>
              Avenor is early-stage. Nothing here is generally available yet. Initial focus is what we&apos;re building
              first; roadmap items follow.
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          {layers.map((layer, i) => (
            <Reveal key={layer.name} delay={i * 100}>
              <article className="flex h-full flex-col rounded-xl border border-line bg-canvas p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-lg border border-line bg-surface">
                    <layer.icon className="size-5 text-accent" strokeWidth={1.75} aria-hidden />
                  </span>
                  <span className="font-mono text-xs text-muted">{layer.index}</span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight">{layer.name}</h3>
                <p className="mt-3 text-[15.5px] leading-relaxed text-muted">{layer.summary}</p>
                <ul className="mt-7 divide-y divide-line border-t border-line">
                  {layer.features.map((f) => (
                    <li key={f.label} className="flex items-start justify-between gap-4 py-3 text-[14.5px]">
                      <span className={f.status === "focus" ? "text-ink" : "text-ink-soft"}>{f.label}</span>
                      <StatusTag status={f.status} />
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Shared foundation both layers sit on */}
        <Reveal delay={150}>
          <div aria-hidden className="hidden grid-cols-2 lg:grid">
            <span className="mx-auto h-8 w-px bg-line-strong" />
            <span className="mx-auto h-8 w-px bg-line-strong" />
          </div>
          <div className="mt-4 rounded-xl bg-ink p-6 text-canvas sm:p-8 lg:mt-0">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="font-mono text-xs tracking-[0.14em] text-night-muted uppercase">Shared foundation</p>
                <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-night-muted">
                  Every participant traces back to a verified, accountable business.
                </p>
              </div>
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:shrink-0">
                {foundation.map((f) => (
                  <li
                    key={f.label}
                    className="flex items-center gap-2.5 rounded-lg border border-night-line bg-night-raised px-3.5 py-3 text-[13.5px] whitespace-nowrap"
                  >
                    <f.icon className="size-4 text-[#7fc4a8]" strokeWidth={1.75} aria-hidden />
                    {f.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
