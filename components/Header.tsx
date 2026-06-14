"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import LocaleSwitcher from "./LocaleSwitcher";

const routes = [
  { href: "/", key: "home" },
  { href: "/services", key: "services" },
  { href: "/projects", key: "projects" },
  { href: "/partners", key: "partners" },
  { href: "/us", key: "us" },
] as const;

export default function Header() {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-background/80 sticky top-0 z-50 border-b border-black/10 backdrop-blur dark:border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight">
          RevDev
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {routes.map(({ href, key }) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`hover:text-foreground text-sm transition-colors ${
                  active ? "text-foreground" : "text-foreground/60"
                }`}
              >
                {t(key)}
              </Link>
            );
          })}
          <LocaleSwitcher />
        </nav>

        <button
          type="button"
          aria-label="Menu"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="bg-foreground block h-0.5 w-6" />
          <span className="bg-foreground mt-1.5 block h-0.5 w-6" />
          <span className="bg-foreground mt-1.5 block h-0.5 w-6" />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-3 border-t border-black/10 px-6 py-4 md:hidden dark:border-white/10">
          {routes.map(({ href, key }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-foreground/80 text-sm"
            >
              {t(key)}
            </Link>
          ))}
          <LocaleSwitcher />
        </nav>
      )}
    </header>
  );
}
