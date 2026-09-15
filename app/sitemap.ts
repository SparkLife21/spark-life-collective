import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const paths = [
    "/",
    "/about",
    "/retreats",
    "/retreats/root-and-rise",
    "/give",
    "/contact",
  ];

  return paths.map((path, index) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/retreats/root-and-rise" ? "weekly" : "monthly",
    priority: index === 0 || path.includes("root-and-rise") ? 1 : 0.7,
  }));
}
