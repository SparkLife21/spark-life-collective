"use client";

import { FormEvent, useState } from "react";
import { contactEmail } from "@/lib/integrations";
import { SwapPoint } from "@/components/SwapPoint";

export function ContactForm() {
  const email = contactEmail();
  const [sent, setSent] = useState(false);

  if (!email) {
    return (
      <SwapPoint
        id="contact-form"
        comment="OPEN DECISION: contact inbox"
        title="Contact form — awaiting inbox"
        description="A name, email, and message form will send here once Spark Life confirms the inbox. Set NEXT_PUBLIC_CONTACT_EMAIL. Until then this form is not delivering messages."
      />
    );
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const from = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Spark Life Collective — message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${from})`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <label className="grid gap-1 text-sm font-medium">
        Name
        <input
          name="name"
          required
          autoComplete="name"
          className="min-h-12 rounded-sm border border-ink/20 bg-white px-3 font-normal"
        />
      </label>
      <label className="grid gap-1 text-sm font-medium">
        Email
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          className="min-h-12 rounded-sm border border-ink/20 bg-white px-3 font-normal"
        />
      </label>
      <label className="grid gap-1 text-sm font-medium">
        Message
        <textarea
          name="message"
          required
          rows={6}
          className="rounded-sm border border-ink/20 bg-white px-3 py-3 font-normal"
        />
      </label>
      <button
        type="submit"
        className="inline-flex min-h-12 w-fit items-center rounded-sm bg-primary px-6 font-semibold text-white hover:bg-primary-dark"
      >
        Send message
      </button>
      {sent ? (
        <p className="text-sm text-moss">
          Your email app should open with the message addressed to the confirmed
          inbox.
        </p>
      ) : null}
    </form>
  );
}
