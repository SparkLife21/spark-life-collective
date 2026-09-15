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
  variant = "light",
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
      width={1600}
      height={963}
      priority={priority}
      className={cn("h-16 w-auto sm:h-[4.75rem]", className)}
    />
  );
}
