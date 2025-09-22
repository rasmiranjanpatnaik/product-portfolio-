import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <Container>
        <Row className="footer-main">
          <Col lg={4} md={12} className="footer-left">
            <h2 className="footer-name">Rasmi Ranjan Patnaik</h2>
            <div className="footer-social-icons">
              <a href="https://www.linkedin.com/in/rasmiranjanpatnaik/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://youtube.com/@rasmiranjanpatnaik" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://medium.com/@patnaikrasmiranjan6" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-medium"></i>
              </a>
              <a href="" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </Col>
          
          <Col lg={8} md={12} className="footer-right">
            <div className="footer-columns">
              <div className="footer-column">
                <h6 className="footer-column-title">Work With Me</h6>
                <ul className="footer-links">
                  <li><a href="#contact">Contact Me</a></li>
                  <li><a href="#work">Product Careerlyst</a></li>
                </ul>
              </div>
              
              <div className="footer-column">
                <h6 className="footer-column-title">My Work</h6>
                <ul className="footer-links">
                  <li><a href="#work">Grow Therapy</a></li>
                  <li><a href="#work">SageSpot</a></li>
                  <li><a href="#work">Squarespace</a></li>
                  <li><a href="#work">SeatGeek</a></li>
                </ul>
              </div>
              
              <div className="footer-column">
                <h6 className="footer-column-title">Side Projects</h6>
                <ul className="footer-links">
                  <li><a href="#work">Braise</a></li>
                  <li><a href="#work">Chin Up!</a></li>
                  <li><a href="#work">Networking Assistant</a></li>
                  <li><a href="#work">Stand Up For Change</a></li>
                </ul>
              </div>
              
              <div className="footer-column">
                <h6 className="footer-column-title">Case Studies</h6>
                <ul className="footer-links">
                  <li><a href="#case-studies">Uber Eats</a></li>
                  <li><a href="#case-studies">PayPal</a></li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
        
        <div className="footer-copyright-section">
          <Container>
            <Row>
              <Col>
                <div className="footer-copyright-content">
                  <p className="footer-copyright-text">
                    © {currentYear} Rasmi Ranjan Patnaik. All rights reserved.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
