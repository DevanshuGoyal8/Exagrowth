import type { Metadata } from 'next'
import { PortfolioPageClient } from './PortfolioPageClient'

export const metadata: Metadata = {
  title: 'Portfolio | Exagrowth',
  description:
    'Client projects across 5 countries — SaaS platforms, fintech, logistics, edtech, e-commerce, and consulting tools. Built with React, Next.js, React Native, and more.',
  alternates: { canonical: 'https://exagrowth.com/portfolio' },
  openGraph: {
    title: 'Portfolio | Exagrowth',
    description:
      'From Saudi Arabia to Canada, the Netherlands to the UK — 7 products shipped across 5 countries.',
    url: 'https://exagrowth.com/portfolio',
  },
}

export default function PortfolioPage() {
  return <PortfolioPageClient />
}
