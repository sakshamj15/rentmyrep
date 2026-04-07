import { Send, Settings, CheckCircle } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Send,
    title: 'Connect',
    description:
      'Submit mailbox requests via our REST API or dashboard. Bulk imports, single domains, or automated pipelines — all supported.',
  },
  {
    number: '02',
    icon: Settings,
    title: 'We Configure',
    description:
      'Our dedicated reps handle DNS, SPF, DKIM, and DMARC end-to-end. No templates — every setup is verified and tested.',
  },
  {
    number: '03',
    icon: CheckCircle,
    title: 'Delivered',
    description:
      'Receive confirmation with a full deliverability report. Webhooks notify your system when each mailbox is ready.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white">
      <div className="mx-auto max-w-6xl w-full border-x border-gray-200 border-dashed px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-4">
            How It Works
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628]">
            From Request to Ready in Three Steps
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            A simple, reliable process built for platforms that need to move fast.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {steps.map(({ number, icon: Icon, title, description }) => (
              <div key={number} className="relative flex flex-col items-center text-center">
                {/* Number badge */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#0A1628] flex items-center justify-center shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#2563EB] flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold">{number.slice(1)}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#0A1628] mb-3">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-xs">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
