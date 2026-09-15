import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { DonateEmbed } from "@/components/DonateEmbed";
import { RegistrationEmbed } from "@/components/RegistrationEmbed";
import { RetreatFlyer } from "@/components/RetreatFlyer";
import { Section } from "@/components/Section";
import { Sunburst } from "@/components/Sunburst";
import { ConfirmNote, DraftNote } from "@/components/StatusNotes";
import { pageMetadata } from "@/lib/metadata";
import { copy, getSiteUrl, rootAndRise } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Root & Rise",
  description:
    "Root & Rise is a free two-day virtual retreat, October 14–15, 2026, 1–2 PM ET. Anchored faith through hardship. A sacred reset. Limited space.",
  path: "/retreats/root-and-rise",
});

const faqs = [
  {
    question: "How do I join on Zoom?",
    answer: (
      <>
        Register below and you will receive Zoom details.{" "}
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
        Time ({rootAndRise.timeEt}).
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
    image: `${getSiteUrl()}${rootAndRise.flyerSrc}`,
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
    offers: {
      "@type": "Offer",
      price: 0,
      priceCurrency: "USD",
      url: rootAndRise.registerUrl,
      availability: "https://schema.org/LimitedAvailability",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative isolate overflow-hidden border-b border-gold/20 bg-navy">
        <Sunburst className="right-[-10rem] top-[-8rem] h-[40rem] w-[40rem] opacity-70" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:py-16">
          <div className="overflow-hidden rounded-sm border border-gold/25">
            <RetreatFlyer priority />
          </div>
          <div>
            <p className="eyebrow text-gold-light">
              {rootAndRise.aspects.join(" + ")}
            </p>
            <h1 className="mt-4 font-serif text-5xl font-normal leading-[0.95] tracking-tight text-paper sm:text-7xl">
              Root{" "}
              <span className="font-script text-gold" aria-hidden="true">
                &amp;
              </span>{" "}
              Rise
            </h1>
            <p className="mt-6 max-w-xl font-serif text-2xl italic text-paper/85">
              {rootAndRise.theme}
            </p>
            <p className="mt-6 text-lg font-semibold text-gold">
              {rootAndRise.datesFlyer} · {rootAndRise.timeEt}
            </p>
            <p className="mt-1 font-serif text-base text-gold-light">
              Free virtual retreat · {rootAndRise.limitedSpace}
            </p>
            <p className="mt-6 text-sm tracking-wide text-paper/70">
              Scripture · {rootAndRise.scriptureReference}
            </p>
            <p className="mt-2 max-w-xl text-sm text-paper/50">
              Full verse text will be added when Spark Life supplies the
              translation they want used.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="#register">Register free</ButtonLink>
              <ButtonLink href="/give" variant="secondary">
                Give
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { label: "Format", value: rootAndRise.format },
            { label: "Dates", value: rootAndRise.datesLabel },
            {
              label: "Time",
              lines: [...rootAndRise.timeLines],
            },
            {
              label: "Cost",
              value: rootAndRise.cost,
              href: "#giving",
            },
            { label: "Space", value: rootAndRise.limitedSpace },
          ].map((item) => (
            <div key={item.label} className="border-t border-gold/25 pt-4">
              <dt className="eyebrow text-gold-light">{item.label}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-paper/85">
                {"lines" in item && item.lines ? (
                  <ul className="space-y-1">
                    {item.lines.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                ) : "href" in item && item.href ? (
                  <a
                    href={item.href}
                    className="underline decoration-gold underline-offset-4"
                  >
                    {item.value}
                  </a>
                ) : (
                  "value" in item && item.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section className="pt-0">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-normal text-paper">
            What to expect
          </h2>
          <DraftNote className="mt-5">
            <p className="text-lg leading-relaxed text-paper/85">
              {copy.rootAndRiseExpect.text}
            </p>
          </DraftNote>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-normal text-paper">
            Facilitators
          </h2>
          <p className="mt-2 text-sm text-paper/60">
            Name, role, and bio text only — no photos unless Spark Life asks for
            them here.
          </p>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {rootAndRise.facilitators.map((person) => (
              <li
                key={person.name}
                className="rounded-sm border border-gold/20 bg-navy-deep p-6"
              >
                <p className="font-serif text-2xl text-paper">{person.name}</p>
                <p className="mt-1 text-sm font-medium text-gold">{person.role}</p>
                <p className="mt-4 text-sm text-gold-light/80">
                  [FACILITATOR BIOS — insert]
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="pt-0" id="register">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-normal text-paper">Register</h2>
          <p className="mt-3 text-paper/75">
            Root &amp; Rise is free. Space is limited. Registration helps us
            send you the Zoom details and know who is in the room.
          </p>
          <div className="mt-8">
            <RegistrationEmbed />
          </div>
        </div>
      </Section>

      <Section className="pt-0" id="giving">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-normal text-paper">Give</h2>
          <p className="mt-3 text-lg leading-relaxed text-paper/85">
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
          <h2 className="font-serif text-3xl font-normal text-paper">FAQ</h2>
          <div className="mt-8 divide-y divide-gold/20 border-y border-gold/20">
            {faqs.map((item) => (
              <details key={item.question} className="group py-5">
                <summary className="cursor-pointer list-none font-semibold text-paper marker:content-none [&::-webkit-details-marker]:hidden">
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
                <p className="mt-3 text-paper/80">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
