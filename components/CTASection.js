import { ArrowRight, Phone } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="bg-[#0A1628] dot-grid-dark">
      <div className="mx-auto max-w-6xl w-full border-x border-white/10 border-dashed px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to Scale Your Email<br className="hidden sm:block" /> Infrastructure?
        </h2>
        <p className="text-blue-200/80 max-w-xl mx-auto mb-10 text-lg leading-relaxed">
          Stop burning engineering hours on DNS and mailbox setup. Let human reps
          handle it — at any volume, under your brand.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+919306412332"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-blue-900/40"
          >
            Get Started Today
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="tel:+919306412332"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 text-white hover:bg-white/10 rounded-full text-sm font-semibold transition-all"
          >
            <Phone className="w-4 h-4" />
            +91 93064 12332
          </a>
        </div>
      </div>
    </section>
  )
}
