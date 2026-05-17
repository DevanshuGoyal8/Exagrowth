import React from 'react'
import { cn } from '@/lib/utils'

type Variant = 'blue' | 'outline' | 'success' | 'warning' | 'ghost'

interface BadgeProps {
  variant?: Variant
  children: React.ReactNode
  className?: string
}

const variantClasses: Record<Variant, string> = {
  blue: 'bg-[var(--color-blue)] text-white border-transparent',
  outline:
    'bg-transparent text-[var(--color-text-secondary)] border-[var(--color-border)]',
  success:
    'bg-[rgba(16,185,129,0.15)] text-[var(--color-success)] border-[rgba(16,185,129,0.3)]',
  warning:
    'bg-[rgba(245,158,11,0.15)] text-[var(--color-warning)] border-[rgba(245,158,11,0.3)]',
  ghost:
    'bg-[rgba(255,255,255,0.05)] text-[var(--color-text-muted)] border-[var(--color-border)]',
}

export function Badge({ variant = 'blue', children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border',
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
