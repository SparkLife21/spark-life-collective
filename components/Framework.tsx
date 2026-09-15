import {
  ArrowRight,
  Compass,
  Flame,
  Mountain,
  RefreshCw,
  Sparkle,
  Sun,
  Users,
} from "lucide-react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

const aspects: Array<{
  name: string;
  items: string[];
  icon: LucideIcon;
  color: string;
  iconClass: string;
}> = [
  {
    name: "Stability",
    items: ["Wealth", "Accountability", "Health"],
    icon: Flame,
    color: "#9B3636",
    iconClass: "text-paper",
  },
  {
    name: "Connection",
    items: ["Energy", "Intimacy", "Relationships"],
    icon: Users,
    color: "#CC9752",
    iconClass: "text-navy",
  },
  {
    name: "Empowerment",
    items: ["Career", "Purpose", "Individuality"],
    icon: Mountain,
    color: "#E4CB8A",
    iconClass: "text-navy",
  },
  {
    name: "Devotion",
    items: ["Adversity", "Adaptability", "Comfort"],
    icon: RefreshCw,
    color: "#768779",
    iconClass: "text-paper",
  },
  {
    name: "Expression",
    items: ["Creativity", "Communication", "Appearance"],
    icon: Sun,
    color: "#8CA2BD",
    iconClass: "text-navy",
  },
  {
    name: "Exploration",
    items: ["Adventure", "Play", "Dreaming"],
    icon: Compass,
    color: "#857EA2",
    iconClass: "text-paper",
  },
  {
    name: "Belief",
    items: ["Influence", "Curiosity", "Spirituality"],
    icon: Sparkle,
    color: "#023550",
    iconClass: "text-gold-light",
  },
];

export function Framework() {
  return (
    <section id="framework" className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="kicker text-center text-navy/45">The Spark Life Framework</p>
        <h2 className="mt-3 text-center font-mango text-3xl font-normal text-navy sm:text-4xl">
          7 Aspect Groups. A More God-Aligned You.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-navy/65">
          Our framework helps people grow in every area of life — because true
          impact starts from the inside out.
        </p>

        <ul className="relative mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-7">
          {aspects.map((aspect) => {
            const Icon = aspect.icon;
            return (
              <li key={aspect.name} className="flex flex-col items-center text-center">
                <span
                  className={`flex h-[4.6rem] w-[4.6rem] items-center justify-center rounded-full ${aspect.iconClass}`}
                  style={{ backgroundColor: aspect.color }}
                  aria-hidden="true"
                >
                  <Icon className="h-7 w-7" strokeWidth={1.4} />
                </span>
                <h3 className="kicker mt-4 text-navy">{aspect.name}</h3>
                <ul className="mt-2 space-y-0.5 text-xs leading-relaxed text-navy/60">
                  {aspect.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>

        <p className="mt-12 text-center">
          <Link href="/about" className="btn-gold gap-2">
            Learn more about the framework
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
          </Link>
        </p>
      </div>

      <p className="pointer-events-none absolute right-8 top-[42%] hidden max-w-[9.5rem] text-right font-script text-[1.85rem] leading-[1.15] text-gold xl:block">
        Real People
        <br />
        Real Growth
        <br />
        A Brighter
        <br />
        Tomorrow.
      </p>
    </section>
  );
}
