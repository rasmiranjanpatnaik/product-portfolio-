import React from 'react';
import './Experience.css';

const experiences = [
  {
    id: 'discovery',
    title: 'Discovery & Strategy',
    icon: 'fas fa-pencil-alt',
    description:
      'I define problem spaces, run user research, and align stakeholders on North Star metrics. I can shape product strategy from scratch and guide prioritization and roadmaps using data and user feedback.',
  },
  {
    id: 'execution',
    title: 'Execution & Development',
    icon: 'fas fa-wrench',
    description:
      'I work with engineering to ship AI-led features—writing specs, defining success metrics, and iterating on scope. I bridge product intent and technical implementation so we ship on time and with impact.',
  },
  {
    id: 'iteration',
    title: 'Iteration & Optimization',
    icon: 'fas fa-cog',
    description:
      'I drive continuous improvement through experiments, analytics, and feedback loops. I keep products aligned with user needs and business outcomes and scale what works.',
  },
];

const WavyLine: React.FC = () => (
  <div className="experience-wavy-wrap" aria-hidden="true">
    <svg
      className="experience-wavy"
      viewBox="0 0 400 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M0 5 Q100 0, 200 5 T400 5"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
      <path
        d="M0 11 Q100 16, 200 11 T400 11"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
    </svg>
  </div>
);

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience-section" aria-label="Experience">
      <div className="experience-inner">
        <div className="experience-grid">
          {experiences.map((item) => (
            <article key={item.id} className="experience-card">
              <div className="experience-card-head">
                <i className={`experience-icon ${item.icon}`} aria-hidden="true" />
                <h3 className="experience-title">{item.title}</h3>
              </div>
              <p className="experience-desc">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
      <WavyLine />
    </section>
  );
};

export default Experience;
