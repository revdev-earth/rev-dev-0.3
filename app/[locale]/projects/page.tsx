import type { Metadata } from "next";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Reveal from "@/components/Reveal";
import { caseStudiesByLocale, type CaseStudy } from "@/lib/caseStudies";
import { pageSeo } from "@/lib/seoContent";
import { pageMetadata, type Locale } from "@/lib/site";
import {
  availableProjects,
  workingProjects,
  type Project,
} from "@/lib/projects";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const typedLocale = locale as Locale;
  const seo = pageSeo[typedLocale].projects;

  return pageMetadata({
    locale: typedLocale,
    path: "projects",
    title: seo.title,
    description: seo.description,
  });
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ProjectsContent />;
}

function ProjectsContent() {
  const locale = useLocale() as Locale;
  const t = useTranslations("Projects");
  const completedProjects = Object.values(caseStudiesByLocale[locale]);

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold md:text-4xl">{t("title")}</h1>
      <p className="text-foreground/60 mt-2">{t("subtitle")}</p>

      <Section
        title="Live"
        subtitle="Online and running."
        projects={completedProjects}
      />
      <Section
        title={t("workingTitle")}
        subtitle={t("workingSubtitle")}
        projects={workingProjects}
      />
      <Section
        title={t("availableTitle")}
        subtitle={t("availableSubtitle")}
        projects={availableProjects}
      />
    </div>
  );
}

function Section({
  title,
  subtitle,
  projects,
}: {
  title: string;
  subtitle: string;
  projects: Project[] | CaseStudy[];
}) {
  if (projects.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-foreground/60 mt-1 text-sm">{subtitle}</p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08}>
            <Link
              href={`/projects/${p.slug}`}
              className="group hover:border-foreground/20 flex cursor-pointer flex-col overflow-hidden rounded-xl border border-black/10 transition-colors dark:border-white/10"
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
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">{p.name}</h3>
                  <span className="text-foreground/30 group-hover:text-foreground/60 text-xs transition-colors">
                    &rarr;
                  </span>
                </div>
                <p className="text-foreground/60 mt-2 flex-1 text-sm hyphens-none">
                  {"oneLine" in p ? p.oneLine : p.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((tech) => (
                    <li
                      key={tech}
                      className="bg-foreground/5 text-foreground/70 rounded px-2 py-1 text-xs"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
