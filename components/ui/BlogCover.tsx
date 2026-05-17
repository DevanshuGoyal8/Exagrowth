import React from 'react'

// ── Topic themes ──────────────────────────────────────────────────────────────

const themes: Record<
  string,
  { from: string; via: string; to: string; glow: string; icon: React.ReactNode }
> = {
  'AI Automation': {
    from: '#0a0f2e',
    via: '#0d1a4a',
    to: '#111827',
    glow: 'rgba(37,99,235,0.35)',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 opacity-90">
        <circle cx="32" cy="32" r="14" stroke="#3B82F6" strokeWidth="2" />
        <circle cx="32" cy="14" r="4" fill="#2563EB" />
        <circle cx="32" cy="50" r="4" fill="#2563EB" />
        <circle cx="14" cy="32" r="4" fill="#2563EB" />
        <circle cx="50" cy="32" r="4" fill="#2563EB" />
        <circle cx="19.5" cy="19.5" r="3" fill="#60A5FA" />
        <circle cx="44.5" cy="44.5" r="3" fill="#60A5FA" />
        <circle cx="44.5" cy="19.5" r="3" fill="#60A5FA" />
        <circle cx="19.5" cy="44.5" r="3" fill="#60A5FA" />
        <line x1="32" y1="18" x2="32" y2="26" stroke="#3B82F6" strokeWidth="1.5" />
        <line x1="32" y1="38" x2="32" y2="46" stroke="#3B82F6" strokeWidth="1.5" />
        <line x1="18" y1="32" x2="26" y2="32" stroke="#3B82F6" strokeWidth="1.5" />
        <line x1="38" y1="32" x2="46" y2="32" stroke="#3B82F6" strokeWidth="1.5" />
        <circle cx="32" cy="32" r="5" fill="#2563EB" />
      </svg>
    ),
  },
  'LLM Integration': {
    from: '#0a1628',
    via: '#0f2040',
    to: '#0d1117',
    glow: 'rgba(99,102,241,0.3)',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 opacity-90">
        <rect x="8" y="16" width="48" height="32" rx="4" stroke="#818CF8" strokeWidth="2" />
        <path d="M16 28h6M16 36h12M30 28h18M34 36h10" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
        <circle cx="52" cy="12" r="5" fill="#4F46E5" />
        <path d="M50 12l1.5 1.5L54 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  Security: {
    from: '#1a0505',
    via: '#2d0a0a',
    to: '#0f0a0a',
    glow: 'rgba(239,68,68,0.25)',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 opacity-90">
        <path d="M32 6L10 16v16c0 13 9.5 22 22 26 12.5-4 22-13 22-26V16L32 6z" stroke="#EF4444" strokeWidth="2" fill="rgba(239,68,68,0.08)" />
        <path d="M22 32l6 6 14-12" stroke="#F87171" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  Cybersecurity: {
    from: '#1a0505',
    via: '#2d0a0a',
    to: '#0f0a0a',
    glow: 'rgba(239,68,68,0.25)',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 opacity-90">
        <path d="M32 6L10 16v16c0 13 9.5 22 22 26 12.5-4 22-13 22-26V16L32 6z" stroke="#EF4444" strokeWidth="2" fill="rgba(239,68,68,0.08)" />
        <path d="M22 32l6 6 14-12" stroke="#F87171" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  DevOps: {
    from: '#031a1a',
    via: '#062e2e',
    to: '#041212',
    glow: 'rgba(20,184,166,0.28)',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 opacity-90">
        <rect x="8" y="10" width="48" height="12" rx="3" stroke="#14B8A6" strokeWidth="2" />
        <rect x="8" y="26" width="48" height="12" rx="3" stroke="#0D9488" strokeWidth="2" />
        <rect x="8" y="42" width="48" height="12" rx="3" stroke="#14B8A6" strokeWidth="2" />
        <circle cx="16" cy="16" r="2.5" fill="#14B8A6" />
        <circle cx="24" cy="16" r="2.5" fill="#0D9488" />
        <circle cx="16" cy="32" r="2.5" fill="#14B8A6" />
        <circle cx="24" cy="32" r="2.5" fill="#0D9488" />
        <circle cx="16" cy="48" r="2.5" fill="#14B8A6" />
        <circle cx="24" cy="48" r="2.5" fill="#0D9488" />
      </svg>
    ),
  },
  'E-commerce': {
    from: '#150a2d',
    via: '#200d45',
    to: '#0f0a1a',
    glow: 'rgba(139,92,246,0.3)',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 opacity-90">
        <path d="M8 12h4l5.5 24h29l5-18H20" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="26" cy="42" r="3" fill="#8B5CF6" />
        <circle cx="44" cy="42" r="3" fill="#8B5CF6" />
        <path d="M28 22l4 8 4-8" stroke="#C4B5FD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  Insights: {
    from: '#041a0f',
    via: '#06291a',
    to: '#031008',
    glow: 'rgba(16,185,129,0.28)',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 opacity-90">
        <path d="M8 48L20 32l10 8 12-18 14 10" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="32" r="3" fill="#10B981" />
        <circle cx="30" cy="40" r="3" fill="#34D399" />
        <circle cx="42" cy="22" r="3" fill="#10B981" />
        <circle cx="56" cy="32" r="3" fill="#34D399" />
        <line x1="8" y1="52" x2="56" y2="52" stroke="#065F46" strokeWidth="1.5" />
        <line x1="8" y1="12" x2="8" y2="52" stroke="#065F46" strokeWidth="1.5" />
      </svg>
    ),
  },
}

const fallback = {
  from: '#0a0f1e',
  via: '#111827',
  to: '#080808',
  glow: 'rgba(37,99,235,0.2)',
  icon: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 opacity-80">
      <rect x="12" y="10" width="40" height="44" rx="4" stroke="#374151" strokeWidth="2" />
      <line x1="20" y1="22" x2="44" y2="22" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" />
      <line x1="20" y1="30" x2="44" y2="30" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" />
      <line x1="20" y1="38" x2="36" y2="38" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
}

// ── Component ─────────────────────────────────────────────────────────────────

interface BlogCoverProps {
  tag: string
  /** 'card' for list/preview thumbnails, 'hero' for the full-width post header */
  variant?: 'card' | 'hero'
  className?: string
}

export function BlogCover({ tag, variant = 'card', className = '' }: BlogCoverProps) {
  const theme = themes[tag] ?? fallback

  return (
    <div
      className={`relative w-full h-full flex items-center justify-center overflow-hidden ${className}`}
      style={{
        background: `linear-gradient(135deg, ${theme.from} 0%, ${theme.via} 50%, ${theme.to} 100%)`,
      }}
      aria-hidden="true"
    >
      {/* Dot-grid texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Glow orb */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 60%, ${theme.glow} 0%, transparent 65%)`,
        }}
      />

      {/* Icon */}
      <div
        className={`relative z-10 ${variant === 'hero' ? 'scale-[2]' : ''}`}
        style={{ filter: 'drop-shadow(0 0 20px currentColor)' }}
      >
        {theme.icon}
      </div>

      {/* Tag label */}
      <div className="absolute bottom-3 left-3 z-10">
        <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 select-none">
          {tag}
        </span>
      </div>
    </div>
  )
}
