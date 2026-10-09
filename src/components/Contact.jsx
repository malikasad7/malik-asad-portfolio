
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

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
      );

      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('Message could not be sent. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="container py-5">
      <h2 className="text-center mb-4">Contact Me</h2>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="form-control mb-3"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="form-control mb-3"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="form-control mb-3"
          rows="5"
          required
        />

        <button
          type="submit"
          className="btn btn-dark"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>

        {status && <p className="mt-3">{status}</p>}
      </form>
    </section>
  );
}

export default Contact;