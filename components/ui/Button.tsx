'use client'

import React from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  loading?: boolean
  icon?: React.ReactNode
  asChild?: boolean
  children?: React.ReactNode
}

const variantClasses: Record<Variant, string> = {
  primary:
    'relative bg-[var(--color-blue)] text-white font-semibold overflow-hidden ' +
    'transition-all duration-300 ' +
    'hover:bg-[var(--color-blue-bright)] ' +
    'shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.7)] ' +
    'active:scale-[0.98]',
  secondary:
    'glass text-[var(--color-text-primary)] font-medium ' +
    'border border-[var(--color-border)] ' +
    'transition-all duration-300 ' +
    'hover:border-[var(--color-blue)] hover:bg-[rgba(37,99,235,0.08)] ' +
    'active:scale-[0.98]',
  ghost:
    'text-[var(--color-text-secondary)] font-medium bg-transparent border-none ' +
    'relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 ' +
    'after:bg-[var(--color-blue)] after:transition-all after:duration-300 ' +
    'hover:text-[var(--color-text-primary)] hover:after:w-full ' +
    'transition-colors duration-300',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm rounded-[var(--radius-sm)]',
  md: 'px-6 py-3 text-sm rounded-[var(--radius-md)]',
  lg: 'px-8 py-4 text-base rounded-[var(--radius-lg)]',
}

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  asChild = false,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 cursor-pointer select-none',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
    variantClasses[variant],
    sizeClasses[size],
    className,
  )

  return (
    <button className={classes} disabled={disabled || loading} {...props}>
      {loading ? (
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
      ) : icon ? (
        <span className="shrink-0">{icon}</span>
      ) : null}
      {children}
    </button>
  )
}
