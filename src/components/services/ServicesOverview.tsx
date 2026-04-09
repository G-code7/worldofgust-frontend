'use client'

import SectionLabel from '@/components/ui/SectionLabel'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'

const services = [
  {
    id: 'landing-page',
    icon: '◎',
    title: 'Landing Page',
    price: 'From $350',
    timeline: '1–2 weeks',
    tags: ['Fast', 'Lead gen', 'Campaigns'],
    features: ['1 page', 'Contact form', 'SEO basics', 'Hosting included'],
    accentColor: 'var(--accent)',
  },
  {
    id: 'business-website',
    icon: '◈',
    title: 'Business Website',
    price: 'From $850',
    timeline: '3–5 weeks',
    tags: ['Most popular', 'Full presence', 'WordPress CMS'],
    features: ['Up to 5 pages', 'Blog setup', 'Full SEO', 'Hosting + domain'],
    featured: true,
    accentColor: 'var(--accent-secondary)',
  },
  {
    id: 'ecommerce',
    icon: '⬡',
    title: 'E-commerce',
    price: 'Custom quote',
    timeline: '4–8 weeks',
    tags: ['WooCommerce', 'Payments', 'Inventory'],
    features: ['Full store', 'Payment gateway', 'Order management', 'Hosting included'],
    accentColor: 'var(--accent)',
  },
  {
    id: 'headless-wordpress',
    icon: '◉',
    title: 'WordPress Headless',
    price: 'Custom quote',
    timeline: '6–12 weeks',
    tags: ['Next.js', 'GraphQL', 'Top performance'],
    features: ['WP backend', 'Next.js frontend', '98+ Lighthouse', 'Custom setup'],
    accentColor: 'var(--accent-secondary)',
  },
]

export default function ServicesOverview() {
  return (
    <section style={{
      padding: '96px 0',
      background: 'var(--bg-surface)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px', height: '400px', borderRadius: '50%',
        background: 'var(--gradient-accent)', opacity: 0.025, filter: 'blur(140px)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        <SectionLabel
          label="Compare Services"
          title="Find the Right Fit"
          titleAccent="for Your Project"
          description="Not sure which service matches your needs? Here's a quick overview to help you decide — or just reach out and we'll figure it out together."
          align="center"
          mb={64}
        />

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '16px',
          marginBottom: '48px',
        }}>
          {services.map((s) => (
            <div
              key={s.id}
              style={{
                padding: '28px',
                borderRadius: '12px',
                background: s.featured ? 'var(--bg-elevated)' : 'var(--bg-card)',
                border: s.featured ? '1px solid var(--border-accent)' : '1px solid var(--border)',
                position: 'relative',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = 'var(--shadow-glow)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {s.featured && (
                <div style={{
                  position: 'absolute', top: '-1px', left: '50%', transform: 'translateX(-50%)',
                  height: '3px', width: '60%',
                  background: 'var(--gradient-accent)',
                  borderRadius: '0 0 3px 3px',
                }} />
              )}

              {/* Icon */}
              <div style={{
                width: '40px', height: '40px', borderRadius: '8px',
                background: 'var(--bg-elevated)', border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '16px', fontSize: '18px', color: s.accentColor, fontFamily: 'monospace',
              }}>
                {s.icon}
              </div>

              {/* Title + price */}
              <h3 style={{
                fontFamily: 'Oswald, sans-serif',
                fontSize: '18px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px',
                color: 'var(--text-primary)', marginBottom: '4px',
              }}>
                {s.title}
              </h3>
              <p style={{
                fontFamily: 'Oswald, sans-serif',
                fontSize: '20px', fontWeight: 700,
                color: s.accentColor,
                marginBottom: '4px',
              }}>
                {s.price}
              </p>
              <p style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '11px', color: 'var(--text-muted)', marginBottom: '16px',
              }}>
                Typical: {s.timeline}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                {s.tags.map((tag) => (
                  <Badge key={tag} label={tag} size="sm" />
                ))}
              </div>

              {/* Features */}
              <ul style={{
                listStyle: 'none', padding: 0, margin: '0 0 20px',
                display: 'flex', flexDirection: 'column', gap: '6px',
              }}>
                {s.features.map((f) => (
                  <li key={f} style={{
                    display: 'flex', gap: '8px', alignItems: 'center',
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '12px', color: 'var(--text-secondary)',
                  }}>
                    <span style={{ color: 'var(--success)', fontSize: '10px' }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA link */}
              <a
                href={`#${s.id}`}
                style={{
                  fontFamily: 'Oswald, sans-serif',
                  fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase',
                  color: s.accentColor, textDecoration: 'none',
                }}
              >
                See details ↓
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{
          textAlign: 'center',
          padding: '32px',
          borderRadius: '12px',
          border: '1px solid var(--border)',
          background: 'var(--bg-elevated)',
        }}>
          <p style={{
            fontFamily: 'Oswald, sans-serif',
            fontSize: '20px', fontWeight: 600, textTransform: 'uppercase',
            color: 'var(--text-primary)', marginBottom: '8px',
          }}>
            Still not sure?
          </p>
          <p style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '14px', color: 'var(--text-muted)', marginBottom: '24px',
          }}>
            A 30-minute call is all it takes to find the right path forward.
          </p>
          <Button href="/contact" variant="primary">
            Book a free discovery call
          </Button>
        </div>
      </div>
    </section>
  )
}
