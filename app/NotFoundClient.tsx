'use client'

import React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'

export function NotFoundClient() {
  const prefersReduced = useReducedMotion()

  return (
    <div className="relative min-h-screen bg-[var(--color-background)] flex items-center justify-center overflow-hidden px-4">
      {/* Background orb */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: prefersReduced ? 'none' : 'float 8s ease-in-out infinite',
          willChange: 'transform',
        }}
      />

      <motion.div
        initial={prefersReduced ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative text-center max-w-lg"
      >
        {/* 404 */}
        <p
          className="text-[120px] md:text-[160px] font-bold leading-none gradient-text mb-4 select-none"
          aria-hidden="true"
        >
          404
        </p>

        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-4">
          Page Not Found
        </h1>

        {/* Message */}
        <p className="text-[var(--color-text-secondary)] leading-relaxed mb-10">
          This page doesn&apos;t exist or was moved. Let&apos;s get you back on track.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-[var(--radius-lg)] text-base font-semibold bg-[var(--color-blue)] text-white hover:bg-[var(--color-blue-bright)] shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.7)] transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Go Home
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-[var(--radius-lg)] text-base font-semibold glass border border-[var(--color-border)] text-[var(--color-text-primary)] hover:border-[var(--color-blue)] hover:bg-[rgba(37,99,235,0.08)] transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
