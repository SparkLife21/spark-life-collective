import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { jotformRootAndRiseUrl } from "@/lib/integrations";
import { rootAndRise } from "@/lib/site";

type RetreatCard = {
  title: string;
  subtitle: string;
  meta: string;
  src: string;
  alt: string;
  href?: string;
  registerUrl?: string;
};

const cards: RetreatCard[] = [
  {
    title: "Root & Rise",
    subtitle: "Anchored faith through hardship",
    meta: `${rootAndRise.datesFlyer}  |  ${rootAndRise.timeEt}  |  Virtual`,
    src: rootAndRise.flyerSrc,
    alt: rootAndRise.flyerAlt,
    href: rootAndRise.href,
    registerUrl: jotformRootAndRiseUrl(),
  },
  {
    title: "Connect & Grow",
    subtitle: "Community Retreat",
    meta: "May 25–26, 2025  |  San Diego, CA",
    src: "/images/homepage/retreat-community-fire.jpg",
    alt: "A small group of adults sitting around a campfire at dusk.",
  },
  {
    title: "Lead with Purpose",
    subtitle: "Wild & Rooted",
    meta: "Sep 12–15, 2025  |  Asheville, NC",
    src: "/images/homepage/retreat-cabin-asheville.jpg",
    alt: "A wooden cabin porch overlooking a mountain valley at golden hour.",
  },
];

export function Retreats() {
  return (
    <section className="bg-paper px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
        <div>
          <p className="kicker text-navy/45">Spark Life Retreats</p>
          <h2 className="mt-3 font-mango text-4xl font-normal leading-[1.12] text-navy sm:text-[2.75rem]">
            Experiences That Ignite
            <br />
            Lasting Change
          </h2>
          <p className="mt-5 max-w-md text-navy/70">
            Our retreats bring together faith, practical tools, and authentic
            community to equip people for real transformation. From personal
            growth to professional development, each retreat is designed to
            spark what’s next.
          </p>
          <p className="mt-8">
            <Link href="/retreats" className="btn-gold gap-2">
              View upcoming retreats
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
            </Link>
          </p>
        </div>

        <div>
          <div className="flex items-center gap-4">
            <ul className="grid min-w-0 flex-1 gap-3 sm:grid-cols-3">
              {cards.map((card) => (
                <li key={card.title}>
                  <article className="relative aspect-[4/3] min-h-40 overflow-hidden rounded-md sm:min-h-0">
                    <Image
                      src={card.src}
                      alt={card.alt}
                      fill
                      className={
                        card.registerUrl
                          ? "object-cover object-top"
                          : "object-cover"
                      }
                      sizes="(max-width: 640px) 100vw, 22vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-navy/10" />
                    <div className="absolute inset-x-0 bottom-0 p-3.5 text-paper">
                      <h3 className="kicker text-gold-light">
                        {card.href ? (
                          <Link href={card.href} className="hover:text-paper">
                            {card.title}
                          </Link>
                        ) : (
                          card.title
                        )}
                      </h3>
                      <p className="mt-1.5 font-mango text-[1.05rem] leading-snug">
                        {card.subtitle}
                      </p>
                      <p className="mt-1.5 font-narrow text-[0.68rem] uppercase tracking-[0.14em] text-paper/80">
                        {card.meta}
                      </p>
                      {card.registerUrl ? (
                        <a
                          href={card.registerUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-gold mt-3 min-h-8 px-3 text-[0.65rem]"
                        >
                          Register now
                        </a>
                      ) : null}
                    </div>
                  </article>
                </li>
              ))}
            </ul>
            <Link
              href="/retreats"
              className="kicker hidden shrink-0 text-navy/70 transition-colors hover:text-navy lg:inline"
            >
              See all
              <br />
              retreats →
            </Link>
          </div>
          <p className="mt-4 lg:hidden">
            <Link href="/retreats" className="kicker text-navy/70">
              See all retreats →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
