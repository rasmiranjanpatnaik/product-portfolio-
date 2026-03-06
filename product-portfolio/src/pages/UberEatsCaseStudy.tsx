import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import './UberEatsCaseStudy.css';

interface UserStory {
  id: string;
  title: string;
  description: string;
}

const userStories: UserStory[] = [
  {
    id: 'explore-partners',
    title: 'As an Uber Eats user, I want to explore Packaged Meal partners, so that I can decide which one to order with.',
    description: 'Because this is a completely new meal-type that will be offered within Uber Eats, users need an extremely easy / visible way to explore Packaged Meal partners like Freshly to learn about the offering.'
  },
  {
    id: 'select-order',
    title: 'As an Uber Eats user, I can select a Packaged Meal brand, the meals I want, and a delivery date, so that I can order meals.',
    description: 'Uber Eats users need a way to choose the Packaged Meal partner, coordinate how many meals they want and what those meals are, as well as select a delivery day and time.'
  },
  {
    id: 'track-status',
    title: 'As an Uber Eats user, I can see the status of my Packaged Meal order, so that I can plan accordingly.',
    description: 'Since Packaged Meals have different delivery timelines compared to regular food delivery, users need clear visibility into their order status and expected delivery times.'
  },
  {
    id: 'sync-data',
    title: 'As a Packaged Meal company, I can sync meal types, availability, and schedules with Uber Eats so that Uber Eats users can order meals.',
    description: 'Packaged Meal companies need integration capabilities to sync their meal catalog, inventory levels, and delivery schedules with the Uber Eats platform in real-time.'
  },
  {
    id: 'receive-orders',
    title: 'As a Packaged Meal company, I can ingest new orders from Uber Eats so that I can fulfill those orders.',
    description: 'A seamless order management system is required for Packaged Meal companies to receive, process, and fulfill orders placed through the Uber Eats platform.'
  },
  {
    id: 'delivery-info',
    title: 'As an Uber Eats Delivery Courier, I have all the information and supplies necessary to deliver Packaged Meals.',
    description: 'Delivery couriers need special instructions, insulated bags, and detailed delivery information to properly handle Packaged Meals which have different requirements than regular food delivery.'
  }
];

