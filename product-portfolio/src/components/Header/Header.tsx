import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = () => {
    setExpanded(false);
  };

  const scrollToSection = (sectionId: string) => {
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    handleNavClick();
  };

  return (
    <Navbar 
      expand="lg" 
      className="custom-navbar fixed-top" 
      expanded={expanded}
      onToggle={(expanded) => setExpanded(expanded)}
    >
      <Container>
        <Navbar.Brand 
          as={Link}
          to="/"
          className="navbar-brand-custom"
          onClick={handleNavClick}
        >
          Rasmi Ranjan Patnaik
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              onClick={() => scrollToSection('work')}
              className="nav-link-custom"
            >
              Work
            </Nav.Link>
            <Nav.Link 
              onClick={() => scrollToSection('case-studies')}
              className="nav-link-custom"
            >
              Case Studies
            </Nav.Link>
            <Nav.Link 
              as={Link}
              to="/contact"
              className="nav-link-custom"
              onClick={handleNavClick}
            >
              Contact
            </Nav.Link>
            <Nav.Link 
              as={Link}
              to="/resume"
              className="nav-link-custom resume-nav-link"
              onClick={handleNavClick}
            >
              <i className="fas fa-user me-1"></i>
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
