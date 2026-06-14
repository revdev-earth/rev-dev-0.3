"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import GoldSweep from "./GoldSweep";

type Column = { heading: string; links: string[] };

export default function Footer() {
  const t = useTranslations("Footer");
  const nav = useTranslations("Nav");
  const columns = t.raw("columns") as Column[];
  const year = new Date().getFullYear();

  // Map translated labels to real routes so e.g. Careers links to /careers.
  const routeByLabel: Record<string, string> = {
    [nav("home")]: "/",
    [nav("services")]: "/services",
    [nav("projects")]: "/projects",
    [nav("partners")]: "/partners",
    [nav("us")]: "/us",
    [nav("careers")]: "/careers",
  };

  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <GoldSweep className="inline-block text-lg font-bold">
            RevDev
          </GoldSweep>
          <p className="text-foreground/60 mt-2 text-sm">{t("tagline")}</p>
        </div>

        {columns.map((col) => (
          <div key={col.heading}>
            <div className="text-sm font-semibold">{col.heading}</div>
            <ul className="mt-3 space-y-2">
              {col.links.map((link) => {
                const href = routeByLabel[link];
                const className =
                  "text-foreground/60 hover:text-foreground text-sm transition-colors";
                return (
                  <li key={link}>
                    {href ? (
                      <Link href={href} className={className}>
                        {link}
                      </Link>
                    ) : (
                      <a href="#" className={className}>
                        {link}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-foreground/50 border-t border-black/10 px-6 py-6 text-center text-xs dark:border-white/10">
        © {year} RevDev. {t("rights")}
      </div>
    </footer>
  );
}
