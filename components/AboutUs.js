import { Users, Award, Clock, HeartHandshake } from 'lucide-react'

const values = [
  {
    icon: Users,
    title: 'Human-First Approach',
    desc: 'Every setup is handled by a real person — not an automated script. We ensure every configuration is verified and tested.',
  },
  {
    icon: Award,
    title: 'Proven Expertise',
    desc: 'Years of hands-on experience across Google Workspace, Microsoft 365, and DNS management for businesses of all sizes.',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    desc: 'We understand that your business cannot wait. Most setups are completed within 24 hours of receiving your request.',
  },
  {
    icon: HeartHandshake,
    title: 'Long-Term Support',
    desc: 'We don\'t disappear after setup. We\'re available for ongoing support, changes, and troubleshooting whenever you need us.',
  },
]

export default function AboutUs() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-6xl w-full border-x border-gray-200 border-dashed px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left text */}
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-4">
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-5 leading-snug">
              A Trusted Partner for Email Infrastructure
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              RentMyRep was built to solve a problem every growing business faces — getting email infrastructure set up correctly, reliably, and without the hassle.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We work with businesses, agencies, and service providers who need Google Workspace and Microsoft 365 accounts configured properly — with the right DNS records, SPF, DKIM, and DMARC policies — so their emails actually land in inboxes.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team brings years of hands-on technical experience, a meticulous process, and a commitment to getting things done right the first time.
            </p>
          </div>

          {/* Right — dark card */}
          <div className="bg-[#0A1628] rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold mb-6">What We Stand For</h3>
            <ul className="space-y-4">
              {[
                'No shortcuts — every record is verified manually',
                'Clear communication at every step of the process',
                'We explain what we\'re doing and why, in plain language',
                'Your domain reputation is treated as if it were our own',
                'We stay until the problem is solved — no abandoned tickets',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-blue-100/80 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0 mt-1.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Values grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-[#2563EB]" />
              </div>
              <h4 className="font-semibold text-[#0A1628] mb-2">{title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
