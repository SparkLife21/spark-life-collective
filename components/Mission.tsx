import { Building2, Sun, User, Users } from "lucide-react";

const columns = [
  {
    title: "Individuals",
    icon: User,
    lines: ["Discover purpose.", "Build resilience.", "Live fully."],
  },
  {
    title: "Churches & Communities",
    icon: Users,
    lines: ["Stronger people.", "Stronger groups.", "Greater impact."],
  },
  {
    title: "Organizations",
    icon: Building2,
    lines: ["Healthy teams.", "Values-driven culture.", "Sustainable growth."],
  },
  {
    title: "A Brighter Tomorrow",
    icon: Sun,
    lines: ["More people.", "More compassion.", "More light in the world."],
  },
];

export function Mission() {
  return (
    <section id="mission" className="bg-paper px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <p className="kicker text-navy/45">Our mission</p>
        <h2 className="mt-4 font-mango text-3xl font-normal leading-snug text-navy sm:text-[2.35rem]">
          To <span className="font-script text-[1.15em] text-gold">spark</span>{" "}
          transformation through faith, community, and practical tools.
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-[1.02rem] leading-relaxed text-navy/70">
          Spark Life Collective is a 501(c)(3) nonprofit that provides
          Christ-centered experiences, resources, and training to help people
          live with greater wholeness and purpose — at home, in the workplace,
          and in their communities.
        </p>
      </div>

      <ul className="mx-auto mt-14 grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {columns.map((column, index) => {
          const Icon = column.icon;
          return (
            <li
              key={column.title}
              className={`px-6 text-center ${index > 0 ? "lg:border-l lg:border-navy/10" : ""}`}
            >
              <Icon
                className="mx-auto h-7 w-7 text-gold"
                strokeWidth={1.35}
                aria-hidden="true"
              />
              <h3 className="kicker mt-4 text-navy">{column.title}</h3>
              <ul className="mt-3 space-y-1 text-sm leading-relaxed text-navy/65">
                {column.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
