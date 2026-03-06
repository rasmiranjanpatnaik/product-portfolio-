import React from 'react';
import './PortfolioBanner.css';

const mountainBg = `${process.env.PUBLIC_URL || ''}/images/mountain.jpg`;

const PortfolioBanner: React.FC = () => {
  return (
    <section
      id="portfolio-banner"
      className="portfolio-banner"
      aria-label="Portfolio"
    >
      <div
        className="portfolio-banner-bg"
        style={{ backgroundImage: `url(${mountainBg})` }}
      />
      <div className="portfolio-banner-overlay" aria-hidden="true" />
      <div className="portfolio-banner-inner">
        <h2 className="portfolio-banner-title">PORTFOLIO</h2>
      </div>
    </section>
  );
};

export default PortfolioBanner;
