/**
 * Swap points for third-party tools.
 *
 * When Spark Life shares real values, set them in `.env.local` (see `.env.example`).
 * Components read these helpers and render the live embed/link instead of the placeholder.
 */

export function jotformRootAndRiseUrl() {
  // JOTFORM EMBED: Root & Rise registration
  return process.env.NEXT_PUBLIC_JOTFORM_ROOT_AND_RISE_URL?.trim() || "";
}

export function donateUrl() {
  // DONATE EMBED: [Givebutter/Donorbox/PayPal Giving Fund — confirm platform]
  return process.env.NEXT_PUBLIC_DONATE_URL?.trim() || "";
}

export function newsletterActionUrl() {
  // EMAIL SIGNUP: connect to ESP
  return process.env.NEXT_PUBLIC_NEWSLETTER_ACTION_URL?.trim() || "";
}

export function contactEmail() {
  // OPEN DECISION: which inbox should /contact go to
  return process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "";
}

export function socialLinks(): Array<{ label: string; href: string }> {
  // OPEN DECISION: confirm handles with Spark Life before adding — don't guess.
  const raw = process.env.NEXT_PUBLIC_SOCIAL_LINKS?.trim();
  if (!raw) return [];

  return raw
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean)
    .map((entry) => {
      const [label, href] = entry.split("|").map((part) => part.trim());
      return { label, href };
    })
    .filter((link) => Boolean(link.label && link.href));
}
