import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Logo } from "@/components/Logo";
import { MoodBoard } from "@/components/MoodBoard";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { RetreatFlyer } from "@/components/RetreatFlyer";
import { Section } from "@/components/Section";
import { DraftNote } from "@/components/StatusNotes";
import { Sunburst } from "@/components/Sunburst";
import { pageMetadata } from "@/lib/metadata";
import { copy, rootAndRise, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: site.name,
  description:
    "Spark Life Collective is a 501(c)(3) nonprofit ministry offering free virtual retreats. Join Root & Rise, October 14–15, 2026.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy text-paper">
        <Sunburst className="right-[-8rem] top-[-8rem] h-[42rem] w-[42rem]" />
        <Sunburst className="bottom-[-10rem] left-[-8rem] h-[36rem] w-[36rem] opacity-70" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
          <Logo variant="light" priority className="h-28 w-auto sm:h-40" />
          <h1 className="sr-only">{site.name}</h1>
          <div className="mt-10 max-w-xl">
            <DraftNote tone="dark">
              <p className="font-script text-4xl leading-tight text-gold-light sm:text-5xl">
                {site.taglineDraft}
              </p>
            </DraftNote>
          </div>
          <p className="mt-6 text-sm text-paper/70">
            Nonprofit ministry · Est. 2024
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="/retreats/root-and-rise" variant="gold">
              Join Root &amp; Rise
            </ButtonLink>
            <ButtonLink href="/give" variant="onDark">
              Give
            </ButtonLink>
          </div>
        </div>
      </section>

      <MoodBoard />

      <Section>
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow text-gold-light">Who we are</p>
          <DraftNote tone="dark" className="mt-4">
            <p className="font-serif text-2xl font-normal leading-relaxed text-paper">
              {copy.homeIntro.text}
            </p>
          </DraftNote>
        </div>
      </Section>

      <Section className="pt-0">
        <article className="overflow-hidden rounded-sm border border-gold/25 bg-navy-deep">
          <div className="grid md:grid-cols-[1.1fr_0.9fr]">
            <div className="px-6 py-8 sm:px-10 sm:py-12">
              <p className="eyebrow text-gold-light">Featured retreat</p>
              <h2 className="mt-3 font-serif text-4xl font-normal text-paper sm:text-5xl">
                {rootAndRise.name}
              </h2>
              <p className="mt-3 text-lg text-paper/75">{rootAndRise.theme}</p>
              <p className="mt-6 text-sm font-semibold tracking-wide text-gold">
                {rootAndRise.datesLabel} · {rootAndRise.timeEt}
              </p>
              <p className="mt-1 text-sm text-paper/70">
                Free virtual retreat · {rootAndRise.limitedSpace}
              </p>
              <div className="mt-8">
                <ButtonLink href={rootAndRise.href}>
                  Retreat details &amp; registration
                </ButtonLink>
              </div>
            </div>
            <div className="relative min-h-64 bg-navy md:min-h-full">
              <RetreatFlyer
                className="h-full max-h-[32rem] object-cover object-top md:absolute md:inset-0 md:max-h-none"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </article>
      </Section>

      <Section className="pt-0">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow text-gold-light">How it works</p>
          <h2 className="mt-3 font-serif text-4xl font-normal text-paper">
            Free to attend. Held open by giving.
          </h2>
          <DraftNote tone="dark" className="mt-6">
            <p className="text-lg leading-relaxed text-paper/85">
              {copy.howItWorks.text}
            </p>
          </DraftNote>
          <p className="mt-8">
            <ButtonLink href="/give" variant="secondary">
              Support the work
            </ButtonLink>
          </p>
        </div>
      </Section>

      <Section className="border-t border-gold/20 pt-16">
        <div className="mx-auto max-w-xl">
          <h2 className="font-serif text-3xl font-normal text-paper">
            Hear about future retreats
          </h2>
          <p className="mt-2 text-sm text-paper/70">
            Separate from Root &amp; Rise registration — for those who want
            updates without signing up for a specific gathering.
          </p>
          <div className="mt-6">
            <NewsletterSignup variant="footer" />
          </div>
        </div>
      </Section>
    </>
  );
}
