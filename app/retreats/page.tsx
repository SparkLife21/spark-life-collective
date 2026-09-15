import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { RetreatFlyer } from "@/components/RetreatFlyer";
import { PageIntro, Section } from "@/components/Section";
import { pageMetadata } from "@/lib/metadata";
import { retreatConcepts, rootAndRise } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Retreats",
  description:
    "Spark Life Collective retreats are experiential gatherings — connection, reflection, conversation, prayer, and Scripture. Root & Rise is gathering October 14–15, 2026.",
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

        <article className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-sm bg-navy text-paper">
          <div className="grid gap-0 md:grid-cols-[1.3fr_0.7fr]">
            <div className="px-6 py-8 sm:px-10">
              <p className="eyebrow text-gold-light">Now gathering</p>
              <h2 className="mt-3 font-serif text-3xl font-normal">
                {rootAndRise.name}
              </h2>
              <p className="mt-3 text-lg text-paper/75">{rootAndRise.theme}</p>
              <p className="mt-5 text-sm font-semibold text-gold-light">
                {rootAndRise.datesLabel} · {rootAndRise.timeEt}
              </p>
              <p className="mt-1 text-sm text-paper/70">
                {rootAndRise.format} · {rootAndRise.limitedSpace}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink href={rootAndRise.registerUrl}>Register now</ButtonLink>
                <ButtonLink href={rootAndRise.href} variant="onDark">
                  Details
                </ButtonLink>
              </div>
            </div>
            <div className="relative min-h-56">
              <RetreatFlyer
                className="h-full max-h-80 object-cover object-top md:absolute md:inset-0 md:max-h-none"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>
        </article>
      </Section>

      <Section className="bg-white pt-0">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif text-3xl font-normal text-navy">
            Exploratory / coming
          </h2>
          <p className="mt-3 max-w-2xl text-navy/70">
            A broader set of retreats SLC can draw from. Only Root &amp; Rise is
            currently scheduled. The rest are conceptual — no dates, no prices,
            no registration.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {retreatConcepts.map((retreat) => (
              <li
                key={retreat.name}
                className="flex flex-col rounded-sm border border-navy/10 bg-paper p-5"
              >
                <p className="kicker text-gold">
                  {retreat.scheduled ? "Gathering now" : "Exploratory"}
                </p>
                <h3 className="mt-2 font-serif text-xl font-normal text-navy">
                  {retreat.href ? (
                    <Link href={retreat.href} className="hover:text-gold">
                      {retreat.name}
                    </Link>
                  ) : (
                    retreat.name
                  )}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/70">
                  {retreat.theme}
                </p>
                {retreat.scheduled ? (
                  <p className="mt-4">
                    <ButtonLink href={rootAndRise.registerUrl}>
                      Register now
                    </ButtonLink>
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="border-t border-navy/8">
        <div className="mx-auto max-w-xl">
          <h2 className="font-serif text-2xl font-normal text-navy">
            Retreat updates
          </h2>
          <p className="mt-2 text-sm text-navy/60">
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
