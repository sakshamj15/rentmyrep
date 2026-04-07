import { XCircle, CheckCircle2 } from 'lucide-react'

const problems = [
  'DNS misconfiguration causes deliverability failures',
  'Inconsistent SPF/DKIM setup across domains',
  'No standardized DMARC policy enforcement',
  'Engineering teams wasted on manual ops work',
  'Slow onboarding — days or weeks per customer',
]

const solutions = [
  'Dedicated human reps with deep DNS expertise',
  'Standardized end-to-end configuration process',
  'DMARC enforcement with reporting setup',
  'Your team stays focused on product, not ops',
  'Sub-24-hour setup for Google & Microsoft accounts',
]

export default function ProblemSolution() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl w-full border-x border-gray-200 border-dashed px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628]">
            Why Email Infrastructure Is Broken
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Most platforms cobble together a manual process. It breaks. We fix that permanently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Problem */}
          <div className="rounded-2xl border border-red-100 bg-red-50/50 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-full bg-red-100 flex items-center justify-center">
                <XCircle className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">The Problem</h3>
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

          {/* Solution */}
          <div className="rounded-2xl border border-blue-100 bg-[#EFF6FF] p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-[#2563EB]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">The RentMyRep Way</h3>
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
