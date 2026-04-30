import { BrandLockup } from './Header'

const services = [
  'Google Workspace Setup',
  'Microsoft 365 Setup',
  'DNS Management',
  'SPF Configuration',
  'DKIM Setup',
  'DMARC Implementation',
]

const company = [
  { label: 'About Us', href: '#about' },
  { label: 'How It Works', href: '#how' },
  { label: 'Why Choose Us', href: '#about' },
  { label: 'Contact Us', href: '#contact' },
]

const contact = [
  '+91 93064 12332',
  'finance@wayneenterprises.in',
  'Mon – Sat · 9 AM – 7 PM IST',
  'Raebareli, UP',
]

function ColTitle({ children }) {
  return (
    <div
      className="font-mono-ds uppercase mb-4.5"
      style={{
        fontSize: 10,
        letterSpacing: '0.22em',
        color: 'var(--accent-soft)',
        marginBottom: 18,
      }}
    >
      {children}
    </div>
  )
}

export default function Footer() {
  return (
    <footer
      style={{
        padding: '72px 0 32px',
        background: 'var(--ink)',
        color: '#c9c2af',
        fontSize: 13,
      }}
    >
      <div className="ds-page">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12"
          style={{
            paddingBottom: 48,
            borderBottom: '1px solid rgba(255,255,255,0.12)',
          }}
        >
          <div>
            <BrandLockup inverted />
            <p
              style={{
                marginTop: 18,
                maxWidth: 360,
                lineHeight: 1.6,
                color: '#a39d8c',
              }}
            >
              Professional email infrastructure setup and management. Done
              right, the first time.
            </p>
            <div
              className="font-mono-ds"
              style={{
                marginTop: 28,
                padding: 18,
                border: '1px solid rgba(255,255,255,0.12)',
                fontSize: 11,
                lineHeight: 1.6,
                color: '#a39d8c',
              }}
            >
              <strong style={{ color: '#f4f1ea', fontWeight: 500 }}>
                Registered Office
              </strong>
              <br />
              Wayne Enterprises
              <br />
              811/19, Nirala Nagar,
              <br />
              Near SJS Public School,
              <br />
              Raebareli, Uttar Pradesh — 229001
              <br />
              India
            </div>
          </div>

          <div>
            <ColTitle>Services</ColTitle>
            <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-[#f4f1ea] transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ColTitle>Company</ColTitle>
            <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
              {company.map((c) => (
                <li key={c.label}>
                  <a href={c.href} className="hover:text-[#f4f1ea] transition-colors">
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ColTitle>Contact</ColTitle>
            <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
              {contact.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="font-mono-ds uppercase flex flex-col sm:flex-row justify-between gap-3"
          style={{
            paddingTop: 24,
            fontSize: 10,
            letterSpacing: '0.16em',
            color: '#6b6557',
          }}
        >
          <div>© 2026 Wayne Enterprises®. All rights reserved.</div>
          <div className="flex gap-2">
            <a href="#" className="hover:text-[#f4f1ea] transition-colors">
              Privacy Policy
            </a>
            <span>·</span>
            <a href="#" className="hover:text-[#f4f1ea] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
