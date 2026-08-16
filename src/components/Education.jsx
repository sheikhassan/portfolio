import { education } from '../data'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="studies" className="scroll-mt-28 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            number="05"
            eyebrow="Studies"
            title="Formal computer science education."
            intro="The degree behind the engineering work — kept short and easy to find."
          />
        </Reveal>

        <Reveal>
          <article className="card-hover rounded-3xl border border-cream-200/10 bg-ink-800/50 p-7 md:p-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-400">
              Undergraduate
            </p>
            <h3 className="mt-3 font-display text-3xl text-cream-50 md:text-4xl">{education.degree}</h3>
            <p className="mt-3 text-lg text-cream-100/85">{education.school}</p>
            <div className="gold-rule my-6" />
            <p className="max-w-2xl text-base leading-relaxed text-cream-200/70">{education.note}</p>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
