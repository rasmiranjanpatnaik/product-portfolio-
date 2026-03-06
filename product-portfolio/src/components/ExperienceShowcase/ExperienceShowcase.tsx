import React, { useState, useCallback, useEffect } from 'react';
import './ExperienceShowcase.css';

type ExperienceDetail = {
  id: string;
  date: string;
  title: string;
  subtitle?: string;
  link?: { label: string; href: string };
  summary: string;
  bullets: string[];
  watermark: string;
};

const experiences: ExperienceDetail[] = [
  {
    id: 'scaler',
    date: 'Dec 2025 – Present',
    title: 'Scaler',
    subtitle: 'Product Manager · AI + Growth Initiative',
    link: { label: 'CareerLift AI Resume Readiness & Alumni Referral Platform | Prototype | § GitHub', href: '#' },
    summary:
      'Leading AI-led product initiatives: Resume Readiness Analyzer, Alumni Match Engine, and Community Referral Marketplace. North Star: Qualified Consult Booking Rate (4% → 12%).',
    watermark: '01',
    bullets: [
      'Analyzed funnel data revealing 62% webinar no-show and 78% pre-enrollment drop-off; identified core user problem as confidence gap, redefining the North Star Metric as Qualified Consult Booking Rate with a target improvement from 4% → 12%.',
      'Designed an AI-powered Resume Readiness Analyzer using FastAPI and LLM-based skill-gap detection, delivering readiness scoring, missing skills, and salary benchmarks to drive high-intent activation and reduce decision friction.',
      'Built an Alumni Match Engine surfacing similar-background success stories with referral pathways, strengthening trust signals and targeting a 3× increase in qualified leads and improved consult conversion.',
      'Conceptualized a Community Referral Marketplace with a 50% revenue share model, enabling mentorship, resume reviews, and job referrals, projecting 1.8 Cr ARR from 500 monthly active users.',
      'Designed Instructor Compliance Automation via a post-session upload lock workflow, improving content availability, learner experience, and operational efficiency across live cohorts at scale.',
    ],
  },
  {
    id: 'shadowfax',
    date: 'November 2024 – October 2025',
    title: 'Shadowfax Technologies',
    subtitle: 'Software Development Engineer – Frontend (Intern)',
    summary:
      'Co-led Same-Day Delivery launch; improved omni-device UX and data-driven decisions. Frontend performance and API optimizations drove engagement and conversion gains.',
    watermark: '02',
    bullets: [
      'Co-led the launch of Same-Day Delivery, collaborating with Product and Logistics teams to drive a 22% increase in daily active users and 35% faster order fulfillment.',
      'Improved the omni-device user experience by building responsive UI systems, resulting in a 35% increase in mobile engagement and improved accessibility.',
      'Enabled data-driven decision-making using Tableau and Power BI, contributing to 18% revenue growth through pricing, logistics, and customer experience optimizations.',
      'Optimized API communication and frontend-backend interactions, reducing redundant calls by 30% and latency by 20%, leading to faster checkouts and improved system efficiency.',
      'Increased user engagement and conversion rates by 25% through frontend performance optimizations (lazy loading, OnPush change detection).',
    ],
  },
  // {
  //   id: 'iit-patna',
  //   date: '2020 – 2024',
  //   title: 'IIT Patna',
  //   subtitle: 'B.Tech · Computer Science & Engineering',
  //   summary:
  //     'Foundation in CS and engineering; coursework and projects in algorithms, systems, and software development. Active in technical and product-oriented activities.',
  //   watermark: '03',
  //   bullets: [
  //     'Pursued B.Tech in Computer Science and Engineering with focus on algorithms, data structures, and software development.',
  //     'Completed relevant coursework and projects in full-stack development, databases, and system design.',
  //     'Participated in technical clubs, hackathons, and collaborative projects bridging engineering and product thinking.',
  //     'You can add more IIT Patna experience details here (e.g., specific projects, roles, achievements).',
  //   ],
  // },
];

const ExperienceShowcase: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const openPopup = useCallback((id: string) => setOpenId(id), []);
  const closePopup = useCallback(() => setOpenId(null), []);

  useEffect(() => {
    if (openId === null) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closePopup();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [openId, closePopup]);

  const selected = openId ? experiences.find((e) => e.id === openId) : null;

  return (
    <section id="experience-showcase" className="experience-showcase" aria-label="My experience">
      {experiences.map((item) => (
        <article key={item.id} className="experience-showcase-card">
          <div className="experience-showcase-bg" aria-hidden="true">
            <span className="experience-showcase-watermark">{item.watermark}</span>
          </div>
          <div className="experience-showcase-inner">
            <p className="experience-showcase-date">{item.date}</p>
            <h2 className="experience-showcase-title">{item.title}</h2>
            {item.subtitle && (
              <p className="experience-showcase-subtitle">{item.subtitle}</p>
            )}
            <p className="experience-showcase-desc">{item.summary}</p>
            <button
              type="button"
              className="experience-showcase-readmore"
              onClick={() => openPopup(item.id)}
              aria-expanded={openId === item.id}
              aria-controls={`experience-popup-${item.id}`}
              aria-label={`Read full details: ${item.title}`}
            >
              <span className="experience-showcase-readmore-line" aria-hidden="true" />
              <span className="experience-showcase-readmore-text">READ MORE</span>
              <span className="experience-showcase-readmore-line" aria-hidden="true" />
            </button>
          </div>
        </article>
      ))}

      {selected && (
        <div
          id={`experience-popup-${selected.id}`}
          className="experience-showcase-popup-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="experience-popup-title"
          onClick={(e) => e.target === e.currentTarget && closePopup()}
        >
          <div className="experience-showcase-popup">
            <div className="experience-showcase-popup-header">
              <div>
                <h3 id="experience-popup-title" className="experience-showcase-popup-title">
                  {selected.title}
                </h3>
                {selected.subtitle && (
                  <p className="experience-showcase-popup-subtitle">{selected.subtitle}</p>
                )}
                <p className="experience-showcase-popup-date">{selected.date}</p>
              </div>
              <button
                type="button"
                className="experience-showcase-popup-close"
                onClick={closePopup}
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <div className="experience-showcase-popup-content">
              {selected.link && (
                <p className="experience-showcase-popup-link">
                  <a href={selected.link.href} target="_blank" rel="noopener noreferrer">
                    {selected.link.label}
                  </a>
                </p>
              )}
              <ul className="experience-showcase-popup-bullets">
                {selected.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ExperienceShowcase;
