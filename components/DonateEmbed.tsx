import { donateUrl } from "@/lib/integrations";
import { SwapPoint } from "@/components/SwapPoint";

type DonateEmbedProps = {
  heading?: string;
};

export function DonateEmbed({ heading = "Give" }: DonateEmbedProps) {
  const href = donateUrl();

  if (href) {
    return (
      <a
        href={href}
        className="inline-flex min-h-12 items-center justify-center rounded-sm bg-gold px-8 text-base font-semibold text-navy hover:bg-gold-light"
      >
        {heading}
      </a>
    );
  }

  return (
    <SwapPoint
      id="donate"
      comment="DONATE EMBED: [Givebutter/Donorbox/PayPal Giving Fund — confirm platform]"
      title="Donate button — awaiting platform"
      description="No giving platform has been confirmed. Givebutter and Donorbox are common low-fee options for small nonprofits — flagged as options, not a decision made on Spark Life’s behalf. Set NEXT_PUBLIC_DONATE_URL (or replace this block with an embed) when the platform is chosen."
    >
      <p className="mt-4 text-sm font-medium text-paper/70">
        Placeholder CTA: Give — swap this for the live donate link or embed.
      </p>
    </SwapPoint>
  );
}
