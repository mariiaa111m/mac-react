import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OfferMessage from './components/OfferMessage';
import PopularMeals from './components/PopularMeals';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';
import MenuPage from './components/MenuPage';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <OfferMessage />
              <PopularMeals />
              <WhyChooseUs />
            </>
          }
        />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;