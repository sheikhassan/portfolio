export default function SectionHeading({ number, eyebrow, title, intro }) {
  return (
    <div className="mb-10 max-w-3xl md:mb-14">
      <div className="mb-4 flex items-center gap-3">
        <span className="font-mono text-[11px] tracking-[0.22em] text-gold-400">{number}</span>
        <span className="h-px w-10 bg-gold-400/50" />
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-cream-200/70">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display text-4xl leading-tight text-cream-50 sm:text-5xl">{title}</h2>
      {intro ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream-200/75 sm:text-lg">
          {intro}
        </p>
      ) : null}
    </div>
  )
}
