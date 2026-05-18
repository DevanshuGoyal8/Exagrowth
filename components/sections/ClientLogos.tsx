'use client'

import React from 'react'
import Image from 'next/image'

const logos = [
  {
    name: "Da'aem",
    file: '/logos/daaem.png',
    width: 110,
    // teal/red logo — works well inverted on dark
    invert: false,
  },
  {
    name: 'Growth Strategy Experts',
    file: '/logos/growth-strategy.png',
    width: 120,
    invert: false,
  },
  {
    name: 'Kubera Finance Group',
    file: '/logos/kubera.png',
    width: 130,
    invert: false,
  },
  {
    name: 'MagicSpells',
    file: '/logos/magicspells.png',
    width: 110,
    invert: false,
  },
  {
    name: 'Diamond Freight Systems',
    file: '/logos/diamond-freight.png',
    width: 140,
    // black logo on white — invert to white on dark
    invert: true,
  },
]

// Duplicate the list so the CSS marquee loops seamlessly
const track = [...logos, ...logos, ...logos]

export function ClientLogos() {
  return (
    <section
      className="relative py-12 border-y border-[var(--color-border)] bg-[var(--color-background)] overflow-hidden"
      aria-label="Clients and partners"
    >
      {/* Fade edges */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10"
        style={{ background: 'linear-gradient(to right, var(--color-background), transparent)' }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10"
        style={{ background: 'linear-gradient(to left, var(--color-background), transparent)' }}
      />

      {/* Eyebrow */}
      <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-8">
        Trusted By
      </p>

      {/* Marquee track */}
      <div className="flex overflow-hidden select-none" aria-hidden="true">
        <div className="flex items-center gap-16 animate-marquee whitespace-nowrap">
          {track.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex items-center justify-center shrink-0 px-2 opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <Image
                src={logo.file}
                alt={logo.name}
                width={logo.width}
                height={48}
                className={`h-10 w-auto object-contain${logo.invert ? ' brightness-0 invert' : ''}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Accessible fallback list for screen readers */}
      <ul className="sr-only">
        {logos.map((l) => (
          <li key={l.name}>{l.name}</li>
        ))}
      </ul>
    </section>
  )
}
