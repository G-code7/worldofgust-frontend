import Link from 'next/link'

export default function CTABanner() {
  return (
    <section style={{
      padding: '80px 0',
      background: 'var(--bg-elevated)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background gradient */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'var(--gradient-accent)',
        opacity: 0.06,
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        left: '-10%',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'var(--accent)',
        opacity: 0.05,
        filter: 'blur(80px)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '40px',
        flexWrap: 'wrap',
        textAlign: 'left',
        position: 'relative',
      }}>
        <div style={{ flex: 1, minWidth: '280px' }}>
          <h2 style={{
            fontFamily: 'Oswald, sans-serif',
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '2px',
            color: 'var(--text-primary)',
            marginBottom: '12px',
          }}>
            Ready to Build{' '}
            <span style={{
              background: 'var(--gradient-accent)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Something Great?
            </span>
          </h2>
          <p style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '15px',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            maxWidth: '500px',
          }}>
            Whether you need an e-commerce store, a custom web app, or a blazing-fast
            WordPress headless site — let's talk about your project.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Link href="/contact" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '16px 32px',
            background: 'var(--gradient-accent)',
            color: 'white',
            fontFamily: 'Oswald, sans-serif',
            fontSize: '14px',
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            textDecoration: 'none',
            borderRadius: '6px',
            boxShadow: 'var(--shadow-glow)',
            whiteSpace: 'nowrap',
          }}>
            Start a Project →
          </Link>
          <Link href="/work" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '16px 32px',
            background: 'transparent',
            color: 'var(--text-primary)',
            fontFamily: 'Oswald, sans-serif',
            fontSize: '14px',
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            textDecoration: 'none',
            borderRadius: '6px',
            border: '1px solid var(--border)',
            whiteSpace: 'nowrap',
          }}>
            See My Work
          </Link>
        </div>
      </div>
    </section>
  )
}
