import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const serviceLinks = [
  { label: 'Web & App Development', href: '/services#web-app' },
  { label: 'E-commerce Development', href: '/services#ecommerce' },
  { label: 'Cloud & DevOps', href: '/services#cloud-devops' },
  { label: 'Digital Marketing & SEO', href: '/services#marketing' },
  { label: 'Cybersecurity', href: '/services#cybersecurity' },
  { label: 'Security Audit', href: '/services#security-audit' },
]

const productLinks = [
  { label: 'ExaStore.ai', href: 'https://exastore.ai', external: true },
  { label: 'ExaFit.ai', href: '/products#exafit', external: false },
]

const companyLinks = [
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Services', href: '/services' },
]

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-[var(--color-surface)] border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Exagrowth"
                width={180}
                height={36}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
              We build what AI makes possible.
            </p>
            <a
              href="mailto:grow@exagrowth.com"
              className="text-sm text-[var(--color-blue-glow)] hover:text-white transition-colors duration-200"
            >
              grow@exagrowth.com
            </a>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/in/exagrowth/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Exagrowth on LinkedIn"
                className="text-[var(--color-text-muted)] hover:text-[var(--color-blue-glow)] transition-colors duration-200"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://instagram.com/itsexagrowth"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Exagrowth on Instagram"
                className="text-[var(--color-text-muted)] hover:text-[var(--color-blue-glow)] transition-colors duration-200"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Services column */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
              Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products column */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
              Products
            </h3>
            <ul className="flex flex-col gap-2.5">
              {productLinks.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
              Company
            </h3>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 h-px w-full bg-[var(--color-blue)] opacity-30" />

        {/* Bottom row */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-text-muted)]">
            © 2025 Exagrowth. All rights reserved.
          </p>
          <p className="text-xs text-[var(--color-text-muted)]">
            Built with AI. Deployed globally.
          </p>
        </div>
      </div>
    </footer>
  )
}
