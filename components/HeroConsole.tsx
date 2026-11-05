import {
  ArrowDownLeft,
  ArrowUpRight,
  BadgeCheck,
  Bot,
  Clock,
  Fingerprint,
  LayoutGrid,
  ScrollText,
  ShieldX,
  SlidersHorizontal,
  Wallet,
} from "lucide-react";
import { cn } from "@/lib/site";

// Everything in this console is illustrative sample data, labelled as such in the UI.

const sidebar = [
  { label: "Overview", icon: LayoutGrid },
  { label: "Identity", icon: Fingerprint },
  { label: "Agents", icon: Bot, active: true },
  { label: "Policies", icon: SlidersHorizontal },
  { label: "Payments", icon: Wallet },
  { label: "Audit log", icon: ScrollText },
];

const agents = [
  { name: "Procurement agent", scope: "Pays approved suppliers", used: 840, limit: 2500, status: "Active" },
  { name: "Invoicing agent", scope: "Issues invoices, receives funds", used: null, limit: null, status: "Active" },
  { name: "Travel agent", scope: "Books travel within policy", used: 0, limit: 600, status: "Paused" },
] as const;

const policy = [
  ["Per transaction", "≤ $500"],
  ["Daily limit", "$2,500"],
  ["Payees", "Approved suppliers"],
  ["Above $1,000", "Owner approval"],
] as const;

const activity = [
  {
    icon: ArrowUpRight,
    tone: "accent",
    title: "Paid Shenzhen Components Co.",
    meta: "Procurement agent · Settled",
    amount: "−$420.00",
  },
  {
    icon: Clock,
    tone: "amber",
    title: "Approval requested",
    meta: "$1,250.00 to Harbor Freight Ltd",
    amount: "Pending",
  },
  {
    icon: ShieldX,
    tone: "danger",
    title: "Blocked by policy",
    meta: "$3,100.00 exceeds daily limit",
    amount: "Declined",
  },
  {
    icon: ArrowDownLeft,
    tone: "neutral",
    title: "Received from Northwind GmbH",
    meta: "Invoicing agent · INV-0042",
    amount: "+$2,800.00",
  },
] as const;

const toneStyles = {
  accent: "bg-accent-soft text-accent-strong",
  amber: "bg-amber-soft text-amber",
  danger: "bg-danger-soft text-danger",
  neutral: "bg-sunken text-ink-soft",
};

const money = (n: number) => `$${n.toLocaleString("en-US")}`;

