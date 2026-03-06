import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import './UberKidsCaseStudy.css';

const UberKidsCaseStudy: React.FC = () => {
  return (
    <div className="case-study-page">
      <ScrollReveal visibleOnLoad>
      {/* Coming Soon Section */}
      <section 
        className="case-study-hero" 
        style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          alignItems: 'center',
          background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
          color: 'white',
          padding: '60px 0'
        }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} md={10} className="text-center">
              <div className="breadcrumb mb-4" style={{ marginBottom: '2rem' }}>
                <Link to="/" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none' }}>
                  Home
                </Link>
                <span style={{ color: 'rgba(255, 255, 255, 0.6)', margin: '0 10px' }}>/</span>
                <span style={{ color: 'white' }}>Uber Kids Case Study</span>
              </div>
              
              <div className="coming-soon-content">
                <div className="coming-soon-icon mb-4" style={{ marginBottom: '2rem' }}>
                  <i className="fas fa-tools" style={{ fontSize: '4rem', color: '#ffd700' }}></i>
                </div>
                
                <h1 
                  className="case-study-title mb-4" 
                  style={{ 
                    color: 'white', 
                    fontSize: '3rem', 
                    fontWeight: 'bold',
                    marginBottom: '2rem'
                  }}
                >
                  Uber Kids Case Study
                </h1>
                
                <h2 
                  className="coming-soon-subtitle mb-4" 
                  style={{ 
                    color: 'rgba(255, 255, 255, 0.9)', 
                    fontWeight: '400',
                    fontSize: '2rem',
                    marginBottom: '2rem'
                  }}
                >
                  Coming Soon
                </h2>
                
                <p 
                  className="section-text mb-5" 
                  style={{ 
                    fontSize: '1.2rem', 
                    maxWidth: '600px', 
                    margin: '0 auto 3rem',
                    color: 'rgba(255, 255, 255, 0.9)',
                    lineHeight: '1.6'
                  }}
                >
                  This case study is currently under development. We're working hard to bring you 
                  an in-depth look at the design process behind Uber Kids - a specialized ride-sharing 
                  service for families.
                </p>
                
                <div className="coming-soon-features mb-5" style={{ marginBottom: '3rem' }}>
                  <h4 className="mb-4" style={{ color: 'white', marginBottom: '2rem', fontSize: '1.5rem' }}>
                    What to expect:
                  </h4>
                  <Row className="justify-content-center">
                    <Col md={4} sm={6} className="mb-3">
                      <div 
                        className="feature-preview" 
                        style={{ 
                          padding: '1rem',
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          borderRadius: '10px',
                          marginBottom: '1rem'
                        }}
                      >
                        <i className="fas fa-shield-alt mb-2" style={{ fontSize: '2rem', color: '#ffd700', marginBottom: '0.5rem' }}></i>
                        <h6 style={{ color: 'white', margin: 0 }}>Safety-First Design</h6>
                      </div>
                    </Col>
                    <Col md={4} sm={6} className="mb-3">
                      <div 
                        className="feature-preview" 
                        style={{ 
                          padding: '1rem',
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          borderRadius: '10px',
                          marginBottom: '1rem'
                        }}
                      >
                        <i className="fas fa-users mb-2" style={{ fontSize: '2rem', color: '#ffd700', marginBottom: '0.5rem' }}></i>
                        <h6 style={{ color: 'white', margin: 0 }}>User Research</h6>
                      </div>
                    </Col>
                    <Col md={4} sm={6} className="mb-3">
                      <div 
                        className="feature-preview" 
                        style={{ 
                          padding: '1rem',
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          borderRadius: '10px',
                          marginBottom: '1rem'
                        }}
                      >
                        <i className="fas fa-mobile-alt mb-2" style={{ fontSize: '2rem', color: '#ffd700', marginBottom: '0.5rem' }}></i>
                        <h6 style={{ color: 'white', margin: 0 }}>Mobile Experience</h6>
                      </div>
                    </Col>
                  </Row>
                </div>
                
                <div className="cta-section" style={{ marginTop: '2rem' }}>
                  <Link 
                    to="/" 
                    className="btn btn-outline-light btn-lg me-3"
                    style={{ 
                      borderColor: 'white',
                      color: 'white',
                      marginRight: '1rem',
                      padding: '12px 24px'
                    }}
                  >
                    <i className="fas fa-arrow-left me-2"></i>
                    Back to Portfolio
                  </Link>
                  <Button 
                    variant="warning" 
                    size="lg" 
                    href="mailto:rasmi@example.com"
                    style={{ 
                      backgroundColor: '#ffd700',
                      borderColor: '#ffd700',
                      color: '#333',
                      padding: '12px 24px'
                    }}
                  >
                    <i className="fas fa-envelope me-2"></i>
                    Get Notified
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 
      COMMENTED OUT - ORIGINAL CASE STUDY CONTENT
      This content will be restored when the case study is complete
      
      <section className="case-study-hero">
        <Container>
          <Row>
            <Col lg={6} md={12}>
              <div className="case-study-hero-content">
                <div className="breadcrumb">
                  <Link to="/" className="breadcrumb-link">Home</Link>
                  <span className="breadcrumb-separator">/</span>
                  <span className="breadcrumb-current">Uber Kids Case Study</span>
                </div>
                
                <h1 className="case-study-title">
                  Uber Kids: Safe & reliable transportation for families
                </h1>
                
                <p className="case-study-subtitle">
                  Designing a specialized ride-sharing service that prioritizes child safety while providing parents with peace of mind and convenience.
                </p>
                
                <div className="case-study-meta">
                  <div className="meta-item">
                    <span className="meta-label">Role</span>
                    <span className="meta-value">Lead Product Manager</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Duration</span>
                    <span className="meta-value">8 months</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Team</span>
                    <span className="meta-value">12 members</span>
                  </div>
                </div>
                
                <div className="case-study-metrics">
                  <div className="metric">
                    <div className="metric-value">+78%</div>
                    <div className="metric-label">Parent Satisfaction</div>
                  </div>
                  <div className="metric">
                    <div className="metric-value">98%</div>
                    <div className="metric-label">Safety Rating</div>
                  </div>
                  <div className="metric">
                    <div className="metric-value">+52%</div>
                    <div className="metric-label">Family Bookings</div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6} md={12}>
              <div className="case-study-hero-image">
                <img 
                  src="/images/uber-kids-hero.jpg" 
                  alt="Uber Kids Case Study" 
                  className="hero-img"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="case-study-section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <h2 className="section-title">Project Overview</h2>
              <p className="section-text">
                Uber Kids emerged from the growing need for safe, reliable transportation options for children. 
                Parents needed a trustworthy service that could transport their kids to school, activities, and appointments 
                while providing real-time tracking and verified drivers.
              </p>
              
              <div className="challenge-solution">
                <Row>
                  <Col md={6}>
                    <div className="challenge-box">
                      <h4>The Challenge</h4>
                      <ul>
                        <li>Parents concerned about child safety</li>
                        <li>Lack of specialized kid-friendly drivers</li>
                        <li>No real-time communication with parents</li>
                        <li>Limited child-specific safety features</li>
                        <li>Complex booking for recurring trips</li>
                      </ul>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="solution-box">
                      <h4>The Solution</h4>
                      <ul>
                        <li>Rigorous driver background screening</li>
                        <li>Specialized child safety training</li>
                        <li>Live tracking and parent notifications</li>
                        <li>In-car safety features and cameras</li>
                        <li>Scheduled recurring trip options</li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="case-study-section bg-light">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <h2 className="section-title">Research & Insights</h2>
              <p className="section-text">
                We conducted extensive research with parents, children, and transportation experts to understand 
                the unique requirements and concerns around child transportation services.
              </p>
              
              <Row className="research-stats">
                <Col md={3} sm={6}>
                  <div className="stat-item">
                    <div className="stat-number">156</div>
                    <div className="stat-label">Parent Interviews</div>
                  </div>
                </Col>
                <Col md={3} sm={6}>
                  <div className="stat-item">
                    <div className="stat-number">2,800+</div>
                    <div className="stat-label">Survey Responses</div>
                  </div>
                </Col>
                <Col md={3} sm={6}>
                  <div className="stat-item">
                    <div className="stat-number">34</div>
                    <div className="stat-label">Focus Groups</div>
                  </div>
                </Col>
                <Col md={3} sm={6}>
                  <div className="stat-item">
                    <div className="stat-number">15</div>
                    <div className="stat-label">Safety Experts</div>
                  </div>
                </Col>
              </Row>
              
              <div className="research-insights">
                <h4>Key Research Findings</h4>
                <div className="insight-grid">
                  <div className="insight-item">
                    <div className="insight-icon">🛡️</div>
                    <div className="insight-content">
                      <h5>Safety First</h5>
                      <p>92% of parents prioritized safety features over convenience or cost</p>
                    </div>
                  </div>
                  <div className="insight-item">
                    <div className="insight-icon">📱</div>
                    <div className="insight-content">
                      <h5>Real-time Updates</h5>
                      <p>Parents wanted constant visibility into their child's journey</p>
                    </div>
                  </div>
                  <div className="insight-item">
                    <div className="insight-icon">👨‍👩‍👧‍👦</div>
                    <div className="insight-content">
                      <h5>Trust Building</h5>
                      <p>Driver vetting and credentials were crucial for parent confidence</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="case-study-section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <h2 className="section-title">Design Process</h2>
              
              <div className="process-timeline">
                <div className="process-step">
                  <div className="step-number">01</div>
                  <div className="step-content">
                    <h4>Safety-First Research</h4>
                    <p>Collaborated with child safety experts, parents, and regulatory bodies to establish comprehensive safety requirements and protocols.</p>
                  </div>
                </div>
                
                <div className="process-step">
                  <div className="step-number">02</div>
                  <div className="step-content">
                    <h4>Service Design</h4>
                    <p>Designed the end-to-end service experience including driver onboarding, vehicle requirements, and parent communication systems.</p>
                  </div>
                </div>
                
                <div className="process-step">
                  <div className="step-number">03</div>
                  <div className="step-content">
                    <h4>App Development</h4>
                    <p>Created specialized apps for parents and drivers with safety-focused features, real-time tracking, and emergency protocols.</p>
                  </div>
                </div>
                
                <div className="process-step">
                  <div className="step-number">04</div>
                  <div className="step-content">
                    <h4>Pilot & Iteration</h4>
                    <p>Launched pilot programs in select cities, gathered feedback, and continuously improved the service based on real-world usage.</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="case-study-section bg-light">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <h2 className="section-title">Safety-First Features</h2>
              
              <div className="solutions-grid">
                <Card className="solution-card">
                  <Card.Body>
                    <div className="solution-icon">🔒</div>
                    <Card.Title>Enhanced Driver Screening</Card.Title>
                    <Card.Text>
                      Comprehensive background checks, driving record verification, child safety training, 
                      and ongoing monitoring to ensure only qualified drivers transport children.
                    </Card.Text>
                  </Card.Body>
                </Card>
                
                <Card className="solution-card">
                  <Card.Body>
                    <div className="solution-icon">📹</div>
                    <Card.Title>In-Vehicle Safety Systems</Card.Title>
                    <Card.Text>
                      Interior cameras, child safety locks, booster seats, and emergency communication 
                      systems to ensure maximum safety during every trip.
                    </Card.Text>
                  </Card.Body>
                </Card>
                
                <Card className="solution-card">
                  <Card.Body>
                    <div className="solution-icon">📍</div>
                    <Card.Title>Real-time Parent Tracking</Card.Title>
                    <Card.Text>
                      Live GPS tracking, arrival notifications, photo confirmations, and direct 
                      communication channels between parents and drivers.
                    </Card.Text>
                  </Card.Body>
                </Card>
                
                <Card className="solution-card">
                  <Card.Body>
                    <div className="solution-icon">🚨</div>
                    <Card.Title>Emergency Protocols</Card.Title>
                    <Card.Text>
                      24/7 safety support, emergency contact systems, route deviation alerts, 
                      and immediate response protocols for any safety concerns.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="case-study-section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <h2 className="section-title">Parent Experience Design</h2>
              
              <div className="ux-features">
                <Row>
                  <Col md={6}>
                    <div className="ux-item">
                      <h5>Simplified Booking</h5>
                      <ul>
                        <li>One-tap booking for regular trips</li>
                        <li>Recurring schedule management</li>
                        <li>Multiple child profiles</li>
                        <li>Favorite driver selection</li>
                      </ul>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="ux-item">
                      <h5>Peace of Mind Features</h5>
                      <ul>
                        <li>Driver photo and credentials display</li>
                        <li>Real-time trip progress updates</li>
                        <li>Pickup and drop-off confirmations</li>
                        <li>Trip history and receipts</li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="case-study-section bg-light">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <h2 className="section-title">Results & Impact</h2>
              
              <div className="results-grid">
                <div className="result-item">
                  <div className="result-metric">+78%</div>
                  <div className="result-label">Parent Satisfaction</div>
                  <div className="result-description">Significant improvement in parent confidence and satisfaction</div>
                </div>
                
                <div className="result-item">
                  <div className="result-metric">98%</div>
                  <div className="result-label">Safety Rating</div>
                  <div className="result-description">Outstanding safety record with zero major incidents</div>
                </div>
                
                <div className="result-item">
                  <div className="result-metric">+52%</div>
                  <div className="result-label">Family Bookings</div>
                  <div className="result-description">Growth in families using Uber for child transportation</div>
                </div>
                
                <div className="result-item">
                  <div className="result-metric">4.9/5</div>
                  <div className="result-label">Driver Rating</div>
                  <div className="result-description">High-quality drivers specifically trained for children</div>
                </div>
              </div>
              
              <div className="testimonial">
                <blockquote>
                  "Uber Kids has been a game-changer for our family. I can finally have peace of mind 
                  knowing my daughter gets to school safely, and I can track every step of her journey. 
                  The drivers are amazing with kids!"
                </blockquote>
                <cite>- Maria S., Working Parent of Two</cite>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="case-study-section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <h2 className="section-title">Business Impact</h2>
              
              <div className="business-metrics">
                <Row>
                  <Col md={4}>
                    <div className="business-item">
                      <div className="business-number">$15M</div>
                      <div className="business-label">Revenue Growth</div>
                      <p>New revenue stream from family transportation market</p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="business-item">
                      <div className="business-number">25%</div>
                      <div className="business-label">Market Share</div>
                      <p>Captured significant portion of child transportation market</p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="business-item">
                      <div className="business-number">300+</div>
                      <div className="business-label">Certified Drivers</div>
                      <p>Specialized driver network across pilot cities</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="case-study-section bg-light">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <h2 className="section-title">Key Learnings</h2>
              
              <div className="learnings-list">
                <div className="learning-item">
                  <h4>Safety Cannot Be Compromised</h4>
                  <p>
                    When designing for children, safety must be the absolute priority. Every feature, 
                    process, and decision should be evaluated through the lens of child safety and 
                    parent peace of mind.
                  </p>
                </div>
                
                <div className="learning-item">
                  <h4>Trust is Built Through Transparency</h4>
                  <p>
                    Parents need complete visibility and control. Providing real-time information, 
                    clear communication, and transparent processes builds the trust necessary for 
                    this sensitive service.
                  </p>
                </div>
                
                <div className="learning-item">
                  <h4>Specialized Training is Essential</h4>
                  <p>
                    Regular drivers cannot simply transport children. Specialized training, ongoing 
                    education, and child-specific protocols are essential for success in this market.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="case-study-section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <h2 className="section-title">Future Vision</h2>
              <p className="section-text">
                We're expanding Uber Kids to more cities and exploring partnerships with schools, 
                childcare centers, and activity programs to provide comprehensive transportation solutions for families.
              </p>
              
              <div className="cta-section">
                <h4>Want to learn more about designing for child safety?</h4>
                <Button variant="primary" size="lg" href="mailto:rasmi@example.com">
                  Get in Touch
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="case-study-navigation">
        <Container>
          <Row>
            <Col md={6}>
              <Link to="/case-study/paypal" className="nav-link-back">
                <i className="fas fa-arrow-left"></i>
                Previous Case Study
              </Link>
            </Col>
            <Col md={6} className="text-end">
              <Link to="/" className="nav-link-next">
                Back to Portfolio
                <i className="fas fa-arrow-right"></i>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      */}
      </ScrollReveal>
    </div>
  );
};

export default UberKidsCaseStudy;
