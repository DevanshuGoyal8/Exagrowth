'use client'

import React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const WORDS_LINE1 = ['We', 'Build', 'What']
const WORDS_LINE2 = ['AI', 'Makes', 'Possible']

interface OrbStyle {
  width: number
  height: number
  top?: string
  left?: string
  right?: string
  bottom?: string
  opacity: number
  delay: number
}

const orbs: OrbStyle[] = [
  { width: 400, height: 400, top: '10%', left: '-8%', opacity: 0.12, delay: 0 },
  { width: 300, height: 300, top: '60%', right: '-6%', opacity: 0.1, delay: 1.5 },
  { width: 200, height: 200, top: '30%', right: '15%', opacity: 0.08, delay: 3 },
  { width: 250, height: 250, top: '70%', left: '20%', opacity: 0.09, delay: 2 },
  { width: 150, height: 150, top: '15%', right: '30%', opacity: 0.07, delay: 4 },
  { width: 350, height: 350, bottom: '-5%', left: '40%', opacity: 0.06, delay: 1 },
]

const stats = [
  { label: '5 Countries' },
  { label: '11+ Years' },
  { label: '10+ Industries' },
  { label: '20+ Technologies' },
]

const wordReveal = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export function Hero() {
  const prefersReduced = useReducedMotion()

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[var(--color-background)]"
      aria-label="Hero"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid pointer-events-none opacity-60" aria-hidden="true" />

      {/* Radial glow behind headline */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(37,99,235,0.18) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        aria-hidden="true"
      />

      {/* Floating orbs */}
      {!prefersReduced &&
        orbs.map((orb, i) => (
          <div
            key={i}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: orb.width,
              height: orb.height,
              top: orb.top,
              left: orb.left,
              right: orb.right,
              bottom: orb.bottom,
              opacity: orb.opacity,
              background:
                'radial-gradient(circle, var(--color-blue-bright) 0%, transparent 70%)',
              filter: 'blur(40px)',
              animation: `float ${6 + i}s ease-in-out infinite`,
              animationDelay: `${orb.delay}s`,
            }}
            aria-hidden="true"
          />
        ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 flex flex-col gap-8">
        {/* Eyebrow badge */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex"
        >
          <Badge variant="outline" className="border-[var(--color-blue)] text-[var(--color-blue-glow)]">
            AI-First Digital Transformation Agency
          </Badge>
        </motion.div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight">
          {/* Line 1 — white */}
          <span className="flex flex-wrap gap-x-5 text-[var(--color-text-primary)]">
            {WORDS_LINE1.map((word, i) => (
              <motion.span
                key={word}
                custom={i}
                variants={prefersReduced ? {} : wordReveal}
                initial="hidden"
                animate="visible"
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </span>
          {/* Line 2 — gradient */}
          <span className="flex flex-wrap gap-x-5">
            {WORDS_LINE2.map((word, i) => (
              <motion.span
                key={word}
                custom={WORDS_LINE1.length + i}
                variants={prefersReduced ? {} : wordReveal}
                initial="hidden"
                animate="visible"
                className="inline-block gradient-text"
              >
                {word}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Subtext */}
        <motion.p
          custom={0}
          variants={prefersReduced ? {} : fadeUp}
          initial="hidden"
          animate="visible"
          className="text-[var(--color-text-secondary)] text-lg md:text-xl max-w-2xl leading-relaxed"
        >
          From workflow automation to custom software — we help businesses across 5 countries
          harness AI to move faster, scale smarter, and compete fearlessly.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          custom={1}
          variants={prefersReduced ? {} : fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="/contact">
            <Button variant="primary" size="lg">
              Get A Free Audit
            </Button>
          </Link>
          <Link href="/portfolio">
            <Button variant="secondary" size="lg">
              View Our Work
            </Button>
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          custom={2}
          variants={prefersReduced ? {} : fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center gap-x-2 gap-y-3"
        >
          {stats.map((stat, i) => (
            <React.Fragment key={stat.label}>
              <span className="text-sm font-semibold text-[var(--color-text-secondary)]">
                {stat.label}
              </span>
              {i < stats.length - 1 && (
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[var(--color-blue)] opacity-70"
                  aria-hidden="true"
                />
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      {!prefersReduced && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[var(--color-text-muted)]">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-bounce"
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      )}

      {/* Float keyframe — injected as inline style */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          33% { transform: translateY(-18px) scale(1.03); }
          66% { transform: translateY(10px) scale(0.97); }
        }
      `}</style>
    </section>
  )
}
