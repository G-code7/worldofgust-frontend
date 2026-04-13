'use client'

import { useState } from 'react'
import Link from 'next/link'

// ─── Types ────────────────────────────────────────────────────────────────────

type ServiceOption = {
  id: string
  label: string
  icon: string
}

const serviceOptions: ServiceOption[] = [
  { id: 'landing-page', label: 'Landing Page', icon: '◎' },
  { id: 'business-website', label: 'Business Website', icon: '◈' },
  { id: 'ecommerce', label: 'E-commerce', icon: '⬡' },
  { id: 'headless-wordpress', label: 'WordPress Headless', icon: '◉' },
  { id: 'consulting', label: 'Consulting / Other', icon: '△' },
]

const budgetOptions = [
  'Under $500',
  '$500 – $1,000',
  '$1,000 – $3,000',
  '$3,000 – $7,000',
  '$7,000+',
  'Not sure yet',
]

const timelineOptions = [
  'ASAP (< 2 weeks)',
  '1 month',
  '2–3 months',
  'Flexible',
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function ContactForm() {
  const [selectedService, setSelectedService] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    budget: '',
    timeline: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in name, email, and message.')
      return
    }
    setError('')
    setSubmitting(true)

    // Simulate sending — replace with real API call / Formspree / email service
    await new Promise((res) => setTimeout(res, 1400))
    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <section style={{
      padding: '80px 0 120px',
      background: 'var(--bg-base)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Blob bg */}
      <div style={{
        position: 'absolute', right: '-8%', top: '20%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'var(--gradient-accent)', opacity: 0.03, filter: 'blur(120px)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr',
          gap: '64px',
          alignItems: 'start',
        }} className="contact-grid">

          {/* ── LEFT: Form ── */}
          <div>
            {submitted ? (
              <SuccessState name={formData.name} />
            ) : (
              <form onSubmit={handleSubmit} noValidate>

                {/* Service selector */}
                <div style={{ marginBottom: '32px' }}>
                  <label style={labelStyle}>
                    What do you need?
                    <span style={{ color: 'var(--accent)', marginLeft: '4px' }}>*</span>
                  </label>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
                    gap: '10px',
                  }}>
                    {serviceOptions.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setSelectedService(s.id)}
                        style={{
                          padding: '14px 16px',
                          borderRadius: '8px',
                          border: '1px solid',
                          borderColor: selectedService === s.id ? 'var(--accent)' : 'var(--border)',
                          background: selectedService === s.id ? 'rgba(59,130,246,0.08)' : 'var(--bg-elevated)',
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        <div style={{
                          fontFamily: 'monospace',
                          fontSize: '18px',
                          color: selectedService === s.id ? 'var(--accent)' : 'var(--text-muted)',
                          marginBottom: '6px',
                        }}>
                          {s.icon}
                        </div>
                        <div style={{
                          fontFamily: 'Montserrat, sans-serif',
                          fontSize: '12px', fontWeight: 600,
                          color: selectedService === s.id ? 'var(--text-primary)' : 'var(--text-secondary)',
                        }}>
                          {s.label}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name + Email */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }} className="form-row">
                  <div>
                    <label style={labelStyle} htmlFor="name">
                      Your name <span style={{ color: 'var(--accent)' }}>*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Gustavo Liendo"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = 'var(--border-accent)' }}
                      onBlur={(e) => { e.target.style.borderColor = 'var(--border)' }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="email">
                      Email address <span style={{ color: 'var(--accent)' }}>*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="hello@yourbrand.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = 'var(--border-accent)' }}
                      onBlur={(e) => { e.target.style.borderColor = 'var(--border)' }}
                    />
                  </div>
                </div>

                {/* Company */}
                <div style={{ marginBottom: '16px' }}>
                  <label style={labelStyle} htmlFor="company">
                    Company / Brand <span style={{ color: 'var(--text-muted)', fontSize: '10px', fontWeight: 400 }}>(optional)</span>
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = 'var(--border-accent)' }}
                    onBlur={(e) => { e.target.style.borderColor = 'var(--border)' }}
                  />
                </div>

                {/* Budget + Timeline */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }} className="form-row">
                  <div>
                    <label style={labelStyle} htmlFor="budget">Approximate budget</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      style={{ ...inputStyle, cursor: 'pointer' }}
                      onFocus={(e) => { e.target.style.borderColor = 'var(--border-accent)' }}
                      onBlur={(e) => { e.target.style.borderColor = 'var(--border)' }}
                    >
                      <option value="">Select range</option>
                      {budgetOptions.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="timeline">Timeline</label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      style={{ ...inputStyle, cursor: 'pointer' }}
                      onFocus={(e) => { e.target.style.borderColor = 'var(--border-accent)' }}
                      onBlur={(e) => { e.target.style.borderColor = 'var(--border)' }}
                    >
                      <option value="">Select timeline</option>
                      {timelineOptions.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div style={{ marginBottom: '24px' }}>
                  <label style={labelStyle} htmlFor="message">
                    Tell us about your project <span style={{ color: 'var(--accent)' }}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Describe what you're building, what problem you're solving, and any specific requirements or constraints you have..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={{
                      ...inputStyle,
                      resize: 'vertical',
                      minHeight: '140px',
                    }}
                    onFocus={(e) => { e.target.style.borderColor = 'var(--border-accent)' }}
                    onBlur={(e) => { e.target.style.borderColor = 'var(--border)' }}
                  />
                </div>

                {/* Error */}
                {error && (
                  <div style={{
                    padding: '12px 16px',
                    background: 'rgba(239,68,68,0.08)',
                    border: '1px solid rgba(239,68,68,0.3)',
                    borderRadius: '6px',
                    marginBottom: '20px',
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '13px',
                    color: '#ef4444',
                  }}>
                    {error}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  style={{
                    width: '100%',
                    padding: '16px',
                    background: submitting ? 'var(--bg-elevated)' : 'var(--gradient-accent)',
                    color: 'white',
                    fontFamily: 'Oswald, sans-serif',
                    fontSize: '14px', fontWeight: 600, letterSpacing: '2.5px', textTransform: 'uppercase',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: submitting ? 'not-allowed' : 'pointer',
                    opacity: submitting ? 0.7 : 1,
                    transition: 'transform 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    boxShadow: submitting ? 'none' : 'var(--shadow-glow)',
                  }}
                  onMouseEnter={(e) => { if (!submitting) e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  {submitting ? (
                    <>
                      <SpinnerIcon /> Sending...
                    </>
                  ) : (
                    'Send Message →'
                  )}
                </button>

                <p style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '12px', color: 'var(--text-muted)',
                  textAlign: 'center', marginTop: '12px',
                }}>
                  We respond within 24 hours · No commitment required
                </p>
              </form>
            )}
          </div>

          {/* ── RIGHT: Info sidebar ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

            {/* Quick contact */}
            <div style={sideCardStyle}>
              <h3 style={sideCardTitleStyle}>Quick Contact</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  {
                    icon: '✉',
                    label: 'Email',
                    value: 'hello@worldofgust.com',
                    href: 'mailto:hello@worldofgust.com',
                  },
                  {
                    icon: '💬',
                    label: 'WhatsApp',
                    value: '+58 412-000-0000',
                    href: 'https://wa.me/584120000000',
                  },
                  {
                    icon: '🔗',
                    label: 'LinkedIn',
                    value: 'linkedin.com/in/gustavoliendo',
                    href: 'https://www.linkedin.com/in/gustavo-liendo-b5b668111/',
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex', gap: '12px', alignItems: 'flex-start',
                      textDecoration: 'none',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border)',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-accent)'
                      e.currentTarget.style.background = 'var(--bg-base)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border)'
                      e.currentTarget.style.background = 'var(--bg-surface)'
                    }}
                  >
                    <span style={{ fontSize: '16px', flexShrink: 0 }}>{item.icon}</span>
                    <div>
                      <div style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '10px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase',
                        color: 'var(--text-muted)', marginBottom: '2px',
                      }}>
                        {item.label}
                      </div>
                      <div style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '13px', color: 'var(--accent)',
                      }}>
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div style={sideCardStyle}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <span style={{
                  width: '10px', height: '10px', borderRadius: '50%',
                  background: 'var(--success)',
                  boxShadow: '0 0 6px var(--success)',
                  display: 'inline-block',
                  animation: 'pulse 2s ease-in-out infinite',
                }} />
                <span style={{
                  fontFamily: 'Oswald, sans-serif',
                  fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px',
                  color: 'var(--success)',
                }}>
                  Available Now
                </span>
              </div>
              <p style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7,
              }}>
                Currently accepting new clients. Typical response time is under 24 hours,
                usually much faster.
              </p>
            </div>

            {/* What happens next */}
            <div style={sideCardStyle}>
              <h3 style={sideCardTitleStyle}>What Happens Next</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { step: '01', title: 'We review your message', desc: 'Within 24 hours, always.' },
                  { step: '02', title: 'Discovery call', desc: 'A focused 30-min call to scope your project.' },
                  { step: '03', title: 'Proposal', desc: 'Clear scope, timeline, and pricing within 48 hours.' },
                  { step: '04', title: 'We build it', desc: 'Iterative development with regular check-ins.' },
                ].map((item) => (
                  <div key={item.step} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '28px', height: '28px', borderRadius: '50%', flexShrink: 0,
                      background: 'var(--gradient-accent)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'Oswald, sans-serif', fontSize: '11px', fontWeight: 700, color: 'white',
                    }}>
                      {item.step}
                    </div>
                    <div>
                      <div style={{
                        fontFamily: 'Oswald, sans-serif',
                        fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px',
                        color: 'var(--text-primary)', marginBottom: '2px',
                      }}>
                        {item.title}
                      </div>
                      <div style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.5,
                      }}>
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust signals */}
            <div style={sideCardStyle}>
              {[
                '✓ Transparent pricing — no hidden costs',
                '✓ Payments in USD via Zelle, PayPal or wire',
                '✓ English & Spanish — fully bilingual',
                '✓ Remote-friendly — we work across time zones',
              ].map((signal) => (
                <div key={signal} style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '12px', color: 'var(--text-secondary)',
                  padding: '6px 0',
                  borderBottom: '1px solid var(--border)',
                }}>
                  {signal}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.85); }
        }
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

