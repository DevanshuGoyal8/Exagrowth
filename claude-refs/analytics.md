# Analytics Reference — Exagrowth

## Primary: Cloudflare Web Analytics
Zero-cookie, GDPR-compliant, no consent banner needed.

### Setup
Add to `app/layout.tsx` (before closing `</body>`):
```tsx
{process.env.NEXT_PUBLIC_CF_BEACON_TOKEN && (
  <script
    defer
    src="https://static.cloudflareinsights.com/beacon.min.js"
    data-cf-beacon={`{"token": "${process.env.NEXT_PUBLIC_CF_BEACON_TOKEN}"}`}
  />
)}
```

### Getting the Token
1. Cloudflare Dashboard → Web Analytics → Add site
2. Enter exagrowth.com
3. Copy the beacon token
4. Add to `.env.local` as `NEXT_PUBLIC_CF_BEACON_TOKEN`

## Key Events to Track
Cloudflare Web Analytics tracks page views automatically.
For custom events, use the Web Analytics JS API:

```ts
// lib/analytics.ts
export function trackEvent(name: string, data?: Record<string, string>) {
  if (typeof window !== "undefined" && (window as any).cf_beacon) {
    (window as any).cf_beacon("event", { name, ...data });
  }
}
```

Track these interactions:
- `cta_audit_click` — "Get A Free Audit" button clicks
- `cta_contact_click` — "Contact Us" button clicks
- `contact_form_submit` — form submission
- `blog_post_view` — individual blog post views
- `product_exastore_click` — ExaStore.ai CTA clicks
- `product_exafit_waitlist` — ExaFit.ai waitlist signup

## What to Monitor
- **Top pages** — which services get most interest
- **Referrers** — which channels drive traffic (LinkedIn, organic, direct)
- **Countries** — confirm Saudi Arabia, Canada, Netherlands traffic
- **Core Web Vitals** — LCP, CLS, FID from real users

## Future: Google Search Console
1. Add property for exagrowth.com
2. Verify via DNS TXT record (add in Cloudflare DNS)
3. Submit sitemap: https://exagrowth.com/sitemap.xml
4. Monitor: queries, impressions, CTR, position

Run `/seo-audit` skill monthly to surface opportunities.
