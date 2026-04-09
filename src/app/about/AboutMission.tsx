/**
 * AboutMission — Sección 1 de About
 *
 * Layout de dos columnas:
 * - Izquierda: narrative copy (quiénes somos, qué creemos)
 * - Derecha: stats + "Available" badge
 *
 * Usa primitivos: SectionLabel, Card (variant="stat")
 */

'use client'

import SectionLabel from '@/components/ui/SectionLabel'
import Card from '@/components/ui/Card'

const stats = [
  { stat: '5+', label: 'Years building' },
  { stat: '50+', label: 'Projects shipped' },
  { stat: '30+', label: 'Happy clients' },
  { stat: '3', label: 'Countries served' },
]

const highlights = [
  'We design for humans first — aesthetics second.',
  'Every project gets a dedicated point of contact.',
  'We don\'t disappear after launch. We grow with you.',
]

export default function AboutMission() {
  return (
    <section style={{
      padding: '96px 0',
      background: 'var(--bg-surface)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle blob */}
      <div style={{
        position: 'absolute', right: '-10%', top: '20%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'var(--gradient-accent)', opacity: 0.03, filter: 'blur(120px)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'start',
        }} className="about-mission-grid">

          {/* LEFT — copy */}
          <div>
            <SectionLabel
              label="Our Mission"
              title="We Build the Web"
              titleAccent="Your Business Deserves"
              mb={32}
            />

            <p style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '16px', lineHeight: 1.9,
              color: 'var(--text-secondary)',
              marginBottom: '24px',
            }}>
              World of Gust is a digital studio based in Venezuela with a global mindset.
              We partner with entrepreneurs, brands, and businesses to design and develop
              web experiences that are fast, beautiful, and built to convert.
            </p>

            <p style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '16px', lineHeight: 1.9,
              color: 'var(--text-secondary)',
              marginBottom: '40px',
            }}>
              From a landing page that captures leads to a full headless WordPress
              architecture that powers a growing e-commerce — we bring the same level
              of care and craft to every project, regardless of size.
            </p>

            {/* Highlights */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {highlights.map((h, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <span style={{
                    width: '24px', height: '24px', borderRadius: '50%',
                    background: 'var(--gradient-accent)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '11px', fontWeight: 700, color: 'white',
                    marginTop: '2px',
                  }}>
                    ✓
                  </span>
                  <p style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '14px', lineHeight: 1.7,
                    color: 'var(--text-secondary)',
                  }}>
                    {h}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — stats + available */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

            {/* Stats grid */}
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px',
              background: 'var(--border)',
              borderRadius: '12px', overflow: 'hidden',
              border: '1px solid var(--border)',
            }}>
              {stats.map((s) => (
                <div key={s.label} style={{
                  padding: '28px 20px',
                  background: 'var(--bg-elevated)',
                  textAlign: 'center',
                }}>
                  <Card variant="stat" stat={s.stat} label={s.label} />
                </div>
              ))}
            </div>

            {/* Available card */}
            <div style={{
              padding: '24px',
              borderRadius: '12px',
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <span style={{
                  width: '10px', height: '10px', borderRadius: '50%',
                  background: 'var(--success)',
                  boxShadow: '0 0 6px var(--success)',
                  animation: 'pulse 2s ease-in-out infinite',
                  display: 'inline-block', flexShrink: 0,
                }} />
                <span style={{
                  fontFamily: 'Oswald, sans-serif',
                  fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px',
                  color: 'var(--success)',
                }}>
                  Available for new projects
                </span>
              </div>
              <p style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '13px', lineHeight: 1.7, color: 'var(--text-muted)',
              }}>
                Currently accepting new clients for Q2 2025.
                Reach out and let's see if we're a good fit.
              </p>
            </div>

            {/* Tech stack pills */}
            <div style={{
              padding: '20px 24px',
              borderRadius: '12px',
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border)',
            }}>
              <p style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '10px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase',
                color: 'var(--text-muted)', marginBottom: '14px',
              }}>
                Our stack
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {['Next.js', 'React', 'TypeScript', 'WordPress', 'GraphQL', 'WooCommerce', 'Tailwind', 'Python'].map((tech) => (
                  <span key={tech} style={{
                    padding: '4px 10px',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border)',
                    borderRadius: '3px',
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '11px', fontWeight: 500, color: 'var(--text-secondary)',
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-mission-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.85); }
        }
      `}</style>
    </section>
  )
}