export function HeroConsole() {
  return (
    <figure
      aria-label="Illustration of the Avenor console: a verified business with three AI agents, a spending policy, and recent payment activity"
      className="overflow-hidden rounded-xl border border-line-strong/70 bg-surface shadow-[0_1px_2px_rgba(18,18,16,0.04),0_24px_60px_-28px_rgba(18,18,16,0.22)]"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between gap-4 border-b border-line bg-canvas/60 px-4 py-3">
        <div className="flex min-w-0 items-center gap-2 text-[13px] text-muted">
          <span className="font-medium text-ink">Avenor</span>
          <span aria-hidden>/</span>
          <span className="truncate">Acme Trading Inc.</span>
          <span aria-hidden className="hidden sm:inline">
            /
          </span>
          <span className="hidden text-ink-soft sm:inline">Agents</span>
        </div>
        <span className="shrink-0 rounded-md border border-line px-2 py-0.5 font-mono text-[10.5px] tracking-wide text-muted uppercase">
          Illustrative
        </span>
      </div>

      <div className="grid md:grid-cols-[minmax(0,1fr)_290px] lg:grid-cols-[168px_minmax(0,1fr)_300px]">
        {/* Sidebar */}
        <nav aria-hidden className="hidden border-r border-line p-3 lg:block">
          <ul className="space-y-0.5">
            {sidebar.map(({ label, icon: Icon, ...rest }) => (
              <li
                key={label}
                className={cn(
                  "flex items-center gap-2.5 rounded-md px-2.5 py-2 text-[13px]",
                  "active" in rest ? "bg-sunken font-medium text-ink" : "text-muted",
                )}
              >
                <Icon className="size-4" strokeWidth={1.75} />
                {label}
              </li>
            ))}
          </ul>
        </nav>

        {/* Main column */}
        <div className="min-w-0 p-4 sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display text-lg font-semibold tracking-tight">Acme Trading Inc.</h3>
                <span className="inline-flex items-center gap-1 rounded-full bg-accent-soft px-2 py-0.5 text-[11.5px] font-medium text-accent-strong">
                  <BadgeCheck className="size-3.5" strokeWidth={2} />
                  Verified business
                </span>
              </div>
              <dl className="mt-3 grid grid-cols-2 gap-x-8 gap-y-1.5 text-[12.5px] sm:grid-cols-3">
                <div>
                  <dt className="text-muted">Entity</dt>
                  <dd className="text-ink">Delaware C-Corp</dd>
                </div>
                <div>
                  <dt className="text-muted">Operating from</dt>
                  <dd className="text-ink">Lagos, Nigeria</dd>
                </div>
                <div>
                  <dt className="text-muted">Accountable owner</dt>
                  <dd className="text-ink">Founder &amp; CEO</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-lg border border-line">
            <div className="flex items-center justify-between border-b border-line bg-canvas/50 px-4 py-2.5">
              <p className="text-[13px] font-medium">Connected agents</p>
              <p className="font-mono text-[11px] text-muted">3 agents</p>
            </div>
            <ul className="divide-y divide-line">
              {agents.map((agent) => (
                <li
                  key={agent.name}
                  className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:grid-cols-[minmax(0,1fr)_140px_64px]"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-md border border-line bg-canvas">
                      <Bot className="size-4 text-ink-soft" strokeWidth={1.75} />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-[13px] font-medium">{agent.name}</p>
                      <p className="truncate text-[12px] text-muted">{agent.scope}</p>
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    {agent.limit === null ? (
                      <p className="text-[12px] text-muted">Receive only</p>
                    ) : (
                      <>
                        <div className="flex justify-between font-mono text-[11px] text-muted">
                          <span className="text-ink">{money(agent.used)}</span>
                          <span>{money(agent.limit)}/day</span>
                        </div>
                        <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-sunken">
                          <div
                            className="h-full rounded-full bg-accent"
                            style={{ width: `${Math.max(2, (agent.used / agent.limit) * 100)}%` }}
                          />
                        </div>
                      </>
                    )}
                  </div>
                  <span
                    className={cn(
                      "justify-self-end text-[11.5px] font-medium",
                      agent.status === "Active" ? "text-accent-strong" : "text-muted",
                    )}
                  >
                    {agent.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <dl className="mt-4 hidden grid-cols-3 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid">
            {[
              ["Available balance", "$12,480.00"],
              ["Agent spend today", "$840.00"],
              ["Awaiting approval", "1 payment"],
            ].map(([label, value]) => (
              <div key={label} className="bg-surface px-4 py-3">
                <dt className="text-[12px] text-muted">{label}</dt>
                <dd className="mt-1 font-mono text-[13px] text-ink">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right column */}
        <div className="border-t border-line bg-canvas/40 p-4 sm:p-6 md:border-t-0 md:border-l">
          <div className="rounded-lg border border-line bg-surface p-4">
            <div className="flex items-center justify-between">
              <p className="text-[13px] font-medium">Procurement policy</p>
              <SlidersHorizontal className="size-3.5 text-muted" strokeWidth={1.75} aria-hidden />
            </div>
            <dl className="mt-3 space-y-2">
              {policy.map(([k, v]) => (
                <div key={k} className="flex items-center justify-between gap-3 text-[12.5px]">
                  <dt className="text-muted">{k}</dt>
                  <dd className="font-mono text-[11.5px] text-ink">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 border-t border-line pt-3 text-[11.5px] text-muted">
              Set by the owner. Enforced on every payment.
            </p>
          </div>

          <p className="mt-5 mb-2 text-[13px] font-medium">Activity</p>
          <ul className="space-y-1">
            {activity.map((item, i) => (
              <li
                key={item.title}
                className="row-in flex items-center gap-3 rounded-md py-1.5"
                style={{ animationDelay: `${500 + i * 180}ms` }}
              >
                <span
                  className={cn("flex size-7 shrink-0 items-center justify-center rounded-md", toneStyles[item.tone])}
                >
                  <item.icon className="size-3.5" strokeWidth={2} aria-hidden />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[12.5px] font-medium">{item.title}</p>
                  <p className="truncate text-[11.5px] text-muted">{item.meta}</p>
                </div>
                <span className="shrink-0 font-mono text-[11px] text-ink-soft">{item.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </figure>
  );
}
