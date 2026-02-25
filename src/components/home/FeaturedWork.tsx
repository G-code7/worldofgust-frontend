'use client'

import Link from 'next/link'
import Image from 'next/image'
import { WPProject } from '@/lib/wp'

interface FeaturedWorkProps {
  projects: WPProject[]
}

// Mock data — activo mientras WP no tenga proyectos reales
const mockProjects: WPProject[] = [
  {
    id: '1',
    slug: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    projectFields: {
      tagline: 'WooCommerce headless con checkout personalizado y Stripe',
      technologies: 'Next.js, WooCommerce, GraphQL, Stripe',
      liveUrl: '#',
      githubUrl: '#',
    },
  },
  {
    id: '2',
    slug: 'saas-dashboard',
    title: 'SaaS Dashboard',
    projectFields: {
      tagline: 'Dashboard analytics con visualización en tiempo real',
      technologies: 'React, Django, PostgreSQL, Chart.js',
      liveUrl: '#',
      githubUrl: '#',
    },
  },
  {
    id: '3',
    slug: 'headless-cms',
    title: 'Headless CMS Blog',
    projectFields: {
      tagline: 'WordPress headless + Next.js — Lighthouse score 98+',
      technologies: 'Next.js, WordPress, WPGraphQL, Tailwind',
      liveUrl: '#',
      githubUrl: '#',
    },
  },
]

export default function FeaturedWork({ projects }: FeaturedWorkProps) {
  const displayProjects = projects && projects.length > 0 ? projects : mockProjects

  return (
    <section style={{
      padding: '120px 0',
      background: 'var(--bg-base)',
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
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              display: 'block',
              marginBottom: '16px',
            }}>
              Selected Work
            </span>
            <h2 style={{
              fontFamily: 'Oswald, sans-serif',
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: 'var(--text-primary)',
            }}>
              Featured{' '}
              <span style={{
                background: 'var(--gradient-accent)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Projects
              </span>
            </h2>
          </div>

          <Link href="/work" style={{
            fontFamily: 'Oswald, sans-serif',
            fontSize: '13px',
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            whiteSpace: 'nowrap',
            border: '1px solid var(--border-accent)',
            padding: '10px 20px',
            borderRadius: '6px',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--accent)'
            e.currentTarget.style.color = 'white'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = 'var(--accent)'
          }}>
            View All Work →
          </Link>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '32px',
        }}>
          {displayProjects.slice(0, 3).map((project, i) => (
            <ProjectCard key={project.id} project={project} featured={i === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, featured }: { project: WPProject; featured?: boolean }) {
  const imageUrl = project.featuredImage?.node?.sourceUrl
  const tagline = (project.projectFields as any)?.tagline ?? ''
  const technologies = project.projectFields?.technologies
    ?.split(',')
    .map((t: string) => t.trim())
    .filter(Boolean) ?? []

  return (
    <Link href={`/work/${project.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
      <article
        style={{
          borderRadius: '12px',
          overflow: 'hidden',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border)',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          height: '100%',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-6px)'
          e.currentTarget.style.boxShadow = 'var(--shadow-card)'
          e.currentTarget.style.borderColor = 'var(--border-accent)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = 'none'
          e.currentTarget.style.borderColor = 'var(--border)'
        }}
      >
        {/* Image area */}
        <div style={{
          height: featured ? '240px' : '200px',
          background: 'var(--bg-elevated)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={project.featuredImage?.node?.altText ?? project.title}
              fill
              style={{ objectFit: 'cover' }}
            />
          ) : (
            /* Placeholder con iniciales cuando no hay imagen */
            <div style={{
              width: '100%',
              height: '100%',
              background: 'var(--bg-elevated)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}>
              {/* Gradient overlay decorativo */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'var(--gradient-mesh)',
                opacity: 0.5,
              }} />
              <span style={{
                fontFamily: 'Oswald, sans-serif',
                fontSize: '56px',
                fontWeight: 700,
                letterSpacing: '4px',
                background: 'var(--gradient-accent)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                opacity: 0.3,
                position: 'relative',
                zIndex: 1,
              }}>
                {project.title.slice(0, 2).toUpperCase()}
              </span>
            </div>
          )}

          {/* Bottom gradient overlay */}
          {imageUrl && (
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, var(--bg-surface) 0%, transparent 60%)',
            }} />
          )}
        </div>

        {/* Content */}
        <div style={{ padding: '24px' }}>
          <h3 style={{
            fontFamily: 'Oswald, sans-serif',
            fontSize: '22px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            color: 'var(--text-primary)',
            marginBottom: tagline ? '8px' : '16px',
          }}>
            {project.title}
          </h3>

          {tagline && (
            <p style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '14px',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '16px',
            }}>
              {tagline}
            </p>
          )}

          {technologies.length > 0 && (
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
              {technologies.slice(0, 4).map((tech: string) => (
                <span key={tech} style={{
                  padding: '3px 8px',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border)',
                  borderRadius: '3px',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '11px',
                  color: 'var(--accent)',
                  fontWeight: 500,
                }}>
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Links */}
          <div style={{
            display: 'flex',
            gap: '16px',
            alignItems: 'center',
          }}>
            <span style={{
              fontFamily: 'Oswald, sans-serif',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}>
              View Case Study →
            </span>

            {project.projectFields?.githubUrl && project.projectFields.githubUrl !== '#' && (
              <a
                href={project.projectFields.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '11px',
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                GitHub
              </a>
            )}

            {project.projectFields?.liveUrl && project.projectFields.liveUrl !== '#' && (
              <a
                href={project.projectFields.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '11px',
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                Live Demo ↗
              </a>
            )}
          </div>
        </div>
      </article>
    </Link>
  )
}
