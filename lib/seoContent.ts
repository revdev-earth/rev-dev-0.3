import type { Locale } from "@/lib/site";

export const pageSeo: Record<
  Locale,
  Record<string, { title: string; description: string }>
> = {
  en: {
    home: {
      title: "RevDev - End-to-end software studio",
      description:
        "RevDev creates complete digital products for founders, businesses and teams that need to launch fast, look premium and scale well.",
    },
    services: {
      title: "Software development, AI automation and product strategy",
      description:
        "From MVPs to real-time systems, RevDev designs, builds and launches complete software products with strategy, UX, backend and infrastructure.",
    },
    projects: {
      title: "Live software case studies",
      description:
        "Explore RevDev case studies: products launched for music practice, real-time trading and real estate workflows.",
    },
    partners: {
      title: "Partnerships for product growth",
      description:
        "Meet the business, design and search partners that help RevDev products reach stronger markets and audiences.",
    },
    us: {
      title: "About RevDev",
      description:
        "RevDev is an end-to-end software studio focused on strategy, design, engineering and launch.",
    },
    careers: {
      title: "Careers at RevDev",
      description:
        "Join RevDev across frontend, backend, DevOps, design, video and legal roles.",
    },
  },
  es: {
    home: {
      title: "RevDev - Estudio de software end-to-end",
      description:
        "RevDev crea productos digitales completos para empresas, founders y equipos que necesitan lanzar rápido, verse premium y escalar bien.",
    },
    services: {
      title: "Desarrollo de software, automatización con AI y estrategia",
      description:
        "De MVPs a sistemas en tiempo real, RevDev diseña, construye y lanza productos completos con estrategia, UX, backend e infraestructura.",
    },
    projects: {
      title: "Casos de éxito de software en vivo",
      description:
        "Explora casos de éxito de RevDev: productos lanzados para práctica musical, trading en tiempo real y gestión inmobiliaria.",
    },
    partners: {
      title: "Alianzas para crecimiento de producto",
      description:
        "Conoce los socios de negocio, diseño y búsqueda que ayudan a que los productos de RevDev lleguen mejor al mercado.",
    },
    us: {
      title: "Sobre RevDev",
      description:
        "RevDev es un estudio de software end-to-end enfocado en estrategia, diseño, ingeniería y lanzamiento.",
    },
    careers: {
      title: "Empleo en RevDev",
      description:
        "Únete a RevDev en roles de frontend, backend, DevOps, diseño, video y legal.",
    },
  },
  de: {
    home: {
      title: "RevDev - End-to-End Software Studio",
      description:
        "RevDev entwickelt komplette digitale Produkte fuer Unternehmen, Founder und Teams, die schnell launchen, hochwertig wirken und sauber skalieren muessen.",
    },
    services: {
      title: "Softwareentwicklung, KI-Automatisierung und Produktstrategie",
      description:
        "Von MVPs bis zu Echtzeitsystemen: RevDev entwirft, baut und launcht Softwareprodukte mit Strategie, UX, Backend und Infrastruktur.",
    },
    projects: {
      title: "Live Software Case Studies",
      description:
        "Entdecke RevDev Case Studies: Produkte fuer Musiktraining, Echtzeit-Trading und Immobilienprozesse.",
    },
    partners: {
      title: "Partnerschaften fuer Produktwachstum",
      description:
        "Lerne die Business-, Design- und Search-Partner kennen, die RevDev-Produkte staerker in den Markt bringen.",
    },
    us: {
      title: "Ueber RevDev",
      description:
        "RevDev ist ein End-to-End Software Studio fuer Strategie, Design, Engineering und Launch.",
    },
    careers: {
      title: "Karriere bei RevDev",
      description:
        "Arbeite mit RevDev in Frontend, Backend, DevOps, Design, Video oder Legal.",
    },
  },
};

export const homeOffer: Record<Locale, { quote: string; note: string }> = {
  en: {
    quote:
      "We create complete digital products for businesses, founders and teams that need to launch fast, look premium and scale well.",
    note: "Strategy, product design, engineering and launch under one roof.",
  },
  es: {
    quote:
      "Creamos productos digitales completos para empresas, founders y equipos que necesitan lanzar rápido, verse premium y escalar bien.",
    note: "Estrategia, diseño de producto, ingeniería y lanzamiento en una sola dirección.",
  },
  de: {
    quote:
      "Wir entwickeln komplette digitale Produkte fuer Unternehmen, Founder und Teams, die schnell launchen, hochwertig wirken und sauber skalieren muessen.",
    note: "Strategie, Produktdesign, Engineering und Launch aus einer Hand.",
  },
};
