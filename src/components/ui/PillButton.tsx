import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface PillButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
  variant?: 'white' | 'dark';
}

export const PillButton: React.FC<PillButtonProps> = ({ 
  label, 
  onClick, 
  className = '',
  variant = 'white' 
}) => {
  const isWhite = variant === 'white';

  return (
    <button
      onClick={onClick}
      className={`group flex items-center gap-3 rounded-full px-5 py-3 text-lg font-medium transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/40 ${
        isWhite ? 'bg-white text-black' : 'bg-slate-900 text-white'
      } ${className}`}
    >
      <span>{label}</span>
      <span className="w-7 h-7 rounded-full bg-[#EBFA73] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shrink-0">
        <ArrowUpRight className="w-4 h-4 text-[#5F9AD1] stroke-[2.5]" />
      </span>
    </button>
  );
};
