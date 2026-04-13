'use client'

import { useState } from 'react'
import Link from 'next/link'

// ─── Mock posts (until WP blog integration is built) ─────────────────────────

const mockPosts = [
  {
    id: '1',
    slug: 'headless-wordpress-nextjs-2025',
    title: 'Why Headless WordPress + Next.js Is the Right Stack in 2025',
    excerpt: 'The traditional WordPress frontend is showing its age. Here\'s why decoupling your CMS from your frontend — and what you gain in performance, security, and developer experience.',
    category: 'WordPress',
    readTime: '7 min read',
    date: 'March 15, 2025',
    featured: true,
  },
  {
    id: '2',
    slug: 'ecommerce-conversion-rate-optimization',
    title: '8 E-commerce Changes That Actually Move Conversion Rates',
    excerpt: 'Most e-commerce advice is vague. This post covers specific, testable changes — from checkout flow to product page layout — that have measurably increased sales for our clients.',
    category: 'E-commerce',
    readTime: '9 min read',
    date: 'February 28, 2025',
    featured: false,
  },
  {
    id: '3',
    slug: 'nextjs-app-router-seo-guide',
    title: 'SEO in Next.js App Router: A Practical Guide',
    excerpt: 'Metadata API, JSON-LD schema, dynamic sitemaps, hreflang for multilingual sites — everything you need to get your Next.js site ranking well, with working code examples.',
    category: 'Development',
    readTime: '12 min read',
    date: 'February 10, 2025',
    featured: false,
  },
  {
    id: '4',
    slug: 'venezuela-freelancer-international-clients',
    title: 'How to Land International Clients as a Venezuelan Developer',
    excerpt: 'Practical advice on pricing in USD, building trust with foreign clients, payment methods that work, and how to position yourself in a competitive global market.',
    category: 'Business',
    readTime: '8 min read',
    date: 'January 22, 2025',
    featured: false,
  },
  {
    id: '5',
    slug: 'woocommerce-vs-shopify-2025',
    title: 'WooCommerce vs Shopify in 2025: Which One Should You Choose?',
    excerpt: 'The honest answer is: it depends. This comparison cuts through the marketing to help you choose based on your actual business needs, budget, and technical situation.',
    category: 'E-commerce',
    readTime: '10 min read',
    date: 'January 8, 2025',
    featured: false,
  },
  {
    id: '6',
    slug: 'tailwind-css-v4-upgrade-guide',
    title: 'Upgrading to Tailwind CSS v4: What Changed and What to Watch For',
    excerpt: 'We migrated several projects from Tailwind v3 to v4. Here\'s what\'s different, what broke, what improved, and the exact steps we used to upgrade without regressions.',
    category: 'Development',
    readTime: '6 min read',
    date: 'December 18, 2024',
    featured: false,
  },
]

const CATEGORIES = ['All', 'WordPress', 'E-commerce', 'Development', 'Business']

const categoryColors: Record<string, string> = {
  WordPress: 'var(--accent)',
  'E-commerce': 'var(--accent-secondary)',
  Development: 'var(--accent)',
  Business: 'var(--accent-secondary)',
}

