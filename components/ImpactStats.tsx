import { Church, Infinity, MapPinned, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const stats: Array<{
  value: string;
  label: string;
  sublabel?: string;
  icon: LucideIcon;
}> = [
  { value: "5,000+", label: "Lives Equipped", icon: Users },
  { value: "150+", label: "Churches Engaged", icon: Church },
  { value: "25+", label: "Communities Reached", icon: MapPinned },
  { value: "∞", label: "A Brighter Tomorrow", sublabel: "And Counting", icon: Infinity },
];

export function ImpactStats() {
  return (
    <section className="border-y border-navy/8 bg-white px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-center lg:gap-10">
        <p className="kicker shrink-0 text-navy/45">A growing impact</p>
        <ul className="grid flex-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <li
                key={stat.label}
                className={`flex items-start gap-3 ${index > 0 ? "lg:border-l lg:border-navy/10 lg:pl-8" : ""}`}
              >
                <Icon
                  className="mt-1.5 h-5 w-5 shrink-0 text-gold"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <div>
                  <p className="font-mango text-3xl leading-none text-navy">{stat.value}</p>
                  <p className="mt-1.5 text-sm leading-snug text-navy/65">{stat.label}</p>
                  {stat.sublabel ? (
                    <p className="text-sm leading-snug text-navy/65">{stat.sublabel}</p>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
