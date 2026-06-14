import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { pageSeo } from "@/lib/seoContent";
import { pageMetadata, type Locale } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const typedLocale = locale as Locale;
  const seo = pageSeo[typedLocale].careers;

  return pageMetadata({
    locale: typedLocale,
    path: "careers",
    title: seo.title,
    description: seo.description,
  });
}

export default async function CareersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CareersContent />;
}

function CareersContent() {
  const t = useTranslations("Careers");
  const roles = t.raw("roles") as string[];
  const perks = t.raw("perks") as string[];

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-semibold md:text-4xl">{t("title")}</h1>
      <p className="text-foreground/60 mt-2">{t("subtitle")}</p>

      <section className="mt-12">
        <h2 className="text-xl font-semibold">{t("vacanciesTitle")}</h2>
        <p className="text-foreground/60 mt-1 text-sm">
          {t("vacanciesSubtitle")}
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {roles.map((role) => (
            <li
              key={role}
              className="flex items-center gap-3 rounded-xl border border-black/10 p-4 dark:border-white/10"
            >
              <span className="bg-foreground/40 h-2 w-2 rounded-full" />
              <span className="font-medium">{role}</span>
            </li>
          ))}
        </ul>
        <p className="text-foreground/70 mt-6 text-sm">
          {t("registerText")}{" "}
          <button className="font-medium text-blue-600">{t("register")}</button>
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-xl font-semibold">{t("perksTitle")}</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-3">
          {perks.map((perk) => (
            <li
              key={perk}
              className="rounded-xl border border-black/10 p-4 text-sm font-medium dark:border-white/10"
            >
              {perk}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
