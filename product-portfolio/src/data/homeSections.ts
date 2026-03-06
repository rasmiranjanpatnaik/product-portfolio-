import React from 'react';

import Hero from '../components/Hero';
import ExperienceShowcase from '../components/ExperienceShowcase';
import SkillsCTA from '../components/SkillsCTA';
import PortfolioBanner from '../components/PortfolioBanner';
import About from '../components/About';
import Experience from '../components/Experience';
import ProjectsAndCaseStudies from '../components/ProjectsAndCaseStudies';

export type HomeSectionId = 'hero' | 'experience-showcase' | 'about' | 'experience' | 'skills' | 'portfolio-banner' | 'case-studies';

export type HomeSection = {
  id: HomeSectionId;
  enabled: boolean;
  lazy?: boolean;
  element: React.ReactElement;
};

export const homeSections: HomeSection[] = [
  { id: 'hero', enabled: true, lazy: false, element: React.createElement(Hero) },
  { id: 'experience-showcase', enabled: true, lazy: true, element: React.createElement(ExperienceShowcase) },
  { id: 'about', enabled: true, lazy: true, element: React.createElement(About) },
  { id: 'experience', enabled: true, lazy: true, element: React.createElement(Experience) },
  { id: 'skills', enabled: true, lazy: true, element: React.createElement(SkillsCTA) },
  { id: 'portfolio-banner', enabled: true, lazy: true, element: React.createElement(PortfolioBanner) },
  { id: 'case-studies', enabled: true, lazy: true, element: React.createElement(ProjectsAndCaseStudies) },
];

