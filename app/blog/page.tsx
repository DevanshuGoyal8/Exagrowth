import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'
import { formatDate } from '@/lib/utils'
import { posts } from '@/lib/blogData'

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

export default function BlogPage() {
  return (
    <div className="bg-[var(--color-background)] min-h-screen">
      {/* Hero */}
      <section className="section-padding border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-blue)] mb-5">
              INSIGHTS
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 gradient-text">
              Blog
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              AI, tech, and digital transformation — practical writing from a team that ships.
            </p>
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="glass gradient-border rounded-[var(--radius-xl)] overflow-hidden flex flex-col group hover:shadow-[0_0_40px_rgba(37,99,235,0.12)] transition-shadow duration-300"
              >
                {/* Thumbnail */}
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  <Image
                    src="https://placehold.co/600x340/0f0f0f/1f2937"
                    alt={`Cover image for: ${post.title}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4 p-6 flex-1">
                  <div className="flex items-center gap-3">
                    <Badge variant="blue">{post.tag}</Badge>
                    <span className="text-xs text-[var(--color-text-muted)]">
                      {post.readTime} read
                    </span>
                  </div>

                  <h2 className="text-base font-bold text-[var(--color-text-primary)] leading-tight group-hover:text-[var(--color-blue-glow)] transition-colors duration-200">
                    <Link href={`/blog/${post.slug}`} className="focus:outline-none focus-visible:underline">
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
                    <time
                      dateTime={post.date}
                      className="text-xs text-[var(--color-text-muted)]"
                    >
                      {formatDate(post.date)}
                    </time>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-xs font-semibold text-[var(--color-blue)] hover:text-[var(--color-blue-bright)] transition-colors duration-200 flex items-center gap-1"
                      aria-label={`Read more: ${post.title}`}
                    >
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
