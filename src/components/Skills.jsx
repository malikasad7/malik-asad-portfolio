
import { useEffect, useRef, useState } from 'react'

function Skills() {
  const sectionRef = useRef(null)
  const [animate, setAnimate] = useState(false)

  const groups = [
    {
      title: 'Frontend Development',
      icon: '✦',
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 75 },
        { name: 'Bootstrap', level: 85 },
        { name: 'React.js', level: 75 },
      ],
    },
    {
      title: 'Backend & Database',
      icon: '⌘',
      skills: [
        { name: 'Node.js', level: 65 },
        { name: 'Express.js', level: 65 },
        { name: 'Python', level: 75 },
        { name: 'MySQL', level: 70 },
        { name: 'Git & GitHub', level: 70 },
      ],
    },
    {
      title: 'AI & Machine Learning',
      icon: '✳',
      skills: [
        { name: 'Artificial Intelligence', level: 75 },
        { name: 'Machine Learning', level: 65 },
      ],
    },
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
      { threshold: 0.15 }
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
          <p className="skills-eyebrow">WHAT I WORK WITH</p>

          <h2 className="section-title skills-heading">
            My <span>Skills</span>
          </h2>

          <div className="section-line mx-auto"></div>

          <p className="section-description">
            Technologies and tools I use to build modern web applications
            and explore AI-powered solutions.
          </p>
        </div>

        <div className="row g-4">
          {groups.map((group, groupIndex) => (
            <div
              className="col-12 col-lg-4"
              key={group.title}
            >
              <div
                className="skills-category-card"
                style={{ animationDelay: `${groupIndex * 0.15}s` }}
              >
                <div className="skills-category-heading">
                  <span className="skills-category-icon">
                    {group.icon}
                  </span>

                  <h3>{group.title}</h3>
                </div>

                <div className="skills-list">
                  {group.skills.map((skill, index) => (
                    <div className="skill-item" key={skill.name}>
                      <div className="skill-item-info">
                        <span className="skill-name">
                          {skill.name}
                        </span>

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
                            animationDelay: `${(
                              groupIndex * 0.2 +
                              index * 0.08
                            )}s`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
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