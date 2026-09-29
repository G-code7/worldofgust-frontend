import type { Metadata } from 'next'
import { pageSetup, type LocaleParams } from '@/lib/page'
import { buildMetadata, localizedUrl } from '@/lib/seo'
import { JsonLd, serviceLd } from '@/lib/jsonld'
import { PRICING } from '@/lib/site'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { PageHeader } from '@/components/ui/PageHeader'
import { ButtonLink } from '@/components/ui/Button'
import { ServiceSheet } from '@/components/services/ServiceSheet'
import { CompareTable } from '@/components/services/CompareTable'
import { Faq } from '@/components/ui/Faq'
import { CtaBand } from '@/components/ui/CtaBand'

const HREF = '/services/express-commerce' as const

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale, d } = await pageSetup(params)
  return buildMetadata({ locale, href: HREF, meta: d.express.meta })
}

export default async function ExpressPage({ params }: LocaleParams) {
  const { locale, d } = await pageSetup(params)
  const s = d.express
  return (
    <>
      <JsonLd
        data={serviceLd({ name: s.title, description: s.meta.description, url: localizedUrl(locale, HREF), min: PRICING.expressCommerce.from, max: PRICING.expressCommerce.to, locale })}
      />
      <Breadcrumbs
        locale={locale}
        items={[
          { label: d.common.home, href: '/' },
          { label: d.common.nav[0].label, href: '/services' },
          { label: s.breadcrumb, href: HREF },
        ]}
      />
      <PageHeader title={s.title} lead={`${s.tagline} ${s.lead}`}>
        <ButtonLink href={{ pathname: '/contact', query: { type: 'express-commerce' } }}>{s.cta}</ButtonLink>
      </PageHeader>

      <section className="rule">
        <div className="wrap flex flex-wrap gap-x-8 gap-y-3 py-6">
          <p className="t-small font-semibold">{s.forWhoTitle}</p>
          {s.forWho.map((w) => (
            <p key={w} className="t-small text-muted">
              {w}
            </p>
          ))}
        </div>
      </section>

      <ServiceSheet s={s} type="express-commerce" />

      <section className="section rule">
        <div className="wrap">
          <h2 className="t-h2 mb-10">{s.compareTitle}</h2>
          <CompareTable cols={s.compareCols} rows={s.compareRows} caption={s.compareTitle} />
        </div>
      </section>

      <section className="section rule bg-surface">
        <div className="wrap grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="t-h2">{s.guaranteeTitle}</h2>
            <p className="mt-5 text-[1.15rem]">{s.guarantee}</p>
          </div>
          <div>
            <h2 className="t-h2">{s.maintenanceTitle}</h2>
            <p className="mt-5 text-muted">{s.maintenance}</p>
          </div>
        </div>
      </section>

      <Faq title={d.common.faqTitle} items={s.faq} />
      <CtaBand title={d.home.final.title} body={d.home.final.body} cta={s.cta} type="express-commerce" />
    </>
  )
}
