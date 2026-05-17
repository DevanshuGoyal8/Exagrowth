'use client'

import React, { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils'

// ── Data ──────────────────────────────────────────────────────────────────────

interface PortfolioItem {
  id: string
  name: string
  url: string
  country: string
  flag: string
  industry: string
  description: string
  tech: string[]
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 'lhloba',
    name: 'Lhloba',
    url: 'https://lhloba.sa',
    country: 'Saudi Arabia',
    flag: '🇸🇦',
    industry: 'SaaS · Salon Management',
    description:
      'All-in-one salon management platform with booking, staff scheduling, and integrated payments. Built for the Saudi market with full Arabic/RTL support.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'RTL/Arabic'],
  },
  {
    id: 'daaem',
    name: 'Daaem Solutions',
    url: 'https://daaemsolutions.com',
    country: 'Saudi Arabia',
    flag: '🇸🇦',
    industry: 'SaaS · Merchandising',
    description:
      'Retail merchandising solution with real-time analytics dashboard, territory management, and mobile field-agent app.',
    tech: ['React', 'Laravel', 'MySQL', 'Mobile'],
  },
  {
    id: 'kubera',
    name: 'Kubera Finance Group',
    url: 'https://kuberafinancegroup.nl',
    country: 'Netherlands',
    flag: '🇳🇱',
    industry: 'Finance · Mortgage',
    description:
      'Expat mortgage advisory platform helping internationals navigate Dutch home ownership. Clean, trust-building design with multi-language support.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'growth-strategy',
    name: 'Growth Strategy Experts',
    url: 'https://growthstrategyexperts.com',
    country: 'Canada',
    flag: '🇨🇦',
    industry: 'Consulting',
    description:
      'Strategy consulting platform with 500+ planning frameworks, digital assessments, and client-facing portals for Canadian businesses.',
    tech: ['WordPress', 'Custom PHP', 'MySQL'],
  },
  {
    id: 'magicspells',
    name: 'MagicSpells',
    url: 'https://magicspells.org',
    country: 'International',
    flag: '🌐',
    industry: 'EdTech · Accessibility',
    description:
      'First haptic-feedback vocabulary app for dyslexic learners. Combines touch, sight, and sound for multisensory literacy development.',
    tech: ['React Native', 'Expo', 'Haptic APIs'],
  },
  {
    id: 'dfs',
    name: 'Diamond Freight Systems',
    url: 'https://dfsltd.ca',
    country: 'Canada',
    flag: '🇨🇦',
    industry: 'Logistics',
    description:
      'LTL/FTL freight, ocean shipping, rail logistics, and warehousing across North America. 24/7 tracking and competitive pricing.',
    tech: ['WordPress', 'Custom Integrations'],
  },
  {
    id: 'gtb',
    name: 'GTB Industries',
    url: 'https://gtbindustriesltd.ca',
    country: 'Canada',
    flag: '🇨🇦',
    industry: 'B2B Supply',
    description:
      'B2B supplier of low-voltage electrical, CCTV, networking products. Custom order portal with product catalog.',
    tech: ['WordPress', 'WooCommerce'],
  },
]

const filterOptions = ['All', 'Saudi Arabia', 'Canada', 'Netherlands', 'International']

// ── Animation variants ────────────────────────────────────────────────────────

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
}

// ── Component ─────────────────────────────────────────────────────────────────

export function PortfolioPageClient() {
  const prefersReduced = useReducedMotion()
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered =
    activeFilter === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.country === activeFilter)

  return (
    <div className="bg-[var(--color-background)] min-h-screen">
      {/* Hero */}
      <section className="section-padding border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-blue)] mb-5">
              OUR WORK
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 gradient-text">
              Projects We&apos;re Proud Of
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
              From Saudi Arabia to Canada, the Netherlands to the UK — here&apos;s what we&apos;ve shipped.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter tabs */}
          <div
            className="flex flex-wrap gap-2 mb-12 justify-center"
            role="group"
            aria-label="Filter projects by country"
          >
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  'px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border',
                  activeFilter === filter
                    ? 'bg-[var(--color-blue)] border-[var(--color-blue)] text-white shadow-[0_0_16px_rgba(37,99,235,0.4)]'
                    : 'glass border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-blue)] hover:text-[var(--color-text-primary)]',
                )}
                aria-pressed={activeFilter === filter}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item, i) => (
              <motion.article
                key={item.id}
                custom={i}
                variants={prefersReduced ? {} : cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="glass gradient-border rounded-[var(--radius-xl)] p-8 flex flex-col gap-5 group relative overflow-hidden"
                style={{ willChange: 'transform' }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[var(--radius-xl)]"
                  style={{
                    background:
                      'radial-gradient(ellipse at top left, rgba(37,99,235,0.1) 0%, transparent 70%)',
                  }}
                  aria-hidden="true"
                />

                <div className="relative flex flex-col gap-4 flex-1">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="text-xl font-bold text-[var(--color-text-primary)] leading-tight">
                      {item.name}
                    </h2>
                    <span
                      className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)] shrink-0 mt-0.5"
                      aria-label={`Country: ${item.country}`}
                    >
                      <span aria-hidden="true">{item.flag}</span>
                      {item.country}
                    </span>
                  </div>

                  {/* Industry badge */}
                  <Badge variant="ghost" className="self-start">
                    {item.industry}
                  </Badge>

                  {/* Description */}
                  <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm flex-1">
                    {item.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full text-xs font-medium bg-[rgba(37,99,235,0.08)] text-[var(--color-blue-glow)] border border-[rgba(37,99,235,0.2)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center gap-2 text-sm font-semibold text-[var(--color-text-muted)] group-hover:text-[var(--color-blue-glow)] transition-colors duration-200 pt-5 border-t border-[var(--color-border)]"
                  aria-label={`Visit ${item.name} website`}
                >
                  Visit Project
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
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                    aria-hidden="true"
                  >
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </a>
              </motion.article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-[var(--color-text-muted)] py-16">
              No projects found for this filter.
            </p>
          )}
        </div>
      </section>
    </div>
  )
}
