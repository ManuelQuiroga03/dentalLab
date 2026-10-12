import React from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { PillButton } from '../ui/PillButton';
import { navLinks } from '../../config/clinic';
import { openWhatsApp } from '../../config/analytics';

interface NavbarProps {
  onScheduleClick?: () => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onScheduleClick,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  const handleCta = () => {
    if (onScheduleClick) {
      onScheduleClick();
    } else {
      openWhatsApp('navbar_desktop');
    }
  };

  return (
    <header className="relative z-20 flex items-center justify-between w-full px-6 md:px-8 lg:px-16 pt-6 md:pt-8 lg:pt-12 animate-[slideDown_0.7s_ease-out_0.1s_both]">
      <Logo />

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex items-center gap-8 lg:gap-12" aria-label="Navegación principal">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-lg text-white/60 hover:text-white transition-colors duration-200 font-normal"
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Desktop CTA Button */}
      <div className="hidden md:flex items-center">
        <PillButton label="Agendar Cita" onClick={handleCta} />
      </div>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden relative w-10 h-10 flex items-center justify-center text-white focus:outline-none z-50"
        aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={mobileMenuOpen}
      >
        <div className="relative w-6 h-6">
          <Menu
            className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
            }`}
          />
          <X
            className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
            }`}
          />
        </div>
      </button>
    </header>
  );
};
