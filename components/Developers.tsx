import { Bot, Building2, KeyRound, Network, SlidersHorizontal, Wallet } from "lucide-react";
import { ButtonLink, Container, SectionHeader } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

const apis = [
  { icon: Building2, label: "Business identity" },
  { icon: KeyRound, label: "Agent authorisation" },
  { icon: Wallet, label: "Wallet provisioning" },
  { icon: Bot, label: "Payment execution" },
  { icon: SlidersHorizontal, label: "Transaction policies" },
  { icon: Network, label: "Commerce integrations" },
];

// A sketch of the intended developer experience. Not a published API.
const snippet = `// Draft design. Subject to change, not yet available.
const agent = await avenor.agents.create({
  business: "biz_acme",
  name: "Procurement agent",
});

await avenor.policies.attach(agent.id, {
  perTransaction: { max: 500, currency: "USD" },
  daily: { max: 2500, currency: "USD" },
  payees: "approved_suppliers",
  requireApproval: { above: 1000 },
});`;

const tokenPattern = /(\/\/.*$)|("[^"]*")|\b(const|await)\b|\b(\d+)\b|(\w+)(?=\s*:)/gm;

function highlight(code: string) {
  const out: React.ReactNode[] = [];
  let last = 0;
  for (const m of code.matchAll(tokenPattern)) {
    const i = m.index ?? 0;
    if (i > last) out.push(code.slice(last, i));
    const cls = m[1]
      ? "text-[#8a877e]"
      : m[2]
        ? "text-[#9fd3b8]"
        : m[3]
          ? "text-[#d6a5f0]"
          : m[4]
            ? "text-[#f0c27b]"
            : "text-[#a9c7ef]";
    out.push(
      <span key={i} className={cls}>
        {m[0]}
      </span>,
    );
    last = i + m[0].length;
  }
  out.push(code.slice(last));
  return out;
}

export function Developers() {
  return (
    <section id="developers" aria-labelledby="developers-title" className="py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20 [&>*]:min-w-0">
          <div>
            <Reveal>
              <SectionHeader
                eyebrow="Developers"
                title={<span id="developers-title">Infrastructure developers can build on.</span>}
                description="Avenor intends to expose its infrastructure through APIs and integrations, so teams can build identity, authorisation, and payments into their own products and agents."
              />
            </Reveal>
            <Reveal delay={100}>
              <ul className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line">
                {apis.map((a) => (
                  <li key={a.label} className="flex items-center gap-3 bg-canvas px-4 py-3.5 text-[14.5px]">
                    <a.icon className="size-4 text-accent" strokeWidth={1.75} aria-hidden />
                    {a.label}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[13.5px] text-muted">
                APIs are in design and not yet available. Join the waitlist for early developer access.
              </p>
              <div className="mt-8">
                <ButtonLink href="#waitlist" arrow>
                  Explore developer infrastructure
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <figure className="overflow-hidden rounded-xl border border-night-line bg-night shadow-[0_24px_60px_-30px_rgba(18,18,16,0.45)]">
              <div className="flex items-center justify-between border-b border-night-line px-4 py-3">
                <p className="font-mono text-[12px] text-night-muted">agent-policy.ts</p>
                <span className="rounded-md border border-night-line px-2 py-0.5 font-mono text-[10.5px] tracking-wide text-night-muted uppercase">
                  Draft API design
                </span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-[1.75] text-[#e8e6df] sm:text-[13px]">
                <code>{highlight(snippet)}</code>
              </pre>
              <figcaption className="sr-only">
                Illustrative code showing how a business might create an AI agent and attach a spending policy. Not a
                published API.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
