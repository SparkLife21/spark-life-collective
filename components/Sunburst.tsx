import { cn } from "@/lib/cn";

/** Brand-kit sunburst — decorative, hidden from assistive tech. */
export function Sunburst({ className }: { className?: string }) {
  return (
    <div
      className={cn("sunburst pointer-events-none absolute", className)}
      aria-hidden="true"
    />
  );
}
