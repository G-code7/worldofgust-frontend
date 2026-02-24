'use client' // <--- ESTA LÍNEA SOLUCIONA EL ERROR

import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

const services = [
  { href: '/services/full-stack', label: 'Full Stack Dev' },
  { href: '/services/ecommerce', label: 'E-commerce' },
  { href: '/services/headless-wordpress', label: 'WP Headless' },
  { href: '/services/frontend', label: 'Frontend Dev' },
  { href: '/services/backend', label: 'Backend & APIs' },
]

const socials = [
  { href: 'https://github.com/G-code7', label: 'GitHub', icon: 'GH' },
  { href: 'https://www.linkedin.com/in/gustavo-liendo-b5b668111/', label: 'LinkedIn', icon: 'IN' },
  { href: 'https://www.instagram.com/g_code20/', label: 'Instagram', icon: 'IG' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      background: 'var(--color-secondary-bg)',
      borderTop: '1px solid rgba(255,255,255,0.05)',
    }}>
      <div className="container mx-auto" style={{ padding: '64px 24px 32px' }}>
        {/* Top */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr',
          gap: '48px',
          marginBottom: '48px',
        }} className="footer-grid">
          
          {/* Brand */}
          <div>
            <Link href="/" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '16px' }}>
              <span style={{
                fontFamily: 'Oswald, sans-serif',
                fontSize: '24px',
                fontWeight: 700,
                letterSpacing: '2px',
              }}>
                <span style={{ color: 'var(--color-accent-blue)' }}>&lt;</span>
                <span style={{ color: 'white' }}>G-CODE</span>
                <span style={{ color: 'var(--color-accent-blue)' }}>/&gt;</span>
              </span>
            </Link>
            <p style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '14px',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.7,
              maxWidth: '300px',
              marginBottom: '24px',
            }}>
              Crafting exceptional digital experiences with passion and precision.
              Full Stack Developer based in Latin America, available worldwide.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {socials.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '6px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(255,255,255,0.05)',
                    color: 'rgba(255,255,255,0.5)',
                    fontFamily: 'monospace',
                    fontSize: '11px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-accent-blue)'
                    e.currentTarget.style.color = 'var(--color-accent-blue)'
                    e.currentTarget.style.transform = 'translateY(-3px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                    e.currentTarget.style.color = 'rgba(255,255,255,0.5)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{
              fontFamily: 'Oswald, sans-serif',
              fontSize: '14px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: 'white',
              marginBottom: '20px',
            }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: 0 }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.5)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent-blue)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{
              fontFamily: 'Oswald, sans-serif',
              fontSize: '14px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: 'white',
              marginBottom: '20px',
            }}>
              Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: 0 }}>
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.5)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent-blue)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '12px',
            color: 'rgba(255,255,255,0.3)',
          }}>
            © {year} G-CODE · Gustavo Liendo · All rights reserved
          </p>
          <p style={{
            fontFamily: 'monospace',
            fontSize: '12px',
            color: 'rgba(255,255,255,0.3)',
          }}>
            Built with Next.js + WordPress Headless
          </p>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}