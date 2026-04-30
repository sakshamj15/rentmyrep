const inboxRows = [
  {
    from: 'noreply@yourdomain.com',
    subj: 'SPF · DKIM · DMARC all aligned',
    tag: 'Inbox',
    status: 'ok',
  },
  {
    from: 'team@yourdomain.com',
    subj: 'Google Workspace · MX verified',
    tag: 'Inbox',
    status: 'ok',
  },
  {
    from: 'billing@yourdomain.com',
    subj: 'Microsoft 365 · Autodiscover OK',
    tag: 'Inbox',
    status: 'ok',
  },
  {
    from: 'competitor.com',
    subj: 'Misconfigured SPF, no DKIM',
    tag: 'Spam',
    status: 'warn',
  },
]

function InboxCard() {
  return (
    <div
      style={{
        border: '1px solid var(--rule)',
        background: 'var(--paper)',
        boxShadow: '0 24px 60px -32px rgba(20,17,13,0.25)',
        overflow: 'hidden',
      }}
    >
      <div
        className="font-mono-ds uppercase flex items-center gap-2"
        style={{
          padding: '10px 14px',
          borderBottom: '1px solid var(--rule)',
          background: 'var(--bg-deep)',
          fontSize: 10,
          letterSpacing: '0.16em',
          color: 'var(--ink-soft)',
        }}
      >
        <div className="flex gap-1.5 mr-1.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                width: 9,
                height: 9,
                borderRadius: '50%',
                background: '#c9c2af',
              }}
            />
          ))}
        </div>
        <div>inbox · primary</div>
      </div>
      {inboxRows.map((row, idx) => (
        <div
          key={idx}
          className="grid items-center"
          style={{
            gridTemplateColumns: '16px 1fr auto',
            gap: 14,
            padding: '14px 18px',
            borderBottom:
              idx === inboxRows.length - 1
                ? 'none'
                : '1px solid var(--rule)',
            fontSize: 13,
          }}
        >
          <div
            className="flex items-center justify-center"
            style={{
              width: 14,
              height: 14,
              borderRadius: '50%',
              background: row.status === 'warn' ? 'var(--warn)' : 'var(--ok)',
              color: '#f4f1ea',
              fontSize: 9,
            }}
          >
            {row.status === 'warn' ? '!' : '✓'}
          </div>
          <div className="flex flex-col gap-0.5 min-w-0">
            <div style={{ fontWeight: 500 }}>{row.from}</div>
            <div
              className="truncate"
              style={{ color: 'var(--ink-soft)', fontSize: 12 }}
            >
              {row.subj}
            </div>
          </div>
          <div
            className="font-mono-ds uppercase"
            style={{
              fontSize: 9,
              letterSpacing: '0.16em',
              padding: '4px 8px',
              border: `1px solid ${
                row.status === 'warn' ? 'var(--warn)' : 'var(--ok)'
              }`,
              color: row.status === 'warn' ? 'var(--warn)' : 'var(--ok)',
            }}
          >
            {row.tag}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <section
      className="border-b"
      style={{ borderColor: 'var(--rule)', padding: '88px 0 80px' }}
    >
      <div className="ds-page">
        <div className="grid gap-12 lg:gap-16 items-end grid-cols-1 lg:[grid-template-columns:1.4fr_1fr]">
          <div>
            <span className="ds-eyebrow">
              Professional Email Infrastructure · Setup &amp; Management
            </span>
            <h1
              className="font-serif text-balance"
              style={{
                fontWeight: 500,
                fontSize: 'clamp(48px, 7vw, 84px)',
                lineHeight: 0.98,
                letterSpacing: '-0.015em',
                margin: '18px 0 28px',
              }}
            >
              Emails that{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
                actually
              </em>
              <br />
              land in inboxes.
            </h1>
            <p
              style={{
                fontSize: 17,
                color: 'var(--ink-soft)',
                maxWidth: 480,
                marginBottom: 32,
              }}
            >
              We handle Google Workspace and Microsoft 365 account setup, DNS
              configuration, SPF, DKIM, and DMARC — end-to-end, by experienced
              professionals. No templates, no abandoned tickets.
            </p>
            <div className="flex flex-wrap gap-3.5 items-center">
              <a href="#contact" className="ds-btn-primary">
                Get in touch
              </a>
              <a href="#services" className="ds-btn-ghost">
                View services →
              </a>
            </div>
          </div>
          <InboxCard />
        </div>
      </div>
    </section>
  )
}
