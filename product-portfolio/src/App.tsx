import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import UberEatsCaseStudy from './pages/UberEatsCaseStudy';
import PayPalCaseStudy from './pages/PayPalCaseStudy';
import UberKidsCaseStudy from './pages/UberKidsCaseStudy';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-study/uber-eats" element={<UberEatsCaseStudy />} />
          <Route path="/case-study/paypal" element={<PayPalCaseStudy />} />
          <Route path="/case-study/uber-kids" element={<UberKidsCaseStudy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
