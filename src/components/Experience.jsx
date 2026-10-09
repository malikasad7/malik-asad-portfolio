
function Experience() {
  const experiences = [
    {
      company: 'National University of Medical Sciences (NUMS)',
      initials: 'NU',
      role: 'Web Developer Intern',
      date: '2026 – Present',
      summary:
        'Gaining hands-on experience in web development while contributing to university website projects and exploring Artificial Intelligence solutions.',
      points: [
        'Developing responsive and user-friendly web interfaces.',
        'Working with HTML, CSS, JavaScript and modern web technologies.',
        'Improving website layouts, design and functionality.',
        'Exploring AI technologies alongside web development.',
      ],
      tags: ['HTML', 'CSS', 'JavaScript', 'Web Development', 'AI'],
    },
    {
      company: 'Emergent Software Services',
      initials: 'ES',
      role: 'Web Developer Intern',
      date: 'July 2025 – September 2025',
      summary:
        'Completed a web development internship, gaining practical exposure to website development and modern web technologies.',
      points: [
        'Gained practical experience in web development.',
        'Worked on website design and development tasks.',
        'Strengthened understanding of web technologies.',
      ],
      tags: ['Web Development', 'HTML', 'CSS', 'JavaScript'],
    },
  ]

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
          {experiences.map((experience, index) => (
            <div className="experience-card" key={experience.company}>
              <div className="experience-header">
                <div className="experience-company-icon">
                  {experience.initials}
                </div>

                <div className="experience-title-group">
                  <span className="experience-type">INTERNSHIP</span>

                  <h3>{experience.role}</h3>
                  <h5>{experience.company}</h5>
                </div>

                <span className="experience-date">
                  {experience.date}
                </span>
              </div>

              <div className="experience-divider"></div>

              <p className="experience-summary">
                {experience.summary}
              </p>

              <ul className="experience-list">
                {experience.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="experience-tags">
                {experience.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience