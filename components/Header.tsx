"use client";

import { Search } from "lucide-react";
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
    <header className="relative sticky top-0 z-40 border-b border-navy/8 bg-paper/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="shrink-0" aria-label={`${site.name} home`}>
          <Logo variant="navy" priority className="h-10 sm:h-11" />
        </Link>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary">
          {nav.primary.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "kicker text-navy/70 transition-colors hover:text-navy",
                pathname === item.href && "text-navy",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <Link href="/give" className="btn-gold min-h-9 px-5">
            Donate
          </Link>
          <button
            type="button"
            className="inline-flex min-h-9 min-w-9 items-center justify-center text-navy"
            aria-label="Search"
          >
            <Search className="h-4 w-4" strokeWidth={1.75} />
          </button>
        </div>

        <details ref={detailsRef} className="group xl:hidden">
          <summary className="block cursor-pointer list-none marker:content-none [&::-webkit-details-marker]:hidden">
            <span className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-full border border-navy/20">
              <span className="sr-only">Menu</span>
              <span className="flex flex-col gap-1.5" aria-hidden="true">
                <span className="block h-px w-5 bg-navy transition-transform group-open:translate-y-1 group-open:rotate-45" />
                <span className="block h-px w-5 bg-navy group-open:opacity-0" />
                <span className="block h-px w-5 bg-navy transition-transform group-open:-translate-y-1.5 group-open:-rotate-45" />
              </span>
            </span>
          </summary>
          <nav
            className="absolute inset-x-0 top-full z-50 border-b border-navy/10 bg-paper px-4 py-5 shadow-lg sm:px-6"
            aria-label="Mobile"
          >
            <div className="mx-auto flex max-w-6xl flex-col">
              {nav.primary.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="kicker py-3 text-navy"
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/give" onClick={closeMenu} className="btn-gold mt-3">
                Donate
              </Link>
            </div>
          </nav>
        </details>
      </div>
    </header>
  );
}
