import { notFound } from 'next/navigation'
import { hasLocale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { routing, type Locale } from '@/i18n/routing'
import { getDictionary } from '@/content'

export type LocaleParams = { params: Promise<{ locale: string }> }

/** Validates the locale, enables static rendering, and returns the dictionary. */
export async function pageSetup(params: LocaleParams['params']) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) notFound()
  setRequestLocale(locale)
  return { locale: locale as Locale, d: getDictionary(locale as Locale) }
}
