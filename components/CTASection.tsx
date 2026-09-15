import Image from "next/image";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="relative isolate min-h-[22rem] overflow-hidden lg:min-h-[24rem]">
      {/* TODO: replace with Spark Life approved photography — warm sunrise with a hopeful figure or group */}
      <Image
        src="/images/homepage/cta-sunrise-light.jpg"
        alt="Silhouettes of people with arms raised toward a bright sunrise over the mountains."
        fill
        className="object-cover object-[center_65%]"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy/70 via-navy/35 to-navy/25"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-navy/15"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 text-paper sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:py-20">
        <div className="max-w-xl">
          <p className="kicker text-gold-light">Be part of what’s next</p>
          <h2 className="mt-3 font-mango text-4xl font-normal leading-tight sm:text-5xl">
            Together, we can spark lasting change.
          </h2>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/give" className="btn-gold">
              Give today
            </Link>
            <Link href="/partner" className="btn-outline btn-outline-light">
              Partner with us
            </Link>
          </div>
        </div>
        <blockquote className="max-w-xs lg:text-right">
          <p className="font-script text-[2rem] leading-snug text-gold-light">
            “You are the light
            <br />
            of the world.”
          </p>
          <footer className="kicker mt-3 text-paper/75">Matthew 5:14</footer>
        </blockquote>
      </div>
    </section>
  );
}
