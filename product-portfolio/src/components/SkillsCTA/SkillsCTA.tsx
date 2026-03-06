import React from 'react';
import './SkillsCTA.css';

type SkillItem = { name: string; icon: string };

const skillCategories: { id: string; title: string; skills: SkillItem[] }[] = [
  {
    id: 'product',
    title: 'Product',
    skills: [
      { name: 'Product Strategy', icon: 'fas fa-road' },
      { name: 'Roadmapping', icon: 'fas fa-map' },
      { name: 'KPI/OKR Definition', icon: 'fas fa-bullseye' },
      { name: 'PRD Writing', icon: 'fas fa-file-alt' },
      { name: 'User Research', icon: 'fas fa-users' },
      { name: 'A/B Testing', icon: 'fas fa-flask' },
      { name: 'MVP Development', icon: 'fas fa-rocket' },
    ],
  },
  {
    id: 'technical',
    title: 'Technical',
    skills: [
      { name: 'SQL', icon: 'fas fa-database' },
      { name: 'Python', icon: 'fab fa-python' },
      { name: 'API Integration', icon: 'fas fa-plug' },
      { name: 'React', icon: 'fab fa-react' },
      { name: 'HTML/CSS', icon: 'fas fa-code' },
      { name: 'Javascript', icon: 'fab fa-js-square' },
      { name: 'Node.js', icon: 'fab fa-node-js' },
      { name: 'Data Analysis', icon: 'fas fa-chart-bar' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    skills: [
      { name: 'Jira', icon: 'fas fa-tasks' },
      { name: 'Notion', icon: 'fas fa-book' },
      { name: 'Git', icon: 'fab fa-git-alt' },
      { name: 'Tableau', icon: 'fas fa-chart-line' },
      { name: 'Power BI', icon: 'fas fa-chart-pie' },
      { name: 'Google Analytics', icon: 'fas fa-chart-line' },
      { name: 'Microsoft Excel (Advanced)', icon: 'fas fa-table' },
      { name: 'Pitch.com', icon: 'fas fa-desktop' },
    ],
  },
  {
    id: 'ai',
    title: 'AI & Automation',
    skills: [
      { name: 'Prompt Engineering (LLMs)', icon: 'fas fa-robot' },
      { name: 'n8n', icon: 'fas fa-project-diagram' },
      { name: 'Lovable AI', icon: 'fas fa-magic' },
      { name: 'Figma AI', icon: 'fas fa-palette' },
      { name: 'Workflow Automation', icon: 'fas fa-cogs' },
    ],
  },
];

const SkillsCTA: React.FC = () => {
  return (
    <section id="skills" className="skills-cta-section" aria-label="Skills and tools">
      <div className="skills-cta-inner">
        <h2 className="skills-cta-main-title">
          <span className="skills-cta-main-title-text">SKILLS</span>
        </h2>

        {skillCategories.map((category) => (
          <div key={category.id} className="skills-cta-category">
            <h3 className="skills-cta-category-title">{category.title}:</h3>
            <div className="skills-cta-grid">
              {category.skills.map((skill) => (
                <div key={skill.name} className="skills-cta-item">
                  <div className="skills-cta-icon-wrap">
                    <i className={`skills-cta-icon ${skill.icon}`} aria-hidden="true" />
                  </div>
                  <span className="skills-cta-label">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsCTA;
