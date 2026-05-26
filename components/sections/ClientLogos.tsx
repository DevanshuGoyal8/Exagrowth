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
        <div className="flex items-center gap-6 animate-marquee">
          {track.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="shrink-0 group"
              style={{ width: '160px', height: '72px' }}
            >
              {/* White pill — neutralises any logo background (transparent or white) */}
              <div
                className="w-full h-full rounded-2xl flex items-center justify-center px-5 transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <Image
                  src={logo.file}
                  alt={logo.name}
                  width={120}
                  height={44}
                  className="object-contain transition-all duration-300 group-hover:scale-105"
                  style={{
                    maxHeight: '44px',
                    width: 'auto',
                    maxWidth: '120px',
                    /* Grayscale + slight brightness boost keeps all logos
                       at the same visual weight regardless of original colours */
                    filter: 'grayscale(1) brightness(1.8) contrast(0.85)',
                    opacity: 0.65,
                  }}
                />
              </div>
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
