import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { projects } from '../../data/portfolio';
import './Work.css';

const Work: React.FC = () => {
  return (
    <section id="work" className="work-section">
      <Container>
        <div className="section-header text-center">
          <h2 className="section-title">My Work</h2>
          <p className="section-subtitle">
            A collection of projects I've worked on, ranging from early-stage startups to established companies
          </p>
        </div>
        
        <Row className="g-4">
          {projects.map((project, index) => (
            <Col lg={6} md={12} key={project.id}>
              <Card className="work-card h-100">
                <div className="work-card-image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="card-img"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="work-card-overlay">
                    <div className="work-card-actions">
                      {project.liveUrl && (
                        <Button 
                          variant="light" 
                          size="sm"
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="work-action-btn"
                        >
                          View Project
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button 
                          variant="outline-light" 
                          size="sm"
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="work-action-btn"
                        >
                          View Code
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
                
                <Card.Body className="work-card-body">
                  <div className="work-card-header">
                    <Card.Title className="work-card-title">
                      {project.title}
                    </Card.Title>
                    <span className="work-card-category">
                      {project.category}
                    </span>
                  </div>
                  
                  <Card.Text className="work-card-description">
                    {project.description}
                  </Card.Text>
                  
                  <div className="work-card-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Work;
