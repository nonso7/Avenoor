"use client";

import { useState } from "react";
import { ArrowRight, Check, ChevronDown } from "lucide-react";

const interests = ["Founder or business owner", "Building with AI agents", "Developer", "Investor or partner", "Other"];

type State = { kind: "idle" } | { kind: "submitting" } | { kind: "done" } | { kind: "error"; message: string };

export function WaitlistForm() {
  const [state, setState] = useState<State>({ kind: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    setState({ kind: "submitting" });
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(body.error ?? "Something went wrong. Please try again.");
      setState({ kind: "done" });
    } catch (err) {
      setState({ kind: "error", message: err instanceof Error ? err.message : "Something went wrong." });
    }
  }

  if (state.kind === "done") {
    return (
      <div role="status" className="flex items-start gap-3 rounded-lg border border-night-line bg-night-raised p-5">
        <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#7fc4a8]/15">
          <Check className="size-4 text-[#7fc4a8]" strokeWidth={2.5} aria-hidden />
        </span>
        <div>
          <p className="font-medium">You&apos;re on the list.</p>
          <p className="mt-1 text-[14.5px] text-night-muted">We&apos;ll be in touch as early access opens.</p>
        </div>
      </div>
    );
  }

  const busy = state.kind === "submitting";

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)]">
        <label className="block">
          <span className="sr-only">Work email</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className="h-12 w-full rounded-lg border border-night-line bg-night-raised px-4 text-[15px] text-canvas placeholder:text-night-muted/70 focus:border-[#7fc4a8]/60 focus:outline-none"
          />
        </label>
        <label className="relative block">
          <span className="sr-only">I&apos;m interested as</span>
          <ChevronDown
            aria-hidden
            className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-night-muted"
          />
          <select
            name="interest"
            defaultValue=""
            required
            className="h-12 w-full appearance-none rounded-lg border border-night-line bg-night-raised px-4 pr-10 text-[15px] text-canvas focus:border-[#7fc4a8]/60 focus:outline-none invalid:text-night-muted/70"
          >
            <option value="" disabled>
              I&apos;m interested as…
            </option>
            {interests.map((i) => (
              <option key={i} value={i} className="text-ink">
                {i}
              </option>
            ))}
          </select>
        </label>
      </div>
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
      <button
        type="submit"
        disabled={busy}
        className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-canvas px-6 text-[15px] font-medium text-ink transition-colors hover:bg-white disabled:opacity-60 sm:w-auto"
      >
        {busy ? "Joining…" : "Join the waitlist"}
        {!busy && <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />}
      </button>
      <p aria-live="polite" className="min-h-5 text-[13.5px] text-[#f0a99f]">
        {state.kind === "error" ? state.message : ""}
      </p>
    </form>
  );
}
