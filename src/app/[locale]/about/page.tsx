import type { Metadata } from 'next'
import { pageSetup, type LocaleParams } from '@/lib/page'
import { buildMetadata } from '@/lib/seo'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { PageHeader } from '@/components/ui/PageHeader'
import { CtaBand } from '@/components/ui/CtaBand'

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale, d } = await pageSetup(params)
  return buildMetadata({ locale, href: '/about', meta: d.about.meta })
}

export default async function AboutPage({ params }: LocaleParams) {
  const { locale, d } = await pageSetup(params)
  const t = d.about
  return (
    <>
      <Breadcrumbs locale={locale} items={[{ label: d.common.home, href: '/' }, { label: d.common.nav[4].label, href: '/about' }]} />
      <PageHeader title={t.title} lead={t.lead} />

      {/* First person: vision and philosophy (the I/we hybrid voice). */}
      <section className="section rule">
        <div className="wrap grid gap-10 md:grid-cols-12">
          <h2 className="t-h2 md:col-span-4">{t.noteTitle}</h2>
          <div className="space-y-6 text-[1.2rem] leading-relaxed md:col-span-7 md:col-start-6">
            {t.note.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <p className="t-small pt-2 font-semibold text-muted">{t.signature}</p>
          </div>
        </div>
      </section>

      <section className="section rule">
        <div className="wrap">
          <h2 className="t-h2 mb-12">{t.modelTitle}</h2>
          <div className="grid gap-10 md:grid-cols-3">
            {t.model.map((m) => (
              <div key={m.title} className="border-t-2 border-accent pt-6">
                <h3 className="t-h3">{m.title}</h3>
                <p className="mt-3 text-muted">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section rule bg-surface">
        <div className="wrap">
          <h2 className="t-h2 mb-12">{t.processTitle}</h2>
          {/* A real sequence, so it is an ordered list. */}
          <ol className="grid gap-8 md:grid-cols-5">
            {t.process.map((p, i) => (
              <li key={p.title}>
                <span className="tabular t-small font-semibold text-accent">{i + 1}</span>
                <h3 className="t-h3 mt-2">{p.title}</h3>
                <p className="t-small mt-2 text-muted">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section rule">
        <div className="wrap grid gap-14 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="t-h2">{t.stackTitle}</h2>
            <ul className="mt-8 flex flex-wrap gap-2">
              {t.stack.map((s) => (
                <li key={s} className="rounded-[var(--radius-control)] border border-line px-3 py-1.5 t-small">
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <h2 className="t-h3 text-[1.35rem]">{t.factsTitle}</h2>
            <dl className="mt-6 space-y-5">
              {t.facts.map((f) => (
                <div key={f.label} className="flex items-baseline gap-4">
                  <dt className="tabular w-16 text-4xl font-bold tracking-tight">{f.value}</dt>
                  <dd className="text-muted">{f.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <CtaBand title={d.home.final.title} body={d.home.final.body} cta={d.common.qualify} />
    </>
  )
}
