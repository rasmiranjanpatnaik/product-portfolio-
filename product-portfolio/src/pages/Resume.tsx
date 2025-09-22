import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Resume.css';

const Resume: React.FC = () => {
  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/resume/Rasmi_Ranjan_Patnaik_Resume.pdf';
    link.download = 'Rasmi_Ranjan_Patnaik_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-container">
      <Container fluid className="resume-inner-container">
        <div 
          className="resume-hero-section"
          style={{
            backgroundImage: `url('/images/Resume-bg.png')`,
            backgroundSize: 'contain',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'scroll'
          }}
        >
          {/* Floating Particles */}
          <div className="floating-particles">
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
            <div className="particle particle-5"></div>
            <div className="particle particle-6"></div>
          </div>

          {/* Top Left - Introduction */}
          <div className="corner-content top-left">
            <div className="intro-text">
              <h2>Hey there,</h2>
              <h3>fellow tech explorer!</h3>
              <p>If my portfolio sparked your interest, I'd be thrilled to connect and chat about new opportunities. With a background in frontend development and a passion for building solutions, I'm now seeking roles in product management. Let's link up and see where our paths might cross!</p>
            </div>
          </div>

          {/* Top Right - Social Media Icons */}
          <div className="corner-content top-right">
            <h3 className="connect-title">Let's Connect</h3>
            <div className="social-links">
              <a href="mailto:rasmiranjanpatnaik2@gmail.com" className="social-link" title="Email" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="tel:+918144102018" className="social-link" title="Phone" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-phone"></i>
              </a>
              <a href="https://www.linkedin.com/in/rasmiranjanpatnaik/" className="social-link" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/rasmiranjanpatnaik" className="social-link" title="GitHub" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </div>
            <div className="resume-download-section">
              <a href="/resume/Rasmi_Ranjan_Patnaik_Resume.pdf" className="resume-download-btn" download="Rasmi_Ranjan_Patnaik_Resume.pdf">
                <i className="fas fa-download"></i>
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Left Corner - My Passion */}
          <div className="corner-content left-corner">
            <h3 className="corner-title">My Passion</h3>
            <p className="corner-text">
              I break stuff with code, then fix it with design.<br />
              Passion? Absolutely! Turning caffeine into clean code<br />
              and creative pixels, I live to solve problems one clever line at a time.
            </p>
          </div>

          {/* Right Corner - My Profession */}
          <div className="corner-content right-corner">
            <h3 className="corner-title">My Profession</h3>
            <p className="corner-text">
              Product manager by day, solution architect by passion.<br />
              I analyze chaos, break down complex problems, and build<br />
              products that users can't live without — all fueled by coffee.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Resume;
