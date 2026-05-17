import React from 'react'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  eyebrow?: string
  heading: React.ReactNode
  description?: string
  align?: 'left' | 'center'
  blueLine?: boolean
  gradientHeading?: boolean
  className?: string
  id?: string
}

export function SectionHeader({
  eyebrow,
  heading,
  description,
  align = 'left',
  blueLine = false,
  gradientHeading = false,
  className,
  id,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        blueLine && 'blue-line',
        className,
      )}
    >
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-blue)]">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={cn(
          'text-3xl md:text-4xl lg:text-5xl font-bold leading-tight',
          gradientHeading ? 'gradient-text' : 'text-[var(--color-text-primary)]',
        )}
      >
        {heading}
      </h2>
      {description && (
        <p
          className={cn(
            'text-[var(--color-text-secondary)] text-lg leading-relaxed',
            align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-2xl',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
