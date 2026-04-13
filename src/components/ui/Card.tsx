/**
 * Card — Primitive compartido
 *
 * Carta reutilizable con múltiples variantes.
 * Se usa en Work, Blog, Services, About (team), etc.
 *
 * Variantes:
 *   "default"   — contenido con imagen opcional, título, descripción, tags, link
 *   "featured"  — card grande horizontal (imagen izquierda, contenido derecha)
 *   "minimal"   — sin imagen, solo texto + link
 *   "stat"      — número grande + label (para About, Hero stats)
 *   "value"     — icono + título + descripción (para About values, Services)
 *
 * Uso:
 *   <Card
 *     variant="default"
 *     image="/path/to/img.jpg"
 *     imageAlt="Descripción"
 *     eyebrow="E-commerce"
 *     title="Anima Collectiv"
 *     description="Scalable platform for event ticketing."
 *     tags={['React', 'WooCommerce']}
 *     href="/work/anima-collectiv"
 *     cta="View Project"
 *   />
 *
 *   <Card variant="stat" stat="50+" label="Projects Shipped" />
 *
 *   <Card
 *     variant="value"
 *     icon="◈"
 *     title="Transparent"
 *     description="Clear communication and pricing from day one."
 *   />
 */

import Image from 'next/image'
import Link from 'next/link'

// ─── Types ───────────────────────────────────────────────────────────────────

type CardVariant = 'default' | 'featured' | 'minimal' | 'stat' | 'value'

interface CardBaseProps {
  variant?: CardVariant
  className?: string
}

interface CardContentProps {
  eyebrow?: string
  title?: string
  description?: string
  tags?: string[]
  href?: string
  cta?: string
  image?: string
  imageAlt?: string
  // stat variant
  stat?: string
  label?: string
  // value variant
  icon?: string
  accentColor?: string
}

type CardProps = CardBaseProps & CardContentProps

// ─── Component ───────────────────────────────────────────────────────────────

export default function Card({
  variant = 'default',
  eyebrow,
  title,
  description,
  tags = [],
  href,
  cta,
  image,
  imageAlt = '',
  stat,
  label,
  icon,
  accentColor = 'var(--accent)',
}: CardProps) {
  if (variant === 'stat') return <StatCard stat={stat!} label={label!} />
  if (variant === 'value') return <ValueCard icon={icon!} title={title!} description={description!} accentColor={accentColor} />
  if (variant === 'featured') return (
    <FeaturedCard
      eyebrow={eyebrow}
      title={title!}
      description={description}
      tags={tags}
      href={href}
      cta={cta}
      image={image}
      imageAlt={imageAlt}
      accentColor={accentColor}
    />
  )
  if (variant === 'minimal') return (
    <MinimalCard
      eyebrow={eyebrow}
      title={title!}
      description={description}
      href={href}
      cta={cta}
      accentColor={accentColor}
    />
  )

  // default
  return (
    <DefaultCard
      eyebrow={eyebrow}
      title={title!}
      description={description}
      tags={tags}
      href={href}
      cta={cta}
      image={image}
      imageAlt={imageAlt}
      accentColor={accentColor}
    />
  )
}

// ─── DefaultCard ─────────────────────────────────────────────────────────────

