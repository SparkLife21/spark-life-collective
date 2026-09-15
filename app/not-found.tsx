import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="eyebrow text-gold">404</p>
      <h1 className="mt-4 font-serif text-4xl font-normal text-navy">
        This path isn&apos;t here.
      </h1>
      <p className="mt-4 text-navy/70">
        The page may have moved, or the address may be incomplete.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <ButtonLink href="/">Home</ButtonLink>
        <Link
          href="/retreats/root-and-rise"
          className="inline-flex min-h-11 items-center px-4 font-semibold text-navy"
        >
          Root &amp; Rise
        </Link>
      </div>
    </div>
  );
}