export default function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? mockPosts
    : mockPosts.filter((p) => p.category === activeCategory)

  const [featured, ...rest] = filtered

  return (
    <section style={{
      padding: '80px 0 120px',
      background: 'var(--bg-base)',
    }}>
      <div className="container">

        {/* Filter tabs */}
        <div style={{
          display: 'flex',
          gap: '8px',
          flexWrap: 'wrap',
          marginBottom: '56px',
          paddingBottom: '24px',
          borderBottom: '1px solid var(--border)',
          alignItems: 'center',
        }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '8px 18px',
                borderRadius: '6px',
                border: '1px solid',
                borderColor: activeCategory === cat ? 'var(--accent)' : 'var(--border)',
                background: activeCategory === cat ? 'var(--accent)' : 'transparent',
                color: activeCategory === cat ? 'white' : 'var(--text-secondary)',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {cat}
            </button>
          ))}
          <span style={{
            marginLeft: 'auto',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '12px',
            color: 'var(--text-muted)',
          }}>
            {filtered.length} article{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Coming soon notice */}
        <div style={{
          padding: '16px 20px',
          borderRadius: '8px',
          background: 'rgba(59,130,246,0.05)',
          border: '1px solid rgba(59,130,246,0.15)',
          marginBottom: '48px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}>
          <span style={{ fontSize: '16px' }}>✍️</span>
          <p style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '13px',
            color: 'var(--text-secondary)',
            lineHeight: 1.5,
          }}>
            <strong style={{ color: 'var(--accent)' }}>Blog coming soon.</strong>{' '}
            These are preview articles — full posts will be published shortly. Subscribe below to be notified.
          </p>
        </div>

        {filtered.length === 0 ? (
          <div style={{
            textAlign: 'center', padding: '80px 0',
            color: 'var(--text-muted)',
            fontFamily: 'Montserrat, sans-serif', fontSize: '15px',
          }}>
            No posts in this category yet.
          </div>
        ) : (
          <>
            {/* Featured post */}
            {featured && <FeaturedPost post={featured} />}

            {/* Grid of remaining posts */}
            {rest.length > 0 && (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '24px',
                marginTop: '24px',
              }}>
                {rest.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            )}
          </>
        )}

        {/* Newsletter signup */}
        <NewsletterSignup />
      </div>
    </section>
  )
}

// ─── Featured Post ────────────────────────────────────────────────────────────

