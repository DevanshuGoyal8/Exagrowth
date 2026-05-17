'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'

// ── Data ──────────────────────────────────────────────────────────────────────

const testimonials = [
  {
    quote:
      'We went from managing bookings on WhatsApp to a fully automated platform handling 300+ appointments a day. Exagrowth understood our market — Arabic RTL, Saudi payment gateways, everything.',
    metric: '300+ daily bookings automated',
    author: 'Co-founder',
    company: 'Lhloba',
    country: 'Saudi Arabia',
    flag: '🇸🇦',
    initials: 'LH',
    colors: ['#7C3AED', '#A855F7'] as [string, string],
  },
  {
    quote:
      'The real-time merchandising dashboard eliminated our weekly reporting cycle entirely. Field agents update stock in the field, HQ sees it instantly. Game changer for our operations.',
    metric: 'Weekly reports → live data',
    author: 'Head of Operations',
    company: 'Daaem Solutions',
    country: 'Saudi Arabia',
    flag: '🇸🇦',
    initials: 'DS',
    colors: ['#059669', '#10B981'] as [string, string],
  },
  {
    quote:
      '8 weeks from kickoff to a live mortgage advisory platform. The trust-forward design and multi-language support drove our first qualified lead in week one. Exceptional execution.',
    metric: 'Live in 8 weeks, leads in week 1',
    author: 'Founder',
    company: 'Kubera Finance Group',
    country: 'Netherlands',
    flag: '🇳🇱',
    initials: 'KF',
    colors: ['#D97706', '#F59E0B'] as [string, string],
  },
  {
    quote:
      "Syncing haptic feedback with audio and visual cues across iOS and Android is genuinely hard. Exagrowth's team understood the accessibility requirements immediately and shipped it right.",
    metric: 'Cross-platform haptic engine delivered',
    author: 'Product Lead',
    company: 'MagicSpells',
    country: 'USA',
    flag: '🇺🇸',
    initials: 'MS',
    colors: ['#E11D48', '#F43F5E'] as [string, string],
  },
  {
    quote:
      "500 frameworks, a CMS the whole team can actually use, and an SEO architecture that's driving organic leads. They didn't build us a website — they built our growth engine.",
    metric: 'Organic traffic from launch week',
    author: 'Managing Director',
    company: 'Growth Strategy Experts',
    country: 'Canada',
    flag: '🇨🇦',
    initials: 'GS',
    colors: ['#2563EB', '#3B82F6'] as [string, string],
  },
]

// ── Star rating ───────────────────────────────────────────────────────────────

function Stars() {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="#F59E0B"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

// ── Avatar chip ───────────────────────────────────────────────────────────────

function Avatar({ initials, colors }: { initials: string; colors: [string, string] }) {
  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
      style={{
        background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`,
        boxShadow: `0 2px 12px ${colors[0]}50`,
      }}
      aria-hidden="true"
    >
      <span className="text-white font-bold text-xs tracking-tight select-none">
        {initials}
      </span>
    </div>
  )
}

// ── Component ─────────────────────────────────────────────────────────────────

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export function Testimonials() {
  const prefersReduced = useReducedMotion()

  return (
    <section
      className="section-padding bg-[var(--color-surface)]"
      aria-labelledby="testimonials-heading"
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
            eyebrow="Client Stories"
            heading="What Our Clients Say"
            description="Real results from teams who trusted us to build their digital foundation."
            align="center"
            id="testimonials-heading"
          />
        </motion.div>

        {/* First row — 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {testimonials.slice(0, 3).map((t, i) => (
            <TestimonialCard key={t.company} testimonial={t} index={i} prefersReduced={!!prefersReduced} />
          ))}
        </div>

        {/* Second row — 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:max-w-2xl lg:max-w-3xl mx-auto">
          {testimonials.slice(3).map((t, i) => (
            <TestimonialCard key={t.company} testimonial={t} index={i + 3} prefersReduced={!!prefersReduced} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Card sub-component ────────────────────────────────────────────────────────

type Testimonial = (typeof testimonials)[number]

function TestimonialCard({
  testimonial: t,
  index,
  prefersReduced,
}: {
  testimonial: Testimonial
  index: number
  prefersReduced: boolean
}) {
  return (
    <motion.div
      custom={index}
      variants={prefersReduced ? {} : cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="glass gradient-border rounded-[var(--radius-xl)] p-7 flex flex-col gap-5 relative overflow-hidden group"
      style={{ willChange: 'transform' }}
    >
      {/* Subtle color wash on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[var(--radius-xl)]"
        style={{
          background: `radial-gradient(ellipse at bottom right, ${t.colors[0]}10 0%, transparent 65%)`,
        }}
        aria-hidden="true"
      />

      {/* Stars */}
      <Stars />

      {/* Quote */}
      <blockquote className="text-[var(--color-text-secondary)] text-sm leading-relaxed flex-1">
        &ldquo;{t.quote}&rdquo;
      </blockquote>

      {/* Metric callout */}
      <div
        className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold w-fit"
        style={{
          background: `${t.colors[0]}18`,
          color: t.colors[1],
          border: `1px solid ${t.colors[0]}30`,
        }}
      >
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
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
        {t.metric}
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-border)]">
        <Avatar initials={t.initials} colors={t.colors} />
        <div>
          <p className="text-sm font-semibold text-[var(--color-text-primary)]">
            {t.author}
          </p>
          <p className="text-xs text-[var(--color-text-muted)] flex items-center gap-1">
            <span aria-hidden="true">{t.flag}</span>
            {t.company} · {t.country}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
