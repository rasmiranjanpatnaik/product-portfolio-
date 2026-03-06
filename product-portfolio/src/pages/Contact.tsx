import React, { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import './Contact.css';

const introText =
  'Have a project in mind or want to discuss opportunities? I\'d love to hear from you. Drop a message below or reach out directly.';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState<'success' | 'error'>('success');
  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name?.trim() || !formData.email?.trim() || !formData.message?.trim()) {
      setAlertType('error');
      setAlertMessage('Please fill in all required fields.');
      setShowAlert(true);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setAlertType('error');
      setAlertMessage('Please enter a valid email address.');
      setShowAlert(true);
      return;
    }
    try {
      const subject = encodeURIComponent('Contact from Portfolio');
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || '—'}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:rasmiranjanpatnaik2@gmail.com?subject=${subject}&body=${body}`;
      setAlertType('success');
      setAlertMessage('Your email client should open with the message ready to send.');
      setShowAlert(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch {
      setAlertType('error');
      setAlertMessage('Something went wrong. Please try again.');
      setShowAlert(true);
    }
  };

  return (
    <div className="contact-page">
      <ScrollReveal visibleOnLoad>
        <div className="contact-wrap">
          <h1 className="contact-main-title">
            <span className="contact-main-title-inner">CONTACT</span>
          </h1>
          <p className="contact-intro">{introText}</p>

          <div className="contact-decorative-line" aria-hidden="true">
            <span className="contact-line" />
            <svg className="contact-line-icon" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 10 L8 2 L12 10 L16 2 L20 10" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="contact-line" />
          </div>

          <div className="contact-details-block">
            <div className="contact-item">
              <i className="fas fa-envelope" aria-hidden="true" />
              <div>
                <h5>Email</h5>
                <p>rasmiranjanpatnaik2@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone" aria-hidden="true" />
              <div>
                <h5>Phone</h5>
                <p>+91 8144102018</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fab fa-linkedin" aria-hidden="true" />
              <div>
                <h5>LinkedIn</h5>
                <p>
                  <a
                    href="https://www.linkedin.com/in/rasmiranjanpatnaik/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    linkedin.com/in/rasmiranjanpatnaik
                  </a>
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            {showAlert && (
              <div
                className={`contact-alert ${alertType === 'success' ? 'contact-alert-success' : 'contact-alert-error'}`}
                role="alert"
              >
                {alertMessage}
                <button type="button" className="contact-alert-dismiss" onClick={() => setShowAlert(false)} aria-label="Close">
                  ×
                </button>
              </div>
            )}

            <label className="contact-field">
              <span className="contact-field-label">ENTER YOUR NAME *</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="contact-input"
                required
              />
            </label>

            <label className="contact-field">
              <span className="contact-field-label">ENTER YOUR EMAIL *</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="contact-input"
                required
              />
            </label>

            <label className="contact-field">
              <span className="contact-field-label">PHONE NUMBER</span>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="contact-input"
              />
            </label>

            <label className="contact-field contact-field-textarea">
              <span className="contact-field-label">YOUR MESSAGE *</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="contact-input contact-textarea"
                rows={5}
                required
              />
            </label>

            <button type="submit" className="contact-submit">
              <span className="contact-submit-line" aria-hidden="true" />
              <span className="contact-submit-text">SUBMIT</span>
              <span className="contact-submit-line" aria-hidden="true" />
            </button>
          </form>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default Contact;
