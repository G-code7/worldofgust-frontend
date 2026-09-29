import type { Metadata } from 'next'
import { pageSetup, type LocaleParams } from '@/lib/page'
import { buildMetadata, localizedUrl } from '@/lib/seo'
import { JsonLd, serviceLd } from '@/lib/jsonld'
import { PRICING } from '@/lib/site'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { PageHeader } from '@/components/ui/PageHeader'
import { ButtonLink } from '@/components/ui/Button'
import { ServiceSheet } from '@/components/services/ServiceSheet'
import { RetainerTiers } from '@/components/services/RetainerTiers'
import { Faq } from '@/components/ui/Faq'
import { CtaBand } from '@/components/ui/CtaBand'

const HREF = '/services/digital-operations' as const

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale, d } = await pageSetup(params)
  return buildMetadata({ locale, href: HREF, meta: d.operations.meta })
}

export default async function OperationsPage({ params }: LocaleParams) {
  const { locale, d } = await pageSetup(params)
  const s = d.operations
  return (
    <>
      <JsonLd
        data={serviceLd({ name: s.title, description: s.meta.description, url: localizedUrl(locale, HREF), min: PRICING.retainers.essential, max: PRICING.retainers.operations, locale })}
      />
      <Breadcrumbs
        locale={locale}
        items={[
          { label: d.common.home, href: '/' },
          { label: d.common.nav[0].label, href: '/services' },
          { label: s.breadcrumb, href: HREF },
        ]}
      />
      <PageHeader title={s.title} lead={s.lead}>
        <ButtonLink href="/contact">{s.cta}</ButtonLink>
      </PageHeader>

      <section className="section rule">
        <div className="wrap">
          <h2 className="t-h2 mb-10">{s.tiersTitle}</h2>
          <RetainerTiers tiers={d.retainerTiers} />
        </div>
      </section>

      <section className="section rule">
        <div className="wrap">
          <h2 className="t-h2 mb-12">{s.whyTitle}</h2>
          <div className="grid gap-10 md:grid-cols-12">
            {s.why.map((w, i) => (
              <div key={w.title} className={i === 0 ? 'md:col-span-6' : 'md:col-span-3'}>
                <h3 className={i === 0 ? 't-h3 text-[1.6rem]' : 't-h3'}>{w.title}</h3>
                <p className="mt-3 text-muted">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceSheet s={s} />

      <section className="section rule">
        <div className="wrap max-w-3xl">
          <h2 className="t-h3 text-[1.5rem]">{s.withoutTitle}</h2>
          <p className="mt-4 text-muted">{s.without}</p>
        </div>
      </section>

      <Faq title={d.common.faqTitle} items={s.faq} />
      <CtaBand title={d.home.final.title} body={d.home.final.body} cta={s.cta} />
    </>
  )
}
