import { cn } from "@/lib/cn";

type NoteProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark";
};

/** Visible marker for copy that has not been approved. */
export function DraftNote({ children, className, tone = "light" }: NoteProps) {
  const dark = tone === "dark";
  return (
    <figure className={cn("relative", className)}>
      <figcaption
        className={cn(
          "mb-2 font-sans text-[0.68rem] font-medium uppercase tracking-[0.16em]",
          dark ? "text-gold-light/80" : "text-sage",
        )}
      >
        Draft copy — not approved
      </figcaption>
      <div
        className={cn(
          "border-l-2 pl-4",
          dark ? "border-gold-light/50" : "border-sage/60",
        )}
      >
        {children}
      </div>
    </figure>
  );
}

export function ConfirmNote({ children, className }: NoteProps) {
  return (
    <span className={cn("italic text-sage", className)}>{children}</span>
  );
}
