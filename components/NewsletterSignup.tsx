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

  if (action) {
    const fieldClass =
      "min-h-11 rounded-sm border border-gold/30 bg-white/5 px-3 text-paper";

    return (
      <form
        action={action}
        method="post"
        className="grid gap-3"
        data-signup={variant}
      >
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
            <span className="text-paper/50">
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
          className="min-h-11 rounded-sm bg-gold px-4 text-sm font-semibold text-navy hover:bg-gold-light"
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
      tone="dark"
    />
  );
}
