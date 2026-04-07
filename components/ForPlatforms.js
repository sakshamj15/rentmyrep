import { Check } from 'lucide-react'

const features = [
  { title: 'White-label API', desc: 'Your brand, our ops. No RentMyRep branding visible to your customers.' },
  { title: 'Bulk requests (1–10K domains)', desc: 'Handle single setups or massive onboarding waves with the same API.' },
  { title: 'Status webhooks', desc: 'Real-time callbacks when mailboxes are configured, failed, or need attention.' },
  { title: 'SLA guarantee', desc: 'Sub-24-hour completion on standard requests, with priority lanes available.' },
  { title: 'Dedicated rep option', desc: 'Assign a named rep to your account for consistent handling and direct communication.' },
]

const codeSnippet = `POST /v1/mailbox-requests
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

{
  "domain": "client-domain.com",
  "platform": "google_workspace",
  "mailboxes": [
    { "email": "hello@client-domain.com" },
    { "email": "support@client-domain.com" }
  ],
  "services": ["spf", "dkim", "dmarc"],
  "webhook_url": "https://your-app.com/webhooks/rmr",
  "white_label": true
}

// Response
{
  "request_id": "rmr_8f2k9xp1",
  "status": "queued",
  "eta_hours": 18,
  "rep_assigned": "Alex R."
}`

export default function ForPlatforms() {
  return (
    <section id="for-platforms" className="bg-[#0A1628] dot-grid-dark">
      <div className="mx-auto max-w-6xl w-full border-x border-white/10 border-dashed px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/20 bg-white/10 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
            For Platforms
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Built for Email Infrastructure Platforms
          </h2>
          <p className="mt-4 text-blue-200/80 max-w-xl mx-auto">
            Integrate once, scale forever. Our API is designed for platforms that need reliable, white-label ops.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Features list */}
          <div className="space-y-5">
            {features.map(({ title, desc }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#2563EB]/20 border border-[#2563EB]/40 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#2563EB]" />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{title}</div>
                  <div className="text-blue-200/70 text-sm mt-0.5 leading-relaxed">{desc}</div>
                </div>
              </div>
            ))}

            <div className="pt-4">
              <a
                href="tel:+919306412332"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-full text-sm font-medium transition-all"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Code snippet */}
          <div className="rounded-2xl bg-[#0D1F3C] border border-white/10 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
              <div className="w-3 h-3 rounded-full bg-red-400/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
              <div className="w-3 h-3 rounded-full bg-green-400/70" />
              <span className="text-white/40 text-xs ml-2">API Request</span>
            </div>
            <pre className="p-5 text-xs text-blue-200/80 overflow-x-auto leading-relaxed font-mono">
              {codeSnippet}
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
