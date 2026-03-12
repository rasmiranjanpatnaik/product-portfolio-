import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BackgroundAudio from './components/BackgroundAudio/BackgroundAudio';
import PageTransition from './components/PageTransition';
import './App.css';

const Home = React.lazy(() => import('./pages/Home'));
const Resume = React.lazy(() => import('./pages/Resume'));
const Contact = React.lazy(() => import('./pages/Contact'));
const UberEatsCaseStudy = React.lazy(() => import('./pages/UberEatsCaseStudy'));
const PayPalCaseStudy = React.lazy(() => import('./pages/PayPalCaseStudy'));
const UberKidsCaseStudy = React.lazy(() => import('./pages/UberKidsCaseStudy'));
const ArattaiCaseStudy = React.lazy(() => import('./pages/ArattaiCaseStudy'));

function App() {
  return (
    <Router>
      <div className="App">
        <BackgroundAudio />
        <Header />
        <Suspense
          fallback={
            <main className="page-loading">
              <div className="page-loading__spinner" aria-label="Loading" />
            </main>
          }
        >
          <Routes>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="/resume"
              element={
                <PageTransition>
                  <Resume />
                </PageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              }
            />
            <Route
              path="/case-study/uber-eats"
              element={
                <PageTransition>
                  <UberEatsCaseStudy />
                </PageTransition>
              }
            />
            <Route
              path="/case-study/paypal"
              element={
                <PageTransition>
                  <PayPalCaseStudy />
                </PageTransition>
              }
            />
            <Route
              path="/case-study/uber-kids"
              element={
                <PageTransition>
                  <UberKidsCaseStudy />
                </PageTransition>
              }
            />
            <Route
              path="/case-study/arattai"
              element={
                <PageTransition>
                  <ArattaiCaseStudy />
                </PageTransition>
              }
            />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
