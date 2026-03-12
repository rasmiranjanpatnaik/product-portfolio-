import React, { useState, useMemo, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { projects, caseStudies } from '../../data/portfolio';
import './ProjectsAndCaseStudies.css';

type Filter = 'projects' | 'case-studies';

const caseStudyRoute: Record<string, string> = {
  'uber-eats': '/case-study/uber-eats',
  paypal: '/case-study/paypal',
  'Uber Kid': '/case-study/uber-kids',
  arattai: '/case-study/arattai',
};

const ProjectsAndCaseStudies: React.FC = () => {
  const [filter, setFilter] = useState<Filter>('projects');
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === '#case-studies-projects') setFilter('projects');
    else if (hash === '#case-studies-case-studies') setFilter('case-studies');
  }, [hash]);

  const items = useMemo(() => {
    const projectItems = projects.map((p) => ({
      type: 'project' as const,
      id: p.id,
      title: p.title,
      subtitle: p.description,
      image: p.image,
      liveUrl: p.liveUrl,
      githubUrl: p.githubUrl,
      category: p.category,
    }));
    const caseStudyItems = caseStudies.map((c) => ({
      type: 'case-study' as const,
      id: c.id,
      title: c.title,
      subtitle: c.subtitle,
      image: c.image,
      route: caseStudyRoute[c.id] || null,
    }));
    if (filter === 'projects') return projectItems;
    return caseStudyItems;
  }, [filter]);

  return (
    <section id="case-studies" className="projects-case-section" aria-label="Projects and case studies">
      <nav className="projects-case-nav" aria-label="Filter work">
        <button
          type="button"
          className={`projects-case-nav-btn ${filter === 'projects' ? 'is-active' : ''}`}
          onClick={() => setFilter('projects')}
        >
          PROJECTS
        </button>
        <button
          type="button"
          className={`projects-case-nav-btn ${filter === 'case-studies' ? 'is-active' : ''}`}
          onClick={() => setFilter('case-studies')}
        >
          CASE STUDIES
        </button>
      </nav>

      <div key={filter} className="projects-case-grid">
        {items.map((item, index) => (
          <article
            key={`${item.type}-${item.id}`}
            className="projects-case-card"
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            <div className="projects-case-card-image">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
              />
              <div className="projects-case-card-overlay">
                <p className="projects-case-card-meta">
                  {item.type === 'project' ? 'coded, designed' : 'designed'}
                </p>
                <h3 className="projects-case-card-title">{item.title}</h3>
                <p className="projects-case-card-subtitle">{item.subtitle}</p>
                <div className="projects-case-card-actions">
                  {item.type === 'project' && item.liveUrl && (
                    <>
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projects-case-action-btn"
                      >
                        DEMO
                      </a>
                      <span className="projects-case-action-sep" aria-hidden="true">|</span>
                    </>
                  )}
                  {item.type === 'project' && item.githubUrl && (
                    <a
                      href={item.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects-case-action-btn"
                    >
                      MORE
                    </a>
                  )}
                  {item.type === 'case-study' && 'route' in item && item.route && (
                    <Link to={item.route} className="projects-case-action-btn">
                      MORE
                    </Link>
                  )}
                  {item.type === 'case-study' && (!('route' in item) || !item.route) && (
                    <span className="projects-case-action-btn is-disabled">COMING SOON</span>
                  )}
                  {item.type === 'project' && !item.liveUrl && !item.githubUrl && (
                    <span className="projects-case-action-btn is-disabled">MORE</span>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="projects-case-footer">And many more to come!</p>
    </section>
  );
};

export default ProjectsAndCaseStudies;
