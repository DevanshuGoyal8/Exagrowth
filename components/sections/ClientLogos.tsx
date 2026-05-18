'use client'

import React from 'react'
import Image from 'next/image'

const logos = [
  { name: "Da'aem",                 file: '/logos/daaem.png',               scale: 1.0 },
  { name: 'Lhloba',                 file: '/logos/lhloba.png',              scale: 1.1 },
  { name: 'Growth Strategy Experts',file: '/logos/logo-Growth-Strategy.png',scale: 1.0 },
  { name: 'Kubera Finance Group',   file: '/logos/kubera.svg',              scale: 1.1 },
  { name: 'MagicSpells',            file: '/logos/magicspell.png',          scale: 1.0 },
  { name: 'Diamond Freight Systems',file: '/logos/diamond-freight.png',     scale: 1.0 },
  { name: 'GTB',                    file: '/logos/gtb.png',                 scale: 1.0 },
]

// Triple the array so the 33.333% translate loops perfectly
const track = [...logos, ...logos, ...logos]

export function ClientLogos() {
  return (
    <section
      className="relative py-14 border-y border-[var(--color-border)] bg-[var(--color-background)] overflow-hidden"
      aria-label="Clients and partners"
    >
      {/* Fade edges */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10"
        style={{ background: 'linear-gradient(to right, var(--color-background), transparent)' }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10"
        style={{ background: 'linear-gradient(to left, var(--color-background), transparent)' }}
      />

      {/* Eyebrow */}
      <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-10">
        Trusted By
      </p>

      {/* Marquee track */}
      <div className="flex overflow-hidden select-none" aria-hidden="true">
        <div className="flex items-center gap-6 animate-marquee">
          {track.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="shrink-0 flex items-center justify-center px-6 py-3 rounded-xl border border-white/8 bg-white/4 backdrop-blur-sm hover:border-white/16 hover:bg-white/8 transition-all duration-300 group"
              style={{ minWidth: '160px', height: '72px' }}
            >
              <Image
                src={logo.file}
                alt={logo.name}
                width={140}
                height={48}
                className="object-contain transition-all duration-300 group-hover:scale-105"
                style={{
                  maxHeight: `${Math.round(44 * logo.scale)}px`,
                  width: 'auto',
                  maxWidth: '140px',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Screen-reader list */}
      <ul className="sr-only">
        {logos.map((l) => <li key={l.name}>{l.name}</li>)}
      </ul>
    </section>
  )
}
