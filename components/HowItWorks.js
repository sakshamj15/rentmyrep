import SectionHead from './SectionHead'

const steps = [
  {
    num: 'i.',
    title: 'Connect',
    desc: 'Submit mailbox requests via our REST API or dashboard. Bulk imports, single domains, or automated pipelines — all supported.',
  },
  {
    num: 'ii.',
    title: 'We Configure',
    desc: 'Our dedicated reps handle DNS, SPF, DKIM, and DMARC end-to-end. No templates — every setup is verified and tested.',
  },
  {
    num: 'iii.',
    title: 'Delivered',
    desc: 'Receive confirmation with a full deliverability report. Webhooks notify your system when each mailbox is ready.',
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="border-b"
      style={{ borderColor: 'var(--rule)', padding: '96px 0' }}
    >
      <div className="ds-page">
        <SectionHead
          eyebrow="How it works"
          title={
            <>
              From request
              <br />
              to ready in three steps.
            </>
          }
          description="A simple, reliable process built for platforms that need to move fast."
        />
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ borderTop: '1px solid var(--rule)' }}
        >
          {steps.map((s, idx) => (
            <div
              key={idx}
              style={{
                padding: '40px 32px 36px',
                borderRight:
                  idx < steps.length - 1 ? '1px solid var(--rule)' : 'none',
                borderBottom: '1px solid var(--rule)',
              }}
            >
              <div
                className="font-serif"
                style={{
                  fontStyle: 'italic',
                  fontWeight: 500,
                  fontSize: 64,
                  lineHeight: 1,
                  color: 'var(--accent)',
                }}
              >
                {s.num}
              </div>
              <h4
                className="font-serif"
                style={{
                  fontWeight: 500,
                  fontSize: 28,
                  margin: '18px 0 10px',
                  lineHeight: 1.1,
                }}
              >
                {s.title}
              </h4>
              <p
                style={{
                  fontSize: 14.5,
                  color: 'var(--ink-soft)',
                  margin: 0,
                }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
