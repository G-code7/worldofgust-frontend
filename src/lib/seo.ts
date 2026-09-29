import type { Metadata } from 'next'
import { localePath } from '@/i18n/paths'
import { routing, type Locale, type AppPathname } from '@/i18n/routing'
import { SITE_NAME, SITE_URL } from './site'
import type { Meta } from '@/content/types'

type Href = AppPathname | { pathname: AppPathname; params: Record<string, string> }

export function localizedUrl(locale: Locale, href: Href) {
  const path = localePath(locale, href)
  return `${SITE_URL}${path === '/' ? '' : path}`
}

const SUFFIX = ` | ${SITE_NAME}`

/** Keeps titles within ~60 chars: the brand suffix is only added when it fits. */
function title(t: string) {
  if (t.includes(SITE_NAME)) return t
  return t.length + SUFFIX.length <= 60 ? t + SUFFIX : t
}

export function buildMetadata({
  locale,
  href,
  meta,
  noindex = false,
  translated = true,
  type = 'website',
  image,
  publishedTime,
  modifiedTime,
}: {
  locale: Locale
  href: Href
  meta: Meta
  noindex?: boolean
  /** false for content that only exists in one language (e.g. a blog post) */
  translated?: boolean
  type?: 'website' | 'article'
  image?: string
  publishedTime?: string
  modifiedTime?: string
}): Metadata {
  const canonical = localizedUrl(locale, href)
  const languages: Record<string, string> = {}
  if (translated) {
    for (const l of routing.locales) languages[l] = localizedUrl(l, href)
    languages['x-default'] = localizedUrl(routing.defaultLocale, href)
  }
  const fullTitle = title(meta.title)

  return {
    title: { absolute: fullTitle },
    description: meta.description,
    alternates: { canonical, languages: translated ? languages : undefined },
    robots: noindex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      type,
      siteName: SITE_NAME,
      title: fullTitle,
      description: meta.description,
      url: canonical,
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      alternateLocale: translated ? [locale === 'es' ? 'en_US' : 'es_ES'] : undefined,
      ...(image ? { images: [{ url: image }] } : {}),
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: { card: 'summary_large_image', title: fullTitle, description: meta.description },
  }
}
