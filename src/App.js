import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/themeContext';

import { Header } from './components/layout/header';
import { Home } from './pages/home';
import { Roadmap } from './pages/roadmap';
import { Footer } from './components/layout/footer';

import ScrollToTopButton from './components/common/scrollTop';
import Theme from './components/common/theme';

import './App.css';
import './style.css';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roadmap" element={<Roadmap />} />
        </Routes>
        <Theme />
        <ScrollToTopButton />
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
