import Image from "next/image";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

type LogoProps = {
  className?: string;
  variant?: "navy" | "light";
  priority?: boolean;
};

export function Logo({
  className,
  variant = "navy",
  priority = false,
}: LogoProps) {
  const src =
    variant === "navy"
      ? "/images/slc-logo.png"
      : "/images/slc-logo-light.png";

  return (
    <Image
      src={src}
      alt={site.name}
      width={variant === "light" ? 1215 : 1600}
      height={variant === "light" ? 732 : 963}
      priority={priority}
      className={cn("h-14 w-auto sm:h-16", className)}
    />
  );
}
