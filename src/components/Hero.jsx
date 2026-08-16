import { profile, snapshot } from '../data'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 sm:pt-28 md:pt-36">
      <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-gold-400/10 blur-3xl sm:h-80 sm:w-80" />
      <div className="pointer-events-none absolute right-0 top-40 h-56 w-56 rounded-full bg-cream-200/5 blur-3xl sm:h-72 sm:w-72" />

      <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <p className="reveal font-mono text-[10px] uppercase tracking-[0.18em] text-gold-400 sm:text-[11px] sm:tracking-[0.28em]">
          Portfolio · {profile.years} of experience
        </p>

        <h1 className="reveal reveal-delay-1 mt-4 font-display text-[clamp(2.6rem,12vw,6rem)] leading-[0.94] text-cream-50">
          {profile.name}
        </h1>

        <div className="reveal reveal-delay-2 mt-5 flex flex-col gap-5 sm:mt-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="font-display text-xl italic text-cream-100/90 sm:text-2xl md:text-3xl">
              {profile.role}
            </p>
            <p className="mt-3 text-base leading-relaxed text-cream-200/75 sm:mt-4 sm:text-lg">
              {profile.headline}
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
            <a
              href={profile.resumeFile}
              download
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-gold-400 px-5 py-3 text-sm font-medium text-ink-950 transition hover:bg-gold-300"
            >
              Download resume
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-cream-200/20 px-5 py-3 text-sm text-cream-50 transition hover:border-gold-400/50 hover:text-gold-300"
            >
              Contact me
            </a>
          </div>
        </div>

        <p className="reveal reveal-delay-3 mt-6 max-w-3xl text-[0.95rem] leading-relaxed text-cream-200/70 sm:mt-8 sm:text-base">
          {profile.summary}
        </p>

        <div className="reveal reveal-delay-4 mt-5 flex flex-col gap-2 font-mono text-[12px] text-cream-200/55 sm:mt-6 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
          <span>{profile.location}</span>
          <a href={`mailto:${profile.email}`} className="break-anywhere hover:text-gold-300">
            {profile.email}
          </a>
          <a href={profile.phoneHref} className="hover:text-gold-300">
            {profile.phone}
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="break-anywhere hover:text-gold-300">
            {profile.githubLabel}
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-cream-200/10 bg-cream-200/10 sm:mt-14 md:grid-cols-4">
          {snapshot.map((item) => (
            <div key={item.label} className="bg-ink-900 px-3 py-4 sm:px-5 sm:py-6">
              <p className="font-display text-3xl text-cream-50 sm:text-4xl">
                {item.value}
                <span className="text-xl text-gold-400 sm:text-2xl">{item.suffix}</span>
              </p>
              <p className="mt-1.5 text-xs leading-snug text-cream-200/60 sm:mt-2 sm:text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
