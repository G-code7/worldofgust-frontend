import type { Locale } from '@/i18n/routing'

/**
 * Bilingual case-study narrative, keyed by the WordPress project slug.
 * WordPress keeps owning images, stack and links; this file owns the story.
 *
 * Move these into ACF (e.g. problem_en / problem_es) once the fields exist in WP.
 * Verify field names in GraphiQL before adding them to the query in lib/wp.ts.
 *
 * Rule: never invent a metric. Leave `metrics` empty until you have the real report.
 */
export type CaseStudy = {
  client: string
  industry: Record<Locale, string>
  problem: Record<Locale, string>
  decisions: Record<Locale, string[]>
  metrics: { label: Record<Locale, string>; value: string }[]
  result?: Record<Locale, string>
  quote?: { text: Record<Locale, string>; author: string; role: Record<Locale, string> }
}

export const caseStudies: Record<string, CaseStudy> = {
  'project-type-headless': {
    client: 'Aroha',
    industry: {
      en: 'Premium home appliances, Spain',
      es: 'Electrodomésticos premium, España',
    },
    problem: {
      en: 'A premium appliance catalog where most sales close through a personal quote, not a cart. Visitors needed complete, trustworthy product data and a frictionless way to ask for a price.',
      es: 'Un catálogo de electrodomésticos premium donde la mayoría de ventas se cierra con una cotización personal, no con un carrito. Los visitantes necesitaban fichas completas y confiables y una forma sin fricción de pedir precio.',
    },
    decisions: {
      en: [
        'WooCommerce as the catalog engine, with checkout replaced by a quote request flow.',
        'Structured product attributes so every sheet is complete and filterable.',
        'WordPress kept as the editor the team already knew, so catalog updates need no developer.',
      ],
      es: [
        'WooCommerce como motor del catálogo, con el checkout reemplazado por un flujo de cotización.',
        'Atributos de producto estructurados para que cada ficha esté completa y sea filtrable.',
        'WordPress como el editor que el equipo ya conocía, para actualizar el catálogo sin desarrollador.',
      ],
    },
    metrics: [],
  },
}

export function getCaseStudy(slug: string) {
  return caseStudies[slug]
}
