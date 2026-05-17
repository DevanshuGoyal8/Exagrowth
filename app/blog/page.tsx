'use client'

import React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { BlogCover } from '@/components/ui/BlogCover'
import { formatDate } from '@/lib/utils'
import { posts } from '@/lib/blogData'

// Note: metadata is defined in a separate layout or we use static metadata
// since this is now a client component for animations

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function BlogPage() {
  const prefersReduced = useReducedMotion()

  return (
    <div className="bg-[var(--color-background)] min-h-screen">
      {/* Hero */}
      <section className="section-padding border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-2xl mx-auto"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-blue)] mb-5">
              INSIGHTS
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 gradient-text">
              Blog
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              AI, tech, and digital transformation — practical writing from a team that ships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.article
                key={post.slug}
                custom={i}
                variants={prefersReduced ? {} : cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                whileHover={prefersReduced ? {} : { y: -6, transition: { duration: 0.2 } }}
                className="glass gradient-border rounded-[var(--radius-xl)] overflow-hidden flex flex-col group"
                style={{ willChange: 'transform' }}
              >
                {/* Cover */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="relative w-full aspect-[16/9] overflow-hidden block"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <div className="w-full h-full group-hover:scale-105 transition-transform duration-500">
                    <BlogCover tag={post.tag} variant="card" />
                  </div>
                </Link>

                {/* Content */}
                <div className="flex flex-col gap-4 p-6 flex-1">
                  <div className="flex items-center gap-3">
                    <Badge variant="blue">{post.tag}</Badge>
                    <span className="text-xs text-[var(--color-text-muted)]">
                      {post.readTime} read
                    </span>
                  </div>

                  <h2 className="text-base font-bold text-[var(--color-text-primary)] leading-tight group-hover:text-[var(--color-blue-glow)] transition-colors duration-200">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="focus:outline-none focus-visible:underline"
                    >
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
                      className="text-xs font-semibold text-[var(--color-blue)] hover:text-[var(--color-blue-bright)] transition-colors duration-200 flex items-center gap-1 group/link"
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
                        className="group-hover/link:translate-x-1 transition-transform duration-200"
                        aria-hidden="true"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
