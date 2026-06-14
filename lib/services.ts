import type { Locale } from "@/lib/site";

export type ServiceSlug =
  | "software-development"
  | "ai-automation"
  | "product-strategy"
  | "modernization";

export type ServicePage = {
  slug: ServiceSlug;
  eyebrow: string;
  title: string;
  summary: string;
  promise: string;
  deliverables: string[];
  outcomes: string[];
  faq: { question: string; answer: string }[];
  seo: { title: string; description: string };
};

export const serviceSlugs: ServiceSlug[] = [
  "software-development",
  "ai-automation",
  "product-strategy",
  "modernization",
];

export const servicesByLocale: Record<
  Locale,
  Record<ServiceSlug, ServicePage>
> = {
  en: {
    "software-development": {
      slug: "software-development",
      eyebrow: "Product from zero",
      title: "Custom software development for MVPs and platforms",
      summary:
        "We turn a clear idea into a real product with UX, frontend, backend, database, infrastructure and launch support.",
      promise:
        "You leave with a product people can use, not a loose design or an unfinished prototype.",
      deliverables: [
        "Product discovery and technical scope",
        "UX/UI for the core user journey",
        "Frontend, backend and database implementation",
        "Authentication, admin flows and deployment",
      ],
      outcomes: [
        "A launchable MVP",
        "A scalable technical foundation",
        "A product roadmap for the next release",
      ],
      faq: [
        {
          question: "How much does it cost to build a web app?",
          answer:
            "It depends on scope, integrations and product risk. We normally begin with a discovery step that defines the smallest launchable version before estimating the build.",
        },
        {
          question: "How long does an MVP take?",
          answer:
            "A focused MVP can often be designed and built in 4 to 10 weeks. Larger platforms need phased releases so the product can start learning from users earlier.",
        },
        {
          question: "Can you take a product from idea to launch?",
          answer:
            "Yes. RevDev covers strategy, UX, frontend, backend, infrastructure and launch so the product does not get stuck between vendors.",
        },
      ],
      seo: {
        title: "Custom software development for MVPs and platforms",
        description:
          "Build a launchable web app or platform with RevDev: strategy, UX, frontend, backend, database, deployment and post-launch roadmap.",
      },
    },
    "ai-automation": {
      slug: "ai-automation",
      eyebrow: "Intelligence in motion",
      title: "AI automation and real-time systems",
      summary:
        "We build agents, bots, workflows and real-time interfaces that move data, decisions and operations faster.",
      promise:
        "The goal is not AI theater. It is useful automation tied to real product and business workflows.",
      deliverables: [
        "Workflow mapping and automation design",
        "AI agent or bot architecture",
        "Real-time dashboards and event streams",
        "Monitoring, limits and human override paths",
      ],
      outcomes: [
        "Less manual work",
        "Faster decisions",
        "Systems that keep operating after launch",
      ],
      faq: [
        {
          question: "What can AI automation do for my business?",
          answer:
            "It can classify requests, move data between tools, draft responses, monitor events, trigger workflows and support internal teams when the process is clearly defined.",
        },
        {
          question: "Do you build real-time systems?",
          answer:
            "Yes. We build WebSocket-driven dashboards, live charts, streaming workflows and event-based backends when the product needs immediate feedback.",
        },
        {
          question: "How do you keep AI systems controlled?",
          answer:
            "We define boundaries, logs, monitoring, rate limits and approval steps so automation remains useful without becoming opaque.",
        },
      ],
      seo: {
        title: "AI automation and real-time system development",
        description:
          "Build practical AI agents, bots, dashboards and real-time workflows with RevDev for products and business operations.",
      },
    },
    "product-strategy": {
      slug: "product-strategy",
      eyebrow: "Clarity before code",
      title: "Product strategy and market intelligence",
      summary:
        "We help you understand the market, audience, competitors and launch path before heavy engineering begins.",
      promise:
        "The output is a sharper product decision, not a vague document that never reaches production.",
      deliverables: [
        "Market and competitor mapping",
        "User journey and positioning",
        "Feature prioritization and MVP scope",
        "Launch plan and growth assumptions",
      ],
      outcomes: [
        "Less wasted build time",
        "Clearer product positioning",
        "A roadmap that matches market reality",
      ],
      faq: [
        {
          question: "Do I need strategy before building?",
          answer:
            "If the product has market risk, unclear users or many possible directions, strategy saves time by deciding what should be built first and why.",
        },
        {
          question: "Can you help validate an idea?",
          answer:
            "Yes. We can map the audience, competitive space, core promise and MVP scope before committing to a full build.",
        },
        {
          question: "Is this useful for existing products?",
          answer:
            "Yes. Strategy can clarify what to improve, what to remove and where the product should compete next.",
        },
      ],
      seo: {
        title: "Product strategy and market intelligence for software",
        description:
          "Clarify your software product before building: market research, positioning, MVP scope, roadmap and launch strategy.",
      },
    },
    modernization: {
      slug: "modernization",
      eyebrow: "Built to carry weight",
      title: "Software modernization, scaling and hardening",
      summary:
        "We improve live products that feel slow, fragile, outdated or difficult to extend.",
      promise:
        "The product should feel lighter to users and easier for your team to operate.",
      deliverables: [
        "Technical audit and risk map",
        "Performance, UX and architecture improvements",
        "Security, monitoring and data backup review",
        "Incremental migration plan",
      ],
      outcomes: [
        "Better speed and stability",
        "Cleaner architecture",
        "More confidence before growth",
      ],
      faq: [
        {
          question: "Can you modernize an existing platform?",
          answer:
            "Yes. We audit the current system, identify the highest-risk areas and improve it in phases so the product can keep operating.",
        },
        {
          question: "Do we need to rebuild everything?",
          answer:
            "Not always. A phased modernization is often better: improve the parts that block growth first and replace only what truly needs replacing.",
        },
        {
          question: "Can you improve performance and security?",
          answer:
            "Yes. We look at speed, stability, observability, backups, permissions and abuse protection as part of the modernization work.",
        },
      ],
      seo: {
        title: "Software modernization, scaling and hardening",
        description:
          "Modernize a live software product with RevDev: performance, architecture, security, monitoring, backups and phased migration.",
      },
    },
  },
  es: {
    "software-development": {
      slug: "software-development",
      eyebrow: "Producto desde cero",
      title: "Desarrollo de software a medida para MVPs y plataformas",
      summary:
        "Convertimos una idea clara en un producto real con UX, frontend, backend, base de datos, infraestructura y soporte de lanzamiento.",
      promise:
        "Sales con un producto que la gente puede usar, no con un diseño suelto ni un prototipo a medias.",
      deliverables: [
        "Descubrimiento de producto y alcance técnico",
        "UX/UI para el recorrido principal",
        "Frontend, backend y base de datos",
        "Autenticación, administración y despliegue",
      ],
      outcomes: [
        "Un MVP listo para lanzar",
        "Una base técnica escalable",
        "Un roadmap para la siguiente versión",
      ],
      faq: [
        {
          question: "¿Cuánto cuesta crear una app web?",
          answer:
            "Depende del alcance, integraciones y riesgo del producto. Normalmente empezamos con una etapa de descubrimiento para definir la versión mínima lanzable antes de estimar el build.",
        },
        {
          question: "¿Cuánto tarda lanzar un MVP?",
          answer:
            "Un MVP enfocado puede diseñarse y construirse en 4 a 10 semanas. Plataformas más grandes conviene lanzarlas por fases para aprender antes de los usuarios.",
        },
        {
          question: "¿Pueden llevar una idea hasta el lanzamiento?",
          answer:
            "Sí. RevDev cubre estrategia, UX, frontend, backend, infraestructura y lanzamiento para que el producto no quede atrapado entre proveedores.",
        },
      ],
      seo: {
        title: "Desarrollo de software a medida para MVPs y plataformas",
        description:
          "Construye una app web o plataforma lista para lanzar con RevDev: estrategia, UX, frontend, backend, base de datos, despliegue y roadmap.",
      },
    },
    "ai-automation": {
      slug: "ai-automation",
      eyebrow: "Inteligencia en movimiento",
      title: "Automatización con AI y sistemas en tiempo real",
      summary:
        "Construimos agentes, bots, flujos e interfaces en tiempo real que mueven datos, decisiones y operaciones más rápido.",
      promise:
        "La meta no es teatro de AI. Es automatización útil conectada a procesos reales de producto y negocio.",
      deliverables: [
        "Mapa de procesos y diseño de automatización",
        "Arquitectura de agentes o bots",
        "Dashboards en tiempo real y streams de eventos",
        "Monitoreo, límites y rutas de control humano",
      ],
      outcomes: [
        "Menos trabajo manual",
        "Decisiones más rápidas",
        "Sistemas que siguen operando después del lanzamiento",
      ],
      faq: [
        {
          question: "¿Qué puede automatizar la AI en mi negocio?",
          answer:
            "Puede clasificar solicitudes, mover datos entre herramientas, redactar respuestas, monitorear eventos, disparar flujos y apoyar equipos internos cuando el proceso está bien definido.",
        },
        {
          question: "¿Construyen sistemas en tiempo real?",
          answer:
            "Sí. Construimos dashboards con WebSockets, gráficos en vivo, flujos streaming y backends por eventos cuando el producto necesita respuesta inmediata.",
        },
        {
          question: "¿Cómo mantienen controlados los sistemas con AI?",
          answer:
            "Definimos límites, logs, monitoreo, rate limits y pasos de aprobación para que la automatización sea útil sin volverse opaca.",
        },
      ],
      seo: {
        title: "Automatización con AI y desarrollo de sistemas en tiempo real",
        description:
          "Construye agentes AI, bots, dashboards y flujos en tiempo real con RevDev para productos y operaciones de negocio.",
      },
    },
    "product-strategy": {
      slug: "product-strategy",
      eyebrow: "Claridad antes del código",
      title: "Estrategia de producto e inteligencia de mercado",
      summary:
        "Te ayudamos a entender mercado, audiencia, competencia y ruta de lanzamiento antes de invertir fuerte en ingeniería.",
      promise:
        "El resultado es una decisión de producto más clara, no un documento bonito que nunca llega a producción.",
      deliverables: [
        "Mapa de mercado y competencia",
        "Recorrido de usuario y posicionamiento",
        "Priorización de funcionalidades y alcance MVP",
        "Plan de lanzamiento e hipótesis de crecimiento",
      ],
      outcomes: [
        "Menos tiempo perdido construyendo",
        "Posicionamiento más claro",
        "Roadmap conectado con la realidad del mercado",
      ],
      faq: [
        {
          question: "¿Necesito estrategia antes de construir?",
          answer:
            "Si el producto tiene riesgo de mercado, usuarios poco claros o muchas direcciones posibles, la estrategia ahorra tiempo al decidir qué construir primero y por qué.",
        },
        {
          question: "¿Pueden ayudar a validar una idea?",
          answer:
            "Sí. Podemos mapear audiencia, competencia, promesa central y alcance MVP antes de comprometerte con un build completo.",
        },
        {
          question: "¿Sirve para productos existentes?",
          answer:
            "Sí. La estrategia puede aclarar qué mejorar, qué quitar y dónde debería competir el producto después.",
        },
      ],
      seo: {
        title: "Estrategia de producto e inteligencia de mercado para software",
        description:
          "Aclara tu producto antes de construir: investigación de mercado, posicionamiento, alcance MVP, roadmap y estrategia de lanzamiento.",
      },
    },
    modernization: {
      slug: "modernization",
      eyebrow: "Hecho para cargar peso",
      title: "Modernización, escalado y refuerzo de software",
      summary:
        "Mejoramos productos en vivo que se sienten lentos, frágiles, viejos o difíciles de extender.",
      promise:
        "El producto debe sentirse más ligero para los usuarios y más fácil de operar para tu equipo.",
      deliverables: [
        "Auditoría técnica y mapa de riesgos",
        "Mejoras de performance, UX y arquitectura",
        "Revisión de seguridad, monitoreo y respaldos",
        "Plan de migración incremental",
      ],
      outcomes: [
        "Más velocidad y estabilidad",
        "Arquitectura más limpia",
        "Más confianza antes de crecer",
      ],
      faq: [
        {
          question: "¿Pueden modernizar una plataforma existente?",
          answer:
            "Sí. Auditamos el sistema actual, identificamos las áreas de mayor riesgo y lo mejoramos por fases para que el producto pueda seguir operando.",
        },
        {
          question: "¿Hay que reconstruir todo desde cero?",
          answer:
            "No siempre. Muchas veces conviene modernizar por fases: mejorar primero lo que bloquea el crecimiento y reemplazar solo lo que realmente lo necesita.",
        },
        {
          question: "¿Pueden mejorar performance y seguridad?",
          answer:
            "Sí. Revisamos velocidad, estabilidad, observabilidad, respaldos, permisos y protección contra abusos como parte del trabajo.",
        },
      ],
      seo: {
        title: "Modernización, escalado y refuerzo de software",
        description:
          "Moderniza un producto de software en vivo con RevDev: performance, arquitectura, seguridad, monitoreo, respaldos y migración por fases.",
      },
    },
  },
  de: {
    "software-development": {
      slug: "software-development",
      eyebrow: "Produkt von null",
      title: "Individuelle Softwareentwicklung fuer MVPs und Plattformen",
      summary:
        "Wir verwandeln eine klare Idee in ein echtes Produkt mit UX, Frontend, Backend, Datenbank, Infrastruktur und Launch-Support.",
      promise:
        "Du bekommst ein Produkt, das Menschen nutzen koennen, nicht nur ein loses Design oder einen halbfertigen Prototyp.",
      deliverables: [
        "Product Discovery und technischer Scope",
        "UX/UI fuer die zentrale Nutzerreise",
        "Frontend, Backend und Datenbank",
        "Authentifizierung, Admin-Flows und Deployment",
      ],
      outcomes: [
        "Ein launchbares MVP",
        "Eine skalierbare technische Basis",
        "Eine Roadmap fuer die naechste Version",
      ],
      faq: [
        {
          question: "Was kostet eine Web-App?",
          answer:
            "Das haengt von Umfang, Integrationen und Produktrisiko ab. Meist starten wir mit Discovery, um die kleinste launchbare Version vor der Schaetzung zu definieren.",
        },
        {
          question: "Wie lange dauert ein MVP?",
          answer:
            "Ein fokussiertes MVP kann oft in 4 bis 10 Wochen entworfen und gebaut werden. Groessere Plattformen sollten in Phasen gelauncht werden.",
        },
        {
          question: "Koennt ihr eine Idee bis zum Launch bringen?",
          answer:
            "Ja. RevDev deckt Strategie, UX, Frontend, Backend, Infrastruktur und Launch ab, damit das Produkt nicht zwischen Anbietern haengen bleibt.",
        },
      ],
      seo: {
        title: "Individuelle Softwareentwicklung fuer MVPs und Plattformen",
        description:
          "Baue eine launchbare Web-App oder Plattform mit RevDev: Strategie, UX, Frontend, Backend, Datenbank, Deployment und Roadmap.",
      },
    },
    "ai-automation": {
      slug: "ai-automation",
      eyebrow: "Intelligenz in Bewegung",
      title: "KI-Automatisierung und Echtzeitsysteme",
      summary:
        "Wir bauen Agenten, Bots, Workflows und Echtzeit-Interfaces, die Daten, Entscheidungen und Abläufe schneller bewegen.",
      promise:
        "Das Ziel ist keine KI-Show, sondern nuetzliche Automatisierung in echten Produkt- und Geschaeftsprozessen.",
      deliverables: [
        "Workflow-Mapping und Automatisierungsdesign",
        "Architektur fuer Agenten oder Bots",
        "Echtzeit-Dashboards und Event-Streams",
        "Monitoring, Limits und menschliche Freigabewege",
      ],
      outcomes: [
        "Weniger manuelle Arbeit",
        "Schnellere Entscheidungen",
        "Systeme, die nach dem Launch weiterlaufen",
      ],
      faq: [
        {
          question: "Was kann KI in meinem Unternehmen automatisieren?",
          answer:
            "KI kann Anfragen klassifizieren, Daten zwischen Tools bewegen, Antworten vorbereiten, Events ueberwachen und Workflows ausloesen.",
        },
        {
          question: "Baut ihr Echtzeitsysteme?",
          answer:
            "Ja. Wir bauen WebSocket-Dashboards, Live-Charts, Streaming-Workflows und eventbasierte Backends.",
        },
        {
          question: "Wie bleiben KI-Systeme kontrollierbar?",
          answer:
            "Wir definieren Grenzen, Logs, Monitoring, Rate Limits und Freigabeschritte, damit Automatisierung transparent bleibt.",
        },
      ],
      seo: {
        title: "KI-Automatisierung und Entwicklung von Echtzeitsystemen",
        description:
          "Baue praktische KI-Agenten, Bots, Dashboards und Echtzeit-Workflows mit RevDev fuer Produkte und Business Operations.",
      },
    },
    "product-strategy": {
      slug: "product-strategy",
      eyebrow: "Klarheit vor Code",
      title: "Produktstrategie und Marktintelligenz",
      summary:
        "Wir helfen dir, Markt, Zielgruppe, Wettbewerb und Launch-Pfad zu verstehen, bevor schwere Entwicklung beginnt.",
      promise:
        "Das Ergebnis ist eine schaerfere Produktentscheidung, kein vages Dokument, das nie in Produktion geht.",
      deliverables: [
        "Markt- und Wettbewerbsanalyse",
        "User Journey und Positionierung",
        "Feature-Priorisierung und MVP-Scope",
        "Launch-Plan und Wachstumshypothesen",
      ],
      outcomes: [
        "Weniger verschwendete Bauzeit",
        "Klarere Positionierung",
        "Eine Roadmap mit Marktrealitaet",
      ],
      faq: [
        {
          question: "Brauche ich Strategie vor der Entwicklung?",
          answer:
            "Wenn Markt, Nutzer oder Richtung unklar sind, spart Strategie Zeit, weil sie entscheidet, was zuerst gebaut wird und warum.",
        },
        {
          question: "Koennt ihr eine Idee validieren?",
          answer:
            "Ja. Wir koennen Zielgruppe, Wettbewerb, Kernversprechen und MVP-Scope vor einem kompletten Build klaeren.",
        },
        {
          question: "Hilft das auch bestehenden Produkten?",
          answer:
            "Ja. Strategie kann klaeren, was verbessert, entfernt oder als naechstes positioniert werden sollte.",
        },
      ],
      seo: {
        title: "Produktstrategie und Marktintelligenz fuer Software",
        description:
          "Klaere dein Softwareprodukt vor dem Bau: Marktforschung, Positionierung, MVP-Scope, Roadmap und Launch-Strategie.",
      },
    },
    modernization: {
      slug: "modernization",
      eyebrow: "Gebaut fuer Last",
      title: "Softwaremodernisierung, Skalierung und Haertung",
      summary:
        "Wir verbessern Live-Produkte, die langsam, fragil, veraltet oder schwer erweiterbar wirken.",
      promise:
        "Das Produkt soll sich fuer Nutzer leichter und fuer dein Team einfacher betreibbar anfuehlen.",
      deliverables: [
        "Technisches Audit und Risikokarte",
        "Performance-, UX- und Architekturverbesserungen",
        "Review von Sicherheit, Monitoring und Backups",
        "Inkrementeller Migrationsplan",
      ],
      outcomes: [
        "Mehr Geschwindigkeit und Stabilitaet",
        "Sauberere Architektur",
        "Mehr Vertrauen vor Wachstum",
      ],
      faq: [
        {
          question: "Koennt ihr eine bestehende Plattform modernisieren?",
          answer:
            "Ja. Wir auditieren das aktuelle System, identifizieren die groessten Risiken und verbessern es phasenweise.",
        },
        {
          question: "Muessen wir alles neu bauen?",
          answer:
            "Nicht immer. Eine phasenweise Modernisierung ist oft besser: zuerst verbessern, was Wachstum blockiert.",
        },
        {
          question: "Koennt ihr Performance und Sicherheit verbessern?",
          answer:
            "Ja. Wir betrachten Geschwindigkeit, Stabilitaet, Observability, Backups, Berechtigungen und Schutz vor Missbrauch.",
        },
      ],
      seo: {
        title: "Softwaremodernisierung, Skalierung und Haertung",
        description:
          "Modernisiere ein Live-Softwareprodukt mit RevDev: Performance, Architektur, Sicherheit, Monitoring, Backups und Migration.",
      },
    },
  },
};

export function getService(locale: Locale, slug: string) {
  if (!serviceSlugs.includes(slug as ServiceSlug)) return null;
  return servicesByLocale[locale][slug as ServiceSlug];
}
