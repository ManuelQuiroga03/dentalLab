import React from 'react';
import { openWhatsApp } from '../../../config/analytics';

export const HeroContent: React.FC = () => {
  const handleOpenWhatsApp = () => {
    openWhatsApp('mobile_hero_badge', '¡Hola Dra.! Vi su consultorio recién inaugurado en Coccinella Dental Studio y me gustaría pedir informes.');
  };

  return (
    <div className="relative z-10 px-6 md:px-8 lg:px-16 max-w-4xl mt-8 md:mt-6 lg:mt-10 mx-auto md:mx-0 text-center md:text-left animate-[blurIn_0.9s_ease-out_0.3s_both]">
      <h1 className="text-white text-[72px] sm:text-6xl lg:text-[90px] xl:text-[100px] font-normal leading-[0.9] md:leading-[0.85] tracking-tight">
        Restore<br />
        Your True<br />
        <span className="inline-flex items-end gap-3 sm:gap-4 lg:gap-6">
          <span>Smile</span>
          {/* Avatar group (hidden on mobile) */}
          <span className="hidden md:inline-flex items-center -space-x-2 mb-[0.1em] align-middle">
            <img
              src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
              alt="Paciente feliz"
              className="w-10 h-10 lg:w-14 lg:h-14 rounded-full border-2 border-[#5F9AD1] object-cover shadow-sm"
            />
            <img
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
              alt="Paciente sonriendo"
              className="w-10 h-10 lg:w-14 lg:h-14 rounded-full border-2 border-[#5F9AD1] object-cover shadow-sm"
            />
            <span className="w-10 h-10 lg:w-14 lg:h-14 rounded-full border-2 border-[#5F9AD1] bg-white flex items-center justify-center text-[#3D8CD5] text-xs lg:text-base font-semibold shadow-sm">
              +2k
            </span>
          </span>
        </span>
      </h1>

      {/* Subtext (hidden on mobile) */}
      <p className="hidden md:block mt-5 lg:mt-6 max-w-md text-lg leading-tight">
        <span className="text-white/60">Using </span>
        <span className="text-white font-medium">advanced technology</span>
        <span className="text-white/60">, we deliver comprehensive treatments for a healthy, </span>
        <span className="text-white font-medium">confident smile.</span>
      </p>

      {/* Mobile quick action badge */}
      <div className="md:hidden mt-8 flex justify-center">
        <button 
          onClick={handleOpenWhatsApp}
          className="flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full px-5 py-2.5 text-sm font-medium shadow-sm hover:bg-white/30 transition-all cursor-pointer"
        >
          <span>Consultorio Recién Inaugurado en Zacatlán</span>
          <span className="w-2 h-2 rounded-full bg-[#EBFA73] animate-ping" />
        </button>
      </div>
    </div>
  );
};
