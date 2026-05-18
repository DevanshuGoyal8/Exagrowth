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
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group" aria-label="Exagrowth — home">
            {/* Icon mark */}
            <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="shrink-0">
              <defs>
                <linearGradient id="hb1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#60A5FA"/>
                  <stop offset="100%" stopColor="#2563EB"/>
                </linearGradient>
                <linearGradient id="hb2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#93C5FD"/>
                  <stop offset="100%" stopColor="#3B82F6"/>
                </linearGradient>
                <linearGradient id="hb3" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#BFDBFE"/>
                  <stop offset="100%" stopColor="#60A5FA"/>
                </linearGradient>
                <filter id="hglow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="1" result="blur"/>
                  <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
              </defs>
              <rect x="5"  y="21" width="6" height="9"  rx="1.5" fill="url(#hb1)"/>
              <rect x="15" y="14" width="6" height="16" rx="1.5" fill="url(#hb2)"/>
              <rect x="25" y="7"  width="6" height="23" rx="1.5" fill="url(#hb3)" opacity="0.85"/>
              <path d="M25 12 L31 6 M26 6 L31 6 L31 11" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" filter="url(#hglow)"/>
            </svg>
            {/* Wordmark */}
            <span className="flex items-baseline gap-0 leading-none select-none">
              <span className="font-extrabold text-[17px] tracking-tight text-white">Exa</span>
              <span className="font-light text-[17px] tracking-wide text-slate-400">growth</span>
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
