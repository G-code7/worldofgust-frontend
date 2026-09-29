# World of Gust: reestructuración bilingüe (v0.2.0)

Reemplaza la capa de UI completa. Datos (WordPress), Resend y GA se mantienen.

## 1. Cómo aplicarlo

Trabaja en `dev`, nunca directo en `master`.

```bash
git checkout dev && git checkout -b feat/i18n-restructure

# Borra la estructura vieja de src/app (todo pasa a src/app/[locale])
git rm -r src/app/about src/app/blog src/app/contact src/app/legal src/app/services src/app/work \
          src/app/page.tsx src/app/not-found.tsx src/app/layout.tsx src/app/globals.css \
          src/app/sitemap.ts src/app/robots.ts
# Componentes y contexto que ya no se usan
git rm -r src/components src/context src/types

# Copia el contenido del zip encima (src/, next.config.ts, package.json, tsconfig.json, .env.example)
npm install
npm run build
```

Conserva tu `favicon.ico` (en `src/app/` o `public/`), tu `eslint.config.mjs` y el `.gitignore`.

## 2. Variables de entorno (Vercel)

| Variable | Obligatoria | Notas |
|---|---|---|
| `NEXT_PUBLIC_WORDPRESS_API_URL` | Sí | Igual que hoy |
| `RESEND_API_KEY` | Sí | El dominio del remitente debe estar verificado en Resend |
| `CONTACT_TO` | No | Destinatario de los leads |
| `N8N_LEAD_WEBHOOK_URL` | No | Recibe cada lead en JSON con el campo `fit` (priority, review, redirect) |

## 3. Tareas fuera del código

1. **DNS (crítico).** `worldofgust.com` sin www no resuelve. Agrégalo como dominio en Vercel (A `76.76.21.21` en Hostinger) para que redirija a www. Las canonicals ya apuntan a `https://www.worldofgust.com`.
2. **Search Console.** Reenvía `https://www.worldofgust.com/sitemap.xml` (26 URLs con hreflang). Usa la propiedad de dominio para cubrir ambos hosts.
3. **WordPress, blog.** Crea las categorías con slug `en` y `es`. Cada post aparece solo en el idioma de su categoría. Mientras no haya posts, `/blog` queda en `noindex` y fuera del sitemap.
4. **WordPress, proyectos.** Renombra el slug `project-type-headless` (Aroha) a `aroha` y agrega en `next.config.ts` el redirect `/work/project-type-headless` → `/work/aroha`. Actualiza la clave en `src/content/case-studies.ts`.

## 4. Confirmar antes de publicar

- `src/lib/site.ts`: número de WhatsApp (hoy `null`, oculto; el sitio en vivo muestra un placeholder), precios, SLA y días de entrega. Todo el sitio lee de aquí.
- Garantía de reembolso del 50% (Express Commerce) y SLA de 2, 4 y 8 horas: son compromisos públicos.
- "6 países con clientes activos" en About.
- Textos legales reescritos: revisión recomendada.
- `src/content/case-studies.ts`: Aroha no tiene métricas. No publiques números que no puedas demostrar.

## 5. Mapa de rutas

| Interna (EN, canonical x-default) | ES |
|---|---|
| `/` | `/es` |
| `/services` | `/es/servicios` |
| `/services/digital-infrastructure` | `/es/servicios/infraestructura-digital` |
| `/services/express-commerce` | `/es/servicios/express-commerce` |
| `/services/digital-operations` | `/es/servicios/operaciones-digitales` |
| `/pricing` | `/es/precios` |
| `/work`, `/work/[slug]` | `/es/proyectos`, `/es/proyectos/[slug]` |
| `/lab` | `/es/lab` |
| `/about` | `/es/nosotros` |
| `/blog`, `/blog/[slug]` | `/es/blog`, `/es/blog/[slug]` |
| `/contact` | `/es/contacto` |
| `/legal/privacy`, `/legal/terms`, `/legal/cookies` | `/es/legal/privacidad`, `/es/legal/terminos`, `/es/legal/cookies` |

Redirects permanentes (en `next.config.ts`): servicios viejos, `/services/consulting`, los 6 slugs falsos del blog, `/en/*` → sin prefijo y el dominio raíz → www.

Para agregar una página: define la ruta en `src/i18n/routing.ts`, crea `src/app/[locale]/<ruta>/page.tsx`, agrega el copy en `src/content/types.ts`, `en.ts` y `es.ts`, y súmala al sitemap.

## 6. Dónde está cada cosa

```
src/
  proxy.ts                 next-intl (Next 16 renombró middleware a proxy)
  i18n/routing.ts          locales y slugs traducidos
  i18n/paths.ts            URLs localizadas sin enviar use-intl al cliente
  content/en.ts, es.ts     todo el copy, tipado (types.ts)
  content/case-studies.ts  narrativa bilingüe de cada caso
  lib/site.ts              precios, SLA, contacto, dominio
  lib/seo.ts               metadata, canonical, hreflang, OG
  lib/jsonld.tsx           Organization, Person, Service, FAQ, Breadcrumbs
  lib/wp.ts                GraphQL con ISR 1h y tolerante a caídas de WP
  components/ui/Link.tsx   Link de servidor (usa este, no next/link)
  components/ui/ClientLink.tsx  Link para componentes cliente
  app/api/contact/route.ts calificación de leads, HTML escapado, honeypot, n8n
```

## 7. Resultados medidos (build local, Lighthouse 12, perfil móvil)

| Página | Perf | Accesibilidad | Best practices | SEO |
|---|---|---|---|---|
| `/` | 93-94 | 100 | 96* | 100 |
| `/pricing` | 97 | 100 | 96* | 100 |
| `/contact` | 98 | 100 | 96* | 100 |
| `/es/servicios/express-commerce` | 95 | 100 | 96* | 100 |

\* Por errores de consola del entorno de prueba (GA bloqueado, favicon ausente). En producción debería subir.

Medido sin datos de WordPress (el entorno no tenía acceso). Con imágenes de proyectos en el home, verifica de nuevo en PageSpeed Insights.

Decisiones que más movieron el número: sin `NextIntlClientProvider` en el cliente (unos 15 KB gzip menos), prefetch por viewport desactivado en los links (TBT de 1,7 s a 0,25 s en el home), fuente variable autoalojada con preload y cero llamadas a Google Fonts.
