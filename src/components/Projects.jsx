import { projects } from '../data'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            number="03"
            eyebrow="Personal & freelance work"
            title="Projects that show how I think."
            intro="Each project is written the same way: what it is, the problem, what I built, and how it works. No jargon without a plain-English line first."
          />
        </Reveal>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <Reveal key={project.id}>
              <article className="card-hover overflow-hidden rounded-3xl border border-cream-200/10 bg-ink-800/50">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="border-b border-cream-200/10 p-6 md:p-8 lg:border-b-0 lg:border-r">
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-400">
                      Project 0{index + 1} · {project.eyebrow}
                    </p>
                    <h3 className="mt-4 font-display text-4xl text-cream-50">{project.name}</h3>
                    <p className="mt-4 text-lg leading-relaxed text-cream-100/85">{project.oneLiner}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-gold-400/20 bg-gold-400/5 px-3 py-1 font-mono text-[11px] text-gold-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-px bg-cream-200/10 sm:grid-cols-3">
                    <div className="bg-ink-800 p-6">
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-cream-200/45">
                        The problem
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-cream-200/80">{project.problem}</p>
                    </div>
                    <div className="bg-ink-800 p-6">
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-cream-200/45">
                        What I built
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-cream-200/80">{project.whatIBuilt}</p>
                    </div>
                    <div className="bg-ink-800 p-6">
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-cream-200/45">
                        How it works
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-cream-200/80">{project.how}</p>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
