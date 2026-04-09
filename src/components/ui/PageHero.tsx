/**
 * PageHero — Primitive compartido
 *
 * Uso:
 *   <PageHero
 *     label="About Us"
 *     title="Who We Are"
 *     titleAccent="& Why It Matters"
 *     description="A short paragraph explaining the page purpose."
 *     align="center"          // "left" | "center" (default: "left")
 *     size="lg"               // "sm" | "md" | "lg" (default: "lg")
 *   />
 *
 * El `titleAccent` se renderiza con gradient-text en la segunda línea.
 * El `label` aparece como eyebrow (trazo + texto uppercase).
 * Soporta children opcionales debajo del description (ej: CTAs, breadcrumbs).
 */

interface PageHeroProps {
  label?: string
  title: string
  titleAccent?: string
  description?: string
  align?: 'left' | 'center'
  size?: 'sm' | 'md' | 'lg'
  children?: React.ReactNode
}

const sizeMap = {
  sm: { title: 'clamp(28px, 4vw, 40px)', desc: '14px', pt: '80px', pb: '48px' },
  md: { title: 'clamp(36px, 5vw, 52px)', desc: '15px', pt: '100px', pb: '64px' },
  lg: { title: 'clamp(44px, 6vw, 68px)', desc: '16px', pt: '120px', pb: '80px' },
}

export default function PageHero({
  label,
  title,
  titleAccent,
  description,
  align = 'left',
  size = 'lg',
  children,
}: PageHeroProps) {
  const s = sizeMap[size]
  const isCenter = align === 'center'

  return (
    <section
      style={{
        position: 'relative',
        background: 'var(--bg-base)',
        paddingTop: s.pt,
        paddingBottom: s.pb,
        overflow: 'hidden',
      }}
    >
      {/* Background mesh subtle */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'var(--gradient-mesh)',
          opacity: 0.5,
          pointerEvents: 'none',
        }}
      />

      {/* Accent blob */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: isCenter ? '50%' : '-5%',
          transform: isCenter ? 'translateX(-50%)' : 'none',
          width: '600px',
          height: '400px',
          borderRadius: '50%',
          background: 'var(--gradient-accent)',
          opacity: 0.04,
          filter: 'blur(100px)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="container"
        style={{
          position: 'relative',
          textAlign: isCenter ? 'center' : 'left',
          maxWidth: isCenter ? '720px' : undefined,
          margin: isCenter ? '0 auto' : undefined,
        }}
      >
        {/* Eyebrow label */}
        {label && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '24px',
              justifyContent: isCenter ? 'center' : 'flex-start',
            }}
          >
            <span
              style={{
                display: 'block',
                width: '40px',
                height: '2px',
                background: 'var(--gradient-accent)',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '4px',
                textTransform: 'uppercase',
                color: 'var(--accent)',
              }}
            >
              {label}
            </span>
          </div>
        )}

        {/* Title */}
        <h1
          style={{
            fontFamily: 'Oswald, sans-serif',
            fontSize: s.title,
            fontWeight: 700,
            lineHeight: 1.0,
            letterSpacing: '1px',
            textTransform: 'uppercase',
            color: 'var(--text-primary)',
            marginBottom: titleAccent ? '4px' : '24px',
          }}
        >
          {title}
        </h1>

        {/* Title accent — gradient second line */}
        {titleAccent && (
          <h1
            style={{
              fontFamily: 'Oswald, sans-serif',
              fontSize: s.title,
              fontWeight: 700,
              lineHeight: 1.0,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              marginBottom: '24px',
              background: 'var(--gradient-accent)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {titleAccent}
          </h1>
        )}

        {/* Description */}
        {description && (
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: s.desc,
              lineHeight: 1.8,
              color: 'var(--text-secondary)',
              maxWidth: isCenter ? '560px' : '600px',
              margin: isCenter ? '0 auto' : undefined,
              marginBottom: children ? '32px' : 0,
            }}
          >
            {description}
          </p>
        )}

        {/* Optional slot — CTAs, breadcrumbs, etc. */}
        {children && (
          <div style={{ marginTop: description ? 0 : '24px' }}>{children}</div>
        )}
      </div>

      {/* Bottom border line */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'var(--border)',
        }}
      />
    </section>
  )
}
