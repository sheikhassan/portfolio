import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-cream-200/10 py-8 pb-[max(2rem,env(safe-area-inset-bottom))] sm:py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 text-sm text-cream-200/50 sm:px-5 md:flex-row md:items-center md:justify-between md:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}. Backend & Gen AI Engineer.
        </p>
        <p>Built to be read in minutes — then downloaded as a resume.</p>
      </div>
    </footer>
  )
}
