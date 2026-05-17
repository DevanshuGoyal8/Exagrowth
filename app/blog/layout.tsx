import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Exagrowth',
  description:
    'Insights on AI automation, LLM integration, security audits, DevOps, e-commerce, and digital transformation — written by the Exagrowth team.',
  alternates: { canonical: 'https://exagrowth.com/blog' },
  openGraph: {
    title: 'Blog | Exagrowth',
    description:
      'Deep dives into AI, tech, and digital transformation from a team that has shipped in 5 countries.',
    url: 'https://exagrowth.com/blog',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
