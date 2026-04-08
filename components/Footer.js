import { UserCheck, Phone, MapPin } from 'lucide-react'

const serviceLinks = [
  { label: 'Google Workspace Setup', href: '#services' },
  { label: 'Microsoft 365 Setup', href: '#services' },
  { label: 'DNS Management', href: '#services' },
  { label: 'SPF Configuration', href: '#services' },
  { label: 'DKIM Setup', href: '#services' },
  { label: 'DMARC Implementation', href: '#services' },
]

const companyLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Why Choose Us', href: '#about' },
  { label: 'Contact Us', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0A1628] border-t border-white/10">
      <div className="mx-auto max-w-6xl w-full border-x border-white/10 border-dashed px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 text-white font-bold text-lg mb-4">
              <div className="w-8 h-8 bg-[#2563EB] rounded-lg flex items-center justify-center">
                <UserCheck className="w-4 h-4 text-white" />
              </div>
              RentMyRep
            </a>
            <p className="text-blue-200/60 text-sm leading-relaxed mb-5">
              Professional email infrastructure setup and management. Done right, the first time.
            </p>
            <div className="space-y-2.5">
              <a href="tel:+919306412332" className="flex items-center gap-2 text-sm text-[#2563EB] hover:text-blue-400 transition-colors">
                <Phone className="w-3.5 h-3.5" />
                +91 93064 12332
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-blue-200/60 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-blue-200/60 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Wayne Enterprises address */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">Registered Office</h4>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
              <div className="text-sm text-blue-200/60 leading-relaxed">
                <p className="text-white font-medium mb-1">Wayne Enterprises</p>
                811/19, Nirala Nagar,<br />
                Near SJS Public School,<br />
                Raebareli,<br />
                Uttar Pradesh — 229001<br />
                India
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-blue-200/40">
          <span>© 2026 RentMyRep · A Wayne Enterprises Initiative. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
