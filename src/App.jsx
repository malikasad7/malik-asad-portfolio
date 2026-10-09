import { useEffect, useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import BackToTop from './components/BackToTop'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const elements = document.querySelectorAll(
      '.about-section, .skills-section, .experience-section, .education-section, .projects-section, .contact-section'
    )

    elements.forEach((element) => {
      element.classList.add('reveal')
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <CustomCursor />

      {loading && (
        <div className="loading-screen">
          <div className="loader-content">
            <div className="loader-logo">A</div>
            <h2>Malik Asad</h2>
            <p>Loading Portfolio...</p>
            <div className="loader-spinner"></div>
          </div>
        </div>
      )}

      <div className={loading ? 'portfolio-hidden' : 'portfolio-visible'}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </div>

      <BackToTop />
    </>
  )
}

export default App
