import type { Locale } from "@/lib/site";

export type CaseStudy = {
  slug: string;
  name: string;
  oneLine: string;
  image: string;
  link: string;
  industry: string;
  problem: string;
  solution: string;
  result: string;
  metrics: { label: string; value: string }[];
  highlights: string[];
  stack: string[];
  seo: { title: string; description: string };
};

export const caseStudySlugs = ["cantante", "rev-trade", "properties"] as const;

export const caseStudiesByLocale: Record<
  Locale,
  Record<(typeof caseStudySlugs)[number], CaseStudy>
> = {
  en: {
    cantante: {
      slug: "cantante",
      name: "Cantante",
      oneLine:
        "A music practice product that turns timba figures into an interactive learning system.",
      image: "/projects/cantante.jpg",
      link: "https://cantante.didyou.fyi",
      industry: "Music education",
      problem:
        "Singers needed a clearer way to study timba figures, understand relationships and practice with their own songs.",
      solution:
        "We built a web product with a figure dictionary, song input flow and real-time figure tracking so practice becomes structured and visual.",
      result:
        "Cantante is live as a specialized practice tool, turning a niche musical workflow into a usable digital product.",
      metrics: [
        { label: "Status", value: "Live" },
        { label: "Core flows", value: "Dictionary + songs" },
        { label: "Interface", value: "Real-time tracking" },
      ],
      highlights: [
        "Niche user workflow translated into product UX",
        "Interactive dictionary for musical figures",
        "Custom song practice experience",
      ],
      stack: ["Next.js", "TypeScript", "Tailwind", "Prettier"],
      seo: {
        title: "Cantante case study - Timba practice software",
        description:
          "See how RevDev built Cantante, an interactive music practice product for timba singers with dictionary and real-time figure tracking.",
      },
    },
    "rev-trade": {
      slug: "rev-trade",
      name: "RevTrade",
      oneLine:
        "A real-time trading control system with live charts, WebSockets and Rust execution.",
      image: "/projects/rev-trade.jpg",
      link: "https://simple.didyou.fyi",
      industry: "Trading systems",
      problem:
        "The product needed automated trading control, live market feedback and reliable execution around high-risk Deriv strategies.",
      solution:
        "We built a real-time application with live charts, WebSocket data, position management and Rust-powered execution paths.",
      result:
        "RevTrade runs as a 24/7 trading application with the operational surface needed to observe, control and adjust strategies.",
      metrics: [
        { label: "Runtime", value: "24/7" },
        { label: "Data layer", value: "WebSockets" },
        { label: "Execution", value: "Rust" },
      ],
      highlights: [
        "Live charting and position visibility",
        "Automated strategy control",
        "Backend built for continuous operation",
      ],
      stack: [
        "Next.js",
        "TypeScript",
        "Tailwind",
        "Redis",
        "Postgres",
        "Prisma",
        "Rust",
        "WebSockets",
      ],
      seo: {
        title: "RevTrade case study - Real-time trading software",
        description:
          "See how RevDev built RevTrade, a real-time trading platform with WebSockets, live charts, Rust execution and position control.",
      },
    },
    properties: {
      slug: "properties",
      name: "Properties",
      oneLine:
        "A real estate platform for listings, rental applications and admin workflows.",
      image: "/projects/properties.jpg",
      link: "https://properties.didyou.fyi",
      industry: "Real estate",
      problem:
        "Rental workflows needed a single place for users to browse listings, apply and manage profile information while admins handled applications.",
      solution:
        "We built a property platform with listing discovery, tenant applications, profiles and admin-side management.",
      result:
        "Properties is live as a full workflow product for browsing, applying and managing rental operations from one interface.",
      metrics: [
        { label: "Status", value: "Live" },
        { label: "User flows", value: "Browse + apply" },
        { label: "Operations", value: "Admin panel" },
      ],
      highlights: [
        "User and admin workflows in one platform",
        "Listing and application management",
        "Foundation for content and operations growth",
      ],
      stack: [
        "Next.js",
        "TypeScript",
        "Tailwind",
        "Redis",
        "Postgres",
        "Prisma",
      ],
      seo: {
        title: "Properties case study - Real estate platform",
        description:
          "See how RevDev built Properties, a real estate platform for listings, rental applications, user profiles and admin workflows.",
      },
    },
  },
  es: {
    cantante: {
      slug: "cantante",
      name: "Cantante",
      oneLine:
        "Un producto de práctica musical que convierte figuras de timba en un sistema interactivo de aprendizaje.",
      image: "/projects/cantante.jpg",
      link: "https://cantante.didyou.fyi",
      industry: "Educación musical",
      problem:
        "Cantantes necesitaban una forma más clara de estudiar figuras de timba, entender relaciones y practicar con sus propias canciones.",
      solution:
        "Construimos un producto web con diccionario de figuras, flujo para canciones propias y tracking en tiempo real para hacer la práctica más visual.",
      result:
        "Cantante está en vivo como herramienta especializada de práctica, convirtiendo un flujo musical de nicho en producto digital usable.",
      metrics: [
        { label: "Estado", value: "En vivo" },
        { label: "Flujos clave", value: "Diccionario + canciones" },
        { label: "Interfaz", value: "Tracking en tiempo real" },
      ],
      highlights: [
        "Flujo de usuario de nicho traducido a UX de producto",
        "Diccionario interactivo de figuras musicales",
        "Experiencia personalizada para practicar canciones",
      ],
      stack: ["Next.js", "TypeScript", "Tailwind", "Prettier"],
      seo: {
        title: "Caso Cantante - Software para práctica de timba",
        description:
          "Mira cómo RevDev construyó Cantante, un producto interactivo para cantantes de timba con diccionario y tracking en tiempo real.",
      },
    },
    "rev-trade": {
      slug: "rev-trade",
      name: "RevTrade",
      oneLine:
        "Un sistema de control de trading en tiempo real con gráficos en vivo, WebSockets y ejecución en Rust.",
      image: "/projects/rev-trade.jpg",
      link: "https://simple.didyou.fyi",
      industry: "Sistemas de trading",
      problem:
        "El producto necesitaba control de trading automatizado, feedback de mercado en vivo y ejecución confiable para estrategias de alto riesgo en Deriv.",
      solution:
        "Construimos una aplicación en tiempo real con gráficos live, datos por WebSocket, gestión de posiciones y rutas de ejecución en Rust.",
      result:
        "RevTrade opera como aplicación de trading 24/7 con la superficie necesaria para observar, controlar y ajustar estrategias.",
      metrics: [
        { label: "Operación", value: "24/7" },
        { label: "Datos", value: "WebSockets" },
        { label: "Ejecución", value: "Rust" },
      ],
      highlights: [
        "Gráficos live y visibilidad de posiciones",
        "Control de estrategia automatizada",
        "Backend pensado para operación continua",
      ],
      stack: [
        "Next.js",
        "TypeScript",
        "Tailwind",
        "Redis",
        "Postgres",
        "Prisma",
        "Rust",
        "WebSockets",
      ],
      seo: {
        title: "Caso RevTrade - Software de trading en tiempo real",
        description:
          "Mira cómo RevDev construyó RevTrade, una plataforma de trading en tiempo real con WebSockets, gráficos live, Rust y control de posiciones.",
      },
    },
    properties: {
      slug: "properties",
      name: "Properties",
      oneLine:
        "Una plataforma inmobiliaria para propiedades, solicitudes de renta y flujos administrativos.",
      image: "/projects/properties.jpg",
      link: "https://properties.didyou.fyi",
      industry: "Real estate",
      problem:
        "Los flujos de renta necesitaban un solo lugar para explorar propiedades, aplicar y gestionar perfiles mientras administradores manejaban solicitudes.",
      solution:
        "Construimos una plataforma con descubrimiento de propiedades, aplicaciones de inquilinos, perfiles y gestión administrativa.",
      result:
        "Properties está en vivo como producto completo para explorar, aplicar y gestionar operaciones de renta desde una sola interfaz.",
      metrics: [
        { label: "Estado", value: "En vivo" },
        { label: "Flujos", value: "Explorar + aplicar" },
        { label: "Operación", value: "Admin panel" },
      ],
      highlights: [
        "Flujos de usuario y administración en una sola plataforma",
        "Gestión de propiedades y solicitudes",
        "Base para crecer contenido y operaciones",
      ],
      stack: [
        "Next.js",
        "TypeScript",
        "Tailwind",
        "Redis",
        "Postgres",
        "Prisma",
      ],
      seo: {
        title: "Caso Properties - Plataforma inmobiliaria",
        description:
          "Mira cómo RevDev construyó Properties, una plataforma inmobiliaria para propiedades, solicitudes de renta, perfiles y administración.",
      },
    },
  },
  de: {
    cantante: {
      slug: "cantante",
      name: "Cantante",
      oneLine:
        "Ein Musikuebungsprodukt, das Timba-Figuren in ein interaktives Lernsystem verwandelt.",
      image: "/projects/cantante.jpg",
      link: "https://cantante.didyou.fyi",
      industry: "Musikbildung",
      problem:
        "Saenger brauchten einen klareren Weg, Timba-Figuren zu lernen, Beziehungen zu verstehen und mit eigenen Songs zu ueben.",
      solution:
        "Wir bauten ein Webprodukt mit Figuren-Woerterbuch, Song-Eingabe und Echtzeit-Tracking fuer strukturierte visuelle Uebung.",
      result:
        "Cantante ist live als spezialisiertes Uebungstool und verwandelt einen Nischenworkflow in ein nutzbares digitales Produkt.",
      metrics: [
        { label: "Status", value: "Live" },
        { label: "Kernflows", value: "Woerterbuch + Songs" },
        { label: "Interface", value: "Echtzeit-Tracking" },
      ],
      highlights: [
        "Nischenworkflow in Produkt-UX uebersetzt",
        "Interaktives Woerterbuch fuer Musikfiguren",
        "Eigene Song-Uebungserfahrung",
      ],
      stack: ["Next.js", "TypeScript", "Tailwind", "Prettier"],
      seo: {
        title: "Cantante Case Study - Timba Uebungssoftware",
        description:
          "Sieh, wie RevDev Cantante gebaut hat: ein interaktives Musikuebungsprodukt mit Woerterbuch und Echtzeit-Tracking.",
      },
    },
    "rev-trade": {
      slug: "rev-trade",
      name: "RevTrade",
      oneLine:
        "Ein Echtzeit-Trading-Kontrollsystem mit Live-Charts, WebSockets und Rust-Ausfuehrung.",
      image: "/projects/rev-trade.jpg",
      link: "https://simple.didyou.fyi",
      industry: "Trading-Systeme",
      problem:
        "Das Produkt brauchte automatisierte Trading-Kontrolle, Live-Marktfeedback und verlaessliche Ausfuehrung fuer riskante Deriv-Strategien.",
      solution:
        "Wir bauten eine Echtzeit-App mit Live-Charts, WebSocket-Daten, Positionsmanagement und Rust-Ausfuehrungspfaden.",
      result:
        "RevTrade laeuft als 24/7 Trading-Anwendung mit der operativen Flaeche, um Strategien zu beobachten, zu steuern und anzupassen.",
      metrics: [
        { label: "Laufzeit", value: "24/7" },
        { label: "Datenschicht", value: "WebSockets" },
        { label: "Ausfuehrung", value: "Rust" },
      ],
      highlights: [
        "Live-Charts und Positionssichtbarkeit",
        "Automatisierte Strategiekontrolle",
        "Backend fuer kontinuierlichen Betrieb",
      ],
      stack: [
        "Next.js",
        "TypeScript",
        "Tailwind",
        "Redis",
        "Postgres",
        "Prisma",
        "Rust",
        "WebSockets",
      ],
      seo: {
        title: "RevTrade Case Study - Echtzeit-Trading-Software",
        description:
          "Sieh, wie RevDev RevTrade mit WebSockets, Live-Charts, Rust-Ausfuehrung und Positionskontrolle gebaut hat.",
      },
    },
    properties: {
      slug: "properties",
      name: "Properties",
      oneLine:
        "Eine Immobilienplattform fuer Listings, Mietanfragen und Admin-Workflows.",
      image: "/projects/properties.jpg",
      link: "https://properties.didyou.fyi",
      industry: "Immobilien",
      problem:
        "Mietprozesse brauchten einen Ort fuer Listings, Bewerbungen und Profile, waehrend Admins Anfragen verwalten.",
      solution:
        "Wir bauten eine Plattform mit Listing-Discovery, Mietbewerbungen, Profilen und Admin-Management.",
      result:
        "Properties ist live als Workflow-Produkt fuer Suche, Bewerbung und Verwaltung von Mietprozessen.",
      metrics: [
        { label: "Status", value: "Live" },
        { label: "User Flows", value: "Suchen + bewerben" },
        { label: "Betrieb", value: "Admin Panel" },
      ],
      highlights: [
        "User- und Admin-Workflows in einer Plattform",
        "Listing- und Bewerbungsmanagement",
        "Basis fuer Content- und Operations-Wachstum",
      ],
      stack: [
        "Next.js",
        "TypeScript",
        "Tailwind",
        "Redis",
        "Postgres",
        "Prisma",
      ],
      seo: {
        title: "Properties Case Study - Immobilienplattform",
        description:
          "Sieh, wie RevDev Properties gebaut hat: eine Immobilienplattform fuer Listings, Mietanfragen, Profile und Admin-Workflows.",
      },
    },
  },
};

export function getCaseStudy(locale: Locale, slug: string) {
  if (!caseStudySlugs.includes(slug as (typeof caseStudySlugs)[number])) {
    return null;
  }

  return caseStudiesByLocale[locale][slug as (typeof caseStudySlugs)[number]];
}
