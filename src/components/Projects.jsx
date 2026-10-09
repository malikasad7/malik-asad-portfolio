function Projects() {
  const projects = [
    {
      title: 'Universal Health System',
      description:
        'A full-stack healthcare management system with patient, doctor and admin portals, appointment management, medical records and AI-based health features.',
      technologies: 'React • Node.js • MySQL • Prisma • AI',
      github: 'https://github.com/malikasad7ya/Universal-Health-System'
    },
    {
      title: 'V-fit AR',
      description:
        'An AI-powered virtual try-on application using real-time body tracking, computer vision and gesture-based interaction.',
      technologies: 'React • JavaScript • MediaPipe • Three.js • ONNX',
      github: 'https://github.com/malikasad7ya/V-fit-AR-based-real-time-tryout'
    },
    {
      title: 'E-commerce Chatbot',
      description:
        'A modern e-commerce application with an integrated conversational chatbot designed to assist users with product discovery.',
      technologies: 'Next.js • React • TypeScript • Tailwind CSS',
      github: 'https://github.com/malikasad7ya/e-commerce-chatbot'
    },
    {
      title: 'Multiclass Emotion Classifier',
      description:
        'A machine learning project using fine-tuned RoBERTa to classify text into six different emotions.',
      technologies: 'Python • NLP • RoBERTa • Machine Learning',
      github: 'https://github.com/malikasad7ya/multiclass-emotion-classifier'
    }
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
          {projects.map((project, index) => (
            <div className="col-md-6" key={index}>
              <div className="project-card">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.technologies}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-dark mt-3"
                >
                  View on GitHub
                </a>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects