import { profile } from '../data'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const details = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'Phone', value: profile.phone, href: profile.phoneHref },
  { label: 'GitHub', value: profile.githubLabel, href: profile.github },
  { label: 'Location', value: profile.location, href: null },
]

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-28 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            number="06"
            eyebrow="Details & resume"
            title="Everything you need to reach me."
            intro="Use any of the details below. The full resume is attached and ready to download."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="rounded-3xl border border-cream-200/10 bg-ink-800/50 p-7 md:p-8">
              <h3 className="font-display text-2xl text-cream-50">Direct details</h3>
              <ul className="mt-6 divide-y divide-cream-200/10">
                {details.map((item) => (
                  <li key={item.label} className="flex flex-col gap-1 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-cream-200/45">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                        className="text-cream-50 transition hover:text-gold-300"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-cream-50">{item.value}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-3xl border border-gold-400/25 bg-gradient-to-br from-ink-800 to-ink-950 p-7 md:p-8">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-400">
                  Attached resume
                </p>
                <h3 className="mt-3 font-display text-3xl text-cream-50">Hassan S — Resume</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream-200/70">
                  One-page PDF with experience, projects, skills, certification, and education.
                  Same facts as this site, in a format you can forward.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={profile.resumeFile}
                  download
                  className="rounded-full bg-gold-400 px-5 py-3 text-center text-sm font-medium text-ink-950 transition hover:bg-gold-300"
                >
                  Download PDF resume
                </a>
                <a
                  href={profile.resumeFile}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-cream-200/20 px-5 py-3 text-center text-sm text-cream-50 transition hover:border-gold-400/50"
                >
                  Open resume in a new tab
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
