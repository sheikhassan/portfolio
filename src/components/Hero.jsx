import { profile, snapshot } from '../data'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
      <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-gold-400/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-cream-200/5 blur-3xl" />

      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="reveal font-mono text-[11px] uppercase tracking-[0.28em] text-gold-400">
          Portfolio · {profile.years} of experience
        </p>

        <h1 className="reveal reveal-delay-1 mt-5 font-display text-[3.4rem] leading-[0.92] text-cream-50 sm:text-7xl md:text-8xl">
          {profile.name}
        </h1>

        <div className="reveal reveal-delay-2 mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="font-display text-2xl italic text-cream-100/90 sm:text-3xl">
              {profile.role}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-cream-200/75">
              {profile.headline}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={profile.resumeFile}
              download
              className="rounded-full bg-gold-400 px-5 py-3 text-sm font-medium text-ink-950 transition hover:bg-gold-300"
            >
              Download resume
            </a>
            <a
              href="#contact"
              className="rounded-full border border-cream-200/20 px-5 py-3 text-sm text-cream-50 transition hover:border-gold-400/50 hover:text-gold-300"
            >
              Contact me
            </a>
          </div>
        </div>

        <p className="reveal reveal-delay-3 mt-8 max-w-3xl text-base leading-relaxed text-cream-200/70">
          {profile.summary}
        </p>

        <div className="reveal reveal-delay-4 mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[12px] text-cream-200/55">
          <span>{profile.location}</span>
          <a href={`mailto:${profile.email}`} className="hover:text-gold-300">
            {profile.email}
          </a>
          <a href={profile.phoneHref} className="hover:text-gold-300">
            {profile.phone}
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-gold-300">
            {profile.githubLabel}
          </a>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-cream-200/10 bg-cream-200/10 md:grid-cols-4">
          {snapshot.map((item) => (
            <div key={item.label} className="bg-ink-900 px-5 py-6">
              <p className="font-display text-4xl text-cream-50">
                {item.value}
                <span className="text-2xl text-gold-400">{item.suffix}</span>
              </p>
              <p className="mt-2 text-sm text-cream-200/60">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
