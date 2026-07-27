'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie_consent', 'accepted')
    setVisible(false)
    // Activa GA4
    window.gtag?.('consent', 'update', {
      analytics_storage: 'granted',
    })
  }

  const decline = () => {
    localStorage.setItem('cookie_consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      left: '24px',
      right: '24px',
      zIndex: 9999,
      maxWidth: '480px',
      borderRadius: '12px',
      background: 'var(--bg-elevated)',
      border: '1px solid var(--border-accent)',
      padding: '24px',
      boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
    }}>
      {/* Accent line top */}
      <div style={{
        position: 'absolute', top: 0, left: '24px', right: '24px',
        height: '2px',
        background: 'var(--gradient-accent)',
        borderRadius: '2px',
      }} />

      <p style={{
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '13px',
        lineHeight: 1.7,
        color: 'var(--text-secondary)',
        marginBottom: '20px',
      }}>
        We use cookies to understand how visitors use our site. No advertising or tracking —
        analytics only.{' '}
        <Link href="/legal/cookies" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>
          Cookie Policy
        </Link>
      </p>

      <div style={{ display: 'flex', gap: '12px' }}>
        <button
          onClick={accept}
          style={{
            flex: 1,
            padding: '10px 16px',
            background: 'var(--gradient-accent)',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontFamily: 'Oswald, sans-serif',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            cursor: 'pointer',
          }}
        >
          Accept
        </button>
        <button
          onClick={decline}
          style={{
            flex: 1,
            padding: '10px 16px',
            background: 'transparent',
            color: 'var(--text-muted)',
            border: '1px solid var(--border)',
            borderRadius: '6px',
            fontFamily: 'Oswald, sans-serif',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            cursor: 'pointer',
          }}
        >
          Decline
        </button>
      </div>
    </div>
  )
}