'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Badge } from '@/components/ui/Badge'

const portfolioItems = [
  {
    name: 'Lhloba',
    url: 'lhloba.sa',
    country: 'Saudi Arabia',
    flag: '🇸🇦',
    industry: 'SaaS · Salon Management',
    description:
      'All-in-one salon management platform with booking, staff, and payments.',
  },
  {
    name: 'Daaem Solutions',
    url: 'daaemsolutions.com',
    country: 'Saudi Arabia',
    flag: '🇸🇦',
    industry: 'SaaS · Merchandising',
    description:
      'Retail merchandising solution with real-time analytics dashboard.',
  },
  {
    name: 'Kubera Finance Group',
    url: 'kuberafinancegroup.nl',
    country: 'Netherlands',
    flag: '🇳🇱',
    industry: 'Finance · Mortgage',
    description:
      'Expat mortgage advisory platform for the Dutch housing market.',
  },
  {
    name: 'Growth Strategy Experts',
    url: 'growthstrategyexperts.com',
    country: 'Canada',
    flag: '🇨🇦',
    industry: 'Consulting',
    description:
      'Strategy consulting platform with 500+ planning frameworks.',
  },
  {
    name: 'MagicSpells',
    url: 'magicspells.org',
    country: 'International',
    flag: '🌐',
    industry: 'EdTech · Accessibility',
    description:
      'Haptic-feedback vocabulary app for dyslexic learners.',
  },
  {
    name: 'Diamond Freight Systems',
    url: 'dfsltd.ca',
    country: 'Canada',
    flag: '🇨🇦',
    industry: 'Logistics',
    description:
      'LTL/FTL freight, ocean shipping, and warehousing across North America.',
  },
  {
    name: 'GTB Industries',
    url: 'gtbindustriesltd.ca',
    country: 'Canada',
    flag: '🇨🇦',
    industry: 'B2B Supply',
    description:
      'Low-voltage electrical and networking products supplier.',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
}

export function Portfolio() {
  const prefersReduced = useReducedMotion()

  return (
    <section
      className="section-padding bg-[var(--color-background)]"
      aria-labelledby="portfolio-heading"
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
            eyebrow="Our Work"
            heading="Clients We've Built For"
            description="7 products shipped across 5 countries. Each one a different industry, same standard of quality."
            align="center"
            id="portfolio-heading"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={item.name}
              custom={i}
              variants={prefersReduced ? {} : cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass gradient-border rounded-[var(--radius-lg)] p-6 flex flex-col gap-4 group relative overflow-hidden"
              style={{ willChange: 'transform' }}
            >
              {/* Subtle hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[var(--radius-lg)]"
                style={{
                  background: 'radial-gradient(ellipse at top left, rgba(37,99,235,0.08) 0%, transparent 70%)',
                }}
                aria-hidden="true"
              />

              <div className="relative flex flex-col gap-3">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-bold text-[var(--color-text-primary)] leading-tight">
                    {item.name}
                  </h3>
                  <span
                    className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)] shrink-0"
                    aria-label={`Country: ${item.country}`}
                  >
                    <span aria-hidden="true">{item.flag}</span>
                    {item.country}
                  </span>
                </div>

                <Badge variant="ghost" className="self-start">
                  {item.industry}
                </Badge>

                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <a
                href={`https://${item.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center gap-1.5 text-xs font-semibold text-[var(--color-text-muted)] group-hover:text-[var(--color-blue-glow)] transition-colors duration-200 mt-auto pt-3 border-t border-[var(--color-border)]"
                aria-label={`Visit ${item.name} website`}
              >
                View Project
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
