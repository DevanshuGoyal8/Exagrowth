'use client'

import React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils'

// ── Icons ─────────────────────────────────────────────────────────────────────

function IconCode({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

function IconShoppingBag({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 2 3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  )
}

function IconCloud({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
    </svg>
  )
}

function IconChart({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  )
}

function IconShield({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function IconShieldSearch({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <circle cx="11" cy="11" r="3" />
      <line x1="13.5" y1="13.5" x2="16" y2="16" />
    </svg>
  )
}

// ── Data ──────────────────────────────────────────────────────────────────────

type ServiceIconComponent = React.ComponentType<{ className?: string }>

interface Service {
  id: string
  title: string
  icon: ServiceIconComponent
  highlighted: boolean
  badge: string | null
  paragraphs: string[]
  bullets: string[]
}

const services: Service[] = [
  {
    id: 'web-app',
    title: 'Web & App Development',
    icon: IconCode,
    highlighted: false,
    badge: null,
    paragraphs: [
      'We design and build production-grade web and mobile applications using React, Next.js, and TypeScript — engineered for performance, accessibility, and long-term maintainability.',
      'Every project is mobile-first, rigorously tested, and deployed on modern infrastructure. From MVPs to enterprise platforms, we handle the full lifecycle: architecture, design system, API layer, CI/CD, and beyond.',
      'We have shipped 20+ custom platforms across SaaS, logistics, finance, and e-commerce — each tuned to the market it serves.',
    ],
    bullets: [
      'React 19 · Next.js 15 · TypeScript strict',
      'React Native & Expo for iOS/Android',
      'REST & GraphQL API design',
      'Accessibility (WCAG 2.1 AA)',
      'Performance optimisation & Core Web Vitals',
      'RTL / Arabic internationalisation',
    ],
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Development',
    icon: IconShoppingBag,
    highlighted: false,
    badge: null,
    paragraphs: [
      'We build online stores that convert — whether that means a headless Shopify storefront, a WooCommerce powerhouse, or a fully custom commerce platform built from scratch.',
      'From product catalogue to checkout to post-purchase, we wire up payments, inventory, fulfilment, and analytics into a unified system. Multi-currency, multi-region, and multi-language support comes standard.',
      'We have launched stores for B2B suppliers, specialty retailers, and consumer brands across North America, the Middle East, and Europe.',
    ],
    bullets: [
      'Shopify Hydrogen · headless storefronts',
      'WooCommerce · custom PHP plugins',
      'Stripe · PayPal · regional payment gateways',
      'Inventory & warehouse integrations',
      'Order management systems',
      'Product feed syndication (Google, Meta)',
    ],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    icon: IconCloud,
    highlighted: false,
    badge: null,
    paragraphs: [
      'We architect cloud infrastructure that scales with your business — not your headaches. AWS, GCP, and Azure are all in our toolkit, and we pick the best fit for each workload.',
      'Our DevOps practice covers everything from zero-downtime deployments to full observability stacks. Kubernetes clusters, Docker compose environments, GitHub Actions pipelines, Terraform modules — we write infrastructure as code so your environments are reproducible and auditable.',
      'We have reduced deployment times by 80% and infrastructure costs by 40% for clients by rationalising their cloud estate.',
    ],
    bullets: [
      'AWS · GCP · Azure cloud architecture',
      'Docker · Kubernetes · Helm',
      'CI/CD with GitHub Actions · GitLab CI',
      'Terraform · Pulumi infrastructure as code',
      'Prometheus · Grafana · Datadog observability',
      'Cloudflare edge networking & WAF',
    ],
  },
  {
    id: 'marketing-seo',
    title: 'Digital Marketing & SEO',
    icon: IconChart,
    highlighted: false,
    badge: null,
    paragraphs: [
      'We drive compounding, measurable growth through a combination of technical SEO, paid media, content strategy, and conversion rate optimisation — all tied back to revenue, not vanity metrics.',
      'Our SEO work is deeply technical: structured data, Core Web Vitals, crawl budget management, and international hreflang — as well as programmatic content at scale. On the paid side, we manage Google Ads and Meta campaigns with disciplined ROAS targets.',
      'We have tripled organic traffic for clients within 6 months and regularly deliver sub-$10 CPAs on paid channels in competitive verticals.',
    ],
    bullets: [
      'Technical SEO audits & remediation',
      'Programmatic content & keyword strategy',
      'Google Ads · Meta Ads management',
      'Conversion rate optimisation (CRO)',
      'GA4 · Looker Studio analytics reporting',
      'Link building & digital PR',
    ],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    icon: IconShield,
    highlighted: false,
    badge: null,
    paragraphs: [
      'Security is not a checkbox — it is an ongoing practice. We embed security thinking at every stage of the software development lifecycle, from threat modelling in design to automated scanning in CI/CD.',
      'Our team conducts vulnerability assessments, designs secure cloud architectures, and trains development teams on secure coding practices. We work with startups protecting user data and enterprises hardening critical infrastructure.',
      'We follow OWASP, CIS Benchmarks, and NIST frameworks — and translate them into practical, prioritised recommendations your team can actually implement.',
    ],
    bullets: [
      'Vulnerability assessments & risk scoring',
      'Secure architecture design & review',
      'Threat modelling (STRIDE, PASTA)',
      'Cloud security posture management',
      'Developer security training',
      'Incident response planning',
    ],
  },
  {
    id: 'security-audit',
    title: 'Security Audit',
    icon: IconShieldSearch,
    highlighted: true,
    badge: 'SPECIALITY',
    paragraphs: [
      'Our flagship security audit service combines Static Application Security Testing (SAST) with Dynamic Application Security Testing (DAST) and manual penetration testing — giving you a complete view of your attack surface.',
      'We use industry-leading tools including Semgrep and SonarQube for static analysis, OWASP ZAP and Burp Suite for dynamic testing, and Snyk / OWASP Dependency-Check for open-source vulnerability scanning. Every finding is risk-rated and comes with a prioritised remediation plan.',
      'Audits conclude with a detailed report suitable for enterprise procurement teams, investors, and regulatory bodies — plus a follow-up re-test to verify fixes.',
    ],
    bullets: [
      'SAST — Semgrep · SonarQube · CodeQL',
      'DAST — OWASP ZAP · Burp Suite Pro',
      'Penetration testing (web, API, mobile)',
      'Dependency scanning — Snyk · OWASP Dep-Check',
      'Compliance reviews (SOC 2, ISO 27001, GDPR)',
      'Executive + technical findings report',
    ],
  },
]

// ── Animation variants ────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

// ── Page component ────────────────────────────────────────────────────────────

export function ServicesPageClient() {
  const prefersReduced = useReducedMotion()

  return (
    <div className="bg-[var(--color-background)] min-h-screen">
      {/* Hero */}
      <section className="section-padding border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-blue)] mb-5">
              WHAT WE DO
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 gradient-text">
              End-to-End Digital Services
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
              From a React app to a cloud architecture to a penetration test — we cover
              the full stack of what modern businesses need to build, grow, and secure
              their digital presence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {services.map((service, i) => {
          const isEven = i % 2 === 0
          const Icon = service.icon

          return (
            <motion.section
              key={service.id}
              id={service.id}
              custom={i}
              variants={prefersReduced ? {} : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="py-20 border-b border-[var(--color-border)] last:border-0"
              aria-labelledby={`${service.id}-heading`}
            >
              <div
                className={cn(
                  'grid grid-cols-1 lg:grid-cols-2 gap-12 items-center',
                  !isEven && 'lg:[&>*:first-child]:order-2',
                )}
              >
                {/* Visual panel */}
                <div
                  className={cn(
                    'relative rounded-[var(--radius-xl)] p-10 flex flex-col items-center justify-center min-h-[320px] overflow-hidden',
                    service.highlighted
                      ? 'bg-gradient-to-br from-[var(--color-blue)] via-[var(--color-blue-dim)] to-[rgba(37,99,235,0.25)] glow-blue'
                      : 'glass gradient-border',
                  )}
                >
                  <div
                    className="absolute inset-0 dot-grid opacity-20 rounded-[var(--radius-xl)]"
                    aria-hidden="true"
                  />
                  <div className="relative flex flex-col items-center gap-6 text-center">
                    <div
                      className={cn(
                        'w-20 h-20 rounded-[var(--radius-lg)] flex items-center justify-center',
                        service.highlighted
                          ? 'bg-white/10 border border-white/20'
                          : 'bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.3)]',
                      )}
                    >
                      <Icon
                        className={cn(
                          'w-9 h-9',
                          service.highlighted
                            ? 'text-white'
                            : 'text-[var(--color-blue-bright)]',
                        )}
                      />
                    </div>
                    <p
                      className={cn(
                        'text-sm font-medium leading-relaxed max-w-xs',
                        service.highlighted
                          ? 'text-blue-100'
                          : 'text-[var(--color-text-secondary)]',
                      )}
                    >
                      {service.bullets.slice(0, 3).join(' · ')}
                    </p>
                  </div>
                </div>

                {/* Content panel */}
                <div className="flex flex-col gap-6">
                  {service.badge && (
                    <div>
                      <Badge variant="blue">{service.badge}</Badge>
                    </div>
                  )}

                  <h2
                    id={`${service.id}-heading`}
                    className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] leading-tight"
                  >
                    {service.title}
                  </h2>

                  <div className="flex flex-col gap-4">
                    {service.paragraphs.map((para, pi) => (
                      <p key={pi} className="text-[var(--color-text-secondary)] leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                    {service.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]"
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-blue)] shrink-0"
                          aria-hidden="true"
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className={cn(
                        'inline-flex items-center gap-2 px-6 py-3 rounded-[var(--radius-md)] text-sm font-semibold transition-all duration-300',
                        service.highlighted
                          ? 'bg-white text-[var(--color-blue)] hover:bg-blue-50 shadow-[0_0_20px_rgba(255,255,255,0.15)]'
                          : 'bg-[var(--color-blue)] text-white hover:bg-[var(--color-blue-bright)] shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.7)]',
                      )}
                    >
                      Get a Free Consultation
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
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.section>
          )
        })}
      </div>

      {/* Bottom CTA banner */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass gradient-border rounded-[var(--radius-xl)] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-3">
                Not sure which service fits? Let&apos;s talk.
              </h2>
              <p className="text-[var(--color-text-secondary)]">
                Free, no-pressure consultation. We&apos;ll help you figure out the best approach.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-[var(--radius-lg)] text-base font-semibold bg-[var(--color-blue)] text-white hover:bg-[var(--color-blue-bright)] shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.7)] transition-all duration-300"
            >
              Contact Us
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
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
