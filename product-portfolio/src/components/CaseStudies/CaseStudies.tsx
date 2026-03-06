import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { caseStudies } from '../../data/portfolio';
import './CaseStudies.css';

const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="case-studies-section">
      <Container>
        <div className="section-header text-center">
          <h2 className="section-title">Case Studies</h2>
          <p className="section-subtitle">
            Deep dives into product challenges and the design thinking process behind solving them
          </p>
        </div>
        
        <Row className="g-4">
          {caseStudies.map((caseStudy, index) => (
            <Col lg={4} md={6} key={caseStudy.id}>
              <Card className="case-study-card h-100">
                <div className="case-study-image">
                  <img 
                    src={caseStudy.image} 
                    alt={caseStudy.title}
                    className="card-img"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                
                <Card.Body className="case-study-body">
                  <Card.Title className="case-study-title">
                    {caseStudy.title}
                  </Card.Title>
                  
                  <Card.Subtitle className="case-study-subtitle mb-3">
                    {caseStudy.subtitle}
                  </Card.Subtitle>
                  
                  <Card.Text className="case-study-description">
                    {caseStudy.description}
                  </Card.Text>
                  
                  {caseStudy.metrics && (
                    <div className="case-study-metrics">
                      <h6 className="metrics-title">Key Results</h6>
                      <div className="metrics-list">
                        {caseStudy.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="metric-item">
                            <span className="metric-value">{metric.value}</span>
                            <span className="metric-label">{metric.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </Card.Body>
                
                <Card.Footer className="case-study-footer">
                  {caseStudy.id === 'uber-eats' ? (
                    <Link to="/case-study/uber-eats">
                      <Button 
                        variant="outline-primary" 
                        className="case-study-btn"
                      >
                        View Case Study
                      </Button>
                    </Link>
                  ) : caseStudy.id === 'paypal' ? (
                    <Link to="/case-study/paypal">
                      <Button 
                        variant="outline-primary" 
                        className="case-study-btn"
                      >
                        View Case Study
                      </Button>
                    </Link>
                  ) : caseStudy.id === 'Uber Kid' ? (
                    <Link to="/case-study/uber-kids">
                      <Button 
                        variant="outline-primary" 
                        className="case-study-btn"
                      >
                        View Case Study
                      </Button>
                    </Link>
                  ) : caseStudy.detailUrl ? (
                    <Button 
                      variant="outline-primary" 
                      className="case-study-btn"
                      href={caseStudy.detailUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Case Study
                    </Button>
                  ) : (
                    <Button 
                      variant="outline-primary" 
                      className="case-study-btn"
                      disabled
                    >
                      Coming Soon
                    </Button>
                  )}
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
        
      </Container>
    </section>
  );
};

export default CaseStudies;
