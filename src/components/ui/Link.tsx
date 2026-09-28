import NextLink from 'next/link'
import type { ComponentProps } from 'react'
import { getLocale } from 'next-intl/server'
import type { Locale } from '@/i18n/routing'
import { localePath, type Href } from '@/i18n/paths'

type Props = Omit<ComponentProps<typeof NextLink>, 'href'> & { href: Href }

/** Server component: resolves the localized URL on the server, ships only next/link. */
export async function Link({ href, prefetch = false, ...rest }: Props) {
  const locale = (await getLocale()) as Locale
  // Viewport prefetching of every link was the main source of Total Blocking Time.
  // Pages are static and CDN-cached, so navigation stays fast without it.
  return <NextLink href={localePath(locale, href)} prefetch={prefetch} {...rest} />
}
