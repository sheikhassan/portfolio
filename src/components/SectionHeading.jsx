export default function SectionHeading({ number, eyebrow, title, intro }) {
  return (
    <div className="mb-8 max-w-3xl md:mb-14">
      <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 sm:mb-4">
        <span className="font-mono text-[11px] tracking-[0.18em] text-gold-400 sm:tracking-[0.22em]">
          {number}
        </span>
        <span className="h-px w-8 bg-gold-400/50 sm:w-10" />
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-cream-200/70 sm:tracking-[0.22em]">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display text-[1.85rem] leading-tight text-cream-50 sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-cream-200/75 sm:mt-4 sm:text-lg">
          {intro}
        </p>
      ) : null}
    </div>
  )
}
