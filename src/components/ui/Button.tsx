/**
 * Button — Primitive compartido
 *
 * Botón reutilizable con soporte para Link (Next.js) o button HTML.
 * Si se pasa `href`, renderiza como <Link>. Si no, como <button>.
 *
 * Variantes:
 *   "primary"   — gradiente accent, sombra glow — default
 *   "secondary" — borde border-accent, fondo transparente
 *   "ghost"     — solo texto con flecha, sin fondo ni borde
 *   "outline"   — borde sólido accent
 *
 * Tamaños: "sm" | "md" (default) | "lg"
 *
 * Uso:
 *   <Button href="/contact">Start Your Project</Button>
 *   <Button variant="secondary" href="/work">View Our Work</Button>
 *   <Button variant="ghost" href="/services">Explore Services</Button>
 *   <Button variant="primary" size="sm" onClick={handleClick}>Send</Button>
 *   <Button variant="primary" loading>Sending...</Button>
 *   <Button variant="primary" disabled>Unavailable</Button>
 *
 * La flecha (→) se agrega automáticamente en variante ghost.
 * En primary/secondary/outline es opt-in con prop `arrow`.
 */

'use client'

import React, { useState } from 'react'
import Link from 'next/link'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: ButtonVariant
  size?: ButtonSize
  arrow?: boolean
  loading?: boolean
  disabled?: boolean
  fullWidth?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  style?: React.CSSProperties
  external?: boolean
}

const sizeMap = {
  sm: { padding: '9px 20px', fontSize: '11px', letterSpacing: '1.5px' },
  md: { padding: '14px 28px', fontSize: '13px', letterSpacing: '2px' },
  lg: { padding: '18px 36px', fontSize: '14px', letterSpacing: '2.5px' },
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  arrow,
  loading = false,
  disabled = false,
  fullWidth = false,
  onClick,
  type = 'button',
  style: extraStyle,
  external = false,
}: ButtonProps) {
  const [hovered, setHovered] = useState(false)

  const s = sizeMap[size]
  const isDisabled = disabled || loading

  const base: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: s.padding,
    fontFamily: 'Oswald, sans-serif',
    fontSize: s.fontSize,
    fontWeight: 600,
    letterSpacing: s.letterSpacing,
    textTransform: 'uppercase',
    textDecoration: 'none',
    borderRadius: '6px',
    border: 'none',
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    opacity: isDisabled ? 0.5 : 1,
    transition: 'transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, border-color 0.2s ease',
    whiteSpace: 'nowrap',
    width: fullWidth ? '100%' : undefined,
    pointerEvents: isDisabled ? 'none' : undefined,
  }

  const variantStyles: Record<ButtonVariant, { normal: React.CSSProperties; hover: React.CSSProperties }> = {
    primary: {
      normal: {
        background: 'var(--gradient-accent)',
        color: 'white',
        boxShadow: hovered ? '0 8px 30px rgba(59,130,246,0.4)' : 'var(--shadow-glow)',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
      },
      hover: {},
    },
    secondary: {
      normal: {
        background: hovered ? 'var(--bg-elevated)' : 'transparent',
        color: 'var(--text-primary)',
        border: '1px solid var(--border-accent)',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
      },
      hover: {},
    },
    ghost: {
      normal: {
        background: 'transparent',
        color: 'var(--accent)',
        border: 'none',
        padding: '0',
        borderRadius: '0',
        borderBottom: `1px solid ${hovered ? 'var(--accent)' : 'transparent'}`,
        letterSpacing: '2px',
      },
      hover: {},
    },
    outline: {
      normal: {
        background: hovered ? 'var(--accent)' : 'transparent',
        color: hovered ? 'white' : 'var(--accent)',
        border: '1px solid var(--border-accent)',
        transform: hovered ? 'translateY(-1px)' : 'translateY(0)',
      },
      hover: {},
    },
  }

  const finalStyle: React.CSSProperties = {
    ...base,
    ...variantStyles[variant].normal,
    ...extraStyle,
  }

  const content = (
    <>
      {loading ? <Spinner /> : null}
      {children}
      {(arrow || variant === 'ghost') && !loading && <span>→</span>}
    </>
  )

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={finalStyle}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {content}
        </a>
      )
    }
    return (
      <Link
        href={href}
        style={finalStyle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {content}
      </Link>
    )
  }

  return (
    <button
      type={type}
      style={finalStyle}
      onClick={onClick}
      disabled={isDisabled}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {content}
    </button>
  )
}

// ─── Spinner ──────────────────────────────────────────────────────────────────

function Spinner() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      style={{ animation: 'spin 0.8s linear infinite' }}
    >
      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
      <path d="M7 1.5A5.5 5.5 0 0 1 12.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </svg>
  )
}