function DefaultCard({ eyebrow, title, description, tags, href, cta, image, imageAlt, accentColor }: CardContentProps) {
  const Wrapper = href ? Link : 'div'
  const wrapperProps = href ? { href, style: { textDecoration: 'none', display: 'block' } } : {}

  return (
    // @ts-expect-error dynamic tag
    <Wrapper {...wrapperProps}>
      <article
        style={{
          borderRadius: '12px',
          overflow: 'hidden',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border)',
          height: '100%',
          transition: 'all 0.3s ease',
          cursor: href ? 'pointer' : 'default',
        }}
        onMouseEnter={(e) => {
          if (!href) return
          e.currentTarget.style.transform = 'translateY(-5px)'
          e.currentTarget.style.borderColor = 'var(--border-accent)'
          e.currentTarget.style.boxShadow = 'var(--shadow-card)'
        }}
        onMouseLeave={(e) => {
          if (!href) return
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.borderColor = 'var(--border)'
          e.currentTarget.style.boxShadow = 'none'
        }}
      >
        {/* Image area */}
        <div
          style={{
            height: '200px',
            background: 'var(--bg-elevated)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {image ? (
            <Image src={image} alt={imageAlt ?? ''} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 400px" />
          ) : (
            <>
              <div style={{ position: 'absolute', inset: 0, background: 'var(--gradient-mesh)', opacity: 0.4 }} />
              <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{
                  fontFamily: 'Oswald, sans-serif', fontSize: '52px', fontWeight: 700,
                  background: 'var(--gradient-accent)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  opacity: 0.25, textTransform: 'uppercase',
                }}>
                  {title?.slice(0, 2)}
                </span>
              </div>
            </>
          )}
          {/* Eyebrow badge */}
          {eyebrow && (
            <Badge label={eyebrow} style={{ position: 'absolute', top: '12px', left: '12px' }} />
          )}
        </div>

        {/* Content */}
        <div style={{ padding: '20px' }}>
          <h3 style={{
            fontFamily: 'Oswald, sans-serif',
            fontSize: '20px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px',
            color: 'var(--text-primary)', marginBottom: '8px',
          }}>
            {title}
          </h3>

          {description && (
            <p style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '13px', lineHeight: 1.6, color: 'var(--text-secondary)',
              marginBottom: tags && tags.length > 0 ? '12px' : '16px',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}>
              {description}
            </p>
          )}

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
              {tags.map((tag) => (
                <Badge key={tag} label={tag} size="sm" />
              ))}
            </div>
          )}

          {/* CTA */}
          {cta && (
            <span style={{
              fontFamily: 'Oswald, sans-serif',
              fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase',
              color: accentColor,
            }}>
              {cta} →
            </span>
          )}
        </div>
      </article>
    </Wrapper>
  )
}

// ─── FeaturedCard ─────────────────────────────────────────────────────────────

function FeaturedCard({ eyebrow, title, description, tags, href, cta, image, imageAlt, accentColor }: CardContentProps) {
  const Wrapper = href ? Link : 'div'
  const wrapperProps = href ? { href, style: { textDecoration: 'none', display: 'block' } } : {}

  return (
    // @ts-expect-error dynamic tag
    <Wrapper {...wrapperProps}>
      <article
        style={{
          borderRadius: '16px',
          overflow: 'hidden',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border)',
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          minHeight: '320px',
          transition: 'all 0.3s ease',
          cursor: href ? 'pointer' : 'default',
        }}
        className="featured-card-grid"
        onMouseEnter={(e) => {
          if (!href) return
          e.currentTarget.style.borderColor = 'var(--border-accent)'
          e.currentTarget.style.boxShadow = 'var(--shadow-card)'
        }}
        onMouseLeave={(e) => {
          if (!href) return
          e.currentTarget.style.borderColor = 'var(--border)'
          e.currentTarget.style.boxShadow = 'none'
        }}
      >
        {/* Image */}
        <div style={{ background: 'var(--bg-elevated)', position: 'relative', overflow: 'hidden', minHeight: '280px' }}>
          {image ? (
            <Image src={image} alt={imageAlt ?? ''} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 600px" />
          ) : (
            <>
              <div style={{ position: 'absolute', inset: 0, background: 'var(--gradient-mesh)', opacity: 0.4 }} />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{
                  fontFamily: 'Oswald, sans-serif', fontSize: '80px', fontWeight: 700,
                  background: 'var(--gradient-accent)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  opacity: 0.2, textTransform: 'uppercase',
                }}>
                  {title?.slice(0, 2)}
                </span>
              </div>
            </>
          )}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, transparent 50%, var(--bg-surface) 100%)',
          }} />
        </div>

        {/* Content */}
        <div style={{ padding: '36px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          {eyebrow && (
            <span style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '11px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase',
              color: accentColor, display: 'block', marginBottom: '12px',
            }}>
              {eyebrow}
            </span>
          )}
          <h3 style={{
            fontFamily: 'Oswald, sans-serif',
            fontSize: '30px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px',
            color: 'var(--text-primary)', marginBottom: '12px', lineHeight: 1.05,
          }}>
            {title}
          </h3>
          {description && (
            <p style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '14px', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '20px',
            }}>
              {description}
            </p>
          )}
          {tags && tags.length > 0 && (
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '24px' }}>
              {tags.map((tag) => (
                <Badge key={tag} label={tag} size="sm" />
              ))}
            </div>
          )}
          {cta && (
            <span style={{
              fontFamily: 'Oswald, sans-serif',
              fontSize: '12px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase',
              color: accentColor, display: 'flex', alignItems: 'center', gap: '8px',
            }}>
              {cta} →
            </span>
          )}
        </div>
      </article>
      <style>{`@media (max-width: 768px) { .featured-card-grid { grid-template-columns: 1fr !important; } }`}</style>
    </Wrapper>
  )
}

