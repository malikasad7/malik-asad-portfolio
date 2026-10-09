function About() {
  return (
    <section id="about" className="about-section py-5">
      <div className="container py-5">

        <div className="row align-items-center">

          <div className="col-lg-5 mb-4 mb-lg-0">
            <h2 className="section-title">About Me</h2>
            <div className="section-line"></div>
          </div>

          <div className="col-lg-7">
            <p className="about-text">
              I am a Computer Science graduate with a specialization in
              Artificial Intelligence and a strong interest in Web Development.
            </p>

            <p className="about-text">
              Currently, I am working as a Web Developer Intern at the
              National University of Medical Sciences (NUMS), where I am
              gaining practical experience by working on real-world web
              projects.
            </p>

            <p className="about-text">
              I enjoy building modern, responsive and user-friendly websites
              while continuously improving my skills in modern web technologies
              and Artificial Intelligence.
            </p>

            <a
              href="https://github.com/malikasad7ya"
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark mt-3"
            >
              View GitHub
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}

export default About