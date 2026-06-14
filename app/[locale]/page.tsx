import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Accent from "@/components/Accent";
import Marquee, { type MarqueeItem } from "@/components/Marquee";
import { caseStudiesByLocale } from "@/lib/caseStudies";
import { serviceIcons } from "@/lib/serviceIcons";
import { partners } from "@/lib/partners";
import { homeOffer, pageSeo } from "@/lib/seoContent";
import { pageMetadata, type Locale } from "@/lib/site";

type ServiceItem = { problem: string; title: string; description: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const typedLocale = locale as Locale;
  const seo = pageSeo[typedLocale].home;

  return pageMetadata({
    locale: typedLocale,
    path: "",
    title: seo.title,
    description: seo.description,
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <HomeContent />;
}

function HomeContent() {
  const locale = useLocale() as Locale;
  const t = useTranslations("Home");
  const tServices = useTranslations("Services");
  const services = tServices.raw("items") as ServiceItem[];
  const hiddenNeeds = tServices.raw("hiddenNeeds") as string[];
  const process = useTranslations("Process").raw("items") as {
    title: string;
    description: string;
  }[];
  const offer = homeOffer[locale];
  const caseStudies = Object.values(caseStudiesByLocale[locale]);

  const marqueeItems: MarqueeItem[] = [
    ...caseStudies.map((p) => ({ label: p.name, href: "/projects" })),
    ...partners.map((p) => ({ label: p.name, href: "/partners" })),
    ...services.map((s) => ({ label: s.title, href: "/services" })),
  ];

  return (
    <div>
      <Hero />

      {/* Clear offer */}
      <section className="bg-foreground/[0.025] border-y border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-14 text-center">
          <p className="font-accent text-3xl leading-tight md:text-5xl">
            &ldquo;{offer.quote}&rdquo;
          </p>
          <p className="text-foreground/60 mx-auto mt-4 max-w-2xl text-sm md:text-base">
            {offer.note}
          </p>
        </div>
      </section>

      {/* Problem scenarios */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold md:text-3xl">
          {t("servicesTitle")}
        </h2>
        <p className="text-foreground/60 mt-2">{t("servicesSubtitle")}</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {services.map((s, i) => {
            const Icon = serviceIcons[i];
            return (
              <Reveal
                key={s.title}
                delay={i * 0.08}
                className="hover:border-gold/40 rounded-xl border border-black/10 p-6 transition-colors dark:border-white/10"
              >
                {Icon && (
                  <Icon
                    className="text-foreground/70 mb-4 h-8 w-8"
                    aria-hidden
                  />
                )}
                <p className="text-foreground/50 text-sm font-medium tracking-wide uppercase">
                  {s.problem}
                </p>
                <h3 className="mt-1 text-lg font-semibold">{s.title}</h3>
                <p className="text-foreground/60 mt-2 text-sm">
                  {tServices.rich(`items.${i}.description`, {
                    accent: (c) => <Accent>{c}</Accent>,
                  })}
                </p>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Proof through case studies */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold md:text-3xl">
          {t("worksTitle")}
        </h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <Link
                href={`/projects/${p.slug}`}
                className="group hover:border-gold/40 flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border border-black/10 transition-all hover:-translate-y-1 hover:shadow-lg dark:border-white/10"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-gold text-xs font-semibold tracking-wide uppercase">
                    {p.industry}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold">{p.name}</h3>
                  <p className="text-foreground/60 mt-2 flex-1 text-sm">
                    {p.oneLine}
                  </p>
                  <div className="mt-5 grid grid-cols-3 gap-2">
                    {p.metrics.map((metric) => (
                      <div key={metric.label} className="bg-foreground/5 p-3">
                        <p className="text-foreground/40 text-[11px]">
                          {metric.label}
                        </p>
                        <p className="mt-1 text-sm font-semibold">
                          {metric.value}
                        </p>
                      </div>
                    ))}
                  </div>
                  <span className="text-foreground/40 group-hover:text-gold mt-5 text-sm transition-colors">
                    Case study &rarr;
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Hidden needs */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Reveal className="rounded-2xl border border-black/10 p-10 dark:border-white/10">
          <h2 className="text-2xl font-semibold md:text-3xl">
            {tServices("hiddenNeedsTitle")}
          </h2>
          <p className="text-foreground/60 mt-2">
            {tServices("hiddenNeedsSubtitle")}
          </p>
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

      {/* Process */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold md:text-3xl">
          {t("processTitle")}
        </h2>
        <p className="text-foreground/60 mt-2">{t("processSubtitle")}</p>
        <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <li className="relative pl-10">
                <span className="border-gold/50 text-gold absolute top-0 left-0 flex h-8 w-8 items-center justify-center rounded-full border text-sm font-semibold">
                  {i + 1}
                </span>
                <h3 className="font-semibold">{step.title}</h3>
                <p className="text-foreground/60 mt-2 text-sm">
                  {step.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="rounded-2xl border border-black/10 p-10 text-center dark:border-white/10">
          <h2 className="text-2xl font-semibold md:text-3xl">
            {t.rich("ctaTitle", { accent: (c) => <Accent>{c}</Accent> })}
          </h2>
          <Link
            href="/services"
            className="bg-foreground text-background mt-6 inline-block rounded-full px-6 py-3 text-sm font-medium shadow-sm transition-opacity hover:opacity-90"
          >
            {t("ctaButton")}
          </Link>
          <p className="text-foreground/40 mt-3 text-sm">hello@revdev.com</p>
        </Reveal>
      </section>

      {/* Connected marquee */}
      <Marquee items={marqueeItems} title={t("bannerTitle")} />
    </div>
  );
}
