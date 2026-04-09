'use client'

import { useState } from 'react'
import SectionLabel from '@/components/ui/SectionLabel'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'How long does a typical project take?',
    answer:
      'A landing page usually takes 1–2 weeks. A business website is typically 3–5 weeks. E-commerce and headless projects vary by scope — we\'ll give you a realistic timeline during the discovery call. We don\'t rush and we don\'t disappear.',
  },
  {
    question: 'Do I need to provide the content (text, images)?',
    answer:
      'Ideally yes — you know your business better than anyone. We\'ll guide you with a content brief so you know exactly what to prepare. If you need copywriting or photography, we can connect you with trusted partners.',
  },
  {
    question: 'Will I be able to update the site myself after launch?',
    answer:
      'Yes. All our websites are built on WordPress or include a CMS, so you can edit text, add blog posts, and update images without touching code. We include a short handover session at launch.',
  },
  {
    question: 'Do you offer hosting and domain registration?',
    answer:
      'Yes — all our packages include hosting setup and domain registration assistance. We use reliable providers with good uptime and support. You own the domain and hosting account; we just help you set it up.',
  },
  {
    question: 'What if I need changes after the site is launched?',
    answer:
      'Every project includes post-launch support for minor fixes. For ongoing changes, updates, or new features, we offer monthly retainer plans. We prefer long-term relationships over one-off transactions.',
  },
  {
    question: 'Can you work with an existing WordPress site?',
    answer:
      'Absolutely. We can redesign, optimize, or restructure existing WordPress sites. We\'ll audit what you have first and recommend the most efficient path forward — sometimes a full rebuild is worth it, sometimes it isn\'t.',
  },
  {
    question: 'Do you work with clients outside Venezuela?',
    answer:
      'Yes — most of our clients are international. We work asynchronously across time zones and communicate in English and Spanish. Payments are accepted in USD via Zelle, PayPal, or bank transfer.',
  },
  {
    question: 'What does the discovery call involve?',
    answer:
      'It\'s a 30-minute video call (or async if you prefer) to understand your goals, discuss your current situation, and see if we\'re a good fit. There\'s no pitch, no pressure, and no commitment required.',
  },
]

export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section style={{
      padding: '96px 0',
      background: 'var(--bg-base)',
      position: 'relative',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.6fr',
          gap: '72px',
          alignItems: 'start',
        }} className="faq-grid">

          {/* LEFT — sticky label */}
          <div style={{ position: 'sticky', top: '120px' }}>
            <SectionLabel
              label="FAQ"
              title="Questions We"
              titleAccent="Hear Often"
              description="If your question isn't here, send it our way — we reply within 24 hours."
              mb={32}
            />
            <a
              href="/contact"
              style={{
                fontFamily: 'Oswald, sans-serif',
                fontSize: '12px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase',
                color: 'var(--accent)', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                borderBottom: '1px solid var(--border-accent)', paddingBottom: '4px',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-secondary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--accent)')}
            >
              Ask a question →
            </a>
          </div>

          {/* RIGHT — accordion */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i
              return (
                <div
                  key={i}
                  style={{
                    borderBottom: '1px solid var(--border)',
                  }}
                >
                  <button
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '16px',
                      padding: '22px 0',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <span style={{
                      fontFamily: 'Oswald, sans-serif',
                      fontSize: '17px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px',
                      color: isOpen ? 'var(--accent)' : 'var(--text-primary)',
                      transition: 'color 0.2s ease',
                      lineHeight: 1.3,
                    }}>
                      {faq.question}
                    </span>
                    <span style={{
                      width: '28px', height: '28px', borderRadius: '50%',
                      border: '1px solid var(--border)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                      background: isOpen ? 'var(--accent)' : 'transparent',
                      transition: 'all 0.2s ease',
                      color: isOpen ? 'white' : 'var(--text-muted)',
                      fontSize: '16px', lineHeight: 1,
                    }}>
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {/* Answer — animated height */}
                  <div style={{
                    maxHeight: isOpen ? '400px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease',
                  }}>
                    <p style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '14px', lineHeight: 1.8, color: 'var(--text-secondary)',
                      paddingBottom: '22px',
                    }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .faq-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}
