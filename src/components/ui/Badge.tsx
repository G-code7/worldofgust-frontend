/**
 * Badge — Primitive compartido
 *
 * Pill/tag reutilizable para categorías, tecnologías, estados.
 *
 * Variantes:
 *   "tech"     — tech tag (bg-elevated, border, accent text) — default
 *   "category" — eyebrow badge oscuro con glassmorphism (para sobre imágenes)
 *   "status"   — success/warning/info con color semántico
 *   "outline"  — solo borde, sin fondo
 *
 * Uso:
 *   <Badge label="React" />
 *   <Badge label="E-commerce" variant="category" />
 *   <Badge label="Available" variant="status" color="success" />
 *   <Badge label="WordPress" variant="outline" />
 *
 * Tamaños: "sm" | "md" (default)
 */

'use client'

import React from 'react'

type BadgeVariant = 'tech' | 'category' | 'status' | 'outline'
type BadgeSize = 'sm' | 'md'
type StatusColor = 'success' | 'warning' | 'info' | 'accent'

interface BadgeProps {
  label: string
  variant?: BadgeVariant
  size?: BadgeSize
  color?: StatusColor
  style?: React.CSSProperties
}

const statusColors: Record<StatusColor, { bg: string; border: string; text: string }> = {
  success: {
    bg: 'rgba(16, 185, 129, 0.1)',
    border: 'rgba(16, 185, 129, 0.3)',
    text: 'var(--success)',
  },
  warning: {
    bg: 'rgba(245, 158, 11, 0.1)',
    border: 'rgba(245, 158, 11, 0.3)',
    text: 'var(--accent-orange)',
  },
  info: {
    bg: 'rgba(59, 130, 246, 0.1)',
    border: 'rgba(59, 130, 246, 0.3)',
    text: 'var(--accent)',
  },
  accent: {
    bg: 'rgba(139, 92, 246, 0.1)',
    border: 'rgba(139, 92, 246, 0.3)',
    text: 'var(--accent-secondary)',
  },
}

export default function Badge({
  label,
  variant = 'tech',
  size = 'md',
  color = 'info',
  style: extraStyle,
}: BadgeProps) {
  const isSm = size === 'sm'

  const base: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 500,
    letterSpacing: '0.5px',
    borderRadius: '3px',
    whiteSpace: 'nowrap',
    fontSize: isSm ? '10px' : '11px',
    padding: isSm ? '2px 8px' : '4px 12px',
    lineHeight: 1.4,
  }

  const variantStyles: Record<BadgeVariant, React.CSSProperties> = {
    tech: {
      background: 'var(--bg-elevated)',
      border: '1px solid var(--border)',
      color: 'var(--accent)',
    },
    category: {
      background: 'rgba(10, 14, 39, 0.75)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      border: '1px solid var(--border)',
      borderRadius: '4px',
      color: 'var(--accent)',
      padding: isSm ? '3px 8px' : '4px 10px',
    },
    status: {
      background: statusColors[color].bg,
      border: `1px solid ${statusColors[color].border}`,
      borderRadius: '20px',
      color: statusColors[color].text,
      fontWeight: 600,
      letterSpacing: '1px',
    },
    outline: {
      background: 'transparent',
      border: '1px solid var(--border-accent)',
      color: 'var(--accent)',
    },
  }

  return (
    <span style={{ ...base, ...variantStyles[variant], ...extraStyle }}>
      {label}
    </span>
  )
}
