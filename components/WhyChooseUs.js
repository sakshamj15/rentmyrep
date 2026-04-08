import { XCircle, CheckCircle2 } from 'lucide-react'

const problems = [
  'DNS misconfiguration causes emails to land in spam',
  'Inconsistent SPF/DKIM setup leads to authentication failures',
  'No DMARC policy leaves your domain vulnerable to spoofing',
  'Technical setup takes days with back-and-forth troubleshooting',
  'One wrong record can break your entire email flow',
]

const solutions = [
  'Every record configured and tested by an experienced professional',
  'Standardised process covering SPF, DKIM, and DMARC together',
  'DMARC rolled out safely from monitoring to full enforcement',
  'Most setups completed within 24 hours of your request',
  'We verify deliverability before handing over — guaranteed',
]

export default function WhyChooseUs() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl w-full border-x border-gray-200 border-dashed px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-4">
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628]">
            The Difference It Makes
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Getting email infrastructure wrong is costly. Getting it right — the first time — is what we do.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Without us */}
          <div className="rounded-2xl border border-red-100 bg-red-50/50 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-full bg-red-100 flex items-center justify-center">
                <XCircle className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Without Professional Help</h3>
            </div>
            <ul className="space-y-3">
              {problems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                  <XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* With us */}
          <div className="rounded-2xl border border-blue-100 bg-[#EFF6FF] p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-[#2563EB]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">With RentMyRep</h3>
            </div>
            <ul className="space-y-3">
              {solutions.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
