'use client'

import NextLink from 'next/link'
import { useParams } from 'next/navigation'
import type { ComponentProps } from 'react'
import { routing, type Locale } from '@/i18n/routing'
import { localePath, type Href } from '@/i18n/paths'

type Props = Omit<ComponentProps<typeof NextLink>, 'href'> & { href: Href }

/** Client-side equivalent of ui/Link. Reads the locale from the [locale] route segment. */
export function ClientLink({ href, prefetch = false, ...rest }: Props) {
  const { locale } = useParams<{ locale?: string }>()
  const l = (routing.locales as readonly string[]).includes(locale ?? '') ? (locale as Locale) : routing.defaultLocale
  return <NextLink href={localePath(l, href)} prefetch={prefetch} {...rest} />
}
