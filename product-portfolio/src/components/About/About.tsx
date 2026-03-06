import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const shortNote =
  "I'm an AI Product Manager at Scaler, where I drive product initiatives that sit at the intersection of user needs and AI capabilities. " +
  "I focus on discovery, metrics, and cross-functional execution to ship impact—from LLM-powered experiences to workflow automation and beyond.";

const scrollToCaseStudies = (e: React.MouseEvent) => {
  if (window.location.pathname === '/') {
    e.preventDefault();
    document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' });
  }
};

const About: React.FC = () => {
  return (
    <section id="about" className="about-section" aria-label="About me">
      <div className="about-section-inner">
        <h2 className="about-section-title-wrap">
          <span className="about-section-title">ABOUT ME</span>
        </h2>
        <p className="about-section-note">{shortNote}</p>
        <Link
          to="/#case-studies"
          className="about-explore-btn"
          onClick={scrollToCaseStudies}
          aria-label="Explore case studies"
        >
          <span className="about-explore-text">| EXPLORE |</span>
        </Link>
        <div className="about-wavy-wrap" aria-hidden="true">
          <svg className="about-wavy" viewBox="0 0 400 16" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 5 Q100 0, 200 5 T400 5" stroke="currentColor" strokeWidth="1.2" fill="none" />
            <path d="M0 11 Q100 16, 200 11 T400 11" stroke="currentColor" strokeWidth="1.2" fill="none" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default About;
