import { Resend } from 'resend'
import { NextResponse } from 'next/server'

// Never pre-rendered at build time: keeps `next build` independent of RESEND_API_KEY.
export const dynamic = 'force-dynamic'

const TO = process.env.CONTACT_TO ?? 'gliendo8080@gmail.com'
const N8N = process.env.N8N_LEAD_WEBHOOK_URL // optional: automation flows from the strategy audit

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX = 4000

const BUDGET_LABEL: Record<string, string> = {
  lt1k: '< $1,000',
  '1k-2.5k': '$1,000 - $2,500',
  '2.5k-5k': '$2,500 - $5,000',
  '5k-10k': '$5,000 - $10,000',
  gt10k: '> $10,000',
  unsure: 'Unsure',
}

/** Rough fit so the inbox can be triaged at a glance (and n8n can branch on it). */
function tier(budget: string, retainer: string) {
  if (budget === 'lt1k') return 'redirect'
  if (['2.5k-5k', '5k-10k', 'gt10k'].includes(budget) && retainer !== 'no') return 'priority'
  return 'review'
}

function esc(v: unknown) {
  return String(v ?? '')
    .slice(0, MAX)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(req: Request) {
  let body: Record<string, string>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  // Honeypot filled: pretend success, send nothing.
  if (body.website) return NextResponse.json({ success: true })

  const { name, email, company, type, consequence, budget, retainer } = body
  if (!name || !email || !company || !type || !consequence || !budget || !retainer || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Missing or invalid fields' }, { status: 400 })
  }

  const fit = tier(budget, retainer)
  const rows: [string, unknown][] = [
    ['Fit', fit.toUpperCase()],
    ['Name', name],
    ['Email', email],
    ['Company', company],
    ['Looking for', type === 'other' ? `Other: ${body.typeOther}` : type],
    ['Budget', BUDGET_LABEL[budget] ?? budget],
    ['Monthly plan', retainer],
    ['Tried before', body.tried],
    ['Tools', body.tools],
    ['Hours on repetitive work', body.hours],
    ['Preferred channel', body.channel],
    ['Deadline', body.deadline],
    ['Language', body.locale],
  ]

  const html = `
    <div style="font-family:system-ui,sans-serif;max-width:640px;margin:0 auto;color:#111">
      <h2 style="margin:0 0 16px">New qualified lead: ${esc(company)}</h2>
      <table style="width:100%;border-collapse:collapse">
        ${rows
          .filter(([, v]) => v)
          .map(([k, v]) => `<tr><td style="padding:6px 0;color:#666;width:190px;vertical-align:top">${k}</td><td style="padding:6px 0">${esc(v)}</td></tr>`)
          .join('')}
      </table>
      <h3 style="margin:24px 0 8px">What happens if this is not solved in 90 days</h3>
      <p style="white-space:pre-line;background:#f5f5f5;padding:16px;border-radius:8px;margin:0">${esc(consequence)}</p>
    </div>`

  try {
    // Created per request so builds and previews without the key do not crash.
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'World of Gust <contact@worldofgust.com>',
      to: TO,
      replyTo: email,
      subject: `[${fit.toUpperCase()}] ${String(company).slice(0, 80)} · ${BUDGET_LABEL[budget] ?? budget}`,
      html,
    })
  } catch (error) {
    console.error('[contact] Resend error:', error)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }

  if (N8N) {
    // Fire-and-forget; the lead is already in the inbox if this fails.
    fetch(N8N, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...body, website: undefined, fit, receivedAt: new Date().toISOString() }),
    }).catch((e) => console.error('[contact] n8n webhook error:', e))
  }

  return NextResponse.json({ success: true })
}
