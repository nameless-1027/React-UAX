import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Header } from './components/layout/header';
import { Home } from './pages/home';
import { Roadmap } from './pages/roadmap';
import { Footer } from './components/layout/footer';

import './App.css';
import './style.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roadmap" element={<Roadmap />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
