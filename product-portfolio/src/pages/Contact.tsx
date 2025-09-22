import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState<'success' | 'error'>('success');
  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setAlertType('error');
      setAlertMessage('Please fill in all required fields.');
      setShowAlert(true);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setAlertType('error');
      setAlertMessage('Please enter a valid email address.');
      setShowAlert(true);
      return;
    }

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      
      const mailtoLink = `mailto:rasmiranjanpatnaik2@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
      
      setAlertType('success');
      setAlertMessage('Your email client should open with the message ready to send!');
      setShowAlert(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setAlertType('error');
      setAlertMessage('There was an error opening your email client. Please try again.');
      setShowAlert(true);
    }
  };

  return (
    <div className="contact-page">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={10}>
            <div className="contact-header">
              <h1 className="contact-title">Get In Touch</h1>
              <p className="contact-subtitle">
                Have a project in mind or want to discuss opportunities? 
                I'd love to hear from you!
              </p>
            </div>

            <div className="contact-content">
              <Row>
                <Col lg={6} md={12}>
                  <div className="contact-info">
                    <h3>Let's Connect</h3>
                    <p>
                      I'm always interested in new opportunities and exciting projects. 
                      Whether you have a question, want to collaborate, or just want to say hi, 
                      feel free to reach out!
                    </p>
                    
                    <div className="contact-details">
                      <div className="contact-item">
                        <i className="fas fa-envelope"></i>
                        <div>
                          <h5>Email</h5>
                          <p>rasmiranjanpatnaik2@gmail.com</p>
                        </div>
                      </div>
                      
                      <div className="contact-item">
                        <i className="fas fa-phone"></i>
                        <div>
                          <h5>Phone</h5>
                          <p>+91 8144102018</p>
                        </div>
                      </div>
                      
                      <div className="contact-item">
                        <i className="fab fa-linkedin"></i>
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
                  </div>
                </Col>
                
                <Col lg={6} md={12}>
                  <div className="contact-form-container">
                    <Form onSubmit={handleSubmit}>
                      {showAlert && (
                        <Alert 
                          variant={alertType === 'success' ? 'success' : 'danger'}
                          onClose={() => setShowAlert(false)}
                          dismissible
                          className="contact-alert"
                        >
                          {alertMessage}
                        </Alert>
                      )}
                      
                      <Form.Group className="mb-3">
                        <Form.Label>Name *</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                        />
                      </Form.Group>
                      
                      <Form.Group className="mb-3">
                        <Form.Label>Email *</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </Form.Group>
                      
                      <Form.Group className="mb-3">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="What's this about?"
                        />
                      </Form.Group>
                      
                      <Form.Group className="mb-4">
                        <Form.Label>Message *</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={5}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell me about your project or question..."
                          required
                        />
                      </Form.Group>
                      
                      <Button 
                        type="submit" 
                        className="contact-submit-btn"
                        size="lg"
                      >
                        <i className="fas fa-paper-plane me-2"></i>
                        Send Message
                      </Button>
                    </Form>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
