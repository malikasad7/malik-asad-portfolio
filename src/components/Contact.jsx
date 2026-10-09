function Contact() {
  return (
    <section id="contact" className="contact-section py-5">
      <div className="container py-5">

        <div className="text-center mb-5">
          <h2 className="section-title">Let's Work Together</h2>
          <div className="section-line mx-auto"></div>
          <p className="section-description">
            Have a project or opportunity? Feel free to get in touch.
          </p>
        </div>

        <div className="row justify-content-center">

          <div className="col-lg-7">

            <form className="contact-form">

              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-dark">
                Send Message
              </button>

            </form>

            <div className="contact-links mt-4 text-center">
              <a
                href="https://github.com/malikasad7ya"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/malikasad7/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact