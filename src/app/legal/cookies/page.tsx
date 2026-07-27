import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import { eyebrowStyle, h1Style, metaStyle, h2Style, bodyStyle, ulStyle, linkStyle, tableStyle, thStyle, tdStyle } from '../styles'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'How World of Gust uses cookies on its website.',
  alternates: { canonical: 'https://worldofgust.com/legal/cookies' },
  robots: { index: false },
}

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg-base)', minHeight: '100vh' }}>
        <section style={{ padding: '120px 0 80px' }}>
          <div className="container" style={{ maxWidth: '760px' }}>

            <span style={eyebrowStyle}>Legal</span>
            <h1 style={h1Style}>Cookie Policy</h1>
            <p style={metaStyle}>Last updated: July 2026</p>

            <div style={bodyStyle}>

              <p>This Cookie Policy explains how World of Gust uses cookies and similar technologies when you visit <strong>worldofgust.com</strong>.</p>

              <h2 style={h2Style}>1. What Are Cookies</h2>
              <p>Cookies are small text files stored on your device by your browser. They help websites remember your preferences and understand how you interact with the site.</p>

              <h2 style={h2Style}>2. Cookies We Use</h2>
              <p>We use only analytics cookies. We do not use advertising, tracking, or social media cookies.</p>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Cookie</th>
                    <th style={thStyle}>Provider</th>
                    <th style={thStyle}>Purpose</th>
                    <th style={thStyle}>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={tdStyle}>_ga</td>
                    <td style={tdStyle}>Google Analytics</td>
                    <td style={tdStyle}>Distinguishes unique users</td>
                    <td style={tdStyle}>2 years</td>
                  </tr>
                  <tr>
                    <td style={tdStyle}>_ga_*</td>
                    <td style={tdStyle}>Google Analytics</td>
                    <td style={tdStyle}>Maintains session state</td>
                    <td style={tdStyle}>2 years</td>
                  </tr>
                </tbody>
              </table>

              <h2 style={h2Style}>3. Your Choices</h2>
              <p>On your first visit, a cookie banner will ask for your consent before analytics cookies are activated. You can also:</p>
              <ul style={ulStyle}>
                <li>Decline cookies via the banner at any time</li>
                <li>Clear cookies through your browser settings</li>
                <li>Install the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={linkStyle}>Google Analytics Opt-out Add-on</a></li>
              </ul>

              <h2 style={h2Style}>4. Contact</h2>
              <p>Questions about our cookie use? Email us at <a href="mailto:hello@worldofgust.com" style={linkStyle}>hello@worldofgust.com</a>.</p>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}