"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/cn";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-gold/20 bg-navy/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="rounded-sm" aria-label={`${site.name} home`}>
          <Logo variant="light" priority />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.primary.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium tracking-wide text-paper/80 transition-colors hover:text-gold",
                pathname === item.href && "text-gold-light",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/give"
            className="text-sm font-semibold tracking-wide text-gold hover:text-gold-light"
          >
            Give
          </Link>
          <Link
            href="/retreats/root-and-rise"
            className="inline-flex min-h-11 items-center rounded-sm bg-gold px-4 text-sm font-semibold text-navy hover:bg-gold-light"
          >
            Join Root &amp; Rise
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm border border-gold/40 lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="flex flex-col gap-1.5" aria-hidden="true">
            <span
              className={cn(
                "block h-px w-5 bg-gold-light transition-transform",
                open && "translate-y-1 rotate-45",
              )}
            />
            <span className={cn("block h-px w-5 bg-gold-light", open && "opacity-0")} />
            <span
              className={cn(
                "block h-px w-5 bg-gold-light transition-transform",
                open && "-translate-y-1.5 -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      <div
        id={menuId}
        hidden={!open}
        className="border-t border-gold/20 bg-navy lg:hidden"
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4" aria-label="Mobile">
          {[...nav.primary, { href: "/give", label: "Give" }].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-sm px-2 py-3 text-base font-medium text-paper hover:bg-white/5"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/retreats/root-and-rise"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex min-h-12 items-center justify-center rounded-sm bg-gold px-4 font-semibold text-navy"
          >
            Join Root &amp; Rise
          </Link>
        </nav>
      </div>
    </header>
  );
}
