import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "onDark" | "gold";
  className?: string;
};

const variants = {
  primary: "btn-gold",
  secondary: "btn-outline",
  ghost: "font-narrow text-sm tracking-[0.12em] uppercase text-navy underline decoration-gold underline-offset-4",
  onDark: "btn-outline btn-outline-light",
  gold: "btn-gold",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <Link href={href} className={cn(variants[variant], className)}>
      {children}
    </Link>
  );
}
