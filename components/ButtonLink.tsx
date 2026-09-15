import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "onDark";
  className?: string;
};

const variants = {
  primary:
    "bg-primary text-white hover:bg-primary-dark focus-visible:outline-offset-2",
  secondary:
    "border border-primary/30 bg-transparent text-primary hover:border-primary hover:bg-primary/5",
  ghost: "text-primary underline decoration-gold/80 underline-offset-4 hover:decoration-primary",
  onDark:
    "border border-gold-light/70 bg-transparent text-paper hover:bg-white/10",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-12 items-center justify-center rounded-sm px-6 py-3 text-center text-[0.95rem] font-semibold tracking-wide transition-colors",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
