'use client'

import React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'

const features = [
  {
    title: 'Workflow Automation',
    description:
      'We map your existing processes and automate repetitive tasks using AI agents — slashing hours of manual work into seconds.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'LLM Integration',
    description:
      'Connect GPT-4o, Claude, Gemini and open-source models directly into your internal tools, CRMs, and customer interfaces.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
  {
    title: 'AI Agent Development',
    description:
      'We build autonomous agents that handle specific business tasks — from customer support triage to data enrichment pipelines — without human handholding.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
  },
  {
    title: 'Data & Analytics AI',
    description:
      'Transform raw business data into predictions, recommendations, and automated insights your team can actually act on.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export function AIConsultancy() {
  const prefersReduced = useReducedMotion()

  return (
    <section
      className="relative overflow-hidden section-padding"
      style={{
        background: 'linear-gradient(180deg, #0a0f1e 0%, #080808 100%)',
      }}
      aria-labelledby="ai-consultancy-heading"
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(rgba(37,99,235,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.06) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      {/* Large glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          {/* Left — text + cards */}
          <div className="flex-1 flex flex-col gap-10">
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeader
                eyebrow="Our Speciality"
                heading={<>AI That Works For<br />Your Business</>}
                description="We don't just talk about AI — we implement it. Our consultants embed directly with your team to automate workflows, integrate LLMs, and build systems that compound."
                align="left"
                id="ai-consultancy-heading"
              />
            </motion.div>

            {/* 2x2 feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  custom={i}
                  variants={prefersReduced ? {} : cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: prefersReduced ? 0 : -4, transition: { duration: 0.2 } }}
                  className="gradient-border rounded-[var(--radius-lg)] p-6 flex flex-col gap-4 cursor-default"
                  style={{
                    background: 'rgba(15,15,15,0.8)',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.4)',
                    willChange: 'transform',
                  }}
                >
                  <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-[rgba(37,99,235,0.15)] flex items-center justify-center text-[var(--color-blue-glow)]">
                    {feature.icon}
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-base font-semibold text-[var(--color-text-primary)]">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={prefersReduced ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-[var(--color-blue-glow)] font-semibold hover:text-white transition-colors duration-200 group"
              >
                See How We Do It
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:translate-x-1 transition-transform duration-200"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Right — animated concentric rings diagram */}
          <div className="lg:w-80 xl:w-96 flex items-center justify-center self-center shrink-0">
            <div className="relative w-72 h-72 lg:w-80 lg:h-80" aria-hidden="true">
              {/* Rings */}
              {[140, 110, 80, 50].map((r, i) => (
                <div
                  key={r}
                  className="absolute rounded-full border border-[rgba(37,99,235,0.25)]"
                  style={{
                    width: r * 2,
                    height: r * 2,
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    animation: prefersReduced
                      ? 'none'
                      : `ring-pulse ${3 + i * 0.8}s ease-in-out infinite`,
                    animationDelay: `${i * 0.5}s`,
                  }}
                />
              ))}

              {/* Center dot */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[var(--color-blue)]"
                style={{
                  boxShadow: '0 0 20px rgba(37,99,235,0.8), 0 0 40px rgba(37,99,235,0.4)',
                  animation: prefersReduced ? 'none' : 'glow-pulse 2s ease-in-out infinite',
                }}
              />

              {/* Node dots on rings — positions pre-calculated to avoid SSR/client float mismatch */}
              {[
                { cx: 80,      cy: 0 },
                { cx: -40,     cy: 69.28 },
                { cx: -40,     cy: -69.28 },
                { cx: 55,      cy: 95.26 },
                { cx: -110,    cy: 0 },
                { cx: 55,      cy: -95.26 },
                { cx: 121.24,  cy: 70 },
                { cx: -121.24, cy: 70 },
                { cx: 0,       cy: -140 },
              ].map(({ cx, cy }, idx) => (
                <div
                  key={idx}
                  className="absolute w-2.5 h-2.5 rounded-full bg-[var(--color-blue-bright)]"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `translate(calc(-50% + ${cx}px), calc(-50% + ${cy}px))`,
                    boxShadow: '0 0 6px rgba(59,130,246,0.8)',
                    animation: prefersReduced
                      ? 'none'
                      : `node-blink ${2 + (idx % 3) * 0.7}s ease-in-out infinite`,
                    animationDelay: `${idx * 0.3}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ring-pulse {
          0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.7; transform: translate(-50%, -50%) scale(1.03); }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(37,99,235,0.8), 0 0 40px rgba(37,99,235,0.4); }
          50% { box-shadow: 0 0 30px rgba(37,99,235,1), 0 0 60px rgba(37,99,235,0.6); }
        }
        @keyframes node-blink {
          0%, 100% { opacity: 0.5; transform: translate(calc(-50% + var(--cx, 0px)), calc(-50% + var(--cy, 0px))) scale(1); }
          50% { opacity: 1; transform: translate(calc(-50% + var(--cx, 0px)), calc(-50% + var(--cy, 0px))) scale(1.4); }
        }
      `}</style>
    </section>
  )
}
