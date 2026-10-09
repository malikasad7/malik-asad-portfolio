
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
    let delay = deleting ? 45 : 90

    if (!deleting && text === currentRole) {
      delay = 1300
    }

    const timer = setTimeout(() => {
      if (!deleting) {
        if (text.length < currentRole.length) {
          setText(currentRole.substring(0, text.length + 1))
        } else {
          setDeleting(true)
        }
      } else {
        if (text.length > 0) {
          setText(currentRole.substring(0, text.length - 1))
        } else {
          setDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [text, deleting, roleIndex])

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-8">
            <div className="hero-content">
              <p className="hero-small">
                <span className="hero-status-dot"></span>
                WEB DEVELOPMENT & ARTIFICIAL INTELLIGENCE
              </p>

              <h1 className="hero-title">
                Hi, I'm <span>Malik Asad</span>
              </h1>

              <h2 className="hero-subtitle">
                I'm a <span className="hero-role">{text}</span>
                <span className="typing-cursor">|</span>
              </h2>

              <p className="hero-text">
                Computer Science graduate and Web Developer Intern at NUMS.
                I create modern, responsive web experiences and explore
                innovative solutions using Artificial Intelligence.
              </p>

              <div className="hero-buttons">
                <a href="#projects" className="btn btn-dark hero-primary-btn">
                  Explore My Work <span>↗</span>
                </a>

                <a href="#contact" className="btn btn-outline-dark hero-secondary-btn">
                  Let's Connect
                </a>
              </div>

              <div className="hero-socials mt-4">
                <a
                  href="https://github.com/malikasad7"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/in/malikasad7/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn ↗
                </a>

                <a href="mailto:malikasad8586@gmail.com">
                  Email ↗
                </a>
              </div>

              <div className="hero-scroll">
                <span className="hero-scroll-line"></span>
                SCROLL TO EXPLORE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero