import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '$4.99',
    per: 'per mailbox',
    description: 'Perfect for small platforms getting started.',
    features: [
      'Up to 100 mailboxes/mo',
      'Google Workspace & M365',
      'SPF + DKIM + DMARC',
      'Email support',
      '48-hour SLA',
      'Standard API access',
    ],
    cta: 'Get Started',
    href: 'tel:+919306412332',
    highlight: false,
  },
  {
    name: 'Growth',
    price: '$3.49',
    per: 'per mailbox',
    description: 'For growing platforms with consistent volume.',
    features: [
      'Up to 1,000 mailboxes/mo',
      'Google Workspace & M365',
      'Full DNS management',
      'Priority email + chat support',
      '24-hour SLA',
      'White-label API',
      'Status webhooks',
    ],
    cta: 'Get Started',
    href: 'tel:+919306412332',
    highlight: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    per: 'volume pricing',
    description: 'For high-volume platforms and agencies.',
    features: [
      'Unlimited mailboxes',
      'All platforms supported',
      'Dedicated named rep',
      'Slack / phone support',
      'Custom SLA',
      'Full white-label API',
      'Bulk request pipelines',
    ],
    cta: 'Contact Sales',
    href: 'tel:+919306412332',
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-gray-50 border-y border-gray-200">
      <div className="mx-auto max-w-6xl w-full border-x border-gray-200 border-dashed px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-4">
            Pricing
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628]">
            Simple, Per-Mailbox Pricing
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Pay only for what you use. No setup fees, no minimum commitments on Starter.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl p-7 ${
                plan.highlight
                  ? 'bg-white border-2 border-[#2563EB] shadow-xl shadow-blue-100'
                  : 'bg-white border border-gray-200'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#2563EB] text-white text-xs font-semibold">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-[#0A1628] mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-[#0A1628]">{plan.price}</span>
                  <span className="text-sm text-gray-400">{plan.per}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-gray-600">
                    <Check className={`w-4 h-4 shrink-0 ${plan.highlight ? 'text-[#2563EB]' : 'text-gray-400'}`} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={plan.href}
                className={`block text-center py-3 rounded-full text-sm font-medium transition-all ${
                  plan.highlight
                    ? 'bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-md'
                    : 'border border-gray-300 text-gray-700 hover:border-[#2563EB] hover:text-[#2563EB]'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
