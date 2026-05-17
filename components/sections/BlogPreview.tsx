'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Badge } from '@/components/ui/Badge'

const blogPosts = [
  {
    slug: 'ai-workflow-automation-guide',
    tag: 'AI Automation',
    title: 'How to Automate 80% of Your Business Workflows with AI Agents',
    excerpt:
      'Most businesses have 5–10 workflows that eat hours every week. Here is a practical guide to identifying them and building AI agents that handle them autonomously.',
    date: '2025-04-28',
    image: 'https://placehold.co/600x340/0f0f0f/1f1f1f',
  },
  {
    slug: 'llm-integration-production',
    tag: 'LLM Integration',
    title: 'Integrating LLMs Into Your Product: A Production Checklist',
    excerpt:
      'Going from a demo to production LLM integration is harder than it looks. Rate limits, prompt injection, latency budgets — here is what to think about before you ship.',
    date: '2025-04-14',
    image: 'https://placehold.co/600x340/0f0f0f/1f1f1f',
  },
  {
    slug: 'cybersecurity-2025-trends',
    tag: 'Cybersecurity',
    title: '2025 Cybersecurity Threats Every SaaS Founder Should Know',
    excerpt:
      'AI-generated phishing, supply chain attacks, and zero-day exploits are evolving fast. Here is the threat landscape and what your team should be doing about it.',
    date: '2025-03-31',
    image: 'https://placehold.co/600x340/0f0f0f/1f1f1f',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export function BlogPreview() {
  const prefersReduced = useReducedMotion()

  return (
    <section
      className="section-padding bg-[var(--color-background)]"
      aria-labelledby="blog-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <SectionHeader
            eyebrow="From Our Blog"
            heading="Thinking Out Loud"
            description="No fluff. Practical writing on AI, dev, and digital growth."
            align="center"
            id="blog-heading"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              custom={i}
              variants={prefersReduced ? {} : cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={
                prefersReduced
                  ? {}
                  : {
                      y: -6,
                      boxShadow: '0 0 30px rgba(37,99,235,0.18)',
                      transition: { duration: 0.2 },
                    }
              }
              className="glass gradient-border rounded-[var(--radius-lg)] overflow-hidden flex flex-col group"
              style={{ willChange: 'transform' }}
            >
              {/* Image */}
              <div className="relative w-full h-48 overflow-hidden bg-[var(--color-surface-2)]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 p-6 flex-1">
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{post.tag}</Badge>
                  <time
                    dateTime={post.date}
                    className="text-xs text-[var(--color-text-muted)]"
                  >
                    {formatDate(post.date)}
                  </time>
                </div>

                <h3 className="text-base font-bold text-[var(--color-text-primary)] leading-snug">
                  {post.title}
                </h3>

                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed flex-1">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-blue-glow)] hover:text-white transition-colors duration-200 group/link mt-auto pt-4 border-t border-[var(--color-border)]"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover/link:translate-x-1 transition-transform duration-200"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-10"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-[var(--radius-md)] text-sm font-semibold glass border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-blue)] transition-all duration-200"
          >
            View All Posts
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
