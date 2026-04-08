'use client'

import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import Image from 'next/image'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-6xl w-full border-x border-gray-200 border-dashed px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Image src="/logo.svg" alt="RentMyRep" width={160} height={44} priority />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-600 hover:text-[#2563EB] transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919306412332"
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 text-gray-700 rounded-full text-sm font-medium hover:border-[#2563EB] hover:text-[#2563EB] transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              +91 93064 12332
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-4 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-full text-sm font-medium transition-all"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-gray-100">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-2 py-2.5 text-sm text-gray-700 hover:text-[#2563EB] font-medium rounded-lg hover:bg-blue-50 transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-gray-100">
                <a
                  href="tel:+919306412332"
                  className="text-center py-2.5 border border-gray-200 text-gray-700 rounded-full text-sm font-medium"
                >
                  +91 93064 12332
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="text-center py-2.5 bg-[#2563EB] text-white rounded-full text-sm font-medium"
                >
                  Contact Us
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
