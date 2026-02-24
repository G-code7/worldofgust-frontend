'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
// Asegúrate de que este archivo exista en tu carpeta ui
import ThemeSwitcher from '@/components/ui/ThemeSwitcher'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '#work', label: 'Work' }, // Apuntando a anclas para el Home
  { href: '#expertise', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  // Evitamos errores de hidratación esperando al montaje
  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const total = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) return null // No renderiza nada en el servidor para evitar desajustes

  return (
    <>
      {/* Barra de progreso de lectura */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '3px',
        width: `${scrollProgress}%`,
        background: 'linear-gradient(90deg, var(--color-accent-blue), var(--color-accent-purple))',
        zIndex: 9999,
        transition: 'width 0.1s linear',
      }} />

      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '12px 0' : '24px 0',
        background: scrolled ? 'rgba(10, 14, 39, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
        <div className="container mx-auto px-6" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Logo Estilo G-CODE */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <span style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '24px',
              fontWeight: 900,
              letterSpacing: '-1px',
              color: 'white'
            }}>
              G<span style={{ color: 'var(--color-accent-blue)' }}>CODE</span>
              <span style={{ color: 'var(--color-accent-pink)' }}>.</span>
            </span>
          </Link>

          {/* Menú Desktop */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
          }} className="desktop-nav">
            <ul style={{
              display: 'flex',
              gap: '32px',
              listStyle: 'none',
              alignItems: 'center',
              margin: 0,
              padding: 0
            }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} style={{
                    fontFamily: 'monospace',
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.7)',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = 'var(--color-accent-blue)'
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.7)'
                  }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ThemeSwitcher />
          </div>

          {/* Botón Móvil */}
          <button
            className="mobile-only"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              width: '40px',
              height: '40px',
              display: 'none',
              flexDirection: 'column',
              gap: '5px',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <span style={{ width: '20px', height: '2px', background: 'white', transition: '0.3s', transform: mobileOpen ? 'rotate(45deg) translateY(5px)' : '' }} />
            <span style={{ width: '20px', height: '2px', background: 'white', transition: '0.3s', opacity: mobileOpen ? 0 : 1 }} />
            <span style={{ width: '20px', height: '2px', background: 'white', transition: '0.3s', transform: mobileOpen ? 'rotate(-45deg) translateY(-5px)' : '' }} />
          </button>
        </div>

        {/* Menú Móvil */}
        {mobileOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'var(--color-secondary-bg)',
            padding: '30px',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} style={{ color: 'white', textDecoration: 'none', fontWeight: 700, fontSize: '20px' }}>
                {link.label}
              </Link>
            ))}
            <ThemeSwitcher />
          </div>
        )}
      </nav>

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-only { display: flex !important; }
        }
      `}</style>
    </>
  )
}