import { cn } from "@/lib/cn";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("px-4 py-16 sm:px-6 sm:py-20", className)}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="mx-auto max-w-3xl">
      {eyebrow ? <p className="kicker text-gold">{eyebrow}</p> : null}
      <h1 className="mt-3 font-mango text-4xl font-normal tracking-tight text-navy sm:text-5xl">
        {title}
      </h1>
      {children ? (
        <div className="mt-6 text-lg text-navy/75">{children}</div>
      ) : null}
    </header>
  );
}
