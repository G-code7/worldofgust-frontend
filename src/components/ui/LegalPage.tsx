import type { LegalDoc } from '@/content/types'
import type { StaticPathname as AppPathname, Locale } from '@/i18n/routing'
import { Breadcrumbs } from './Breadcrumbs'

export function LegalPage({ locale, home, doc, href }: { locale: Locale; home: string; doc: LegalDoc; href: AppPathname }) {
  return (
    <>
      <Breadcrumbs locale={locale} items={[{ label: home, href: '/' }, { label: doc.title, href }]} />
      <article className="wrap pt-10 pb-24 md:pt-14">
        <h1 className="t-h1">{doc.title}</h1>
        <p className="t-small mt-4 text-muted">{doc.updated}</p>
        <div className="mt-12 max-w-[68ch] space-y-10">
          {doc.sections.map((s) => (
            <section key={s.h}>
              <h2 className="t-h3 text-[1.35rem]">{s.h}</h2>
              {s.p.map((p) => (
                <p key={p.slice(0, 32)} className="mt-3 text-muted">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>
      </article>
    </>
  )
}
