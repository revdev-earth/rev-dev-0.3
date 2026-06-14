import { Link } from "@/i18n/navigation";

export type MarqueeItem = { label: string; href: string };

export default function Marquee({
  items,
  title,
}: {
  items: MarqueeItem[];
  title?: string;
}) {
  // Duplicate the list so the -50% translate loops seamlessly (never ends).
  const loop = [...items, ...items];

  return (
    <section className="bg-zinc-100 py-10 dark:bg-zinc-900">
      {title && (
        <p className="text-foreground/50 mb-6 text-center text-xs font-medium tracking-widest uppercase">
          {title}
        </p>
      )}

      <div className="group relative overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee flex w-max items-center gap-12 group-hover:[animation-play-state:paused]">
          {loop.map((item, i) => (
            <Link
              key={`${item.label}-${i}`}
              href={item.href}
              className="text-foreground/50 hover:text-foreground shrink-0 text-xl font-semibold whitespace-nowrap transition-colors md:text-2xl"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
