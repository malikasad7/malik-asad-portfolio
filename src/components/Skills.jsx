import { useEffect, useRef, useState } from 'react'

function Skills() {
  const sectionRef = useRef(null)
  const [animate, setAnimate] = useState(false)

  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 75 },
    { name: 'Bootstrap', level: 85 },
    { name: 'React.js', level: 75 },
    { name: 'Node.js', level: 65 },
    { name: 'Express.js', level: 65 },
    { name: 'Python', level: 75 },
    { name: 'MySQL', level: 70 },
    { name: 'Git & GitHub', level: 70 },
    { name: 'Artificial Intelligence', level: 75 },
    { name: 'Machine Learning', level: 65 },
  ]

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="skills"
      className="skills-section py-5"
      ref={sectionRef}
    >
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
            <div className="col-12 col-md-6" key={skill.name}>
              <div
                className="skill-progress-card"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="skill-name mb-0">{skill.name}</h5>
                  <span className="skill-percentage">
                    {skill.level}%
                  </span>
                </div>

                <div className="skill-progress-track">
                  <div
                    className={`skill-progress-fill ${
                      animate ? 'skill-progress-animate' : ''
                    }`}
                    style={{
                      '--skill-level': `${skill.level}%`,
                      animationDelay: `${index * 0.08}s`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills