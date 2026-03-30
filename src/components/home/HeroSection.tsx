'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const rotatingWords = ['Create', 'Design', 'Develop', 'Improve', 'Imagine']

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])
  return count
}

const stats = [
  { value: 5, suffix: '+', label: 'Years Building' },
  { value: 50, suffix: '+', label: 'Projects Shipped' },
  { value: 30, suffix: '+', label: 'Happy Clients' },
]

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0)
  const [statsVisible, setStatsVisible] = useState(false)
  const [visible, setVisible] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Entrada inicial
    const t = setTimeout(() => setVisible(true), 100)
    // Rotador de palabras
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % rotatingWords.length)
    }, 2000)
    return () => { clearTimeout(t); clearInterval(interval) }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true) },
      { threshold: 0.3 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      background: 'var(--bg-base)',
    }}>
      {/* Background mesh */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'var(--gradient-mesh)',
        pointerEvents: 'none',
      }} />

      {/* Floating blobs */}
      {[
        { size: 500, top: '-15%', left: '-10%', opacity: 0.05, delay: '0s' },
        { size: 350, top: '55%', right: '-5%', opacity: 0.04, delay: '3s' },
        { size: 250, top: '25%', left: '55%', opacity: 0.03, delay: '5s' },
      ].map((s, i) => (
        <div key={i} style={{
          position: 'absolute',
          width: s.size, height: s.size,
          top: s.top,
          left: 'left' in s ? s.left as string : undefined,
          right: 'right' in s ? (s as any).right : undefined,
          borderRadius: '50%',
          background: 'var(--gradient-accent)',
          opacity: s.opacity,
          filter: 'blur(100px)',
          animation: 'floatBlob 10s ease-in-out infinite',
          animationDelay: s.delay,
          pointerEvents: 'none',
        }} />
      ))}

      <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px', width: '100%' }}>

        {/* Rotating ticker — top label */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '40px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(16px)',
          transition: 'all 0.6s ease',
        }}>
          <span style={{
            display: 'block',
            width: '48px',
            height: '2px',
            background: 'var(--gradient-accent)',
          }} />
          <div style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '4px',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
          }}>
            Digital Studio · Web Design & Development
          </div>
        </div>

        {/* Hero layout: text + visual */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }} className="hero-grid">

          {/* LEFT — Copy */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 0.8s ease 0.1s',
          }}>

            {/* Rotating word */}
            <div style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}>
              <span style={{ color: 'var(--text-muted)' }}>We</span>
              <span style={{
                background: 'var(--gradient-accent)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block',
                minWidth: '100px',
                transition: 'opacity 0.3s ease',
              }}>
                {rotatingWords[wordIndex]}
              </span>
            </div>

            {/* Main headline */}
            <h1 style={{
              fontFamily: 'Oswald, sans-serif',
              fontSize: 'clamp(48px, 7vw, 80px)',
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}>
              <span style={{ color: 'var(--text-primary)', display: 'block' }}>Welcome</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.65em', fontWeight: 400, display: 'block', letterSpacing: '4px', marginBottom: '4px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif' }}>
                to
              </span>
              <span style={{
                display: 'block',
                background: 'var(--gradient-accent)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                World of Gust
              </span>
            </h1>

            {/* Sub narrative */}
            <p style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '16px',
              lineHeight: 1.8,
              color: 'var(--text-secondary)',
              maxWidth: '480px',
              marginBottom: '40px',
              marginTop: '24px',
            }}>
              A place where design meets code — and ideas become digital experiences
              that grow your business. From landing pages to full e-commerce platforms,
              we build what your brand needs to stand out.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '56px' }}>
              <Link href="/contact" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '15px 30px',
                background: 'var(--gradient-accent)',
                color: 'white',
                fontFamily: 'Oswald, sans-serif',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
                textDecoration: 'none',
                borderRadius: '6px',
                boxShadow: 'var(--shadow-glow)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(59,130,246,0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'var(--shadow-glow)'
              }}>
                Start Your Project
                <span>→</span>
              </Link>

              <Link href="/work" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '15px 30px',
                background: 'transparent',
                color: 'var(--text-primary)',
                fontFamily: 'Oswald, sans-serif',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
                textDecoration: 'none',
                borderRadius: '6px',
                border: '1px solid var(--border-accent)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--bg-elevated)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.transform = 'translateY(0)'
              }}>
                View Our Work
              </Link>
            </div>

            {/* Stats */}
            <div ref={statsRef} style={{
              display: 'flex',
              borderTop: '1px solid var(--border)',
              paddingTop: '32px',
              gap: '0',
            }}>
              {stats.map((stat, i) => {
                const count = useCountUpProxy(stat.value, statsVisible)
                return (
                  <div key={i} style={{ display: 'flex', flex: 1, alignItems: 'stretch' }}>
                    <div style={{ flex: 1, textAlign: 'center' }}>
                      <div style={{
                        fontFamily: 'Oswald, sans-serif',
                        fontSize: 'clamp(28px, 4vw, 42px)',
                        fontWeight: 700,
                        lineHeight: 1,
                        background: 'var(--gradient-accent)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}>
                        {count}{stat.suffix}
                      </div>
                      <div style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '10px',
                        fontWeight: 600,
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        color: 'var(--text-muted)',
                        marginTop: '8px',
                      }}>
                        {stat.label}
                      </div>
                    </div>
                    {i < stats.length - 1 && (
                      <div style={{ width: '1px', background: 'var(--border)', margin: '0 16px' }} />
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* RIGHT — Visual identity card */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 0.8s ease 0.3s',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }} className="hero-visual">

            {/* Main identity card */}
            <div style={{
              borderRadius: '16px',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-card)',
              position: 'relative',
            }}>
              {/* Gradient top bar */}
              <div style={{
                height: '4px',
                background: 'var(--gradient-accent)',
              }} />

              <div style={{ padding: '32px' }}>
                {/* Studio name */}
                <div style={{ marginBottom: '24px' }}>
                  <p style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '4px',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: '8px',
                  }}>
                    Digital Studio
                  </p>
                  <h2 style={{
                    fontFamily: 'Oswald, sans-serif',
                    fontSize: '32px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    color: 'var(--text-primary)',
                    lineHeight: 1,
                  }}>
                    World<br />
                    <span style={{
                      background: 'var(--gradient-accent)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}>of Gust</span>
                  </h2>
                </div>

                {/* Services list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                  {[
                    { label: 'E-commerce', status: 'active' },
                    { label: 'Business Websites', status: 'active' },
                    { label: 'WordPress Headless', status: 'active' },
                    { label: 'Landing Pages', status: 'active' },
                  ].map((item) => (
                    <div key={item.label} style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 14px',
                      background: 'var(--bg-elevated)',
                      borderRadius: '8px',
                      border: '1px solid var(--border)',
                    }}>
                      <span style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '13px',
                        fontWeight: 500,
                        color: 'var(--text-secondary)',
                      }}>
                        {item.label}
                      </span>
                      <span style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: 'var(--success)',
                        boxShadow: '0 0 6px var(--success)',
                        display: 'inline-block',
                      }} />
                    </div>
                  ))}
                </div>

                {/* Available badge */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 14px',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  borderRadius: '20px',
                }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: 'var(--success)',
                    animation: 'pulse 2s ease-in-out infinite',
                    display: 'inline-block',
                  }} />
                  <span style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'var(--success)',
                    letterSpacing: '1px',
                  }}>
                    Available for new projects
                  </span>
                </div>
              </div>
            </div>

            {/* Mini project preview cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {[
                { name: 'Anima Collectiv', type: 'E-commerce', color: 'var(--accent)' },
                { name: 'AvantiStore', type: 'Jewelry Store', color: 'var(--accent-secondary)' },
              ].map((p) => (
                <div key={p.name} style={{
                  padding: '16px',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '10px',
                  transition: 'border-color 0.2s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--border-accent)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}>
                  <div style={{
                    width: '28px',
                    height: '3px',
                    background: p.color,
                    borderRadius: '2px',
                    marginBottom: '10px',
                  }} />
                  <p style={{
                    fontFamily: 'Oswald, sans-serif',
                    fontSize: '13px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    color: 'var(--text-primary)',
                    marginBottom: '4px',
                  }}>
                    {p.name}
                  </p>
                  <p style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '11px',
                    color: 'var(--text-muted)',
                  }}>
                    {p.type}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '32px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        animation: 'bounce 2s ease-in-out infinite',
      }}>
        <span style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '9px',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
        }}>Scroll</span>
        <div style={{
          width: '1px',
          height: '40px',
          background: 'linear-gradient(to bottom, var(--accent), transparent)',
        }} />
      </div>

      <style>{`
        @keyframes floatBlob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20px, -25px) scale(1.04); }
          66% { transform: translate(-15px, 15px) scale(0.97); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.85); }
        }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-visual { display: none !important; }
        }
      `}</style>
    </section>
  )
}

// Helper para usar hook dentro de map (workaround sin violar reglas de hooks)
function useCountUpProxy(target: number, start: boolean) {
  return useCountUp(target, 1800, start)
}
