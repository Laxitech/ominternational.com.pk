import type { MetadataRoute } from "next";
import { boardMembers } from "@/data/board";
import { programmes } from "@/data/programmes";
import { universities } from "@/data/universities";
import { siteConfig } from "@/data/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url.replace(/\/$/, "");

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/who-we-are`, lastModified: new Date() },
    { url: `${baseUrl}/why-study-with-us`, lastModified: new Date() },
    { url: `${baseUrl}/what-to-expect-from-us`, lastModified: new Date() },
    { url: `${baseUrl}/governing-board`, lastModified: new Date() },
    { url: `${baseUrl}/advisory-board`, lastModified: new Date() },
    { url: `${baseUrl}/programmes`, lastModified: new Date() },
    { url: `${baseUrl}/universities`, lastModified: new Date() },
    { url: `${baseUrl}/centers`, lastModified: new Date() },
    { url: `${baseUrl}/events-book`, lastModified: new Date() },
    { url: `${baseUrl}/testimonials`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/apply`, lastModified: new Date() },
    { url: `${baseUrl}/scholarships`, lastModified: new Date() },
  ];

  const boardRoutes: MetadataRoute.Sitemap = boardMembers.map((member) => ({
    url: `${baseUrl}/${member.board}-board/${member.slug}`,
    lastModified: new Date(),
  }));

  const programmeRoutes: MetadataRoute.Sitemap = programmes.map((p) => ({
    url: `${baseUrl}/programmes/${p.slug}`,
    lastModified: new Date(),
  }));

  const universityRoutes: MetadataRoute.Sitemap = universities.map((u) => ({
    url: `${baseUrl}/universities/${u.slug}`,
    lastModified: new Date(),
  }));

  return [
    ...staticRoutes,
    ...boardRoutes,
    ...programmeRoutes,
    ...universityRoutes,
  ];
}
