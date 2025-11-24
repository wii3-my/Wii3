import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandTicker } from './components/BrandTicker';
import { CaseStudies } from './components/InfluencerDiscovery';
import { LetsTalk } from './components/LetsTalk';
import { DashboardStats } from './components/DashboardStats';
import { Services } from './components/Services';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-wii3-dark font-sans selection:bg-wii3-red selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <BrandTicker />
        <CaseStudies />
        <LetsTalk />
        <DashboardStats />
        <Services />
        <FAQ />
      </main>
      <Contact />
    </div>
  );
};

export default App;