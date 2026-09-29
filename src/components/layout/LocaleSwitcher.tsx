'use client'

import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { localePath, parsePath } from '@/i18n/paths'
import type { Locale } from '@/i18n/routing'

/**
 * A real <a> to the translated URL (crawlable, works without JS), with no redirect hop.
 * Blog posts exist in one language only, so they switch to the blog index.
 */
export function LocaleSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const { pathname, params } = parsePath(usePathname())
  const other: Locale = locale === 'en' ? 'es' : 'en'

  let target = '/'
  if (pathname === '/blog/[slug]') target = localePath(other, '/blog')
  else if (pathname) target = localePath(other, { pathname, params })
  else target = localePath(other, '/')

  return (
    <NextLink
      href={target}
      prefetch={false}
      hrefLang={other}
      lang={other}
      title={label}
      className="grid h-8 min-w-10 place-items-center rounded-[var(--radius-control)] border border-line px-2 text-[0.8rem] font-semibold tracking-wide hover:border-line-strong"
    >
      <span aria-hidden>{other.toUpperCase()}</span>
      <span className="sr-only">{label}</span>
    </NextLink>
  )
}
