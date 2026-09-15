import Image from "next/image";
import { cn } from "@/lib/cn";
import { rootAndRise } from "@/lib/site";

type RetreatFlyerProps = {
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function RetreatFlyer({
  className,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 560px",
}: RetreatFlyerProps) {
  return (
    <Image
      src={rootAndRise.flyerSrc}
      alt={rootAndRise.flyerAlt}
      width={1400}
      height={1846}
      priority={priority}
      sizes={sizes}
      className={cn("h-auto w-full object-cover", className)}
    />
  );
}
