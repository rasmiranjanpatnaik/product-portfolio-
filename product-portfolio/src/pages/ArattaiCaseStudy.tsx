import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import './ArattaiCaseStudy.css';

const ArattaiCaseStudy: React.FC = () => {
  return (
    <div className="arattai-case-page">
      <ScrollReveal visibleOnLoad>
        {/* Hero */}
        <section className="arattai-hero">
          <Container>
            <div className="arattai-breadcrumb">
              <Link to="/" className="arattai-breadcrumb-link">Home</Link>
              <span className="arattai-breadcrumb-sep">/</span>
              <span className="arattai-breadcrumb-current">Arattai Case Study</span>
            </div>
            <h1 className="arattai-hero-title">
              Case Study: How Arattai Can Compete with WhatsApp in India
            </h1>
            <p className="arattai-hero-subtitle">
              A Made-in-India, privacy-first messaging strategy — differentiation, adoption, and engagement.
            </p>
          </Container>
        </section>

        {/* 1. Problem Statement */}
        <section className="arattai-section">
          <Container>
            <div className="arattai-section-head">
              <span className="arattai-section-num">1</span>
              <h2 className="arattai-section-title">Problem Statement</h2>
            </div>
            <div className="arattai-content">
              <p>
                India’s messaging market is dominated by <strong>WhatsApp</strong> with over 500M+ users, making it almost synonymous with “chat.”
                However, users are increasingly concerned about <strong>privacy</strong>, <strong>data ownership</strong>, and <strong>local relevance</strong>.
              </p>
              <p>
                <strong>Arattai</strong>, a messaging app by Zoho, aims to capture this opportunity by positioning itself as a Made-in-India, privacy-first, and regional-friendly alternative.
              </p>
              <div className="arattai-key-question">
                <strong>Key question:</strong> How can Arattai differentiate from WhatsApp, gain user adoption, and drive engagement in India?
              </div>
            </div>
          </Container>
        </section>

        {/* 2. Market Landscape */}
        <section className="arattai-section arattai-section-alt">
          <Container>
            <div className="arattai-section-head">
              <span className="arattai-section-num">2</span>
              <h2 className="arattai-section-title">Market Landscape</h2>
            </div>
            <div className="arattai-table-wrap">
              <table className="arattai-table">
                <thead>
                  <tr>
                    <th>Factor</th>
                    <th>Insight</th>
                    <th>Opportunity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>🇮🇳 Population</td>
                    <td>1.4B people, ~800M internet users</td>
                    <td>Huge Tier-2/3 city potential</td>
                  </tr>
                  <tr>
                    <td>🗣️ Language</td>
                    <td>22 official, 100+ spoken</td>
                    <td>Build regional-first experience</td>
                  </tr>
                  <tr>
                    <td>🔒 Privacy</td>
                    <td>32% users questioned WhatsApp’s policy (post-2021)</td>
                    <td>Lead with transparency & trust</td>
                  </tr>
                  <tr>
                    <td>💸 Payments</td>
                    <td>300M+ UPI users</td>
                    <td>Integrate digital payments seamlessly</td>
                  </tr>
                  <tr>
                    <td>📱 Infrastructure</td>
                    <td>Mid-range devices, low bandwidth</td>
                    <td>Optimize for low-data and offline use</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Container>
        </section>

        {/* 3. Product Strategy */}
        <section className="arattai-section">
          <Container>
            <div className="arattai-section-head">
              <span className="arattai-section-num">3</span>
              <h2 className="arattai-section-title">Product Strategy: “Own India, Not the World”</h2>
            </div>
            <p className="arattai-section-lead">Core Pillars</p>
            <ul className="arattai-pillars">
              <li><strong>Trust & Privacy</strong> → 100% Indian data servers, transparent policy</li>
              <li><strong>Regional Relevance</strong> → Deep language localization, cultural features</li>
              <li><strong>Community Focus</strong> → Local hubs & interest-based groups</li>
              <li><strong>Super-App Utility</strong> → Messaging + UPI + local news + services</li>
              <li><strong>Seamless UX</strong> → Simple, intuitive flow for all literacy levels</li>
            </ul>
          </Container>
        </section>

        {/* 4. Product Differentiation */}
        <section className="arattai-section arattai-section-alt">
          <Container>
            <div className="arattai-section-head">
              <span className="arattai-section-num">4</span>
              <h2 className="arattai-section-title">Product Differentiation</h2>
            </div>
            <div className="arattai-table-wrap">
              <table className="arattai-table">
                <thead>
                  <tr>
                    <th>Pillar</th>
                    <th>WhatsApp</th>
                    <th>Arattai Strategy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Data Privacy</td>
                    <td>Meta-owned, data abroad</td>
                    <td>India-hosted servers, user-controlled data</td>
                  </tr>
                  <tr>
                    <td>Localization</td>
                    <td>English-first UI</td>
                    <td>22+ Indian languages + local content</td>
                  </tr>
                  <tr>
                    <td>Utility</td>
                    <td>Chat, calls, payments</td>
                    <td>Chat + UPI + news + mini apps</td>
                  </tr>
                  <tr>
                    <td>Work-Life Mix</td>
                    <td>Unified inbox</td>
                    <td>Dual “Work” & “Personal” modes</td>
                  </tr>
                  <tr>
                    <td>Offline Mode</td>
                    <td>Requires internet</td>
                    <td>Bluetooth/QR-based local chat</td>
                  </tr>
                  <tr>
                    <td>Community</td>
                    <td>Private groups</td>
                    <td>Public “Community Hubs” for interests</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Container>
        </section>

        {/* 5. User Flow Comparison */}
        <section className="arattai-section">
          <Container>
            <div className="arattai-section-head">
              <span className="arattai-section-num">5</span>
              <h2 className="arattai-section-title">User Flow Comparison</h2>
            </div>
            <Row>
              <Col md={6} className="mb-4 mb-md-0">
                <div className="arattai-flow-card arattai-flow-whatsapp">
                  <h3 className="arattai-flow-title">WhatsApp Onboarding Flow</h3>
                  <ul>
                    <li>Download app → Verify with OTP</li>
                    <li>Auto-sync contacts</li>
                    <li>Enter chats directly (same UX for all)</li>
                  </ul>
                  <p className="arattai-flow-gap"><strong>Gaps:</strong> Generic onboarding, English-first UI, no personalization, minimal control.</p>
                </div>
              </Col>
              <Col md={6}>
                <div className="arattai-flow-card arattai-flow-arattai">
                  <h3 className="arattai-flow-title">Arattai Proposed Flow</h3>
                  <ul>
                    <li>Welcome → “Made in India, for India”</li>
                    <li>Select preferred language</li>
                    <li>Login → Mobile / Aadhaar / Zoho ID</li>
                    <li>Choose interest: Personal / Work / Community</li>
                    <li>Auto-suggest local/regional groups</li>
                    <li>Invite & earn rewards (gamified referrals)</li>
                  </ul>
                  <p className="arattai-flow-additions"><strong>In-App Additions:</strong></p>
                  <ul>
                    <li>“Work Mode” toggle</li>
                    <li>UPI integration in chat</li>
                    <li>Nearby Chat (offline transfer)</li>
                    <li>Local news feed</li>
                    <li>Community verification badges</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* 6. Go-To-Market */}
        <section className="arattai-section arattai-section-alt">
          <Container>
            <div className="arattai-section-head">
              <span className="arattai-section-num">6</span>
              <h2 className="arattai-section-title">Go-To-Market & Growth Strategy</h2>
            </div>
            <div className="arattai-phases">
              <div className="arattai-phase">
                <h4>Phase 1: Awareness (0–6 months)</h4>
                <p><strong>Campaign:</strong> #SwitchToArattai — India’s Own Messenger</p>
                <ul>
                  <li>Collaborate with Indian influencers, YouTubers, and colleges</li>
                  <li>Launch referral rewards and regional sticker packs</li>
                  <li>Focus cities: Chennai, Hyderabad, Jaipur, Kochi, Bhopal</li>
                </ul>
              </div>
              <div className="arattai-phase">
                <h4>Phase 2: Adoption (6–12 months)</h4>
                <ul>
                  <li>Preload Arattai on Indian-made smartphones (Micromax, Jio, Lava)</li>
                  <li>Introduce student and SMB communities</li>
                  <li>Build voice-based onboarding for Tier-3 users</li>
                  <li>Enable UPI transactions within chat</li>
                </ul>
              </div>
              <div className="arattai-phase">
                <h4>Phase 3: Retention & Expansion (12–24 months)</h4>
                <ul>
                  <li>Add mini-app ecosystem (bill pay, health, news)</li>
                  <li>Integrate with Zoho’s productivity tools</li>
                  <li>Launch “Verified Community” badges for businesses</li>
                  <li>Expand to Indian diaspora in UAE, Singapore, and the US</li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* 7. Success Metrics */}
        <section className="arattai-section">
          <Container>
            <div className="arattai-section-head">
              <span className="arattai-section-num">7</span>
              <h2 className="arattai-section-title">Success Metrics</h2>
            </div>
            <div className="arattai-table-wrap">
              <table className="arattai-table">
                <thead>
                  <tr>
                    <th>Objective</th>
                    <th>Metric</th>
                    <th>Target</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Growth</td><td>MAU</td><td>50M in 12 months</td></tr>
                  <tr><td>Engagement</td><td>Avg. Daily Time</td><td>&gt;25 min/day</td></tr>
                  <tr><td>Retention</td><td>D30 Retention</td><td>&gt;45%</td></tr>
                  <tr><td>Acquisition</td><td>Cost per User</td><td>&lt; ₹10</td></tr>
                  <tr><td>Trust</td><td>NPS</td><td>&gt;70</td></tr>
                </tbody>
              </table>
            </div>
          </Container>
        </section>

        {/* 8. Trade-offs */}
        <section className="arattai-section arattai-section-alt">
          <Container>
            <div className="arattai-section-head">
              <span className="arattai-section-num">8</span>
              <h2 className="arattai-section-title">Trade-offs & Mitigation</h2>
            </div>
            <div className="arattai-table-wrap">
              <table className="arattai-table">
                <thead>
                  <tr>
                    <th>Decision</th>
                    <th>Risk</th>
                    <th>Mitigation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Focus only on India</td>
                    <td>Smaller global market</td>
                    <td>Target diaspora later</td>
                  </tr>
                  <tr>
                    <td>Super-app strategy</td>
                    <td>Possible feature bloat</td>
                    <td>Prioritize top 3 integrations</td>
                  </tr>
                  <tr>
                    <td>Deep localization</td>
                    <td>High dev cost</td>
                    <td>Launch top 5 languages first</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Container>
        </section>

        {/* 9. Future Vision */}
        <section className="arattai-section">
          <Container>
            <div className="arattai-section-head">
              <span className="arattai-section-num">9</span>
              <h2 className="arattai-section-title">Future Vision</h2>
            </div>
            <blockquote className="arattai-vision-quote">
              “Arattai will be India’s trusted, privacy-first super messenger — connecting people, communities, and services in their own language, built entirely on Indian soil.”
            </blockquote>
            <p className="arattai-north-star"><strong>North Star Metric:</strong> Active Daily Users with ≥3 meaningful conversations per day</p>
          </Container>
        </section>

        {/* 10. Key Takeaways */}
        <section className="arattai-section arattai-section-alt">
          <Container>
            <div className="arattai-section-head">
              <span className="arattai-section-num">10</span>
              <h2 className="arattai-section-title">Key Takeaways</h2>
            </div>
            <ul className="arattai-takeaways">
              <li>Competing with WhatsApp means <strong>differentiating</strong>, not imitating.</li>
              <li>Trust, localization, and community are Arattai’s true edges.</li>
              <li>Success in India depends on regional-first design, low-data performance, and strong emotional positioning — <em>“Your Chat. Your Country. Your Control.”</em></li>
            </ul>
          </Container>
        </section>

        {/* Full presentation — Pitch deck (thumbnail links to Pitch) */}
        <section className="arattai-section arattai-presentation-section">
          <Container>
            <div className="arattai-section-head">
              <span className="arattai-section-num">↗</span>
              <h2 className="arattai-section-title">Full presentation</h2>
            </div>
            <p className="arattai-presentation-lead">
              View the complete slide deck with detailed slides on Pitch.
            </p>
            <a
              href="https://app.pitch.com/app/presentation/c030de29-1418-4646-99d3-9d6117fa5b09/6a72ea38-5331-45d3-bd19-9016058c49b1"
              target="_blank"
              rel="noopener noreferrer"
              className="arattai-presentation-thumb-link"
            >
              <img
                src={`${process.env.PUBLIC_URL || ''}/images/Gemini_Generated_Image_x9xpecx9xpecx9xp.png`}
                alt="Arattai vs WhatsApp — Open full presentation in Pitch"
                className="arattai-presentation-thumb"
              />
              <span className="arattai-presentation-thumb-cta">
                <i className="fas fa-external-link-alt" aria-hidden />
                Open full presentation in Pitch
              </span>
            </a>
          </Container>
        </section>

        {/* Navigation */}
        <section className="arattai-nav">
          <Container>
            <Row>
              <Col md={6}>
                <Link to="/case-study/uber-kids" className="arattai-nav-link arattai-nav-prev">
                  <i className="fas fa-arrow-left" aria-hidden />
                  Previous Case Study
                </Link>
              </Col>
              <Col md={6} className="text-md-end mt-3 mt-md-0">
                <Link to="/#case-studies" className="arattai-nav-link arattai-nav-next">
                  Back to Portfolio
                  <i className="fas fa-arrow-right" aria-hidden />
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
      </ScrollReveal>
    </div>
  );
};

export default ArattaiCaseStudy;
