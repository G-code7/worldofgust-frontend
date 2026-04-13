const WP_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL

export async function wpFetch<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  if (!WP_API_URL) throw new Error('WordPress API URL not configured')

  const res = await fetch(WP_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 },
  })

  const json = await res.json()
  if (json.errors) {
    console.error('[wp.ts] GraphQL errors:', json.errors)
    throw new Error(json.errors[0]?.message ?? 'GraphQL error')
  }
  return json.data as T
}

export interface WPProject {
  id: string
  slug: string
  title: string
  featuredImage?: {
    node: { sourceUrl: string; altText: string }
  }
  projectFields?: {
    tagline?: string
    technologies?: string
    githubUrl?: string
    liveDemo?: string
    liveUrl?: string
    category?: string
  }
}

export async function fetchFeaturedProjects(): Promise<WPProject[]> {
  const data = await wpFetch<{ projects: { nodes: WPProject[] } }>(`
    query GetFeaturedProjects {
      projects(first: 6) {
        nodes {
          id
          slug
          title
          featuredImage {
            node { sourceUrl altText }
          }
          projectFields {
            technologies
            githubUrl
            liveDemo
          }
        }
      }
    }
  `)
  return data.projects.nodes
}