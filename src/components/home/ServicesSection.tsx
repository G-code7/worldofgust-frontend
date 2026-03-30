'use client'

import Link from 'next/link'

const services = [
  {
    icon: '◎',
    title: 'Landing Page',
    tagline: 'Your first impression, perfected.',
    description:
      'A clean, fast, conversion-focused page to showcase your product, service, or campaign. Everything a potential client needs — nothing they don\'t.',
    features: ['Responsive design', 'Contact form', 'Basic SEO', 'SSL + Hosting + Domain'],
    price: 'From $350',
    href: '/services/landing-page',
    accentColor: 'var(--accent)',
  },
  {
    icon: '◈',
    title: 'Business Website',
    tagline: 'Your full digital presence.',
    description:
      'A multi-page WordPress site that represents your brand professionally and grows with your business. Easy to manage, built to last.',
    features: ['Up to 5 pages', 'WordPress CMS', 'Blog setup', 'SEO + Domain + Hosting'],
    price: 'From $850',
    href: '/services/business-website',
    featured: true,
    accentColor: 'var(--accent-secondary)',
  },
  {
    icon: '⬡',
    title: 'E-commerce',
    tagline: 'Sell more. Stress less.',
    description:
      'Full online store setup with product catalog, secure checkout, and payment gateway. Built for growth from day one.',
    features: ['WooCommerce or custom', 'Payment gateway', 'Order management', 'SSL + Hosting + Domain'],
    price: 'Custom Quote',
    href: '/services/ecommerce',
    accentColor: 'var(--accent)',
  },
  {
    icon: '◉',
    title: 'WordPress Headless',
    tagline: 'The future of managed content.',
    description:
      'WordPress as your CMS, Next.js as your frontend. Your team manages content effortlessly. Your users get blazing-fast performance.',
    features: ['WPGraphQL + ACF', 'Next.js frontend', '98+ Lighthouse score', 'Scalable architecture'],
    price: 'Custom Quote',
    href: '/services/headless-wordpress',
    accentColor: 'var(--accent-secondary)',
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
      {/* Bg blob */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '700px', height: '700px',
        borderRadius: '50%',
        background: 'var(--gradient-accent)',
        opacity: 0.025,
        filter: 'blur(120px)',
        pointerEvents: 'none',
      }} />

      <div className="container">

        {/* Section header */}
        <div style={{ maxWidth: '600px', marginBottom: '72px' }}>
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
            What We Build
          </span>
          <h2 style={{
            fontFamily: 'Oswald, sans-serif',
            fontSize: 'clamp(36px, 5vw, 52px)',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            color: 'var(--text-primary)',
            lineHeight: 1.05,
            marginBottom: '20px',
          }}>
            Solutions Tailored<br />
            <span style={{
              background: 'var(--gradient-accent)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              to Your Needs
            </span>
          </h2>
          <p style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '15px',
            color: 'var(--text-secondary)',
            lineHeight: 1.8,
          }}>
            Every project starts with a conversation. We build digital products that
            perform, convert, and represent your brand the way it deserves.
          </p>
        </div>

        {/* Services grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          marginBottom: '56px',
        }}>
          {services.map((service) => (
            <ServiceCard key={service.href} service={service} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
          padding: '32px',
          background: 'var(--bg-elevated)',
          borderRadius: '12px',
          border: '1px solid var(--border)',
          flexWrap: 'wrap',
        }}>
          <div style={{ flex: 1, minWidth: '240px' }}>
            <p style={{
              fontFamily: 'Oswald, sans-serif',
              fontSize: '18px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: 'var(--text-primary)',
              marginBottom: '6px',
            }}>
              Not sure which fits your project?
            </p>
            <p style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '14px',
              color: 'var(--text-muted)',
            }}>
              Let's talk. A 30-minute call is all it takes to find the right path.
            </p>
          </div>
          <Link href="/contact" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '14px 28px',
            background: 'var(--gradient-accent)',
            color: 'white',
            fontFamily: 'Oswald, sans-serif',
            fontSize: '13px',
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            textDecoration: 'none',
            borderRadius: '6px',
            boxShadow: 'var(--shadow-glow)',
            whiteSpace: 'nowrap',
            transition: 'transform 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}>
            Get a Free Consultation →
          </Link>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: typeof services[0] }) {
  return (
    <Link href={service.href} style={{ textDecoration: 'none', display: 'flex' }}>
      <div style={{
        padding: '32px',
        background: service.featured ? 'var(--bg-elevated)' : 'var(--bg-card)',
        borderRadius: '12px',
        border: service.featured ? '1px solid var(--border-accent)' : '1px solid var(--border)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
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
            top: '16px', right: '16px',
            padding: '3px 10px',
            background: 'var(--gradient-accent)',
            borderRadius: '20px',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '10px',
            fontWeight: 700,
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            color: 'white',
          }}>
            Most Popular
          </div>
        )}

        {/* Icon */}
        <div style={{
          width: '44px',
          height: '44px',
          borderRadius: '10px',
          background: 'var(--bg-elevated)',
          border: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px',
          fontSize: '20px',
          color: service.accentColor,
          fontFamily: 'monospace',
        }}>
          {service.icon}
        </div>

        <h3 style={{
          fontFamily: 'Oswald, sans-serif',
          fontSize: '22px',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '1px',
          color: 'var(--text-primary)',
          marginBottom: '6px',
        }}>
          {service.title}
        </h3>

        <p style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '12px',
          fontWeight: 600,
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          color: service.accentColor,
          marginBottom: '14px',
        }}>
          {service.tagline}
        </p>

        <p style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '14px',
          lineHeight: 1.7,
          color: 'var(--text-secondary)',
          marginBottom: '20px',
          flex: 1,
        }}>
          {service.description}
        </p>

        {/* Features */}
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {service.features.map((f) => (
            <li key={f} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '13px',
              color: 'var(--text-secondary)',
            }}>
              <span style={{ color: 'var(--success)', fontSize: '10px' }}>✓</span>
              {f}
            </li>
          ))}
        </ul>

        {/* Price + CTA row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '20px',
          borderTop: '1px solid var(--border)',
        }}>
          <span style={{
            fontFamily: 'Oswald, sans-serif',
            fontSize: '20px',
            fontWeight: 700,
            color: 'var(--text-primary)',
            letterSpacing: '0.5px',
          }}>
            {service.price}
          </span>
          <span style={{
            fontFamily: 'Oswald, sans-serif',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: service.accentColor,
          }}>
            Learn More →
          </span>
        </div>
      </div>
    </Link>
  )
}
