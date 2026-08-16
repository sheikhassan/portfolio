import { skillGroups } from '../data'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-28 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            number="02"
            eyebrow="What I work with"
            title="A focused stack, grouped so it is easy to scan."
            intro="Languages first, then the AI systems I build, then the backend and infrastructure I use to put them in production."
          />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <Reveal key={group.name}>
              <article className="card-hover h-full rounded-3xl border border-cream-200/10 bg-ink-800/50 p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl text-cream-50">{group.name}</h3>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-gold-400/80">
                    {group.items.length} items
                  </span>
                </div>
                <p className="mt-2 text-sm text-cream-200/55">{group.note}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-cream-200/10 bg-ink-950/60 px-3 py-1.5 text-sm text-cream-100/85"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
