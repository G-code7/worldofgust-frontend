const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL!

async function wpFetch<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 3600 },
  })
  const json = await res.json()
  if (json.errors) {
    console.error('[wp.ts] GraphQL errors:', json.errors)
    throw new Error(json.errors[0]?.message ?? 'GraphQL error')
  }
  return json.data as T
}

// ─── Types ────────────────────────────────────────────────────────────────────

export interface WPImage {
  node: {
    sourceUrl: string
    altText: string
  }
}

export interface WPProject {
  id: string
  slug: string
  title: string
  featuredImage?: WPImage
  projectFields?: {
    featured?: boolean
    technologies?: string
    githubUrl?: string
    liveDemo?: string
    shortDescription?: string
    longDescription?: string
    image1?: WPImage
    image2?: WPImage
  }
}

// ─── Queries ──────────────────────────────────────────────────────────────────

// Todos los proyectos — para /work
export async function fetchAllProjects(): Promise<WPProject[]> {
  const data = await wpFetch<{ projects: { nodes: WPProject[] } }>(`
    query GetAllProjects {
      projects(first: 20) {
        nodes {
          id
          slug
          title
          featuredImage {
            node { sourceUrl altText }
          }
          projectFields {
            featured
            technologies
            githubUrl
            liveDemo
            shortDescription
          }
        }
      }
    }
  `)
  return data.projects.nodes
}

// Solo featured — para el home
export async function fetchFeaturedProjects(): Promise<WPProject[]> {
  const all = await fetchAllProjects()
  return all.filter((p) => p.projectFields?.featured === true)
}

// Proyecto individual — para /work/[slug]
export async function fetchProjectBySlug(slug: string): Promise<WPProject | null> {
  const data = await wpFetch<{ project: WPProject | null }>(`
    query GetProject($slug: ID!) {
      project(id: $slug, idType: SLUG) {
        id
        slug
        title
        featuredImage {
          node { sourceUrl altText }
        }
        projectFields {
          featured
          technologies
          githubUrl
          liveDemo
          shortDescription
          longDescription
          image1 {
            node { sourceUrl altText }
          }
          image2 {
            node { sourceUrl altText }
          }
        }
      }
    }
  `, { slug })
  return data.project
}