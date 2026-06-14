import type { Metadata } from "next";
import { routing } from "@/i18n/routing";

export type Locale = (typeof routing.locales)[number];

function normalizeSiteUrl(url: string) {
  const withProtocol = /^https?:\/\//.test(url) ? url : `https://${url}`;
  return withProtocol.replace(/\/$/, "");
}

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? normalizeSiteUrl(process.env.VERCEL_PROJECT_PRODUCTION_URL)
    : process.env.VERCEL_URL
      ? normalizeSiteUrl(process.env.VERCEL_URL)
      : "http://localhost:3000");

export const siteName = "RevDev";

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Spanish",
  de: "German",
};

export function localizedPath(locale: Locale, path = "") {
  const cleanPath = path === "/" ? "" : path.replace(/^\/|\/$/g, "");
  return cleanPath ? `/${locale}/${cleanPath}` : `/${locale}`;
}

export function absoluteUrl(locale: Locale, path = "") {
  return `${siteUrl}${localizedPath(locale, path)}`;
}

export function languageAlternates(path = "") {
  return Object.fromEntries(
    routing.locales.map((locale) => [locale, absoluteUrl(locale, path)]),
  ) as Record<Locale, string>;
}

export function pageMetadata({
  locale,
  path,
  title,
  description,
  image,
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  image?: string;
}): Metadata {
  const url = absoluteUrl(locale, path);
  const imagePath = image ?? localizedPath(locale, "opengraph-image");
  const imageUrl = imagePath.startsWith("http")
    ? imagePath
    : `${siteUrl}${imagePath}`;

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical: url,
      languages: languageAlternates(path),
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      locale,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${siteName} - ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
