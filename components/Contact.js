'use client'

import SectionHead from './SectionHead'

function Field({ label, type = 'text', placeholder, full = false, textarea = false }) {
  const baseStyle = {
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid var(--rule)',
    color: 'var(--ink)',
    fontSize: 15,
    padding: '10px 0',
    outline: 'none',
    transition: 'border-color .15s',
    width: '100%',
  }

  return (
    <div className={`flex flex-col gap-1.5 ${full ? 'md:col-span-2' : ''}`}>
      <label
        className="font-mono-ds uppercase"
        style={{
          fontSize: 10,
          letterSpacing: '0.18em',
          color: 'var(--ink-soft)',
        }}
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          placeholder={placeholder}
          style={{ ...baseStyle, resize: 'vertical', minHeight: 80 }}
          onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
          onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--rule)')}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          style={baseStyle}
          onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
          onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--rule)')}
        />
      )}
    </div>
  )
}

function InfoGroup({ label, children, small = false }) {
  return (
    <div className="mb-9">
      <div className="ds-label mb-2">{label}</div>
      <div
        className="font-serif"
        style={{
          fontWeight: 500,
          fontSize: small ? 16 : 22,
          lineHeight: small ? 1.5 : 1.3,
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-b"
      style={{ borderColor: 'var(--rule)', padding: '96px 0' }}
    >
      <div className="ds-page">
        <SectionHead
          eyebrow="Contact us"
          title={
            <>
              Get
              <br />
              in touch.
            </>
          }
          description="Have a question or ready to get started? Fill in the form below and we'll get back to you promptly."
        />
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
          <div>
            <InfoGroup label="Phone">+91 93064 12332</InfoGroup>
            <InfoGroup label="Finance" small>
              <a
                href="mailto:finance@wayneenterprises.in"
                className="hover:text-[color:var(--accent)] transition-colors"
              >
                finance@wayneenterprises.in
              </a>
            </InfoGroup>
            <InfoGroup label="Address" small>
              811/19, Nirala Nagar,
              <br />
              Near SJS Public School,
              <br />
              Raebareli, Uttar Pradesh — 229001
            </InfoGroup>
            <InfoGroup label="Business Hours" small>
              Monday – Saturday
              <br />
              9:00 AM – 7:00 PM IST
            </InfoGroup>
            <InfoGroup label="Response time" small>
              We typically respond to enquiries within a few hours.
            </InfoGroup>
          </div>
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <Field label="Full Name *" placeholder="Your name" />
            <Field label="Email Address *" type="email" placeholder="you@company.com" />
            <Field label="Phone Number" placeholder="+91 00000 00000" />
            <Field label="Subject" placeholder="e.g. Google Workspace Setup" />
            <Field
              label="Message *"
              placeholder="Tell us about your requirements..."
              full
              textarea
            />
            <button
              type="submit"
              className="uppercase justify-self-start mt-3 cursor-pointer transition-colors"
              style={{
                gridColumn: '1 / -1',
                padding: '14px 24px',
                background: 'var(--accent)',
                border: 'none',
                color: '#f4f1ea',
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.12em',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#233a2c')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--accent)')}
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
