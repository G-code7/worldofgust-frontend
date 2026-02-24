'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const stats = [
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 30, suffix: '+', label: 'Happy Clients' },
]

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

function StatItem({ value, suffix, label, animate }: { value: number; suffix: string; label: string; animate: boolean }) {
  const count = useCountUp(value, 1800, animate)
  return (
    <div style={{ textAlign: 'center', flex: 1 }}>
      <div style={{
        fontFamily: 'Oswald, sans-serif',
        fontSize: 'clamp(32px, 5vw, 48px)',
        fontWeight: 700,
        lineHeight: 1,
        background: 'var(--gradient-accent)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}>
        {count}{suffix}
      </div>
      <div style={{
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '11px',
        fontWeight: 500,
        letterSpacing: '1.5px',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        marginTop: '8px',
      }}>
        {label}
      </div>
    </div>
  )
}

const codeLines = [
  { tokens: [{ t: 'keyword', v: 'const ' }, { t: 'fn', v: 'Portfolio' }, { t: 'plain', v: ' = () => {' }] },
  { tokens: [{ t: 'plain', v: '  ' }, { t: 'keyword', v: 'return' }, { t: 'plain', v: ' (' }] },
  { tokens: [{ t: 'plain', v: '    ' }, { t: 'tag', v: '<div' }, { t: 'attr', v: ' className' }, { t: 'plain', v: '=' }, { t: 'string', v: '"excellence"' }, { t: 'tag', v: '>' }] },
  { tokens: [{ t: 'plain', v: '      ' }, { t: 'tag', v: '<Passion' }, { t: 'attr', v: ' level' }, { t: 'plain', v: '=' }, { t: 'string', v: '"infinite"' }, { t: 'tag', v: ' />' }] },
  { tokens: [{ t: 'plain', v: '      ' }, { t: 'tag', v: '<Innovation' }, { t: 'attr', v: ' driven' }, { t: 'plain', v: '=' }, { t: 'string', v: '"true"' }, { t: 'tag', v: ' />' }] },
  { tokens: [{ t: 'plain', v: '      ' }, { t: 'tag', v: '<Quality' }, { t: 'attr', v: ' focus' }, { t: 'plain', v: '=' }, { t: 'string', v: '"always"' }, { t: 'tag', v: ' />' }] },
  { tokens: [{ t: 'plain', v: '    ' }, { t: 'tag', v: '</div>' }] },
  { tokens: [{ t: 'plain', v: '  );' }] },
  { tokens: [{ t: 'plain', v: '};' }] },
]

const tokenColors: Record<string, string> = {
  keyword: '#c792ea',
  fn: '#82aaff',
  tag: '#f07178',
  attr: '#ffcb6b',
  string: '#c3e88d',
  plain: '#e0e0e0',
}

export default function HeroSection() {
  const [statsVisible, setStatsVisible] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)

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
      {/* Animated background mesh */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'var(--gradient-mesh)',
        pointerEvents: 'none',
      }} />

      {/* Floating shapes */}
      {[
        { size: 400, top: '-10%', left: '-5%', opacity: 0.06, delay: '0s' },
        { size: 300, top: '60%', right: '-8%', opacity: 0.05, delay: '2s' },
        { size: 200, top: '20%', left: '50%', opacity: 0.04, delay: '4s' },
      ].map((shape, i) => (
        <div key={i} style={{
          position: 'absolute',
          width: shape.size,
          height: shape.size,
          top: shape.top,
          left: 'left' in shape ? shape.left : undefined,
          right: 'right' in shape ? (shape as any).right : undefined,
          borderRadius: '50%',
          background: 'var(--gradient-accent)',
          opacity: shape.opacity,
          filter: 'blur(80px)',
          animation: `floatBlob 8s ease-in-out infinite`,
          animationDelay: shape.delay,
          pointerEvents: 'none',
        }} />
      ))}

      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        alignItems: 'center',
        paddingTop: '100px',
        paddingBottom: '80px',
      }} className="hero-grid container">

        {/* Left — Text */}
        <div>
          {/* Greeting */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '20px',
          }}>
            <span style={{
              display: 'block',
              width: '40px',
              height: '2px',
              background: 'var(--gradient-accent)',
            }} />
            <span style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: 'var(--accent)',
            }}>
              Hello, I'm
            </span>
          </div>

          {/* Name */}
          <h1 style={{
            fontFamily: 'Oswald, sans-serif',
            fontSize: 'clamp(52px, 8vw, 88px)',
            fontWeight: 700,
            lineHeight: 0.95,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '24px',
          }}>
            <span style={{ display: 'block', color: 'var(--text-primary)' }}>Gustavo</span>
            <span style={{
              display: 'block',
              background: 'var(--gradient-accent)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Liendo
            </span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '16px',
            lineHeight: 1.7,
            color: 'var(--text-secondary)',
            maxWidth: '460px',
            marginBottom: '40px',
          }}>
            <strong style={{ color: 'var(--text-primary)' }}>Full Stack Developer</strong> crafting
            exceptional digital experiences that inspire and transform.
            Specialized in React, Next.js & WordPress Headless.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '56px' }}>
            <Link href="/work" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 28px',
              background: 'var(--gradient-accent)',
              color: 'white',
              fontFamily: 'Oswald, sans-serif',
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              textDecoration: 'none',
              borderRadius: '6px',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              boxShadow: 'var(--shadow-glow)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}>
              View My Work
              <span style={{ fontSize: '16px' }}>→</span>
            </Link>
            <Link href="/contact" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 28px',
              background: 'transparent',
              color: 'var(--text-primary)',
              fontFamily: 'Oswald, sans-serif',
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '2px',
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
              Let's Talk
              <span>💬</span>
            </Link>
          </div>

          {/* Stats */}
          <div ref={statsRef} style={{
            display: 'flex',
            gap: '0',
            borderTop: '1px solid var(--border)',
            paddingTop: '32px',
          }}>
            {stats.map((stat, i) => (
              <div key={i} style={{ display: 'flex', flex: 1, alignItems: 'stretch' }}>
                <StatItem {...stat} animate={statsVisible} />
                {i < stats.length - 1 && (
                  <div style={{
                    width: '1px',
                    background: 'var(--border)',
                    margin: '0 20px',
                  }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right — Code Window */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <div style={{
            width: '100%',
            maxWidth: '480px',
            borderRadius: '12px',
            overflow: 'hidden',
            background: 'var(--code-bg)',
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow-card), var(--shadow-glow)',
            position: 'relative',
          }}>
            {/* Glow */}
            <div style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '12px',
              background: 'var(--gradient-accent)',
              opacity: 0.04,
              pointerEvents: 'none',
            }} />

            {/* Window header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 16px',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              background: 'rgba(255,255,255,0.03)',
            }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                {['#ff5f57', '#febc2e', '#28c840'].map((color, i) => (
                  <span key={i} style={{
                    width: '12px', height: '12px', borderRadius: '50%', background: color,
                  }} />
                ))}
              </div>
              <span style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '12px',
                color: 'var(--text-muted)',
                letterSpacing: '1px',
              }}>
                portfolio.jsx
              </span>
              <div style={{ width: '44px' }} />
            </div>

            {/* Code content */}
            <div style={{ padding: '24px 20px', overflowX: 'auto' }}>
              <pre style={{ margin: 0, lineHeight: 1.8 }}>
                {codeLines.map((line, lineIndex) => (
                  <div key={lineIndex} style={{ display: 'flex', gap: '0' }}>
                    <span style={{
                      fontFamily: 'Montserrat, monospace',
                      fontSize: '12px',
                      color: '#3d4d60',
                      userSelect: 'none',
                      minWidth: '32px',
                      textAlign: 'right',
                      paddingRight: '16px',
                    }}>
                      {lineIndex + 1}
                    </span>
                    <code style={{ fontFamily: "'Courier New', monospace", fontSize: '13px' }}>
                      {line.tokens.map((token, ti) => (
                        <span key={ti} style={{ color: tokenColors[token.t] }}>
                          {token.v}
                        </span>
                      ))}
                    </code>
                  </div>
                ))}
              </pre>
            </div>

            {/* Status bar */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '8px 16px',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              background: 'rgba(59, 130, 246, 0.1)',
            }}>
              <span style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '11px',
                color: 'var(--accent)',
                letterSpacing: '1px',
              }}>
                ● JSX
              </span>
              <span style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '11px',
                color: 'var(--text-muted)',
              }}>
                Ln 9, Col 2
              </span>
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
          fontSize: '10px',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
        }}>
          Scroll
        </span>
        <div style={{
          width: '1px',
          height: '40px',
          background: 'linear-gradient(to bottom, var(--accent), transparent)',
        }} />
      </div>

      <style>{`
        @keyframes floatBlob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20px, -20px) scale(1.05); }
          66% { transform: translate(-15px, 15px) scale(0.97); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
        }
      `}</style>
    </section>
  )
}
