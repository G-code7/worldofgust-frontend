'use client'

import SectionLabel from '@/components/ui/SectionLabel'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'

interface Service {
  id: string
  eyebrow: string
  title: string
  tagline: string
  description: string
  includes: string[]
  idealFor: string[]
  price: string
  priceNote?: string
  href: string
  accentColor: string
  icon: string
  reverse?: boolean
}

const services: Service[] = [
  {
    id: 'landing-page',
    eyebrow: 'Service 01',
    title: 'Landing Page',
    tagline: 'Your first impression, perfected.',
    description:
      'A fast, conversion-focused page that communicates your value proposition clearly and turns visitors into leads or customers. Perfect for product launches, campaigns, or solo professionals.',
    includes: [
      'Responsive design (mobile-first)',
      'Contact or lead capture form',
      'Basic on-page SEO',
      'SSL certificate + hosting + domain setup',
      'Google Analytics integration',
      '1 round of revisions post-launch',
    ],
    idealFor: [
      'Product or service launches',
      'Freelancers and solo professionals',
      'Campaign-specific pages',
      'MVPs that need to move fast',
    ],
    price: 'From $350',
    href: '/contact?service=landing-page',
    accentColor: 'var(--accent)',
    icon: '◎',
  },
  {
    id: 'business-website',
    eyebrow: 'Service 02',
    title: 'Business Website',
    tagline: 'Your full digital presence.',
    description:
      'A multi-page WordPress site that represents your brand professionally and is easy for your team to manage. We configure everything — design, content structure, and SEO foundations — so you can focus on your business.',
    includes: [
      'Up to 5 fully designed pages',
      'WordPress CMS (edit without code)',
      'Blog setup with categories',
      'Contact form + Google Maps',
      'On-page SEO + sitemap',
      'SSL + hosting + domain + email setup',
    ],
    idealFor: [
      'Local businesses and SMEs',
      'Professional service providers',
      'Startups needing a credible web presence',
      'Businesses migrating from outdated sites',
    ],
    price: 'From $850',
    priceNote: 'Most popular',
    href: '/contact?service=business-website',
    accentColor: 'var(--accent-secondary)',
    icon: '◈',
    reverse: true,
  },
  {
    id: 'ecommerce',
    eyebrow: 'Service 03',
    title: 'E-commerce',
    tagline: 'Sell more. Stress less.',
    description:
      'Full online store setup built on WooCommerce or a custom solution. From product catalog to payment gateway and order management — we handle the technical complexity so you can focus on selling.',
    includes: [
      'Full product catalog setup',
      'WooCommerce or custom cart',
      'Payment gateway integration (Stripe, PayPal)',
      'Order management + inventory',
      'Email notifications (order, shipping, refund)',
      'SSL + hosting + domain',
    ],
    idealFor: [
      'Physical or digital product businesses',
      'Service providers selling packages online',
      'Businesses scaling from manual sales',
      'Existing stores needing a redesign',
    ],
    price: 'Custom quote',
    priceNote: 'Depends on catalog size',
    href: '/contact?service=ecommerce',
    accentColor: 'var(--accent)',
    icon: '⬡',
  },
  {
    id: 'headless-wordpress',
    eyebrow: 'Service 04',
    title: 'WordPress Headless',
    tagline: 'The future of managed content.',
    description:
      'WordPress handles your content. Next.js delivers a blazing-fast frontend. Your editorial team gets a familiar, powerful CMS. Your users get sub-second load times and a flawless experience across all devices.',
    includes: [
      'WordPress + WPGraphQL backend',
      'ACF (Advanced Custom Fields) setup',
      'Next.js App Router frontend',
      'Revalidation strategy (ISR / on-demand)',
      '98+ Lighthouse performance score target',
      'Deployment to Vercel or custom server',
    ],
    idealFor: [
      'Content-heavy businesses and publishers',
      'Teams with non-technical editors',
      'Businesses prioritizing SEO and Core Web Vitals',
      'Companies outgrowing traditional WordPress',
    ],
    price: 'Custom quote',
    priceNote: 'Scoped per project',
    href: '/contact?service=headless-wordpress',
    accentColor: 'var(--accent-secondary)',
    icon: '◉',
    reverse: true,
  },
]

