import type { Metadata } from 'next'
import { pageSetup, type LocaleParams } from '@/lib/page'
import { buildMetadata } from '@/lib/seo'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { PageHeader } from '@/components/ui/PageHeader'
import { RetainerTiers } from '@/components/services/RetainerTiers'
import { Faq } from '@/components/ui/Faq'
import { CtaBand } from '@/components/ui/CtaBand'

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale, d } = await pageSetup(params)
  return buildMetadata({ locale, href: '/pricing', meta: d.pricing.meta })
}

export default async function PricingPage({ params }: LocaleParams) {
  const { locale, d } = await pageSetup(params)
  const t = d.pricing
  return (
    <>
      <Breadcrumbs locale={locale} items={[{ label: d.common.home, href: '/' }, { label: d.common.nav[1].label, href: '/pricing' }]} />
      <PageHeader title={t.title} lead={t.lead} />

      <section className="rule pt-14 pb-20">
        <div className="wrap">
          <h2 className="t-h2 mb-10">{t.packagesTitle}</h2>
          <div className="grid gap-4 lg:grid-cols-3">
            {t.packages.map((p) => (
              <div
                key={p.name}
                className={`flex flex-col rounded-[var(--radius-card)] p-8 ${p.featured ? 'bg-accent text-on-accent' : 'border border-line bg-surface'}`}
              >
                <h3 className="text-[1.6rem] font-bold tracking-tight">{p.name}</h3>
                <p className={`t-small mt-1 ${p.featured ? 'opacity-80' : 'text-muted'}`}>{p.for}</p>
                <p className="tabular mt-8 text-[2.6rem] font-bold leading-none tracking-tight">{p.price}</p>
                <ul className={`mt-8 space-y-2.5 border-t pt-6 ${p.featured ? 'border-on-accent/25' : 'border-line'}`}>
                  {p.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
                <p className={`t-small mt-auto pt-8 font-semibold ${p.featured ? '' : 'text-accent'}`}>{p.retainer}</p>
              </div>
            ))}
          </div>
          <p className="t-lead mt-12 max-w-[60ch] border-l-2 border-accent pl-6 text-text">{t.anchor}</p>
        </div>
      </section>

      <section className="section rule">
        <div className="wrap">
          <h2 className="t-h2">{t.retainersTitle}</h2>
          <p className="t-lead mt-4 mb-10">{t.retainersLead}</p>
          <RetainerTiers tiers={d.retainerTiers} />
        </div>
      </section>

      <section className="section rule">
        <div className="wrap grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <h2 className="t-h2">{t.exampleTitle}</h2>
            <dl className="tabular mt-8 rounded-[var(--radius-card)] border border-line bg-surface p-6">
              {t.example.map((row) => (
                <div key={row.label} className="flex justify-between gap-6 border-b border-line py-3">
                  <dt className="text-muted">{row.label}</dt>
                  <dd className="font-semibold">{row.value}</dd>
                </div>
              ))}
              <div className="flex justify-between gap-6 pt-4 text-lg">
                <dt className="font-semibold">{t.exampleTotal.label}</dt>
                <dd className="font-bold">{t.exampleTotal.value}</dd>
              </div>
            </dl>
            <p className="t-small mt-4 text-muted">{t.exampleNote}</p>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <h2 className="t-h3 text-[1.5rem]">{t.rulesTitle}</h2>
            <ul className="mt-6 space-y-3">
              {t.rules.map((r) => (
                <li key={r} className="border-l-2 border-line-strong pl-4">
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Faq title={d.common.faqTitle} items={t.faq} />
      <CtaBand title={d.home.final.title} body={d.home.final.body} cta={d.common.qualify} />
    </>
  )
}
