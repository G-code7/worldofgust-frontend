import { getLocale } from 'next-intl/server'
import { getDictionary } from '@/content'
import type { Locale } from '@/i18n/routing'
import { ButtonLink } from '@/components/ui/Button'

export default async function NotFound() {
  const locale = (await getLocale()) as Locale
  const t = getDictionary(locale).notFound
  return (
    <section className="wrap flex min-h-[60dvh] flex-col justify-center py-24">
      <p className="tabular text-[clamp(4rem,12vw,8rem)] font-bold leading-none tracking-tighter text-line-strong">404</p>
      <h1 className="t-h1 mt-6">{t.title}</h1>
      <p className="t-lead mt-4 max-w-[48ch]">{t.body}</p>
      <div className="mt-9 flex flex-wrap gap-3">
        <ButtonLink href="/">{t.home}</ButtonLink>
        <ButtonLink href="/work" variant="ghost">
          {t.work}
        </ButtonLink>
      </div>
    </section>
  )
}
