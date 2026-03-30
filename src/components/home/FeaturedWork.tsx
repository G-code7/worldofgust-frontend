'use client'

import Link from 'next/link'
import Image from 'next/image'
import { WPProject } from '@/lib/wp'

interface FeaturedWorkProps {
  projects: WPProject[]
}

// Proyectos reales del portfolio anterior
const mockProjects: WPProject[] = [
  {
    id: '1',
    slug: 'anima-collectiv',
    title: 'Anima Collectiv',
    projectFields: {
      tagline: 'Scalable e-commerce platform for event ticketing with secure payments and user-friendly booking.',
      technologies: 'React, WooCommerce, Stripe, WordPress',
      liveUrl: '#',
      githubUrl: '#',
    },
  },
  {
    id: '2',
    slug: 'creestudio',
    title: 'Creestudio',
    projectFields: {
      tagline: 'Engaging online portfolio and information hub with responsive design and easy content management.',
      technologies: 'WordPress, Custom Theme, ACF',
      liveUrl: '#',
    },
  },
  {
    id: '3',
    slug: 'aroha',
    title: 'Aroha',
    projectFields: {
      tagline: 'Online catalog for white goods with a custom quote request system to streamline sales.',
      technologies: 'WordPress, WooCommerce, Custom Plugin',
      liveUrl: '#',
    },
  },
  {
    id: '4',
    slug: 'avantistore',
    title: 'AvantiStore',
    projectFields: {
      tagline: 'Stylish e-commerce store for jewelry, emphasizing product galleries and secure transactions.',
      technologies: 'WooCommerce, Stripe, Custom Design',
      liveUrl: '#',
    },
  },
]

const projectTypes: Record<string, string> = {
  'anima-collectiv': 'Event E-commerce',
  'creestudio': 'Portfolio Site',
  'aroha': 'Product Catalog',
  'avantistore': 'Jewelry Store',
}

