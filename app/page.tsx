import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { Framework } from "@/components/Framework";
import { Hero } from "@/components/Hero";
import { ImpactStats } from "@/components/ImpactStats";
import { Mission } from "@/components/Mission";
import { Retreats } from "@/components/Retreats";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: site.name,
  description:
    "Spark Life Collective is a 501(c)(3) nonprofit offering Christ-centered experiences, resources, and training. Faith fuels brighter tomorrows.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Mission />
      <Framework />
      <Retreats />
      <ImpactStats />
      <CTASection />
    </>
  );
}
