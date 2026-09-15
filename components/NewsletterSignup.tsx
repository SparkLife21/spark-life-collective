"use client";

import { newsletterActionUrl } from "@/lib/integrations";
import { SwapPoint } from "@/components/SwapPoint";

type NewsletterSignupProps = {
  variant?: "footer" | "page";
  id?: string;
};

export function NewsletterSignup({
  variant = "page",
  id = "email-signup",
}: NewsletterSignupProps) {
  const action = newsletterActionUrl();

  const dark = variant === "footer";

  if (action) {
    const fieldClass = dark
      ? "min-h-11 rounded-sm border border-white/20 bg-white/5 px-3 text-paper"
      : "min-h-11 rounded-sm border border-ink/20 bg-white px-3 text-ink";

    return (
      <form action={action} method="post" className="grid gap-3">
        <label className="grid gap-1 text-sm">
          <span>Email</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            className={fieldClass}
          />
        </label>
        <label className="grid gap-1 text-sm">
          <span>
            Name{" "}
            <span className={dark ? "text-paper/50" : "text-ink/50"}>
              (optional)
            </span>
          </span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            className={fieldClass}
          />
        </label>
        <button
          type="submit"
          className="min-h-11 rounded-sm bg-gold px-4 text-sm font-semibold text-ink hover:bg-gold-light"
        >
          Get retreat updates
        </button>
      </form>
    );
  }

  return (
    <SwapPoint
      id={id}
      comment="EMAIL SIGNUP: connect to ESP"
      title="Email signup — awaiting ESP"
      description="A name (optional) and email capture will live here for people who want future retreat news without registering for Root & Rise. Wire this to Spark Life’s existing email tool when confirmed."
      tone={variant === "footer" ? "dark" : "light"}
    />
  );
}
