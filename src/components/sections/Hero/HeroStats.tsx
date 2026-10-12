import React from 'react';

export const HeroStats: React.FC = () => {
  return (
    <div className="hidden md:block absolute bottom-0 left-4 lg:left-12 z-10 animate-[slideUp_0.9s_ease-out_0.8s_both] pointer-events-none">
      {/* Stat overlay badge */}
      <div className="absolute top-8 lg:top-12 left-3 lg:left-4 z-20 flex flex-col items-center bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-2 border border-white/60 shadow-lg">
        <span className="text-[#3D8CD5] text-2xl lg:text-4xl font-bold tracking-tight">
          98%
        </span>
        <span className="text-[#3D8CD5] text-xs lg:text-sm font-medium text-center max-w-[120px] leading-tight">
          loyal dental patients
        </span>
      </div>

      {/* Person image: transparent PNG */}
      <img
        src="https://soft-zoom-63098134.figma.site/_assets/v11/ecccf0c10f5c64505f8cb104b04c72aba0b85b0c.png?w=512"
        alt="Paciente con sonrisa sana"
        className="w-52 sm:w-64 lg:w-80 object-contain z-10 drop-shadow-2xl"
      />
    </div>
  );
};
