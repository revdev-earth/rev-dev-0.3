# RevDev — Blueprint

> Documento vivo. Estado actual de la visión, stack y estructura del sitio
> unificado. Para el histórico de decisiones ver `docs/history/`.

Última actualización: 2026-06-10

---

## Objetivo

RevDev es un studio de desarrollo end-to-end: **idea → estrategia → build
(front / back / devops / diseño) → launch**.

El sitio cumple tres trabajos:

1. **Ganar clientes** — vender servicios de desarrollo.
2. **Mostrar proyectos e ideas propias** — studio de producto.
3. **Atraer talento** — reclutar (Careers).

---

## Stack

- **Next.js 16** (App Router) + **TypeScript** + **React 19**
- **Tailwind v4** + **motion** (ex framer-motion, animaciones)
- **next-intl** — i18n vía segmento `[locale]` (en / es / de). Default: `en`.
  `localePrefix: "always"` → toda ruta lleva idioma (`/en`, `/es`, `/de`)
- **Resend** — envío del formulario de contacto (`app/api/contact`)
- **Prettier** (+ plugin tailwind) + **ESLint**
- Gestor de paquetes: **pnpm**
- Deploy: **Vercel**

Decisión: se toma el esqueleto moderno de `revdev2.0` (Next + Tailwind) y se
porta el contenido más rico de `rev-dev-frontend` (v1). Se descartan Vite,
React Router y styled-components.

---

## Mapa de rutas

```
/[locale]
  /                 Home
  /services         Servicios + contacto
  /projects         Proyectos: disponibles + en trabajo (con imagen)
  /partners         Socios comerciales + propuestas (cards premium con imagen)
  /us               Quiénes somos
  /careers          Vacantes + talento
```

---

## Estructura de carpetas

```
rev-dev/
  app/[locale]/
    layout.tsx          Header + Footer + provider i18n
    page.tsx            Home
    services/page.tsx
    projects/page.tsx
    partners/page.tsx
    us/page.tsx
    careers/page.tsx
  components/           Header, Footer, Hero, ContactForm, LocaleSwitcher
  messages/             i18n: en.json, es.json, de.json
  lib/                  projects.ts, partners.ts, serviceIcons.ts (lucide)
  public/               partners/*.jpg, projects/*.jpg
  docs/                 BLUEPRINT.md + history/
  i18n/
  proxy.ts             (ex middleware.ts — renombrado en Next 16)
  .prettierrc
  tailwind.config.ts
```

---

## Contenido por página

### Home `/`

- Hero animado — 3 frases rotando (de v2, traducidas i18n).
- Bloque de servicios — los 6 de v1: software/infra, herramientas digitales,
  impulso de empresa, frontend, backend, diseño.
- Proceso 4 pasos: Tu Idea → Estrategia → Backlog/Sprints → Go Live.
- Carrusel / galería de trabajos.
- CTA → Services / Contact.

### Services `/services`

- Detalle de los 6 servicios, cada uno con icono (lucide-react).
- Formulario de contacto (qué / correo / mensaje) → Resend.

### Projects `/projects` *(nueva)*

- Sección **Disponibles** — proyectos abiertos a colaborar / invertir.
- Sección **En trabajo** — en progreso. Hoy: RevTrade, Properties.
- Card con imagen, chip de estado, título, descripción, stack.

### Partners `/partners` *(nueva)*

- Socios actuales en cards premium: imagen, chip de categoría, nombre de
  marca y copy provocativo. Hoy (borrador): Nexus Partners (Business &
  Contacts), Aurora Studio (Design), Summit SEO (Search & SEO).
- **Propuestas**: CTA para nuevas alianzas.
- Nota: Ideas se quitó del sitio (sin contenido por ahora).

### Us `/us`

- 8 bloques de v2: esencia, valores, evolución, innovaciones, comunidad,
  ventaja competitiva, equipo, impacto.
- Sección equipo.

### Careers `/careers`

- Vacantes: Front / Back / DevOps / Diseño / Video / Legal.
- Perks & benefits.
- Registro de interés.

---

## Componentes compartidos

Header (nav + Hamburg móvil + switch de idioma), Footer (3 columnas de v1),
AnimationDiv (transición de páginas), Cards, Carousel, ServiceCard,
ProcessStep, ProjectCard, ContactForm.

---

## i18n

- Segmento `[locale]` en la ruta con `next-intl` + middleware. Prefijo siempre.
- Copy en `messages/{en,es,de}.json`. Switch de idioma en el header.
- Migración del copy existente:
  - inglés (v1) → `en`
  - español (form v2) → `es`
  - alemán (hero v2) → `de`

---

## Origen del contenido

| Fuente | Aporta |
| --- | --- |
| `rev-dev-frontend` (Vite) | Copy rico: servicios, proceso 4 pasos, works, Ideas |
| `revdev2.0` (Next 13) | Esqueleto Next + Tailwind, Header/Footer/Hamburg, Us, Careers |
