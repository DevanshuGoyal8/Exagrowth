'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const exaStoreFeatures = [
  'Zero commission on all sales',
  'AI-powered store management',
  '150+ countries supported',
  '24/7 AI agent customer support',
]

const exaFitFeatures = [
  'AI meal plans tailored to you',
  'Calorie tracking from photos',
  'Fitness band integration (Whoop, Apple Watch, Fitbit)',
  'AI-generated next-step recommendations',
]

export function Products() {
  const prefersReduced = useReducedMotion()

  return (
    <section
      className="section-padding bg-[var(--color-surface)]"
      aria-labelledby="products-heading"
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
            eyebrow="Our Products"
            heading="Built By Us, For Everyone"
            description="We don't just build for clients — we ship our own products too."
            align="center"
            id="products-heading"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ExaStore.ai */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-[var(--radius-xl)] overflow-hidden flex flex-col gap-6 p-8"
            style={{
              background: 'var(--color-surface-2)',
              border: '1px solid var(--color-border)',
              borderTopColor: 'var(--color-blue)',
              borderTopWidth: '2px',
            }}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">
                Exa<span className="gradient-text">Store.ai</span>
              </h3>
              <Badge variant="success">LAUNCHED</Badge>
            </div>

            <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
              Launch your store. Let AI handle the rest.
            </p>

            <ul className="flex flex-col gap-3">
              {exaStoreFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-success)] shrink-0" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>

            <p className="text-xs text-[var(--color-text-muted)] font-medium uppercase tracking-widest">
              From $9/month
            </p>

            <a
              href="https://exastore.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-[var(--radius-md)] text-sm font-semibold text-white bg-[var(--color-blue)] hover:bg-[var(--color-blue-bright)] transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.7)] self-start"
            >
              Visit ExaStore.ai
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
          </motion.div>

          {/* ExaFit.ai */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-[var(--radius-xl)] overflow-hidden flex flex-col gap-6 p-8"
            style={{
              background: 'var(--color-surface-2)',
              border: '1px solid var(--color-border)',
              opacity: 0.85,
            }}
          >
            {/* Diagonal watermark */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
              aria-hidden="true"
            >
              <span
                className="text-[var(--color-border)] font-black text-7xl tracking-widest opacity-40 rotate-[-30deg] whitespace-nowrap"
              >
                COMING SOON
              </span>
            </div>

            <div className="relative flex items-center justify-between">
              <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">
                Exa<span className="gradient-text">Fit.ai</span>
              </h3>
              <Badge variant="warning">COMING SOON</Badge>
            </div>

            <p className="relative text-[var(--color-text-secondary)] text-lg leading-relaxed">
              Your AI-powered fitness companion.
            </p>

            <ul className="relative flex flex-col gap-3">
              {exaFitFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-warning)] shrink-0" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="relative self-start">
              <Button variant="secondary" size="md" disabled>
                Join Waitlist
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
