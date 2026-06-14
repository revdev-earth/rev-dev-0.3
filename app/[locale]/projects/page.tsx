import Image from "next/image";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Reveal from "@/components/Reveal";
import {
  availableProjects,
  workingProjects,
  type Project,
} from "@/lib/projects";

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
  const t = useTranslations("Projects");

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold md:text-4xl">{t("title")}</h1>
      <p className="text-foreground/60 mt-2">{t("subtitle")}</p>

      <Section
        title={t("availableTitle")}
        subtitle={t("availableSubtitle")}
        projects={availableProjects}
      />
      <Section
        title={t("workingTitle")}
        subtitle={t("workingSubtitle")}
        projects={workingProjects}
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
  projects: Project[];
}) {
  const t = useTranslations("Projects");
  if (projects.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-foreground/60 mt-1 text-sm">{subtitle}</p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal
            key={p.slug}
            delay={i * 0.08}
            className="group flex flex-col overflow-hidden rounded-xl border border-black/10 dark:border-white/10"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={p.image}
                alt={p.name}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute top-3 right-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                {t(`status.${p.status}`)}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-foreground/60 mt-2 flex-1 text-sm">
                {p.description}
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
          </Reveal>
        ))}
      </div>
    </section>
  );
}
