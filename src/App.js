import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/themeContext';

import { Header } from './components/common/header';
import { Footer } from './components/common/footer';

import { Home } from './pages/home';
import { Roadmap } from './pages/roadmap';
import { Portal } from './pages/portal';
import { Podcasts } from './pages/podcasts';
import { Innovative } from './pages/innovative';
import { PressKit } from './pages/pressKit';
import { RunNode } from './pages/runNode';
import { Future } from './pages/future';
import { Governor } from './pages/governor';
import { DAO } from './pages/DAO';
import { Staking } from './pages/staking';

import ScrollToTopButton from './components/common/scrollTop';
import Theme from './components/common/theme';

import './App.css';
import './assets/styles/style.css';
import './assets/styles/mobileView.css';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/metrices" element={<Portal />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/innovative" element={<Innovative />} />
          <Route path="/presskit" element={<PressKit />} />
          <Route path="/runnode" element={<RunNode />} />
          <Route path="/future" element={<Future />} />
          <Route path="/governance" element={<Governor />} />
          <Route path="/DAO" element={<DAO />} />
          <Route path="/staking" element={<Staking />} />
        </Routes>
        <Theme />
        <ScrollToTopButton />
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
