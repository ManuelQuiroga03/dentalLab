import React from 'react';
import { clinicConfig } from '../../config/clinic';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white/60 py-12 px-6 md:px-12 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="text-white font-medium text-lg tracking-tight">
            {clinicConfig.name} {clinicConfig.tagline}
          </span>
          <span className="text-xs text-[#EBFA73] bg-white/10 px-2 py-0.5 rounded-full">
            {clinicConfig.doctorName}
          </span>
        </div>
        <p className="text-xs text-center md:text-right">
          © {new Date().getFullYear()} {clinicConfig.name} {clinicConfig.tagline}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
