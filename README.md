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

| Comando         | Descripción                 |
| --------------- | --------------------------- |
| `pnpm dev`      | Servidor de desarrollo      |
| `pnpm build`    | Build de producción         |
| `pnpm start`    | Servir build de producción  |
| `pnpm lint`     | ESLint                      |
