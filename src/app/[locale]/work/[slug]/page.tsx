import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { hasLocale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { routing, type Locale } from '@/i18n/routing'
import { getDictionary } from '@/content'
import { getCaseStudy } from '@/content/case-studies'
import { buildMetadata } from '@/lib/seo'
import { fetchAllProjects, fetchProjectBySlug, stripHtml } from '@/lib/wp'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { CtaBand } from '@/components/ui/CtaBand'
import { Link } from '@/components/ui/Link'

type Props = { params: Promise<{ locale: string; slug: string }> }

export async function generateStaticParams() {
  const projects = await fetchAllProjects()
  return projects.map((p) => ({ slug: p.slug }))
}

async function load(params: Props['params']) {
  const { locale, slug } = await params
  if (!hasLocale(routing.locales, locale)) notFound()
  setRequestLocale(locale)
  const project = await fetchProjectBySlug(slug)
  if (!project) notFound()
  return { locale: locale as Locale, d: getDictionary(locale as Locale), project, story: getCaseStudy(slug) }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, project, story } = await load(params)
  const description = story?.problem[locale] ?? stripHtml(project.projectFields?.shortDescription ?? '')
  const industry = story?.industry[locale]
  return buildMetadata({
    locale,
    href: { pathname: '/work/[slug]', params: { slug: project.slug } },
    meta: {
      title: industry ? `${project.title}: ${industry}` : project.title,
      description: description.length > 158 ? `${description.slice(0, 155).trimEnd()}...` : description,
    },
    type: 'article',
    modifiedTime: project.modified,
  })
}

export default async function CaseStudyPage({ params }: Props) {
  const { locale, d, project, story } = await load(params)
  const f = project.projectFields
  const L = d.work.labels
  const hero = project.featuredImage?.node
  const gallery = [f?.image1?.node, f?.image2?.node].filter(Boolean) as NonNullable<typeof hero>[]
  const stack = (f?.technologies ?? '').split(/[,|]/).map((s) => s.trim()).filter(Boolean)
  const intro = story?.problem[locale] ?? f?.shortDescription

  return (
    <article>
      <Breadcrumbs
        locale={locale}
        items={[
          { label: d.common.home, href: '/' },
          { label: d.common.nav[2].label, href: '/work' },
          { label: project.title, href: { pathname: '/work/[slug]', params: { slug: project.slug } } },
        ]}
      />
      <header className="wrap pt-10 pb-12 md:pt-14">
        {story ? <p className="t-small font-semibold text-muted">{story.industry[locale]}</p> : null}
        <h1 className="t-h1 mt-3">{project.title}</h1>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
          {f?.liveDemo ? (
            <a href={f.liveDemo} target="_blank" rel="noopener" className="font-semibold text-accent hover:underline">
              {L.live}
            </a>
          ) : null}
          {f?.githubUrl ? (
            <a href={f.githubUrl} target="_blank" rel="noopener" className="font-semibold text-accent hover:underline">
              {L.code}
            </a>
          ) : null}
        </div>
      </header>

      {hero ? (
        <div className="wrap">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[var(--radius-card)] border border-line bg-raised">
            <Image src={hero.sourceUrl} alt={hero.altText || project.title} fill priority sizes="(min-width: 1240px) 1160px, 100vw" className="object-cover" />
          </div>
        </div>
      ) : null}

      <section className="section">
        <div className="wrap grid gap-12 md:grid-cols-12">
          <aside className="space-y-8 md:col-span-3">
            {story ? (
              <div>
                <h2 className="t-small font-semibold text-muted">{L.client}</h2>
                <p className="mt-1 font-semibold">{story.client}</p>
              </div>
            ) : null}
            {stack.length ? (
              <div>
                <h2 className="t-small font-semibold text-muted">{L.stack}</h2>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {stack.map((s) => (
                    <li key={s} className="rounded-[var(--radius-control)] border border-line px-2.5 py-1 t-small">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </aside>

          <div className="space-y-14 md:col-span-8 md:col-start-5">
            {intro ? (
              <div>
                <h2 className="t-h2">{L.problem}</h2>
                <p className="mt-5 text-[1.2rem] leading-relaxed">{intro}</p>
              </div>
            ) : null}

            {story?.decisions[locale]?.length ? (
              <div>
                <h2 className="t-h2">{L.decisions}</h2>
                <ol className="mt-6 space-y-5">
                  {story.decisions[locale].map((x, i) => (
                    <li key={x} className="grid grid-cols-[2rem_1fr]">
                      <span className="tabular font-semibold text-accent">{i + 1}</span>
                      <span>{x}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ) : null}

            {story?.metrics.length ? (
              <div>
                <h2 className="t-h2">{L.metrics}</h2>
                <dl className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3">
                  {story.metrics.map((m) => (
                    <div key={m.value + m.label.en}>
                      <dd className="tabular text-4xl font-bold tracking-tight">{m.value}</dd>
                      <dt className="t-small mt-1 text-muted">{m.label[locale]}</dt>
                    </div>
                  ))}
                </dl>
              </div>
            ) : null}

            {story?.result ? (
              <div>
                <h2 className="t-h2">{L.result}</h2>
                <p className="mt-5 text-[1.2rem] leading-relaxed">{story.result[locale]}</p>
              </div>
            ) : null}

            {story?.quote ? (
              <figure className="border-l-2 border-accent pl-6">
                <blockquote className="text-[1.35rem] leading-snug">{story.quote.text[locale]}</blockquote>
                <figcaption className="t-small mt-4 text-muted">
                  <span className="font-semibold text-text">{story.quote.author}</span>, {story.quote.role[locale]}
                </figcaption>
              </figure>
            ) : null}

            {/* WordPress long copy is English-only for now; ES shows the bilingual narrative above. */}
            {locale === 'en' && f?.longDescription ? (
              <div className="whitespace-pre-line text-muted">{f.longDescription.replace(/<[^>]*>/g, "")}</div>
            ) : null}
          </div>
        </div>
      </section>

      {gallery.length ? (
        <section className="pb-20" aria-label={L.gallery}>
          <div className="wrap grid gap-6 md:grid-cols-2">
            {gallery.map((g) => (
              <div key={g.sourceUrl} className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] border border-line bg-raised">
                <Image src={g.sourceUrl} alt={g.altText || project.title} fill sizes="(min-width: 768px) 580px, 100vw" className="object-cover" />
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <div className="wrap pb-10">
        <Link href="/work" className="font-semibold text-accent hover:underline">
          {L.back}
        </Link>
      </div>
      <CtaBand title={L.next} body={d.home.final.body} cta={d.common.qualify} />
    </article>
  )
}
