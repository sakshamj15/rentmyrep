import { Layers, Monitor, Globe, Shield, Key, Lock } from 'lucide-react'

const services = [
  {
    icon: Layers,
    title: 'Google Workspace Setup',
    description: 'Complete Google Workspace account provisioning and mailbox configuration for your business.',
    bullets: ['MX record configuration', 'Workspace admin setup', 'User provisioning & verification'],
  },
  {
    icon: Monitor,
    title: 'Microsoft 365 Setup',
    description: 'Full Microsoft 365 tenant setup with Exchange Online and Outlook integration.',
    bullets: ['Tenant creation & DNS', 'Exchange Online config', 'Autodiscover & MX routing'],
  },
  {
    icon: Globe,
    title: 'DNS Management',
    description: 'Accurate DNS configuration across all major registrars and hosting providers.',
    bullets: ['Multi-registrar support', 'DNS propagation verification', 'Record auditing & cleanup'],
  },
  {
    icon: Shield,
    title: 'SPF Configuration',
    description: 'Properly structured SPF records that pass authentication without breaking other services.',
    bullets: ['Flat SPF record design', 'Lookup limit management', 'Third-party sender inclusion'],
  },
  {
    icon: Key,
    title: 'DKIM Setup',
    description: 'DKIM keys generated, published, and validated for reliable email signing.',
    bullets: ['2048-bit key generation', 'Selector configuration', 'Rotation scheduling'],
  },
  {
    icon: Lock,
    title: 'DMARC Implementation',
    description: 'DMARC policy deployment from monitoring to enforcement with full reporting.',
    bullets: ['p=none → p=reject rollout', 'RUA/RUF reporting setup', 'Subdomain policy handling'],
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 border-y border-gray-200">
      <div className="mx-auto max-w-6xl w-full border-x border-gray-200 border-dashed px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628]">
            What We Do
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            From initial domain setup to full deliverability compliance — we handle every layer of your email infrastructure so you don&apos;t have to.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description, bullets }) => (
            <div
              key={title}
              className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-[#2563EB]/40 hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] flex items-center justify-center mb-4 group-hover:bg-[#2563EB] transition-colors">
                <Icon className="w-5 h-5 text-[#2563EB] group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-semibold text-[#0A1628] mb-2">{title}</h3>
              <p className="text-sm text-gray-500 mb-4 leading-relaxed">{description}</p>
              <ul className="space-y-1.5">
                {bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-xs text-gray-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
