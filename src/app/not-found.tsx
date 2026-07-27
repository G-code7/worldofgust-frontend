import Link from 'next/link'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg-base)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Blob bg */}
        <div style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px', height: '600px',
          borderRadius: '50%',
          background: 'var(--gradient-accent)',
          opacity: 0.03,
          filter: 'blur(120px)',
          pointerEvents: 'none',
        }} />

        <div style={{
          position: 'relative',
          textAlign: 'center',
          padding: '0 24px',
        }}>
          {/* 404 number */}
          <div style={{
            fontFamily: 'Oswald, sans-serif',
            fontSize: 'clamp(120px, 20vw, 220px)',
            fontWeight: 700,
            lineHeight: 1,
            background: 'var(--gradient-accent)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            opacity: 0.15,
            marginBottom: '-20px',
            userSelect: 'none',
          }}>
            404
          </div>

          <h1 style={{
            fontFamily: 'Oswald, sans-serif',
            fontSize: 'clamp(28px, 5vw, 48px)',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '2px',
            color: 'var(--text-primary)',
            marginBottom: '16px',
          }}>
            Page Not Found
          </h1>

          <p style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '15px',
            lineHeight: 1.8,
            color: 'var(--text-secondary)',
            maxWidth: '420px',
            margin: '0 auto 40px',
          }}>
            The page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>

          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            <Link href="/" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
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
            }}>
              ← Back to Home
            </Link>
            <Link href="/work" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 28px',
              background: 'transparent',
              color: 'var(--text-primary)',
              fontFamily: 'Oswald, sans-serif',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              textDecoration: 'none',
              borderRadius: '6px',
              border: '1px solid var(--border)',
            }}>
              View Our Work
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}