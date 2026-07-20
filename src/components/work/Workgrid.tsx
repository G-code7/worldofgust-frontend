'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { WPProject } from '@/lib/wp'

// ─── Mock data (fallback mientras se cargan proyectos reales) ─────────────────

const mockProjects: WPProject[] = [
  {
    id: '1',
    slug: 'anima-collectiv',
    title: 'Anima Collectiv',
    projectFields: {
      shortDescription: 'Scalable e-commerce platform for event ticketing with secure payments and user-friendly booking.',
      technologies: 'React, WooCommerce, Stripe, WordPress',
      liveDemo: '#',
    },
  },
  {
    id: '2',
    slug: 'creestudio',
    title: 'Creestudio',
    projectFields: {
      shortDescription: 'Engaging online portfolio and information hub with responsive design and easy content management.',
      technologies: 'WordPress, Custom Theme, ACF',
      liveDemo: '#',
    },
  },
  {
    id: '3',
    slug: 'aroha',
    title: 'Aroha',
    projectFields: {
      shortDescription: 'Online catalog for white goods with a custom quote request system to streamline sales.',
      technologies: 'WordPress, WooCommerce, Custom Plugin',
      liveDemo: '#',
    },
  },
  {
    id: '4',
    slug: 'avantistore',
    title: 'AvantiStore',
    projectFields: {
      shortDescription: 'Stylish e-commerce store for jewelry, emphasizing product galleries and secure transactions.',
      technologies: 'WooCommerce, Stripe, Custom Design',
      liveDemo: '#',
    },
  },
  {
    id: '5',
    slug: 'ventu-platform',
    title: 'Ventu',
    projectFields: {
      shortDescription: 'Reservations and booking platform for tourism operators across Latin America.',
      technologies: 'Next.js, TypeScript, REST API',
      liveDemo: '#',
    },
  },
  {
    id: '6',
    slug: 'worldofgust-com',
    title: 'World of Gust',
    projectFields: {
      shortDescription: 'This very site — headless WordPress backend with a Next.js frontend and full bilingual support.',
      technologies: 'Next.js, WordPress Headless, GraphQL, Tailwind',
      liveDemo: '#',
    },
  },
]

const FILTERS = ['All', 'E-commerce', 'Business Website', 'Headless WordPress', 'Web App', 'Landing Page']

interface WorkGridProps {
  projects: WPProject[]
}

export default function WorkGrid({ projects }: WorkGridProps) {
  const displayProjects = projects.length > 0 ? projects : mockProjects
  const [activeFilter, setActiveFilter] = useState('All')

  // category vendrá de WP cuando lo agreguemos; por ahora solo "All" funciona con datos reales
  const filtered = activeFilter === 'All'
    ? displayProjects
    : displayProjects.filter((p) => {
        const cat = (p.projectFields as any)?.category ?? ''
        return cat === activeFilter
      })

  return (
    <section style={{
      padding: '80px 0 120px',
      background: 'var(--bg-base)',
    }}>
      <div className="container">

        {/* Filter tabs */}
        <div style={{
          display: 'flex',
          gap: '8px',
          flexWrap: 'wrap',
          marginBottom: '56px',
          paddingBottom: '24px',
          borderBottom: '1px solid var(--border)',
        }}>
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                padding: '8px 18px',
                borderRadius: '6px',
                border: '1px solid',
                borderColor: activeFilter === f ? 'var(--accent)' : 'var(--border)',
                background: activeFilter === f ? 'var(--accent)' : 'transparent',
                color: activeFilter === f ? 'white' : 'var(--text-secondary)',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {f}
            </button>
          ))}

          <span style={{
            marginLeft: 'auto',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '12px',
            color: 'var(--text-muted)',
            alignSelf: 'center',
          }}>
            {filtered.length} project{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Projects grid */}
        {filtered.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '80px 0',
            color: 'var(--text-muted)',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '15px',
          }}>
            No projects in this category yet.
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '24px',
          }}>
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 480px) {
          .work-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function ProjectCard({ project, index }: { project: WPProject; index: number }) {
  const imageUrl = project.featuredImage?.node?.sourceUrl
  const fields = project.projectFields
  const description = fields?.shortDescription ?? ''
  const technologies = fields?.technologies?.split(',').map((t) => t.trim()).filter(Boolean) ?? []
  const accentColor = index % 2 === 0 ? 'var(--accent)' : 'var(--accent-secondary)'

  return (
    <Link href={`/work/${project.slug}`} style={{ textDecoration: 'none', display: 'flex' }}>
      <article
        style={{
          width: '100%',
          borderRadius: '12px',
          overflow: 'hidden',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border)',
          transition: 'all 0.3s ease',
          display: 'flex',
          flexDirection: 'column',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-6px)'
          e.currentTarget.style.borderColor = 'var(--border-accent)'
          e.currentTarget.style.boxShadow = 'var(--shadow-card)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.borderColor = 'var(--border)'
          e.currentTarget.style.boxShadow = 'none'
        }}
      >
        {/* Image */}
        <div style={{
          height: '220px',
          background: 'var(--bg-elevated)',
          position: 'relative',
          overflow: 'hidden',
          flexShrink: 0,
        }}>
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={project.featuredImage?.node?.altText || project.title}
              fill
              style={{ objectFit: 'cover' }}
              sizes="400px"
            />
          ) : (
            <>
              <div style={{ position: 'absolute', inset: 0, background: 'var(--gradient-mesh)', opacity: 0.5 }} />
              <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{
                  fontFamily: 'Oswald, sans-serif', fontSize: '64px', fontWeight: 700,
                  background: 'var(--gradient-accent)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  opacity: 0.2, textTransform: 'uppercase',
                }}>
                  {project.title.slice(0, 2)}
                </span>
              </div>
            </>
          )}

          {/* Number badge */}
          <div style={{
            position: 'absolute', top: '12px', right: '12px',
            fontFamily: 'Oswald, sans-serif',
            fontSize: '11px', fontWeight: 600, letterSpacing: '1px',
            color: 'var(--text-muted)',
            opacity: 0.5,
          }}>
            {String(index + 1).padStart(2, '0')}
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <h3 style={{
            fontFamily: 'Oswald, sans-serif',
            fontSize: '22px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px',
            color: 'var(--text-primary)', marginBottom: '10px',
          }}>
            {project.title}
          </h3>

          {description && (
            <p style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '13px', lineHeight: 1.6, color: 'var(--text-secondary)',
              marginBottom: '16px', flex: 1,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}>
              {description}
            </p>
          )}

          {/* Tech stack */}
          {technologies.length > 0 && (
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '20px' }}>
              {technologies.slice(0, 4).map((tech) => (
                <span key={tech} style={{
                  padding: '3px 8px',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border)',
                  borderRadius: '3px',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '10px', fontWeight: 500, color: accentColor,
                }}>
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* CTA row */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '16px',
            borderTop: '1px solid var(--border)',
          }}>
            <span style={{
              fontFamily: 'Oswald, sans-serif',
              fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase',
              color: accentColor,
            }}>
              View Case Study →
            </span>
            <div style={{
              width: '32px', height: '32px', borderRadius: '50%',
              border: '1px solid var(--border)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--text-muted)', fontSize: '14px',
            }}>
              ↗
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}