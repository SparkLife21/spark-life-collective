"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/cn";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    detailsRef.current?.removeAttribute("open");
  }, [pathname]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") detailsRef.current?.removeAttribute("open");
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function closeMenu() {
    detailsRef.current?.removeAttribute("open");
  }

  return (
    <header className="relative sticky top-0 z-40 border-b border-gold/20 bg-navy/95 backdrop-blur-md">
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

        <details ref={detailsRef} className="group lg:hidden">
          <summary className="block cursor-pointer list-none marker:content-none [&::-webkit-details-marker]:hidden">
            <span className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm border border-gold/40">
              <span className="sr-only">Menu</span>
              <span className="flex flex-col gap-1.5" aria-hidden="true">
                <span className="block h-px w-5 bg-gold-light transition-transform group-open:translate-y-1 group-open:rotate-45" />
                <span className="block h-px w-5 bg-gold-light group-open:opacity-0" />
                <span className="block h-px w-5 bg-gold-light transition-transform group-open:-translate-y-1.5 group-open:-rotate-45" />
              </span>
            </span>
          </summary>
          <nav
            className="absolute inset-x-0 top-full z-50 border-b border-gold/20 bg-navy px-4 py-4 shadow-lg sm:px-6"
            aria-label="Mobile"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1">
              {[...nav.primary, { href: "/give", label: "Give" }].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-sm px-2 py-3 text-base font-medium text-paper hover:bg-white/5"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/retreats/root-and-rise"
                onClick={closeMenu}
                className="mt-2 inline-flex min-h-12 items-center justify-center rounded-sm bg-gold px-4 font-semibold text-navy"
              >
                Join Root &amp; Rise
              </Link>
            </div>
          </nav>
        </details>
      </div>
    </header>
  );
}
