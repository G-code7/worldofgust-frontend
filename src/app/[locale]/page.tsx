import type { Metadata } from 'next'
import { pageSetup, type LocaleParams } from '@/lib/page'
import { buildMetadata } from '@/lib/seo'
import { fetchFeaturedProjects } from '@/lib/wp'
import { Hero } from '@/components/home/Hero'
import { Fears } from '@/components/home/Fears'
import { Offers } from '@/components/home/Offers'
import { AfterLaunch } from '@/components/home/AfterLaunch'
import { WorkGrid } from '@/components/work/WorkGrid'
import { CtaBand } from '@/components/ui/CtaBand'
import { Link } from '@/components/ui/Link'

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale, d } = await pageSetup(params)
  return buildMetadata({ locale, href: '/', meta: d.home.meta })
}

export default async function HomePage({ params }: LocaleParams) {
  const { locale, d } = await pageSetup(params)
  const projects = (await fetchFeaturedProjects()).slice(0, 3)
  const t = d.home

  return (
    <>
      <Hero t={t} />
      <Fears t={t.fears} />

      <section className="section rule" aria-labelledby="work-title">
        <div className="wrap">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 id="work-title" className="t-h2">
                {t.work.title}
              </h2>
              <p className="t-lead mt-4 max-w-[52ch]">{t.work.lead}</p>
            </div>
            <Link href="/work" className="font-semibold text-accent hover:underline">
              {t.work.cta}
            </Link>
          </div>
          <WorkGrid projects={projects} locale={locale} cta={d.work.viewCase} empty={d.work.empty} />
        </div>
      </section>

      <Offers t={t.offers} learnMore={d.common.learnMore} />
      <AfterLaunch t={t.afterLaunch} />
      <CtaBand title={t.final.title} body={t.final.body} cta={d.common.qualify} />
    </>
  )
}
