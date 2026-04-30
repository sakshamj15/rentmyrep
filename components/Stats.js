const stats = [
  { value: '2,000', sup: '+', label: 'Domains configured' },
  { value: '99.9', sup: '%', label: 'Deliverability rate' },
  { value: '<24', sup: 'hr', label: 'Average setup time' },
  { value: '10', sup: '+ yrs', label: 'Industry experience' },
]

export default function Stats() {
  return (
    <section
      className="border-b"
      style={{ borderColor: 'var(--rule)', padding: '56px 0' }}
    >
      <div className="ds-page">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="px-0 lg:px-7"
              style={{
                borderLeft: idx === 0 ? 'none' : '1px solid var(--rule)',
                paddingLeft: idx === 0 ? 0 : undefined,
              }}
            >
              <div
                className="font-serif"
                style={{
                  fontWeight: 500,
                  fontSize: 56,
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                }}
              >
                {s.value}
                <sup
                  style={{
                    fontSize: 20,
                    verticalAlign: 'super',
                    color: 'var(--accent)',
                    marginLeft: 2,
                    fontWeight: 400,
                  }}
                >
                  {s.sup}
                </sup>
              </div>
              <div
                className="mt-3"
                style={{
                  fontSize: 12.5,
                  color: 'var(--ink-soft)',
                  letterSpacing: '0.04em',
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
