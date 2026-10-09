
function Education() {
  return (
    <section id="education" className="education-section py-5">
      <div className="container py-5">

        <div className="text-center mb-5">
          <p className="education-eyebrow">MY ACADEMIC JOURNEY</p>

          <h2 className="section-title education-heading">
            Education & <span>Learning</span>
          </h2>

          <div className="section-line mx-auto"></div>

          <p className="education-description">
            Building a strong foundation in computer science and artificial
            intelligence.
          </p>
        </div>

        <div className="education-card">
          <div className="education-icon">
            <span>✦</span>
          </div>

          <div className="education-content">
            <div className="education-top">
              <span className="education-badge">
                BACHELOR'S DEGREE
              </span>

              <span className="education-year">
                Completed
              </span>
            </div>

            <h3>BS Computer Science</h3>

            <h5>Specialization in Artificial Intelligence</h5>

            <p className="education-institute">
              HITEC University
            </p>

            <p className="education-summary">
              Completed my bachelor's studies in Computer Science,
              developing a foundation in programming, software development,
              and Artificial Intelligence.
            </p>

            <div className="education-tags">
              <span>Computer Science</span>
              <span>Artificial Intelligence</span>
              <span>Software Development</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Education