const UserStories: React.FC = () => {
  const [expandedStory, setExpandedStory] = useState<string | null>(null);

  const toggleStory = (storyId: string) => {
    setExpandedStory(expandedStory === storyId ? null : storyId);
  };

  return (
    <div className="user-stories">
      {userStories.map((story) => (
        <div key={story.id} className="user-story">
          <div 
            className="story-header" 
            onClick={() => toggleStory(story.id)}
          >
            <span className="story-text">
              {story.title}
            </span>
            <span className={`story-icon ${expandedStory === story.id ? 'expanded' : ''}`}>
              +
            </span>
          </div>
          {expandedStory === story.id && (
            <div className="story-content">
              <p className="story-description">
                {story.description}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const UberEatsCaseStudy: React.FC = () => {
  return (
    <div className="case-study-page">
      {/* Hero Section */}
      <ScrollReveal visibleOnLoad>
        <section 
          className="case-study-hero"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/uberherocasestudy-bg.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <Container>
            <Row>
              <Col lg={6} md={12}>
                <div className="case-study-hero-content">
                  <div className="breadcrumb">
                    <Link to="/" className="breadcrumb-link">Home</Link>
                    <span className="breadcrumb-separator">/</span>
                  </div>
                  
                  <h1 className="case-study-title">
                    Uber Eats: Redesigning the food delivery experience
                  </h1>
                  
                  <p className="case-study-subtitle">
                    Re-designing the magic of food to understand the pain points & how to solve them.
                  </p>
                  
                </div>
              </Col>
              
            </Row>
          </Container>
        </section>
      </ScrollReveal>

      {/* Context Section */}
      <ScrollReveal>
        <section className="case-study-section context-section">
          <Container>
            <Row>
              <Col lg={10} className="mx-auto">
                <div className="context-header">
                  <span className="context-label">CONTEXT</span>
                  <h2 className="context-title">How do people eat?</h2>
                </div>
                
                <div className="context-content">
                  <div className="context-description">
                    <p>
                      In today's world, people eat in various ways, ranging from less convenient to more 
                      convenient options. Some people cook unprepared foods while others prefer 
                      prepared foods that are ready to eat. Uber Eats has already developed solutions for 
                      three main categories of eating options:
                    </p>
                    <ol>
                      <li>On-demand restaurant delivery</li>
                      <li>Eating out / ordering pickup</li>
                      <li>Online grocery delivery</li>
                    </ol>
                    <p className="context-question">
                      In this case study, I aimed to answer <strong>whether or not Uber Eats should build a 
                      solution for a 4th way of eating: Packaged Meals</strong>.
                    </p>
                  </div>
                  
                  <div className="food-spectrum">
                    <img 
                      src="/images/Ubercasecontext.webp" 
                      alt="Food consumption spectrum showing how people eat from less convenient to more convenient options" 
                      className="context-diagram"
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </ScrollReveal>

      {/* Hypothesis Section */}
      <ScrollReveal>
        <section className="hypothesis-section">
          <Container>
            <Row>
              <Col lg={10} className="mx-auto">
                <div className="hypothesis-header">
                  <span className="hypothesis-label">HYPOTHESIS</span>
                </div>
                
                <div className="hypothesis-content">
                  <h2 className="hypothesis-statement">
                    If Uber Eats offers Packaged Meal delivery, then they will increase retention amongst their user base.
                  </h2>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </ScrollReveal>

      {/* The Market Section */}
      <ScrollReveal>
      <section className="market-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={12} className="market-content">
              <div className="market-header">
                <span className="market-label">THE MARKET</span>
                <h2 className="market-title">
                  Where is the packaged meal (Heat & Eat) market headed?
                </h2>
              </div>
              
              <div className="market-description">
                <p>
                Yes, the data shared is specifically for India. The India Ready-to-Eat (Heat & Eat) food market is valued around USD 1.0-1.3 billion in 2025 and is expected to grow at a CAGR of approximately 15-28% until 2030-2032, reaching between about USD 2.4 billion to over USD 10 billion depending on the source. This growth is driven by urbanization, busier lifestyles, rising disposable incomes, and increasing demand for convenient meal solutions in India.
                </p>
              </div>
              
              <div className="market-sources">
                <p>
                  <strong>Sources:</strong> <a href="#" className="source-link">Grand View Research</a>, <a href="#" className="source-link">Grand View Research</a>
                </p>
              </div>
            </Col>
            
            <Col lg={6} md={12} className="market-image-col">
              <div className="market-image-container">
                <img 
                  src="/images/hypo-img.png" 
                  alt="U.S. Meal Kit Delivery Services Market and U.S. Online Food Delivery Market growth charts showing market size projections from 2020-2030" 
                  className="market-chart"
                />
              </div>
            </Col>
          </Row>
          
          {/* Heat & Eat Companies Container */}
          <Container className="mt-5">
            <Row>
              <Col lg={12} className="text-center">
                <div className="heat-eat-companies">
                  <h3 className="heat-eat-title">What Heat & Eat companies exist?</h3>
                  <div className="heat-eat-image-container">
                    <img 
                      src="/images/heat-eat-data-img.png" 
                      alt="Heat & Eat companies and market data visualization" 
                      className="heat-eat-data-image"
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
      </ScrollReveal>

      {/* The Audience Section */}
      <ScrollReveal>
      <section className="audience-section">
        <Container>
          <Row>
            <Col lg={4} md={12} className="audience-intro">
              <div className="audience-header">
                <span className="audience-label">THE AUDIENCE</span>
                <h2 className="audience-title">
                  Who are the users driving this growth?
                </h2>
              </div>
              
              <div className="audience-description">
                <p>
                  In general, there are a lot of similarities between 
                  Uber Eats users and users who order packaged 
                  meals (like Freshly).
                </p>
              </div>
              
              <div className="audience-sources">
                <p>
                  <strong>Sources:</strong> 1. <a href="#" className="source-link">Statista</a>, 
                  2. <a href="#" className="source-link">Numerator Insights</a>, 
                  3. <a href="#" className="source-link">Uber Eats Harris Poll</a>
                </p>
                <p className="audience-note">
                  *Assumption: demographic data is similar between Cook & Eat and Heat & Eat segments.
                </p>
              </div>
            </Col>
            
            <Col lg={8} md={12} className="audience-comparison">
              <div className="user-comparison">
                <div className="user-card">
                  <h3 className="user-card-title">Uber Eats Users</h3>
                  <div className="user-details">
                    <div className="user-detail">
                      <strong>Ages:</strong> 54% are Millennials or Gen X
                    </div>
                    <div className="user-detail">
                      <strong>Attitudes:</strong> 60% of users order delivery to 
                      avoid shopping for & preparing meals
                    </div>
                    <div className="user-detail">
                      <strong>Personas:</strong>
                      <ul>
                        <li>- Busy professionals (single, couples)</li>
                        <li>- Parents</li>
                        <li>- Elderly</li>
                        <li>- College students</li>
                        <li>- Travelers</li>
                        <li>- Businesses/teams</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="user-card">
                  <h3 className="user-card-title">
                    Packaged Meal Users*
                  </h3>
                  <div className="user-details">
                    <div className="user-detail">
                      <strong>Ages:</strong> 64% are Millennials or Gen X
                    </div>
                    <div className="user-detail">
                      <strong>Attitudes:</strong> 65% of users seek quick & easy 
                      meal solutions
                    </div>
                    <div className="user-detail">
                      <strong>Personas:</strong>
                      <ul>
                        <li>- Busy professionals (single, couples)</li>
                        <li>- Parents</li>
                        <li>- Elderly</li>
                        <li>- College students</li>
                        <li>- Travelers</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      </ScrollReveal>

      {/* User Insights Section */}
      <ScrollReveal>
      <section className="user-insights-section">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="insights-header">
                <span className="insights-label">USER INSIGHTS</span>
                <h2 className="insights-title">
                  What are the pain points that these users need addressed?
                </h2>
              </div>
            </Col>
          </Row>
          
          <Row className="insights-content">
            <Col lg={4} md={12} className="insight-item">
              <div className="insight-container">
                <div className="insight-icon">
                  <i className="fas fa-coins"></i>
                </div>
                <div className="insight-content">
                  <h3 className="insight-heading">Users seek cost-effective meal options</h3>
                  <div className="insight-description">
                    <p>
                      Users are looking for food options that won't break the bank, 
                      especially in 2022. If a user in NYC wanted to order 6 meals for the week, 
                      it could cost them $105-$135 including tip (Avg. $20/meal).
                    </p>
                    <p>
                      Packaged Meal services like Freshly cost an average of $13 after 
                      shipping (Avg $7 savings/meal).
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col lg={4} md={12} className="insight-item">
              <div className="insight-container">
                <div className="insight-icon">
                  <i className="fas fa-leaf"></i>
                </div>
                <div className="insight-content">
                  <h3 className="insight-heading">Users search for healthy meal options</h3>
                  <div className="insight-description">
                    <p>
                      Over time, more and more people are trying to eat healthier. 80% of 
                      users don't feel like they eat healthier when they get food delivered 
                      compared to when they cook.
                    </p>
                    <p>
                      81% of people believe Meal Kits are healthier than prepared food from 
                      grocery stores.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col lg={4} md={12} className="insight-item">
              <div className="insight-container">
                <div className="insight-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="insight-content">
                  <h3 className="insight-heading">Users want more convenience</h3>
                  <div className="insight-description">
                    <p>
                      Millennials exhibit a strong preference for convenience, spending the 
                      least amount of time preparing food compared to other generations. 66% 
                      of Millennials reported buying prepared food within 7 days prior.
                    </p>
                    <p>
                      A batch of Packaged Meals typically takes 2-3 minutes to heat up and can 
                      last 5-7 days in the refrigerator.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      </ScrollReveal>

      {/* User Journey Section */}
      <ScrollReveal>
      <section className="user-journey-section">
        <Container>
          <Row>
            <Col lg={4} md={12} className="journey-intro">
              <div className="journey-header">
                <span className="journey-label">USER JOURNEY</span>
                <h2 className="journey-title">
                  How do these user groups order food?
                </h2>
              </div>
              
              <div className="journey-description">
                <p>
                  In general, the ordering process is very similar between Uber Eats and 
                  Packaged Meal services like Freshly.
                </p>
                <p>
                  The main difference is the time it takes for the food to arrive.
                </p>
              </div>
            </Col>
            
            <Col lg={8} md={12} className="journey-flows">
              {/* Uber Eats User Flow */}
              <div className="user-flow">
                <div className="flow-header">
                  <h3 className="flow-title">Uber Eats Users</h3>
                  <p className="flow-subtitle">On-demand meal delivery</p>
                </div>
                
                <div className="flow-steps">
                  <div className="flow-step">
                    <div className="step-content">Opens Uber or Uber Eats</div>
                  </div>
                  <div className="flow-step">
                    <div className="step-content">Selects Delivery, Pickup, or Dine-in</div>
                  </div>
                  <div className="flow-step">
                    <div className="step-content">Browses & selects a restaurant</div>
                  </div>
                  <div className="flow-step">
                    <div className="step-content">Adds menu items to cart</div>
                  </div>
                  <div className="flow-step">
                    <div className="step-content">Submits order</div>
                  </div>
                  <div className="flow-step">
                    <div className="step-content">Receives order</div>
                  </div>
                </div>
                
                <div className="flow-timing">
                  <div className="timing-main">
                    <span className="timing-arrow">←</span>
                    <span className="timing-text">Estimated average: 3-10 min</span>
                    <span className="timing-arrow">→</span>
                  </div>
                  <div className="timing-delivery">
                    <span className="timing-text">Est. Avg: 30-35 min</span>
                  </div>
                </div>
              </div>
              
              {/* Packaged Meal User Flow */}
              <div className="user-flow">
                <div className="flow-header">
                  <h3 className="flow-title">Packaged Meal Users</h3>
                  <p className="flow-subtitle">Scheduled batch meal delivery</p>
                </div>
                
                <div className="flow-steps">
                  <div className="flow-step">
                    <div className="step-content">Opens Website or App</div>
                  </div>
                  <div className="flow-step">
                    <div className="step-content">Select number of meals</div>
                  </div>
                  <div className="flow-step">
                    <div className="step-content">Select delivery date</div>
                  </div>
                  <div className="flow-step">
                    <div className="step-content">Adds meals to cart</div>
                  </div>
                  <div className="flow-step">
                    <div className="step-content">Submits order</div>
                  </div>
                  <div className="flow-step">
                    <div className="step-content">Receives order</div>
                  </div>
                </div>
                
                <div className="flow-timing">
                  <div className="timing-main">
                    <span className="timing-arrow">←</span>
                    <span className="timing-text">Estimated average: 3-10 min</span>
                    <span className="timing-arrow">→</span>
                  </div>
                  <div className="timing-delivery">
                    <span className="timing-text">2-5 Days Later</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      </ScrollReveal>

      {/* The Marketplace Section */}
      <ScrollReveal>
      <section className="marketplace-section">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="marketplace-header">
                <span className="marketplace-label">THE MARKETPLACE</span>
                <h2 className="marketplace-title">
                  Since Uber Eats is a marketplace, we should consider how Packaged Meals could affect other user groups.
                </h2>
              </div>
            </Col>
          </Row>
          
          <Row className="marketplace-content">
            <Col lg={4} md={12} className="marketplace-item">
              <div className="marketplace-card">
                <h3 className="card-title">Packaged Meal Brands</h3>
                
                <div className="card-section">
                  <h4 className="section-title">Advantages</h4>
                  <ul className="section-list">
                    <li>Lower CAC</li>
                    <li>Increased revenue from new distribution channel</li>
                    <li>Potential cost savings through Uber's delivery network and infrastructure</li>
                  </ul>
                </div>
                
                <div className="card-section">
                  <h4 className="section-title">Risks / disadvantages</h4>
                  <ul className="section-list">
                    <li>Technical integration with Uber Eats</li>
                    <li>Smaller margins for new users who may have joined in other ways</li>
                    <li>Lower ARPU (users may split meals between Restaurants, Groceries, Packaged Meals)</li>
                    <li>Sudden increase in demand, leading to difficulty fulfilling</li>
                  </ul>
                </div>
              </div>
            </Col>
            
            <Col lg={4} md={12} className="marketplace-item">
              <div className="marketplace-card">
                <h3 className="card-title">Delivery Couriers</h3>
                
                <div className="card-section">
                  <h4 className="section-title">Advantages</h4>
                  <ul className="section-list">
                    <li>New orders flowing in daily/weekly</li>
                  </ul>
                </div>
                
                <div className="card-section">
                  <h4 className="section-title">Risks / disadvantages</h4>
                  <ul className="section-list">
                    <li>Potentially fewer overall orders, if frequent purchases consolidate multiple orders into packaged meal subscription</li>
                    <li>Package differences:
                      <ul className="sub-list">
                        <li>Heavier (ice packs & insulation) with need to maintain temperature during transit</li>
                        <li>Bigger (user could order up to 12 meals at once)</li>
                      </ul>
                    </li>
                    <li>Distribution centers may not be in city centers, causing Couriers to travel farther</li>
                  </ul>
                </div>
              </div>
            </Col>
            
            <Col lg={4} md={12} className="marketplace-item">
              <div className="marketplace-card">
                <h3 className="card-title">Restaurants & Grocery Stores</h3>
                
                <div className="card-section">
                  <h4 className="section-title">Advantages</h4>
                  <ul className="section-list">
                    <li>Higher WAUs picking their Packaged Meals leading to more Restaurant & Grocery store impressions</li>
                    <li>Potentially higher number of Uber One members redeeming benefits with Restaurants & Grocery stores</li>
                    <li>Restaurants could offer their own packaged meal plans. 41% of consumers would be interested in meal kits from their favorite restaurants. (Source: <a href="#" className="source-link">Fundera by NerdWallet</a>)</li>
                  </ul>
                </div>
                
                <div className="card-section">
                  <h4 className="section-title">Risks / disadvantages</h4>
                  <ul className="section-list">
                    <li>Packaged Meal orders may cannibalize total orders from Restaurants and Grocery stores</li>
                    <li>Fewer repeat customers because of additional cheaper option.</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      </ScrollReveal>

      {/* The Big Takeaway Section */}
      <ScrollReveal>
      <section className="big-takeaway-section">
        <Container>
          <Row>
            <Col lg={8} md={12} className="takeaway-content">
              <div className="takeaway-header">
                <span className="takeaway-label">THE BIG TAKEAWAY</span>
              </div>
              
              <div className="takeaway-description">
                <p>Uber Eats users are very similar to Packaged Meal delivery users.</p>
                
                <ol className="takeaway-list">
                  <li>
                    They're similar in age and share the same attitude when it comes to eating food: they want to avoid grocery 
                    shopping and seek easy, cost-effective, and time-saving options.
                  </li>
                  <li>They're used to similar ordering flows.</li>
                  <li>
                    The Heat & Eat market is projected to continue expanding at a high rate, meaning there's likely already high 
                    demand from Uber Eat's existing user base for this type of food.
                  </li>
                </ol>
                
                <p>
                  Also, there are enough advantages for Packaged Meal companies to partner with Uber Eats as a new distribution 
                  channel.
                </p>
              </div>
              
              <div className="tldr-section">
                <h3 className="tldr-title">
                  TLDR: Uber Eats users & Packaged Meal companies can benefit from a new 
                  Packaged Meals offering.
                </h3>
              </div>
            </Col>
            
            <Col lg={4} md={12} className="takeaway-image">
              <div className="circular-image">
                <img 
                  src={`${process.env.PUBLIC_URL}/images/big-take-img.png`}
                  alt="Person enjoying food - representing the synergy between Uber Eats and packaged meals" 
                  className="takeaway-img"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      </ScrollReveal>

      {/* The Goal Section */}
      <ScrollReveal>
      <section className="goal-section">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="goal-header">
                <span className="goal-label">THE GOAL</span>
              </div>
              
              <div className="goal-content">
                <h2 className="goal-title">
                  Increase <span className="highlighted-text">average orders per user per week</span> by introducing 
                  Packaged Meals into the Uber Eats experience.
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      </ScrollReveal>

      {/* Feature Prioritization & MVP Definition Section */}
      <ScrollReveal>
      <section className="mvp-section">
        <Container>
          <Row>
            <Col lg={4} md={12} className="mvp-intro">
              <div className="mvp-header">
                <span className="mvp-label">FEATURE PRIORITIZATION & MVP DEFINITION</span>
                <h2 className="mvp-title">
                  What should be included in the MVP?
                </h2>
              </div>
              
              <div className="mvp-description">
                <p>
                  For a successful pilot to be run of Packaged Meals, the 
                  following user stories are required to build.
                </p>
              </div>
            </Col>
            
            <Col lg={8} md={12} className="mvp-stories">
              <UserStories />
            </Col>
          </Row>
        </Container>
      </section>
      </ScrollReveal>

      {/* Solutions Explored Section */}
      <ScrollReveal>
      <section className="solutions-section">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="solutions-header">
                <span className="solutions-label">SOLUTIONS EXPLORED</span>
                <h2 className="solutions-title">
                  What options do we have to offer and fulfill Packaged Meal on Uber Eats?
                </h2>
              </div>
            </Col>
          </Row>
          
          <Row className="solutions-content">
            <Col lg={6} md={12} className="solution-option">
              <div className="solution-card">
                <div className="solution-icon">
                  <i className="fas fa-calendar-check"></i>
                </div>
                <h3 className="solution-number">1. Schedule</h3>
                <p className="solution-description">
                  Users can schedule a batch of packaged meals to be delivered a few days in the future.
                </p>
                
                <div className="solution-details">
                  <div className="detail-item">
                    <strong>Order Types:</strong> <span className="detail-link">Batch Subscription</span> or <span className="detail-link">Batch Single Order</span>
                  </div>
                  
                  <div className="detail-item">
                    <strong>Fulfillment Options:</strong>
                  </div>
                  
                  <ul className="fulfillment-list">
                    <li>
                      <strong>Brand:</strong> Uber wouldn't be involved in fulfillment, just the ordering experience. Orders would be fulfilled by existing 
                      methods (Fedex, UPS, etc.)
                    </li>
                    <li>
                      <strong>Uber:</strong> To transport meals from the cooking center to the distribution center in a target city, the Uber Freight 
                      network can be utilized. Local couriers in the city can be responsible for picking up and delivering the batches of meals 
                      based on a predetermined schedule. To optimize the process, the Logistics team can work with the couriers to 
                      route them to the distribution center near the city centers from their homes. This ensures that the 
                      delivery process is both efficient and timely. Additionally, to minimize waste, Uber couriers can be provided with 
                      reusable ice packs that they can return to the distribution center after each delivery.
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            
            <Col lg={6} md={12} className="solution-option">
              <div className="solution-card">
                <div className="solution-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <h3 className="solution-number">2. On-Demand</h3>
                <p className="solution-description">
                  Users can order packaged meals for delivery within ~30 minutes.
                </p>
                
                <div className="solution-details">
                  <div className="detail-item">
                    <strong>Order Types:</strong> <span className="detail-link">Single</span>, <span className="detail-link">Batch</span>, or <span className="detail-link">Add-On</span>
                  </div>
                  
                  <div className="detail-item">
                    <strong>Fulfillment Options:</strong>
                  </div>
                  
                  <ul className="fulfillment-list">
                    <li>
                      <strong>Uber:</strong> To ensure that meal inventory is managed efficiently, it is important to predict which meals will be selected in 
                      target cities on a weekly basis. This information can then be used to determine an appropriate amount of inventory 
                      to take on. To transport the meals from the cooking center to the distribution center in the target city, the Uber 
                      Freight network can be utilized. Local couriers can be responsible for picking up and delivering the batches of meals 
                      based on the predicted demand. To optimize the process, the Logistics team can work with the couriers to 
                      route them to the distribution center on their way into the city centers from their homes. This ensures that the 
                      delivery process is both efficient and timely.
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      </ScrollReveal>

      {/* Evaluating Solutions Section */}
      <ScrollReveal>
      <section className="evaluating-section">
        <Container>
          <Row>
            <Col lg={4} md={12} className="evaluating-intro">
              <div className="evaluating-header">
                <span className="evaluating-label">EVALUATING SOLUTIONS</span>
                <h2 className="evaluating-title">
                  Which order and fulfillment type work the best across a variety of vectors?
                </h2>
              </div>
              
              <div className="evaluating-description">
                <p>
                  A Batch Subscription that is fulfilled by Uber has the highest business impact, best 
                  user experience, and benefits the delivery couriers.
                </p>
              </div>
            </Col>
            
            <Col lg={8} md={12} className="evaluating-matrix">
              <div className="evaluation-image">
                <img 
                  src={`${process.env.PUBLIC_URL}/images/8xg.webp`}
                  alt="Evaluation matrix comparing different order and fulfillment types across various vectors" 
                  className="matrix-img"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      </ScrollReveal>

      {/* Final Solution Section */}
      <ScrollReveal>
      <section 
        className="final-solution-section"
        style={{
          '--left-bg-image': `url(${process.env.PUBLIC_URL}/images/left-bg.webp)`
        } as React.CSSProperties}
      >
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={12} className="final-solution-left">
              <div className="final-solution-content">
                <span className="final-solution-label">FINAL SOLUTION</span>
                <h2 className="final-solution-title">
                  Packaged Meal Subscriptions by Uber Eats
                </h2>
              </div>
            </Col>
            
            <Col lg={6} md={12} className="final-solution-right">
              <div className="final-solution-features">
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-coins"></i>
                  </div>
                  <div className="feature-content">
                    <h3 className="feature-title">Cost Effective</h3>
                    <p className="feature-description">
                      Save money by using Uber's delivery network to fulfill your packaged meals.
                    </p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-leaf"></i>
                  </div>
                  <div className="feature-content">
                    <h3 className="feature-title">Healthy Options</h3>
                    <p className="feature-description">
                      Balance your diet with healthy, diet-specific Packaged Meal subscriptions.
                    </p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="feature-content">
                    <h3 className="feature-title">Handed to You</h3>
                    <p className="feature-description">
                      Schedule a delivery time when you know you'll be home, ensuring your food stays safe.
                    </p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-recycle"></i>
                  </div>
                  <div className="feature-content">
                    <h3 className="feature-title">Sustainable Ordering</h3>
                    <p className="feature-description">
                      Uber Eats couriers keeps gel icepacks for reuse in future orders.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      </ScrollReveal>

      {/* User Experience Section */}
      <section className="user-experience-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={12} className="user-experience-left">
              <div className="user-experience-content">
                <h2 className="user-experience-title">
                  What would the User Experience look like?
                </h2>
                
                <div className="user-experience-points">
                  <div className="experience-point">
                    <h3 className="point-title">Separate from Restaurants</h3>
                    <p className="point-description">
                      In an effort to not canabilize Restaurant orders, Packaged Meal options will be a distinct flow in the app.
                    </p>
                  </div>
                  
                  <div className="experience-point">
                    <h3 className="point-title">Transparent, simple, and educational</h3>
                    <p className="point-description">
                      At each step, we'll explain this new ordering concept to users and guide them to order.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col lg={6} md={12} className="user-experience-right">
              <div className="user-experience-image">
                <img 
                  src={`${process.env.PUBLIC_URL}/images/Group+72.webp`}
                  alt="Mobile app UI screenshots showing the user experience for Packaged Meals" 
                  className="ux-mockup-img"
                />
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={12} className="user-experience-flow-right">
              <div className="user-experience-flow-image">
                <img 
                  src={`${process.env.PUBLIC_URL}/images/Group+73.webp`}
                  alt="Mobile app screens showing delivery scheduling and meal selection flow" 
                  className="ux-flow-mockup-img"
                />
              </div>
            </Col>
            
            <Col lg={6} md={12} className="user-experience-flow-left">
              <div className="user-experience-flow-content">
                <h2 className="user-experience-flow-title">
                  What would the User Experience look like?
                </h2>
                
                <div className="user-experience-flow-points">
                  <div className="experience-flow-point">
                    <h3 className="flow-point-title">Schedule delivery</h3>
                    <p className="flow-point-description">
                      Pick a time that works with your schedule. Your courier will recycle packaging materials for reuse.
                    </p>
                  </div>
                  
                  <div className="experience-flow-point">
                    <h3 className="flow-point-title">Freshly</h3>
                    <p className="flow-point-description">
                      Picked for you - Choose from a curated selection of chef-prepared meals delivered fresh to your door.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Launch & GTM Strategy Section */}
      <section className="launch-strategy-section">
        <Container>
          <Row>
            <Col lg={8} md={12} className="launch-strategy-main">
              <div className="launch-strategy-header">
                <span className="launch-strategy-label">LAUNCH & GTM STRATEGY</span>
                <h2 className="launch-strategy-title">
                  Phased rollout of Packaged Meals
                </h2>
                <p className="launch-strategy-intro">
                  We will start the phased rollout with a pilot. Throughout the pilot, we'll be in "learn and iterate" mode. After we prove out the concept and work out the kinks, we will begin expanding.
                </p>
              </div>
              
              <div className="launch-strategy-phases">
                <div className="phase-column">
                  <h3 className="phase-title">Run a pilot in a single city in the INDIA</h3>
                  <p className="phase-description">
                    Introducing Packaged Meals may have a complex set of effects on the Uber Eats ecosystem. To ensure the marketplace remains healthy and balanced, we'll be piloting this offering in a single city to start.
                  </p>
                </div>
                
                <div className="phase-column">
                  <h3 className="phase-title">Iterate based on learnings</h3>
                  <p className="phase-description">
                    From our pilot, we'll learn whether or not Packaged Meals will have a positive impact on our users and our bottom line. We'll also rapidly iterate through kinks we discover facilitating and fulfilling these packaged meal orders.
                  </p>
                </div>
                
                <div className="phase-column">
                  <h3 className="phase-title">Expand to more markets in the INDIA</h3>
                  <p className="phase-description">
                    Once we are confident Packaged Meals has a positive impact on our marketplace, and we've optimized our order and fulfillment flows, we will expand to more markets in the INDIA
                  </p>
                </div>
                
                <div className="phase-column">
                  <h3 className="phase-title">Rollout globally</h3>
                  <p className="phase-description">
                    Finally, we will partner with international packaged meal brands to roll out Packaged Meal Subscriptions to our Uber Eats users in cities across the globe.
                  </p>
                  <p className="phase-description phase-highlight">
                    We will have increased average orders per user per month globally.
                  </p>
                </div>
              </div>
            </Col>
            
            <Col lg={4} md={12} className="launch-strategy-sidebar">
              <div className="sidebar-content">
                <div className="sidebar-section">
                  <h3 className="sidebar-title">Who is involved?</h3>
                  <p className="sidebar-description">
                    Launching a Packaged Meals pilot will involved various teams across Uber - with deep involvement from our Product/Engineering teams, Logistics, Operations, Customer Support, Data Science, Legal, Partnerships, and more.
                  </p>
                </div>
                
                <div className="sidebar-section">
                  <h3 className="sidebar-title">Education</h3>
                  <p className="sidebar-description">
                    We'll work with a variety of team members to educate internal stakeholders (support, marketing, data science, etc.) and external stakeholders (couriers, packaged meal brands) about the packaged meals product & nuances.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Measuring Success Section */}
      <section className="measuring-success-section">
        <Container>
          <div className="measuring-success-content">
            <div className="measuring-success-header">
              <span className="measuring-success-label">MEASURING SUCCESS</span>
              <h2 className="measuring-success-title">Pilot Metrics</h2>
            </div>
            
            <div className="north-star-metric-container">
              <div className="north-star-metric-box">
                <span className="north-star-label">NORTH STAR METRIC</span>
                <h3 className="north-star-metric">Average Orders Per User Per Week</h3>
                <p className="north-star-description">
                  If successful, we should see an increased Average Order Per User Per Week value because Uber Eats users are ordering more meals throughout the week.
                </p>
              </div>
            </div>
            <div className="metrics-categories-container">
              <Row>
                <Col lg={6} md={12} className="metrics-left-column">
                  <div className="metrics-section">
                    <h3 className="metrics-category-title">LEADING INDICATORS</h3>
                    <ul className="metrics-list">
                      <li className="metric-item">Packaged Meal Brand Impressions</li>
                      <li className="metric-item">Packaged Meal Funnel Conversion Rate</li>
                      <li className="metric-item">New Packaged Meal Subscriptions Per Week</li>
                    </ul>
                    <p className="metrics-explanation">
                      These early-stage metrics help us understand user engagement and conversion patterns before the full impact is realized.
                    </p>
                  </div>
                  
                  <div className="metrics-section">
                    <h3 className="metrics-category-title">COUNTER METRICS</h3>
                    <ul className="metrics-list">
                      <li className="metric-item">Average Restaurant Orders Per Week</li>
                      <li className="metric-item">Average Grocery Store Orders Per Week</li>
                    </ul>
                    <p className="metrics-explanation">
                      One potential unintended side effect of offering Packaged Meals is that Uber Eats users order fewer times at Restaurants and Grocery Stores (because they are getting more cheap meals with a Packaged Meal subscription. This could result in Restaurant and Grocery Store partners leaving Uber Eats which would be very detrimental to the Marketplace. We should monitor these metrics closely.
                    </p>
                  </div>
                </Col>
                
                <Col lg={6} md={12} className="metrics-right-column">
                  <div className="metrics-section">
                    <h3 className="metrics-category-title">LAGGING INDICATORS</h3>
                    <ul className="metrics-list">
                      <li className="metric-item">ARPU Per Month</li>
                      <li className="metric-item">3 Month User Retention</li>
                    </ul>
                    <p className="metrics-explanation">
                      These long-term metrics measure the sustained impact and value creation of the Packaged Meals offering over time.
                    </p>
                  </div>
                  
                  <div className="metrics-section">
                    <h3 className="metrics-category-title">MONITORING METRICS</h3>
                    <ul className="metrics-list">
                      <li className="metric-item">Packaged Meal Subscription Start Error Rate</li>
                      <li className="metric-item">Number of Daily "0 meals available" Error</li>
                      <li className="metric-item">Packaged Meal Order Send Error Rate</li>
                    </ul>
                    <p className="metrics-explanation">
                      These error-related metrics will help us quickly identify if we need to fix a core part of the Packaged Meal flow. Whether it's starting a subscription, if we end up offering 0 meals to users, or if we can't properly send orders to our Packaged Meal partners.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </section>

      {/* Final Thoughts Section */}
      <ScrollReveal>
      <section className="final-thoughts-section">
        <Container>
          <div className="final-thoughts-content">
            
            <Row className="align-items-start">
              <Col lg={8} md={12} className="final-thoughts-text">
                <div className="thoughts-section">
                  <h2 className="thoughts-section-title">SUMMARY</h2>
                  <div className="thoughts-paragraphs">
                    <p>
                      In this case study, the primary objective was to determine if introducing Packaged Meals as a fourth meal type on Uber Eats could potentially increase user retention. My initial hypothesis suggested that offering Packaged Meals would increase retention rates for Uber Eats, catering to consumers who are seeking affordable, convenient, and healthy meal options.
                    </p>
                    <p>
                      Currently, Packaged Meals are delivered via UPS or FedEx, which does not provide an optimal user experience. Customers have no control over the delivery time, and their food for the week could be at risk of theft. Uber Eats, however, is uniquely positioned to significantly improve the fulfillment process for this type of meal. By leveraging their existing infrastructure, Uber Eats can create a differentiated, seamless experience that adds substantial value for users, encouraging them to order through the platform instead of directly from Packaged Meal brands.
                    </p>
                    <p>
                      As a Product Manager at Uber, I would recommend conducting a small-scale pilot test in a specific market to evaluate the impact of introducing Packaged Meals on the identified north star metric: Average Orders Per Week Per User. This would provide valuable insights into the viability of this addition to the Uber Eats ecosystem and inform future expansion decisions.
                    </p>
                  </div>
                </div>
                
                <div className="thoughts-section">
                  <h2 className="thoughts-section-title">WHAT I LEARNED ABOUT MYSELF</h2>
                  <div className="thoughts-paragraphs">
                    <p>
                      As someone who orders food delivery multiple times a week, I was most surprised to find out through this Case Study that other people don't do the same. 🤪
                    </p>
                    <p>
                      If you made it all the way to the end of this, thank you very much for reading!
                    </p>
                  </div>
                </div>
              </Col>
              
              <Col lg={4} md={12} className="final-thoughts-image">
                <div className="thoughts-image-container">
                  <img 
                    src={`${process.env.PUBLIC_URL}/images/unsplash-image-1uDgb-65_28.webp`}
                    alt="Uber Eats delivery person on bicycle at night" 
                    className="thoughts-image"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      </ScrollReveal>

      {/* Navigation */}
      <section className="case-study-navigation">
        <Container>
          <Row>
            <Col md={6}>
              <Link to="/" className="nav-link-back">
                <i className="fas fa-arrow-left"></i>
                Back to Portfolio
              </Link>
            </Col>
            <Col md={6} className="text-end">
              <Link to="/case-study/paypal" className="nav-link-next">
                Next Case Study
                <i className="fas fa-arrow-right"></i>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default UberEatsCaseStudy;
