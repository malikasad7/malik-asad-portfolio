function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center min-vh-100">

          <div className="col-lg-7">

            <p className="hero-small">
              HELLO, I'M
            </p>

            <h1 className="hero-title">
              Malik Asad
            </h1>

            <h2 className="hero-subtitle">
              Web Developer & Computer Science Graduate
            </h2>

            <p className="hero-text">
              I build modern, responsive and user-friendly web applications
              and have a strong interest in Artificial Intelligence.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-dark me-3">
                View My Work
              </a>

              <a href="#contact" className="btn btn-outline-dark">
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
  href="mailto:YOUR-EMAIL@example.com"
  className="btn btn-dark mt-3 ms-2"
>
  Email Me
</a>
            </div>

            <div className="hero-socials mt-4">
              <a
                href="https://github.com/malikasad7ya"
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