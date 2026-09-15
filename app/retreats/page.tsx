import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { PageIntro, Section } from "@/components/Section";
import { pageMetadata } from "@/lib/metadata";
import { retreatConcepts, rootAndRise } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Retreats",
  description:
    "Spark Life Collective retreats are experiential gatherings — connection, reflection, conversation, prayer, and Scripture. Root & Rise is gathering October 6–7, 2026.",
  path: "/retreats",
});

export default function RetreatsPage() {
  return (
    <>
      <Section className="py-16 sm:py-24">
        <PageIntro eyebrow="Gatherings" title="Retreats">
          <p>
            These are not lectures. SLC retreats are built around connection,
            reflection, conversation, creativity, discovery, prayer, Scripture,
            and spiritual grounding — the kind of room where you can tell the
            truth and still belong.
          </p>
        </PageIntro>

        <article className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-sm border border-primary/20 bg-white/70">
          <div className="grid gap-0 md:grid-cols-[1.3fr_0.7fr]">
            <div className="px-6 py-8 sm:px-10">
              <p className="eyebrow text-primary">Now gathering</p>
              <h2 className="mt-3 font-serif text-3xl font-light">
                {rootAndRise.name}
              </h2>
              <p className="mt-3 text-lg text-ink/75">{rootAndRise.theme}</p>
              <p className="mt-5 text-sm font-semibold text-primary">
                {rootAndRise.datesLabel} · {rootAndRise.format}
              </p>
              <div className="mt-8">
                <ButtonLink href={rootAndRise.href}>
                  Details &amp; registration
                </ButtonLink>
              </div>
            </div>
            <div className="flex items-end bg-ink px-6 py-8 text-gold-light">
              <p className="font-serif text-xl italic">
                {rootAndRise.aspects.join(" + ")}
              </p>
            </div>
          </div>
        </article>
      </Section>

      <Section className="pt-0">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif text-3xl font-light">Exploratory / coming</h2>
          <p className="mt-3 max-w-2xl text-ink/75">
            A broader set of retreats SLC can draw from. Only Root &amp; Rise is
            currently scheduled. The rest are conceptual — no dates, no prices,
            no registration.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {retreatConcepts.map((retreat) => (
              <li
                key={retreat.name}
                className="flex flex-col rounded-sm border border-ink/10 bg-white/50 p-5"
              >
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-moss">
                  {retreat.scheduled ? "Gathering now" : "Exploratory"}
                </p>
                <h3 className="mt-2 font-serif text-xl font-normal">
                  {retreat.href ? (
                    <Link href={retreat.href} className="hover:text-primary">
                      {retreat.name}
                    </Link>
                  ) : (
                    retreat.name
                  )}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/75">
                  {retreat.theme}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="border-t border-ink/10">
        <div className="mx-auto max-w-xl">
          <h2 className="font-serif text-2xl font-light">Retreat updates</h2>
          <p className="mt-2 text-sm text-ink/70">
            Stay informed without registering for a specific gathering.
          </p>
          <div className="mt-6">
            <NewsletterSignup />
          </div>
        </div>
      </Section>
    </>
  );
}
