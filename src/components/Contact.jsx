
import { useState } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')

    try {
      await emailjs.send(
        'portfolio_contact',
        'template_0ow5ug6',
        {
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message,
        },
        'aBkC6LePFs-R1-8dv'
      )

      setStatus('Message sent successfully!')
      setFormData({
        name: '',
        email: '',
        message: '',
      })
    } catch (error) {
      setStatus('Message could not be sent. Please try again.')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container py-5">

        <div className="text-center mb-5">
          <p className="contact-eyebrow">LET'S TALK</p>

          <h2 className="section-title contact-heading">
            Let's <span>Connect</span>
          </h2>

          <div className="section-line mx-auto"></div>

          <p className="contact-description">
            Have an idea, project, or opportunity? I'd love to hear from you.
          </p>
        </div>

        <div className="contact-card contact-modern-card mx-auto">
          <div className="contact-intro">
            <span className="contact-label">GET IN TOUCH</span>

            <h3>
              Let's build something <span>great.</span>
            </h3>

            <p>
              I'm interested in web development, Artificial Intelligence,
              and opportunities to create useful digital experiences.
              Send me a message and let's discuss your idea.
            </p>

            <div className="contact-info-item">
              <div className="contact-info-icon">@</div>
              <div>
                <span>Email me at</span>
                <a href="mailto:malikasad8586@gmail.com">
                  malikasad8586@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">↗</div>
              <div>
                <span>Find me on</span>
                <a
                  href="https://www.linkedin.com/in/malikasad7/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>

            <div className="contact-availability">
              <span className="contact-availability-dot"></span>
              Open to opportunities and collaboration
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="mb-4">
              <label htmlFor="contact-name" className="contact-field-label">
                Your Name
              </label>

              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="form-control contact-input"
                autoComplete="name"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="contact-email" className="contact-field-label">
                Email Address
              </label>

              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="form-control contact-input"
                autoComplete="email"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="contact-message"
                className="contact-field-label"
              >
                Your Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell me about your project or idea..."
                value={formData.message}
                onChange={handleChange}
                className="form-control contact-input"
                rows={5}
                required
              />
            </div>

            <button
              type="submit"
              className="contact-submit-btn"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
              {!loading && <span> ↗</span>}
            </button>

            {status && (
              <p
                className={`contact-status ${
                  status.startsWith('Message sent')
                    ? 'contact-status-success'
                    : 'contact-status-error'
                }`}
                role="status"
                aria-live="polite"
              >
                {status}
              </p>
            )}
          </form>
        </div>

      </div>
    </section>
  )
}

export default Contact