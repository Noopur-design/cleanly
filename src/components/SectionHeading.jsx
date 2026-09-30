// Eyebrow label + title + optional subtitle. Centered or left aligned.
export default function SectionHeading({ eyebrow, title, subtitle, center = false, className = '', light = false }) {
  return (
    <div
      data-reveal
      className={`${center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}
    >
      {eyebrow && <p className={`eyebrow ${light ? '!text-brand-light' : ''}`}>{eyebrow}</p>}
      <h2 className={`mt-3 text-3xl font-bold leading-tight md:text-[40px] ${light ? '!text-white' : ''}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed ${light ? 'text-white/70' : 'text-slatey'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
