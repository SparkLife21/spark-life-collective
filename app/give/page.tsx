import type { Metadata } from "next";
import { DonateEmbed } from "@/components/DonateEmbed";
import { PageIntro, Section } from "@/components/Section";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Give",
  description:
    "Spark Life Collective retreats are free. Donations fund them and keep them accessible regardless of ability to pay.",
  path: "/give",
});

export default function GivePage() {
  return (
    <Section className="py-16 sm:py-24">
      <PageIntro eyebrow="Stewardship" title="Give">
        <p>
          Every SLC retreat is free to attend. Donations fund the work and keep
          the door open for anyone, regardless of what they can afford. If you
          can give, you help hold that open.
        </p>
      </PageIntro>

      <div className="mx-auto mt-14 max-w-3xl space-y-12">
        <DonateEmbed />

        <section>
          <h2 className="font-serif text-2xl font-normal text-navy">
            Tax deductibility
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-navy/80">
            {site.nonprofitLine}
          </p>
          <p className="mt-3 text-sm italic text-sage">
            [CONFIRM EIN / receipt process with Spark Life before publishing]
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-normal text-navy">
            Where your gift goes
          </h2>
          <p className="mt-4 rounded-sm border border-dashed border-dusk/50 bg-dusk/10 px-4 py-5 text-navy/75">
            [WHERE YOUR GIFT GOES — insert once defined]
          </p>
        </section>
      </div>
    </Section>
  );
}
