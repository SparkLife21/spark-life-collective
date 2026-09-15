import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Get Involved",
  description: "Get involved with Spark Life Collective — details coming soon.",
  path: "/get-involved",
});

export default function GetInvolvedPage() {
  return <ComingSoon title="Get Involved" />;
}
