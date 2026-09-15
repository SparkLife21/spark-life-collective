import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { HorizonScene } from "@/components/HorizonScene";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { Section } from "@/components/Section";
import { DraftNote } from "@/components/StatusNotes";
import { pageMetadata } from "@/lib/metadata";
import { copy, rootAndRise, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: site.name,
  description:
    "Spark Life Collective is a 501(c)(3) nonprofit ministry offering free virtual retreats. Join Root & Rise, October 6–7, 2026.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <section className="hero-glow relative isolate overflow-hidden text-paper">
        <HorizonScene />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:py-36">
          <p className="eyebrow text-gold-light">Nonprofit ministry · Est. 2024</p>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl font-light leading-[1.15] tracking-tight sm:text-6xl">
            Spark Life Collective
          </h1>
          <div className="mt-8 max-w-xl">
            <DraftNote>
              <p className="font-serif text-2xl italic leading-snug text-gold-light sm:text-3xl">
                {site.taglineDraft}
              </p>
            </DraftNote>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="/retreats/root-and-rise">Join Root &amp; Rise</ButtonLink>
            <ButtonLink href="/give" variant="onDark">
              Give
            </ButtonLink>
          </div>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow text-primary">Who we are</p>
          <DraftNote className="mt-4">
            <p className="text-xl leading-relaxed text-ink/90 sm:text-2xl sm:leading-relaxed">
              {copy.homeIntro.text}
            </p>
          </DraftNote>
        </div>
      </Section>

      <Section className="pt-0">
        <article className="overflow-hidden rounded-sm border border-ink/10 bg-white/60 shadow-[0_20px_60px_-40px_rgba(26,26,26,0.5)]">
          <div className="grid md:grid-cols-[1.1fr_0.9fr]">
            <div className="px-6 py-8 sm:px-10 sm:py-12">
              <p className="eyebrow text-primary">Featured retreat</p>
              <h2 className="mt-3 font-serif text-3xl font-light sm:text-4xl">
                {rootAndRise.name}
              </h2>
              <p className="mt-3 text-lg text-ink/75">{rootAndRise.theme}</p>
              <p className="mt-6 text-sm font-semibold tracking-wide text-primary">
                {rootAndRise.datesLabel}
              </p>
              <p className="mt-1 text-sm text-ink/70">{rootAndRise.timeLabel}</p>
              <div className="mt-8">
                <ButtonLink href={rootAndRise.href}>
                  Retreat details &amp; registration
                </ButtonLink>
              </div>
            </div>
            <div
              className="relative min-h-48 bg-ink md:min-h-full"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#CC9752_0%,_transparent_60%)] opacity-50" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent" />
              <p className="absolute bottom-6 left-6 right-6 font-serif text-xl italic text-gold-light">
                Spirituality + Adversity
              </p>
            </div>
          </div>
        </article>
      </Section>

      <Section className="pt-0">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow text-primary">How it works</p>
          <h2 className="mt-3 font-serif text-3xl font-light">
            Free to attend. Held open by giving.
          </h2>
          <DraftNote className="mt-6">
            <p className="text-lg leading-relaxed text-ink/85">
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

      <Section className="border-t border-ink/10 pt-16">
        <div className="mx-auto max-w-xl">
          <h2 className="font-serif text-2xl font-light">Hear about future retreats</h2>
          <p className="mt-2 text-sm text-ink/70">
            Separate from Root &amp; Rise registration — for those who want
            updates without signing up for a specific gathering.
          </p>
          <div className="mt-6">
            <NewsletterSignup />
          </div>
        </div>
      </Section>
    </>
  );
}
