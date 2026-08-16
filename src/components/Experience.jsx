import { experience } from '../data'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            number="01"
            eyebrow="Work history"
            title="Two years of shipping real systems."
            intro="A clear path: first as a software developer building Java APIs, then as an SDE and AI/ML engineer owning backends, OCR, and computer vision in production."
          />
        </Reveal>

        <div className="relative space-y-8">
          <div className="absolute left-[11px] top-3 hidden h-[calc(100%-24px)] w-px bg-gradient-to-b from-gold-400/70 via-cream-200/15 to-transparent md:block" />

          {experience.map((job) => (
            <Reveal key={job.id}>
              <article className="card-hover relative rounded-3xl border border-cream-200/10 bg-ink-800/60 p-6 md:ml-10 md:p-8">
                <span className="absolute -left-[39px] top-8 hidden h-3 w-3 rounded-full border border-gold-400 bg-ink-950 md:block" />

                <div className="flex flex-col gap-4 border-b border-cream-200/10 pb-6 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-400">
                      {job.tenure}
                    </p>
                    <h3 className="mt-2 font-display text-3xl text-cream-50">{job.role}</h3>
                    <p className="mt-1 text-cream-200/75">{job.company}</p>
                  </div>
                  <p className="font-mono text-sm text-cream-200/60">{job.period}</p>
                </div>

                <p className="mt-6 text-base leading-relaxed text-cream-100/85">{job.summary}</p>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {job.points.map((point) => (
                    <div key={point.title} className="rounded-2xl bg-ink-950/50 p-4">
                      <h4 className="text-sm font-semibold text-cream-50">{point.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-cream-200/65">{point.detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
