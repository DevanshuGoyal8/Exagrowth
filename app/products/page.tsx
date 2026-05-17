import type { Metadata } from 'next'
import { ProductsPageClient } from './ProductsPageClient'

export const metadata: Metadata = {
  title: 'Our Products | Exagrowth',
  description:
    'Products built by Exagrowth — ExaStore.ai, the zero-commission AI-powered e-commerce platform, and ExaFit.ai, the AI fitness companion coming soon.',
  alternates: { canonical: 'https://exagrowth.com/products' },
  openGraph: {
    title: 'Our Products | Exagrowth',
    description:
      "We don't just build for clients — we build for everyone. Meet ExaStore.ai and ExaFit.ai.",
    url: 'https://exagrowth.com/products',
  },
}

export default function ProductsPage() {
  return <ProductsPageClient />
}
