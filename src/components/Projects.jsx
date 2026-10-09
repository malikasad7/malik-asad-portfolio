
function Projects() {
  const projects = [
    {
      title: 'Universal Health System',
      description:
        'A healthcare management system with patient, doctor and admin portals, appointment management, medical records and AI-based health features.',
      technologies: ['React', 'Node.js', 'MySQL', 'Prisma', 'AI'],
      github: 'https://github.com/malikasad7/Universal-Health-System',
      number: '01',
      category: 'FULL-STACK DEVELOPMENT',
      featured: true,
      symbol: '✚',
    },
    {
      title: 'V-fit AR',
      description:
        'An AI-powered virtual try-on application using real-time body tracking, computer vision and gesture-based interaction.',
      technologies: ['React', 'JavaScript', 'MediaPipe', 'Three.js', 'ONNX'],
      github: 'https://github.com/malikasad7/V-fit-AR-based-real-time-tryout',
      number: '02',
      category: 'AI & AUGMENTED REALITY',
      featured: false,
      symbol: '◈',
    },
    {
      title: 'E-commerce Chatbot',
      description:
        'A modern e-commerce application with an integrated conversational chatbot to assist users with product discovery.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/malikasad7/e-commerce-chatbot',
      number: '03',
      category: 'WEB APPLICATION',
      featured: false,
      symbol: '⌘',
    },
    {
      title: 'Multiclass Emotion Classifier',
      description:
        'A machine learning project using fine-tuned RoBERTa to classify text into six different emotions.',
      technologies: ['Python', 'NLP', 'RoBERTa', 'Machine Learning'],
      github: 'https://github.com/malikasad7/multiclass-emotion-classifier',
      number: '04',
      category: 'MACHINE LEARNING',
      featured: false,
      symbol: '✳',
    },
  ]

  return (
    <section id="projects" className="projects-section py-5">
      <div className="container py-5">

        <div className="text-center mb-5">
          <p className="projects-eyebrow">WHAT I'VE BUILT</p>

          <h2 className="section-title projects-heading">
            Featured <span>Projects</span>
          </h2>

          <div className="section-line mx-auto"></div>

          <p className="projects-description">
            A selection of my work in web development, artificial
            intelligence and machine learning.
          </p>
        </div>

        <div className="row g-4">
          {projects.map((project) => (
            <div className="col-md-6" key={project.number}>
              <article className="project-card project-modern-card">

                <div className="project-visual">
                  <span className="project-visual-symbol">
                    {project.symbol}
                  </span>

                  <span className="project-visual-number">
                    {project.number}
                  </span>

                  {project.featured && (
                    <span className="project-featured-badge">
                      Featured
                    </span>
                  )}
                </div>

                <div className="project-card-content">
                  <div className="project-top">
                    <span className="project-number">
                      {project.category}
                    </span>

                    <span className="project-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </div>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-tech-list">
                    {project.technologies.map((technology) => (
                      <span
                        className="project-tech-tag"
                        key={technology}
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-github-btn"
                  >
                    Explore Project <span>↗</span>
                  </a>
                </div>
              </article>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects