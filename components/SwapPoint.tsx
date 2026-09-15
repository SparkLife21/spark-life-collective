import { cn } from "@/lib/cn";

type SwapPointProps = {
  id: string;
  comment: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
  tone?: "light" | "dark";
};

/**
 * Clearly labeled integration swap point.
 * Search the repo for the `comment` string (e.g. "JOTFORM EMBED") when wiring the real tool.
 */
export function SwapPoint({
  id,
  comment,
  title,
  description,
  children,
  className,
  tone = "dark",
}: SwapPointProps) {
  const dark = tone === "dark";
  return (
    <section
      id={id}
      data-swap-point={comment}
      className={cn(
        "rounded-sm border border-dashed px-5 py-8 text-left sm:px-8",
        dark
          ? "border-gold/50 bg-white/5"
          : "border-gold/70 bg-gold-light/10",
        className,
      )}
    >
      <p className={cn("eyebrow", dark ? "text-gold-light" : "text-primary")}>
        {title}
      </p>
      <p
        className={cn(
          "mt-3 max-w-2xl text-sm leading-relaxed",
          dark ? "text-paper/75" : "text-ink/75",
        )}
      >
        {description}
      </p>
      {children}
    </section>
  );
}
