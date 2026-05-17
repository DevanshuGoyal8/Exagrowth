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
  logoInitials: string
  logoColors: [string, string] // gradient from → to
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
    logoInitials: 'LH',
    logoColors: ['#7C3AED', '#A855F7'],
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
    logoInitials: 'DS',
    logoColors: ['#059669', '#10B981'],
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
    logoInitials: 'KF',
    logoColors: ['#D97706', '#F59E0B'],
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
    logoInitials: 'GS',
    logoColors: ['#2563EB', '#3B82F6'],
  },
  {
    id: 'magicspells',
    name: 'MagicSpells',
    url: 'https://magicspells.org',
    country: 'USA',
    flag: '🇺🇸',
    industry: 'EdTech · Accessibility',
    description:
      'First haptic-feedback vocabulary app for dyslexic learners. Combines touch, sight, and sound for multisensory literacy development.',
    tech: ['React Native', 'Expo', 'Haptic APIs'],
    logoInitials: 'MS',
    logoColors: ['#E11D48', '#F43F5E'],
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
    logoInitials: 'DF',
    logoColors: ['#EA580C', '#F97316'],
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
    logoInitials: 'GT',
    logoColors: ['#0891B2', '#06B6D4'],
  },
]

const filterOptions = ['All', 'Saudi Arabia', 'Canada', 'Netherlands', 'USA']

// ── Logo chip ─────────────────────────────────────────────────────────────────

function LogoChip({ initials, colors }: { initials: string; colors: [string, string] }) {
  return (
    <div
      className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 shadow-lg"
      style={{
        background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`,
        boxShadow: `0 4px 20px ${colors[0]}40`,
      }}
      aria-hidden="true"
    >
      <span className="text-white font-bold text-base tracking-tight select-none">
        {initials}
      </span>
    </div>
  )
}

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
              From Saudi Arabia to Canada, the Netherlands to the USA — here&apos;s what we&apos;ve shipped.
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
                {/* Hover glow — tinted to logo color */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[var(--radius-xl)]"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${item.logoColors[0]}14 0%, transparent 65%)`,
                  }}
                  aria-hidden="true"
                />

                <div className="relative flex flex-col gap-4 flex-1">
                  {/* Header: logo chip + name + country */}
                  <div className="flex items-start gap-4">
                    <LogoChip initials={item.logoInitials} colors={item.logoColors} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h2 className="text-xl font-bold text-[var(--color-text-primary)] leading-tight">
                          {item.name}
                        </h2>
                      </div>
                      <span
                        className="flex items-center gap-1 text-xs text-[var(--color-text-muted)] mt-1"
                        aria-label={`Country: ${item.country}`}
                      >
                        <span aria-hidden="true">{item.flag}</span>
                        {item.country}
                      </span>
                    </div>
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
