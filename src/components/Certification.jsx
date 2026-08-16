import { certification } from '../data'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Certification() {
  return (
    <section id="certification" className="scroll-mt-28 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            number="04"
            eyebrow="Credentials"
            title="Certified to design and ship Azure AI."
            intro="One focused professional certification — listed clearly, with what it actually covers."
          />
        </Reveal>

        <Reveal>
          <article className="card-hover relative overflow-hidden rounded-3xl border border-gold-400/25 bg-ink-800/70 p-7 shadow-glow md:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold-400/10 blur-3xl" />
            <div className="relative grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold-400">
                  {certification.issuer} · {certification.code}
                </p>
                <h3 className="mt-3 font-display text-3xl text-cream-50 md:text-4xl">
                  {certification.name}
                </h3>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-cream-200/75">
                  {certification.summary}
                </p>
              </div>
              <div className="rounded-2xl border border-cream-200/10 bg-ink-950/60 p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-cream-200/45">
                  In plain words
                </p>
                <p className="mt-3 text-sm leading-relaxed text-cream-100/80">
                  This is Microsoft’s associate-level exam for engineers who can plan, build, and
                  operate AI features on Azure — not a participation badge.
                </p>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
