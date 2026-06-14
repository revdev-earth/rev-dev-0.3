"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import LocaleSwitcher from "./LocaleSwitcher";
import GoldSweep from "./GoldSweep";

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

  // Shared gold underline that slides between nav items. We measure the active
  // link and animate one absolute bar to its position instead of toggling a
  // per-link border.
  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [indicator, setIndicator] = useState<{
    left: number;
    width: number;
  } | null>(null);

  const activeIndex = routes.findIndex(({ href }) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href),
  );

  useLayoutEffect(() => {
    const measure = () => {
      const el = linkRefs.current[activeIndex];
      if (!el) {
        setIndicator(null);
        return;
      }
      setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [activeIndex, pathname]);

  return (
    <header className="bg-background/80 sticky top-0 z-50 border-b border-black/10 backdrop-blur dark:border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" aria-label="RevDev — home">
          <GoldSweep className="text-lg font-bold tracking-tight">
            RevDev
          </GoldSweep>
        </Link>

        <nav ref={navRef} className="relative hidden items-center gap-6 md:flex">
          {routes.map(({ href, key }, i) => {
            const active = i === activeIndex;
            return (
              <Link
                key={href}
                href={href}
                ref={(el) => {
                  linkRefs.current[i] = el;
                }}
                className={`hover:text-foreground text-sm transition-colors ${
                  active ? "text-foreground" : "text-foreground/60"
                }`}
              >
                {t(key)}
              </Link>
            );
          })}
          <LocaleSwitcher />

          {indicator && (
            <span
              aria-hidden
              className="bg-gold pointer-events-none absolute -bottom-1.5 left-0 h-px transition-[transform,width] duration-300 ease-out"
              style={{
                width: indicator.width,
                transform: `translateX(${indicator.left}px)`,
              }}
            />
          )}
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
