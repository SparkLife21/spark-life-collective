import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageIntro, Section } from "@/components/Section";
import { socialLinks } from "@/lib/integrations";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Write Spark Life Collective. We would rather hear from you than guess what you needed to say.",
  path: "/contact",
});

export default function ContactPage() {
  const social = socialLinks();

  return (
    <Section className="py-16 sm:py-24">
      <PageIntro eyebrow="Write us" title="Contact">
        <p>
          Questions about Root &amp; Rise, giving, or the work ahead — send them
          here.
        </p>
      </PageIntro>

      <div className="mx-auto mt-14 max-w-xl">
        <ContactForm />

        {social.length > 0 ? (
          <ul className="mt-10 flex flex-wrap gap-4">
            {social.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-navy underline decoration-gold underline-offset-4"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-10 text-sm text-navy/55">
            Social links will be added once Spark Life confirms the handles.
          </p>
        )}
      </div>
    </Section>
  );
}
