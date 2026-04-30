'use client'

import { useState } from 'react'
import SectionHead from './SectionHead'

const faqs = [
  {
    q: 'How fast is the setup turnaround?',
    a: 'Most single-domain setups are completed within 24 hours of receiving your request. Bulk imports of several hundred mailboxes are typically scheduled across 2–3 business days with milestone updates.',
  },
  {
    q: 'Which platforms do you support?',
    a: 'Google Workspace and Microsoft 365 (Exchange Online), plus DNS configuration on every major registrar — GoDaddy, Cloudflare, Route 53, Namecheap, and the rest.',
  },
  {
    q: 'Do you handle DMARC enforcement or just monitoring?',
    a: 'Both. We deploy DMARC starting at p=none for monitoring, analyse the RUA/RUF reports, fix any aligned-but-unauthorised senders, and roll forward to p=quarantine and p=reject when traffic is clean.',
  },
  {
    q: 'Is the API truly white-label?',
    a: "Yes — your end users never see our branding. Webhook payloads, dashboards and reports can be customised to your platform's identity.",
  },
  {
    q: 'What SLAs do you offer?',
    a: '99.9% deliverability on configured mailboxes, sub-24-hour setup on standard requests, and a four-hour first-response SLA for support tickets during business hours.',
  },
  {
    q: 'Can I assign a dedicated rep to my account?',
    a: 'Yes. On managed plans you get a named technical lead who knows your domain estate, sender behaviour and integration setup — and stays with you through audits and changes.',
  },
]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section
      className="border-b"
      style={{
        borderColor: 'var(--rule)',
        padding: '96px 0',
        background: 'var(--bg-deep)',
      }}
    >
      <div className="ds-page">
        <SectionHead
          eyebrow="FAQ"
          title={
            <>
              Common
              <br />
              questions.
            </>
          }
          description="If you don't see your question here, write to us — we typically reply within a few hours."
        />
        <div style={{ borderTop: '1px solid var(--rule)' }}>
          {faqs.map((f, idx) => {
            const open = openIdx === idx
            return (
              <div
                key={idx}
                onClick={() => setOpenIdx(open ? -1 : idx)}
                className="cursor-pointer"
                style={{
                  borderBottom: '1px solid var(--rule)',
                  padding: '24px 0',
                }}
              >
                <div
                  className="font-serif flex justify-between items-center"
                  style={{
                    fontWeight: 500,
                    fontSize: 24,
                    color: 'var(--ink)',
                  }}
                >
                  {f.q}
                  <span
                    className="font-mono-ds"
                    style={{
                      fontSize: 18,
                      color: 'var(--accent)',
                      transition: 'transform .2s',
                      transform: open ? 'rotate(45deg)' : 'rotate(0)',
                      display: 'inline-block',
                    }}
                  >
                    +
                  </span>
                </div>
                <div
                  style={{
                    overflow: 'hidden',
                    maxHeight: open ? 280 : 0,
                    transition: 'max-height .25s ease, padding-top .25s ease',
                    paddingTop: open ? 14 : 0,
                    color: 'var(--ink-soft)',
                    fontSize: 14.5,
                  }}
                >
                  {f.a}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
