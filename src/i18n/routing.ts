import { defineRouting } from 'next-intl/routing'

/**
 * EN is the primary market and lives at the root (no prefix).
 * ES lives under /es with localized slugs.
 * Every page is self-canonical; hreflang (en, es, x-default=en) ties the pairs together.
 */
export const routing = defineRouting({
  locales: ['en', 'es'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  // No Accept-Language redirects: bots and shared links always land on the URL they asked for.
  localeDetection: false,
  // hreflang is emitted in <head> by lib/seo.ts, not as HTTP Link headers.
  alternateLinks: false,
  pathnames: {
    '/': '/',
    '/about': { en: '/about', es: '/nosotros' },
    '/services': { en: '/services', es: '/servicios' },
    '/services/digital-infrastructure': {
      en: '/services/digital-infrastructure',
      es: '/servicios/infraestructura-digital',
    },
    '/services/express-commerce': {
      en: '/services/express-commerce',
      es: '/servicios/express-commerce',
    },
    '/services/digital-operations': {
      en: '/services/digital-operations',
      es: '/servicios/operaciones-digitales',
    },
    '/pricing': { en: '/pricing', es: '/precios' },
    '/work': { en: '/work', es: '/proyectos' },
    '/work/[slug]': { en: '/work/[slug]', es: '/proyectos/[slug]' },
    '/lab': { en: '/lab', es: '/lab' },
    '/blog': { en: '/blog', es: '/blog' },
    '/blog/[slug]': { en: '/blog/[slug]', es: '/blog/[slug]' },
    '/contact': { en: '/contact', es: '/contacto' },
    '/legal/privacy': { en: '/legal/privacy', es: '/legal/privacidad' },
    '/legal/terms': { en: '/legal/terms', es: '/legal/terminos' },
    '/legal/cookies': { en: '/legal/cookies', es: '/legal/cookies' },
  },
})

export type Locale = (typeof routing.locales)[number]
export type AppPathname = keyof typeof routing.pathnames

/** Pathnames without dynamic segments: safe to use as a plain href. */
export type StaticPathname = Exclude<AppPathname, `${string}[${string}`>
