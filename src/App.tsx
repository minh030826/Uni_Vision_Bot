import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AdBanner from './components/AdBanner';
import Home from './pages/Home';
import Careers from './pages/Careers';
import CareerGuidanceTest from './pages/CareerGuidanceTest';
import WhatToStudy from './pages/WhatToStudy';
import Login from './pages/Login';
import Register from './pages/Register';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <div className="fixed top-0 left-0 right-0 z-50">
          <Header />
          <hr className="border-t border-gray-300" />
        </div>
        <div className="flex flex-1 mt-16">
          <AdBanner position="left" />
          <hr className="border-l border-gray-300" />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/career-guidance-test" element={<CareerGuidanceTest />} />
              <Route path="/what-to-study" element={<WhatToStudy />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
          <hr className="border-r border-gray-300" />
          <AdBanner position="right" />
        </div>
        <hr className="border-t border-gray-300" />
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
