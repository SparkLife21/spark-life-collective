import type { Metadata } from "next";
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
      <Section className="py-16 sm:py-24">
        <PageIntro eyebrow="Our story" title="About Spark Life Collective">
          <p>{site.statusLine}</p>
        </PageIntro>

        <div className="mx-auto mt-16 max-w-6xl">
          <FaithPillars />
        </div>

        <div className="mx-auto mt-20 grid max-w-3xl gap-14">
          <section>
            <h2 className="font-serif text-2xl font-normal text-paper">Mission</h2>
            <p className="mt-4 rounded-sm border border-dashed border-gold/40 px-4 py-5 text-paper/80">
              [MISSION STATEMENT — insert approved copy]
            </p>
            <p className="mt-3 text-sm text-sage">
              Faith is foundational here, not decorative. Formal mission language
              waits on Spark Life’s approved wording.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-normal text-paper">
              What we are building toward
            </h2>
            <DraftNote tone="dark" className="mt-4">
              <p className="text-lg leading-relaxed text-paper/85">
                {copy.aboutBuildingToward.text}
              </p>
            </DraftNote>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-normal text-paper">
              Relationship to Spark Life
            </h2>
            <p className="mt-4 rounded-sm border border-dashed border-violet/50 px-4 py-5 text-paper/80">
              [RELATIONSHIP TO SPARK LIFE — confirm public-facing language, if any]
            </p>
            <p className="mt-3 text-sm text-violet">
              Spark Life Collective is a separate legal entity from Spark Life, the
              commercial faith-based personal development business. This site will
              not invent a legal, licensing, or ownership arrangement.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-normal text-paper">
              Nonprofit status
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-paper/85">
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
