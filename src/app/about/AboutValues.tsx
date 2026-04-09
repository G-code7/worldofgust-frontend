/**
 * AboutValues — Sección 2 de About
 *
 * Grid de valores de la empresa.
 * Usa primitivo: SectionLabel, Card (variant="value")
 */

'use client'

import SectionLabel from '@/components/ui/SectionLabel'
import Card from '@/components/ui/Card'

const values = [
  {
    icon: '◎',
    title: 'Clarity first',
    description:
      'We communicate clearly about scope, timelines, and pricing before a single line of code is written. No surprises.',
    accentColor: 'var(--accent)',
  },
  {
    icon: '◈',
    title: 'Craft over speed',
    description:
      'We take the time to get things right. Well-structured code, thoughtful design, and attention to performance — every time.',
    accentColor: 'var(--accent-secondary)',
  },
  {
    icon: '⬡',
    title: 'Partnership mindset',
    description:
      'Your success is our success. We treat every project as if it were our own business on the line.',
    accentColor: 'var(--accent)',
  },
  {
    icon: '◉',
    title: 'Built to last',
    description:
      'We build scalable, maintainable solutions — not one-off experiments. You should be able to grow without rebuilding.',
    accentColor: 'var(--accent-secondary)',
  },
  {
    icon: '△',
    title: 'Always learning',
    description:
      'The web evolves fast. We stay current so you don\'t have to think about it. Latest tools, proven patterns.',
    accentColor: 'var(--accent)',
  },
  {
    icon: '▷',
    title: 'Results-driven',
    description:
      'Beautiful design that doesn\'t convert is decoration. Every decision is tied to a goal: more leads, more sales, more trust.',
    accentColor: 'var(--accent-secondary)',
  },
]

export default function AboutValues() {
  return (
    <section style={{
      padding: '96px 0',
      background: 'var(--bg-base)',
      position: 'relative',
    }}>
      <div className="container">
        <SectionLabel
          label="What We Stand For"
          title="Values That"
          titleAccent="Drive Every Decision"
          description="These aren't slogans. They're the principles that shape how we work, communicate, and deliver."
          align="center"
          mb={64}
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
        }}>
          {values.map((v) => (
            <Card
              key={v.title}
              variant="value"
              icon={v.icon}
              title={v.title}
              description={v.description}
              accentColor={v.accentColor}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
