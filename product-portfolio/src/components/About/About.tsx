import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <Container>
        <Row>
          <Col lg={6} md={12} className="about-content">
            <h2 className="about-title">About me</h2>
            <div className="about-text">
              <p>
                I started at Computer Science at the College of KIIT University , but 
                quickly realized my passion was more in understanding user needs and business 
                problems. I pivoted my studies from engineering to a more business-oriented 
                curriculum, leading to a degree in Product Management and Design.
              </p>
              
              <p>
                I’m Rasmi Ranjan Patnaik, currently an SDE Frontend Developer (Intern) at Shadowfax. While my journey began in engineering, I discovered that my real passion lies in connecting technology with business strategy to build products that truly solve user problems. Product Management excites me because it’s about understanding customer needs at a deep level, collaborating with diverse teams, and driving innovations that deliver meaningful impact to both users and the business.
              </p>
              
              <p>
               What I bring to the table is a blend of technical expertise and product thinking. My experience as an SDE means I can bridge the gap between engineering and business, ensuring every solution is not only feasible but strategically sound. I thrive on collaboration, having worked side-by-side with product teams to deliver impactful features at Shadowfax. I’m committed to uncovering what users truly need—not just what they say—and advocating for their satisfaction throughout the product lifecycle.
              </p>
              
              <p>
                You should consider me for your team because I offer a fresh perspective, an outcome-driven approach, and a genuine excitement for building products that make a difference. My ability to learn quickly, inspire teams, and focus on measurable results would help take your product initiatives to the next level. I’m ready to help create products that users love and drive real business growth.
              </p>
              
              <p>
                <strong>Interested in working together?</strong> <a href="#contact">Drop me a line</a>.
              </p>
            </div>
          </Col>
          
          <Col lg={6} md={12} className="about-image-col">
            <div className="about-image-container">
              <img 
                src="/images/about-workspace.png" 
                alt="Rasmi's workspace" 
                className="about-image"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
