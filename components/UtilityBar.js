export default function UtilityBar() {
  return (
    <div
      className="border-b font-mono-ds uppercase"
      style={{
        borderColor: 'var(--rule)',
        fontSize: '10px',
        letterSpacing: '0.16em',
        color: 'var(--ink-soft)',
      }}
    >
      <div className="ds-page">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 py-2.5">
          <div>Wayne Enterprises · Raebareli, UP</div>
          <div className="flex flex-wrap gap-x-7 gap-y-1">
            <a href="#contact" className="hover:text-[color:var(--accent)] transition-colors">
              +91 93064 12332
            </a>
            <a href="mailto:finance@wayneenterprises.in" className="hover:text-[color:var(--accent)] transition-colors">
              finance@wayneenterprises.in
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
