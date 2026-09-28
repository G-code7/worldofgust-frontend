import type { Dictionary } from '@/content/types'
import { ButtonLink } from '@/components/ui/Button'
import { PageReceipt } from './PageReceipt'

export function Hero({ t }: { t: Dictionary['home'] }) {
  return (
    <section className="wrap grid gap-12 pt-14 pb-20 md:pt-20 lg:grid-cols-12 lg:items-end lg:gap-10 lg:pb-28">
      <div className="lg:col-span-8">
        <h1 className="t-display max-w-[19ch]">{t.hero.title}</h1>
        <p className="t-lead mt-7 max-w-[46ch]">{t.hero.lead}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/contact">{t.hero.primary}</ButtonLink>
          <ButtonLink href="/work" variant="ghost">
            {t.hero.secondary}
          </ButtonLink>
        </div>
      </div>
      <div className="settle settle-3 lg:col-span-4">
        <PageReceipt t={t.receipt} />
      </div>
    </section>
  )
}
