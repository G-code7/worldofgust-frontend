import type { MetadataRoute } from 'next'
import { routing, type AppPathname } from '@/i18n/routing'
import { localizedUrl } from '@/lib/seo'
import { fetchAllProjects, fetchPosts } from '@/lib/wp'

type Href = AppPathname | { pathname: AppPathname; params: Record<string, string> }

const STATIC: { href: AppPathname; priority: number; changeFrequency: 'weekly' | 'monthly' | 'yearly' }[] = [
  { href: '/', priority: 1, changeFrequency: 'weekly' },
  { href: '/services', priority: 0.9, changeFrequency: 'monthly' },
  { href: '/services/digital-infrastructure', priority: 0.9, changeFrequency: 'monthly' },
  { href: '/services/express-commerce', priority: 0.9, changeFrequency: 'monthly' },
  { href: '/services/digital-operations', priority: 0.8, changeFrequency: 'monthly' },
  { href: '/pricing', priority: 0.8, changeFrequency: 'monthly' },
  { href: '/work', priority: 0.8, changeFrequency: 'weekly' },
  { href: '/about', priority: 0.6, changeFrequency: 'monthly' },
  { href: '/lab', priority: 0.6, changeFrequency: 'monthly' },
  { href: '/contact', priority: 0.7, changeFrequency: 'yearly' },
  { href: '/legal/privacy', priority: 0.2, changeFrequency: 'yearly' },
  { href: '/legal/terms', priority: 0.2, changeFrequency: 'yearly' },
  { href: '/legal/cookies', priority: 0.2, changeFrequency: 'yearly' },
]

/** One entry per URL per locale, each carrying its hreflang alternates. */
function pair(href: Href, rest: Omit<MetadataRoute.Sitemap[number], 'url'>): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(routing.locales.map((l) => [l, localizedUrl(l, href)]))
  return routing.locales.map((l) => ({ url: localizedUrl(l, href), alternates: { languages }, ...rest }))
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [projects, postsEn, postsEs] = await Promise.all([fetchAllProjects(), fetchPosts('en'), fetchPosts('es')])

  const staticRoutes = STATIC.flatMap((r) => pair(r.href, { priority: r.priority, changeFrequency: r.changeFrequency }))

  const projectRoutes = projects.flatMap((p) =>
    pair({ pathname: '/work/[slug]', params: { slug: p.slug } }, { lastModified: p.modified ? new Date(p.modified) : undefined, priority: 0.7 }),
  )

  // Blog index only once it has posts (it is noindex while empty).
  const blog: MetadataRoute.Sitemap = []
  if (postsEn.length) blog.push({ url: localizedUrl('en', '/blog'), priority: 0.7 })
  if (postsEs.length) blog.push({ url: localizedUrl('es', '/blog'), priority: 0.7 })
  for (const [locale, posts] of [['en', postsEn], ['es', postsEs]] as const) {
    for (const p of posts) {
      blog.push({ url: localizedUrl(locale, { pathname: '/blog/[slug]', params: { slug: p.slug } }), lastModified: new Date(p.modified), priority: 0.6 })
    }
  }

  return [...staticRoutes, ...projectRoutes, ...blog]
}
