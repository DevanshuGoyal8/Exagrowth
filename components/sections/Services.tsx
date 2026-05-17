'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils'

const services = [
  {
    title: 'Web & App Development',
    description:
      'Custom web and mobile platforms built with React, Next.js, and modern stacks — optimised for speed, scale, and conversion.',
    badge: null,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: 'E-commerce Development',
    description:
      'Shopify stores, custom carts, payment gateway integrations, and multi-currency checkout — built to sell.',
    badge: null,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
  },
  {
    title: 'Cloud & DevOps',
    description:
      'AWS, GCP, and Azure infrastructure-as-code, CI/CD pipelines, container orchestration, and 24/7 monitoring.',
    badge: null,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
  },
  {
    title: 'Digital Marketing & SEO',
    description:
      'Growth strategy, paid campaigns, content marketing, and technical SEO to drive qualified traffic and compound returns.',
    badge: null,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: 'Cybersecurity',
    description:
      'Vulnerability assessment, threat modelling, security architecture design, and incident response planning.',
    badge: null,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Security Audit',
    description:
      'SAST, DAST, and manual penetration testing across your web, mobile, and API surfaces. Full compliance reporting.',
    badge: 'NEW',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803m10.607 0A7.5 7.5 0 0010.5 18.75" />
      </svg>
    ),
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

export function Services() {
  const prefersReduced = useReducedMotion()

  return (
    <section
      className="section-padding bg-[var(--color-background)]"
      aria-labelledby="services-heading"
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
            eyebrow="What We Do"
            heading="End-to-End Digital Services"
            description="From idea to deployment — we cover every layer of the modern digital stack."
            align="center"
            id="services-heading"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={prefersReduced ? {} : cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={
                prefersReduced
                  ? {}
                  : {
                      y: -6,
                      boxShadow: '0 0 30px rgba(37,99,235,0.25)',
                      transition: { duration: 0.2 },
                    }
              }
              className={cn(
                'glass gradient-border rounded-[var(--radius-lg)] p-7 flex flex-col gap-5',
                'transition-shadow duration-300',
              )}
              style={{ willChange: 'transform' }}
            >
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 rounded-[var(--radius-sm)] bg-[rgba(37,99,235,0.12)] flex items-center justify-center text-[var(--color-blue-glow)] shrink-0">
                  {service.icon}
                </div>
                {service.badge && <Badge variant="blue">{service.badge}</Badge>}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                  {service.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
