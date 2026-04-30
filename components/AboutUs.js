import SectionHead from './SectionHead'

const values = [
  {
    title: 'Human-First Approach',
    desc: 'Every setup is handled by a real person — not an automated script. We ensure every configuration is verified and tested.',
  },
  {
    title: 'Proven Expertise',
    desc: 'Years of hands-on experience across Google Workspace, Microsoft 365, and DNS management for businesses of all sizes.',
  },
  {
    title: 'Fast Turnaround',
    desc: 'We understand that your business cannot wait. Most setups are completed within 24 hours of receiving your request.',
  },
  {
    title: 'Long-Term Support',
    desc: "We don't disappear after setup. We're available for ongoing support, changes, and troubleshooting whenever you need us.",
  },
]

export default function AboutUs() {
  return (
    <section
      id="about"
      className="border-b"
      style={{ borderColor: 'var(--rule)', padding: '96px 0' }}
    >
      <div className="ds-page">
        <SectionHead
          eyebrow="About us"
          title={
            <>
              A trusted partner
              <br />
              for email infrastructure.
            </>
          }
          description="Wayne Enterprises was built to solve a problem every growing business faces — getting email infrastructure set up correctly, reliably, and without the hassle. We work with businesses, agencies, and service providers who need Google Workspace and Microsoft 365 configured properly so their emails actually land in inboxes."
        />
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{
            borderTop: '1px solid var(--rule)',
            borderLeft: '1px solid var(--rule)',
          }}
        >
          {values.map((v, idx) => (
            <div
              key={idx}
              style={{
                borderRight: '1px solid var(--rule)',
                borderBottom: '1px solid var(--rule)',
                padding: '36px 32px',
              }}
            >
              <h5
                className="font-serif"
                style={{
                  fontWeight: 500,
                  fontSize: 26,
                  margin: '0 0 10px',
                  lineHeight: 1.15,
                }}
              >
                {v.title}
              </h5>
              <p
                style={{
                  fontSize: 14,
                  color: 'var(--ink-soft)',
                  margin: 0,
                  maxWidth: 460,
                }}
              >
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
