import type { Metadata } from 'next'
import { pageSetup, type LocaleParams } from '@/lib/page'
import { buildMetadata } from '@/lib/seo'
import { CONTACT } from '@/lib/site'
import type { ServiceKey } from '@/content/types'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { QualifyForm } from '@/components/contact/QualifyForm'

const TYPES: ServiceKey[] = ['infrastructure', 'express-commerce', 'redesign', 'automation', 'other']

type Props = LocaleParams & { searchParams: Promise<{ type?: string }> }

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale, d } = await pageSetup(params)
  // Canonical ignores ?type=..., which fixes the duplicate-title issue from the audit.
  return buildMetadata({ locale, href: '/contact', meta: d.contact.meta })
}

export default async function ContactPage({ params, searchParams }: Props) {
  const { locale, d } = await pageSetup(params)
  const { type } = await searchParams
  const initialType = TYPES.includes(type as ServiceKey) ? (type as ServiceKey) : undefined
  const t = d.contact

  return (
    <>
      <Breadcrumbs locale={locale} items={[{ label: d.common.home, href: '/' }, { label: t.title, href: '/contact' }]} />
      <div className="wrap grid gap-12 pt-10 pb-24 md:pt-14 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <h1 className="t-h1 max-w-[18ch]">{t.title}</h1>
          <p className="t-lead mt-5 max-w-[52ch] text-text">{t.lead}</p>
          <p className="mt-4 max-w-[60ch] text-muted">{t.intro}</p>
          <div className="mt-10">
            <QualifyForm t={t.form} locale={locale} initialType={initialType} />
          </div>
        </div>
        <aside className="lg:col-span-3 lg:col-start-10 lg:pt-28">
          <h2 className="t-h3">{t.sideTitle}</h2>
          <ol className="mt-6 space-y-6">
            {t.steps.map((s, i) => (
              <li key={s.title} className="grid grid-cols-[1.75rem_1fr]">
                <span className="tabular font-semibold text-accent">{i + 1}</span>
                <div>
                  <p className="font-semibold">{s.title}</p>
                  <p className="t-small mt-1 text-muted">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-10 border-t border-line pt-6">
            <p className="t-small text-muted">{t.direct}</p>
            <a href={`mailto:${CONTACT.email}`} className="mt-1 inline-block font-semibold hover:text-accent">
              {CONTACT.email}
            </a>
            {CONTACT.whatsapp ? (
              <a href={`https://wa.me/${CONTACT.whatsapp.replace(/\D/g, '')}`} className="mt-1 block font-semibold hover:text-accent">
                WhatsApp
              </a>
            ) : null}
          </div>
        </aside>
      </div>
    </>
  )
}
