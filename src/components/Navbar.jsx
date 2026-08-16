import { useEffect, useState } from 'react'
import { nav, profile } from '../data'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('experience')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = ['top', ...nav.map((item) => item.id)]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: 0.1 },
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'bg-ink-950/85 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-400/40 font-display text-lg text-gold-300">
            H
          </span>
          <span className="hidden text-sm tracking-wide text-cream-50 sm:block">
            {profile.name}
            <span className="block text-[11px] uppercase tracking-[0.18em] text-cream-200/55">
              {profile.role}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link font-mono text-[11px] uppercase tracking-[0.18em] ${
                active === item.id ? 'active text-gold-300' : 'text-cream-200/70 hover:text-cream-50'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={profile.resumeFile}
            download
            className="hidden rounded-full border border-gold-400/40 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-gold-300 transition hover:border-gold-400 hover:bg-gold-400/10 sm:inline-flex"
          >
            Resume
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream-200/15 text-cream-50 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1.5">
              <span className={`block h-px w-4 bg-current transition ${open ? 'translate-y-1 rotate-45' : ''}`} />
              <span className={`block h-px w-4 bg-current transition ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-px w-4 bg-current transition ${open ? '-translate-y-1 -rotate-45' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-cream-200/10 bg-ink-950/95 px-5 py-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between text-cream-50"
              >
                <span className="font-display text-2xl">{item.label}</span>
                <span className="font-mono text-[11px] text-gold-400">{item.number}</span>
              </a>
            ))}
            <a
              href={profile.resumeFile}
              download
              className="mt-2 rounded-full border border-gold-400/40 px-4 py-3 text-center font-mono text-[11px] uppercase tracking-[0.16em] text-gold-300"
            >
              Download resume
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}
