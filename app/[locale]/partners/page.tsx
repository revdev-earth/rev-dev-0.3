import type { Metadata } from "next";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Reveal from "@/components/Reveal";
import { partners } from "@/lib/partners";
import { pageSeo } from "@/lib/seoContent";
import { pageMetadata, type Locale } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const typedLocale = locale as Locale;
  const seo = pageSeo[typedLocale].partners;

  return pageMetadata({
    locale: typedLocale,
    path: "partners",
    title: seo.title,
    description: seo.description,
  });
}

export default async function PartnersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <PartnersContent />;
}

function PartnersContent() {
  const t = useTranslations("Partners");

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold md:text-4xl">{t("title")}</h1>
      <p className="text-foreground/60 mt-2">{t("subtitle")}</p>

      <section className="mt-12">
        <h2 className="text-xl font-semibold">{t("currentTitle")}</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {partners.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <a
                href={p.url ?? "#"}
                className="group hover:border-foreground/30 flex flex-col overflow-hidden rounded-2xl border border-black/10 transition-all hover:-translate-y-1 hover:shadow-xl dark:border-white/10"
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                    {p.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-2 p-6">
                  <span className="text-lg font-semibold">{p.name}</span>
                  <span className="text-foreground/60 text-sm">{p.focus}</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-2xl border border-black/10 p-10 dark:border-white/10">
        <h2 className="text-xl font-semibold">{t("proposalsTitle")}</h2>
        <p className="text-foreground/60 mt-2 max-w-2xl">
          {t("proposalsSubtitle")}
        </p>
        {/* TODO: proposal form (reuse ContactForm or dedicated flow) */}
      </section>
    </div>
  );
}
