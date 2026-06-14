import { ImageResponse } from "next/og";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { homeOffer, pageSeo } from "@/lib/seoContent";
import type { Locale } from "@/lib/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typedLocale = hasLocale(routing.locales, locale)
    ? (locale as Locale)
    : routing.defaultLocale;
  const offer = homeOffer[typedLocale];
  const seo = pageSeo[typedLocale].home;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#0a0a0a",
        color: "#f5f5f5",
        padding: "72px",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 30,
          letterSpacing: 0,
        }}
      >
        <span style={{ color: "#ffd200", fontWeight: 700 }}>RevDev</span>
        <span style={{ color: "#a3a3a3" }}>
          Idea - Strategy - Build - Launch
        </span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        <div
          style={{
            fontSize: 72,
            lineHeight: 1,
            fontWeight: 700,
            maxWidth: 980,
          }}
        >
          {seo.title}
        </div>
        <div style={{ fontSize: 30, color: "#d4d4d4", maxWidth: 900 }}>
          {offer.quote}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: 18,
          fontSize: 24,
          color: "#ffd200",
        }}
      >
        <span>Software</span>
        <span>AI Automation</span>
        <span>Product Strategy</span>
      </div>
    </div>,
    size,
  );
}
