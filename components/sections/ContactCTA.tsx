'use client'

import React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'

export function ContactCTA() {
  const prefersReduced = useReducedMotion()

  return (
    <section
      className="relative overflow-hidden section-padding"
      aria-label="Call to action"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--color-background)]" aria-hidden="true" />

      {/* Blue glow orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(37,99,235,0.22) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
        aria-hidden="true"
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(37,99,235,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.08) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-8">
        <motion.p
          initial={prefersReduced ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-blue)]"
        >
          Let&rsquo;s Work Together
        </motion.p>

        <motion.h2
          initial={prefersReduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text-primary)] leading-tight"
        >
          Ready to Transform<br />
          <span className="gradient-text">Your Business?</span>
        </motion.h2>

        <motion.p
          initial={prefersReduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-[var(--color-text-secondary)] max-w-xl"
        >
          Let&rsquo;s talk about what AI can do for your team. Free audit, no commitment.
        </motion.p>

        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[var(--radius-lg)] text-base font-semibold text-white bg-[var(--color-blue)] hover:bg-[var(--color-blue-bright)] transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.7)]"
          >
            Get A Free Audit
          </Link>

          <a
            href="mailto:grow@exagrowth.com"
            className="relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[var(--radius-lg)] text-base font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] bg-transparent border border-[var(--color-border)] hover:border-[var(--color-blue)] transition-all duration-200"
          >
            grow@exagrowth.com
          </a>
        </motion.div>
      </div>
    </section>
  )
}
