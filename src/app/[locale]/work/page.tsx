import type { Metadata } from 'next'
import { pageSetup, type LocaleParams } from '@/lib/page'
import { buildMetadata } from '@/lib/seo'
import { fetchAllProjects } from '@/lib/wp'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { PageHeader } from '@/components/ui/PageHeader'
import { WorkGrid } from '@/components/work/WorkGrid'
import { CtaBand } from '@/components/ui/CtaBand'

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale, d } = await pageSetup(params)
  return buildMetadata({ locale, href: '/work', meta: d.work.meta })
}

export default async function WorkPage({ params }: LocaleParams) {
  const { locale, d } = await pageSetup(params)
  const projects = await fetchAllProjects()
  return (
    <>
      <Breadcrumbs locale={locale} items={[{ label: d.common.home, href: '/' }, { label: d.common.nav[2].label, href: '/work' }]} />
      <PageHeader title={d.work.title} lead={d.work.lead} />
      <section className="rule pt-14 pb-24">
        <div className="wrap">
          <WorkGrid projects={projects} locale={locale} cta={d.work.viewCase} empty={d.work.empty} />
        </div>
      </section>
      <CtaBand title={d.work.labels.next} body={d.home.final.body} cta={d.common.qualify} />
    </>
  )
}
