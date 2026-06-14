import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Accent from "@/components/Accent";
import Marquee, { type MarqueeItem } from "@/components/Marquee";
import { serviceIcons } from "@/lib/serviceIcons";
import { projects } from "@/lib/projects";
import { partners } from "@/lib/partners";

type Item = { lead: string; title: string; description: string };

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
  const t = useTranslations("Home");
  const tServices = useTranslations("Services");
  const services = tServices.raw("items") as Item[];
  const process = useTranslations("Process").raw("items") as Item[];

  // 8 real things connected across the site: projects + partners + services.
  const marqueeItems: MarqueeItem[] = [
    ...projects.map((p) => ({ label: p.name, href: "/projects" })),
    ...partners.map((p) => ({ label: p.name, href: "/partners" })),
    ...services.slice(3, 6).map((s) => ({ label: s.title, href: "/services" })),
  ];

  return (
    <div>
      <Hero />

      {/* Services */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold md:text-3xl">
          {t("servicesTitle")}
        </h2>
        <p className="text-foreground/60 mt-2">{t("servicesSubtitle")}</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = serviceIcons[i];
            return (
              <Reveal
                key={s.title}
                delay={i * 0.08}
                className="hover:border-foreground/30 rounded-xl border border-black/10 p-6 transition-colors dark:border-white/10"
              >
                {Icon && (
                  <Icon
                    className="text-foreground/70 mb-4 h-8 w-8"
                    aria-hidden
                  />
                )}
                <p className="text-foreground/70 text-lg">
                  <Accent>{s.lead}</Accent>
                </p>
                <h3 className="mt-1 font-semibold">{s.title}</h3>
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
                <span className="border-foreground/30 absolute top-0 left-0 flex h-8 w-8 items-center justify-center rounded-full border text-sm font-semibold">
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
            className="bg-foreground text-background mt-6 inline-block rounded-full px-6 py-3 text-sm font-medium transition-opacity hover:opacity-90"
          >
            {t("ctaButton")}
          </Link>
        </Reveal>
      </section>

      {/* Connected marquee: projects, partners, services */}
      <Marquee items={marqueeItems} title={t("bannerTitle")} />
    </div>
  );
}
