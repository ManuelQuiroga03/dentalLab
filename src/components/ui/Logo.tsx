import React from 'react';
import { clinicConfig } from '../../config/clinic';

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', showSubtitle = true }) => {
  return (
    <a href="#" className={`flex items-center gap-3 group focus:outline-none ${className}`}>
      {/* Custom SVG Tooth & Ladybug / Catarina icon */}
      <div className="w-7 h-8 md:w-8 md:h-9 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <svg 
          className="w-full h-full" 
          viewBox="0 0 32 36" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Outer white tooth silhouette */}
          <path 
            d="M16 2C9 2 4 7 4 14C4 20.5 7 28 11.5 32.5C13.5 34.5 15.2 33 16 31C16.8 33 18.5 34.5 20.5 32.5C25 28 28 20.5 28 14C28 7 23 2 16 2Z" 
            fill="white"
          />
          {/* Inner blue ladybug stylized shape (#5F9AD1) */}
          <path 
            d="M16 7C11.5 7 8 10.5 8 15C8 19.5 10 24.5 13.5 28C14.5 29 15.5 28 16 26.5C16.5 28 17.5 29 18.5 28C22 24.5 24 19.5 24 15C24 10.5 20.5 7 16 7Z" 
            fill="#5F9AD1"
          />
          {/* Ladybug division line */}
          <line x1="16" y1="8" x2="16" y2="26" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
          {/* Ladybug signature dots */}
          <circle cx="12.5" cy="13.5" r="1.3" fill="white"/>
          <circle cx="19.5" cy="13.5" r="1.3" fill="white"/>
          <circle cx="11.5" cy="19.5" r="1.1" fill="white"/>
          <circle cx="20.5" cy="19.5" r="1.1" fill="white"/>
          {/* Little ladybug head accent with lime */}
          <circle cx="16" cy="6" r="1.8" fill="#EBFA73"/>
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="text-white text-xl md:text-2xl lg:text-[28px] font-medium tracking-tight leading-none">
          {clinicConfig.name}
        </span>
        {showSubtitle && (
          <span className="text-white/70 text-[10px] md:text-xs font-light tracking-widest uppercase mt-0.5">
            {clinicConfig.tagline}
          </span>
        )}
      </div>
    </a>
  );
};
