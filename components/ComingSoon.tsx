import { PageIntro, Section } from "@/components/Section";

export function ComingSoon({
  title,
  eyebrow,
}: {
  title: string;
  eyebrow?: string;
}) {
  return (
    <Section className="py-24">
      <PageIntro eyebrow={eyebrow ?? "Coming soon"} title={title}>
        <p>
          This section is in the site map from the homepage mock. Copy and
          programs will be added once Spark Life supplies them.
        </p>
      </PageIntro>
    </Section>
  );
}
