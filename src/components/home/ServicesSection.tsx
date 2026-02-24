'use client'

import Link from 'next/link'

const services = [
  {
    icon: '⚡',
    title: 'Full Stack Development',
    description: 'End-to-end web applications built with React, Next.js, and Python/Django. From database architecture to polished UI.',
    tags: ['React', 'Next.js', 'Django'],
    href: '/services/full-stack',
  },
  {
    icon: '🛒',
    title: 'E-commerce Solutions',
    description: 'High-converting online stores with WooCommerce or custom builds. SEO-ready, fast, and built to scale.',
    tags: ['WooCommerce', 'Stripe', 'SEO'],
    href: '/services/ecommerce',
  },
  {
    icon: '🔗',
    title: 'WordPress Headless',
    description: 'The best of both worlds — WordPress CMS power with Next.js frontend performance. Easy to manage, impossible to outperform.',
    tags: ['WPGraphQL', 'Next.js', 'ACF'],
    href: '/services/headless-wordpress',
    featured: true,
  },
  {
    icon: '🎨',
    title: 'Frontend Development',
    description: 'Pixel-perfect interfaces with smooth animations and exceptional UX. Built for performance and accessibility.',
    tags: ['React', 'Tailwind', 'Framer'],
    href: '/services/frontend',
  },
  {
    icon: '⚙️',
    title: 'Backend & APIs',
    description: 'Robust REST and GraphQL APIs. Authentication, data modeling, cloud deployment — done right.',
    tags: ['Python', 'Node.js', 'PostgreSQL'],
    href: '/services/backend',
  },
  {
    icon: '🔍',
    title: 'Technical Consulting',
    description: 'Architecture reviews, tech stack decisions, performance audits. Get expert guidance before you build.',
    tags: ['Architecture', 'Performance', 'SEO'],
    href: '/services/consulting',
  },
]

export default function ServicesSection() {
  return (
    <section style={{
      padding: '120px 0',
      background: 'var(--bg-surface)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background accent */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'var(--gradient-accent)',
        opacity: 0.03,
        filter: 'blur(100px)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
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
            What I Do
          </span>
          <h2 style={{
            fontFamily: 'Oswald, sans-serif',
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '2px',
            color: 'var(--text-primary)',
            marginBottom: '20px',
          }}>
            Services &{' '}
            <span style={{
              background: 'var(--gradient-accent)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Expertise
            </span>
          </h2>
          <p style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '16px',
            color: 'var(--text-secondary)',
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            From concept to deployment — I build digital products that perform,
            scale, and convert.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '48px',
        }}>
          {services.map((service) => (
            <Link key={service.href} href={service.href} style={{ textDecoration: 'none' }}>
              <div style={{
                padding: '32px',
                background: service.featured ? 'var(--bg-elevated)' : 'var(--bg-card)',
                borderRadius: '12px',
                border: service.featured
                  ? '1px solid var(--border-accent)'
                  : '1px solid var(--border)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = 'var(--shadow-glow)'
                e.currentTarget.style.borderColor = 'var(--border-accent)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.borderColor = service.featured ? 'var(--border-accent)' : 'var(--border)'
              }}>
                {service.featured && (
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    padding: '4px 10px',
                    background: 'var(--gradient-accent)',
                    borderRadius: '20px',
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '10px',
                    fontWeight: 600,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    color: 'white',
                  }}>
                    Popular
                  </div>
                )}

                <div style={{ fontSize: '32px', marginBottom: '16px' }}>
                  {service.icon}
                </div>

                <h3 style={{
                  fontFamily: 'Oswald, sans-serif',
                  fontSize: '20px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  color: 'var(--text-primary)',
                  marginBottom: '12px',
                }}>
                  {service.title}
                </h3>

                <p style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '14px',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  marginBottom: '20px',
                }}>
                  {service.description}
                </p>

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {service.tags.map((tag) => (
                    <span key={tag} style={{
                      padding: '4px 10px',
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--border)',
                      borderRadius: '4px',
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '11px',
                      fontWeight: 500,
                      letterSpacing: '0.5px',
                      color: 'var(--text-muted)',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div style={{
                  marginTop: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--accent)',
                  fontFamily: 'Oswald, sans-serif',
                  fontSize: '13px',
                  fontWeight: 600,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                }}>
                  Learn More <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <Link href="/services" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '14px 32px',
            border: '1px solid var(--border-accent)',
            borderRadius: '6px',
            color: 'var(--text-primary)',
            fontFamily: 'Oswald, sans-serif',
            fontSize: '14px',
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            textDecoration: 'none',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--gradient-accent)'
            e.currentTarget.style.borderColor = 'transparent'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.borderColor = 'var(--border-accent)'
          }}>
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  )
}
