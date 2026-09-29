import { CONTACT, FOUNDER, SITE_NAME, SITE_URL } from './site'
import type { Faq } from '@/content/types'
import type { Locale } from '@/i18n/routing'

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify escapes quotes; replace '<' to avoid closing the script tag from content.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}

const ORG_ID = `${SITE_URL}/#organization`
const PERSON_ID = `${SITE_URL}/#founder`

export function organizationLd(locale: Locale, description: string) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': ORG_ID,
        name: SITE_NAME,
        url: SITE_URL,
        description,
        email: CONTACT.email,
        founder: { '@id': PERSON_ID },
        areaServed: ['US', 'ES', 'VE', 'PA', 'CO', 'MX'],
        knowsLanguage: ['en', 'es'],
        priceRange: '$$$',
        sameAs: [FOUNDER.linkedin, FOUNDER.github],
      },
      {
        '@type': 'Person',
        '@id': PERSON_ID,
        name: FOUNDER.name,
        jobTitle: locale === 'es' ? 'Fundador y desarrollador principal' : 'Founder and lead developer',
        worksFor: { '@id': ORG_ID },
        sameAs: [FOUNDER.linkedin, FOUNDER.github],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: ['en', 'es'],
        publisher: { '@id': ORG_ID },
      },
    ],
  }
}

export function breadcrumbLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: it.url })),
  }
}

export function faqLd(faq: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  }
}

export function serviceLd(opts: { name: string; description: string; url: string; min: number; max?: number; locale: Locale }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    inLanguage: opts.locale,
    provider: { '@id': ORG_ID },
    areaServed: 'Worldwide',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: opts.min,
      ...(opts.max ? { highPrice: opts.max } : {}),
    },
  }
}
