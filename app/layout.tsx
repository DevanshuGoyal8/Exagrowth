import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const SITE_URL = 'https://exagrowth.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Exagrowth — AI-First Digital Transformation Agency',
    template: '%s | Exagrowth',
  },
  description:
    'Exagrowth helps businesses across 5 countries harness AI to automate workflows, build custom software, and scale fearlessly. Web dev, AI consulting, cybersecurity & more.',
  keywords: [
    'AI agency',
    'digital transformation',
    'workflow automation',
    'LLM integration',
    'AI consulting',
    'web development',
    'cybersecurity',
    'Next.js agency',
    'Exagrowth',
  ],
  authors: [{ name: 'Exagrowth', url: SITE_URL }],
  creator: 'Exagrowth',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Exagrowth',
    title: 'Exagrowth — AI-First Digital Transformation Agency',
    description:
      'We build what AI makes possible. Custom software, AI agents, and digital growth — across 5 countries.',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Exagrowth — AI-First Digital Transformation Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Exagrowth — AI-First Digital Transformation Agency',
    description:
      'We build what AI makes possible. Custom software, AI agents, and digital growth — across 5 countries.',
    images: ['/opengraph-image.png'],
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/icon.svg',
    shortcut: '/icon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: SITE_URL,
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Exagrowth',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  email: 'grow@exagrowth.com',
  sameAs: [
    'https://linkedin.com/in/exagrowth/',
    'https://instagram.com/itsexagrowth',
  ],
  description:
    'AI-First digital transformation agency. Web development, AI consulting, cybersecurity, and digital marketing across 5 countries.',
  areaServed: ['Saudi Arabia', 'Netherlands', 'Canada', 'International'],
  numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 10 },
  foundingDate: '2014',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const beaconToken = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />

        {beaconToken && (
          <Script
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={JSON.stringify({ token: beaconToken })}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  )
}
