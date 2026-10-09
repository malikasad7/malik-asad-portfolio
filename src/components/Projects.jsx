function Projects() {
  const projects = [
    {
      title: 'Universal Health System',
      description:
        'A full-stack healthcare management system with patient, doctor and admin portals, appointment management, medical records and AI-based health features.',
      technologies: ['React', 'Node.js', 'MySQL', 'Prisma', 'AI'],
      github: 'https://github.com/malikasad7/Universal-Health-System',
      number: '01',
    },
    {
      title: 'V-fit AR',
      description:
        'An AI-powered virtual try-on application using real-time body tracking, computer vision and gesture-based interaction.',
      technologies: ['React', 'JavaScript', 'MediaPipe', 'Three.js', 'ONNX'],
      github: 'https://github.com/malikasad7/V-fit-AR-based-real-time-tryout',
      number: '02',
    },
    {
      title: 'E-commerce Chatbot',
      description:
        'A modern e-commerce application with an integrated conversational chatbot designed to assist users with product discovery.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/malikasad7/e-commerce-chatbot',
      number: '03',
    },
    {
      title: 'Multiclass Emotion Classifier',
      description:
        'A machine learning project using fine-tuned RoBERTa to classify text into six different emotions.',
      technologies: ['Python', 'NLP', 'RoBERTa', 'Machine Learning'],
      github: 'https://github.com/malikasad7/multiclass-emotion-classifier',
      number: '04',
    },
  ]

  return (
    <section id="projects" className="projects-section py-5">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="section-title">My Projects</h2>
          <div className="section-line mx-auto"></div>
          <p className="section-description">
            Some of the projects I have built and worked on.
          </p>
        </div>

        <div className="row g-4">
          {projects.map((project) => (
            <div className="col-md-6" key={project.number}>
              <article className="project-card">
                <div className="project-card-content">
                  <div className="project-top">
                    <span className="project-number">
                      PROJECT / {project.number}
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
                    View on GitHub <span>↗</span>
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