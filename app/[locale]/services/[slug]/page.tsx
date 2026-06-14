import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { getService, serviceSlugs } from "@/lib/services";
import {
  absoluteUrl,
  jsonLd,
  pageMetadata,
  siteUrl,
  type Locale,
} from "@/lib/site";
import { routing } from "@/i18n/routing";

const labels: Record<
  Locale,
  {
    deliverables: string;
    outcomes: string;
    faq: string;
    contact: string;
    contactNote: string;
    back: string;
  }
> = {
  en: {
    deliverables: "What we build",
    outcomes: "What you gain",
    faq: "FAQ",
    contact: "Start this kind of project",
    contactNote:
      "Tell us what you want to build and where the risk feels high.",
    back: "Back to services",
  },
  es: {
    deliverables: "Qué construimos",
    outcomes: "Qué ganas",
    faq: "FAQ",
    contact: "Iniciar este tipo de proyecto",
    contactNote: "Cuéntanos qué quieres construir y dónde sientes más riesgo.",
    back: "Volver a servicios",
  },
  de: {
    deliverables: "Was wir bauen",
    outcomes: "Was du gewinnst",
    faq: "FAQ",
    contact: "Dieses Projekt starten",
    contactNote:
      "Erzaehl uns, was du bauen willst und wo das Risiko am groessten wirkt.",
    back: "Zurueck zu Leistungen",
  },
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    serviceSlugs.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const typedLocale = locale as Locale;
  const service = getService(typedLocale, slug);

  if (!service) return {};

  return pageMetadata({
    locale: typedLocale,
    path: `services/${service.slug}`,
    title: service.seo.title,
    description: service.seo.description,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const typedLocale = locale as Locale;
  setRequestLocale(locale);

  const service = getService(typedLocale, slug);
  if (!service) notFound();

  const t = labels[typedLocale];
  const serviceUrl = absoluteUrl(typedLocale, `services/${service.slug}`);
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${serviceUrl}#service`,
    name: service.title,
    description: service.summary,
    url: serviceUrl,
    inLanguage: typedLocale,
    provider: {
      "@id": `${siteUrl}/#organization`,
    },
    areaServed: "Worldwide",
    serviceType: service.eyebrow,
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd([serviceJsonLd, faqJsonLd]),
        }}
      />
      <Link
        href="/services"
        className="text-foreground/50 hover:text-gold text-sm transition-colors"
      >
        &larr; {t.back}
      </Link>

      <section className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
        <Reveal>
          <p className="text-gold text-sm font-semibold tracking-wide uppercase">
            {service.eyebrow}
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
            {service.title}
          </h1>
          <p className="text-foreground/65 mt-5 max-w-2xl text-lg">
            {service.summary}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <blockquote className="border-gold font-accent border-l-2 pl-6 text-3xl leading-tight">
            {service.promise}
          </blockquote>
        </Reveal>
      </section>

      <section className="mt-16 grid gap-8 md:grid-cols-2">
        <Reveal>
          <div className="h-full border border-black/10 p-8 dark:border-white/10">
            <h2 className="text-2xl font-semibold">{t.deliverables}</h2>
            <ul className="mt-6 grid gap-4">
              {service.deliverables.map((item) => (
                <li key={item} className="flex gap-3 text-sm">
                  <span className="text-gold mt-0.5">+</span>
                  <span className="text-foreground/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="h-full border border-black/10 p-8 dark:border-white/10">
            <h2 className="text-2xl font-semibold">{t.outcomes}</h2>
            <ul className="mt-6 grid gap-4">
              {service.outcomes.map((item) => (
                <li key={item} className="flex gap-3 text-sm">
                  <span className="text-gold mt-0.5">+</span>
                  <span className="text-foreground/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      <section className="mt-16 border-y border-black/10 py-10 dark:border-white/10">
        <h2 className="text-2xl font-semibold">{t.faq}</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {service.faq.map((item) => (
            <Reveal key={item.question}>
              <div>
                <h3 className="font-semibold">{item.question}</h3>
                <p className="text-foreground/60 mt-2 text-sm leading-6">
                  {item.answer}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-20 flex flex-col items-center gap-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">{t.contact}</h2>
          <p className="text-foreground/60 mt-2">{t.contactNote}</p>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
