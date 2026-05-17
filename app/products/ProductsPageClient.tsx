'use client'

import React, { useState } from 'react'
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'

// ── Pricing data ──────────────────────────────────────────────────────────────

interface PricingTier {
  name: string
  price: string
  description: string
  features: string[]
  highlight?: boolean
}

const exaStorePricing: PricingTier[] = [
  {
    name: 'Starter',
    price: '$9/mo',
    description: 'Perfect for getting started',
    features: [
      '25 products',
      'Zero commission',
      'AI product descriptions',
      'Standard checkout',
      'Email support',
    ],
  },
  {
    name: 'Growth',
    price: '$29/mo',
    description: 'For growing stores',
    features: [
      '500 products',
      'Zero commission',
      'Custom domain',
      'AI product descriptions',
      '24/7 AI agent',
      'Weekly payouts',
      'Priority support',
    ],
    highlight: true,
  },
  {
    name: 'Pro',
    price: '$69/mo',
    description: 'For serious merchants',
    features: [
      'Unlimited products',
      'Zero commission',
      'White-label branding',
      'API access',
      'Custom domain',
      'AI product descriptions',
      '24/7 AI agent',
      'Weekly payouts',
      'Dedicated support',
    ],
  },
]

const exaStoreFeatures = [
  { label: 'Zero Commission', icon: '◎' },
  { label: 'AI Product Descriptions', icon: '✦' },
  { label: '24/7 AI Agent', icon: '◈' },
  { label: '150+ Countries', icon: '◉' },
  { label: 'Weekly Payouts', icon: '◇' },
  { label: 'Custom Domains', icon: '◆' },
]

const exaFitFeatures = [
  'AI Meal Planning',
  'Photo Calorie Tracking',
  'Whoop Integration',
  'Apple Watch Integration',
  'Fitbit Integration',
  'AI Progress Analysis',
]

// ── Component ─────────────────────────────────────────────────────────────────

