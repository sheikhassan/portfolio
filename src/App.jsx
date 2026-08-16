import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certification from './components/Certification'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink-950">
      <div className="grain" />
      <Navbar />
      <main>
        <Hero />
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="gold-rule mt-20" />
        </div>
        <Experience />
        <Skills />
        <Projects />
        <Certification />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
