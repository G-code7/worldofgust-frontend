import 'server-only'
import type { Locale } from '@/i18n/routing'
import type { Dictionary } from './types'
import en from './en'
import es from './es'

const dictionaries: Record<Locale, Dictionary> = { en, es }

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? en
}
