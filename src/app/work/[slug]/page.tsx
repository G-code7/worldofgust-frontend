import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import { fetchAllProjects, fetchProjectBySlug } from '@/lib/wp'

// ─── Static params ────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  const projects = await fetchAllProjects().catch(() => [])
  return projects.map((p) => ({ slug: p.slug }))
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const project = await fetchProjectBySlug(slug).catch(() => null)
  if (!project) return { title: 'Project Not Found' }

  return {
    title: project.title,
    description: project.projectFields?.shortDescription ?? '',
    openGraph: {
      title: `${project.title} — World of Gust`,
      description: project.projectFields?.shortDescription ?? '',
      images: project.featuredImage?.node?.sourceUrl
        ? [{ url: project.featuredImage.node.sourceUrl }]
        : [],
    },
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function ProjectPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const project = await fetchProjectBySlug(slug).catch(() => null)

  if (!project) notFound()

  const fields = project.projectFields
  const technologies = fields?.technologies?.split(',').map((t) => t.trim()).filter(Boolean) ?? []
  const galleryImages = [fields?.image1, fields?.image2].filter(Boolean)

  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ── */}
        <section style={{
          position: 'relative',
          height: '70vh',
          minHeight: '500px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'flex-end',
        }}>
          {project.featuredImage?.node?.sourceUrl ? (
            <Image
              src={project.featuredImage.node.sourceUrl}
              alt={project.featuredImage.node.altText || project.title}
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
          ) : (
            <div style={{
              position: 'absolute', inset: 0,
              background: 'var(--gradient-mesh)',
            }} />
          )}
          {/* Gradient overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, var(--bg-base) 20%, transparent 70%)',
          }} />

          {/* Hero content */}
          <div className="container" style={{ position: 'relative', zIndex: 1, paddingBottom: '64px' }}>
            <Link href="/work" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              textDecoration: 'none',
              marginBottom: '24px',
            }}>
              ← Back to Work
            </Link>
            <h1 style={{
              fontFamily: 'Oswald, sans-serif',
              fontSize: 'clamp(48px, 8vw, 96px)',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: 'var(--text-primary)',
              lineHeight: 1,
              marginBottom: '24px',
            }}>
              {project.title}
            </h1>
            {fields?.shortDescription && (
              <p style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '16px',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                maxWidth: '560px',
              }}>
                {fields.shortDescription}
              </p>
            )}
          </div>
        </section>

        {/* ── Meta strip ── */}
        <section style={{
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
          background: 'var(--bg-surface)',
        }}>
          <div className="container" style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0',
          }}>
            {/* Tech stack */}
            {technologies.length > 0 && (
              <div style={{
                padding: '32px 0',
                paddingRight: '48px',
                borderRight: '1px solid var(--border)',
                marginRight: '48px',
              }}>
                <span style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '10px',
                  fontWeight: 600,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  display: 'block',
                  marginBottom: '12px',
                }}>
                  Tech Stack
                </span>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {technologies.map((tech) => (
                    <span key={tech} style={{
                      padding: '4px 12px',
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--border)',
                      borderRadius: '4px',
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '11px',
                      fontWeight: 500,
                      color: 'var(--accent)',
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Links */}
            <div style={{ padding: '32px 0', display: 'flex', alignItems: 'center', gap: '24px' }}>
              {fields?.liveDemo && (
                <a href={fields.liveDemo} target="_blank" rel="noopener noreferrer" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 24px',
                  background: 'var(--accent)',
                  borderRadius: '6px',
                  fontFamily: 'Oswald, sans-serif',
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: 'white',
                  textDecoration: 'none',
                }}>
                  Live Demo ↗
                </a>
              )}
              {fields?.githubUrl && (
                <a href={fields.githubUrl} target="_blank" rel="noopener noreferrer" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 24px',
                  border: '1px solid var(--border)',
                  borderRadius: '6px',
                  fontFamily: 'Oswald, sans-serif',
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                }}>
                  GitHub ↗
                </a>
              )}
            </div>
          </div>
        </section>

        {/* ── Long description ── */}
        {fields?.longDescription && (
          <section style={{ padding: '80px 0', background: 'var(--bg-base)' }}>
            <div className="container" style={{ maxWidth: '720px' }}>
              <span style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                display: 'block',
                marginBottom: '24px',
              }}>
                About the Project
              </span>
              <p style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '16px',
                lineHeight: 1.9,
                color: 'var(--text-secondary)',
                whiteSpace: 'pre-line',
              }}>
                {fields.longDescription}
              </p>
            </div>
          </section>
        )}

        {/* ── Gallery ── */}
        {galleryImages.length > 0 && (
          <section style={{ padding: '0 0 80px', background: 'var(--bg-base)' }}>
            <div className="container">
              <div style={{
                display: 'grid',
                gridTemplateColumns: galleryImages.length === 1 ? '1fr' : '1fr 1fr',
                gap: '16px',
              }}>
                {galleryImages.map((img, i) => (
                  img?.node?.sourceUrl && (
                    <div key={i} style={{
                      position: 'relative',
                      height: '400px',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      border: '1px solid var(--border)',
                    }}>
                      <Image
                        src={img.node.sourceUrl}
                        alt={img.node.altText || `${project.title} screenshot ${i + 1}`}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  )
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Nav between projects ── */}
        <section style={{
          padding: '48px 0',
          borderTop: '1px solid var(--border)',
          background: 'var(--bg-surface)',
        }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <Link href="/work" style={{
              fontFamily: 'Oswald, sans-serif',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              textDecoration: 'none',
            }}>
              ← View All Projects
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}