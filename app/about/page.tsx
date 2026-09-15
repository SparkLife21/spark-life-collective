import type { Metadata } from "next";
import Image from "next/image";
import { FaithPillars } from "@/components/FaithPillars";
import { PageIntro, Section } from "@/components/Section";
import { DraftNote } from "@/components/StatusNotes";
import { pageMetadata } from "@/lib/metadata";
import { copy, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Spark Life Collective is a 501(c)(3) nonprofit ministry, operating since 2024, building free retreats grounded in the way of Jesus Christ.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-paper lg:min-h-[28rem]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="lg:max-w-[46%]">
            <PageIntro eyebrow="Our story" title="About Spark Life Collective">
              <p>{site.statusLine}</p>
            </PageIntro>
          </div>
        </div>
        <figure className="relative min-h-72 w-full lg:absolute lg:inset-y-0 lg:right-0 lg:w-[52%]">
          <Image
            src="/images/mood/horse.jpg"
            alt="A woman standing with a white horse in a sunlit desert landscape."
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 52vw"
          />
        </figure>
      </section>

      <Section className="bg-white">
        <FaithPillars />
      </Section>

      <Section>
        <div className="mx-auto grid max-w-3xl gap-14">
          <section>
            <h2 className="font-serif text-2xl font-normal text-navy">Mission</h2>
            <p className="mt-4 rounded-sm border border-dashed border-gold/50 px-4 py-5 text-navy/75">
              [MISSION STATEMENT — insert approved copy]
            </p>
            <p className="mt-3 text-sm text-sage">
              Faith is foundational here, not decorative. Formal mission language
              waits on Spark Life’s approved wording.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-normal text-navy">
              What we are building toward
            </h2>
            <DraftNote className="mt-4">
              <p className="text-lg leading-relaxed text-navy/80">
                {copy.aboutBuildingToward.text}
              </p>
            </DraftNote>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-normal text-navy">
              Relationship to Spark Life
            </h2>
            <p className="mt-4 rounded-sm border border-dashed border-violet/50 px-4 py-5 text-navy/75">
              [RELATIONSHIP TO SPARK LIFE — confirm public-facing language, if any]
            </p>
            <p className="mt-3 text-sm text-violet">
              Spark Life Collective is a separate legal entity from Spark Life, the
              commercial faith-based personal development business. This site will
              not invent a legal, licensing, or ownership arrangement.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-normal text-navy">
              Nonprofit status
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-navy/80">
              {site.nonprofitLine}{" "}
              <span className="italic text-sage">
                [CONFIRM EIN / receipt process with Spark Life before publishing]
              </span>
            </p>
          </section>
        </div>
      </Section>
    </>
  );
}