// ─── Success state ────────────────────────────────────────────────────────────

function SuccessState({ name }: { name: string }) {
  return (
    <div style={{
      padding: '64px 32px',
      textAlign: 'center',
      background: 'var(--bg-surface)',
      borderRadius: '16px',
      border: '1px solid var(--border)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'var(--gradient-mesh)', opacity: 0.3,
        pointerEvents: 'none',
      }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          width: '64px', height: '64px', borderRadius: '50%',
          background: 'rgba(16,185,129,0.1)',
          border: '2px solid var(--success)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 24px',
          fontSize: '28px',
        }}>
          ✓
        </div>

        <h2 style={{
          fontFamily: 'Oswald, sans-serif',
          fontSize: '28px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px',
          color: 'var(--text-primary)', marginBottom: '12px',
        }}>
          Message Sent, {name.split(' ')[0]}!
        </h2>

        <p style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '15px', lineHeight: 1.7, color: 'var(--text-secondary)',
          maxWidth: '400px', margin: '0 auto 32px',
        }}>
          We've received your message and will get back to you within 24 hours.
          Check your inbox — we'll reach out from <strong>hello@worldofgust.com</strong>.
        </p>

        <Link href="/work" style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '12px 24px',
          background: 'var(--gradient-accent)', color: 'white',
          fontFamily: 'Oswald, sans-serif',
          fontSize: '13px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase',
          textDecoration: 'none', borderRadius: '6px',
        }}>
          Browse our work while you wait →
        </Link>
      </div>
    </div>
  )
}

// ─── Shared styles ────────────────────────────────────────────────────────────

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '11px',
  fontWeight: 600,
  letterSpacing: '2px',
  textTransform: 'uppercase',
  color: 'var(--text-muted)',
  marginBottom: '8px',
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '13px 16px',
  background: 'var(--bg-elevated)',
  border: '1px solid var(--border)',
  borderRadius: '6px',
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '14px',
  color: 'var(--text-primary)',
  outline: 'none',
  transition: 'border-color 0.2s ease',
}

const sideCardStyle: React.CSSProperties = {
  padding: '20px',
  borderRadius: '12px',
  background: 'var(--bg-elevated)',
  border: '1px solid var(--border)',
}

const sideCardTitleStyle: React.CSSProperties = {
  fontFamily: 'Oswald, sans-serif',
  fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px',
  color: 'var(--text-primary)',
  marginBottom: '16px',
}

// ─── Spinner ──────────────────────────────────────────────────────────────────

function SpinnerIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ animation: 'spin 0.8s linear infinite' }}>
      <circle cx="8" cy="8" r="6" stroke="white" strokeWidth="2" strokeOpacity="0.3" />
      <path d="M8 2a6 6 0 0 1 6 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </svg>
  )
}