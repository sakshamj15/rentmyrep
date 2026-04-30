export default function SectionHead({ eyebrow, title, description }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16 mb-14">
      <div>
        <span className="ds-eyebrow">{eyebrow}</span>
        <h2
          className="font-serif mt-3.5"
          style={{
            fontWeight: 500,
            fontSize: 'clamp(34px, 4.2vw, 48px)',
            lineHeight: 1.05,
            letterSpacing: '-0.01em',
          }}
        >
          {title}
        </h2>
      </div>
      {description && (
        <p
          style={{
            fontSize: 16,
            color: 'var(--ink-soft)',
            marginTop: 18,
            maxWidth: 560,
          }}
        >
          {description}
        </p>
      )}
    </div>
  )
}
