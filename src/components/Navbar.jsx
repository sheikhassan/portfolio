import { useEffect, useState } from 'react'
import { nav, profile } from '../data'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('top')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
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
      { rootMargin: '-28% 0px -58% 0px', threshold: 0.08 },
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-colors duration-300 ${
        scrolled || open ? 'bg-ink-950/90 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-5 md:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold-400/40 font-display text-lg text-gold-300">
            H
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm tracking-wide text-cream-50">{profile.name}</span>
            <span className="block truncate text-[10px] uppercase tracking-[0.14em] text-cream-200/55 sm:text-[11px] sm:tracking-[0.18em]">
              {profile.role}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 xl:gap-7 lg:flex">
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

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href={profile.resumeFile}
            download
            className="hidden min-h-10 items-center rounded-full border border-gold-400/40 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-gold-300 transition hover:border-gold-400 hover:bg-gold-400/10 sm:inline-flex"
          >
            Resume
          </a>
          <button
            type="button"
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream-200/15 text-cream-50 lg:hidden"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            <span
              className={`absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 bg-current transition ${
                open ? 'rotate-45' : '-translate-y-1.5'
              }`}
            />
            <span
              className={`absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 bg-current transition ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 bg-current transition ${
                open ? '-rotate-45' : 'translate-y-1.5'
              }`}
            />
          </button>
        </div>
      </div>

      {open ? (
        <div className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-cream-200/10 bg-ink-950/96 px-4 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] lg:hidden">
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center justify-between text-cream-50"
              >
                <span className="font-display text-2xl">{item.label}</span>
                <span className="font-mono text-[11px] text-gold-400">{item.number}</span>
              </a>
            ))}
            <a
              href={profile.resumeFile}
              download
              className="mt-3 flex min-h-12 items-center justify-center rounded-full border border-gold-400/40 px-4 font-mono text-[11px] uppercase tracking-[0.16em] text-gold-300"
            >
              Download resume
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}
