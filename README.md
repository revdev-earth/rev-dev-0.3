# RevDev

Studio de desarrollo end-to-end: idea → estrategia → build → launch.

## Stack

- **Next.js 16** (App Router) + **TypeScript** + **React 19**
- **Tailwind v4** + **Motion** (animaciones)
- **next-intl** — i18n con segmento `[locale]` (en / es / de)
- **Resend** — envío del formulario de contacto
- **Prettier** + **ESLint**

## Requisitos

- **Node.js** ≥ 20
- **pnpm**

## Arrancar

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

## Variables De Entorno

Copiar `.env.example` a `.env.local` para desarrollo.

| Variable               | Descripción                                                             |
| ---------------------- | ----------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | URL pública canónica usada por metadata, sitemap, robots, OG y JSON-LD. |
| `RESEND_API_KEY`       | API key de Resend para enviar el formulario de contacto.                |
| `CONTACT_TO_EMAIL`     | Email destino de los mensajes del formulario.                           |
| `CONTACT_FROM_EMAIL`   | Sender verificado en Resend; usar `onboarding@resend.dev` para pruebas. |

En producción, `NEXT_PUBLIC_SITE_URL` debe ser el dominio real del deploy, sin
slash final. Ejemplo: `https://rev-dev.didyou.fyi`.

En Vercel, si `NEXT_PUBLIC_SITE_URL` no existe, el sitio intenta usar las
variables automáticas `VERCEL_PROJECT_PRODUCTION_URL` o `VERCEL_URL` como
fallback. Aun así, para canonical/SEO conviene definir `NEXT_PUBLIC_SITE_URL`
explícitamente.

## Estructura

```
app/            → páginas (internacionalizadas vía [locale])
components/     → componentes reutilizables
i18n/           → configuración de next-intl
lib/            → datos estáticos (proyectos, partners, iconos)
messages/       → traducciones (en.json, es.json, de.json)
public/         → assets estáticos (imágenes, video)
docs/           → blueprint y documentación del proyecto
```

## Scripts

| Comando      | Descripción                |
| ------------ | -------------------------- |
| `pnpm dev`   | Servidor de desarrollo     |
| `pnpm build` | Build de producción        |
| `pnpm start` | Servir build de producción |
| `pnpm lint`  | ESLint                     |
