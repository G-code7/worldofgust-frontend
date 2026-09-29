import { routing, type AppPathname, type Locale } from './routing'

/**
 * Tiny, dependency-free localized URL helpers.
 * next-intl handles the proxy and server locale; links are resolved here so the
 * client bundle does not ship use-intl (about 15 KB gzip) just to build hrefs.
 */

export type Href =
  | AppPathname
  | { pathname: AppPathname; params?: Record<string, string>; query?: Record<string, string> }

const pathnames = routing.pathnames as Record<string, string | Record<Locale, string>>

function template(pathname: AppPathname, locale: Locale) {
  const entry = pathnames[pathname]
  return typeof entry === 'string' ? entry : entry[locale]
}

/** Internal pathname -> public URL path for a locale ("/pricing", "/es/precios"). */
export function localePath(locale: Locale, href: Href): string {
  const h = typeof href === 'string' ? { pathname: href } : href
  let path = template(h.pathname, locale)
  for (const [k, v] of Object.entries(h.params ?? {})) path = path.replace(`[${k}]`, encodeURIComponent(v))
  if (locale !== routing.defaultLocale) path = path === '/' ? `/${locale}` : `/${locale}${path}`
  const qs = h.query ? new URLSearchParams(h.query).toString() : ''
  return qs ? `${path}?${qs}` : path
}

/** Public URL path -> locale + internal pathname + params. Used by the language switcher and nav. */
export function parsePath(url: string): { locale: Locale; pathname: AppPathname | null; params: Record<string, string> } {
  const clean = url.split('?')[0].replace(/\/$/, '') || '/'
  const seg = clean.split('/')[1]
  const locale: Locale = (routing.locales as readonly string[]).includes(seg) ? (seg as Locale) : routing.defaultLocale
  const rest = locale === routing.defaultLocale ? clean : clean.slice(locale.length + 1) || '/'

  for (const internal of Object.keys(pathnames) as AppPathname[]) {
    const pattern = template(internal, locale)
    const names: string[] = []
    const re = new RegExp('^' + pattern.replace(/\[(\w+)\]/g, (_, n) => (names.push(n), '([^/]+)')) + '$')
    const m = rest.match(re)
    if (m) return { locale, pathname: internal, params: Object.fromEntries(names.map((n, i) => [n, decodeURIComponent(m[i + 1])])) }
  }
  return { locale, pathname: null, params: {} }
}
