'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import ThemeSwitcher from '@/components/ui/ThemeSwitcher'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const total = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Scroll progress */}
      <div style={{
        position: 'fixed', top: 0, left: 0,
        height: '3px', width: `${scrollProgress}%`,
        background: 'var(--gradient-accent)',
        zIndex: 9999, transition: 'width 0.1s linear',
        pointerEvents: 'none',
      }} />

      <nav style={{
        position: 'fixed', top: '3px', left: 0, right: 0,
        zIndex: 1000,
        padding: scrolled ? '12px 0' : '20px 0',
        background: scrolled ? 'var(--bg-surface)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        transition: 'all 0.3s ease',
      }}>
        <div className="container" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>

          {/* Logo — World of Gust */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{
              fontFamily: 'Oswald, sans-serif',
              fontSize: '18px',
              fontWeight: 700,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: 'var(--text-primary)',
              lineHeight: 1,
            }}>
              World{' '}
              <span style={{
                background: 'var(--gradient-accent)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                of Gust
              </span>
            </span>
            <span style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '9px',
              fontWeight: 600,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginTop: '3px',
            }}>
              Digital Studio
            </span>
          </Link>

          {/* Desktop nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
            <ul style={{
              display: 'flex', gap: '28px', listStyle: 'none', margin: 0, padding: 0, alignItems: 'center',
            }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '12px', fontWeight: 600,
                    letterSpacing: '1.5px', textTransform: 'uppercase',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    padding: '4px 0',
                    borderBottom: '1px solid transparent',
                    display: 'inline-block',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--accent)'
                    e.currentTarget.style.borderBottomColor = 'var(--accent)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)'
                    e.currentTarget.style.borderBottomColor = 'transparent'
                  }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ThemeSwitcher />
            <Link href="/contact" style={{
              padding: '10px 20px',
              background: 'var(--gradient-accent)',
              color: 'white',
              fontFamily: 'Oswald, sans-serif',
              fontSize: '12px', fontWeight: 600,
              letterSpacing: '2px', textTransform: 'uppercase',
              textDecoration: 'none',
              borderRadius: '6px',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-1px)'
              e.currentTarget.style.boxShadow = 'var(--shadow-glow)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}>
              Get in Touch
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{
              background: 'transparent',
              border: '1px solid var(--border)',
              borderRadius: '6px',
              padding: '8px 10px',
              cursor: 'pointer',
              display: 'none',
              flexDirection: 'column',
              gap: '5px',
              alignItems: 'center',
            }}
          >
            {[0, 1, 2].map((i) => (
              <span key={i} style={{
                display: 'block', width: '20px', height: '2px',
                background: 'var(--text-primary)', borderRadius: '1px',
                transition: 'all 0.3s ease',
                transform: mobileOpen
                  ? i === 0 ? 'rotate(45deg) translateY(7px)'
                  : i === 2 ? 'rotate(-45deg) translateY(-7px)'
                  : 'scaleX(0)'
                  : 'none',
              }} />
            ))}
          </button>
        </div>

        {/* Mobile menu */}
        <div style={{
          display: mobileOpen ? 'block' : 'none',
          background: 'var(--bg-surface)',
          borderTop: '1px solid var(--border)',
          padding: '24px',
        }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setMobileOpen(false)} style={{
                  fontFamily: 'Oswald, sans-serif',
                  fontSize: '22px', fontWeight: 600,
                  letterSpacing: '2px', textTransform: 'uppercase',
                  color: 'var(--text-primary)', textDecoration: 'none', display: 'block',
                }}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <ThemeSwitcher />
            <Link href="/contact" onClick={() => setMobileOpen(false)} style={{
              padding: '12px 20px',
              background: 'var(--gradient-accent)',
              color: 'white',
              fontFamily: 'Oswald, sans-serif',
              fontSize: '13px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase',
              textDecoration: 'none', borderRadius: '6px',
            }}>
              Get in Touch
            </Link>
          </div>
        </div>
      </nav>

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
        @media (min-width: 1025px) {
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </>
  )
}
