'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

// ── Types ─────────────────────────────────────────────────────────────────────

interface FormState {
  name: string
  email: string
  company: string
  service: string
  message: string
  website: string // honeypot
}

const initialState: FormState = {
  name: '',
  email: '',
  company: '',
  service: '',
  message: '',
  website: '',
}

const serviceOptions = [
  'AI Consultancy',
  'Web & App Development',
  'E-commerce',
  'Cloud & DevOps',
  'Digital Marketing & SEO',
  'Cybersecurity',
  'Security Audit',
  'Other',
]

// ── Input styles ──────────────────────────────────────────────────────────────

const inputClass =
  'w-full px-4 py-3 rounded-[var(--radius-md)] bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] text-sm focus:outline-none focus:border-[var(--color-blue)] focus:ring-1 focus:ring-[var(--color-blue)] transition-colors duration-200'

const labelClass =
  'block text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-1.5'

// ── Component ─────────────────────────────────────────────────────────────────

export function ContactPageClient() {
  const prefersReduced = useReducedMotion()
  const [form, setForm] = useState<FormState>(initialState)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = (await res.json()) as { success?: boolean; error?: string }

      if (!res.ok || !data.success) {
        setStatus('error')
        setErrorMsg(data.error ?? 'Something went wrong. Please try again.')
        return
      }

      setStatus('success')
      setForm(initialState)
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Please check your connection and try again.')
    }
  }

  return (
    <div className="bg-[var(--color-background)] min-h-screen section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left column — info */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-blue)] mb-5">
                GET IN TOUCH
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight gradient-text mb-5">
                Let&apos;s Build Something Great
              </h1>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Whether you need a full digital transformation or just a security audit — we start
                with a free consultation. No pressure, no obligations.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {/* Email */}
              <a
                href="mailto:grow@exagrowth.com"
                className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200 group"
              >
                <span className="w-10 h-10 rounded-[var(--radius-md)] glass border border-[var(--color-border)] flex items-center justify-center shrink-0 group-hover:border-[var(--color-blue)] transition-colors duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                grow@exagrowth.com
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/exagrowth/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200 group"
              >
                <span className="w-10 h-10 rounded-[var(--radius-md)] glass border border-[var(--color-border)] flex items-center justify-center shrink-0 group-hover:border-[var(--color-blue)] transition-colors duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </span>
                LinkedIn
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/itsexagrowth"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200 group"
              >
                <span className="w-10 h-10 rounded-[var(--radius-md)] glass border border-[var(--color-border)] flex items-center justify-center shrink-0 group-hover:border-[var(--color-blue)] transition-colors duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </span>
                @itsexagrowth
              </a>
            </div>

            <div className="glass gradient-border rounded-[var(--radius-lg)] p-5">
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                <span className="text-[var(--color-text-primary)] font-medium">Operating across 5 countries</span>{' '}
                — we work remotely with clients worldwide. Wherever you are, we can build for you.
              </p>
            </div>
          </motion.div>

          {/* Right column — form */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <div className="glass gradient-border rounded-[var(--radius-xl)] p-8 md:p-10">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center gap-4 py-16 text-center"
                    role="status"
                  >
                    <div className="w-16 h-16 rounded-full bg-[rgba(16,185,129,0.15)] border border-[rgba(16,185,129,0.3)] flex items-center justify-center">
                      <svg
                        className="w-7 h-7 text-[var(--color-success)]"
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
                    </div>
                    <h2 className="text-xl font-bold text-[var(--color-text-primary)]">
                      Message sent!
                    </h2>
                    <p className="text-[var(--color-text-secondary)]">
                      We&apos;ll be in touch within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-4 text-sm text-[var(--color-blue)] hover:text-[var(--color-blue-bright)] transition-colors duration-200"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    noValidate
                    className="flex flex-col gap-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className={labelClass}>
                          Name <span className="text-[var(--color-error)]" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={form.name}
                          onChange={handleChange}
                          required
                          minLength={2}
                          maxLength={100}
                          placeholder="Your name"
                          className={inputClass}
                          autoComplete="name"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className={labelClass}>
                          Email <span className="text-[var(--color-error)]" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          maxLength={255}
                          placeholder="you@company.com"
                          className={inputClass}
                          autoComplete="email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Company */}
                      <div>
                        <label htmlFor="company" className={labelClass}>
                          Company <span className="text-[var(--color-text-muted)] normal-case tracking-normal font-normal">(optional)</span>
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={form.company}
                          onChange={handleChange}
                          maxLength={200}
                          placeholder="Acme Inc."
                          className={inputClass}
                          autoComplete="organization"
                        />
                      </div>

                      {/* Service */}
                      <div>
                        <label htmlFor="service" className={labelClass}>
                          Service Interest
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className={cn(
                            inputClass,
                            'appearance-none cursor-pointer',
                            form.service === '' && 'text-[var(--color-text-muted)]',
                          )}
                        >
                          <option value="">Select a service...</option>
                          {serviceOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className={labelClass}>
                        Message <span className="text-[var(--color-error)]" aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        minLength={10}
                        maxLength={2000}
                        rows={5}
                        placeholder="Tell us about your project, timeline, and any relevant context..."
                        className={cn(inputClass, 'resize-none')}
                      />
                    </div>

                    {/* Honeypot — hidden from real users */}
                    <input
                      type="text"
                      name="website"
                      value={form.website}
                      onChange={handleChange}
                      className="hidden"
                      tabIndex={-1}
                      aria-hidden="true"
                      autoComplete="off"
                    />

                    {/* Error message */}
                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-start gap-2 p-3 rounded-[var(--radius-md)] bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.3)]"
                        role="alert"
                      >
                        <svg
                          className="w-4 h-4 text-[var(--color-error)] shrink-0 mt-0.5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="12" />
                          <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        <p className="text-sm text-[var(--color-error)]">{errorMsg}</p>
                      </motion.div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className={cn(
                        'w-full py-4 rounded-[var(--radius-md)] text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2',
                        'bg-[var(--color-blue)] text-white hover:bg-[var(--color-blue-bright)]',
                        'shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.7)]',
                        'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
                      )}
                    >
                      {status === 'loading' ? (
                        <>
                          <svg
                            className="animate-spin h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
