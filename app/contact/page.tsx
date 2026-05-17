import type { Metadata } from 'next'
import { ContactPageClient } from './ContactPageClient'

export const metadata: Metadata = {
  title: 'Contact Us | Exagrowth',
  description:
    'Get in touch with the Exagrowth team. Free consultation for web development, AI consultancy, e-commerce, cloud & DevOps, cybersecurity, and security audits.',
  alternates: { canonical: 'https://exagrowth.com/contact' },
  openGraph: {
    title: 'Contact Us | Exagrowth',
    description: "Let's build something great together. Reach out for a free consultation.",
    url: 'https://exagrowth.com/contact',
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