function FeaturedPost({ post }: { post: typeof mockPosts[0] }) {
  const accentColor = categoryColors[post.category] ?? 'var(--accent)'

  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block', marginBottom: '24px' }}>
      <article
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          borderRadius: '16px',
          overflow: 'hidden',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border)',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          minHeight: '280px',
        }}
        className="featured-post-grid"
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'var(--border-accent)'
          e.currentTarget.style.boxShadow = 'var(--shadow-card)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'var(--border)'
          e.currentTarget.style.boxShadow = 'none'
        }}
      >
        {/* Visual side */}
        <div style={{
          background: 'var(--bg-elevated)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '240px',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'var(--gradient-mesh)', opacity: 0.6 }} />
          <div style={{
            position: 'relative', zIndex: 1,
            textAlign: 'center', padding: '32px',
          }}>
            <span style={{
              display: 'block',
              fontFamily: 'Oswald, sans-serif',
              fontSize: '11px', fontWeight: 600, letterSpacing: '4px', textTransform: 'uppercase',
              color: accentColor, marginBottom: '12px',
            }}>
              Featured Article
            </span>
            <div style={{
              fontFamily: 'Oswald, sans-serif',
              fontSize: '56px', fontWeight: 700, lineHeight: 1,
              background: 'var(--gradient-accent)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              opacity: 0.2,
            }}>
              {post.category.slice(0, 2).toUpperCase()}
            </div>
          </div>
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            height: '3px', background: 'var(--gradient-accent)',
          }} />
        </div>

        {/* Content side */}
        <div style={{ padding: '36px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px' }}>
            <span style={{
              padding: '3px 10px',
              background: 'rgba(59,130,246,0.08)',
              border: '1px solid rgba(59,130,246,0.2)',
              borderRadius: '3px',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '10px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase',
              color: accentColor,
            }}>
              {post.category}
            </span>
            <span style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '11px', color: 'var(--text-muted)',
            }}>
              {post.readTime} · {post.date}
            </span>
          </div>

          <h2 style={{
            fontFamily: 'Oswald, sans-serif',
            fontSize: 'clamp(22px, 2.5vw, 28px)', fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.5px',
            color: 'var(--text-primary)', lineHeight: 1.1,
            marginBottom: '14px',
          }}>
            {post.title}
          </h2>

          <p style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '14px', lineHeight: 1.7, color: 'var(--text-secondary)',
            marginBottom: '24px',
          }}>
            {post.excerpt}
          </p>

          <span style={{
            fontFamily: 'Oswald, sans-serif',
            fontSize: '12px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase',
            color: accentColor,
          }}>
            Read Article →
          </span>
        </div>
      </article>
      <style>{`
        @media (max-width: 768px) {
          .featured-post-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Link>
  )
}

// ─── Post Card ────────────────────────────────────────────────────────────────

function PostCard({ post }: { post: typeof mockPosts[0] }) {
  const accentColor = categoryColors[post.category] ?? 'var(--accent)'

  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'flex' }}>
      <article
        style={{
          width: '100%',
          padding: '28px',
          borderRadius: '12px',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border)',
          display: 'flex',
          flexDirection: 'column',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)'
          e.currentTarget.style.borderColor = 'var(--border-accent)'
          e.currentTarget.style.boxShadow = 'var(--shadow-card)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.borderColor = 'var(--border)'
          e.currentTarget.style.boxShadow = 'none'
        }}
      >
        {/* Category + meta */}
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '14px' }}>
          <span style={{
            padding: '3px 8px',
            background: 'var(--bg-elevated)',
            border: '1px solid var(--border)',
            borderRadius: '3px',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '9px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase',
            color: accentColor,
          }}>
            {post.category}
          </span>
          <span style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '11px', color: 'var(--text-muted)',
          }}>
            {post.readTime}
          </span>
        </div>

        <h3 style={{
          fontFamily: 'Oswald, sans-serif',
          fontSize: '18px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px',
          color: 'var(--text-primary)', lineHeight: 1.15,
          marginBottom: '10px',
        }}>
          {post.title}
        </h3>

        <p style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '13px', lineHeight: 1.65, color: 'var(--text-secondary)',
          marginBottom: '20px', flex: 1,
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {post.excerpt}
        </p>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '16px',
          borderTop: '1px solid var(--border)',
        }}>
          <span style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '11px', color: 'var(--text-muted)',
          }}>
            {post.date}
          </span>
          <span style={{
            fontFamily: 'Oswald, sans-serif',
            fontSize: '11px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase',
            color: accentColor,
          }}>
            Read →
          </span>
        </div>
      </article>
    </Link>
  )
}

// ─── Newsletter ───────────────────────────────────────────────────────────────

function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <div style={{
      marginTop: '80px',
      padding: '48px',
      borderRadius: '16px',
      background: 'var(--bg-surface)',
      border: '1px solid var(--border)',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        width: '400px', height: '200px', borderRadius: '50%',
        background: 'var(--gradient-accent)', opacity: 0.04, filter: 'blur(80px)',
        pointerEvents: 'none',
      }} />

      {submitted ? (
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: '32px', marginBottom: '12px' }}>✓</div>
          <h3 style={{
            fontFamily: 'Oswald, sans-serif',
            fontSize: '22px', fontWeight: 700, textTransform: 'uppercase',
            color: 'var(--text-primary)', marginBottom: '8px',
          }}>
            You're on the list
          </h3>
          <p style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '14px', color: 'var(--text-muted)',
          }}>
            We'll notify you when new articles go live.
          </p>
        </div>
      ) : (
        <div style={{ position: 'relative', zIndex: 1 }}>
          <span style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '11px', fontWeight: 600, letterSpacing: '4px', textTransform: 'uppercase',
            color: 'var(--accent)', display: 'block', marginBottom: '12px',
          }}>
            Stay Updated
          </span>
          <h3 style={{
            fontFamily: 'Oswald, sans-serif',
            fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 700, textTransform: 'uppercase',
            color: 'var(--text-primary)', marginBottom: '8px',
          }}>
            New Articles, No Spam
          </h3>
          <p style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '14px', color: 'var(--text-secondary)',
            marginBottom: '28px', maxWidth: '400px', margin: '0 auto 28px',
          }}>
            Practical web development content, delivered when it's ready — not on a forced schedule.
          </p>
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              gap: '12px',
              maxWidth: '460px',
              margin: '0 auto',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              style={{
                flex: 1,
                minWidth: '220px',
                padding: '13px 18px',
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border)',
                borderRadius: '6px',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '14px',
                color: 'var(--text-primary)',
                outline: 'none',
              }}
            />
            <button
              type="submit"
              style={{
                padding: '13px 24px',
                background: 'var(--gradient-accent)',
                color: 'white',
                fontFamily: 'Oswald, sans-serif',
                fontSize: '13px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              Subscribe
            </button>
          </form>
        </div>
      )}
    </div>
  )
}