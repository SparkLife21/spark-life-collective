import { cn } from "@/lib/cn";

type MarkProps = {
  className?: string;
  title?: string;
};

export function Mark({ className, title = "Spark Life Collective" }: MarkProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={cn("h-9 w-9 shrink-0", className)}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <circle cx="24" cy="24" r="23" fill="#1A1A1A" />
      <circle cx="24" cy="24" r="23" fill="none" stroke="#CC9752" strokeWidth="1.25" />
      <path
        d="M8 31.5c4.2-1.4 8.8-2.1 16-2.1s11.8.7 16 2.1"
        fill="none"
        stroke="#E4CB8A"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
      <path
        d="M24 29.2c0-4.6 2.4-7.6 2.4-11.2 0-1.8-1-3.3-2.4-4.3-1.4 1-2.4 2.5-2.4 4.3 0 3.6 2.4 6.6 2.4 11.2Z"
        fill="#9B3636"
      />
      <path
        d="M24 29.2c0-3.2 1.5-5.4 1.5-8.2 0-1.2-.6-2.2-1.5-2.9-.9.7-1.5 1.7-1.5 2.9 0 2.8 1.5 5 1.5 8.2Z"
        fill="#E4CB8A"
      />
    </svg>
  );
}
