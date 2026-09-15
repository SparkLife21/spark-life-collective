import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { DonateEmbed } from "@/components/DonateEmbed";
import { HorizonScene } from "@/components/HorizonScene";
import { RegistrationEmbed } from "@/components/RegistrationEmbed";
import { Section } from "@/components/Section";
import { ConfirmNote, DraftNote } from "@/components/StatusNotes";
import { pageMetadata } from "@/lib/metadata";
import { copy, getSiteUrl, rootAndRise } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Root & Rise",
  description:
    "Root & Rise is a free two-day virtual retreat, October 6–7, 2026. Anchored faith through hardship. A sacred reset.",
  path: "/retreats/root-and-rise",
});

const faqs = [
  {
    question: "How do I join on Zoom?",
    answer: (
      <>
        Register below.{" "}
        <ConfirmNote>
          [CONFIRM: how and when the Zoom link is sent after registration]
        </ConfirmNote>
      </>
    ),
  },
  {
    question: "What if I'm in a different timezone?",
    answer: (
      <>
        The gathering is live at {rootAndRise.timeLabel}. Join at the time that
        matches your zone. If you live outside these zones, convert from Eastern
        Time (1:00 PM ET).
      </>
    ),
  },
  {
    question: "Do I need any prior experience?",
    answer: (
      <>
        No. Come as you are. You do not need to know Spark Life Collective, a
        particular tradition of prayer, or any prior retreat.
      </>
    ),
  },
  {
    question: "Is this recorded?",
    answer: (
      <ConfirmNote>
        [CONFIRM: whether Root & Rise sessions are recorded, and if so, how
        recordings are shared]
      </ConfirmNote>
    ),
  },
];

export default function RootAndRisePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Root & Rise",
    description: rootAndRise.theme,
    startDate: `${rootAndRise.startDate}T13:00:00-04:00`,
    endDate: `${rootAndRise.endDate}T14:00:00-04:00`,
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "VirtualLocation",
      url: `${getSiteUrl()}${rootAndRise.href}`,
    },
    organizer: {
      "@type": "Organization",
      name: "Spark Life Collective",
      url: getSiteUrl(),
    },
    isAccessibleForFree: true,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="hero-glow relative isolate overflow-hidden text-paper">
        <HorizonScene />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="eyebrow text-gold-light">
            {rootAndRise.aspects.join(" + ")}
          </p>
          <h1 className="mt-4 font-serif text-4xl font-light tracking-tight sm:text-6xl">
            {rootAndRise.name}
          </h1>
          <p className="mt-5 max-w-2xl font-serif text-2xl italic text-gold-light">
            {rootAndRise.theme}
          </p>
          <p className="mt-8 text-sm tracking-wide text-paper/80">
            Scripture · {rootAndRise.scriptureReference}
          </p>
          <p className="mt-2 max-w-xl text-sm text-paper/55">
            Full verse text will be added when Spark Life supplies the
            translation they want used.
          </p>
        </div>
      </section>

      <Section>
        <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Format", value: rootAndRise.format },
            { label: "Dates", value: rootAndRise.datesLabel },
            { label: "Time", value: rootAndRise.timeLabel },
            {
              label: "Cost",
              value: rootAndRise.cost,
              href: "#giving",
            },
          ].map((item) => (
            <div key={item.label} className="border-t border-ink/15 pt-4">
              <dt className="eyebrow text-primary">{item.label}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-ink/85">
                {"href" in item && item.href ? (
                  <a href={item.href} className="underline decoration-gold underline-offset-4">
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section className="pt-0">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-light">What to expect</h2>
          <DraftNote className="mt-5">
            <p className="text-lg leading-relaxed text-ink/85">
              {copy.rootAndRiseExpect.text}
            </p>
          </DraftNote>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-light">Facilitators</h2>
          <p className="mt-2 text-sm text-ink/60">
            {/* OPEN DECISION: defaulting to no headshots, consistent with symbolic imagery. */}
            Name, role, and bio text only — no photos unless Spark Life asks for
            them here.
          </p>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {rootAndRise.facilitators.map((person) => (
              <li
                key={person.name}
                className="rounded-sm border border-ink/10 bg-white/60 p-6"
              >
                <p className="font-serif text-2xl">{person.name}</p>
                <p className="mt-1 text-sm font-medium text-primary">
                  {person.role}
                </p>
                <p className="mt-4 text-sm text-moss">
                  [FACILITATOR BIOS — insert]
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="pt-0" id="register">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-light">Register</h2>
          <p className="mt-3 text-ink/75">
            Root &amp; Rise is free. Registration helps us send you the Zoom
            details and know who is in the room.
          </p>
          <div className="mt-8">
            <RegistrationEmbed />
          </div>
        </div>
      </Section>

      <Section className="pt-0" id="giving">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-light">Give</h2>
          <p className="mt-3 text-lg leading-relaxed text-ink/85">
            The retreat is free. Donations keep it that way — so someone who
            could not pay still has a seat.
          </p>
          <p className="mt-6">
            <ButtonLink href="/give" variant="secondary">
              Go to the giving page
            </ButtonLink>
          </p>
          <div className="mt-8">
            <DonateEmbed heading="Give now" />
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-light">FAQ</h2>
          <div className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
            {faqs.map((item) => (
              <details key={item.question} className="group py-5">
                <summary className="cursor-pointer list-none font-semibold text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {item.question}
                    <span
                      aria-hidden="true"
                      className="text-gold transition group-open:rotate-45"
                    >
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 text-ink/80">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
