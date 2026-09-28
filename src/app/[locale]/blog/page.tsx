import type { Metadata } from 'next'
import { pageSetup, type LocaleParams } from '@/lib/page'
import { buildMetadata } from '@/lib/seo'
import { fetchPosts, stripHtml } from '@/lib/wp'
import { Link } from '@/components/ui/Link'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { PageHeader } from '@/components/ui/PageHeader'

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale, d } = await pageSetup(params)
  const posts = await fetchPosts(locale)
  // An empty blog is thin content: keep it out of the index until the first post exists.
  return buildMetadata({ locale, href: '/blog', meta: d.blog.meta, noindex: posts.length === 0 })
}

export default async function BlogPage({ params }: LocaleParams) {
  const { locale, d } = await pageSetup(params)
  const t = d.blog
  const posts = await fetchPosts(locale)
  const fmt = new Intl.DateTimeFormat(locale, { dateStyle: 'long' })

  return (
    <>
      <Breadcrumbs locale={locale} items={[{ label: d.common.home, href: '/' }, { label: 'Blog', href: '/blog' }]} />
      <PageHeader title={t.title} lead={t.lead} />
      <section className="rule pt-12 pb-24">
        <div className="wrap">
          {posts.length ? (
            <ul>
              {posts.map((p) => (
                <li key={p.id} className="border-b border-line">
                  <Link href={{ pathname: '/blog/[slug]', params: { slug: p.slug } }} className="group grid gap-3 py-10 md:grid-cols-12 md:gap-10">
                    <time dateTime={p.date} className="t-small text-muted md:col-span-3">
                      {fmt.format(new Date(p.date))}
                    </time>
                    <div className="md:col-span-8">
                      <h2 className="t-h2 text-[clamp(1.4rem,2.2vw,1.9rem)] group-hover:text-accent">{stripHtml(p.title)}</h2>
                      <p className="mt-3 max-w-[62ch] text-muted">{stripHtml(p.excerpt)}</p>
                      <span className="t-small mt-4 inline-block font-semibold text-accent">{t.read}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="max-w-2xl">
              <p className="t-lead">{t.empty}</p>
              <h2 className="t-h3 mt-10">{t.topicsTitle}</h2>
              <ul className="mt-5 space-y-3">
                {t.topics.map((x) => (
                  <li key={x} className="border-l-2 border-line-strong pl-4">
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
