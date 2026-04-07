'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'How fast is the setup turnaround?',
    a: 'Standard requests are completed within 24 hours. Growth and Enterprise plans include SLA guarantees. Complex setups with multiple domains may take slightly longer — you\'ll receive an ETA upfront.',
  },
  {
    q: 'Which platforms do you support?',
    a: 'We support Google Workspace and Microsoft 365 (formerly Office 365) for mailbox provisioning. For DNS, we work with all major registrars including Cloudflare, GoDaddy, Namecheap, Route 53, and more.',
  },
  {
    q: 'Do you handle DMARC enforcement or just monitoring?',
    a: 'Both. We start with p=none monitoring, review the reports, then progressively move to p=quarantine and p=reject once we\'re confident the setup is clean. We handle the full rollout process.',
  },
  {
    q: 'Is the API truly white-label?',
    a: 'Yes. When you use the white_label: true flag in API requests, there is zero RentMyRep branding in any customer-facing communication. Your customers see only your brand.',
  },
  {
    q: 'What SLAs do you offer?',
    a: 'Starter: 48-hour standard SLA. Growth: 24-hour SLA. Enterprise: Custom SLA with priority lanes. All SLAs are backed by service credits if missed.',
  },
  {
    q: 'Can I assign a dedicated rep to my account?',
    a: 'Yes, on Enterprise plans. Your dedicated rep learns your specific workflow, customer segments, and preferences — leading to faster turnarounds and fewer back-and-forth clarifications over time.',
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="font-medium text-[#0A1628] text-sm md:text-base">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-5 pr-8">
          <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl w-full border-x border-gray-200 border-dashed px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-4">
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628]">
            Common Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-gray-200 px-6 md:px-8 divide-y divide-gray-200">
          {faqs.map((item) => (
            <FAQItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
