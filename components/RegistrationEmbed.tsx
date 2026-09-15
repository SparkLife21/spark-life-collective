import { jotformRootAndRiseUrl } from "@/lib/integrations";
import { rootAndRise } from "@/lib/site";

export function RegistrationEmbed() {
  const src = jotformRootAndRiseUrl();

  return (
    <div id="jotform-root-and-rise" data-swap-point="JOTFORM EMBED: Root & Rise registration">
      {/* JOTFORM EMBED: Root & Rise registration */}
      <p className="mb-4 text-sm text-navy/70">
        Prefer a full page?{" "}
        <a
          href={src || rootAndRise.registerUrl}
          className="font-semibold text-navy underline decoration-gold underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open the registration form
        </a>
        .
      </p>
      <div className="overflow-hidden rounded-sm border border-navy/10 bg-white">
        <iframe
          title="Root & Rise registration"
          src={src}
          className="w-full border-0"
          style={{ minHeight: 1280 }}
          loading="lazy"
        />
      </div>
    </div>
  );
}
