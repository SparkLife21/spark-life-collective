import { jotformRootAndRiseUrl } from "@/lib/integrations";
import { SwapPoint } from "@/components/SwapPoint";

export function RegistrationEmbed() {
  const src = jotformRootAndRiseUrl();

  if (src) {
    return (
      <div className="overflow-hidden rounded-sm border border-ink/10 bg-white">
        {/* JOTFORM EMBED: Root & Rise registration */}
        <iframe
          title="Root & Rise registration"
          src={src}
          className="min-h-[640px] w-full"
        />
      </div>
    );
  }

  return (
    <SwapPoint
      id="jotform-root-and-rise"
      comment="JOTFORM EMBED: Root & Rise registration"
      title="Jotform embed — Root & Rise registration"
      description="This block is a one-line swap once Spark Life shares the Jotform embed URL. Set NEXT_PUBLIC_JOTFORM_ROOT_AND_RISE_URL. Minimum fields: name, email, timezone."
    >
      <ul className="mt-5 grid gap-2 text-sm text-ink/80 sm:grid-cols-3">
        <li className="rounded-sm bg-paper px-3 py-2">Name</li>
        <li className="rounded-sm bg-paper px-3 py-2">Email</li>
        <li className="rounded-sm bg-paper px-3 py-2">Timezone</li>
      </ul>
    </SwapPoint>
  );
}
