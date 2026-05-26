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

const track = [...logos, ...logos, ...logos]

export function ClientLogos() {
  return (
    /*
     * WHITE background is intentional — it's the only way to make logos
     * with baked-in white PNG backgrounds invisible. Used by Vercel, Stripe,
     * Linear, and every major dark-theme site for their logo strips.
     */
    <section
      className="relative overflow-hidden"
      style={{ background: '#ffffff', borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}
      aria-label="Clients and partners"
    >
      {/* Fade edges */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10"
        style={{ background: 'linear-gradient(to right, #ffffff, transparent)' }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10"
        style={{ background: 'linear-gradient(to left, #ffffff, transparent)' }}
      />

      {/* Eyebrow */}
      <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 pt-10 mb-8">
        Trusted By
      </p>

      {/* Marquee */}
      <div className="flex overflow-hidden select-none pb-10" aria-hidden="true">
        <div className="flex items-center gap-12 animate-marquee">
          {track.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="shrink-0 flex items-center justify-center group"
              style={{ height: '56px', width: '140px' }}
            >
              <Image
                src={logo.file}
                alt={logo.name}
                width={130}
                height={50}
                className="object-contain transition-all duration-300 group-hover:scale-105"
                style={{
                  maxHeight: '50px',
                  width: 'auto',
                  maxWidth: '130px',
                  /* Grayscale on white bg = clean uniform grey logos.
                     White PNG backgrounds become invisible. */
                  filter: 'grayscale(1) opacity(0.55)',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <ul className="sr-only">
        {logos.map((l) => <li key={l.name}>{l.name}</li>)}
      </ul>
    </section>
  )
}
