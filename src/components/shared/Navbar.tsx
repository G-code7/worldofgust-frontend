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
      {/* Scroll progress bar */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '3px',
        width: `${scrollProgress}%`,
        background: 'var(--gradient-accent)',
        zIndex: 9999,
        transition: 'width 0.1s linear',
        pointerEvents: 'none',
      }} />

      <nav style={{
        position: 'fixed',
        top: '3px', // debajo de la barra de progreso
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '12px 0' : '20px 0',
        background: scrolled ? 'var(--bg-surface)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        transition: 'all 0.3s ease',
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>

          {/* Logo — estilo <G-CODE/> */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <span style={{
              fontFamily: 'Oswald, sans-serif',
              fontSize: '22px',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              lineHeight: 1,
            }}>
              <span style={{ color: 'var(--accent)' }}>&lt;</span>
              <span style={{ color: 'var(--text-primary)' }}>G-CODE</span>
              <span style={{ color: 'var(--accent)' }}>/&gt;</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
          }} className="desktop-nav">
            <ul style={{
              display: 'flex',
              gap: '28px',
              listStyle: 'none',
              alignItems: 'center',
              margin: 0,
              padding: 0,
            }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
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
                display: 'block',
                width: '20px',
                height: '2px',
                background: 'var(--text-primary)',
                borderRadius: '1px',
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
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '20px' }}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    fontFamily: 'Oswald, sans-serif',
                    fontSize: '20px',
                    fontWeight: 600,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    display: 'block',
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeSwitcher />
        </div>
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </>
  )
}
