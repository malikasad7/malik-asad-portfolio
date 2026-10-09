function Skills() {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'Bootstrap',
    'React.js',
    'Node.js',
    'Express.js',
    'Python',
    'MySQL',
    'Git & GitHub',
    'Artificial Intelligence',
    'Machine Learning'
  ]

  return (
    <section id="skills" className="skills-section py-5">
      <div className="container py-5">

        <div className="text-center mb-5">
          <h2 className="section-title">My Skills</h2>
          <div className="section-line mx-auto"></div>
          <p className="section-description">
            Technologies and tools I use to build modern applications.
          </p>
        </div>

        <div className="row g-4">
          {skills.map((skill, index) => (
            <div className="col-6 col-md-4 col-lg-3" key={index}>
              <div className="skill-card">
                {skill}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills