function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <a href="#home" className="footer-brand">
            Malik Asad<span>.</span>
          </a>

          <p className="footer-role">
            Computer Science Graduate | Web Developer | AI Enthusiast
          </p>

          <p className="footer-description">
            Building modern web experiences with creativity and technology.
          </p>

          <div className="footer-links">
            <a
              href="https://github.com/malikasad7"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <span>↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/malikasad7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <span>↗</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <small>© {currentYear} Malik Asad. All rights reserved.</small>
          <a href="#home" className="footer-top-link">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer