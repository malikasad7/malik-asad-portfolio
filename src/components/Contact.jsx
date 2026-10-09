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
          <h2 className="section-title">Let's Connect</h2>
          <div className="section-line mx-auto"></div>
          <p className="section-description">
            Have a project or opportunity in mind? Send me a message.
          </p>
        </div>

        <div className="contact-card mx-auto">
          <div className="contact-intro">
            <span className="contact-label">GET IN TOUCH</span>
            <h3>Let's work together.</h3>
            <p>
              I'm interested in web development, AI projects, and
              opportunities to build useful digital experiences.
            </p>
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
                Your Email
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
                placeholder="Tell me about your idea..."
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