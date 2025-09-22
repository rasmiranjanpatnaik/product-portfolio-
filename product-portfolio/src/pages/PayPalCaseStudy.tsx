import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './PayPalCaseStudy.css';

const PayPalCaseStudy: React.FC = () => {
  return (
    <div className="case-study-page">
      {/* Hero Section */}
      <section className="case-study-hero">
        <img 
          src="/images/paypal-wood-bg.jpg" 
          alt="Wooden background" 
          className="background-image"
        />
        <div className="hero-content">
          <div className="hero-text-overlay">
            <div className="breadcrumb">
              <Link to="/" className="breadcrumb-link">Home</Link>
              <span className="breadcrumb-separator">/</span>
              <span className="breadcrumb-current">PayPal Case Study</span>
            </div>
            
            <div className="project-info">
              <span className="project-company">PayPal • 2022</span>
              <h1 className="project-title">Adding Universal Search to the PayPal app</h1>
            </div>
          </div>
        </div>
      </section>

      {/* User Journey Section */}
      <section className="user-journey-section">
        <div className="journey-container">
          <div className="journey-left">
            <div className="context-label">CONTEXT</div>
            <h2 className="journey-title">Search on Mobile</h2>
            <div className="journey-description">
              <p>
                The goal of this initiative is to add Universal Search to the PayPal mobile app. We 
                want to make it easier and faster for PayPal users to find what they need. This 
                initiative aligns with PayPal's organizational mission of providing convenient 
                products and services to help users take control of their financial lives.
              </p>
              <p>
                In this Case Study, I'll be evaluating the PayPal ecosystem and user base to 
                determine common pain points PayPal users have. From there, I'll define an MVP 
                solution that addresses those core pain points. Finally, I'll set success metrics and a 
                rollout plan to test our MVP solution with a subset of the PayPal user base.
              </p>
            </div>
          </div>
              <img 
                src="/images/PayPal-bg_files/paypalcurrent.jpg" 
                alt="PayPal Mobile App Home Screen" 
                className="phone-screen"
              />
        </div>
      </section>

      {/* Hypothesis Section */}
      <section className="user-journey-section hypothesis-section">
        <div className="journey-container">
          <div className="journey-left">
            <div className="context-label">HYPOTHESIS</div>
            <h2 className="journey-title">
              If PayPal adds Universal Search to their Mobile App,<br />
              then users will complete core tasks faster.
            </h2>
          </div>
        </div>
      </section>

      {/* The Market Section */}
      <section className="user-journey-section">
        {/* Container 1 - Venmo */}
        <div className="market-container">
          <div className="journey-container">
            <div className="journey-left">
              <div className="context-label">THE MARKET</div>
              <h2 className="journey-title">What can we learn from competitors?</h2>
              <div className="journey-description">
                <p>
                  Industry standard across payment apps like Venmo and other native apps like 
                  Instagram or SeatGeek is to support multiple different <em>types</em> of searches.
                </p>
                
                <h3>Venmo</h3>
                <p>
                  In the case of <u>Venmo</u>, users can search <em>People, Businesses, & Charities</em> on the 
                  home screen. Interestingly, when users tap on the search bar, the user is 
                  navigated to a full Search screen, with <em>Name, @username</em> as the placeholder.
                </p>
              </div>
            </div>
            <div className="journey-right">
              <div className="market-images">
                <img 
                  src="/images/PayPal-bg_files/Frame+1.png" 
                  alt="Venmo Search Interface" 
                  className="market-image"
                />
                <img 
                  src="/images/PayPal-bg_files/Frame+2.png" 
                  alt="PayPal Search Interface" 
                  className="market-image"
                />
              </div>
            </div>
          </div>
                </div>
                
        {/* Container 2 - Instagram */}
        <div className="market-container">
          <div className="journey-container journey-container-flipped">
            <div className="journey-left">
              <div className="market-images">
                <img 
                  src="/images/PayPal-bg_files/gif.gif" 
                  alt="Instagram Search Interface" 
                  className="market-image"
                />
                <img 
                  src="/images/PayPal-bg_files/IMG_1845.PNG" 
                  alt="Instagram Search Results" 
                  className="market-image"
                />
              </div>
            </div>
            <div className="journey-right">
              <h3>Instagram</h3>
              <div className="journey-description">
                <p>
                  <u>Instagram</u> follows a similar pattern. Users can search anything and Instagram will 
                  return appropriate results. Instagram prompts users with fun, unique search 
                  terms to spark inspiration for what's possible with their search.
                </p>
                <p>
                  Once a user actually searches, they land on the <em>Top</em> tab of the search results 
                  page. They can then switch to the Accounts, Audio, Tags, or Places tabs. We can 
                  assume these are in order of what Instagram believes is most valuable to drive 
                  users to.
                </p>
              </div>
            </div>
          </div>
                </div>
                
        {/* Container 3 - Common Themes */}
        <div className="market-container">
          <div className="journey-container">
            <div className="journey-left">
              <h2 className="journey-title">A few common themes across all of these apps</h2>
              <div className="journey-description">
                <ul>
                  <li>
                    The Search bar is typically on the Home tab/first tab and is at the top of the screen. It 
                    grounds the user and sets the stage that they can find whatever they need from it.
                  </li>
                  <li>
                    The Search bar placeholder text copy is usually high level: "Search for anything" or 
                    "Search". In order to not box the user into thinking they can only search for one thing.
                    <ul>
                      <li>
                        The empty states may include prompts "Try searching for" or "Search 
                        'woodworking'" to spark ideas in the user's brain about what they may be able to 
                        search.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Most Search experiences support many different categories of results.
                  </li>
                </ul>
              </div>
            </div>
            <div className="journey-right">
              <div className="market-images">
                <img 
                  src="/images/PayPal-bg_files/image1.png" 
                  alt="Ebay Search Interface" 
                  className="market-image"
                />
                <img 
                  src="/images/PayPal-bg_files/image2.png" 
                  alt="LinkedIn Search Interface" 
                  className="market-image"
                />
                <img 
                  src="/images/PayPal-bg_files/image3.png" 
                  alt="Google Search Interface" 
                  className="market-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Audience Section */}
      <section className="user-journey-section audience-section">
        <div className="market-container">
          <div className="journey-container">
            <div className="journey-left">
              <div className="context-label">THE AUDIENCE</div>
              <h2 className="journey-title">Who uses PayPal?</h2>
              <div className="journey-description">
                <p>
                  At a high level, there are two main users of PayPal: <strong>individuals</strong> 
                  and <strong>merchants</strong>. This initiative is focused specifically on adding 
                  Universal Search to the <em>PayPal</em> mobile app, not the <em>PayPal 
                  Business</em> app. This means we'll focus on our <strong>individual</strong> user 
                  base.
                </p>
              </div>
            </div>
            <div className="audience-card-center">
              <div className="audience-card">
                <h3>Individual PayPay Users:</h3>
                <div className="audience-stats">
                  <p>Age: 24% of PayPal's US users are 58 years or older. ~48M users. <a href="#" className="source-link">(source)</a></p>
                  <p>On average, an individual user transacts 45 times per year. <a href="#" className="source-link">(source)</a></p>
                  <p>PayPal has users in 200 countries/regions and supports 25 currencies, but the United States has the most users. <a href="#" className="source-link">(source)</a></p>
                </div>
              </div>
            </div>
            <div className="journey-right">
              <div className="use-cases">
                <h4>Use Cases of PayPal</h4>
                <ul>
                  <li>Securely pay online with purchase protection</li>
                  <li>Pay internationally without converting currency</li>
                  <li>Pay for subscriptions</li>
                  <li>Transfer money between friends/family</li>
                  <li>Link multiple payment methods</li>
                  <li>Defer payments with PayPal Credit</li>
                  <li>Get/link Loyalty cards</li>
                  <li>Buy, sell, and securely hold cryptocurrencies with PayPal</li>
                  <li>Save with high yield savings</li>
                  <li>Get cash back on deals</li>
                  <li>Donate to a charity</li>
                  <li>Create a fundraiser</li>
                  <li>Get a debit card</li>
                  <li>Send invoices/estimates</li>
                  <li>Cash pickup / reload phone</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Container - Target User Analysis */}
        <div className="market-container">
          <div className="journey-container">
            <div className="journey-left audience-analysis">
              <div className="analysis-content">
                <p>
                  Without explicit usage data around the use cases listed above, we can make an assumption based on UI prominence that the 
                  two primary individual user use cases are:
                </p>
                <ol>
                  <li>Sending and requesting money</li>
                  <li>Managing transactions with individuals and merchants</li>
                </ol>
                
                <p>
                  To design the most impactful Universal Search feature, we'll solve core pain points for a target user segment based on these 
                  primary use cases. To summarize, we'll be focusing on users who:
                </p>
                
                <ul>
                  <li>Live in the United States</li>
                  <li>Are over the age of 58</li>
                  <li>Send money, request money, and manage their transaction history</li>
                </ul>x
                
                <p className="solution-summary">
                  Our Universal Search solution will ultimately provide value for all PayPal users (in the US and globally, and under the age of 58), and cover various use cases, but solving 
                  core pain points for this user segment is table stakes.
                </p>
                
                <p className="demographic-note">
                  Why? A user within this older demographic (which makes up about a quarter of our US user base) may not have as easy of a time adopting new search functionality (<a href="#" className="source-link">Source</a>) 
                  – so if we can build a solution that works for them, expanding to younger demographics will be easier. Additionally, because we've observed increasing growth amongst 
                  users over 50, we need to ensure our solution works well for these users. (<a href="#" className="source-link">Source</a>) Finally, these core use cases are done by almost all PayPal users so if we can solve pain 
                  points surrounding them, we will be able to provide value to a large percentage of our user base.
                </p>
              </div>
            </div>
            <div className="journey-right">
              <div className="phone-mockup-container">
                <img 
                  src="/images/PayPal-bg_files/1Home.png" 
                  alt="PayPal Mobile App Interface" 
                  className="audience-phone-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Insights Section */}
      <section className="user-journey-section user-insights-section">
        <div className="insights-container">
          <div className="insights-header">
            <div className="context-label">USER INSIGHTS</div>
            <h2 className="journey-title">What are the pain points that these users need addressed?</h2>
          </div>
          
          <div className="insights-cards">
            {/* Card 1 - Contact Finding */}
            <div className="insight-card">
              <div className="insight-icon">
                <img src="/images/PayPal-bg_files/send-money.png" alt="Send Money" className="insight-icon-img" />
              </div>
              <h3 className="insight-title">Hard time finding a contact to request money from or send money to</h3>
              <ul className="insight-points">
                <li>The person may not be a PayPal user yet</li>
                <li>The person may only be searchable in PayPal's database by contact info the user doesn't have</li>
                <li>The person's name may be different on PayPal compared to how the user knows them</li>
              </ul>
            </div>

            {/* Card 2 - Transaction Sifting */}
            <div className="insight-card">
              <div className="insight-icon">
                <img src="/images/PayPal-bg_files/transaction.png" alt="Transaction" className="insight-icon-img" />
              </div>
              <h3 className="insight-title">Hard time sifting through a lot of transactions to find the one they want</h3>
              <ul className="insight-points">
                <li>There may be older transactions that don't appear on the Home tab or too far down on the Wallet → Activity tab</li>
                <li>Users may want to find transactions by different criteria (date vs name vs amount)</li>
              </ul>
            </div>

            {/* Card 3 - Transaction History */}
            <div className="insight-card">
              <div className="insight-icon">
                <img src="/images/PayPal-bg_files/clock+(3).png" alt="Clock" className="insight-icon-img" />
              </div>
              <h3 className="insight-title">It takes a long time to see all past history with a specific individual or merchant</h3>
              <ul className="insight-points">
                <li>Seeing history with a specific merchant can take 4-5 clicks to get to</li>
                <li>Users may not know exactly how to get to the merchant</li>
                      </ul>
                    </div>

            {/* Card 4 - Not knowing what to type */}
            <div className="insight-card">
              <div className="insight-icon">
                <img src="/images/PayPal-bg_files/confused.png" alt="Confused" className="insight-icon-img" />
              </div>
              <h3 className="insight-title">Not knowing what they can type in to find a person (email, phone, name, etc.)</h3>
              <ul className="insight-points">
                <li>Users may spell emails wrong</li>
                <li>Users may enter phone numbers differently than how PayPal is expecting them (+11234567891 vs 123-456-7891 vs 123 456 7891)</li>
                <li>The person may have a different name than how the user is searching (ex: Tony vs Anthony)</li>
                      </ul>
                    </div>

            {/* Card 5 - Not knowing where to go */}
            <div className="insight-card">
              <div className="insight-icon">
                <img src="/images/PayPal-bg_files/choice.png" alt="Choice" className="insight-icon-img" />
              </div>
              <h3 className="insight-title">Not knowing where to go on their PayPal app to find what they need</h3>
              <ul className="insight-points">
                <li>User may not know they need to navigate to a specific tab to access certain information/features</li>
                <li>Users may go to one tab thinking they'll find what they need just to later discover it was in another area of the app</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* User Journey Section */}
      <section className="user-journey-flow-section">
        <div className="journey-flow-container">
          <div className="journey-flow-left">
            <div className="context-label">USER JOURNEY</div>
            <h2 className="journey-flow-title">How does a PayPal user find a transaction with someone?</h2>
            <div className="journey-flow-description">
              <p>
                In general, the information architecture of the PayPal app is confusing. Because PayPal is trying to grow 
                various parts of their business (Crypto, Savings, Merchant Deals) core user flows are buried.
              </p>
            </div>
          </div>
          <div className="journey-flow-right">
            <img 
              src="/images/PayPal-bg_files/userjourney.png" 
              alt="PayPal User Journey Flow" 
              className="journey-flow-image"
            />
          </div>
        </div>
      </section>

      {/* Big Takeaways Section */}
      <section className="big-takeaways-section">
        <div className="takeaways-container">
          <div className="takeaways-left">
            <h1 className="takeaways-title">BIG TAKEAWAYS</h1>
            <div className="takeaways-content">
              <p className="takeaways-intro">From this research, we can conclude a couple of things:</p>
              <ul className="takeaways-list">
                <li>
                  PayPal is growing in popularity amongst an older demographic as a way to send and receive money.
                </li>
                <li>
                  It's common for native apps to have a universal search bar on the home screen to enable users to quickly get to what they need.
                </li>
                <li>
                  Right now, core use cases like finding a contact or transaction are very difficult and time consuming to complete.
                </li>
              </ul>
              
              <div className="problem-statement">
                <div className="problem-label">THE PROBLEM</div>
                <h2 className="problem-title">
                  PayPal is lacking an easy way to enable their target user to find what they need to find and complete core actions.
                </h2>
              </div>
            </div>
          </div>
          <div className="takeaways-right">
            <div className="circular-image-container">
              <img 
                src="/images/PayPal-bg_files/unsplash-image-eV8DP7z1-dE.jpg" 
                alt="Person using phone" 
                className="circular-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Goal Section */}
      <section className="goal-section">
        <div className="goal-container">
          <div className="goal-content">
            <div className="goal-label">THE GOAL</div>
            <h2 className="goal-title">
              Decrease the <span className="highlighted-text">time it takes to complete core actions</span> on the 
              PayPal app by empowering users to search through all content and features available to them from one search box.
            </h2>
            <p className="goal-description">
              We will be focusing on solving these core pain points through our Universal Search feature. By helping users find contacts to request/send money, find and manage transactions, and more quickly navigate through the app, we're helping execute on PayPal's overall mission to make it more convenient to transact and control their financial lives.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Prioritization & MVP Definition Section */}
      <section className="mvp-section">
        <div className="mvp-container">
          <div className="mvp-left">
            <div className="mvp-label">FEATURE PRIORITIZATION & MVP DEFINITION</div>
            <h2 className="mvp-title">What should be included in the MVP?</h2>
            <div className="mvp-description">
              <p>
                Creating a Universal Search that encompasses all content across the entire PayPal app will be a very big 
                undertaking. In order to ensure it is worth investing resources here, we want to start by testing an MVP of 
                Universal Search. If successful, we will continue to build out a powerful Universal Search that helps users 
                find contacts, cryptocurrencies, and everything in between.
              </p>
            </div>
          </div>
          
          <div className="mvp-right">
            <div className="mvp-intro-text">
              <p>The feature set for our Universal Search MVP will be limited to an empty state and a results state because:</p>
              <ul>
                <li>
                  These states are the fewest required to provide users with context/value and allow us to begin learning if Universal Search 
                  is really solving pain points for the user.
                </li>
                <li>
                  Additionally, querying multiple data sets across PayPal's ecosystem at the same time, while returning results quickly, will be 
                  a big technical challenge/undertaking. In an effort to keep scope limited, features like "Auto expand core options" 
                  mentioned in Future Iterations have been deprioritized from the MVP.
                </li>
              </ul>
              
              <h3 className="user-stories-heading">User Stories</h3>
                </div>
                
            <div className="user-stories-accordion">
              <div className="accordion-item" onClick={(e) => {
                const item = e.currentTarget;
                const isActive = item.classList.contains('active');
                
                // Close all accordion items
                document.querySelectorAll('.accordion-item').forEach(acc => {
                  acc.classList.remove('active');
                  const icon = acc.querySelector('.accordion-icon');
                  if (icon) icon.textContent = '+';
                });
                
                // Open clicked item if it wasn't active
                if (!isActive) {
                  item.classList.add('active');
                  const icon = item.querySelector('.accordion-icon');
                  if (icon) icon.textContent = '−';
                }
              }}>
                <div className="accordion-header">
                  <span>As a PayPal user, I can search for things from my Home screen</span>
                  <span className="accordion-icon">+</span>
                </div>
                <div className="accordion-content">
                  <div className="accordion-body">
                    <p><strong>Acceptance Criteria:</strong></p>
                    <ul>
                      <li>Given I am on the PayPal Home screen, when I tap on the search bar, then I should be able to type and search for contacts, transactions, or merchants</li>
                      <li>Given I am on the Home screen, when I tap the search icon, then I should be navigated to the dedicated search screen</li>
                      <li>Given I start typing in the search bar, when I enter at least 2 characters, then relevant suggestions should appear below the search field</li>
                    </ul>
                    <p><strong>Business Value:</strong> Reduces friction by allowing users to search directly from the main screen without additional navigation steps.</p>
                  </div>
                </div>
                </div>
                
              <div className="accordion-item" onClick={(e) => {
                const item = e.currentTarget;
                const isActive = item.classList.contains('active');
                
                // Close all accordion items
                document.querySelectorAll('.accordion-item').forEach(acc => {
                  acc.classList.remove('active');
                  const icon = acc.querySelector('.accordion-icon');
                  if (icon) icon.textContent = '+';
                });
                
                // Open clicked item if it wasn't active
                if (!isActive) {
                  item.classList.add('active');
                  const icon = item.querySelector('.accordion-icon');
                  if (icon) icon.textContent = '−';
                }
              }}>
                <div className="accordion-header">
                  <span>As a PayPal user on the Search screen, I will have quick access to my top items</span>
                  <span className="accordion-icon">+</span>
                </div>
                <div className="accordion-content">
                  <div className="accordion-body">
                    <p><strong>Acceptance Criteria:</strong></p>
                    <ul>
                      <li>Given I am on the Search screen, when the screen loads, then I should see my most frequently contacted people at the top</li>
                      <li>Given I am on the Search screen, when I see the quick access section, then I should see my recent transactions displayed prominently</li>
                      <li>Given I tap on a quick access item, when I make the selection, then I should be taken directly to that contact or transaction</li>
                    </ul>
                    <p><strong>Business Value:</strong> Improves user efficiency by surfacing the most relevant and frequently used items upfront, reducing search time.</p>
                  </div>
                </div>
                </div>
                
              <div className="accordion-item" onClick={(e) => {
                const item = e.currentTarget;
                const isActive = item.classList.contains('active');
                
                // Close all accordion items
                document.querySelectorAll('.accordion-item').forEach(acc => {
                  acc.classList.remove('active');
                  const icon = acc.querySelector('.accordion-icon');
                  if (icon) icon.textContent = '+';
                });
                
                // Open clicked item if it wasn't active
                if (!isActive) {
                  item.classList.add('active');
                  const icon = item.querySelector('.accordion-icon');
                  if (icon) icon.textContent = '−';
                }
              }}>
                <div className="accordion-header">
                  <span>As a PayPal user, I will be able to search for Contacts, Transactions, and Merchants from one place</span>
                  <span className="accordion-icon">+</span>
                </div>
                <div className="accordion-content">
                  <div className="accordion-body">
                    <p><strong>Acceptance Criteria:</strong></p>
                    <ul>
                      <li>Given I enter a search query, when I type a person's name, then I should see matching contacts from my PayPal network</li>
                      <li>Given I enter a search query, when I type a transaction amount or merchant name, then I should see relevant transaction history</li>
                      <li>Given I search for merchants, when I type a business name, then I should see both my transaction history with them and their merchant profile</li>
                      <li>Given I see search results, when multiple categories match, then results should be grouped by type (Contacts, Transactions, Merchants)</li>
                    </ul>
                    <p><strong>Business Value:</strong> Consolidates multiple search functions into one unified experience, eliminating the need to navigate between different sections.</p>
                  </div>
                </div>
              </div>
              
              <div className="accordion-item" onClick={(e) => {
                const item = e.currentTarget;
                const isActive = item.classList.contains('active');
                
                // Close all accordion items
                document.querySelectorAll('.accordion-item').forEach(acc => {
                  acc.classList.remove('active');
                  const icon = acc.querySelector('.accordion-icon');
                  if (icon) icon.textContent = '+';
                });
                
                // Open clicked item if it wasn't active
                if (!isActive) {
                  item.classList.add('active');
                  const icon = item.querySelector('.accordion-icon');
                  if (icon) icon.textContent = '−';
                }
              }}>
                <div className="accordion-header">
                  <span>As a PayPal user, I will see the most relevant results when I search</span>
                  <span className="accordion-icon">+</span>
                </div>
                <div className="accordion-content">
                  <div className="accordion-body">
                    <p><strong>Acceptance Criteria:</strong></p>
                    <ul>
                      <li>Given I perform a search, when results are returned, then they should be ranked by relevance and recency</li>
                      <li>Given I search for a partial name, when multiple matches exist, then the most frequently contacted person should appear first</li>
                      <li>Given I search for transactions, when I enter an amount, then exact matches should appear before approximate matches</li>
                      <li>Given I have a search history, when I perform similar searches, then the system should learn and improve result ranking over time</li>
                    </ul>
                    <p><strong>Business Value:</strong> Ensures users find what they're looking for quickly, improving satisfaction and reducing abandonment of core tasks.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Solution Section */}
      <section className="final-solution-section">
        <div className="final-solution-container">
          <div className="final-solution-header">
            <div className="final-solution-label">FINAL SOLUTION</div>
            <h2 className="final-solution-title">Universal Search on Home and Search Results View</h2>
          </div>
          
          <div className="final-solution-image-container">
            <img 
              src="/images/PayPal-bg_files/PayPal+Home.png" 
              alt="PayPal Home Screen" 
              className="final-solution-image"
            />
            <img 
              src="/images/PayPal-bg_files/Expanded.png" 
              alt="PayPal Universal Search Final Solution" 
              className="final-solution-image"
            />
          </div>
              </div>
      </section>

      {/* Risks & Tradeoffs Section */}
      <section className="risks-section">
        <div className="risks-container">
          <div className="risks-left">
            <div className="risks-label">RISKS & TRADEOFFS</div>
            <h2 className="risks-title">What risks would PayPal open themselves up to if they added Universal Search to the app?</h2>
          </div>
          
          <div className="risks-right">
            <div className="risk-category">
              <h3 className="risk-category-title">Including the Search bar on the Home screen</h3>
              <ul className="risk-list">
                <li>
                  By taking up prominent real estate on the Home Screen, we may accidentally introduce friction to complete certain actions by 
                  pushing the rest of the Home Screen content/features down.
                </li>
              </ul>
            </div>
            
            <div className="risk-category">
              <h3 className="risk-category-title">Getting permission to access local phone contacts</h3>
              <ul className="risk-list">
                <li>
                  Note: this may have been previously solved in other areas of the app, but we will still want to be cognizant of these risks for our 
                  Universal Search solution as well.
                </li>
                <li>User privacy concern about syncing user's contact list & associated data, resulting in users not giving permission.</li>
                <li>
                  Technical challenges associated with combining local phone contact information with PayPal's contacts database, all while 
                  returning results fast.
                </li>
                <li>
                  We need to make sure duplicate results aren't returned which could confuse users. (Seeing two Anthony Saltarelli contacts 
                  would confuse the user around which to tap).
                </li>
              </ul>
            </div>
            
            <div className="risk-category">
              <h3 className="risk-category-title">MVP not including entire scope of searchable items</h3>
              <ul className="risk-list">
                <li>
                  Our MVP will only allow searching Contacts, Merchants, and Transactions. By not including cryptocurrencies for example, we 
                  may be accidentally training users that this Search bar will always be limited to these result types.
                </li>
                <li>A way to guard against this in the future will be updating the empty state with different result types to educate the user.</li>
                      </ul>
                    </div>
            
            <div className="risk-category">
              <h3 className="risk-category-title">Time & resources it'll take to build, launch, and maintain Universal Search</h3>
              <ul className="risk-list">
                <li>
                  Adding Universal Search to the UX adds another layer of complexity to maintaining the PayPal app. We have to ensure routing 
                  continues to function properly from Search & elsewhere.
                </li>
                <li>
                  Additionally, to be a true <em>Universal</em> Search, we should eventually support all types of PayPal content and features which will 
                  create additional work in the future as new PayPal functionality is launched.
                </li>
                <li>Committing to Universal Search means fewer resources can be dedicated to other functionality.</li>
                      </ul>
                    </div>
          </div>
              </div>
      </section>

      {/* Measuring Success Section */}
      <section className="measuring-success-section">
        <div className="measuring-success-container">
          <div className="measuring-success-header">
            <div className="measuring-success-label">MEASURING SUCCESS</div>
            <h2 className="measuring-success-title">A/B Test Metrics</h2>
          </div>
          
          <div className="north-star-metric-card">
            <div className="metric-badge">NORTH STAR METRIC</div>
            <h3 className="metric-title">Avg Time From App Open → Core Use Case Completion</h3>
            <div className="metric-description">
              <p>
                If we are solving our user's main pain points, we should see a decrease in the amount of time it takes for users 
                to complete core actions. <strong>Core Use Case Completion</strong> is an umbrella metric measuring users who do one of 
                <strong> sending money, requesting money, or viewing a past transaction</strong>
              </p>
            </div>
          </div>
          
          <div className="secondary-metrics-section">
            <div className="secondary-label">SECONDARY</div>
            <div className="secondary-intro">
              <p>
                These secondary metrics will help us determine if there are different areas of the Universal Search feature we may be able to 
                improve/optimize.
                  </p>
                </div>
                
            <div className="secondary-metrics-grid">
              <div className="secondary-metrics-column">
                <div className="secondary-metric">
                  <h4 className="secondary-metric-title">App open → core use case completion rate within a session</h4>
                  <ul className="secondary-metric-list">
                    <li>Does saving time to reach a contact/transaction/etc with Universal Search get more users to complete core use cases?</li>
                  </ul>
                </div>
                
                <div className="secondary-metric">
                  <h4 className="secondary-metric-title">Home view → search start rate</h4>
                  <ul className="secondary-metric-list">
                    <li>How many users are even starting searches?</li>
                    <li>Is the Search bar appealing and clear enough to prompt users to search?</li>
                  </ul>
                </div>
                
                <div className="secondary-metric">
                  <h4 className="secondary-metric-title">Search start → abandon rate</h4>
                  <ul className="secondary-metric-list">
                    <li>How many users begin searching for something and then abandon?</li>
                  </ul>
                </div>
                
                <div className="secondary-metric">
                  <h4 className="secondary-metric-title">Search start → result click rate</h4>
                  <ul className="secondary-metric-list">
                    <li>How many users begin searching and select a result?</li>
                    <li>Does this differ by result type? (Ex: finding transactions takes more time than contacts)</li>
                  </ul>
                </div>
                
                <div className="secondary-metric">
                  <h4 className="secondary-metric-title">Average time between search start → result click</h4>
                  <ul className="secondary-metric-list">
                    <li>How long does it take to select a result? (Is the UI simple enough for users to quickly select what they want to select)</li>
                    <li>Does this differ by result type?</li>
                  </ul>
                </div>
              </div>
              
              <div className="secondary-metrics-column">
                <div className="secondary-metric">
                  <h4 className="secondary-metric-title">Average clicked search result index value</h4>
                  <ul className="secondary-metric-list">
                    <li>What is the average position users are clicking on results? If it's low (1-2) then our autocomplete is working very well. If it's a couple results down (3-6) our autocomplete is performing okay. If it's higher, we probably need to optimize our algorithm to return better results.</li>
                  </ul>
                </div>
                
                <div className="secondary-metric">
                  <h4 className="secondary-metric-title">Number of WAUs using Search</h4>
                  <ul className="secondary-metric-list">
                    <li>Are more users using Search over time?</li>
                  </ul>
                </div>
                
                <div className="secondary-metric">
                  <h4 className="secondary-metric-title">Breakdown of result type clicks</h4>
                  <ul className="secondary-metric-list">
                    <li>Are users just searching for one type of content (contacts for example) or are they also searching for transactions and merchants?</li>
                  </ul>
                </div>
                
                <div className="secondary-metric">
                  <h4 className="secondary-metric-title">Search start → no results rate</h4>
                  <ul className="secondary-metric-list">
                    <li>How often are we failing to find any results for the user?</li>
                    <li>Are there any commonalities for search terms that are causing no results to appear?</li>
                  </ul>
                </div>
                
                <div className="secondary-metric">
                  <h4 className="secondary-metric-title">App open → contact permission given rate</h4>
                  <ul className="secondary-metric-list">
                    <li>Are most users giving us permission to access their contacts? If not, can we message it in a better way to increase this metric?</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="counter-metrics-section">
            <div className="counter-label">COUNTER METRICS</div>
            <div className="counter-intro">
              <p>
                Since our Universal Search bar will be on the Home tab and take up prime real estate, we want to ensure we are not 
                unintentionally hurting other core metrics. To monitor this, we will track:
                  </p>
                </div>
                
            <div className="counter-metrics-grid">
              <div className="counter-metrics-column">
                <div className="counter-metric">
                  <h4 className="counter-metric-title">Decreased new user account completion rate</h4>
                  <ul className="counter-metric-list">
                    <li>Are fewer new users completing their account set up because the Universal Search bar is pushing down critical onboarding steps?</li>
                  </ul>
                </div>
                
                <div className="counter-metric">
                  <h4 className="counter-metric-title">Decreased product expansion rates</h4>
                  <ul className="counter-metric-list">
                    <li>Are fewer users signing up for PayPal savings, buying Crypto, or signing up for merchant deals?</li>
                  </ul>
                </div>
              </div>
              
              <div className="counter-metrics-column">
                <div className="counter-metric">
                  <h4 className="counter-metric-title">Decreased average GMV transacted</h4>
                  <ul className="counter-metric-list">
                    <li>Are we unintentionally decreasing the amount of money processed through PayPal by introducing the Search bar and taking up Home screen real estate?</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Launch & GTM Strategy Section */}
      <section className="launch-gtm-section">
        <div className="launch-gtm-container">
          <div className="launch-gtm-left">
            <div className="launch-gtm-label">LAUNCH & GTM STRATEGY</div>
            <h2 className="launch-gtm-title">A/B Test Universal Search</h2>
            
            <div className="launch-gtm-content">
              <p className="launch-intro">
                To ensure we are improving the PayPal app's user experience by introducing Universal Search, we will be testing this 
                feature. We will A/B test our MVP with a small group of new and existing users within our target user segment.
              </p>
              
              <div className="test-versions">
                <h3>Versions:</h3>
                <ul>
                  <li><strong>Control:</strong> Current PayPal app without Universal Search (Start at 90% of audience)</li>
                  <li><strong>Variant:</strong> PayPal app with Universal Search (Start at 10% of audience)</li>
                </ul>
              </div>
              
              <div className="test-audience">
                <h3>Audience:</h3>
                <p>Users who...</p>
                <ul>
                  <li>Live in the United States</li>
                  <li>Are over the age of 18</li>
                </ul>
              </div>
              
              <div className="primary-metric">
                <h3>Primary Metric:</h3>
                <p>Average time between <strong>app open</strong> → <strong>core use case completion</strong></p>
              </div>
              
              <div className="test-strategy">
                <p>
                  We will be including new users in this experiment to ensure adding a Universal Search bar doesn't negatively impact core account setup / top of funnel metrics. 
                  We will be starting the A/B test variant at 10% of our target audience so that we can iterate without affecting the majority of users in this audience.
                </p>
                
                <p>
                  If the results of the A/B test are positive (primary measure of success achieved and no negative side effects) we will expand our test cohort to all users in the 
                  <strong>United States</strong> regardless of age. If our metrics in the expanded cohort are also positive, we will roll out the MVP to all United States users.
                </p>
                
                <p>
                  From there, we will begin improving the Universal Search experience by executing additional features on the roadmap and eventually expand Universal Search 
                  to be supported internationally.
                </p>
                
                <p>
                  <strong>Note:</strong> If our A/B test results are negative, we will investigate potential causes, iterate, and re-run the experiment.
                  </p>
                </div>
              </div>
          </div>
          
          <div className="launch-gtm-right">
            <div className="mockup-container">
              <img 
                src="/images/PayPal-bg_files/1Home.png" 
                alt="PayPal Universal Search A/B Test Mockup" 
                className="launch-mockup-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Future Iterations Section */}
      <section className="future-iterations-section">
        <div className="future-iterations-container">
          <div className="future-iterations-left">
            <div className="future-mockup-container">
              <img 
                src="/images/PayPal-bg_files/Expanded.png" 
                alt="PayPal Universal Search Future Iterations" 
                className="future-mockup-image"
              />
            </div>
          </div>
          
          <div className="future-iterations-right">
            <div className="future-iterations-label">FUTURE ITERATIONS</div>
            <h2 className="future-iterations-title">What could Universal Search do in the future?</h2>
            
            <div className="future-iterations-content">
              <ul className="future-features-list">
                <li>
                  <strong>Auto-expand core options within search results instead of navigating user to new screen</strong>
                  <br />
                  For example, if a user searches an individual contact and taps on a result, we can prompt 
                  them with "Send", "Request", or a "More" option. This will reduce friction to complete a core 
                  option and establish Universal Search as a powerful tool.
                </li>
                
                <li>
                  <strong>No results state to collect feedback about what the user was trying to search for.</strong> (can be 
                  used to prioritize order of following features)
                </li>
                
                <li>
                  <strong>Improved result matching</strong> (if you search Tony Saltarelli but the contacts name is Anthony 
                  Saltarelli, the contact would still show up based on last name, despite not being an exact 
                  string match)
                </li>
                
                <li>Search for invoices</li>
                
                <li>Search for Merchants deals by Name</li>
                
                <li>Search for Cryptocurrencies</li>
                
                <li>Search for Charities</li>
                
                <li>Search Transactions in additional ways (ex: date, amount)</li>
                
                <li>Filter results by category (ex: invoices, Crypto, etc), date, etc.</li>
                
                <li>
                  <strong>Additional routes & search terms will be evaluated based on data we can gather from early 
                  iterations.</strong> We will specifically look at users who begin searching, fail and abandon.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final Thoughts Section */}
      <section className="final-thoughts-section">
        <div className="final-thoughts-container">
          <div className="final-thoughts-left">
           
            
            <div className="final-thoughts-content">
              <div className="summary-section">
                <h3>SUMMARY</h3>
                <p>
                  To recap, I'd recommend A/B testing an MVP of Universal Search with the goal of 
                  decreasing the amount of time it takes to complete core actions (send money, request 
                  money, view/manage transactions).
                </p>
                <p>This MVP aims to solve core pain points that users in our target user segment face.</p>
                <p>
                  If the test returns positive results, I'd recommend PayPal expands the functionality of 
                  Universal Search and eventually rolls out the feature globally.
                </p>
                <p>Thank you for checking out this case study!</p>
              </div>
            </div>
          </div>
          
          <div className="final-thoughts-right">
            <div className="final-thoughts-image-container">
              <img 
                src="/images/PayPal-bg_files/unsplash-image-f2tNsobMisQ.jpg" 
                alt="PayPal 3D Icon" 
                className="final-thoughts-image"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Future Roadmap */}
      <section className="case-study-section bg-light">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <h2 className="section-title">Future Roadmap</h2>
              <p className="section-text">
                Building on this success, we're now working on implementing biometric authentication, 
                cryptocurrency support, and AI-powered fraud prevention to further enhance the PayPal experience.
              </p>
              
              <div className="cta-section">
                <h4>Interested in learning more about this project?</h4>
                <Button variant="primary" size="lg" href="mailto:rasmi@example.com">
                  Get in Touch
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Navigation */}
      <section className="case-study-navigation">
        <Container>
          <Row>
            <Col md={6}>
              <Link to="/case-study/uber-eats" className="nav-link-back">
                <i className="fas fa-arrow-left"></i>
                Previous Case Study
              </Link>
            </Col>
            <Col md={6} className="text-end">
              <Link to="/case-study/uber-kids" className="nav-link-next">
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

export default PayPalCaseStudy;
