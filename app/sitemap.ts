import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { caseStudySlugs } from "@/lib/caseStudies";
import { serviceSlugs } from "@/lib/services";
import { absoluteUrl, languageAlternates, type Locale } from "@/lib/site";

const staticPaths = ["", "services", "projects", "partners", "us", "careers"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = [
    ...staticPaths,
    ...serviceSlugs.map((slug) => `services/${slug}`),
    ...caseStudySlugs.map((slug) => `projects/${slug}`),
  ];

  return paths.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: absoluteUrl(locale as Locale, path),
      lastModified: now,
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 1 : path.includes("/") ? 0.75 : 0.85,
      alternates: {
        languages: languageAlternates(path),
      },
    })),
  );
}
