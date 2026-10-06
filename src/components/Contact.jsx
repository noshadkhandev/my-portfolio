import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({ text: '', type: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setStatus({ text: 'Please fill out all fields.', type: 'error' });
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus({ text: 'Please enter a valid email address.', type: 'error' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ text: 'Sending message...', type: 'loading' });

    setTimeout(() => {
      setStatus({ text: 'Message sent successfully! ✅', type: 'success' });
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setStatus({ text: '', type: '' });
      }, 4000);
    }, 1500);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
      
        <h2 className="section-title">
          Let's build something <span className="text-grad">great</span>.
        </h2>

        <div className="contact-grid">
          {/* Contact Details */}
          <div className="contact-info">
            <p className="contact-lead">
              Have a project in mind or just want to say hi? My inbox is always open.
            </p>

            <a href="mailto:nowshadkhan9901@gmail.com" className="contact-row" aria-label="Send email to nowshadkhan9901@gmail.com">
              <span className="contact-icon" aria-hidden="true">
                <i className="fa-solid fa-envelope"></i>
              </span>
              <div>
                <span className="contact-label">Email</span>
                <span className="contact-value">nowshadkhan9901@gmail.com</span>
              </div>
            </a>

            <a href="tel:+923315200501" className="contact-row" aria-label="Call Nowshad Ahmad at +92 331 5200501">
              <span className="contact-icon" aria-hidden="true">
                <i className="fa-solid fa-phone"></i>
              </span>
              <div>
                <span className="contact-label">Phone</span>
                <span className="contact-value">+92 331 5200501</span>
              </div>
            </a>

            <div className="contact-row">
              <span className="contact-icon" aria-hidden="true">
                <i className="fa-solid fa-location-dot"></i>
              </span>
              <div>
                <span className="contact-label">Location</span>
                <span className="contact-value">Karachi, Pakistan</span>
              </div>
            </div>

            <a
              href="https://wa.me/923315200501"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary contact-wa-btn"
            >
              <i className="fa-brands fa-whatsapp"></i> Message on WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <form className="contact-form glass-card" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder=" "
                />
                <label htmlFor="name">Your Name</label>
              </div>

              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder=" "
                />
                <label htmlFor="email">Your Email</label>
              </div>
            </div>

            <div className="form-group">
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label htmlFor="subject">Subject</label>
            </div>

            <div className="form-group">
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder=" "
              ></textarea>
              <label htmlFor="message">Message</label>
            </div>

            <button
              type="submit"
              className="btn btn-primary form-submit"
              disabled={isSubmitting}
            >
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>{' '}
              <i className="fa-solid fa-paper-plane" aria-hidden="true"></i>
            </button>

            {status.text && (
              <p
                className={`form-status ${status.type}`}
                role="status"
                aria-live="polite"
              >
                {status.text}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
