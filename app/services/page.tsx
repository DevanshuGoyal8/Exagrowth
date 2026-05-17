import type { Metadata } from 'next'
import { ServicesPageClient } from './ServicesPageClient'

export const metadata: Metadata = {
  title: 'Our Services | Exagrowth',
  description:
    'Full-stack digital transformation services — web & app development, e-commerce, cloud & DevOps, digital marketing, cybersecurity, and security audits across 5 countries.',
  alternates: { canonical: 'https://exagrowth.com/services' },
  openGraph: {
    title: 'Our Services | Exagrowth',
    description:
      'End-to-end digital services: React/Next.js development, Shopify storefronts, AWS/GCP infrastructure, SEO & paid media, and specialist security audits (SAST, DAST, pen testing).',
    url: 'https://exagrowth.com/services',
  },
}

export default function ServicesPage() {
  return <ServicesPageClient />
}
