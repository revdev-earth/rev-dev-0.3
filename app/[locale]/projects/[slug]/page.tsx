import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Reveal from "@/components/Reveal";
import { caseStudySlugs, getCaseStudy } from "@/lib/caseStudies";
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
    problem: string;
    solution: string;
    result: string;
    highlights: string;
    stack: string;
    live: string;
    back: string;
  }
> = {
  en: {
    problem: "Problem",
    solution: "Solution",
    result: "Result",
    highlights: "What mattered",
    stack: "Stack",
    live: "Visit live product",
    back: "Back to projects",
  },
  es: {
    problem: "Problema",
    solution: "Solución",
    result: "Resultado",
    highlights: "Lo que importó",
    stack: "Stack",
    live: "Ver producto en vivo",
    back: "Volver a proyectos",
  },
  de: {
    problem: "Problem",
    solution: "Loesung",
    result: "Ergebnis",
    highlights: "Was wichtig war",
    stack: "Stack",
    live: "Live-Produkt ansehen",
    back: "Zurueck zu Projekten",
  },
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    caseStudySlugs.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const typedLocale = locale as Locale;
  const project = getCaseStudy(typedLocale, slug);

  if (!project) return {};

  return pageMetadata({
    locale: typedLocale,
    path: `projects/${project.slug}`,
    title: project.seo.title,
    description: project.seo.description,
    image: project.image,
  });
}

export default async function ProjectCasePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const typedLocale = locale as Locale;
  setRequestLocale(locale);

  const project = getCaseStudy(typedLocale, slug);
  if (!project) notFound();

  const t = labels[typedLocale];
  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${absoluteUrl(typedLocale, `projects/${project.slug}`)}#case-study`,
    name: project.name,
    headline: project.seo.title,
    description: project.seo.description,
    image: `${siteUrl}${project.image}`,
    url: absoluteUrl(typedLocale, `projects/${project.slug}`),
    sameAs: project.link,
    inLanguage: typedLocale,
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(projectJsonLd) }}
      />
      <Link
        href="/projects"
        className="text-foreground/50 hover:text-gold text-sm transition-colors"
      >
        &larr; {t.back}
      </Link>

      <section className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-end">
        <Reveal>
          <p className="text-gold text-sm font-semibold tracking-wide uppercase">
            {project.industry}
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            {project.name}
          </h1>
          <p className="text-foreground/65 mt-5 max-w-2xl text-lg">
            {project.oneLine}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="grid grid-cols-3 border border-black/10 dark:border-white/10">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="border-r border-black/10 p-4 last:border-r-0 dark:border-white/10"
              >
                <p className="text-foreground/40 text-xs">{metric.label}</p>
                <p className="mt-2 text-lg font-semibold">{metric.value}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <Reveal className="relative mt-10 aspect-video overflow-hidden border border-black/10 dark:border-white/10">
        <Image
          src={project.image}
          alt={project.name}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 1152px"
          className="object-cover"
        />
      </Reveal>

      <section className="mt-16 grid gap-6 md:grid-cols-3">
        {[
          { title: t.problem, body: project.problem },
          { title: t.solution, body: project.solution },
          { title: t.result, body: project.result },
        ].map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08}>
            <div className="h-full border border-black/10 p-6 dark:border-white/10">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-foreground/65 mt-3 text-sm leading-6">
                {item.body}
              </p>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="mt-16 grid gap-10 md:grid-cols-[1fr_0.9fr]">
        <Reveal>
          <h2 className="text-2xl font-semibold">{t.highlights}</h2>
          <ul className="mt-6 grid gap-3">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3 text-sm">
                <span className="text-gold mt-0.5">+</span>
                <span className="text-foreground/70">{highlight}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="text-2xl font-semibold">{t.stack}</h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="bg-foreground/5 text-foreground/70 px-3 py-2 text-sm"
              >
                {tech}
              </li>
            ))}
          </ul>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-foreground text-background mt-8 inline-block rounded-full px-6 py-3 text-sm font-medium shadow-sm transition-opacity hover:opacity-90"
          >
            {t.live}
          </a>
        </Reveal>
      </section>
    </div>
  );
}
