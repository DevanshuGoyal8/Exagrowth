# Exagrowth Website — Claude Code Instructions

## Project Overview
Agency website for **Exagrowth** — a digital transformation + AI consultancy firm.
Stack: Next.js 15 · React 19 · Tailwind CSS v4 · TypeScript 5 strict · Framer Motion · Sanity CMS · Cloudflare Pages

## Brand
- **Colors:** Black (#080808 bg) + Electric Blue (#2563EB) accent — see `app/globals.css @theme`
- **Logo:** `public/logo.svg` — never replace with text, always use `<Image>` component
- **Tone:** Premium, confident, technical — no fluff copy
- **Font:** Inter (system font stack)

## Key Contacts / Content
- Email: grow@exagrowth.com
- LinkedIn: linkedin.com/in/exagrowth/
- Instagram: @itsexagrowth
- Stats: 5 Countries · 11+ Years · 10+ Industries · 20+ Technologies

## Architecture Rules

### Next.js 15
- App Router only — no Pages Router
- `const { slug } = await params` — params is always a Promise
- `<body suppressHydrationWarning>` required in layout.tsx
- Dynamic imports for heavy animation components: `dynamic(() => import(...), { ssr: false })`
- `next/image` for ALL images — never `<img>`. Hero images get `priority`
- `next/link` for ALL internal routes — never `<a>`

### TypeScript
- `strict: true` — no `any`, no `@ts-ignore`
- All Sanity query results typed via `lib/types.ts`
- Zod validation on all API routes and form inputs

### Tailwind v4
- CSS-first config in `app/globals.css` under `@theme {}`
- Use CSS variables from `@theme` — never hardcode hex values in components
- Arbitrary values only when no token exists: `p-[18px]`

### Framer Motion
- See `claude-refs/animations.md` for approved patterns
- Always use `will-change: transform` for GPU-accelerated animations
- Wrap animated sections in `<motion.div>` — use `viewport={{ once: true }}` for scroll triggers
- No animations on elements with `prefers-reduced-motion` — wrap with `useReducedMotion()`

### Sanity CMS
- Client in `lib/sanity.ts` — never import `@sanity/client` directly in components
- GROQ queries in `lib/queries.ts` — never inline in page files
- Images via `@sanity/image-url` builder from `lib/sanity.ts`
- Revalidate tag after mutations: `revalidateTag('sanity')`
- Studio at `/studio` route (separate sanity/ folder)

### Security
- See `claude-refs/security.md`
- Security headers already in `next.config.ts` — do not remove
- Env vars validated with Zod in `lib/env.ts`
- Contact form: rate-limit to 3 submissions per IP per hour (via Cloudflare)
- Never log sensitive data

### SEO
- See `claude-refs/seo.md`
- Every page exports `generateMetadata()`
- OG image at `app/opengraph-image.tsx`
- Structured data (JSON-LD) for Organization and BlogPosting types
- Run `/seo-audit` skill after completing any page

### Analytics
- See `claude-refs/analytics.md`
- Cloudflare Web Analytics — zero-cookie, no consent banner needed
- Beacon token from `NEXT_PUBLIC_CF_BEACON_TOKEN` env var

## Skills to Use
- After completing pages: `/seo-audit` — check metadata, OG, structured data
- Before merging: `/security-review` — check headers, inputs, env exposure
- After major features: `/review` — code quality pass
- `/engineering:debug` — for production issues

## Session Order
```
Session 1: ✅ configs + globals.css + CLAUDE.md (done)
Session 2: lib/ + Sanity schemas + layout (Header, Footer)
Session 3: Homepage sections
Session 4: Inner pages (Services, Portfolio, Products, Blog, Contact)
Session 5: SEO, OG images, sitemap, robots
Session 6: Contact API route, form validation
Session 7: Cloudflare Pages deploy + DNS
```

## Do Not
- Do not install `axios` — use native `fetch`
- Do not use `any` type
- Do not hardcode colors — use CSS variables
- Do not add console.log in production code
- Do not commit `.env.local`
- Do not touch `../web/` (that is the lhloba.sa salon app — separate project)
