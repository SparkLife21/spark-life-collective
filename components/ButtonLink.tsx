import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "onDark" | "gold";
  className?: string;
};

const variants = {
  primary: "bg-gold text-navy hover:bg-gold-light",
  secondary:
    "border border-gold/50 bg-transparent text-gold-light hover:bg-white/5",
  ghost:
    "text-gold-light underline decoration-gold underline-offset-4 hover:text-gold",
  onDark:
    "border border-gold-light/80 bg-transparent text-paper hover:bg-white/10",
  gold: "bg-gold text-navy hover:bg-gold-light",
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
