import React, { useState, useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

const SCROLL_THRESHOLD = 400;
const MOBILE_BREAKPOINT = 768;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [footerInView, setFooterInView] = useState(false);
  const [isMobileView, setIsMobileView] = useState(() => typeof window !== 'undefined' && window.innerWidth < MOBILE_BREAKPOINT);

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > SCROLL_THRESHOLD);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      setIsMobileView(window.innerWidth < MOBILE_BREAKPOINT);
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setFooterInView(entry.isIntersecting),
      { threshold: 0.1, rootMargin: '0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const showFixedBackToTop = isMobileView && showBackToTop && !footerInView;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Fixed Back to Top — mobile only: appears on scroll, hidden when footer is in view */}
      <div
        className={`footer-back-to-top-fixed ${showFixedBackToTop ? 'footer-back-to-top-visible' : ''}`}
        aria-hidden={!showFixedBackToTop}
      >
        <button
          type="button"
          onClick={scrollToTop}
          className="footer-back-to-top"
          aria-label="Back to top"
        >
          <span className="footer-back-to-top-icon">↑</span>
          <span className="footer-back-to-top-text">BACK TO TOP</span>
        </button>
      </div>

      <footer ref={footerRef} className="footer-section">
        <Container>
          <div className="footer-content">
            <button
              type="button"
              onClick={scrollToTop}
              className="footer-back-to-top"
              aria-label="Back to top"
            >
              <span className="footer-back-to-top-icon">↑</span>
              <span className="footer-back-to-top-text">BACK TO TOP</span>
            </button>

            <div className="footer-social-icons">
            <a href="https://www.linkedin.com/in/rasmiranjanpatnaik/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://youtube.com/@rasmiranjanpatnaik" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://medium.com/@patnaikrasmiranjan6" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Medium">
              <i className="fab fa-medium-m"></i>
            </a>
            <a href="mailto:patnaikrasmiranjan6@gmail.com" className="social-icon" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>

          <p className="footer-copyright-text">
            © {currentYear} Rasmi Ranjan Patnaik. All rights reserved.
          </p>
        </div>
      </Container>
      <div className="footer-accent-line" aria-hidden="true" />
    </footer>
    </>
  );
};

export default Footer;
