import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Programs",
  description: "Spark Life Collective programs — details coming soon.",
  path: "/programs",
});

export default function ProgramsPage() {
  return <ComingSoon title="Programs" />;
}
