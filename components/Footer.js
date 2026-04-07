import { UserCheck, Phone } from 'lucide-react'

const columns = [
  {
    heading: 'Services',
    links: [
      { label: 'Google Workspace Setup', href: '#services' },
      { label: 'Microsoft 365 Setup', href: '#services' },
      { label: 'DNS Management', href: '#services' },
      { label: 'SPF Configuration', href: '#services' },
      { label: 'DKIM Setup', href: '#services' },
      { label: 'DMARC Implementation', href: '#services' },
    ],
  },
  {
    heading: 'Platform',
    links: [
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'For Platforms', href: '#for-platforms' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Contact Us', href: 'tel:+919306412332' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'SLA Policy', href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#0A1628] border-t border-white/10">
      <div className="mx-auto max-w-6xl w-full border-x border-white/10 border-dashed px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 text-white font-bold text-lg mb-4">
              <div className="w-8 h-8 bg-[#2563EB] rounded-lg flex items-center justify-center">
                <UserCheck className="w-4 h-4 text-white" />
              </div>
              RentMyRep
            </a>
            <p className="text-blue-200/60 text-sm leading-relaxed">
              Human reps for email infrastructure setup. White-label, at scale.
            </p>
            <a
              href="tel:+919306412332"
              className="inline-flex items-center gap-1.5 text-sm text-[#2563EB] hover:text-blue-400 mt-4 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              +91 93064 12332
            </a>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">
                {col.heading}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-blue-200/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-blue-200/40">
          © 2026 RentMyRep. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