// ─── MinimalCard ─────────────────────────────────────────────────────────────

function MinimalCard({ eyebrow, title, description, href, cta, accentColor }: CardContentProps) {
  const Wrapper = href ? Link : 'div'
  const wrapperProps = href ? { href, style: { textDecoration: 'none', display: 'block' } } : {}

  return (
    // @ts-expect-error dynamic tag
    <Wrapper {...wrapperProps}>
      <article
        style={{
          padding: '28px',
          borderRadius: '12px',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border)',
          height: '100%',
          transition: 'all 0.3s ease',
          cursor: href ? 'pointer' : 'default',
        }}
        onMouseEnter={(e) => {
          if (!href) return
          e.currentTarget.style.borderColor = 'var(--border-accent)'
          e.currentTarget.style.transform = 'translateY(-3px)'
        }}
        onMouseLeave={(e) => {
          if (!href) return
          e.currentTarget.style.borderColor = 'var(--border)'
          e.currentTarget.style.transform = 'translateY(0)'
        }}
      >
        {eyebrow && (
          <span style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '10px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase',
            color: accentColor, display: 'block', marginBottom: '10px',
          }}>
            {eyebrow}
          </span>
        )}
        {title && (
          <h3 style={{
            fontFamily: 'Oswald, sans-serif',
            fontSize: '20px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px',
            color: 'var(--text-primary)', marginBottom: '10px',
          }}>
            {title}
          </h3>
        )}
        {description && (
          <p style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '14px', lineHeight: 1.7, color: 'var(--text-secondary)',
            marginBottom: cta ? '20px' : 0,
          }}>
            {description}
          </p>
        )}
        {cta && (
          <span style={{
            fontFamily: 'Oswald, sans-serif',
            fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase',
            color: accentColor,
          }}>
            {cta} →
          </span>
        )}
      </article>
    </Wrapper>
  )
}

// ─── StatCard ─────────────────────────────────────────────────────────────────

function StatCard({ stat, label }: { stat: string; label: string }) {
  return (
    <div style={{ textAlign: 'center' }}>
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
        {stat}
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
        {label}
      </div>
    </div>
  )
}

// ─── ValueCard ─────────────────────────────────────────────────────────────────

function ValueCard({ icon, title, description, accentColor }: { icon: string; title: string; description: string; accentColor?: string }) {
  return (
    <div style={{
      padding: '28px',
      borderRadius: '12px',
      background: 'var(--bg-card)',
      border: '1px solid var(--border)',
      transition: 'all 0.3s ease',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = 'var(--border-accent)'
      e.currentTarget.style.transform = 'translateY(-3px)'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = 'var(--border)'
      e.currentTarget.style.transform = 'translateY(0)'
    }}>
      {/* Icon */}
      <div style={{
        width: '44px', height: '44px',
        borderRadius: '10px',
        background: 'var(--bg-elevated)',
        border: '1px solid var(--border)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '16px',
        fontSize: '20px',
        color: accentColor ?? 'var(--accent)',
        fontFamily: 'monospace',
      }}>
        {icon}
      </div>

      <h3 style={{
        fontFamily: 'Oswald, sans-serif',
        fontSize: '18px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px',
        color: 'var(--text-primary)', marginBottom: '10px',
      }}>
        {title}
      </h3>

      <p style={{
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '14px', lineHeight: 1.7, color: 'var(--text-secondary)',
      }}>
        {description}
      </p>
    </div>
  )
}

// ─── Badge — re-exported desde aquí para uso interno ──────────────────────────

interface BadgeInternalProps {
  label: string
  size?: 'sm' | 'md'
  style?: React.CSSProperties
}

function Badge({ label, size = 'md', style: extraStyle }: BadgeInternalProps) {
  return (
    <span style={{
      padding: size === 'sm' ? '3px 8px' : '4px 12px',
      background: 'var(--bg-elevated)',
      border: '1px solid var(--border)',
      borderRadius: '3px',
      fontFamily: 'Montserrat, sans-serif',
      fontSize: size === 'sm' ? '10px' : '11px',
      fontWeight: 500,
      color: 'var(--accent)',
      letterSpacing: '0.5px',
      ...extraStyle,
    }}>
      {label}
    </span>
  )
}
