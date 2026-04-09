/**
 * AboutProcess — Sección 3 de About
 *
 * Timeline horizontal del proceso de trabajo.
 * Numbered steps con línea conectora.
 * Responsive: horizontal en desktop, vertical en mobile.
 */

'use client'

import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'

const steps = [
  {
    number: '01',
    title: 'Discovery call',
    description:
      '30 minutes to understand your goals, audience, and constraints. No commitment required.',
  },
  {
    number: '02',
    title: 'Proposal',
    description:
      'Clear scope, timeline, and pricing — delivered within 48 hours. No hidden costs.',
  },
  {
    number: '03',
    title: 'Design & build',
    description:
      'Iterative development with regular check-ins. You\'re never left in the dark.',
  },
  {
    number: '04',
    title: 'Launch & support',
    description:
      'We handle deployment and stay available for questions, fixes, and future improvements.',
  },
]

export default function AboutProcess() {
  return (
    <section style={{
      padding: '96px 0',
      background: 'var(--bg-surface)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Left blob */}
      <div style={{
        position: 'absolute', left: '-8%', bottom: '10%',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'var(--accent)', opacity: 0.03, filter: 'blur(100px)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        <SectionLabel
          label="How We Work"
          title="A Process Built"
          titleAccent="for Clarity"
          description="From first call to launch — you always know where we are and what comes next."
          mb={64}
        />

        {/* Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '0',
          position: 'relative',
          marginBottom: '64px',
        }} className="process-grid">

          {steps.map((step, i) => (
            <div key={step.number} style={{ position: 'relative', paddingRight: i < steps.length - 1 ? '24px' : 0 }}>

              {/* Connector line (between steps) */}
              {i < steps.length - 1 && (
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: 0,
                  left: '48px',
                  height: '1px',
                  background: 'var(--border)',
                  zIndex: 0,
                }} className="connector-line" />
              )}

              {/* Number circle */}
              <div style={{
                width: '40px', height: '40px', borderRadius: '50%',
                background: 'var(--gradient-accent)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '20px',
                position: 'relative', zIndex: 1,
                flexShrink: 0,
              }}>
                <span style={{
                  fontFamily: 'Oswald, sans-serif',
                  fontSize: '13px', fontWeight: 700, color: 'white',
                }}>
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <h3 style={{
                fontFamily: 'Oswald, sans-serif',
                fontSize: '18px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px',
                color: 'var(--text-primary)', marginBottom: '10px',
              }}>
                {step.title}
              </h3>

              <p style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '13px', lineHeight: 1.7, color: 'var(--text-secondary)',
              }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          display: 'flex',
          gap: '16px',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}>
          <Button href="/contact" variant="primary" size="md">
            Start the conversation
          </Button>
          <Button href="/work" variant="secondary" size="md">
            See our work first
          </Button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .process-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .connector-line { display: none !important; }
        }
      `}</style>
    </section>
  )
}
