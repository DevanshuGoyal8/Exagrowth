import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { AIConsultancy } from '@/components/sections/AIConsultancy'
import { Services } from '@/components/sections/Services'
import { Products } from '@/components/sections/Products'
import { Portfolio } from '@/components/sections/Portfolio'
import { Testimonials } from '@/components/sections/Testimonials'
import { BlogPreview } from '@/components/sections/BlogPreview'
import { ContactCTA } from '@/components/sections/ContactCTA'
import { ClientLogos } from '@/components/sections/ClientLogos'

export const metadata: Metadata = {
  title: 'Exagrowth — AI-First Digital Transformation Agency',
  description:
    'From workflow automation to custom software — we help businesses across 5 countries harness AI to move faster, scale smarter, and compete fearlessly.',
  alternates: {
    canonical: 'https://exagrowth.com',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <AIConsultancy />
      <Services />
      <Products />
      <Portfolio />
      <Testimonials />
      <BlogPreview />
      <ContactCTA />
    </>
  )
}
