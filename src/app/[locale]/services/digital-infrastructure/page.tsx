import type { Metadata } from 'next'
import { pageSetup, type LocaleParams } from '@/lib/page'
import { buildMetadata, localizedUrl } from '@/lib/seo'
import { JsonLd, serviceLd } from '@/lib/jsonld'
import { PRICING } from '@/lib/site'
import { Link } from '@/components/ui/Link'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { PageHeader } from '@/components/ui/PageHeader'
import { ButtonLink } from '@/components/ui/Button'
import { ServiceSheet } from '@/components/services/ServiceSheet'
import { Faq } from '@/components/ui/Faq'
import { CtaBand } from '@/components/ui/CtaBand'

const HREF = '/services/digital-infrastructure' as const

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale, d } = await pageSetup(params)
  return buildMetadata({ locale, href: HREF, meta: d.infrastructure.meta })
}

export default async function InfrastructurePage({ params }: LocaleParams) {
  const { locale, d } = await pageSetup(params)
  const s = d.infrastructure
  return (
    <>
      <JsonLd
        data={serviceLd({ name: s.title, description: s.meta.description, url: localizedUrl(locale, HREF), min: PRICING.infrastructure.from, max: PRICING.infrastructure.to, locale })}
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
        <ButtonLink href={{ pathname: '/contact', query: { type: 'infrastructure' } }}>{s.cta}</ButtonLink>
      </PageHeader>
      <ServiceSheet s={s} type="infrastructure" />

      <section className="section rule">
        <div className="wrap grid gap-6 md:grid-cols-12">
          <h2 className="t-h2 md:col-span-5">{d.pricing.packagesTitle}</h2>
          <div className="grid gap-4 sm:grid-cols-3 md:col-span-7">
            {d.pricing.packages.map((p) => (
              <div key={p.name} className="rounded-[var(--radius-card)] border border-line p-5">
                <h3 className="t-h3">{p.name}</h3>
                <p className="tabular mt-2 text-2xl font-bold">{p.price}</p>
                <p className="t-small mt-2 text-muted">{p.for}</p>
              </div>
            ))}
          </div>
          <p className="md:col-span-7 md:col-start-6">
            <Link href="/pricing" className="font-semibold text-accent hover:underline">
              {d.home.offers.compare}
            </Link>
          </p>
        </div>
      </section>

      <Faq title={d.common.faqTitle} items={s.faq} />
      <CtaBand title={d.home.final.title} body={d.home.final.body} cta={s.cta} type="infrastructure" />
    </>
  )
}
