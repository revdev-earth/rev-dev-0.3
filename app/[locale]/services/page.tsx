import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import Accent from "@/components/Accent";
import { serviceIcons } from "@/lib/serviceIcons";

type Item = { lead: string; title: string; description: string };

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
  const t = useTranslations("Services");
  const items = t.raw("items") as Item[];

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold md:text-4xl">{t("title")}</h1>
      <p className="text-foreground/60 mt-2">{t("subtitle")}</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((s, i) => {
          const Icon = serviceIcons[i];
          return (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="group rounded-xl border border-black/10 p-6 transition-all hover:-translate-y-1 hover:border-foreground/20 hover:shadow-lg dark:border-white/10">
                {Icon && (
                  <Icon
                    className="text-foreground/70 mb-4 h-8 w-8 transition-transform duration-300 group-hover:scale-110"
                    aria-hidden
                  />
                )}
                <p className="text-foreground/70 text-lg">
                  <Accent>{s.lead}</Accent>
                </p>
                <h2 className="mt-1 font-semibold">{s.title}</h2>
                <p className="text-foreground/60 mt-2 text-sm">
                  {t.rich(`items.${i}.description`, {
                    accent: (c) => <Accent>{c}</Accent>,
                  })}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>

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
