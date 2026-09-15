import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function HeroOverlays({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to left, rgba(2,53,80,0.22) 0%, transparent 42%), radial-gradient(circle at 62% 38%, rgba(228,203,138,0.18), transparent 55%)",
        }}
        aria-hidden="true"
      />
      <p className="kicker absolute right-5 top-5 max-w-[7.75rem] text-right leading-[1.7] text-white [text-shadow:0_2px_14px_rgba(2,53,80,0.85)]">
        A brighter
        <br />
        tomorrow
        <br />
        together.
      </p>
      <p className="absolute bottom-7 right-5 max-w-[11rem] text-right font-script text-[1.9rem] leading-[1.12] text-white [text-shadow:0_2px_14px_rgba(2,53,80,0.8)]">
        People
        <br />
        Purpose
        <br />
        Possibility
        <br />
        for a Brighter
        <br />
        World.
      </p>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative flex flex-col-reverse overflow-hidden bg-paper lg:block lg:min-h-[38rem]">
      <figure className="relative min-h-[22rem] w-full lg:absolute lg:inset-y-0 lg:right-0 lg:left-[38%] lg:min-h-0">
        {/* TODO: replace with Spark Life approved photography if a licensed original is supplied */}
        <Image
          src="/images/homepage/hero-sitting-circle.jpg"
          alt="A diverse, multigenerational group of adults sitting together on a hillside at golden hour, talking and smiling."
          fill
          priority
          className="object-cover object-[58%_46%]"
          sizes="(max-width: 1024px) 100vw, 62vw"
        />
        <HeroOverlays className="absolute inset-0 lg:hidden" />
      </figure>

      <HeroOverlays className="pointer-events-none absolute inset-y-0 left-[38%] right-0 z-30 hidden lg:block" />

      <div className="relative mx-auto flex w-full max-w-6xl items-center px-4 sm:px-6">
        <div className="relative z-[32] w-full bg-paper py-12 sm:py-16 lg:min-h-[38rem] lg:w-[52%] lg:rounded-r-[2.75rem] lg:py-20 lg:pr-12">
          <h1 className="font-mango text-[2.55rem] font-bold leading-[1.05] tracking-tight text-navy sm:text-5xl lg:text-[3.55rem]">
            <span className="block">Faith Fuels</span>
            <span className="block">Brighter Tomorrows</span>
          </h1>
          <span className="mt-6 block h-px w-14 bg-gold" aria-hidden="true" />
          <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-navy/75">
            Equipping individuals, teams, churches, and communities to live with
            clarity, character, and Kingdom impact.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/retreats" className="btn-gold gap-2">
              Explore retreats
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
            </Link>
            <Link href="#mission" className="btn-outline">
              Our mission
            </Link>
          </div>
          <p className="kicker mt-8 text-navy/40">
            People • Purpose • Possibility
          </p>
        </div>
      </div>
    </section>
  );
}
