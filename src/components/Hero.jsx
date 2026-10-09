import { useEffect, useState } from 'react'

function Hero() {
  const roles = [
    'Web Developer',
    'React Developer',
    'AI Enthusiast',
    'Computer Science Graduate',
  ]

  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]

    const speed = deleting ? 45 : 90

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(currentRole.substring(0, text.length + 1))

        if (text.length + 1 === currentRole.length) {
          setTimeout(() => setDeleting(true), 1000)
        }
      } else {
        setText(currentRole.substring(0, text.length - 1))

        if (text.length === 1) {
          setDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, text === currentRole && !deleting ? 1100 : speed)

    return () => clearTimeout(timer)
  }, [text, deleting, roleIndex])

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-7">
            <p className="hero-small">HELLO, I'M</p>

            <h1 className="hero-title">Malik Asad</h1>

            <h2 className="hero-subtitle">
              {text}
              <span className="typing-cursor">|</span>
            </h2>

            <p className="hero-text">
              I build modern, responsive and user-friendly web applications
              and have a strong interest in Artificial Intelligence.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-dark me-3">
                View My Work
              </a>

              <a href="#contact" className="btn btn-outline-dark me-2">
                Contact Me
              </a>

              <a
                href="/Malik-Asad-CV.docx"
                download
                className="btn btn-outline-dark mt-3"
              >
                Download CV
              </a>

              <a
                href="mailto:malikasad8586@gmail.com"
                className="btn btn-dark mt-3 ms-2"
              >
                Email Me
              </a>
            </div>

            <div className="hero-socials mt-4">
              <a
                href="https://github.com/malikasad7"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/malikasad7/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero