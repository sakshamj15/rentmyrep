import SectionHead from './SectionHead'

const without = [
  'DNS misconfiguration causes emails to land in spam',
  'Inconsistent SPF/DKIM setup leads to authentication failures',
  'No DMARC policy leaves your domain vulnerable to spoofing',
  'Technical setup takes days with back-and-forth troubleshooting',
  'One wrong record can break your entire email flow',
]

const withUs = [
  'Every record configured and tested by an experienced professional',
  'Standardised process covering SPF, DKIM, and DMARC together',
  'DMARC rolled out safely from monitoring to full enforcement',
  'Most setups completed within 24 hours of your request',
  'We verify deliverability before handing over — guaranteed',
]

function CompareCol({ kind, badge, items }) {
  const isBad = kind === 'bad'
  const markerColor = isBad ? 'var(--warn)' : 'var(--accent)'
  const markerBg = isBad ? 'rgba(181,74,44,0.12)' : 'rgba(47,74,58,0.12)'
  const marker = isBad ? '×' : '✓'

  return (
    <div
      style={{
        background: isBad ? 'transparent' : 'var(--paper)',
        border: `1px ${isBad ? 'dashed' : 'solid'} var(--rule)`,
        padding: 32,
      }}
    >
      <h4
        className="font-serif flex items-center"
        style={{
          fontWeight: 500,
          fontSize: 22,
          margin: '0 0 24px',
          paddingBottom: 14,
          borderBottom: '1px solid var(--rule)',
        }}
      >
        <span
          className="font-mono-ds uppercase"
          style={{
            fontSize: 10,
            letterSpacing: '0.18em',
            marginRight: 10,
            padding: '3px 8px',
            background: markerBg,
            color: markerColor,
          }}
        >
          {badge}
        </span>
      </h4>
      <ul className="list-none p-0 m-0 flex flex-col gap-4">
        {items.map((item, i) => (
          <li
            key={i}
            className="relative"
            style={{
              fontSize: 14,
              paddingLeft: 28,
              lineHeight: 1.45,
            }}
          >
            <span
              className="absolute left-0 top-[1px] flex items-center justify-center"
              style={{
                width: 18,
                height: 18,
                borderRadius: '50%',
                background: markerBg,
                color: markerColor,
                fontSize: 10,
              }}
            >
              {marker}
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function WhyChooseUs() {
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
          eyebrow="Why choose us"
          title={
            <>
              The difference
              <br />
              it makes.
            </>
          }
          description="Getting email infrastructure wrong is costly. Getting it right — the first time — is what we do."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <CompareCol kind="bad" badge="Without us" items={without} />
          <CompareCol kind="good" badge="With Wayne Enterprises" items={withUs} />
        </div>
      </div>
    </section>
  )
}
