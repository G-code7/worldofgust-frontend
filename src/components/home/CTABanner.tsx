"use client"

import Link from 'next/link'

export default function CTABanner() {
  return (
    <section style={{
      padding: '96px 0',
      background: 'var(--bg-elevated)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background effects */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'var(--gradient-accent)',
        opacity: 0.04, pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', left: '-5%', top: '50%', transform: 'translateY(-50%)',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'var(--accent)', opacity: 0.04, filter: 'blur(100px)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', right: '-5%', top: '50%', transform: 'translateY(-50%)',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'var(--accent-secondary)', opacity: 0.03, filter: 'blur(100px)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', textAlign: 'center' }}>

        <span style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '11px', fontWeight: 600, letterSpacing: '4px', textTransform: 'uppercase',
          color: 'var(--accent)', display: 'block', marginBottom: '20px',
        }}>
          Let's Work Together
        </span>

        <h2 style={{
          fontFamily: 'Oswald, sans-serif',
          fontSize: 'clamp(36px, 6vw, 64px)',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '1px',
          color: 'var(--text-primary)',
          lineHeight: 1.0,
          marginBottom: '20px',
        }}>
          Your Next Project<br />
          <span style={{
            background: 'var(--gradient-accent)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Lives Here
          </span>
        </h2>

        <p style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '16px',
          color: 'var(--text-secondary)',
          lineHeight: 1.8,
          maxWidth: '520px',
          margin: '0 auto 40px',
        }}>
          Whether it's a landing page, a full e-commerce platform, or a custom web application —
          this is where we build it together. Let's talk about your vision.
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '16px 36px',
            background: 'var(--gradient-accent)',
            color: 'white',
            fontFamily: 'Oswald, sans-serif',
            fontSize: '14px', fontWeight: 600, letterSpacing: '2.5px', textTransform: 'uppercase',
            textDecoration: 'none',
            borderRadius: '6px',
            boxShadow: 'var(--shadow-glow)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)'
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(59,130,246,0.4)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'var(--shadow-glow)'
          }}>
            Start Your Project →
          </Link>
          <Link href="/services" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '16px 36px',
            background: 'transparent',
            color: 'var(--text-primary)',
            fontFamily: 'Oswald, sans-serif',
            fontSize: '14px', fontWeight: 600, letterSpacing: '2.5px', textTransform: 'uppercase',
            textDecoration: 'none',
            borderRadius: '6px',
            border: '1px solid var(--border)',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--border-accent)'
            e.currentTarget.style.background = 'var(--bg-surface)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--border)'
            e.currentTarget.style.background = 'transparent'
          }}>
            Explore Services
          </Link>
        </div>

        {/* Trust signals */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '32px',
          marginTop: '48px',
          flexWrap: 'wrap',
        }}>
          {[
            '✓ Transparent pricing',
            '✓ Clear communication',
            '✓ Delivered on time',
          ].map((signal) => (
            <span key={signal} style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '13px',
              fontWeight: 500,
              color: 'var(--text-muted)',
              letterSpacing: '0.5px',
            }}>
              {signal}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
