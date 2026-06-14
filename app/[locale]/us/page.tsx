import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

type Block = { title: string; description: string };

export default async function UsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <UsContent />;
}

function UsContent() {
  const t = useTranslations("Us");
  const blocks = t.raw("blocks") as Block[];

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-semibold md:text-4xl">{t("title")}</h1>
      <p className="text-foreground/60 mt-2">{t("subtitle")}</p>

      <div className="mt-12 flex flex-col gap-10">
        {blocks.map((b) => (
          <div key={b.title}>
            <h2 className="text-xl font-semibold">{b.title}</h2>
            <p className="text-foreground/70 mt-2">{b.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
