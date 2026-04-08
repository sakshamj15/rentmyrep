'use client'

import { ArrowRight, Phone } from 'lucide-react'

const stats = [
  { value: '2,000+', label: 'Domains Configured' },
  { value: '99.9%', label: 'Deliverability Rate' },
  { value: '<24hr', label: 'Average Setup Time' },
  { value: '10+ Years', label: 'Industry Experience' },
]

export default function Hero() {
  return (
    <section className="bg-white dot-grid relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white pointer-events-none" />

      <div className="mx-auto max-w-6xl w-full border-x border-gray-200 border-dashed px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-20 md:py-32 text-center">

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0A1628] leading-tight mb-6">
            Professional Email Infrastructure
            <br />
            <span className="text-[#2563EB]">Setup & Management</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-10 leading-relaxed">
            We handle Google Workspace and Microsoft 365 account setup, DNS configuration,
            SPF, DKIM, and DMARC — end-to-end, handled by experienced professionals.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+919306412332"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 hover:border-[#2563EB] hover:text-[#2563EB] rounded-full text-sm font-medium transition-all"
            >
              <Phone className="w-4 h-4" />
              +91 93064 12332
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 border border-gray-200 rounded-2xl bg-white/80 backdrop-blur p-6 md:divide-x md:divide-gray-200">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#0A1628]">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
