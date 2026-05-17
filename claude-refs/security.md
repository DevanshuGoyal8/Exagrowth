# Security Reference — Exagrowth

## Environment Variables
All env vars validated with Zod at startup in `lib/env.ts`:
```ts
import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_SANITY_PROJECT_ID: z.string().min(1),
  NEXT_PUBLIC_SANITY_DATASET: z.string().default("production"),
  SANITY_API_TOKEN: z.string().min(1),
  RESEND_API_KEY: z.string().min(1),
  CONTACT_EMAIL: z.string().email().default("grow@exagrowth.com"),
  NEXT_PUBLIC_CF_BEACON_TOKEN: z.string().optional(),
});

export const env = envSchema.parse(process.env);
```

Never access `process.env.X` directly outside `lib/env.ts`.
Never expose `SANITY_API_TOKEN` or `RESEND_API_KEY` to the client.

## Security Headers
Already configured in `next.config.ts`:
- `X-Frame-Options: DENY` — prevents clickjacking
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Content-Security-Policy` — restricts script/style/connect sources
- Do NOT weaken these without security review

## Contact Form Security
- Zod schema validates all inputs server-side (never trust client)
- Rate limit: 3 submissions per IP per 60 minutes (Cloudflare WAF rule)
- Honeypot field: hidden `<input name="website" />` — reject if filled
- Sanitize all string inputs: trim whitespace, max lengths enforced
- Never reflect user input back in error messages without escaping

```ts
// app/api/contact/route.ts
const contactSchema = z.object({
  name: z.string().min(2).max(100).trim(),
  email: z.string().email().max(255),
  company: z.string().max(200).optional(),
  message: z.string().min(10).max(2000).trim(),
  website: z.string().max(0), // honeypot — must be empty
});
```

## OWASP Top 10 Checklist
- [x] Injection: No raw SQL — using Sanity (document DB). Zod on all inputs
- [x] Broken Auth: No auth on public site. Admin via Sanity Studio (separate auth)
- [x] XSS: React escapes by default. Never use `dangerouslySetInnerHTML` without sanitization
- [x] Security Misconfiguration: Headers set, CSP configured, no debug endpoints
- [x] Sensitive Data: Env vars in .env.local (gitignored), validated at startup
- [x] CSRF: Not applicable (no session cookies on public site)
- [ ] Broken Access Control: Review any future admin routes

## Dependency Security
Run monthly:
```bash
npm audit --audit-level=high
```
Pin major versions in package.json. Review Snyk alerts on GitHub.

## Services This Site Covers
- **SAST** (Static Application Security Testing) — Semgrep, SonarQube
- **DAST** (Dynamic Application Security Testing) — OWASP ZAP, Burp Suite
- **Penetration Testing** — manual + automated
- **Dependency Scanning** — Snyk, npm audit
- **Infrastructure Security** — cloud config review

These are offered as services — content managed in Sanity under the `service` schema.
