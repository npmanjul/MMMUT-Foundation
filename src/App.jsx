<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './common/Nav';
import Home from './pages/Home';
import Startup from './pages/Startups';
import About from './pages/About';
import Apply from './pages/Apply';
import Contact from './pages/Contact';

import './App.css'
import Footer from './common/Foot'


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/startup" element={<Startup />} />
        <Route path="/about" element={<About />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
