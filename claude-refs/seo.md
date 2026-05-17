# SEO Reference — Exagrowth

## Target Keywords
- Primary: "AI consultancy agency", "digital transformation consulting", "workflow automation AI"
- Secondary: "custom software development", "security audit SAST DAST", "AI integration for teams"
- Local: "digital transformation Saudi Arabia", "software development Canada"

## Metadata Pattern
Every page must export `generateMetadata()`:

```ts
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Page Title | Exagrowth",
    description: "150-160 char description with primary keyword",
    openGraph: {
      title: "Page Title | Exagrowth",
      description: "Same as above",
      url: "https://exagrowth.com/page-slug",
      siteName: "Exagrowth",
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Page Title | Exagrowth",
      description: "Same as above",
    },
    alternates: { canonical: "https://exagrowth.com/page-slug" },
  };
}
```

## Root Layout Metadata
```ts
// app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL("https://exagrowth.com"),
  title: { default: "Exagrowth — AI Consultancy & Digital Transformation", template: "%s | Exagrowth" },
  description: "We build AI-powered software and automate business workflows. 11+ years, 5 countries, 20+ technologies.",
  keywords: ["AI consultancy", "digital transformation", "workflow automation", "custom software", "security audit"],
};
```

## Structured Data (JSON-LD)
Add to root layout:
```ts
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Exagrowth",
  url: "https://exagrowth.com",
  logo: "https://exagrowth.com/logo.svg",
  contactPoint: { "@type": "ContactPoint", email: "grow@exagrowth.com" },
  sameAs: [
    "https://linkedin.com/in/exagrowth",
    "https://instagram.com/itsexagrowth"
  ]
};
```

Blog posts add `BlogPosting` schema:
```ts
{
  "@type": "BlogPosting",
  headline: post.title,
  datePublished: post.publishedAt,
  author: { "@type": "Organization", name: "Exagrowth" },
  image: post.mainImage,
}
```

## Sitemap
`app/sitemap.ts` must include:
- / (priority 1.0)
- /services (0.9)
- /portfolio (0.8)
- /products (0.8)
- /blog (0.8)
- /contact (0.7)
- All blog posts (0.6, lastmod = updatedAt)

## Image SEO
- All `<Image>` components must have descriptive `alt` text
- Hero image alt: "Exagrowth AI consultancy dashboard"
- Never use "image", "photo", "picture" in alt text

## Core Web Vitals Targets
- LCP < 2.5s — lazy load all below-fold images, preload hero
- CLS < 0.1 — specify width/height on all images
- FID/INP < 200ms — defer non-critical JS
