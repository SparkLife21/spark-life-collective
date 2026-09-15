import type { Metadata } from "next";
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
    <Section className="py-16 sm:py-24">
      <PageIntro eyebrow="Our story" title="About Spark Life Collective">
        <p>{site.statusLine}</p>
      </PageIntro>

      <div className="mx-auto mt-14 grid max-w-3xl gap-14">
        <section>
          <h2 className="font-serif text-2xl font-light">Mission</h2>
          <p className="mt-4 rounded-sm border border-dashed border-moss/50 bg-moss/10 px-4 py-5 text-ink/80">
            {/* Do not invent formal mission/vision statement wording. */}
            [MISSION STATEMENT — insert approved copy]
          </p>
          <p className="mt-3 text-sm text-moss">
            Faith is foundational here, not decorative. Formal mission language
            waits on Spark Life’s approved wording.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-light">What we are building toward</h2>
          <DraftNote className="mt-4">
            <p className="text-lg leading-relaxed text-ink/85">
              {copy.aboutBuildingToward.text}
            </p>
          </DraftNote>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-light">
            Relationship to Spark Life
          </h2>
          <p className="mt-4 rounded-sm border border-dashed border-heather/50 bg-heather/10 px-4 py-5 text-ink/80">
            {/* OPEN DECISION: whether/how to publicly acknowledge any connection to Spark Life. */}
            [RELATIONSHIP TO SPARK LIFE — confirm public-facing language, if any]
          </p>
          <p className="mt-3 text-sm text-heather">
            Spark Life Collective is a separate legal entity from Spark Life, the
            commercial faith-based personal development business. This site will
            not invent a legal, licensing, or ownership arrangement.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-light">Nonprofit status</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/85">
            {site.nonprofitLine}{" "}
            <span className="italic text-moss">
              [CONFIRM EIN / receipt process with Spark Life before publishing]
            </span>
          </p>
        </section>
      </div>
    </Section>
  );
}
