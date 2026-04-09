/**
 * SectionLabel — Primitive compartido
 *
 * Eyebrow label reutilizable para encabezados de sección.
 * Incluye el trazo decorativo, el label uppercase, y opcionalmente
 * el título de sección + descripción.
 *
 * Uso mínimo (solo eyebrow):
 *   <SectionLabel label="Our Work" />
 *
 * Uso completo (eyebrow + heading + descripción):
 *   <SectionLabel
 *     label="What We Build"
 *     title="Solutions Tailored"
 *     titleAccent="to Your Needs"
 *     description="Every project starts with a conversation."
 *     align="center"
 *     mb={72}
 *   />
 */

interface SectionLabelProps {
  label: string
  title?: string
  titleAccent?: string
  description?: string
  align?: 'left' | 'center'
  mb?: number          // margin-bottom en px (default: 56)
  titleSize?: string   // override fontSize del título
}

export default function SectionLabel({
  label,
  title,
  titleAccent,
  description,
  align = 'left',
  mb = 56,
  titleSize = 'clamp(32px, 4.5vw, 48px)',
}: SectionLabelProps) {
  const isCenter = align === 'center'

  return (
    <div
      style={{
        marginBottom: `${mb}px`,
        textAlign: isCenter ? 'center' : 'left',
      }}
    >
      {/* Eyebrow */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: title ? '20px' : 0,
          justifyContent: isCenter ? 'center' : 'flex-start',
        }}
      >
        <span
          style={{
            display: 'block',
            width: '36px',
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

      {/* Título principal */}
      {title && (
        <h2
          style={{
            fontFamily: 'Oswald, sans-serif',
            fontSize: titleSize,
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            color: 'var(--text-primary)',
            lineHeight: 1.05,
            marginBottom: titleAccent ? '2px' : description ? '16px' : 0,
          }}
        >
          {title}
        </h2>
      )}

      {/* Título con gradiente (segunda línea) */}
      {titleAccent && (
        <h2
          style={{
            fontFamily: 'Oswald, sans-serif',
            fontSize: titleSize,
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            lineHeight: 1.05,
            marginBottom: description ? '16px' : 0,
            background: 'var(--gradient-accent)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {titleAccent}
        </h2>
      )}

      {/* Descripción */}
      {description && (
        <p
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '15px',
            lineHeight: 1.8,
            color: 'var(--text-secondary)',
            maxWidth: isCenter ? '560px' : '520px',
            margin: isCenter ? '0 auto' : undefined,
          }}
        >
          {description}
        </p>
      )}
    </div>
  )
}
