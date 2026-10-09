
function About() {
  const highlights = [
    {
      number: '01',
      title: 'Web Development',
      description:
        'Building responsive, modern and user-friendly websites with clean design.',
    },
    {
      number: '02',
      title: 'Artificial Intelligence',
      description:
        'Exploring AI and machine learning to develop practical solutions.',
    },
    {
      number: '03',
      title: 'Real-World Experience',
      description:
        'Applying my skills to web projects during my internship at NUMS.',
    },
  ]

  return (
    <section id="about" className="about-section py-5">
      <div className="container py-5">
        <div className="row align-items-start g-5">
          <div className="col-lg-4">
            <p className="about-eyebrow">GET TO KNOW ME</p>

            <h2 className="section-title about-heading">
              About <span>Me</span>
            </h2>

            <div className="section-line"></div>

            <p className="about-side-text">
              Passionate about technology, creative development and
              building digital experiences that make a difference.
            </p>

            <a
              href="https://github.com/malikasad7"
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark about-github-btn"
            >
              Explore My GitHub <span>↗</span>
            </a>
          </div>

          <div className="col-lg-8">
            <div className="about-intro-card">
              <span className="about-card-mark">“</span>

              <p className="about-text">
                I am a Computer Science graduate specializing in
                Artificial Intelligence, with a strong interest in
                web development and modern technologies.
              </p>

              <p className="about-text">
                Currently, I am a Web Developer Intern at the
                National University of Medical Sciences (NUMS),
                gaining practical experience through real-world
                web development projects.
              </p>

              <p className="about-text">
                I enjoy turning ideas into responsive websites and
                exploring how AI can solve practical problems.
                I am always learning, experimenting and improving
                my development skills.
              </p>
            </div>

            <div className="about-highlights">
              {highlights.map((item) => (
                <div className="about-highlight-card" key={item.number}>
                  <span className="about-highlight-number">
                    {item.number}
                  </span>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>

                  <span className="about-highlight-arrow">↗</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About