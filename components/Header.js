'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'How It Works', href: '#how' },
  { label: 'Contact', href: '#contact' },
]

function BrandLockup({ inverted = false }) {
  return (
    <a href="#" className="flex items-center gap-3.5">
      <div
        className="flex items-center justify-center font-semibold"
        style={{
          width: 44,
          height: 44,
          background: 'var(--accent)',
          color: '#f4f1ea',
          fontSize: 16,
          letterSpacing: '-0.02em',
        }}
      >
        WE
      </div>
      <div>
        <div
          className="font-serif leading-none"
          style={{
            fontWeight: 600,
            fontSize: 22,
            letterSpacing: '0.005em',
            color: inverted ? '#f4f1ea' : 'var(--ink)',
          }}
        >
          Wayne Enterprises
        </div>
        <div
          className="mt-1 uppercase"
          style={{
            fontSize: 9,
            letterSpacing: '0.32em',
            color: inverted ? '#c9c2af' : 'var(--ink-soft)',
          }}
        >
          Email Infrastructure, Done Right
        </div>
      </div>
    </a>
  )
}

export { BrandLockup }

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header
      className="border-b sticky top-0 z-40"
      style={{
        borderColor: 'var(--rule)',
        background: 'var(--bg)',
      }}
    >
      <div className="ds-page">
        <div className="flex items-center justify-between py-5">
          <BrandLockup />

          <nav className="hidden lg:flex gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="py-1.5 border-b border-transparent transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
                style={{ fontSize: 13.5, fontWeight: 500 }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <span
              className="font-mono-ds"
              style={{
                fontSize: 12,
                letterSpacing: '0.1em',
                color: 'var(--ink-soft)',
              }}
            >
              +91 93064 12332
            </span>
            <a
              href="#contact"
              className="px-5 py-2.5 uppercase transition-colors"
              style={{
                background: 'var(--ink)',
                color: 'var(--bg)',
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: '0.12em',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--ink)')}
            >
              Contact Us
            </a>
          </div>

          <button
            className="lg:hidden p-2"
            style={{ color: 'var(--ink)' }}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileOpen && (
          <nav
            className="lg:hidden pb-5 pt-2 border-t flex flex-col gap-1"
            style={{ borderColor: 'var(--rule)' }}
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="px-2 py-2.5"
                style={{ fontSize: 14, fontWeight: 500 }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-3 text-center px-5 py-3 uppercase"
              style={{
                background: 'var(--ink)',
                color: 'var(--bg)',
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: '0.12em',
              }}
            >
              Contact Us
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
