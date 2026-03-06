import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { homeSections } from '../data/homeSections';
import LazySection from '../components/LazySection';
import ScrollReveal from '../components/ScrollReveal';

const Home: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    const el = hash === '#skills' && document.getElementById('skills');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    if (hash === '#case-studies' || hash === '#case-studies-projects' || hash === '#case-studies-case-studies') {
      const caseEl = document.getElementById('case-studies');
      if (caseEl) caseEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [hash]);

  return (
    <main>
      {homeSections
        .filter((section) => section.enabled)
        .map((section) => (
          <React.Fragment key={section.id}>
            {section.lazy ? (
              <LazySection minHeight={section.id === 'skills' ? 320 : 120}>
                <ScrollReveal>{section.element}</ScrollReveal>
              </LazySection>
            ) : (
              <ScrollReveal visibleOnLoad>{section.element}</ScrollReveal>
            )}
          </React.Fragment>
        ))}
    </main>
  );
};

export default Home;
