'use client'

import React from 'react'
import Image from 'next/image'

const logos = [
  { name: "Da'aem",                  file: '/logos/daaem.png'                },
  { name: 'Lhloba',                  file: '/logos/lhloba.png'               },
  { name: 'Growth Strategy Experts', file: '/logos/logo-Growth-Strategy.png' },
  { name: 'Kubera Finance Group',    file: '/logos/kubera.svg'               },
  { name: 'MagicSpells',             file: '/logos/magicspell.png'           },
  { name: 'Diamond Freight Systems', file: '/logos/diamond-freight.png'      },
  { name: 'GTB',                     file: '/logos/gtb.png'                  },
]

// Triple so the 33.333% CSS translate loops seamlessly
const track = [...logos, ...logos, ...logos]

export function ClientLogos() {
  return (
    <section
      className="relative py-14 border-y border-[var(--color-border)] bg-[var(--color-background)] overflow-hidden"
      aria-label="Clients and partners"
    >
      {/* Fade edges */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-40 z-10"
        style={{ background: 'linear-gradient(to right, var(--color-background), transparent)' }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-40 z-10"
        style={{ background: 'linear-gradient(to left, var(--color-background), transparent)' }}
      />

      {/* Eyebrow */}
      <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-10">
        Trusted By
      </p>

      {/* Marquee track */}
      <div className="flex overflow-hidden select-none" aria-hidden="true">
        <div className="flex items-center gap-16 animate-marquee">
          {track.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="shrink-0 flex items-center justify-center group"
            >
              <Image
                src={logo.file}
                alt={logo.name}
                width={120}
                height={40}
                className="object-contain transition-all duration-300"
                style={{
                  height: '36px',
                  width: 'auto',
                  maxWidth: '130px',
                  /* Convert every logo to white — eliminates white boxes,
                     color clashes, and size-perception differences */
                  filter: 'brightness(0) invert(1)',
                  opacity: 0.45,
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLImageElement
                  el.style.opacity = '0.9'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLImageElement
                  el.style.opacity = '0.45'
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