export function ProductsPageClient() {
  const prefersReduced = useReducedMotion()
  const [waitlistName, setWaitlistName] = useState('')
  const [waitlistEmail, setWaitlistEmail] = useState('')
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false)

  function handleWaitlist(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // UI-only — show success state
    setWaitlistSubmitted(true)
    setWaitlistName('')
    setWaitlistEmail('')
  }

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
              BUILT BY US
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 gradient-text">
              Our Products
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
              We don&apos;t just build for clients — we build for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ExaStore.ai */}
      <motion.section
        initial={prefersReduced ? false : { opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="section-padding border-b border-[var(--color-border)]"
        aria-labelledby="exastore-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <h2
              id="exastore-heading"
              className="text-4xl md:text-5xl font-bold gradient-text"
            >
              ExaStore.ai
            </h2>
            <Badge variant="success">LAUNCHED</Badge>
          </div>

          <p className="text-xl md:text-2xl font-medium text-[var(--color-text-primary)] mb-4">
            Launch your store. Let AI handle the rest.
          </p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-3xl mb-12">
            ExaStore.ai is an AI-powered e-commerce platform that gives any seller the tools
            of a Fortune 500 retailer — with zero commission on sales. Sell to 150+ countries,
            let an AI agent answer customer questions 24/7, and get paid every week.
          </p>

          {/* Feature grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
            {exaStoreFeatures.map((feat) => (
              <div
                key={feat.label}
                className="glass gradient-border rounded-[var(--radius-md)] p-5 flex items-center gap-3"
              >
                <span
                  className="text-xl text-[var(--color-blue-bright)]"
                  aria-hidden="true"
                >
                  {feat.icon}
                </span>
                <span className="text-sm font-medium text-[var(--color-text-primary)]">
                  {feat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Pricing */}
          <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-8">
            Pricing
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {exaStorePricing.map((tier) => (
              <div
                key={tier.name}
                className={[
                  'relative rounded-[var(--radius-xl)] p-8 flex flex-col gap-5 border transition-shadow duration-300',
                  tier.highlight
                    ? 'bg-gradient-to-b from-[rgba(37,99,235,0.12)] to-[rgba(37,99,235,0.04)] border-[var(--color-blue)] shadow-[0_0_40px_rgba(37,99,235,0.2)]'
                    : 'glass border-[var(--color-border)]',
                ].join(' ')}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full text-xs font-bold bg-[var(--color-blue)] text-white uppercase tracking-wider">
                      Most Popular
                    </span>
                  </div>
                )}
                <div>
                  <p className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-1">
                    {tier.name}
                  </p>
                  <p className="text-3xl font-bold text-[var(--color-text-primary)]">
                    {tier.price}
                  </p>
                  <p className="text-sm text-[var(--color-text-muted)] mt-1">
                    {tier.description}
                  </p>
                </div>
                <ul className="flex flex-col gap-2 flex-1">
                  {tier.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                      <svg
                        className="w-4 h-4 text-[var(--color-success)] shrink-0 mt-0.5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://exastore.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={[
                    'w-full text-center py-3 rounded-[var(--radius-md)] text-sm font-semibold transition-all duration-300',
                    tier.highlight
                      ? 'bg-[var(--color-blue)] text-white hover:bg-[var(--color-blue-bright)] shadow-[0_0_20px_rgba(37,99,235,0.4)]'
                      : 'glass border border-[var(--color-border)] text-[var(--color-text-primary)] hover:border-[var(--color-blue)]',
                  ].join(' ')}
                >
                  Start Free →
                </a>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ExaFit.ai */}
      <motion.section
        initial={prefersReduced ? false : { opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="section-padding"
        aria-labelledby="exafit-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[var(--radius-xl)] p-10 md:p-14 glass border border-[var(--color-border)] overflow-hidden opacity-90">
            {/* Dimming overlay */}
            <div
              className="absolute inset-0 bg-[var(--color-background)]/40 rounded-[var(--radius-xl)]"
              aria-hidden="true"
            />

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left */}
              <div>
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <h2
                    id="exafit-heading"
                    className="text-4xl md:text-5xl font-bold gradient-text"
                  >
                    ExaFit.ai
                  </h2>
                  <Badge variant="warning">COMING SOON</Badge>
                </div>

                <p className="text-xl md:text-2xl font-medium text-[var(--color-text-primary)] mb-4">
                  Your AI-powered fitness companion.
                </p>
                <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
                  ExaFit.ai combines AI meal planning, photo-based calorie tracking, and deep
                  integrations with your favourite fitness devices. Snap a photo of your plate,
                  log your workout, and let AI tell you exactly what to do next to hit your goals.
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                  {exaFitFeatures.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-[var(--color-warning)] shrink-0"
                        aria-hidden="true"
                      />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right — waitlist */}
              <div>
                <div className="glass gradient-border rounded-[var(--radius-xl)] p-8">
                  <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">
                    Join the Waitlist
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)] mb-6">
                    Be first to know when ExaFit.ai launches.
                  </p>

                  <AnimatePresence mode="wait">
                    {waitlistSubmitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-3 p-4 rounded-[var(--radius-md)] bg-[rgba(16,185,129,0.1)] border border-[rgba(16,185,129,0.3)]"
                        role="status"
                      >
                        <svg
                          className="w-5 h-5 text-[var(--color-success)] shrink-0"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <p className="text-sm font-medium text-[var(--color-success)]">
                          You&apos;re on the list!
                        </p>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        onSubmit={handleWaitlist}
                        className="flex flex-col gap-4"
                        noValidate
                      >
                        <div>
                          <label
                            htmlFor="waitlist-name"
                            className="block text-xs font-medium text-[var(--color-text-muted)] mb-1.5 uppercase tracking-wider"
                          >
                            Name
                          </label>
                          <input
                            id="waitlist-name"
                            type="text"
                            value={waitlistName}
                            onChange={(e) => setWaitlistName(e.target.value)}
                            required
                            minLength={2}
                            maxLength={100}
                            placeholder="Your name"
                            className="w-full px-4 py-3 rounded-[var(--radius-md)] bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] text-sm focus:outline-none focus:border-[var(--color-blue)] transition-colors duration-200"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="waitlist-email"
                            className="block text-xs font-medium text-[var(--color-text-muted)] mb-1.5 uppercase tracking-wider"
                          >
                            Email
                          </label>
                          <input
                            id="waitlist-email"
                            type="email"
                            value={waitlistEmail}
                            onChange={(e) => setWaitlistEmail(e.target.value)}
                            required
                            maxLength={255}
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 rounded-[var(--radius-md)] bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] text-sm focus:outline-none focus:border-[var(--color-blue)] transition-colors duration-200"
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full py-3 rounded-[var(--radius-md)] text-sm font-semibold bg-[var(--color-blue)] text-white hover:bg-[var(--color-blue-bright)] shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.7)] transition-all duration-300"
                        >
                          Notify Me
                        </button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
