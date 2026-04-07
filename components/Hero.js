'use client'

import { ArrowRight, CheckCircle } from 'lucide-react'

const stats = [
  { value: '2,000+', label: 'Domains Configured' },
  { value: '99.9%', label: 'Deliverability Rate' },
  { value: '<24hr', label: 'Setup Time' },
  { value: '50+', label: 'Platform Partners' },
]

export default function Hero() {
  return (
    <section className="bg-white dot-grid relative overflow-hidden">
      {/* Gradient overlay over dot grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white pointer-events-none" />

      <div className="mx-auto max-w-6xl w-full border-x border-gray-200 border-dashed px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-20 md:py-32 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-[#2563EB] text-sm font-medium mb-8 animate-float-in">
            <CheckCircle className="w-3.5 h-3.5" />
            Trusted by 50+ Email Infrastructure Platforms
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0A1628] leading-tight mb-6 animate-float-in" style={{ animationDelay: '0.1s' }}>
            Your Email Setup Team,
            <br />
            <span className="text-[#2563EB]">On Demand.</span>
          </h1>

          {/* Subtext */}
          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-10 leading-relaxed animate-float-in" style={{ animationDelay: '0.2s' }}>
            DNS, SPF, DKIM, DMARC, Google Workspace & Microsoft 365 setup — handled
            by real human reps, at scale. The white-label backend your platform needs.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-float-in" style={{ animationDelay: '0.3s' }}>
            <a
              href="tel:+919306412332"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 hover:border-[#2563EB] hover:text-[#2563EB] rounded-full text-sm font-medium transition-all"
            >
              See How It Works
            </a>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 border border-gray-200 rounded-2xl bg-white/80 backdrop-blur p-6 md:divide-x md:divide-gray-200 animate-float-in" style={{ animationDelay: '0.4s' }}>
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
