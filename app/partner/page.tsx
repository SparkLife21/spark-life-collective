import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Partner",
  description: "Partner with Spark Life Collective — details coming soon.",
  path: "/partner",
});

export default function PartnerPage() {
  return <ComingSoon title="Partner" eyebrow="With us" />;
}
