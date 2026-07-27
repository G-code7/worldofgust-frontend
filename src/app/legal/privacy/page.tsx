import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import { eyebrowStyle, h1Style, metaStyle, h2Style, bodyStyle, ulStyle, linkStyle, tableStyle, thStyle, tdStyle } from '../styles'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How World of Gust collects, uses, and protects your personal information.',
  alternates: { canonical: 'https://worldofgust.com/legal/privacy' },
  robots: { index: false },
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg-base)', minHeight: '100vh' }}>
        <section style={{ padding: '120px 0 80px' }}>
          <div className="container" style={{ maxWidth: '760px' }}>

            <span style={eyebrowStyle}>Legal</span>
            <h1 style={h1Style}>Privacy Policy</h1>
            <p style={metaStyle}>Last updated: July 2026</p>

            <div style={bodyStyle}>

              <p>This Privacy Policy explains how World of Gust ("we", "us", or "our") collects, uses, and protects information when you visit <strong>worldofgust.com</strong> or contact us through our website.</p>

              <h2 style={h2Style}>1. Information We Collect</h2>
              <p>We collect information you provide directly when you:</p>
              <ul style={ulStyle}>
                <li>Fill out the contact form (name, email address, company, and project details)</li>
                <li>Send us an email</li>
              </ul>
              <p>We also collect non-personal information automatically through Google Analytics, including pages visited, time on site, browser type, and approximate geographic location.</p>

              <h2 style={h2Style}>2. How We Use Your Information</h2>
              <ul style={ulStyle}>
                <li>To respond to your inquiries and provide our services</li>
                <li>To understand how visitors use our website and improve it</li>
                <li>We do not sell, rent, or share your personal information with third parties for marketing purposes</li>
              </ul>

              <h2 style={h2Style}>3. Google Analytics</h2>
              <p>We use Google Analytics to understand website traffic. Google Analytics uses cookies to collect anonymized usage data. You can opt out by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={linkStyle}>Google Analytics Opt-out Browser Add-on</a>.</p>

              <h2 style={h2Style}>4. Cookies</h2>
              <p>Our website uses cookies solely for analytics purposes. No marketing or tracking cookies are used beyond Google Analytics. You can control cookie preferences through the cookie banner on your first visit or through your browser settings.</p>

              <h2 style={h2Style}>5. Data Retention</h2>
              <p>Contact form submissions are retained only as long as necessary to respond to your inquiry. Analytics data is retained according to Google's standard retention policies.</p>

              <h2 style={h2Style}>6. Your Rights</h2>
              <p>You have the right to request access to, correction of, or deletion of your personal information. To exercise these rights, contact us at <a href="mailto:hello@worldofgust.com" style={linkStyle}>hello@worldofgust.com</a>.</p>

              <h2 style={h2Style}>7. Third-Party Services</h2>
              <p>We use the following third-party services:</p>
              <ul style={ulStyle}>
                <li><strong>Google Analytics</strong> — website analytics</li>
                <li><strong>Resend</strong> — email delivery for contact form submissions</li>
                <li><strong>Vercel</strong> — website hosting</li>
              </ul>

              <h2 style={h2Style}>8. Changes to This Policy</h2>
              <p>We may update this policy from time to time. The date at the top of this page reflects the most recent revision. Continued use of the site after changes constitutes acceptance of the updated policy.</p>

              <h2 style={h2Style}>9. Contact</h2>
              <p>For any privacy-related questions, contact us at <a href="mailto:hello@worldofgust.com" style={linkStyle}>hello@worldofgust.com</a>.</p>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}