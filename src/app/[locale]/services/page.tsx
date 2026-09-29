import type { Metadata } from 'next'
import { Link } from '@/components/ui/Link'
import { pageSetup, type LocaleParams } from '@/lib/page'
import { buildMetadata } from '@/lib/seo'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { PageHeader } from '@/components/ui/PageHeader'
import { Faq } from '@/components/ui/Faq'
import { CtaBand } from '@/components/ui/CtaBand'

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale, d } = await pageSetup(params)
  return buildMetadata({ locale, href: '/services', meta: d.services.meta })
}

export default async function ServicesPage({ params }: LocaleParams) {
  const { locale, d } = await pageSetup(params)
  const t = d.services
  return (
    <>
      <Breadcrumbs locale={locale} items={[{ label: d.common.home, href: '/' }, { label: d.common.nav[0].label, href: '/services' }]} />
      <PageHeader title={t.title} lead={t.lead} />

      <section className="rule">
        <div className="wrap">
          {t.items.map((s) => (
            <article key={s.href} className="grid gap-6 border-b border-line py-12 md:grid-cols-12 md:gap-10 md:py-16">
              <div className="md:col-span-4">
                <h2 className="t-h2 text-[clamp(1.6rem,2.4vw,2.1rem)]">
                  <Link href={s.href} className="hover:text-accent">
                    {s.name}
                  </Link>
                </h2>
                <p className="tabular mt-3 font-semibold">{s.price}</p>
              </div>
              <div className="md:col-span-6">
                <p className="text-[1.2rem] leading-snug">{s.problem}</p>
                <p className="mt-4 text-muted">{s.forWho}</p>
              </div>
              <div className="md:col-span-2 md:text-right">
                <Link href={s.href} className="font-semibold text-accent hover:underline">
                  {d.common.learnMore}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Faq title={d.common.faqTitle} items={t.faq} />
      <CtaBand title={t.notSure.title} body={t.notSure.body} cta={d.common.qualify} />
    </>
  )
}
