const partners = [
  'MailScaler',
  'InboxForge',
  'WarmDeploy',
  'EmailOps Pro',
  'DomainSync',
  'OutreachStack',
]

export default function TrustedBy() {
  return (
    <section className="bg-gray-50 border-y border-gray-200">
      <div className="mx-auto max-w-6xl w-full border-x border-gray-200 border-dashed px-4 sm:px-6 lg:px-8 py-10">
        <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
          Powering email infrastructure for
        </p>
        <div className="flex flex-wrap justify-center items-center gap-3">
          {partners.map((name) => (
            <div
              key={name}
              className="px-5 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600 hover:border-[#2563EB] hover:text-[#2563EB] transition-colors cursor-default"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
