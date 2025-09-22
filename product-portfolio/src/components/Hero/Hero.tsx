import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { socialLinks } from '../../data/portfolio';
import './Hero.css';

const Hero: React.FC = () => {
  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6} md={12} className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Hi, I'm Rasmi, a <span className="highlight">Product Manager</span> obsessed with design, user experience, and growth.
              </h1>
              
              <div className="social-resume-container">
                <div className="social-links">
                  {socialLinks.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      aria-label={link.name}
                    >
                      <i className={link.icon}></i>
                    </a>
                  ))}
                </div>
                
                <Link 
                  to="/resume"
                  className="resume-button"
                  aria-label="View Resume"
                >
                  <i className="fas fa-user"></i>
                  Resume
                </Link>
              </div>

              <div className="hero-experience">
                <h3 className="experience-title">MY EXPERIENCE</h3>
                
                <div className="experience-list">
                  <div className="experience-item">
                    <div className="company">Shadowfax</div>
                    <div className="position">SDE Frontend (Intern) • Nov-2024 - Present</div>
                  </div>
                  
                  <div className="experience-item">
                    <div className="company">Clinical AI Assitant (IIT Patna)</div>
                    <div className="position">Research Developer • Dec-2023 - April-2024</div>
                  </div>
                  
                  {/* <div className="experience-item">
                    <div className="company">Spotify</div>
                    <div className="position">Product Manager (UX/UI) • 2019 - 2021</div>
                  </div>
                  
                  <div className="experience-item">
                    <div className="company">Spotify</div>
                    <div className="position">Associate Product Manager • 2017 - 2019</div>
                  </div> */}
                </div>
              </div>
            </div>
          </Col>
          
          <Col lg={6} md={12} className="hero-image-col">
            <div className="hero-image-container">
              <img 
                src="/images/rasmi-profile.jpg.jpg" 
                alt="Rasmi Ranjan Patnaik" 
                className="hero-image"
              />
            </div>
          </Col>
        </Row>
        
        <div className="hero-cta">
          <div className="cta-content">
            <h2>Skills and Tools</h2>
            <div className="skills-content">
              <div className="skills-category">
                <h4 className="category-title">Technical Skills:</h4>
                <p className="skills-list">Jira, SQL, Python, Excel, API Integration, PySpark, AWS (Major Services), Data Bricks, Snowflake, Tableau, GIT.</p>
              </div>
              
              <div className="skills-category">
                <h4 className="category-title">Business and Product Skills:</h4>
                <p className="skills-list">Product Development Lifecycle, Data-Driven Decision Making, User Experience (UX) Optimization, Cross-functional Team Collaboration, Project Management and Agile Methodologies, Stakeholder Management, Business Intelligence, Process Optimization.</p>
              </div>
            </div>
          </div>
          <div className="cta-image">
            <img 
              src="/images/skill-avt.png" 
              alt="Skills and Tools" 
              className="cta-img"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
