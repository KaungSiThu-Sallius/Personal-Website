
import React, { useState } from 'react';
import { PortfolioTrack } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  const [portfolioTrack, setPortfolioTrack] = useState<PortfolioTrack>('all');

  return (
    <div className="min-h-screen flex flex-col">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-grow">
        <Hero onSelectTrack={setPortfolioTrack} />
        <Skills />
        <Education />
        <Projects track={portfolioTrack} onTrackChange={setPortfolioTrack} />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
