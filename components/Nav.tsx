"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { ButtonLink, Container } from "@/components/ui/primitives";
import { cn, navLinks } from "@/lib/site";

function SignInSoon({ className }: { className?: string }) {
  return (
    <span
      aria-disabled="true"
      title="Accounts open at launch"
      className={cn("inline-flex cursor-default items-center gap-2 text-[15px] text-muted", className)}
    >
      Sign in
      <span className="rounded-full bg-sunken px-1.5 py-0.5 font-mono text-[10px] tracking-wide uppercase">Soon</span>
    </span>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled || open ? "border-line bg-canvas/95 backdrop-blur-sm" : "border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" aria-label="Avenor home" className="rounded-md">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-[15px] text-ink-soft transition-colors hover:text-ink">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <SignInSoon />
          <ButtonLink href="#waitlist" className="h-9 px-4 text-sm">
            Join the waitlist
          </ButtonLink>
        </div>

        <button
          type="button"
          className="-mr-2 inline-flex size-10 items-center justify-center rounded-md text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-canvas md:hidden"
      >
        <Container className="flex flex-col py-6">
          <nav aria-label="Mobile">
            <ul className="divide-y divide-line">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex py-4 font-display text-2xl font-medium tracking-tight text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-8 flex flex-col gap-4">
            <span onClick={() => setOpen(false)}>
              <ButtonLink href="#waitlist" className="w-full">
                Join the waitlist
              </ButtonLink>
            </span>
            <SignInSoon className="justify-center py-2" />
          </div>
        </Container>
      </div>
    </header>
  );
}
