import type { Metadata } from 'next'
import { pageSetup, type LocaleParams } from '@/lib/page'
import { buildMetadata } from '@/lib/seo'
import { FOUNDER } from '@/lib/site'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { PageHeader } from '@/components/ui/PageHeader'
import { CtaBand } from '@/components/ui/CtaBand'

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale, d } = await pageSetup(params)
  return buildMetadata({ locale, href: '/lab', meta: d.lab.meta })
}

export default async function LabPage({ params }: LocaleParams) {
  const { locale, d } = await pageSetup(params)
  const t = d.lab
  return (
    <>
      <Breadcrumbs locale={locale} items={[{ label: d.common.home, href: '/' }, { label: 'Lab', href: '/lab' }]} />
      <PageHeader title={t.title} lead={t.lead} />

      <section className="section rule">
        <div className="wrap grid gap-10 md:grid-cols-12">
          <h2 className="t-h2 md:col-span-4">{t.specTitle}</h2>
          <dl className="md:col-span-8">
            {t.spec.map((s) => (
              <div key={s.label} className="grid gap-1 border-b border-line py-4 sm:grid-cols-3 sm:gap-6">
                <dt className="text-muted">{s.label}</dt>
                <dd className="font-semibold sm:col-span-2">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section rule">
        <div className="wrap">
          <h2 className="t-h2 mb-12">{t.principlesTitle}</h2>
          <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
            {t.principles.map((p) => (
              <div key={p.title}>
                <h3 className="t-h3 text-[1.4rem]">{p.title}</h3>
                <p className="mt-3 max-w-[48ch] text-muted">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section rule bg-surface">
        <div className="wrap">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <h2 className="t-h2">{t.openTitle}</h2>
            <a href={FOUNDER.github} target="_blank" rel="me noopener" className="font-semibold text-accent hover:underline">
              {t.github}
            </a>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {t.open.map((o) => (
              <article key={o.title} className="flex flex-col rounded-[var(--radius-card)] border border-line bg-bg p-7">
                <p className="t-small font-semibold text-accent">{o.status}</p>
                <h3 className="t-h3 mt-3 text-[1.35rem]">{o.title}</h3>
                <p className="mt-3 text-muted">{o.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={d.home.final.title} body={d.home.final.body} cta={d.common.qualify} />
    </>
  )
}
