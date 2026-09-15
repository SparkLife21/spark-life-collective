import type { Metadata } from "next";
import { getSiteUrl, site } from "@/lib/site";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
};

export function pageMetadata({
  title,
  description,
  path,
}: PageMetaInput): Metadata {
  const url = `${getSiteUrl()}${path}`;
  const fullTitle =
    title === site.name ? title : `${title} · ${site.name}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
