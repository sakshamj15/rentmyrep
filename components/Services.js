import SectionHead from './SectionHead'

const services = [
  {
    title: ['Google Workspace', 'Setup'],
    desc: 'Complete Google Workspace account provisioning and mailbox configuration for your business.',
    items: [
      'MX record configuration',
      'Workspace admin setup',
      'User provisioning & verification',
    ],
  },
  {
    title: ['Microsoft 365', 'Setup'],
    desc: 'Full Microsoft 365 tenant setup with Exchange Online and Outlook integration.',
    items: [
      'Tenant creation & DNS',
      'Exchange Online config',
      'Autodiscover & MX routing',
    ],
  },
  {
    title: ['DNS', 'Management'],
    desc: 'Accurate DNS configuration across all major registrars and hosting providers.',
    items: [
      'Multi-registrar support',
      'DNS propagation verification',
      'Record auditing & cleanup',
    ],
  },
  {
    title: ['SPF', 'Configuration'],
    desc: 'Properly structured SPF records that pass authentication without breaking other services.',
    items: [
      'Flat SPF record design',
      'Lookup limit management',
      'Third-party sender inclusion',
    ],
  },
  {
    title: ['DKIM', 'Setup'],
    desc: 'DKIM keys generated, published, and validated for reliable email signing.',
    items: [
      '2048-bit key generation',
      'Selector configuration',
      'Rotation scheduling',
    ],
  },
  {
    title: ['DMARC', 'Implementation'],
    desc: 'DMARC policy deployment from monitoring to enforcement with full reporting.',
    items: [
      'p=none → p=reject rollout',
      'RUA/RUF reporting setup',
      'Subdomain policy handling',
    ],
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="border-b"
      style={{ borderColor: 'var(--rule)', padding: '96px 0' }}
    >
      <div className="ds-page">
        <SectionHead
          eyebrow="Our services"
          title="What we do."
          description="From initial domain setup to full deliverability compliance — we handle every layer of your email infrastructure so you don't have to."
        />
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{
            borderTop: '1px solid var(--rule)',
            borderLeft: '1px solid var(--rule)',
          }}
        >
          {services.map((s, idx) => {
            const num = String(idx + 1).padStart(2, '0')
            return (
              <article key={idx} className="ds-service-card">
                <span
                  className="font-mono-ds"
                  style={{
                    fontSize: 10,
                    letterSpacing: '0.18em',
                    color: 'var(--accent)',
                  }}
                >
                  {num} / 06
                </span>
                <h3
                  className="font-serif"
                  style={{
                    fontWeight: 500,
                    fontSize: 28,
                    lineHeight: 1.1,
                    margin: '28px 0 12px',
                  }}
                >
                  {s.title[0]}
                  <br />
                  {s.title[1]}
                </h3>
                <p
                  style={{
                    fontSize: 13.5,
                    color: 'var(--ink-soft)',
                    margin: '0 0 20px',
                  }}
                >
                  {s.desc}
                </p>
                <ul className="flex flex-col gap-2 list-none p-0 m-0">
                  {s.items.map((item, i) => (
                    <li
                      key={i}
                      className="font-mono-ds relative"
                      style={{
                        fontSize: 11,
                        letterSpacing: '0.04em',
                        color: 'var(--ink-soft)',
                        paddingLeft: 18,
                      }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: 0,
                          color: 'var(--accent)',
                        }}
                      >
                        →
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
