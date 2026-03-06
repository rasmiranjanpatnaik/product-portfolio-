import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import './Resume.css';

const Resume: React.FC = () => {
  return (
    <div className="resume-page">
      <ScrollReveal visibleOnLoad>
        <div className="resume-wrap">
          <h1 className="resume-main-title">
            <span className="resume-main-title-inner">RESUME</span>
          </h1>

          <section className="resume-intro">
            <h2 className="resume-intro-greeting">Hey there,</h2>
            <h3 className="resume-intro-sub">fellow tech explorer!</h3>
            <p className="resume-intro-text">
              If my portfolio sparked your interest, I'd be thrilled to connect and chat about new
              opportunities. With a background in frontend development and a passion for building
              solutions, I'm now seeking roles in product management. Let's link up and see where
              our paths might cross!
            </p>
          </section>

          <div className="resume-decorative-line" aria-hidden="true">
            <span className="resume-line" />
            <svg className="resume-line-icon" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 10 L8 2 L12 10 L16 2 L20 10" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="resume-line" />
          </div>

          <section className="resume-connect">
            <h3 className="resume-connect-title">Let&apos;s Connect</h3>
            <div className="resume-social-links">
              <a href="mailto:rasmiranjanpatnaik2@gmail.com" className="resume-social-link" title="Email" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-envelope" aria-hidden="true" />
              </a>
              <a href="tel:+918144102018" className="resume-social-link" title="Phone" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-phone" aria-hidden="true" />
              </a>
              <a href="https://www.linkedin.com/in/rasmiranjanpatnaik/" className="resume-social-link" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin" aria-hidden="true" />
              </a>
              <a href="https://github.com/rasmiranjanpatnaik" className="resume-social-link" title="GitHub" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github" aria-hidden="true" />
              </a>
            </div>
            <a
              href={`${process.env.PUBLIC_URL || ''}/resume/Rasmi_Ranjan_Patnaik_Resume.pdf`}
              className="resume-download-btn"
              download="Rasmi_Ranjan_Patnaik_Resume.pdf"
            >
              <span className="resume-download-line" aria-hidden="true" />
              <span className="resume-download-text">Download Resume</span>
              <span className="resume-download-line" aria-hidden="true" />
            </a>
          </section>

          <div className="resume-two-col">
            <section className="resume-block">
              <h3 className="resume-block-title">My Passion</h3>
              <p className="resume-block-text">
                I break stuff with code, then fix it with design. Passion? Absolutely! Turning
                caffeine into clean code and creative pixels, I live to solve problems one clever
                line at a time.
              </p>
            </section>
            <section className="resume-block">
              <h3 className="resume-block-title">My Profession</h3>
              <p className="resume-block-text">
                Product manager by day, solution architect by passion. I analyze chaos, break down
                complex problems, and build products that users can't live without — all fueled by
                coffee.
              </p>
            </section>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default Resume;