export default function FeaturedWork({ projects }: FeaturedWorkProps) {
  const displayProjects = projects && projects.length > 0 ? projects : mockProjects

  return (
    <section style={{
      padding: '120px 0',
      background: 'var(--bg-base)',
      position: 'relative',
    }}>
      <div className="container">

        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '64px',
          flexWrap: 'wrap',
          gap: '24px',
        }}>
          <div>
            <span style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              display: 'block',
              marginBottom: '16px',
            }}>
              Our Work
            </span>
            <h2 style={{
              fontFamily: 'Oswald, sans-serif',
              fontSize: 'clamp(36px, 5vw, 52px)',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: 'var(--text-primary)',
              lineHeight: 1.05,
            }}>
              Projects That{' '}
              <span style={{
                background: 'var(--gradient-accent)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Speak
              </span>
            </h2>
          </div>

          <Link href="/work" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 24px',
            border: '1px solid var(--border-accent)',
            borderRadius: '6px',
            fontFamily: 'Oswald, sans-serif',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            textDecoration: 'none',
            transition: 'all 0.2s ease',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--accent)'
            e.currentTarget.style.color = 'white'
            e.currentTarget.style.borderColor = 'var(--accent)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = 'var(--accent)'
            e.currentTarget.style.borderColor = 'var(--border-accent)'
          }}>
            View All Projects →
          </Link>
        </div>

        {/* Featured (big) project */}
        {displayProjects[0] && (
          <FeaturedCard project={displayProjects[0]} />
        )}

        {/* Rest grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          marginTop: '24px',
        }}>
          {displayProjects.slice(1, 4).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedCard({ project }: { project: WPProject }) {
  const imageUrl = project.featuredImage?.node?.sourceUrl
  const tagline = (project.projectFields as any)?.tagline ?? ''
  const technologies = project.projectFields?.technologies?.split(',').map((t: string) => t.trim()).filter(Boolean) ?? []
  const type = projectTypes[project.slug] ?? 'Web Project'

  return (
    <Link href={`/work/${project.slug}`} style={{ textDecoration: 'none', display: 'block', marginBottom: '24px' }}>
      <article style={{
        borderRadius: '16px',
        overflow: 'hidden',
        background: 'var(--bg-surface)',
        border: '1px solid var(--border)',
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr',
        minHeight: '340px',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
      }}
      className="featured-card"
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--border-accent)'
        e.currentTarget.style.boxShadow = 'var(--shadow-card)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.boxShadow = 'none'
      }}>
        {/* Image side */}
        <div style={{
          background: 'var(--bg-elevated)',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '300px',
        }}>
          {imageUrl ? (
            <Image src={imageUrl} alt={project.title} fill style={{ objectFit: 'cover' }} />
          ) : (
            <div style={{
              width: '100%', height: '100%',
              background: 'var(--bg-elevated)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute', inset: 0,
                background: 'var(--gradient-mesh)', opacity: 0.4,
              }} />
              <span style={{
                fontFamily: 'Oswald, sans-serif',
                fontSize: '72px', fontWeight: 700,
                background: 'var(--gradient-accent)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                opacity: 0.25, position: 'relative', zIndex: 1, textTransform: 'uppercase',
              }}>
                {project.title.slice(0, 2)}
              </span>
            </div>
          )}
          {/* Overlay gradient */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, transparent 50%, var(--bg-surface) 100%)',
          }} />
        </div>

        {/* Content side */}
        <div style={{
          padding: '40px 36px',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
        }}>
          <span style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '11px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase',
            color: 'var(--accent)', display: 'block', marginBottom: '12px',
          }}>
            {type}
          </span>
          <h3 style={{
            fontFamily: 'Oswald, sans-serif',
            fontSize: '32px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px',
            color: 'var(--text-primary)', marginBottom: '16px', lineHeight: 1.05,
          }}>
            {project.title}
          </h3>
          <p style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '14px', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '24px',
          }}>
            {tagline}
          </p>

          {technologies.length > 0 && (
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '28px' }}>
              {technologies.map((tech: string) => (
                <span key={tech} style={{
                  padding: '3px 10px',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border)',
                  borderRadius: '3px',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '11px', color: 'var(--accent)', fontWeight: 500,
                }}>
                  {tech}
                </span>
              ))}
            </div>
          )}

          <span style={{
            fontFamily: 'Oswald, sans-serif',
            fontSize: '12px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase',
            color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '8px',
          }}>
            View Case Study →
          </span>
        </div>
      </article>
      <style>{`
        @media (max-width: 768px) {
          .featured-card { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Link>
  )
}

function ProjectCard({ project }: { project: WPProject }) {
  const imageUrl = project.featuredImage?.node?.sourceUrl
  const tagline = (project.projectFields as any)?.tagline ?? ''
  const type = projectTypes[project.slug] ?? 'Web Project'

  return (
    <Link href={`/work/${project.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
      <article style={{
        borderRadius: '12px',
        overflow: 'hidden',
        background: 'var(--bg-surface)',
        border: '1px solid var(--border)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        height: '100%',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)'
        e.currentTarget.style.borderColor = 'var(--border-accent)'
        e.currentTarget.style.boxShadow = 'var(--shadow-card)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.boxShadow = 'none'
      }}>
        {/* Image */}
        <div style={{
          height: '200px',
          background: 'var(--bg-elevated)',
          position: 'relative', overflow: 'hidden',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {imageUrl ? (
            <Image src={imageUrl} alt={project.title} fill style={{ objectFit: 'cover' }} />
          ) : (
            <>
              <div style={{ position: 'absolute', inset: 0, background: 'var(--gradient-mesh)', opacity: 0.4 }} />
              <span style={{
                fontFamily: 'Oswald, sans-serif', fontSize: '48px', fontWeight: 700,
                background: 'var(--gradient-accent)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                opacity: 0.25, position: 'relative', zIndex: 1, textTransform: 'uppercase',
              }}>
                {project.title.slice(0, 2)}
              </span>
            </>
          )}
          {/* Type badge */}
          <div style={{
            position: 'absolute', top: '12px', left: '12px',
            padding: '4px 10px',
            background: 'rgba(10,14,39,0.8)',
            backdropFilter: 'blur(8px)',
            border: '1px solid var(--border)',
            borderRadius: '4px',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '10px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase',
            color: 'var(--accent)',
          }}>
            {type}
          </div>
        </div>

        <div style={{ padding: '20px' }}>
          <h3 style={{
            fontFamily: 'Oswald, sans-serif',
            fontSize: '20px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px',
            color: 'var(--text-primary)', marginBottom: '8px',
          }}>
            {project.title}
          </h3>
          {tagline && (
            <p style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '13px', lineHeight: 1.6, color: 'var(--text-secondary)',
              marginBottom: '16px',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}>
              {tagline}
            </p>
          )}
          <span style={{
            fontFamily: 'Oswald, sans-serif',
            fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase',
            color: 'var(--accent)',
          }}>
            View Project →
          </span>
        </div>
      </article>
    </Link>
  )
}
