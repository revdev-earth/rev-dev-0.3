import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import Accent from "@/components/Accent";
import { pageSeo } from "@/lib/seoContent";
import { serviceIcons } from "@/lib/serviceIcons";
import { servicesByLocale } from "@/lib/services";
import { jsonLd, pageMetadata, type Locale } from "@/lib/site";

type ServiceItem = { problem: string; title: string; description: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const typedLocale = locale as Locale;
  const seo = pageSeo[typedLocale].services;

  return pageMetadata({
    locale: typedLocale,
    path: "services",
    title: seo.title,
    description: seo.description,
  });
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ServicesContent />;
}

function ServicesContent() {
  const locale = useLocale() as Locale;
  const t = useTranslations("Services");
  const items = t.raw("items") as ServiceItem[];
  const hiddenNeeds = t.raw("hiddenNeeds") as string[];
  const servicePages = Object.values(servicesByLocale[locale]);
  const faq = servicePages[0].faq;
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqJsonLd) }}
      />
      <h1 className="text-3xl font-semibold md:text-4xl">{t("title")}</h1>
      <p className="text-foreground/60 mt-2">{t("subtitle")}</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {items.map((s, i) => {
          const Icon = serviceIcons[i];
          return (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="group hover:border-foreground/20 rounded-xl border border-black/10 p-6 transition-all hover:-translate-y-1 hover:shadow-lg dark:border-white/10">
                {Icon && (
                  <Icon
                    className="text-foreground/70 mb-4 h-8 w-8 transition-transform duration-300 group-hover:scale-110"
                    aria-hidden
                  />
                )}
                <p className="text-foreground/50 text-sm font-medium tracking-wide uppercase">
                  {s.problem}
                </p>
                <h2 className="mt-1 text-lg font-semibold">{s.title}</h2>
                <p className="text-foreground/60 mt-2 text-sm">
                  {t.rich(`items.${i}.description`, {
                    accent: (c) => <Accent>{c}</Accent>,
                  })}
                </p>
                {servicePages[i] && (
                  <Link
                    href={`/services/${servicePages[i].slug}`}
                    className="text-foreground/40 group-hover:text-gold mt-5 inline-block text-sm transition-colors"
                  >
                    {servicePages[i].title} &rarr;
                  </Link>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>

      <section className="mt-16">
        <Reveal className="border-y border-black/10 py-10 dark:border-white/10">
          <h2 className="text-2xl font-semibold md:text-3xl">FAQ</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {faq.map((item) => (
              <div key={item.question}>
                <h3 className="font-semibold">{item.question}</h3>
                <p className="text-foreground/60 mt-2 text-sm">{item.answer}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Hidden needs */}
      <section className="mt-16">
        <Reveal className="rounded-2xl border border-black/10 p-10 dark:border-white/10">
          <h2 className="text-2xl font-semibold md:text-3xl">
            {t("hiddenNeedsTitle")}
          </h2>
          <p className="text-foreground/60 mt-2">{t("hiddenNeedsSubtitle")}</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {hiddenNeeds.map((need, i) => (
              <li
                key={i}
                className="text-foreground/70 flex items-start gap-3 text-sm"
              >
                <span className="text-foreground/30 mt-0.5 shrink-0 select-none">
                  +
                </span>
                {need}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <div className="mt-20 flex flex-col items-center gap-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">
            {t.rich("contactCta", { accent: (c) => <Accent>{c}</Accent> })}
          </h2>
          <p className="text-foreground/60 mt-2">{t("contactTitle")}</p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
