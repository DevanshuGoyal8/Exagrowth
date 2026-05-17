'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    quote:
      'Exagrowth transformed our salon operations with their platform. Bookings doubled in the first month.',
    author: 'Lhloba Team',
    role: 'Saudi Arabia',
  },
  {
    quote:
      'Their merchandising dashboard gave us real-time visibility we never had before. Exceptional work.',
    author: 'Daaem Solutions',
    role: 'Saudi Arabia',
  },
  {
    quote:
      'From concept to launch in 8 weeks. The team understood our niche market immediately.',
    author: 'Kubera Finance Group',
    role: 'Netherlands',
  },
  {
    quote:
      "They didn't just build a website — they built our digital strategy from the ground up.",
    author: 'Growth Strategy Experts',
    role: 'Canada',
  },
  {
    quote:
      'The haptic integration was technically complex but they delivered it flawlessly.',
    author: 'MagicSpells',
    role: 'International',
  },
]

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
    filter: 'blur(4px)',
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
    filter: 'blur(4px)',
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  }),
}

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)
  const prefersReduced = useReducedMotion()

  const next = useCallback(() => {
    setDirection(1)
    setIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    if (paused || prefersReduced) return
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [next, paused, prefersReduced])

  const current = testimonials[index]

  return (
    <section
      className="section-padding bg-[var(--color-surface)]"
      aria-labelledby="testimonials-heading"
      aria-roledescription="carousel"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            align="center"
            id="testimonials-heading"
          />
        </motion.div>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Quote card */}
          <div
            className="glass gradient-border rounded-[var(--radius-xl)] p-10 md:p-14 flex flex-col gap-8 overflow-hidden"
            aria-live="polite"
            aria-atomic="true"
          >
            {/* Big quote mark */}
            <svg
              className="text-[var(--color-blue)] opacity-40"
              width="48"
              height="36"
              viewBox="0 0 48 36"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M0 36V21.6C0 9.6 7.2 2.4 21.6 0l2.4 4.8C16.8 6.4 12.8 10 12 16.8H22.4V36H0zm25.6 0V21.6C25.6 9.6 32.8 2.4 47.2 0l2.4 4.8C42.4 6.4 38.4 10 37.6 16.8H48V36H25.6z" />
            </svg>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={prefersReduced ? {} : slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="flex flex-col gap-6"
              >
                <blockquote className="text-xl md:text-2xl text-[var(--color-text-primary)] leading-relaxed font-medium">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-[var(--color-text-primary)]">{current.author}</p>
                  <p className="text-sm text-[var(--color-text-muted)]">{current.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Prev/Next */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full glass border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-blue)] transition-all duration-200"
                aria-label="Previous testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full glass border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-blue)] transition-all duration-200"
                aria-label="Next testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>

            {/* Dot indicators */}
            <div className="flex gap-2" role="tablist" aria-label="Testimonial slides">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1)
                    setIndex(i)
                  }}
                  className={cn(
                    'rounded-full transition-all duration-300',
                    i === index
                      ? 'w-6 h-2 bg-[var(--color-blue)]'
                      : 'w-2 h-2 bg-[var(--color-border)] hover:bg-[var(--color-text-muted)]',
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
