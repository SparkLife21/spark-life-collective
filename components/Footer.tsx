import Link from "next/link";
import { Logo } from "@/components/Logo";
import { nav, site } from "@/lib/site";

const social = [
  { href: "#", label: "Instagram", path: "M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Zm8 2H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3Zm-4 3.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2Zm0 1.6A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8ZM17.4 7.1a.9.9 0 1 1-.9.9.9.9 0 0 1 .9-.9Z" },
  { href: "#", label: "Facebook", path: "M14 8h3V5h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13V9c0-.6.4-1 1-1Z" },
  { href: "#", label: "YouTube", path: "M22 12s0-3.2-.4-4.6a2.8 2.8 0 0 0-2-2C17.8 5 12 5 12 5s-5.8 0-7.6.4a2.8 2.8 0 0 0-2 2C2 8.8 2 12 2 12s0 3.2.4 4.6a2.8 2.8 0 0 0 2 2C6.2 19 12 19 12 19s5.8 0 7.6-.4a2.8 2.8 0 0 0 2-2C22 15.2 22 12 22 12Zm-12 3.2V8.8L16 12l-6 3.2Z" },
  { href: "#", label: "LinkedIn", path: "M6.5 9H4V20h2.5V9ZM5.2 4A1.6 1.6 0 1 0 6.8 5.6 1.6 1.6 0 0 0 5.2 4ZM20 20h-2.5v-5.6c0-1.6-.6-2.6-2-2.6s-2.2 1-2.2 2.6V20H11V9h2.4v1.5A3.4 3.4 0 0 1 16.4 9c2.4 0 3.6 1.5 3.6 4.4V20Z" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy/8 bg-paper text-navy">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" aria-label={`${site.name} home`} className="shrink-0">
          <Logo variant="navy" className="h-12" />
        </Link>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {nav.footer.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="kicker text-navy/65 hover:text-navy">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex items-center gap-2">
          {social.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="inline-flex min-h-9 min-w-9 items-center justify-center text-navy/70 hover:text-navy"
                aria-label={item.label}
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                  <path d={item.path} />
                </svg>
              </a>
            </li>
          ))}
        </ul>

        <p className="kicker max-w-[9rem] leading-relaxed text-navy/55 lg:text-right">
          A brighter tomorrow, together.
        </p>
      </div>
      <div className="border-t border-navy/8">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-navy/45 sm:px-6">
          © {year} {site.copyrightName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