export default function ServiceDetail() {
  return (
    <div>
      {services.map((service, index) => (
        <ServiceBlock key={service.id} service={service} index={index} />
      ))}
    </div>
  )
}

function ServiceBlock({ service, index }: { service: Service; index: number }) {
  const isEven = index % 2 === 0

  return (
    <section
      id={service.id}
      style={{
        padding: '96px 0',
        background: isEven ? 'var(--bg-base)' : 'var(--bg-surface)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle accent blob */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: service.reverse ? 'auto' : '-5%',
        right: service.reverse ? '-5%' : 'auto',
        width: '500px', height: '500px', borderRadius: '50%',
        background: service.accentColor, opacity: 0.03, filter: 'blur(120px)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '72px',
          alignItems: 'start',
          direction: service.reverse ? 'rtl' : 'ltr',
        }} className="service-detail-grid">

          {/* Visual / Icon side */}
          <div style={{ direction: 'ltr' }}>
            <div style={{
              borderRadius: '16px',
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border)',
              overflow: 'hidden',
              aspectRatio: '4/3',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}>
              {/* Gradient mesh bg */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'var(--gradient-mesh)', opacity: 0.5,
              }} />

              {/* Large icon */}
              <div style={{
                position: 'relative', zIndex: 1,
                textAlign: 'center',
              }}>
                <span style={{
                  fontFamily: 'monospace',
                  fontSize: '80px',
                  color: service.accentColor,
                  opacity: 0.3,
                  display: 'block',
                  marginBottom: '16px',
                }}>
                  {service.icon}
                </span>
                <span style={{
                  fontFamily: 'Oswald, sans-serif',
                  fontSize: '11px', fontWeight: 600, letterSpacing: '4px', textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                }}>
                  {service.eyebrow}
                </span>
              </div>

              {/* Gradient accent bar at bottom */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                height: '3px',
                background: 'var(--gradient-accent)',
              }} />
            </div>

            {/* Price box */}
            <div style={{
              marginTop: '20px',
              padding: '20px 24px',
              borderRadius: '12px',
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <div>
                <p style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '10px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase',
                  color: 'var(--text-muted)', marginBottom: '4px',
                }}>
                  Starting at
                </p>
                <p style={{
                  fontFamily: 'Oswald, sans-serif',
                  fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)',
                  letterSpacing: '0.5px',
                }}>
                  {service.price}
                </p>
                {service.priceNote && (
                  <p style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px',
                  }}>
                    {service.priceNote}
                  </p>
                )}
              </div>
              <Button href={service.href} variant="primary" size="sm">
                Get a quote
              </Button>
            </div>
          </div>

          {/* Content side */}
          <div style={{ direction: 'ltr' }}>
            <SectionLabel
              label={service.eyebrow}
              title={service.title}
              titleAccent={service.tagline}
              mb={24}
              titleSize="clamp(32px, 4vw, 44px)"
            />

            <p style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '15px', lineHeight: 1.8, color: 'var(--text-secondary)',
              marginBottom: '32px',
            }}>
              {service.description}
            </p>

            {/* What's included */}
            <div style={{ marginBottom: '28px' }}>
              <p style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '10px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase',
                color: 'var(--text-muted)', marginBottom: '14px',
              }}>
                What's included
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {service.includes.map((item) => (
                  <li key={item} style={{
                    display: 'flex', alignItems: 'flex-start', gap: '12px',
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '14px', lineHeight: 1.6, color: 'var(--text-secondary)',
                  }}>
                    <span style={{ color: 'var(--success)', flexShrink: 0, marginTop: '1px' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Ideal for */}
            <div>
              <p style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '10px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase',
                color: 'var(--text-muted)', marginBottom: '12px',
              }}>
                Ideal for
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {service.idealFor.map((item) => (
                  <Badge key={item} label={item} variant="outline" size="sm" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .service-detail-grid {
            grid-template-columns: 1fr !important;
            direction: ltr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  )
}
