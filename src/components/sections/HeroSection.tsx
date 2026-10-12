import React, { useState } from 'react';
import { Navbar } from '../layout/Navbar';
import { MobileMenu } from '../layout/MobileMenu';
import { HeroVideo } from './Hero/HeroVideo';
import { HeroContent } from './Hero/HeroContent';
import { HeroStats } from './Hero/HeroStats';

interface HeroSectionProps {
  onScheduleClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScheduleClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#5F9AD1]">
      {/* 1. Background Video */}
      <HeroVideo src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260710_141802_1d85412a-1df8-4993-8fc4-7400520bb1d1.mp4" />

      {/* 2. Top Navigation */}
      <Navbar 
        onScheduleClick={onScheduleClick}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* 3. Mobile Menu Overlay */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onScheduleClick={onScheduleClick}
      />

      {/* 4. Main Hero Typography & Callout */}
      <HeroContent />

      {/* 5. Bottom Stats & Figure */}
      <HeroStats />

      {/* Subtle Floating Catarina Accent */}
      <div className="hidden lg:flex absolute bottom-8 right-12 z-20 items-center gap-3 bg-white/15 backdrop-blur-md border border-white/30 rounded-full px-4 py-2 text-white text-xs font-light tracking-wide animate-[float_4s_ease-in-out_infinite]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#EBFA73] shadow-[0_0_8px_#EBFA73]" />
        <span>Espacio Libre de Estrés & Estética Dental Moderna</span>
      </div>
    </section>
  );
};
