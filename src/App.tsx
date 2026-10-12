import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { TreatmentsSection } from './components/sections/TreatmentsSection';
import { HygieneSection } from './components/sections/HygieneSection';
import { LocationSection } from './components/sections/LocationSection';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-slate-50">
      <HeroSection />
      <AboutSection />
      <TreatmentsSection />
      <HygieneSection />
      <LocationSection />
      <Footer />
      {/* Vercel Analytics Tracker */}
      <Analytics />
    </main>
  );
};

export default App;
