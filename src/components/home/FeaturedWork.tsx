"use client";

import Link from 'next/link'
import Image from 'next/image'
import { WPProject } from '@/lib/wp'

interface FeaturedWorkProps {
  projects: WPProject[]
}

export default function FeaturedWork({ projects }: FeaturedWorkProps) {
  const displayProjects = projects || [];

  return (
    <section style={{ padding: '96px 0', backgroundColor: 'var(--color-primary-bg)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px' }}>
          <div>
            <span style={{ 
              color: 'var(--color-accent-blue)', 
              fontFamily: 'monospace', 
              fontSize: '12px', 
              letterSpacing: '4px', 
              textTransform: 'uppercase', 
              display: 'block', 
              marginBottom: '16px' 
            }}>
              Portfolio
            </span>
            <h2 style={{ 
              fontSize: '48px', 
              fontWeight: 900, 
              color: 'white', 
              textTransform: 'uppercase', 
              letterSpacing: '-2px' 
            }}>
              Selected Work
            </h2>
          </div>
        </div>

        {/* Grid de Proyectos */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
          gap: '48px' 
        }}>
          {displayProjects.map((project) => (
            <Link href={`/work/${project.slug}`} key={project.id} style={{ textDecoration: 'none' }}>
              <article style={{ 
                backgroundColor: 'var(--color-secondary-bg)', 
                borderRadius: '16px', 
                overflow: 'hidden', 
                border: '1px solid rgba(255,255,255,0.05)',
                transition: 'transform 0.3s ease'
              }} className="project-card">
                
                {/* Imagen */}
                <div style={{ position: 'relative', height: '350px', width: '100%' }}>
                  {project.featuredImage?.node?.sourceUrl ? (
                    <Image
                      src={project.featuredImage.node.sourceUrl}
                      alt={project.title}
                      fill
                      style={{ objectCover: 'cover', filter: 'grayscale(100%)' }}
                      className="project-image"
                    />
                  ) : (
                    <div style={{ width: '100%', height: '100%', background: '#1a1f3a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.2)' }}>
                      NO_IMAGE
                    </div>
                  )}
                </div>

                {/* Info */}
                <div style={{ padding: '32px' }}>
                  <h3 style={{ color: 'white', fontSize: '24px', fontWeight: 700, marginBottom: '16px' }}>
                    {project.title}
                  </h3>
                  
                  {project.projectFields?.technologies && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {project.projectFields.technologies.split(',').map((tech) => (
                        <span key={tech} style={{ 
                          padding: '4px 12px', 
                          background: 'rgba(59, 130, 246, 0.1)', 
                          border: '1px solid rgba(59, 130, 246, 0.2)', 
                          borderRadius: '4px', 
                          fontSize: '10px', 
                          fontFamily: 'monospace', 
                          color: 'var(--color-accent-blue)' 
                        }}>
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .project-card:hover {
          transform: translateY(-10px);
          border-color: var(--color-accent-blue) !important;
        }
        .project-card:hover :global(.project-image) {
          filter: grayscale(0%) !important;
          transform: scale(1.05);
        }
      `}</style>
    </section>
  )
}