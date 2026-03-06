import React from 'react';
import { Link } from 'react-router-dom';
import { socialLinks } from '../../data/portfolio';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-split">
        {/* Desktop: left panel. Mobile: bottom overlay (order 2) */}
        <div className="hero-left">
          <div className="hero-text">
            <p className="hero-greeting">Hi, I am</p>
            <h1 className="hero-name">Rasmi Ranjan Patnaik</h1>
            <p className="hero-role">Product Manager / UX Designer</p>
            <div className="hero-socials">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-icon"
                  aria-label={link.name}
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
            <Link to="/contact" className="hero-contact-btn" aria-label="Contact me">
              CONTACT ME
            </Link>
          </div>
        </div>

        {/* Desktop: right panel. Mobile: portrait on top (order 1) */}
        <div className="hero-right">
          <nav className="hero-nav" aria-label="Main">
            <Link to="/#about" className="hero-nav-link">About me</Link>
            <Link to="/#skills" className="hero-nav-link">Skills</Link>
            <Link to="/#case-studies" className="hero-nav-link">Portfolio</Link>
            <Link to="/contact" className="hero-nav-btn">CONTACT ME</Link>
          </nav>
          <div className="hero-image-wrap">
            <img
              src={`${process.env.PUBLIC_URL || ''}/images/Gemini_Generated_Image_r9j3u2r9j3u2r9j3-Photoroom.png`}
              alt="Rasmi Ranjan Patnaik"
              className="hero-image"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
