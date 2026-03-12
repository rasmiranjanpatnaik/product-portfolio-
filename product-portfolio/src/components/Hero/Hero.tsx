import React from 'react';
import { Link } from 'react-router-dom';
import { socialLinks } from '../../data/portfolio';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-split">
        {/* Animated background layer — on top of gradient, behind content */}
        <div className="hero-bg-animation" aria-hidden="true">
          <div className="hero-bg-blob hero-bg-blob-1" />
          <div className="hero-bg-blob hero-bg-blob-2" />
          <div className="hero-bg-blob hero-bg-blob-3" />
        </div>
        {/* Desktop: left panel. Mobile: bottom overlay (order 2) */}
        <div className="hero-left">
          <div className="hero-text">
            <p className="hero-greeting hero-anim hero-anim-1">
              <span className="hero-greeting-bg">Hi, I am</span>
            </p>
            <h1 className="hero-name hero-anim hero-anim-2">
              <span className="hero-name-gradient">Rasmi Ranjan Patnaik</span>
            </h1>
            <p className="hero-role hero-anim hero-anim-3">
              <span className="hero-role-line">AI-Product Manager / Developer / UX Designer</span>
            </p>
            <div className="hero-socials hero-anim hero-anim-4">
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
            <Link to="/contact" className="hero-contact-btn hero-anim hero-anim-5" aria-label="Contact me">
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
              className="hero-image hero-image-desktop"
              loading="eager"
              decoding="async"
            />
            <img
              src={`${process.env.PUBLIC_URL || ''}/images/mobile%20view.png`}
              alt="Rasmi Ranjan Patnaik"
              className="hero-image hero-image-mobile"
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
