'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Products', href: '/products' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)
  const lastScrollY = useRef(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY
      setScrolled(current > 20)

      if (current > lastScrollY.current + 60 && current > 150) {
        setVisible(false)
        setMobileOpen(false)
      } else if (current < lastScrollY.current - 20 || current < 80) {
        setVisible(true)
      }

      lastScrollY.current = current
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'backdrop-blur-xl border-b border-[var(--color-border)] bg-[rgba(8,8,8,0.85)]'
          : 'bg-transparent border-b border-transparent',
        visible ? 'translate-y-0' : '-translate-y-full',
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="Exagrowth — home">
            {/* Icon mark — exact recreation of brand logo */}
            <svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="shrink-0">
              <path d="M 25 4 L 8 4 Q 4 4 4 8 L 4 24 Q 4 28 8 28 L 17 28 L 28 17" stroke="#F97316" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <path d="M 22 12 L 28 17 L 23 23" stroke="#F97316" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <rect x="7"  y="20" width="3" height="6"  rx="0.8" fill="#1C1C1C"/>
              <rect x="12" y="16" width="3" height="10" rx="0.8" fill="#1C1C1C"/>
              <rect x="17" y="12" width="3" height="14" rx="0.8" fill="#1C1C1C"/>
              <rect x="22" y="8"  width="3" height="18" rx="0.8" fill="#1C1C1C"/>
            </svg>
            {/* Wordmark */}
            <span className="font-bold text-[18px] leading-none select-none text-[#F97316]">
              Exagrowth
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => {
              const active =
                link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-[var(--radius-sm)]',
                    active
                      ? 'text-[var(--color-text-primary)]'
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]',
                  )}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--color-blue)]" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className={cn(
                'px-4 py-2 text-sm font-semibold rounded-[var(--radius-md)] text-white',
                'bg-[var(--color-blue)] transition-all duration-300',
                'shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.7)]',
                'hover:bg-[var(--color-blue-bright)]',
              )}
            >
              Get A Free Audit
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 rounded-[var(--radius-sm)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span
              className={cn(
                'block w-5 h-0.5 bg-current transition-all duration-300',
                mobileOpen && 'translate-y-2 rotate-45',
              )}
            />
            <span
              className={cn(
                'block w-5 h-0.5 bg-current transition-all duration-300',
                mobileOpen && 'opacity-0',
              )}
            />
            <span
              className={cn(
                'block w-5 h-0.5 bg-current transition-all duration-300',
                mobileOpen && '-translate-y-2 -rotate-45',
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'lg:hidden overflow-hidden transition-all duration-300',
          'border-t border-[var(--color-border)] bg-[rgba(8,8,8,0.97)] backdrop-blur-xl',
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <nav className="px-4 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
          {navLinks.map((link) => {
            const active =
              link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'flex items-center gap-2 px-4 py-3 rounded-[var(--radius-sm)] text-sm font-medium transition-colors duration-200',
                  active
                    ? 'text-[var(--color-text-primary)] bg-[rgba(37,99,235,0.1)]'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[rgba(255,255,255,0.04)]',
                )}
              >
                {active && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-blue)] shrink-0" />
                )}
                {link.label}
              </Link>
            )
          })}
          <div className="pt-3 border-t border-[var(--color-border)] mt-2">
            <Link
              href="/contact"
              className={cn(
                'flex items-center justify-center px-6 py-3 rounded-[var(--radius-md)] text-sm font-semibold text-white',
                'bg-[var(--color-blue)] shadow-[0_0_20px_rgba(37,99,235,0.4)]',
              )}
            >
              Get A Free Audit
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
