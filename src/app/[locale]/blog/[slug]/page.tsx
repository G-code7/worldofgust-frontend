import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { hasLocale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { routing, type Locale } from '@/i18n/routing'
import { getDictionary } from '@/content'
import { buildMetadata, localizedUrl } from '@/lib/seo'
import { JsonLd } from '@/lib/jsonld'
import { SITE_NAME, SITE_URL, FOUNDER } from '@/lib/site'
import { fetchPostBySlug, fetchPosts, readingMinutes, stripHtml } from '@/lib/wp'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { CtaBand } from '@/components/ui/CtaBand'
import { Link } from '@/components/ui/Link'

type Props = { params: Promise<{ locale: string; slug: string }> }

export async function generateStaticParams({ params }: { params: { locale: string } }) {
  const posts = await fetchPosts(params.locale as Locale)
  return posts.map((p) => ({ slug: p.slug }))
}

async function load(params: Props['params']) {
  const { locale, slug } = await params
  if (!hasLocale(routing.locales, locale)) notFound()
  setRequestLocale(locale)
  const post = await fetchPostBySlug(slug)
  // A post only exists in the locale of its WP category (en / es).
  if (!post || !post.categories?.nodes.some((c) => c.slug === locale)) notFound()
  return { locale: locale as Locale, d: getDictionary(locale as Locale), post }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, post } = await load(params)
  const description = stripHtml(post.excerpt).slice(0, 158)
  return buildMetadata({
    locale,
    href: { pathname: '/blog/[slug]', params: { slug: post.slug } },
    meta: { title: stripHtml(post.title), description },
    translated: false,
    type: 'article',
    image: post.featuredImage?.node.sourceUrl,
    publishedTime: post.date,
    modifiedTime: post.modified,
  })
}

export default async function PostPage({ params }: Props) {
  const { locale, d, post } = await load(params)
  const title = stripHtml(post.title)
  const url = localizedUrl(locale, { pathname: '/blog/[slug]', params: { slug: post.slug } })
  const img = post.featuredImage?.node
  const fmt = new Intl.DateTimeFormat(locale, { dateStyle: 'long' })

  return (
    <article>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: title,
          description: stripHtml(post.excerpt),
          datePublished: post.date,
          dateModified: post.modified,
          inLanguage: locale,
          mainEntityOfPage: url,
          image: img?.sourceUrl,
          author: { '@type': 'Person', name: FOUNDER.name, url: FOUNDER.linkedin },
          publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
        }}
      />
      <Breadcrumbs
        locale={locale}
        items={[
          { label: d.common.home, href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: title, href: { pathname: '/blog/[slug]', params: { slug: post.slug } } },
        ]}
      />
      <header className="wrap pt-10 pb-10 md:pt-14">
        <h1 className="t-h1 max-w-[24ch]">{title}</h1>
        <p className="t-small mt-6 text-muted">
          <time dateTime={post.date}>{fmt.format(new Date(post.date))}</time>
          {post.content ? ` · ${readingMinutes(post.content)} ${d.blog.minRead}` : null}
        </p>
      </header>
      {img ? (
        <div className="wrap">
          <div className="relative aspect-[2/1] overflow-hidden rounded-[var(--radius-card)] bg-raised">
            <Image src={img.sourceUrl} alt={img.altText || title} fill priority sizes="(min-width: 1240px) 1160px, 100vw" className="object-cover" />
          </div>
        </div>
      ) : null}
      {/* Content is authored by the site owner in WordPress (trusted source). */}
      <div className="wrap section pt-12">
        <div className="prose-wog mx-auto" dangerouslySetInnerHTML={{ __html: post.content ?? '' }} />
        <p className="mx-auto mt-16 max-w-[68ch]">
          <Link href="/blog" className="font-semibold text-accent hover:underline">
            {d.blog.back}
          </Link>
        </p>
      </div>
      <CtaBand title={d.home.final.title} body={d.home.final.body} cta={d.common.qualify} />
    </article>
  )
}
