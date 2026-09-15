import { cn } from "@/lib/cn";

type NoteProps = {
  children: React.ReactNode;
  className?: string;
};

/** Visible marker for copy that has not been approved by Spark Life. */
export function DraftNote({ children, className }: NoteProps) {
  return (
    <figure className={cn("relative", className)}>
      <figcaption className="mb-2 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold">
        Draft copy — not approved
      </figcaption>
      <div className="border-l-2 border-gold/70 pl-4">{children}</div>
    </figure>
  );
}

/** Visible marker for policy/details that still need confirmation. */
export function ConfirmNote({ children, className }: NoteProps) {
  return (
    <span
      className={cn(
        "italic text-moss",
        className,
      )}
    >
      {children}
    </span>
  );
}
