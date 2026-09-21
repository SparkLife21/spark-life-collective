import Link from "next/link";
import { Logo } from "@/components/Logo";
import { nav, site, social, SPARK_LIFE_LOGO, SPARK_LIFE_URL } from "@/lib/site";

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
                target="_blank"
                rel="noopener noreferrer"
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

        <div className="flex flex-col items-start gap-3 lg:items-end">
          <a
            href={SPARK_LIFE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Spark Life"
            className="inline-block rounded bg-navy px-3.5 py-3"
          >
            <img
              src={SPARK_LIFE_LOGO}
              alt="Spark Life"
              width={120}
              height={56}
              className="h-auto w-[1.25in]"
            />
          </a>
          <p className="kicker max-w-[9rem] leading-relaxed text-navy/55 lg:text-right">
            A brighter tomorrow, together.
          </p>
        </div>
      </div>
      <div className="border-t border-navy/8">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-navy/45 sm:px-6">
          © {year} {site.copyrightName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
