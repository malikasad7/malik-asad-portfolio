
function Experience() {
  return (
    <section id="experience" className="experience-section py-5">
      <div className="container py-5">

        <div className="text-center mb-5">
          <p className="experience-eyebrow">MY JOURNEY</p>

          <h2 className="section-title experience-heading">
            Professional <span>Experience</span>
          </h2>

          <div className="section-line mx-auto"></div>

          <p className="experience-description">
            Building practical skills through real-world web development
            and AI projects.
          </p>
        </div>

        <div className="experience-timeline">
          <div className="experience-dot"></div>

          <div className="experience-card">
            <div className="experience-header">
              <div className="experience-company-icon">
                NU
              </div>

              <div className="experience-title-group">
                <span className="experience-type">
                  INTERNSHIP
                </span>

                <h3>Web Developer Intern</h3>

                <h5>
                  National University of Medical Sciences (NUMS)
                </h5>
              </div>

              <span className="experience-date">
                2026 – Present
              </span>
            </div>

            <div className="experience-divider"></div>

            <p className="experience-summary">
              Gaining hands-on experience in web development while
              contributing to university website projects and exploring
              Artificial Intelligence solutions.
            </p>

            <ul className="experience-list">
              <li>
                Developing responsive and user-friendly web interfaces.
              </li>
              <li>
                Working with HTML, CSS, JavaScript and modern web technologies.
              </li>
              <li>
                Improving website layouts, design and functionality.
              </li>
              <li>
                Exploring AI technologies alongside web development.
              </li>
            </ul>

            <div className="experience-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Web Development</span>
              <span>AI</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience