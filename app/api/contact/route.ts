import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { env } from '@/lib/env'

// ── Validation schema ─────────────────────────────────────────────────────────

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100).trim(),
  email: z.string().email('Please enter a valid email address').max(255),
  company: z.string().max(200).optional(),
  service: z.string().max(100).optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000).trim(),
  website: z.string().max(0, 'Automated submission detected'), // honeypot
})

// ── Email formatting ──────────────────────────────────────────────────────────

function buildEmailHtml(data: z.infer<typeof schema>): string {
  const rows = [
    ['Name', data.name],
    ['Email', data.email],
    ['Company', data.company ?? '—'],
    ['Service', data.service ?? '—'],
    ['Message', data.message.replace(/\n/g, '<br>')],
  ]

  const rowsHtml = rows
    .map(
      ([label, value]) =>
        `<tr>
          <td style="padding:8px 12px;background:#0f0f0f;color:#94a3b8;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;white-space:nowrap;border-bottom:1px solid #1f1f1f;">${label}</td>
          <td style="padding:8px 12px;background:#0f0f0f;color:#f8fafc;font-size:14px;border-bottom:1px solid #1f1f1f;">${value}</td>
        </tr>`,
    )
    .join('')

  return `<!DOCTYPE html>
<html>
<body style="background:#080808;color:#f8fafc;font-family:Inter,-apple-system,sans-serif;margin:0;padding:32px;">
  <div style="max-width:600px;margin:0 auto;">
    <p style="font-size:12px;font-weight:600;color:#2563EB;text-transform:uppercase;letter-spacing:0.2em;margin-bottom:16px;">NEW CONTACT FORM SUBMISSION</p>
    <h1 style="font-size:24px;font-weight:700;margin-bottom:24px;">You have a new message</h1>
    <table style="width:100%;border-collapse:collapse;border:1px solid #1f1f1f;border-radius:8px;overflow:hidden;">
      ${rowsHtml}
    </table>
    <p style="margin-top:24px;font-size:12px;color:#475569;">
      Sent via the Exagrowth.com contact form
    </p>
  </div>
</body>
</html>`
}

// ── Route handler ─────────────────────────────────────────────────────────────

export async function POST(req: NextRequest): Promise<NextResponse> {
  let body: unknown

  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 })
  }

  const parsed = schema.safeParse(body)

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors
    const firstMessage = Object.values(fieldErrors).flat()[0] ?? 'Validation failed.'
    return NextResponse.json(
      { error: firstMessage, fieldErrors },
      { status: 400 },
    )
  }

  const data = parsed.data

  // Honeypot check
  if (data.website && data.website.length > 0) {
    // Return success to bots without processing
    return NextResponse.json({ success: true })
  }

  // Send email via Resend if API key is configured
  if (env.RESEND_API_KEY) {
    try {
      const resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: 'Exagrowth Contact <noreply@exagrowth.com>',
          to: [env.CONTACT_EMAIL],
          reply_to: data.email,
          subject: `New enquiry from ${data.name}${data.service ? ` — ${data.service}` : ''}`,
          html: buildEmailHtml(data),
        }),
      })

      if (!resendRes.ok) {
        const resendError = await resendRes.text()
        // Log server-side only, no sensitive data exposed to client
        void resendError // consumed to avoid unhandled promise warning
        return NextResponse.json(
          { error: 'Failed to send email. Please try again or contact us directly.' },
          { status: 500 },
        )
      }
    } catch {
      return NextResponse.json(
        { error: 'Network error sending email. Please try again.' },
        { status: 500 },
      )
    }
  }
  // If RESEND_API_KEY is not set (dev mode), silently succeed

  return NextResponse.json({ success: true })
}
