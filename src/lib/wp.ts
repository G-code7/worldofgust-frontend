import 'server-only'
import type { Locale } from '@/i18n/routing'

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL

/** ISR window. On-demand revalidation can be added later with revalidateTag('wp'). */
const REVALIDATE = 3600

async function wpFetch<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  if (!API_URL) throw new Error('[wp.ts] NEXT_PUBLIC_WORDPRESS_API_URL is not set')
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: REVALIDATE, tags: ['wp'] },
  })
  if (!res.ok) throw new Error(`[wp.ts] HTTP ${res.status}`)
  const json = await res.json()
  if (json.errors) {
    console.error('[wp.ts] GraphQL errors:', json.errors)
    throw new Error(json.errors[0]?.message ?? 'GraphQL error')
  }
  return json.data as T
}

/** Pages must render even if WordPress is down. Log and fall back. */
async function safe<T>(fn: () => Promise<T>, fallback: T): Promise<T> {
  try {
    return await fn()
  } catch (e) {
    console.error(e)
    return fallback
  }
}

// ─── Types ────────────────────────────────────────────────────────────────────

export interface WPImage {
  node: {
    sourceUrl: string
    altText: string
    mediaDetails?: { width?: number; height?: number } | null
  }
}

export interface WPProject {
  id: string
  slug: string
  title: string
  modified?: string
  featuredImage?: WPImage | null
  projectFields?: {
    featured?: boolean | null
    technologies?: string | null
    githubUrl?: string | null
    liveDemo?: string | null
    shortDescription?: string | null
    longDescription?: string | null
    image1?: WPImage | null
    image2?: WPImage | null
  } | null
}

export interface WPPost {
  id: string
  slug: string
  title: string
  date: string
  modified: string
  excerpt: string
  content?: string
  featuredImage?: WPImage | null
}

const IMAGE = `node { sourceUrl altText mediaDetails { width height } }`

// ─── Projects (ACF fields unchanged: only fields confirmed in WP) ─────────────

export async function fetchAllProjects(): Promise<WPProject[]> {
  return safe(async () => {
    const data = await wpFetch<{ projects: { nodes: WPProject[] } }>(`
      query GetAllProjects {
        projects(first: 50) {
          nodes {
            id slug title modified
            featuredImage { ${IMAGE} }
            projectFields { featured technologies githubUrl liveDemo shortDescription }
          }
        }
      }
    `)
    return data.projects.nodes
  }, [])
}

export async function fetchFeaturedProjects(): Promise<WPProject[]> {
  const all = await fetchAllProjects()
  return all.filter((p) => p.projectFields?.featured === true)
}

export async function fetchProjectBySlug(slug: string): Promise<WPProject | null> {
  return safe(async () => {
    const data = await wpFetch<{ project: WPProject | null }>(
      `
      query GetProject($slug: ID!) {
        project(id: $slug, idType: SLUG) {
          id slug title modified
          featuredImage { ${IMAGE} }
          projectFields {
            featured technologies githubUrl liveDemo shortDescription longDescription
            image1 { ${IMAGE} }
            image2 { ${IMAGE} }
          }
        }
      }
    `,
      { slug },
    )
    return data.project
  }, null)
}

// ─── Posts (core WPGraphQL fields only) ───────────────────────────────────────
// Language is set per post with a WP category whose slug is `en` or `es`.
// Create both categories in WordPress; uncategorized posts will not appear.

export async function fetchPosts(locale: Locale): Promise<WPPost[]> {
  return safe(async () => {
    const data = await wpFetch<{ posts: { nodes: WPPost[] } }>(
      `
      query GetPosts($cat: String!) {
        posts(first: 50, where: { categoryName: $cat, status: PUBLISH }) {
          nodes { id slug title date modified excerpt featuredImage { ${IMAGE} } }
        }
      }
    `,
      { cat: locale },
    )
    return data.posts.nodes
  }, [])
}

export async function fetchPostBySlug(slug: string): Promise<(WPPost & { categories?: { nodes: { slug: string }[] } }) | null> {
  return safe(async () => {
    const data = await wpFetch<{ post: (WPPost & { categories?: { nodes: { slug: string }[] } }) | null }>(
      `
      query GetPost($slug: ID!) {
        post(id: $slug, idType: SLUG) {
          id slug title date modified excerpt content
          featuredImage { ${IMAGE} }
          categories { nodes { slug } }
        }
      }
    `,
      { slug },
    )
    return data.post
  }, null)
}

export function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').replace(/&#8217;/g, '’').replace(/\s+/g, ' ').trim()
}

export function readingMinutes(html: string) {
  return Math.max(1, Math.round(stripHtml(html).split(' ').length / 220))
}
