import Link from "next/link";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { contactEmail, socialLinks } from "@/lib/integrations";
import { nav, site } from "@/lib/site";

export function Footer() {
  const social = socialLinks();
  const year = new Date().getFullYear();
  const email = contactEmail();

  return (
    <footer className="mt-8 border-t border-ink/10 bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <p className="font-serif text-2xl tracking-tight">Spark Life Collective</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-paper/75">
            A nonprofit ministry. Free retreats, held open by the gifts of those
            who can give.
          </p>
          <p className="mt-5 text-sm text-gold-light">{site.statusLine}</p>
          <p className="mt-3 text-sm text-paper/70">
            {email ? (
              <a
                href={`mailto:${email}`}
                className="underline decoration-gold/50 underline-offset-4 hover:text-gold-light"
              >
                {email}
              </a>
            ) : (
              <>
                <Link
                  href="/contact"
                  className="underline decoration-gold/50 underline-offset-4 hover:text-gold-light"
                >
                  Contact
                </Link>
                <span className="text-paper/40"> · inbox to be confirmed</span>
              </>
            )}
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="eyebrow text-gold-light">Explore</p>
          <ul className="mt-4 space-y-2">
            {nav.footer.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-paper/85 transition-colors hover:text-gold-light"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow text-gold-light">Stay in touch</p>
          <div className="mt-4">
            <NewsletterSignup variant="footer" id="email-signup-footer" />
          </div>
          {social.length > 0 ? (
            <ul className="mt-6 flex flex-wrap gap-4">
              {social.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-gold-light underline-offset-4 hover:underline"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-6 text-xs leading-relaxed text-paper/55">
              {/* OPEN DECISION: confirm social handles with Spark Life before adding — don't guess. */}
              Social links will appear here once handles are confirmed.
            </p>
          )}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-paper/55 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {year} {site.copyrightName}. All rights reserved.
          </p>
          <p>{site.nonprofitLine}</p>
        </div>
      </div>
    </footer>
  );
}
