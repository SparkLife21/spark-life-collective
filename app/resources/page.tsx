import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Resources",
  description: "Spark Life Collective resources — details coming soon.",
  path: "/resources",
});

export default function ResourcesPage() {
  return <ComingSoon title="Resources" />;
}
